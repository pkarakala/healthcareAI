import { security } from "../data/site.js";

const HOME = import.meta.env.BASE_URL;

export default function Security() {
  return (
    <section id="security" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Security &amp; compliance</h2>
        <p className="section-sub">Designed to clear procurement, not get stuck in it.</p>
        <div className="security-grid">
          {security.map((item) => (
            <div key={item.title} className="security-item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
        <p className="security-more">
          <a href={`${HOME}security.html`}>See full security &amp; compliance details →</a>
        </p>
      </div>
    </section>
  );
}
