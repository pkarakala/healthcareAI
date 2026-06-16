import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DemoForm from "./DemoForm.jsx";
import { demo } from "../data/site.js";
import { track } from "../lib/analytics.js";

vi.mock("../lib/analytics.js", () => ({ track: vi.fn() }));

function fillStep1({ name = "Jane Doe", email = "jane@clinic.com", org = "Acme Pharmacy" } = {}) {
  fireEvent.change(screen.getByPlaceholderText("Full name"), { target: { value: name } });
  fireEvent.change(screen.getByPlaceholderText("Work email"), { target: { value: email } });
  fireEvent.change(screen.getByPlaceholderText("Pharmacy or practice"), { target: { value: org } });
}

function goToStep2(opts) {
  fillStep1(opts);
  fireEvent.click(screen.getByRole("button", { name: /next/i }));
}

describe("DemoForm (multi-step)", () => {
  beforeEach(() => {
    demo.endpoint = "https://formspree.io/f/test";
    global.fetch = vi.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.mocked(track).mockClear();
  });

  it("blocks advancing past step 1 when contact fields are empty", () => {
    render(<DemoForm />);
    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    expect(screen.getByText(/fill in every field/i)).toBeInTheDocument();
    // still on step 1 (no Request demo button yet)
    expect(screen.queryByRole("button", { name: /request demo/i })).toBeNull();
  });

  it("advances to step 2 and can go back", () => {
    render(<DemoForm />);
    goToStep2();
    expect(screen.getByRole("button", { name: /request demo/i })).toBeInTheDocument();
    expect(track).toHaveBeenCalledWith("demo_step_completed", { step: 1 });
    fireEvent.click(screen.getByRole("button", { name: /back/i }));
    expect(screen.getByPlaceholderText("Full name")).toBeInTheDocument();
  });

  it("submits all fields to the endpoint and shows success", async () => {
    render(<DemoForm />);
    goToStep2();
    fireEvent.change(screen.getByLabelText(/your role/i), { target: { value: "Pharmacist" } });
    fireEvent.click(screen.getByRole("button", { name: /request demo/i }));

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    const [url, options] = global.fetch.mock.calls[0];
    expect(url).toBe("https://formspree.io/f/test");
    const body = JSON.parse(options.body);
    expect(body).toMatchObject({
      name: "Jane Doe",
      email: "jane@clinic.com",
      organization: "Acme Pharmacy",
      role: "Pharmacist",
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
    goToStep2();
    fireEvent.click(screen.getByRole("button", { name: /request demo/i }));
    expect(await screen.findByText(/Form not found/i)).toBeInTheDocument();
  });

  it("shows a network error when fetch throws", async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error("offline")));
    render(<DemoForm />);
    goToStep2();
    fireEvent.click(screen.getByRole("button", { name: /request demo/i }));
    expect(await screen.findByText(/network error/i)).toBeInTheDocument();
  });

  it("silently drops bot submissions that fill the honeypot", () => {
    const { container } = render(<DemoForm />);
    goToStep2();
    const honeypot = container.querySelector('input[name="company"]');
    fireEvent.change(honeypot, { target: { value: "bot-filled" } });
    fireEvent.click(screen.getByRole("button", { name: /request demo/i }));
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("falls back to demo mode when no endpoint is configured", () => {
    demo.endpoint = "";
    render(<DemoForm />);
    goToStep2();
    fireEvent.click(screen.getByRole("button", { name: /request demo/i }));
    expect(screen.getByText(/Demo mode: not sent/i)).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
  });
});
