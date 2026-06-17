// Legal document content. These are TEMPLATES and must be reviewed by qualified
// legal counsel before publishing. Each doc renders with a draft notice until
// you set `draft: false`.

export const termsDoc = {
  slug: "terms",
  title: "Terms of Service",
  updated: "June 2026",
  draft: true,
  intro:
    "These Terms of Service govern your access to and use of the RxClear website and services. By using RxClear, you agree to these terms.",
  sections: [
    {
      heading: "1. Agreement to terms",
      body: [
        "By accessing or using RxClear, you agree to be bound by these Terms of Service and all applicable laws. If you do not agree, do not use the service.",
        "Use of RxClear by a pharmacy or other organization is also governed by the separate written service agreement executed between RxClear and that organization, which controls in the event of any conflict.",
      ],
    },
    {
      heading: "2. The service",
      body: [
        "RxClear provides software that automates prior authorization submission, tracking, and appeals (including denial management) for pharmacies and their authorized staff.",
        "We may modify, suspend, or discontinue any part of the service at any time. We will provide reasonable notice of material changes where practical.",
      ],
    },
    {
      heading: "3. Accounts and acceptable use",
      body: [
        "You are responsible for maintaining the confidentiality of account credentials and for all activity under your account.",
        "You agree not to misuse the service, including by attempting to access data you are not authorized to view, interfering with normal operation, or using the service in violation of applicable law.",
      ],
    },
    {
      heading: "4. Fees",
      body: [
        "Paid plans are billed as described on our pricing page or in your service agreement. Fees are non-refundable except as required by law or expressly stated in your agreement.",
      ],
    },
    {
      heading: "5. Intellectual property",
      body: [
        "RxClear and its content, features, and functionality are owned by RxClear and protected by intellectual property laws. These terms do not grant you any right to our trademarks or branding.",
      ],
    },
    {
      heading: "6. Disclaimers and limitation of liability",
      body: [
        "The service is provided \"as is\" without warranties of any kind to the extent permitted by law. RxClear does not provide medical, legal, or insurance advice.",
        "To the maximum extent permitted by law, RxClear is not liable for indirect, incidental, or consequential damages arising from your use of the service.",
      ],
    },
    {
      heading: "7. Termination",
      body: [
        "We may suspend or terminate access for violation of these terms. You may stop using the service at any time. Provisions that by their nature should survive termination will survive.",
      ],
    },
    {
      heading: "8. Changes and contact",
      body: [
        "We may update these terms from time to time. Continued use after changes constitutes acceptance. Questions about these terms can be sent to legal@rxclear.example.",
      ],
    },
  ],
};

export const privacyDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  updated: "June 2026",
  draft: true,
  intro:
    "This Privacy Policy explains how RxClear handles information collected through this marketing website. It does not govern protected health information (PHI) processed by the RxClear service — that is covered by the Business Associate Agreement (BAA) and service agreement with your organization.",
  sections: [
    {
      heading: "Scope of this policy",
      body: [
        "This policy applies only to the public RxClear website (this site). The RxClear product processes PHI on behalf of pharmacies as a Business Associate under HIPAA; that processing is governed by the BAA and your service agreement, not by this website policy.",
      ],
    },
    {
      heading: "Information we collect on this site",
      body: ["We collect limited information when you choose to provide it or as you browse:"],
      list: [
        "Demo request details you submit: name, work email, organization, and optional role, monthly prior-authorization volume, and current system.",
        "Basic, privacy-respecting usage analytics (such as pages viewed and aggregate events). We do not use this site to collect PHI.",
      ],
    },
    {
      heading: "How we use it",
      body: ["We use this information to:"],
      list: [
        "Respond to demo requests and contact you about RxClear.",
        "Understand how the site is used so we can improve it.",
      ],
    },
    {
      heading: "Service providers",
      body: [
        "We use third parties to operate the site. Demo form submissions are processed by our form provider (Formspree). Site analytics are provided by a privacy-focused analytics tool. These providers process data on our behalf under their own terms.",
      ],
    },
    {
      heading: "Cookies and tracking",
      body: [
        "Our default analytics configuration is cookieless and does not track you across sites. If you enable a cookie-based analytics provider, this section should be updated to reflect that and to describe any consent mechanism.",
      ],
    },
    {
      heading: "Data retention and security",
      body: [
        "We retain demo-request information only as long as needed to follow up and for our legitimate business records. We apply reasonable administrative and technical safeguards to protect site-collected data.",
      ],
    },
    {
      heading: "Your choices",
      body: [
        "You can request access to or deletion of the contact information you submitted by emailing privacy@rxclear.example. This site is intended for business users and is not directed at children.",
      ],
    },
    {
      heading: "Changes and contact",
      body: [
        "We may update this policy and will revise the date above when we do. Questions can be sent to privacy@rxclear.example.",
      ],
    },
  ],
};

export const hipaaDoc = {
  slug: "hipaa",
  title: "HIPAA Compliance",
  updated: "June 2026",
  draft: true,
  intro:
    "RxClear processes protected health information (PHI) on behalf of pharmacies and operates as a HIPAA Business Associate. This page summarizes our approach; binding terms are set out in the Business Associate Agreement (BAA).",
  sections: [
    {
      heading: "Our role under HIPAA",
      body: [
        "When RxClear handles PHI to submit, track, or appeal prior authorizations for a pharmacy, RxClear acts as a Business Associate of that pharmacy (the Covered Entity). A signed BAA is required before any PHI is processed.",
      ],
    },
    {
      heading: "Business Associate Agreement",
      body: [
        "We make a BAA available to every customer that processes PHI through RxClear. The BAA defines permitted uses and disclosures, safeguards, breach notification, and the obligations of each party.",
      ],
    },
    {
      heading: "Safeguards",
      body: ["We maintain administrative, physical, and technical safeguards designed to protect PHI, including:"],
      list: [
        "Encryption of PHI in transit (TLS 1.2+) and at rest (AES-256).",
        "Role-based access controls and least-privilege access to PHI.",
        "Audit logging of access to PHI.",
        "Workforce training and documented security policies.",
      ],
    },
    {
      heading: "Breach notification",
      body: [
        "In the event of a breach of unsecured PHI, we will notify affected customers without unreasonable delay and within the timelines required by HIPAA and the applicable BAA.",
      ],
    },
    {
      heading: "Subcontractors",
      body: [
        "Where we engage subcontractors that may handle PHI, we require them to agree in writing to safeguards at least as protective as those in our BAA.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "For HIPAA-related questions or to request a BAA, contact security@rxclear.example.",
      ],
    },
  ],
};

export const legalDocs = [termsDoc, privacyDoc, hipaaDoc];
