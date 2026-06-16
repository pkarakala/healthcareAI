import { trust } from "../data/site.js";

export default function Trust() {
  return (
    <section className="trust">
      <div className="container">
        <p className="trust-label">Built for healthcare-grade trust</p>
        <div className="trust-badges">
          {trust.badges.map((badge) => (
            <div key={badge} className="trust-badge">
              {badge}
            </div>
          ))}
        </div>
        <p className="trust-label">Integrates with the systems you already use</p>
        <div className="logo-row">
          {trust.logos.map((logo) => (
            <span key={logo} className="logo-chip">
              {logo}
            </span>
          ))}
        </div>
        <blockquote className="quote">
          “{trust.quote}”
          <cite>{trust.quoteCite}</cite>
        </blockquote>
      </div>
    </section>
  );
}
