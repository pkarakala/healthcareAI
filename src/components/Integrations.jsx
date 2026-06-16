import { integrations } from "../data/site.js";

export default function Integrations() {
  return (
    <section id="integrations" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Integrations</h2>
        <p className="section-sub">
          The first thing decision-makers check. We connect to all of it.
        </p>
        <div className="integration-cols">
          {integrations.map((col) => (
            <div key={col.heading} className="integration-col">
              <h3>{col.heading}</h3>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
