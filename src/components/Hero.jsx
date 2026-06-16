import { useEffect, useState } from "react";
import { hero } from "../data/site.js";

function useCountUp(target, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

export default function Hero() {
  const count = useCountUp(hero.counterTarget);

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>
            {hero.titleBefore}
            <span className="accent">{hero.titleAccent}</span>
            {hero.titleAfter}
          </h1>
          <p className="lead">{hero.lead}</p>
          <div className="hero-cta">
            <a href="#demo" className="btn btn-primary">
              Book a demo
            </a>
            <a href="#roi" className="btn btn-ghost">
              Calculate your savings
            </a>
          </div>
          <div className="hero-counter">
            <div className="counter-num">{count.toLocaleString()}</div>
            <div className="counter-label">{hero.counterLabel}</div>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card-head">
            <span className="status-dot" /> Live PA queue
          </div>
          <ul className="pa-list">
            {hero.queue.map((row) => (
              <li key={row.drug}>
                <span>{row.drug}</span>
                <span className={`badge ${row.kind}`}>{row.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
