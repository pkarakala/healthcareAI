import { steps } from "../data/site.js";

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="container">
        <h2 className="section-title">How it works</h2>
        <p className="section-sub">Three steps. No new workflow to learn.</p>
        <div className="steps">
          {steps.map((step, i) => (
            <div key={step.title} className="step">
              <div className="step-num">{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
