import { useState } from "react";

export default function DemoForm() {
  const [form, setForm] = useState({ name: "", email: "", org: "" });
  const [msg, setMsg] = useState({ text: "", ok: true });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.org) {
      setMsg({ text: "Please fill in every field.", ok: false });
      return;
    }
    // Client-side only for now. Wire to a backend / form service before collecting real leads.
    setMsg({
      text: `Thanks ${form.name} — we'll reach out at ${form.email} shortly.`,
      ok: true,
    });
    setForm({ name: "", email: "", org: "" });
  };

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
            value={form.name}
            onChange={update}
          />
          <input
            type="email"
            name="email"
            placeholder="Work email"
            value={form.email}
            onChange={update}
          />
          <input
            type="text"
            name="org"
            placeholder="Pharmacy or practice"
            value={form.org}
            onChange={update}
          />
          <button type="submit" className="btn btn-primary">
            Request demo
          </button>
          <p
            className="form-msg"
            role="status"
            style={{ color: msg.ok ? undefined : "#c0392b" }}
          >
            {msg.text}
          </p>
        </form>
      </div>
    </section>
  );
}
