import { features } from "../data/site.js";

export default function Features() {
  return (
    <section id="features" className="section section-alt">
      <div className="container">
        <h2 className="section-title">A platform, not a one-trick tool</h2>
        <p className="section-sub">Available now, with more on the way.</p>
        <div className="feature-grid">
          {features.map((f) => (
            <div key={f.title} className={`feature-card${f.live ? " live" : ""}`}>
              <span className={`feature-tag${f.live ? "" : " soon"}`}>{f.tag}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
