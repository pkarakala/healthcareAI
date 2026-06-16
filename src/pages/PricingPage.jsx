import Nav from "../components/Nav.jsx";
import Pricing from "../components/Pricing.jsx";
import Footer from "../components/Footer.jsx";
import { pricingDetails, pricing } from "../data/site.js";

const HOME = import.meta.env.BASE_URL;

function Cell({ value }) {
  if (value === true) return <span className="yes" aria-label="Included">✓</span>;
  if (value === false) return <span className="no" aria-label="Not included">—</span>;
  return <span>{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav hrefPrefix={HOME} />
      <main id="main" tabIndex={-1}>
        <header className="page-header">
          <div className="container">
            <a href={HOME} className="back-link">← Back to home</a>
            <span className="eyebrow">Pricing</span>
            <h1>Pricing that scales with your volume.</h1>
            <p className="lead">{pricingDetails.intro}</p>
          </div>
        </header>

        <Pricing hrefPrefix={HOME} />

        <section className="section section-alt">
          <div className="container">
            <h2 className="section-title">Compare plans</h2>
            <p className="section-sub">Every plan in detail, side by side.</p>
            <div className="compare-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    {pricing.map((p) => (
                      <th scope="col" key={p.name}>{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricingDetails.comparison.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      <td><Cell value={row.starter} /></td>
                      <td><Cell value={row.growth} /></td>
                      <td><Cell value={row.enterprise} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Pricing FAQ</h2>
            <p className="section-sub">The questions buyers ask before they commit.</p>
            <div className="faq">
              {pricingDetails.faqs.map((item) => (
                <details key={item.q} className="faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container cta-inner">
            <div className="cta-copy">
              <h2>Ready to see it on your own PAs?</h2>
              <p>Book a 20-minute demo and we'll map a plan to your volume.</p>
            </div>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href={`${HOME}#demo`} className="btn btn-primary" data-cta="pricing_page">
                Request a demo
              </a>
              <a
                href={HOME}
                className="btn btn-ghost"
                style={{ color: "#fff", borderColor: "rgba(255,255,255,0.5)" }}
              >
                Back to home
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
