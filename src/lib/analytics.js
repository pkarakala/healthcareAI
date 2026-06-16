import { analytics } from "../data/site.js";

// Loads the configured analytics provider (only when enabled) and wires up
// delegated tracking for "Book a demo" CTA clicks. Safe to call once at startup.
export function initAnalytics() {
  if (typeof window === "undefined" || !analytics.enabled) return;

  if (analytics.provider === "plausible" && analytics.domain) {
    // Queue stub so events fired before the script loads aren't lost.
    window.plausible =
      window.plausible ||
      function () {
        (window.plausible.q = window.plausible.q || []).push(arguments);
      };
    const s = document.createElement("script");
    s.defer = true;
    s.setAttribute("data-domain", analytics.domain);
    s.src = analytics.scriptSrc || "https://plausible.io/js/script.js";
    document.head.appendChild(s);
  } else if (analytics.provider === "ga4" && analytics.measurementId) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${analytics.measurementId}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", analytics.measurementId);
  }

  // Track every "Book a demo" CTA click, regardless of which section it's in.
  document.addEventListener("click", (e) => {
    const cta = e.target.closest?.('a[href="#demo"]');
    if (cta) track("demo_cta_click", { location: cta.dataset.cta || "unknown" });
  });
}

// Fire a custom event. No-ops when analytics is disabled or the provider
// script hasn't loaded yet.
export function track(event, props = {}) {
  if (!analytics.enabled || typeof window === "undefined") return;
  if (analytics.provider === "plausible") {
    window.plausible?.(event, { props });
  } else if (analytics.provider === "ga4") {
    window.gtag?.("event", event, props);
  }
}
