import { brand } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="brand">
          <span className="brand-mark">{brand.mark}</span>
          {brand.rest}
        </span>
        <span className="footer-note">
          © 2026 {brand.name}, Inc. · HIPAA compliant · SOC 2 Type II
        </span>
      </div>
    </footer>
  );
}
