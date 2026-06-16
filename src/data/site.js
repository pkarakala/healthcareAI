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

  // Options for the qualifying step of the demo booking flow.
  roles: [
    "Pharmacist",
    "Pharmacy manager / owner",
    "Office manager",
    "Provider / prescriber",
    "Other",
  ],
  volumes: [
    "Under 100 / month",
    "100–500 / month",
    "500–1,000 / month",
    "1,000+ / month",
  ],
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

export const securityDetails = {
  intro:
    "RxClear handles protected health information, so security isn't a feature — it's the foundation. This page documents the controls, certifications, and practices that let your security and procurement teams say yes with confidence.",
  sections: [
    {
      title: "Compliance & certifications",
      points: [
        "HIPAA compliant; Business Associate Agreement (BAA) available to every customer.",
        "SOC 2 Type II — independently audited controls for security, availability, and confidentiality.",
        "Annual third-party penetration testing with remediation tracking.",
        "Security and compliance documentation available under NDA on request.",
      ],
    },
    {
      title: "Data protection",
      points: [
        "Encryption in transit with TLS 1.2+.",
        "Encryption at rest with AES-256.",
        "PHI logically segregated per customer.",
        "Configurable data retention and documented deletion on contract termination.",
      ],
    },
    {
      title: "Identity & access",
      points: [
        "Role-based access control (RBAC) with least-privilege defaults.",
        "Single sign-on (SSO) via SAML/OIDC for enterprise customers.",
        "Multi-factor authentication enforced for all administrative access.",
        "Internal access to PHI is logged, reviewed, and granted on a need-to-know basis.",
      ],
    },
    {
      title: "Infrastructure & availability",
      points: [
        "Hosted on US-based, SOC 2 / ISO 27001 certified cloud infrastructure.",
        "PHI remains within US data residency boundaries.",
        "Automated, encrypted backups with tested restore procedures.",
        "Redundancy across availability zones for resilience.",
      ],
    },
    {
      title: "Monitoring & incident response",
      points: [
        "Centralized, tamper-evident audit logging, exportable for your compliance team.",
        "Continuous monitoring and alerting for anomalous activity.",
        "Documented incident response plan with defined breach-notification timelines.",
        "Vendor and subprocessor risk reviews.",
      ],
    },
    {
      title: "Privacy & responsible AI",
      points: [
        "PHI is never used to train shared or third-party models.",
        "Data is processed only to deliver the service you've contracted for.",
        "Clear subprocessor list available on request.",
        "Privacy-by-design review for every new feature that touches PHI.",
      ],
    },
  ],
};

export const pricingDetails = {
  intro:
    "Transparent, predictable pricing that scales with your volume. Start free, pay for what you process, and upgrade when you're ready — no surprise invoices.",
  // Comparison rows across the three plans (Starter / Growth / Enterprise).
  comparison: [
    { label: "Monthly prior authorizations", starter: "Up to 50", growth: "Unlimited", enterprise: "Unlimited" },
    { label: "Locations", starter: "1", growth: "Up to 5", enterprise: "Unlimited" },
    { label: "Prior auth automation", starter: true, growth: true, enterprise: true },
    { label: "Automatic appeals", starter: false, growth: true, enterprise: true },
    { label: "EHR / pharmacy integrations", starter: "Standard", growth: "Standard", enterprise: "Custom" },
    { label: "Support", starter: "Email", growth: "Priority", enterprise: "Dedicated manager" },
    { label: "SSO / SAML", starter: false, growth: false, enterprise: true },
    { label: "Business Associate Agreement (BAA)", starter: false, growth: true, enterprise: true },
    { label: "Audit log export", starter: false, growth: true, enterprise: true },
  ],
  faqs: [
    {
      q: "How does per-transaction pricing work?",
      a: "On the Growth plan you pay a flat rate for each prior authorization RxClear processes. There are no seat fees or long-term commitments — your bill tracks your actual volume.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes. The Starter plan is free for 14 days and includes up to 50 prior authorizations so you can see results before you commit.",
    },
    {
      q: "What counts as a processed prior authorization?",
      a: "A PA is counted once when RxClear submits it to a payer. Status checks, follow-ups, and automatic appeals on that same PA are included at no extra charge.",
    },
    {
      q: "Do you offer a BAA?",
      a: "Yes — a Business Associate Agreement is available on the Growth and Enterprise plans, and is required before any protected health information is processed.",
    },
    {
      q: "Can we cancel anytime?",
      a: "Yes. Plans are month-to-month unless you opt into an annual Enterprise agreement. You can export your data on the way out.",
    },
  ],
};

export const integrationsDetails = {
  intro:
    "RxClear plugs into the systems your team already lives in — no rip-and-replace. We connect to your EHR or pharmacy system, the payer and PA networks, and keep everything in sync so prior authorizations move without manual re-entry.",
  categories: [
    {
      heading: "EHR / EMR",
      description:
        "Pull prescription and clinical context directly so PAs are filed with the right supporting information.",
      items: ["Epic", "Cerner (Oracle Health)", "athenahealth", "eClinicalWorks", "NextGen", "Allscripts"],
    },
    {
      heading: "Pharmacy systems",
      description:
        "Connect at the dispensing workflow to catch PAs the moment a claim rejects.",
      items: ["PioneerRx", "Liberty", "QS/1", "BestRx", "Computer-Rx", "Rx30"],
    },
    {
      heading: "Payer & PA networks",
      description:
        "Submit and track across the networks and portals payers actually use.",
      items: ["CoverMyMeds", "Surescripts", "Major PBM portals", "Commercial payers", "Medicare", "Medicaid"],
    },
  ],
  onboarding: [
    { title: "Connect", body: "We establish a secure connection to your EHR or pharmacy system — typically in a day." },
    { title: "Map", body: "We map your formats and workflows so RxClear reads prescriptions and files PAs correctly." },
    { title: "Go live", body: "Start submitting and tracking PAs automatically, with our team monitoring the rollout." },
  ],
};
