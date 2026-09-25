import Link from "next/link";
import { mailto, navLinks, services, site, tel, whatsapp } from "../lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="footer-lede">
              Your cargo, <em>our commitment.</em> Your trust, our responsibility.
            </p>
            <span className="mono" style={{ color: "var(--brass)" }}>
              {site.motto}
            </span>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Dispatch desk</h4>
            <ul>
              <li>
                <a href={tel}>{site.phoneDisplay}</a>
              </li>
              <li>
                <a href={mailto()}>{site.email}</a>
              </li>
              <li>
                <a href={whatsapp()} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
            <address className="footer-address" style={{ marginTop: 20 }}>
              {site.address.lines.map((line) => (
                <span key={line} style={{ display: "block" }}>
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>

        <p className="footer-wordmark" aria-hidden>
          Parshuram <em>Express</em>
        </p>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span className="mono" style={{ fontSize: 11 }}>
            CIN {site.cin} · GSTIN {site.gstin}
          </span>
        </div>
      </div>
    </footer>
  );
}
