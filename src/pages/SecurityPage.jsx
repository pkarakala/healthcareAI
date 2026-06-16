import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import { securityDetails } from "../data/site.js";

const HOME = import.meta.env.BASE_URL; // "/healthcareAI/"

export default function SecurityPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav hrefPrefix={HOME} />
      <main id="main" tabIndex={-1}>
        <header className="page-header">
          <div className="container">
            <a href={HOME} className="back-link">← Back to home</a>
            <span className="eyebrow">Security &amp; compliance</span>
            <h1>Security your team can sign off on.</h1>
            <p className="lead">{securityDetails.intro}</p>
          </div>
        </header>

        <section className="section">
          <div className="container">
            <div className="detail-grid">
              {securityDetails.sections.map((sec) => (
                <div key={sec.title} className="detail-card">
                  <h2>{sec.title}</h2>
                  <ul>
                    {sec.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container cta-inner">
            <div className="cta-copy">
              <h2>Need our security package or a BAA?</h2>
              <p>
                We'll share our SOC 2 report, security documentation, and BAA
                under NDA. Book a call and we'll get procurement what it needs.
              </p>
            </div>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href={`${HOME}#demo`} className="btn btn-primary" data-cta="security_page">
                Request a demo
              </a>
              <a href={HOME} className="btn btn-ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.5)" }}>
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
