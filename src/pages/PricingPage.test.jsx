import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PricingPage from "./PricingPage.jsx";
import { pricing, pricingDetails } from "../data/site.js";

const BASE = import.meta.env.BASE_URL;

describe("PricingPage", () => {
  it("renders all plan names and the comparison rows", () => {
    render(<PricingPage />);
    pricing.forEach((p) =>
      expect(screen.getAllByText(p.name).length).toBeGreaterThan(0)
    );
    pricingDetails.comparison.forEach((row) =>
      expect(screen.getByText(row.label)).toBeInTheDocument()
    );
  });

  it("renders every FAQ question", () => {
    render(<PricingPage />);
    pricingDetails.faqs.forEach((f) =>
      expect(screen.getByText(f.q)).toBeInTheDocument()
    );
  });

  it("renders a comparison table with a column per plan", () => {
    render(<PricingPage />);
    const columnHeaders = screen.getAllByRole("columnheader");
    // "Feature" + one per plan
    expect(columnHeaders).toHaveLength(pricing.length + 1);
  });

  it("points its demo CTA back to the homepage demo section", () => {
    render(<PricingPage />);
    expect(screen.getByRole("link", { name: /request a demo/i })).toHaveAttribute(
      "href",
      `${BASE}#demo`
    );
  });
});
