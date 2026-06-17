import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import LegalPage from "./LegalPage.jsx";
import { legalDocs, termsDoc } from "../data/legal.js";

describe("LegalPage", () => {
  it("renders the document title, date, and all section headings", () => {
    render(<LegalPage doc={termsDoc} />);
    expect(screen.getByRole("heading", { level: 1, name: termsDoc.title })).toBeInTheDocument();
    expect(screen.getByText(new RegExp(termsDoc.updated))).toBeInTheDocument();
    termsDoc.sections.forEach((sec) =>
      expect(screen.getByRole("heading", { name: sec.heading })).toBeInTheDocument()
    );
  });

  it("shows the draft review notice while a doc is marked draft", () => {
    render(<LegalPage doc={termsDoc} />);
    expect(screen.getByRole("note")).toHaveTextContent(/not been reviewed by legal counsel/i);
  });

  it("every legal doc has a slug, title, intro, and sections", () => {
    legalDocs.forEach((doc) => {
      expect(doc.slug).toBeTruthy();
      expect(doc.title).toBeTruthy();
      expect(doc.intro).toBeTruthy();
      expect(doc.sections.length).toBeGreaterThan(0);
    });
  });
});
