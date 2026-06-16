// Central content model. Edit here to extend the site without touching components.

export const brand = {
  name: "RxClear",
  mark: "Rx",
  rest: "Clear",
};

export const nav = [
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "ROI", href: "#roi" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Security", href: "#security" },
];

export const hero = {
  eyebrow: "AI-powered prior authorization",
  titleBefore: "Prior authorizations approved in ",
  titleAccent: "minutes",
  titleAfter: ", not days.",
  lead:
    "Pharmacies and providers lose hours every week chasing 3–5 day PA waits. RxClear connects to your system, submits automatically, and tracks every case through to approval and appeal.",
  counterTarget: 184392,
  counterLabel: "prior authorizations processed and counting",
  queue: [
    { drug: "Atorvastatin 40mg", status: "Approved · 4m", kind: "ok" },
    { drug: "Ozempic 1mg", status: "Approved · 7m", kind: "ok" },
    { drug: "Humira pen", status: "In review · 2m", kind: "pending" },
    { drug: "Eliquis 5mg", status: "Approved · 3m", kind: "ok" },
    { drug: "Jardiance 25mg", status: "Auto-appeal filed", kind: "appeal" },
  ],
};

export const trust = {
  badges: [
    "🔒 HIPAA Compliant",
    "🛡️ SOC 2 Type II",
    "📝 BAA Available",
    "🔐 256-bit Encryption",
  ],
  logos: ["Epic", "Cerner", "PioneerRx", "athenahealth", "CoverMyMeds"],
  quote:
    "We cut our average PA turnaround from four days to under twenty minutes. My techs got their afternoons back.",
  quoteCite: "— Director of Pharmacy, regional health system (pilot customer)",
};

export const steps = [
  {
    title: "Connect",
    body: "Securely link RxClear to your EHR or pharmacy system. Setup takes a day, not a quarter.",
  },
  {
    title: "AI submits",
    body: "RxClear reads the prescription, gathers clinical criteria, and files the PA to the right payer automatically.",
  },
  {
    title: "Track & appeal",
    body: "Follow every case in one dashboard. Denials trigger an automatic, evidence-backed appeal.",
  },
];

export const features = [
  {
    title: "Prior auth automation",
    body: "Submit, track, and appeal PAs across payers without manual paperwork.",
    tag: "Available now",
    live: true,
  },
  {
    title: "Formulary lookups",
    body: "Instantly see covered alternatives before a prescription is even sent.",
    tag: "On the roadmap",
  },
  {
    title: "Real-time benefit checks",
    body: "Show patient cost and coverage at the point of care.",
    tag: "On the roadmap",
  },
  {
    title: "Denial management",
    body: "Surface denial patterns and resolve them before they pile up.",
    tag: "On the roadmap",
  },
  {
    title: "Patient notifications",
    body: "Keep patients informed automatically as their PA moves forward.",
    tag: "On the roadmap",
  },
];

export const roi = {
  reduction: 0.9, // RxClear removes ~90% of hands-on time per PA
  defaults: { volume: 400, minutes: 25, hourly: 32 },
  note: "Estimate assumes RxClear reduces hands-on time per PA by ~90%.",
};

export const integrations = [
  {
    heading: "EHR / EMR",
    items: ["Epic", "Cerner (Oracle Health)", "athenahealth", "eClinicalWorks", "NextGen"],
  },
  {
    heading: "Pharmacy systems",
    items: ["PioneerRx", "Liberty", "QS/1", "BestRx", "Computer-Rx"],
  },
  {
    heading: "Payer & PA networks",
    items: ["CoverMyMeds", "Surescripts", "Major PBM portals", "Commercial payers", "Medicare / Medicaid"],
  },
];

export const pricing = [
  {
    name: "Starter",
    amount: "Free",
    per: " 14-day trial",
    features: ["Up to 50 PAs", "Single location", "Email support", "Core automation"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Growth",
    amount: "$4",
    per: " / PA processed",
    features: ["Unlimited PAs", "Up to 5 locations", "Auto-appeals included", "Priority support"],
    cta: "Book a demo",
    featured: true,
  },
  {
    name: "Enterprise",
    amount: "Custom",
    per: "",
    features: ["Volume pricing", "Unlimited locations", "Dedicated success manager", "Custom integrations & BAA"],
    cta: "Talk to sales",
    featured: false,
  },
];

export const security = [
  { title: "HIPAA & BAA", body: "Fully HIPAA compliant with a Business Associate Agreement available for every customer." },
  { title: "SOC 2 Type II", body: "Independently audited controls for security, availability, and confidentiality." },
  { title: "Encryption", body: "Data encrypted in transit (TLS 1.2+) and at rest (AES-256)." },
  { title: "Audit logs", body: "Every access and action is logged and exportable for your compliance team." },
  { title: "Access controls", body: "Role-based permissions and SSO so the right people see the right data." },
  { title: "Data residency", body: "PHI stays within compliant, US-based infrastructure." },
];

export const demo = {
  // Paste your form endpoint here to start collecting real leads.
  // Works with Formspree (https://formspree.io), Web3Forms, Getform, Basin, etc.
  // The endpoint/ID is safe to expose in client code.
  // Leave empty ("") to keep local demo mode (shows confirmation, sends nothing).
  // Example: "https://formspree.io/f/xxxxabcd"
  endpoint: "https://formspree.io/f/xnjyrvga",
};

export const analytics = {
  // Flip to true once you've set a provider below. Stays off (no network,
  // no cookies) until then — safe for local dev and pre-launch.
  enabled: false,

  // "plausible" (cookieless, privacy-first — recommended for healthcare)
  // or "ga4".
  provider: "plausible",

  // Plausible settings:
  domain: "pkarakala.github.io",
  scriptSrc: "https://plausible.io/js/script.js",

  // GA4 settings (set provider to "ga4" and fill this in):
  measurementId: "", // e.g. "G-XXXXXXXXXX"
};
