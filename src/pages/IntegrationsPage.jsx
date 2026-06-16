import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import { integrationsDetails } from "../data/site.js";

const HOME = import.meta.env.BASE_URL;

export default function IntegrationsPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav hrefPrefix={HOME} />
      <main id="main" tabIndex={-1}>
        <header className="page-header">
          <div className="container">
            <a href={HOME} className="back-link">← Back to home</a>
            <span className="eyebrow">Integrations</span>
            <h1>Works with the systems you already use.</h1>
            <p className="lead">{integrationsDetails.intro}</p>
          </div>
        </header>

        <section className="section">
          <div className="container">
            <div className="detail-grid">
              {integrationsDetails.categories.map((cat) => (
                <div key={cat.heading} className="detail-card">
                  <h2>{cat.heading}</h2>
                  <p className="int-desc">{cat.description}</p>
                  <div className="int-chips">
                    {cat.items.map((item) => (
                      <span key={item} className="int-chip">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <h2 className="section-title">How setup works</h2>
            <p className="section-sub">Live in days, not quarters.</p>
            <div className="steps">
              {integrationsDetails.onboarding.map((step, i) => (
                <div key={step.title} className="step">
                  <div className="step-num">{i + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container cta-inner">
            <div className="cta-copy">
              <h2>Don't see your system?</h2>
              <p>
                We're always adding connections. Tell us what you run and we'll
                confirm support on a quick call.
              </p>
            </div>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href={`${HOME}#demo`} className="btn btn-primary" data-cta="integrations_page">
                Ask about your system
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
