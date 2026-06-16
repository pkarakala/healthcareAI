import { useEffect, useState } from "react";
import { brand, nav } from "../data/site.js";

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = nav.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry nearest the top that is currently intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">{brand.mark}</span>
          {brand.rest}
        </a>
        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href.slice(1) ? "active" : ""}
              aria-current={active === item.href.slice(1) ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#demo" className="btn btn-primary btn-sm">
          Book a demo
        </a>
      </div>
    </header>
  );
}
