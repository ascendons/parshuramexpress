import Image from "next/image";
import Link from "next/link";
import logoIcon from "../assets/logo-icon.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* About Box */}
        <div className="footer-widget about-widget">
          <Link href="/" className="footer-logo">
            <Image
              src={logoIcon}
              alt="Parshuram Express Logistics"
              className="logo-icon-img"
            />
            <div className="logo-text">
              <span className="logo-brand">PARSHURAM</span>
              <span className="logo-subbrand">EXPRESS LOGISTICS</span>
            </div>
          </Link>
          <p className="about-text">
            India's trusted transport and logistics partner. Specialized in heavy machinery transport, industrial logistics, and custom supply chain solutions.
          </p>
          <span className="footer-tagline">TRUST • CARE • COMMITMENT</span>
        </div>

        {/* Services Links */}
        <div className="footer-widget links-widget">
          <h4 className="widget-title">Our Services</h4>
          <ul>
            <li>
              <Link href="/services#transport">Heavy Transportation</Link>
            </li>
            <li>
              <Link href="/services#machinery">CNC &amp; Woodworking Machinery</Link>
            </li>
            <li>
              <Link href="/services#industrial">Industrial Goods Logistics</Link>
            </li>
            <li>
              <Link href="/services#warehousing">Safe Warehousing &amp; Storage</Link>
            </li>
            <li>
              <Link href="/services#packing">Loading &amp; Packing Services</Link>
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div className="footer-widget links-widget">
          <h4 className="widget-title">Quick Links</h4>
          <ul>
            <li>
              <Link href="/">Home Page</Link>
            </li>
            <li>
              <Link href="/about">About Our Company</Link>
            </li>
            <li>
              <Link href="/services">All Services</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery &amp; Fleet</Link>
            </li>
            <li>
              <Link href="/contact">Contact Support</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Box */}
        <div className="footer-widget contact-widget">
          <h4 className="widget-title">Get in Touch</h4>
          <ul className="contact-details">
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>
                Karamtoli, Opposite Hanuman Mandir,
                Daladali Chowk, Simlia, Ratu,
                Ranchi - 835222, Jharkhand
              </span>
            </li>
            <li>
              <a href="tel:+917050044409" className="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 70500 44409
              </a>
            </li>
            <li>
              <a href="mailto:info@parshuramexpress.com" className="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                info@parshuramexpress.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>
            &copy; {currentYear} Parshuram Express Logistics Pvt. Ltd. All rights reserved.
            <span className="footer-cin"> · CIN: U49231JH2026PTC028433</span>
          </p>
          <div className="bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
