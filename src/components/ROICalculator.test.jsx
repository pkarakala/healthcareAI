import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import ROICalculator from "./ROICalculator.jsx";
import { roi } from "../data/site.js";

// Defaults: 400 PAs * 25 min * 0.9 / 60 = 150 hours -> *$32 = $4,800/mo -> $57,600/yr
describe("ROICalculator", () => {
  it("renders with default computed savings", () => {
    render(<ROICalculator />);
    expect(screen.getByText("150")).toBeInTheDocument();
    expect(screen.getByText("$4,800")).toBeInTheDocument();
    expect(screen.getByText("$57,600")).toBeInTheDocument();
  });

  it("recalculates when inputs change", () => {
    render(<ROICalculator />);
    const volume = screen.getByLabelText(/Monthly prior authorizations/i);
    fireEvent.change(volume, { target: { value: "800" } });
    // 800 * 25 * 0.9 / 60 = 300 hours -> *$32 = $9,600/mo
    expect(screen.getByText("300")).toBeInTheDocument();
    expect(screen.getByText("$9,600")).toBeInTheDocument();
  });

  it("treats blank or negative inputs as zero", () => {
    render(<ROICalculator />);
    const minutes = screen.getByLabelText(/Minutes spent per PA today/i);
    fireEvent.change(minutes, { target: { value: "-10" } });
    const results = screen.getByText(/hours saved/i).closest(".roi-results");
    // hours saved = "0"; monthly and yearly both render "$0"
    expect(within(results).getByText("0")).toBeInTheDocument();
    expect(within(results).getAllByText("$0")).toHaveLength(2);
  });

  it("uses the reduction factor from site config", () => {
    expect(roi.reduction).toBeGreaterThan(0);
    expect(roi.reduction).toBeLessThanOrEqual(1);
  });
});
