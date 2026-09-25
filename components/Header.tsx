"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoLight from "../assets/logo-icon-light.png";
import { navLinks, site } from "../lib/site";
import { Arrow } from "./icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
        <div className="container header-row">
          <Link href="/" className="brand" aria-label={`${site.short} home`} onClick={() => setOpen(false)}>
            <Image src={logoLight} alt="" priority />
            <span className="brand-text">
              <span className="brand-name">PARSHURAM</span>
              <span className="brand-sub">EXPRESS LOGISTICS</span>
            </span>
          </Link>

          <nav className="nav-desktop" aria-label="Main">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className={isActive(l.href) ? "is-active" : ""}>
                {l.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact#book" className="btn btn-brass header-cta">
            Book a vehicle <Arrow />
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav id="mobile-nav" aria-label="Mobile" className={`nav-mobile ${open ? "is-open" : ""}`}>
        {navLinks.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className={`nav-mobile-link ${isActive(l.href) ? "is-active" : ""}`}
          >
            <span>0{i + 1}</span>
            {l.label}
          </Link>
        ))}
        <div className="nav-mobile-foot">
          <span className="mono" style={{ color: "var(--brass)" }}>{site.motto}</span>
          <span>{site.phoneDisplay}</span>
          <span>{site.email}</span>
        </div>
      </nav>
    </>
  );
}
