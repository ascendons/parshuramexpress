"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoIcon from "../assets/logo-icon.png";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="tagline">TRUST • CARE • COMMITMENT</span>
          </div>
          <div className="top-bar-right">
            <a href="tel:+919900070560" className="contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 99000 70560
            </a>
            <span className="separator">|</span>
            <a href="mailto:info@parshuramexpress.com" className="contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              info@parshuramexpress.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="main-nav-bar">
        <div className="container nav-container">
          <Link href="/" className="logo-area">
            <Image
              src={logoIcon}
              alt="Parshuram Express Logistics"
              className="logo-icon-img"
              priority
            />
            <div className="logo-text">
              <span className="logo-brand">PARSHURAM</span>
              <span className="logo-subbrand">EXPRESS LOGISTICS</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-menu">
            <ul>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link href={link.href} className={isActive ? "active" : ""}>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link href="/contact" className="btn btn-primary nav-cta-btn">
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-bar ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`hamburger-bar ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`hamburger-bar ${isMenuOpen ? "open" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu Drawer */}
      <div className={`mobile-nav-drawer ${isMenuOpen ? "active" : ""}`}>
        <nav className="mobile-menu">
          <ul>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={isActive ? "active" : ""}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            className="btn btn-primary mobile-cta-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
