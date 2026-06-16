import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DemoForm from "./DemoForm.jsx";
import { demo } from "../data/site.js";
import { track } from "../lib/analytics.js";

vi.mock("../lib/analytics.js", () => ({ track: vi.fn() }));

function fill({ name = "Jane Doe", email = "jane@clinic.com", org = "Acme Pharmacy" } = {}) {
  fireEvent.change(screen.getByPlaceholderText("Full name"), { target: { value: name } });
  fireEvent.change(screen.getByPlaceholderText("Work email"), { target: { value: email } });
  fireEvent.change(screen.getByPlaceholderText("Pharmacy or practice"), { target: { value: org } });
}

describe("DemoForm", () => {
  beforeEach(() => {
    demo.endpoint = "https://formspree.io/f/test";
    global.fetch = vi.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("shows a validation error when fields are empty", () => {
    render(<DemoForm />);
    fireEvent.click(screen.getByRole("button", { name: /request demo/i }));
    expect(screen.getByText(/fill in every field/i)).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("submits to the configured endpoint and shows success", async () => {
    render(<DemoForm />);
    fill();
    fireEvent.click(screen.getByRole("button", { name: /request demo/i }));

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    const [url, options] = global.fetch.mock.calls[0];
    expect(url).toBe("https://formspree.io/f/test");
    const body = JSON.parse(options.body);
    expect(body).toMatchObject({
      name: "Jane Doe",
      email: "jane@clinic.com",
      organization: "Acme Pharmacy",
    });
    expect(await screen.findByText(/Thanks Jane Doe/i)).toBeInTheDocument();
    expect(track).toHaveBeenCalledWith("demo_submitted", { mode: "live" });
  });

  it("shows an error message when the server rejects", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ errors: [{ message: "Form not found" }] }),
      })
    );
    render(<DemoForm />);
    fill();
    fireEvent.click(screen.getByRole("button", { name: /request demo/i }));
    expect(await screen.findByText(/Form not found/i)).toBeInTheDocument();
  });

  it("shows a network error when fetch throws", async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error("offline")));
    render(<DemoForm />);
    fill();
    fireEvent.click(screen.getByRole("button", { name: /request demo/i }));
    expect(await screen.findByText(/network error/i)).toBeInTheDocument();
  });

  it("silently drops bot submissions that fill the honeypot", () => {
    const { container } = render(<DemoForm />);
    fill();
    const honeypot = container.querySelector('input[name="company"]');
    fireEvent.change(honeypot, { target: { value: "bot-filled" } });
    fireEvent.click(screen.getByRole("button", { name: /request demo/i }));
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("falls back to demo mode when no endpoint is configured", () => {
    demo.endpoint = "";
    render(<DemoForm />);
    fill();
    fireEvent.click(screen.getByRole("button", { name: /request demo/i }));
    expect(screen.getByText(/Demo mode: not sent/i)).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
  });
});
