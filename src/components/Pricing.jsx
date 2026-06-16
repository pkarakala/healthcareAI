import { pricing } from "../data/site.js";

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 className="section-title">Simple, predictable pricing</h2>
        <p className="section-sub">No surprise invoices. Start free, scale as you grow.</p>
        <div className="pricing-grid">
          {pricing.map((plan) => (
            <div key={plan.name} className={`price-card${plan.featured ? " featured" : ""}`}>
              {plan.featured && <span className="popular">Most popular</span>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amt">{plan.amount}</span>
                {plan.per && <span className="per">{plan.per}</span>}
              </div>
              <ul>
                {plan.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
              <a
                href="#demo"
                className={`btn ${plan.featured ? "btn-primary" : "btn-ghost"}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
