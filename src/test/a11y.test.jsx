import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App.jsx";
import Nav from "../components/Nav.jsx";
import DemoForm from "../components/DemoForm.jsx";

describe("accessibility", () => {
  it("renders a skip-to-content link targeting the main landmark", () => {
    render(<App />);
    const skip = screen.getByRole("link", { name: /skip to content/i });
    expect(skip).toHaveAttribute("href", "#main");
  });

  it("labels the primary navigation landmark", () => {
    render(<Nav />);
    expect(screen.getByRole("navigation", { name: /primary/i })).toBeInTheDocument();
  });

  it("gives every demo form field an accessible name", () => {
    render(<DemoForm />);
    expect(screen.getByRole("textbox", { name: "Full name" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Work email" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Pharmacy or practice" })).toBeInTheDocument();
  });
});
