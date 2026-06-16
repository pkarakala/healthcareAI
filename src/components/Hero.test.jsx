import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero.jsx";
import { hero } from "../data/site.js";

describe("Hero", () => {
  it("renders the eyebrow and accented headline word", () => {
    render(<Hero />);
    expect(screen.getByText(hero.eyebrow)).toBeInTheDocument();
    expect(screen.getByText(hero.titleAccent)).toBeInTheDocument();
  });

  it("renders every drug in the live PA queue with a status badge", () => {
    render(<Hero />);
    hero.queue.forEach((row) => {
      expect(screen.getByText(row.drug)).toBeInTheDocument();
      expect(screen.getByText(row.status)).toBeInTheDocument();
    });
  });

  it("renders both hero call-to-action buttons", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /book a demo/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /calculate your savings/i })).toBeInTheDocument();
  });
});
