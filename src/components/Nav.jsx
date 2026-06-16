import { brand, nav } from "../data/site.js";

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">{brand.mark}</span>
          {brand.rest}
        </a>
        <nav className="nav-links">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
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
