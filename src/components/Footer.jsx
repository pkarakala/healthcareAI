import { brand, footerLinks } from "../data/site.js";

const BASE = import.meta.env.BASE_URL; // "/healthcareAI/"
const url = (href) => `${BASE}${href}`;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand">
              <span className="brand-mark">{brand.mark}</span>
              {brand.rest}
            </span>
            <p>AI-powered prior authorization for pharmacies and providers.</p>
          </div>
          <div className="footer-cols">
            {footerLinks.map((col) => (
              <div className="footer-col" key={col.heading}>
                <h4>{col.heading}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={url(link.href)}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-note">
            © 2026 {brand.name}, Inc. · HIPAA compliant · SOC 2 Type II
          </span>
        </div>
      </div>
    </footer>
  );
}
