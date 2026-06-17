import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

const HOME = import.meta.env.BASE_URL;

export default function LegalPage({ doc }) {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav hrefPrefix={HOME} />
      <main id="main" tabIndex={-1}>
        <header className="page-header">
          <div className="container">
            <a href={HOME} className="back-link">← Back to home</a>
            <span className="eyebrow">Legal</span>
            <h1>{doc.title}</h1>
            <p className="legal-updated">Last updated: {doc.updated}</p>
          </div>
        </header>

        <section className="section">
          <div className="container container-narrow">
            {doc.draft && (
              <p className="legal-notice" role="note">
                ⚠️ This document is a template and has not been reviewed by legal
                counsel. Review and finalize before publishing.
              </p>
            )}

            <p className="legal-intro">{doc.intro}</p>

            {doc.sections.map((sec) => (
              <div key={sec.heading} className="legal-section">
                <h2>{sec.heading}</h2>
                {sec.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                {sec.list && (
                  <ul>
                    {sec.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
