import { useState } from "react";
import { demo } from "../data/site.js";
import { track } from "../lib/analytics.js";

const EMPTY = {
  name: "",
  email: "",
  org: "",
  role: "",
  volume: "",
  system: "",
  company: "", // honeypot
};

export default function DemoForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [msg, setMsg] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const step1Valid = form.name && form.email && form.org;

  const next = () => {
    if (!step1Valid) {
      setStatus("error");
      setMsg("Please fill in every field.");
      return;
    }
    setStatus("idle");
    setMsg("");
    track("demo_step_completed", { step: 1 });
    setStep(2);
  };

  const back = () => {
    setStatus("idle");
    setMsg("");
    setStep(1);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (form.company) return; // honeypot
    if (!step1Valid) {
      setStep(1);
      setStatus("error");
      setMsg("Please fill in every field.");
      return;
    }

    const payload = {
      name: form.name,
      email: form.email,
      organization: form.org,
      role: form.role,
      monthly_pa_volume: form.volume,
      current_system: form.system,
      _subject: "New RxClear demo request",
    };

    if (!demo.endpoint) {
      track("demo_submitted", { mode: "demo" });
      setStatus("success");
      setMsg(`Thanks ${form.name} — we'll reach out at ${form.email} shortly. (Demo mode: not sent)`);
      setForm(EMPTY);
      setStep(1);
      return;
    }

    setStatus("submitting");
    setMsg("");
    try {
      const res = await fetch(demo.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        track("demo_submitted", { mode: "live" });
        setStatus("success");
        setMsg(`Thanks ${form.name} — we'll reach out at ${form.email} shortly.`);
        setForm(EMPTY);
        setStep(1);
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setMsg(
          data?.errors?.[0]?.message ||
            "Something went wrong. Please try again or email us directly."
        );
      }
    } catch {
      setStatus("error");
      setMsg("Network error. Please check your connection and try again.");
    }
  };

  const submitting = status === "submitting";
  const succeeded = status === "success";

  return (
    <section id="demo" className="cta">
      <div className="container cta-inner">
        <div className="cta-copy">
          <h2>See RxClear on your own PAs</h2>
          <p>
            Book a 20-minute demo. We'll show you a live submission and your
            projected ROI.
          </p>
        </div>

        <form className="demo-form" onSubmit={submit} noValidate>
          {!succeeded && (
            <div className="form-progress" aria-hidden="true">
              <span className={step >= 1 ? "on" : ""} />
              <span className={step >= 2 ? "on" : ""} />
              <small>Step {step} of 2</small>
            </div>
          )}

          {/* Step 1 — contact */}
          {step === 1 && !succeeded && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                aria-label="Full name"
                value={form.name}
                onChange={update}
              />
              <input
                type="email"
                name="email"
                placeholder="Work email"
                aria-label="Work email"
                value={form.email}
                onChange={update}
              />
              <input
                type="text"
                name="org"
                placeholder="Pharmacy or practice"
                aria-label="Pharmacy or practice"
                value={form.org}
                onChange={update}
              />
              <button type="button" className="btn btn-primary" onClick={next}>
                Next
              </button>
            </>
          )}

          {/* Step 2 — qualifiers */}
          {step === 2 && !succeeded && (
            <>
              <select name="role" aria-label="Your role" value={form.role} onChange={update}>
                <option value="">Your role (optional)</option>
                {demo.roles.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <select name="volume" aria-label="Monthly PA volume" value={form.volume} onChange={update}>
                <option value="">Monthly PA volume (optional)</option>
                {demo.volumes.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
              <input
                type="text"
                name="system"
                placeholder="Current EHR / pharmacy system (optional)"
                aria-label="Current EHR or pharmacy system"
                value={form.system}
                onChange={update}
              />
              <div className="form-actions">
                <button type="button" className="btn btn-ghost" onClick={back} disabled={submitting}>
                  Back
                </button>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? "Sending…" : "Request demo"}
                </button>
              </div>
            </>
          )}

          {/* Honeypot — hidden from real users, catches bots */}
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={update}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px" }}
          />

          <p
            className="form-msg"
            role="status"
            aria-live="polite"
            style={{ color: status === "error" ? "#c0392b" : undefined }}
          >
            {msg}
          </p>
        </form>
      </div>
    </section>
  );
}
