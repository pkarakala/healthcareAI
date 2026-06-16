import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { initAnalytics, track } from "./analytics.js";
import { analytics } from "../data/site.js";

const original = { ...analytics };

afterEach(() => {
  Object.assign(analytics, original);
  document.head.querySelectorAll("script").forEach((s) => s.remove());
  delete window.plausible;
  delete window.gtag;
  delete window.dataLayer;
  vi.restoreAllMocks();
});

describe("track()", () => {
  it("does nothing when analytics is disabled", () => {
    analytics.enabled = false;
    window.plausible = vi.fn();
    track("demo_submitted");
    expect(window.plausible).not.toHaveBeenCalled();
  });

  it("sends a Plausible event when enabled", () => {
    analytics.enabled = true;
    analytics.provider = "plausible";
    window.plausible = vi.fn();
    track("demo_submitted", { mode: "live" });
    expect(window.plausible).toHaveBeenCalledWith("demo_submitted", {
      props: { mode: "live" },
    });
  });

  it("sends a GA4 event when configured for ga4", () => {
    analytics.enabled = true;
    analytics.provider = "ga4";
    window.gtag = vi.fn();
    track("demo_submitted", { mode: "live" });
    expect(window.gtag).toHaveBeenCalledWith("event", "demo_submitted", {
      mode: "live",
    });
  });
});

describe("initAnalytics()", () => {
  it("injects nothing when disabled", () => {
    analytics.enabled = false;
    initAnalytics();
    expect(document.querySelector("script[data-domain]")).toBeNull();
  });

  it("injects the Plausible script with the configured domain when enabled", () => {
    analytics.enabled = true;
    analytics.provider = "plausible";
    analytics.domain = "example.com";
    initAnalytics();
    const script = document.querySelector('script[data-domain="example.com"]');
    expect(script).not.toBeNull();
    expect(typeof window.plausible).toBe("function");
  });
});
