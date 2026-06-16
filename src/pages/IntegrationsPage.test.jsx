import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import IntegrationsPage from "./IntegrationsPage.jsx";
import { integrationsDetails } from "../data/site.js";

const BASE = import.meta.env.BASE_URL;

describe("IntegrationsPage", () => {
  it("renders every category with its description and item chips", () => {
    render(<IntegrationsPage />);
    integrationsDetails.categories.forEach((cat) => {
      const heading = screen.getByRole("heading", { name: cat.heading });
      const card = heading.closest(".detail-card");
      expect(within(card).getByText(cat.description)).toBeInTheDocument();
      cat.items.forEach((item) =>
        expect(within(card).getByText(item)).toBeInTheDocument()
      );
    });
  });

  it("renders the setup steps in order", () => {
    render(<IntegrationsPage />);
    integrationsDetails.onboarding.forEach((step, i) => {
      expect(screen.getByText(step.title)).toBeInTheDocument();
      expect(screen.getByText(String(i + 1))).toBeInTheDocument();
    });
  });

  it("points its demo CTA back to the homepage demo section", () => {
    render(<IntegrationsPage />);
    expect(screen.getByRole("link", { name: /ask about your system/i })).toHaveAttribute(
      "href",
      `${BASE}#demo`
    );
  });
});
