import { useState } from "react";
import { demo } from "../data/site.js";
import { track } from "../lib/analytics.js";

const EMPTY = { name: "", email: "", org: "", company: "" }; // `company` = honeypot

export default function DemoForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [msg, setMsg] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    // Honeypot: real users never fill this hidden field.
    if (form.company) return;

    if (!form.name || !form.email || !form.org) {
      setStatus("error");
      setMsg("Please fill in every field.");
      return;
    }

    // No endpoint configured yet → local demo mode (nothing is sent).
    if (!demo.endpoint) {
      track("demo_submitted", { mode: "demo" });
      setStatus("success");
      setMsg(`Thanks ${form.name} — we'll reach out at ${form.email} shortly. (Demo mode: not sent)`);
      setForm(EMPTY);
      return;
    }

    setStatus("submitting");
    setMsg("");
    try {
      const res = await fetch(demo.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          organization: form.org,
          _subject: "New RxClear demo request",
        }),
      });

      if (res.ok) {
        track("demo_submitted", { mode: "live" });
        setStatus("success");
        setMsg(`Thanks ${form.name} — we'll reach out at ${form.email} shortly.`);
        setForm(EMPTY);
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
          <input
            type="text"
            name="name"
            placeholder="Full name"
            aria-label="Full name"
            value={form.name}
            onChange={update}
            disabled={submitting}
          />
          <input
            type="email"
            name="email"
            placeholder="Work email"
            aria-label="Work email"
            value={form.email}
            onChange={update}
            disabled={submitting}
          />
          <input
            type="text"
            name="org"
            placeholder="Pharmacy or practice"
            aria-label="Pharmacy or practice"
            value={form.org}
            onChange={update}
            disabled={submitting}
          />
          {/* Honeypot field — hidden from real users, catches bots */}
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
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? "Sending…" : "Request demo"}
          </button>
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
