import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import SecurityPage from "./SecurityPage.jsx";
import { securityDetails } from "../data/site.js";

const BASE = import.meta.env.BASE_URL;

describe("SecurityPage", () => {
  it("renders every detail section with its points", () => {
    render(<SecurityPage />);
    securityDetails.sections.forEach((sec) => {
      const heading = screen.getByRole("heading", { name: sec.title });
      const card = heading.closest(".detail-card");
      sec.points.forEach((p) =>
        expect(within(card).getByText(p)).toBeInTheDocument()
      );
    });
  });

  it("has a skip link and a back-to-home link", () => {
    render(<SecurityPage />);
    expect(screen.getByRole("link", { name: /skip to content/i })).toHaveAttribute("href", "#main");
    expect(screen.getAllByRole("link", { name: /back to home/i })[0]).toHaveAttribute("href", BASE);
  });

  it("points its demo CTA back to the homepage demo section", () => {
    render(<SecurityPage />);
    const cta = screen.getByRole("link", { name: /request a demo/i });
    expect(cta).toHaveAttribute("href", `${BASE}#demo`);
  });
});
