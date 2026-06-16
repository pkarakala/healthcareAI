import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Nav from "./Nav.jsx";
import { nav, brand } from "../data/site.js";

describe("Nav", () => {
  it("renders the brand and every nav link from config", () => {
    render(<Nav />);
    expect(screen.getByText(brand.rest)).toBeInTheDocument();
    nav.forEach((item) => {
      const link = screen.getByRole("link", { name: item.label });
      expect(link).toHaveAttribute("href", item.href);
    });
  });

  it("renders a Book a demo CTA pointing at the demo section", () => {
    render(<Nav />);
    const cta = screen.getByRole("link", { name: /book a demo/i });
    expect(cta).toHaveAttribute("href", "#demo");
  });
});
