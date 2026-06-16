import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Trust from "./Trust.jsx";
import HowItWorks from "./HowItWorks.jsx";
import Features from "./Features.jsx";
import Integrations from "./Integrations.jsx";
import Pricing from "./Pricing.jsx";
import Security from "./Security.jsx";
import Footer from "./Footer.jsx";
import {
  trust,
  steps,
  features,
  integrations,
  pricing,
  security,
} from "../data/site.js";

describe("Trust", () => {
  it("renders all trust badges and integration logos", () => {
    render(<Trust />);
    trust.badges.forEach((b) => expect(screen.getByText(b)).toBeInTheDocument());
    trust.logos.forEach((l) => expect(screen.getByText(l)).toBeInTheDocument());
  });
});

describe("HowItWorks", () => {
  it("renders each step with a 1-based number", () => {
    render(<HowItWorks />);
    steps.forEach((step, i) => {
      expect(screen.getByText(step.title)).toBeInTheDocument();
      expect(screen.getByText(String(i + 1))).toBeInTheDocument();
    });
  });
});

describe("Features", () => {
  it("renders every feature and marks exactly the live one", () => {
    const { container } = render(<Features />);
    features.forEach((f) => expect(screen.getByText(f.title)).toBeInTheDocument());
    const liveCards = container.querySelectorAll(".feature-card.live");
    expect(liveCards).toHaveLength(features.filter((f) => f.live).length);
  });
});

describe("Integrations", () => {
  it("renders each integration column heading and its items", () => {
    render(<Integrations />);
    integrations.forEach((col) => {
      expect(screen.getByText(col.heading)).toBeInTheDocument();
      col.items.forEach((item) =>
        expect(screen.getAllByText(item).length).toBeGreaterThan(0)
      );
    });
  });
});

describe("Pricing", () => {
  it("renders all plans and highlights exactly one as most popular", () => {
    const { container } = render(<Pricing />);
    pricing.forEach((p) => expect(screen.getByText(p.name)).toBeInTheDocument());
    expect(screen.getByText(/most popular/i)).toBeInTheDocument();
    expect(container.querySelectorAll(".price-card.featured")).toHaveLength(
      pricing.filter((p) => p.featured).length
    );
  });
});

describe("Security", () => {
  it("renders every security item", () => {
    render(<Security />);
    security.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });
});

describe("Footer", () => {
  it("renders the compliance note", () => {
    const { container } = render(<Footer />);
    expect(within(container).getByText(/HIPAA compliant/i)).toBeInTheDocument();
  });

  it("links to the standalone pages", () => {
    render(<Footer />);
    const base = import.meta.env.BASE_URL;
    expect(screen.getByRole("link", { name: /^Pricing$/i })).toHaveAttribute("href", `${base}pricing.html`);
    expect(screen.getByRole("link", { name: /^Integrations$/i })).toHaveAttribute("href", `${base}integrations.html`);
    expect(screen.getByRole("link", { name: /security & compliance/i })).toHaveAttribute("href", `${base}security.html`);
  });
});
