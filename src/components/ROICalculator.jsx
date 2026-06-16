import { useMemo, useState } from "react";
import { roi } from "../data/site.js";

const money = (n) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

export default function ROICalculator() {
  const [volume, setVolume] = useState(roi.defaults.volume);
  const [minutes, setMinutes] = useState(roi.defaults.minutes);
  const [hourly, setHourly] = useState(roi.defaults.hourly);

  const { hoursSaved, monthly, yearly } = useMemo(() => {
    const v = Math.max(0, Number(volume) || 0);
    const m = Math.max(0, Number(minutes) || 0);
    const h = Math.max(0, Number(hourly) || 0);
    const hrs = (v * m * roi.reduction) / 60;
    const mo = hrs * h;
    return { hoursSaved: hrs, monthly: mo, yearly: mo * 12 };
  }, [volume, minutes, hourly]);

  return (
    <section id="roi" className="section">
      <div className="container">
        <h2 className="section-title">What could you save?</h2>
        <p className="section-sub">
          Enter your monthly PA volume and see your estimated savings.
        </p>
        <div className="roi">
          <div className="roi-inputs">
            <label>
              Monthly prior authorizations
              <input
                type="number"
                min="0"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
              />
            </label>
            <label>
              Minutes spent per PA today
              <input
                type="number"
                min="0"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
              />
            </label>
            <label>
              Loaded staff cost per hour ($)
              <input
                type="number"
                min="0"
                value={hourly}
                onChange={(e) => setHourly(e.target.value)}
              />
            </label>
          </div>
          <div className="roi-results">
            <div className="roi-stat">
              <div className="roi-value">{Math.round(hoursSaved).toLocaleString()}</div>
              <div className="roi-label">hours saved / month</div>
            </div>
            <div className="roi-stat">
              <div className="roi-value">{money(monthly)}</div>
              <div className="roi-label">saved / month</div>
            </div>
            <div className="roi-stat">
              <div className="roi-value">{money(yearly)}</div>
              <div className="roi-label">saved / year</div>
            </div>
            <a href="#demo" className="btn btn-primary roi-cta" data-cta="roi">
              Book a demo to lock in these savings
            </a>
            <p className="roi-note">{roi.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
