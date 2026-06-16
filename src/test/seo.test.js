import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

let html = "";
beforeAll(() => {
  html = readFileSync(resolve(process.cwd(), "index.html"), "utf-8");
});

describe("index.html SEO & social meta", () => {
  it("has a title and meta description", () => {
    expect(html).toMatch(/<title>.*RxClear.*<\/title>/);
    expect(html).toMatch(/<meta\s+name="description"/);
  });

  it("has a canonical URL and theme-color", () => {
    expect(html).toMatch(/rel="canonical"\s+href="https:\/\/pkarakala\.github\.io\/healthcareAI\/"/);
    expect(html).toMatch(/name="theme-color"/);
  });

  it("has an SVG favicon", () => {
    expect(html).toMatch(/rel="icon"[^>]*type="image\/svg\+xml"[^>]*href="\/favicon\.svg"/);
  });

  it("has the core Open Graph tags with an absolute image URL", () => {
    for (const prop of ["og:type", "og:title", "og:description", "og:url", "og:image"]) {
      expect(html).toContain(`property="${prop}"`);
    }
    expect(html).toMatch(
      /property="og:image"\s+content="https:\/\/pkarakala\.github\.io\/healthcareAI\/og-image\.png"/
    );
  });

  it("has Twitter summary_large_image card tags", () => {
    expect(html).toMatch(/name="twitter:card"\s+content="summary_large_image"/);
    expect(html).toContain('name="twitter:image"');
  });
});

describe("security.html SEO & social meta", () => {
  let page = "";
  beforeAll(() => {
    page = readFileSync(resolve(process.cwd(), "security.html"), "utf-8");
  });

  it("has a security-specific title and its own canonical", () => {
    expect(page).toMatch(/<title>.*Security.*RxClear.*<\/title>/);
    expect(page).toMatch(
      /rel="canonical"\s+href="https:\/\/pkarakala\.github\.io\/healthcareAI\/security\.html"/
    );
  });

  it("has Open Graph and Twitter card tags", () => {
    expect(page).toContain('property="og:title"');
    expect(page).toMatch(/name="twitter:card"\s+content="summary_large_image"/);
  });
});

describe("integrations.html SEO & social meta", () => {
  let page = "";
  beforeAll(() => {
    page = readFileSync(resolve(process.cwd(), "integrations.html"), "utf-8");
  });

  it("has an integrations-specific title and its own canonical", () => {
    expect(page).toMatch(/<title>.*Integrations.*RxClear.*<\/title>/);
    expect(page).toMatch(
      /rel="canonical"\s+href="https:\/\/pkarakala\.github\.io\/healthcareAI\/integrations\.html"/
    );
  });

  it("has Open Graph and Twitter card tags", () => {
    expect(page).toContain('property="og:title"');
    expect(page).toMatch(/name="twitter:card"\s+content="summary_large_image"/);
  });
});

describe("pricing.html SEO & social meta", () => {
  let page = "";
  beforeAll(() => {
    page = readFileSync(resolve(process.cwd(), "pricing.html"), "utf-8");
  });

  it("has a pricing-specific title and its own canonical", () => {
    expect(page).toMatch(/<title>.*Pricing.*RxClear.*<\/title>/);
    expect(page).toMatch(
      /rel="canonical"\s+href="https:\/\/pkarakala\.github\.io\/healthcareAI\/pricing\.html"/
    );
  });

  it("has Open Graph and Twitter card tags", () => {
    expect(page).toContain('property="og:title"');
    expect(page).toMatch(/name="twitter:card"\s+content="summary_large_image"/);
  });
});
