import HeroCarousel from "../components/HeroCarousel";
import ServiceCard from "../components/ServiceCard";
import StatCounter from "../components/StatCounter";
import Reveal from "../components/motion/Reveal";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Full Truck Load (FTL)",
      description: "Dedicated direct transport for large consignments with minimum transit handling.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600",
      link: "/services#ftl",
    },
    {
      title: "Part Load / LTL",
      description: "Cost-optimized consolidated movement ideal for smaller commercial shipments.",
      image: "https://images.unsplash.com/photo-1607473129014-0afb7ded099e?auto=format&fit=crop&q=80&w=600",
      link: "/services#ltl",
    },
    {
      title: "Dedicated Fleet",
      description: "Custom vehicle deployment for enterprise contracts with guaranteed availability.",
      image: "https://images.unsplash.com/photo-1516576885230-100c08f53839?auto=format&fit=crop&q=80&w=600",
      link: "/services#dedicated-fleet",
    },
    {
      title: "Express Transit",
      description: "Fast-track priority transport engineered for urgent, time-sensitive freight.",
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=600",
      link: "/services#express",
    },
    {
      title: "Door-to-Door Delivery",
      description: "Seamless end-to-end coverage spanning first-mile pickup to final verified delivery.",
      image: "https://images.unsplash.com/photo-1553413719-8758737f8f7f?auto=format&fit=crop&q=80&w=600",
      link: "/services#door-to-door",
    },
    {
      title: "Long-Distance Freight",
      description: "Intercity & interstate cargo operations optimized with continuous transit tracking.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
      link: "/services#long-distance",
    },
  ];

  const industries = [
    "Manufacturers & Industries",
    "Distributors & Wholesalers",
    "FMCG & Consumer Goods",
    "Retail & E-Commerce",
    "Automobile & Components",
    "Infrastructure & Construction",
    "Commercial Traders",
    "Corporate Enterprises",
  ];

  const workflowSteps = [
    "Booking",
    "Vehicle Placement",
    "Pickup",
    "Transit Mgmt",
    "Delivery",
    "POD Confirm",
  ];

  const galleryItems = [
    {
      title: "Full Truck Load Dispatch",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Consolidated Part Load Sorting",
      image: "https://images.unsplash.com/photo-1607473129014-0afb7ded099e?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Dedicated Fleet Operations",
      image: "https://images.unsplash.com/photo-1516576885230-100c08f53839?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Express Transit Loading",
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Secure Warehouse Consolidation",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Pan-India Transit Monitoring",
      image: "https://images.unsplash.com/photo-1553413719-8758737f8f7f?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <>
      {/* Hero Carousel Banner */}
      <HeroCarousel />

      {/* Welcome & About Brief Section */}
      <section className="section">
        <div className="container welcome-grid">
          <Reveal className="welcome-info">
            <span className="section-subtitle">Who We Are</span>
            <h2>Welcome to Parshuram Express Logistics Pvt. Ltd.</h2>
            <p className="welcome-desc">
              Parshuram Express Logistics Pvt. Ltd. is a premier transport &amp; supply chain partner providing end-to-end, highly reliable, and cost-optimized freight movement solutions across India. We specialize in point-to-point full truckload (FTL), consolidated LTL, priority express transit, and dedicated enterprise fleet logistics.
            </p>
            <p className="welcome-desc" style={{ marginBottom: "24px" }}>
              Our focus is simple — the right vehicle, the right route, the right handling and the right delivery time. We don&apos;t just transport cargo, we deliver your business commitments.
            </p>

            <ul className="mission-list">
              <li className="mission-item">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Reliable Vehicle Placement
              </li>
              <li className="mission-item">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Safe Cargo Handling
              </li>
              <li className="mission-item">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                On-Time Commitment
              </li>
              <li className="mission-item">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Pan-India Operations
              </li>
            </ul>
          </Reveal>

          {/* Commitment Quote Box */}
          <Reveal className="quote-banner" delay={0.15}>
            <blockquote>
              &ldquo;At Parshuram Express, transportation is about protecting your cargo, fulfilling commitments, and driving your business forward.&rdquo;
            </blockquote>
            <cite>Safe · Reliable · On Time Every Time</cite>
            <div className="corporate-badges">
              <span className="corporate-badge"><strong>CIN</strong>&nbsp;U49231JH2026PTC028433</span>
              <span className="corporate-badge"><strong>GSTIN</strong>&nbsp;20AARCP2584Q1ZQ</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Parshuram Express Section */}
      <section className="section" style={{ backgroundColor: "var(--color-bg-alt)", padding: "60px 0" }}>
        <div className="container highlights-grid">
          <Reveal className="highlight-box">
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div>
              <h3>Reliable Placement</h3>
              <p>Precision vehicle matching tailored to consignment volume and route complexity.</p>
            </div>
          </Reveal>
          <Reveal className="highlight-box" delay={0.1}>
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <h3>On-Time Commitment</h3>
              <p>Scheduled dispatch windows, optimal route planning, and strict transit monitoring.</p>
            </div>
          </Reveal>
          <Reveal className="highlight-box" delay={0.2}>
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h3>Safe Cargo Handling</h3>
              <p>Professional lashing, transit protection, and zero-damage delivery standards.</p>
            </div>
          </Reveal>
          <Reveal className="highlight-box" delay={0.3}>
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div>
              <h3>Operational Excellence</h3>
              <p>Proactive lifecycle management from initial dispatch to final POD delivery.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-subtitle">Specializations</span>
            <h2 className="section-title">Core Logistics Solutions</h2>
            <p className="section-desc">
              We specialize in point-to-point full truckload, consolidated LTL, priority express transit, and dedicated enterprise fleet logistics.
            </p>
          </Reveal>
          <div className="services-grid">
            {services.map((service, index) => (
              <Reveal key={index} delay={(index % 3) * 0.1}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  link={service.link}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Workflow Section */}
      <section className="section section-dark">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-subtitle">How It Works</span>
            <h2 className="section-title">Operational Workflow</h2>
            <p className="section-desc">
              A smooth, transparent transportation experience at every stage — from booking to proof of delivery.
            </p>
          </Reveal>
          <Reveal className="workflow-rail">
            {workflowSteps.map((step, index) => (
              <div key={step} className="workflow-step">
                <div className="workflow-step-num">{index + 1}</div>
                <div className="workflow-step-label">{step}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-subtitle">Who We Serve</span>
            <h2 className="section-title">Industries Served</h2>
            <p className="section-desc">
              Dependable logistics support designed around the transportation needs of business clients across sectors.
            </p>
          </Reveal>
          <Reveal className="industries-grid">
            {industries.map((industry) => (
              <span key={industry} className="industry-chip">
                <span className="chip-dot" />
                {industry}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="section" style={{ backgroundColor: "var(--color-bg-alt)" }}>
        <div className="container stats-grid">
          <Reveal className="stat-box" style={{ backgroundColor: "var(--color-text-white)", border: "1px solid var(--color-border-light)" }}>
            <div className="stat-icon-wrapper">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div className="stat-number" style={{ color: "var(--color-text-dark)" }}>
              <StatCounter end={6} />
            </div>
            <div className="stat-label" style={{ color: "var(--color-text-muted)" }}>Core Logistics Solutions</div>
          </Reveal>

          <Reveal className="stat-box" delay={0.1} style={{ backgroundColor: "var(--color-text-white)", border: "1px solid var(--color-border-light)" }}>
            <div className="stat-icon-wrapper">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="stat-number" style={{ color: "var(--color-text-dark)" }}>
              <StatCounter end={8} suffix="+" />
            </div>
            <div className="stat-label" style={{ color: "var(--color-text-muted)" }}>Industries Served</div>
          </Reveal>

          <Reveal className="stat-box" delay={0.2} style={{ backgroundColor: "var(--color-text-white)", border: "1px solid var(--color-border-light)" }}>
            <div className="stat-icon-wrapper">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <div className="stat-number" style={{ color: "var(--color-text-dark)" }}>
              <StatCounter end={6} />
            </div>
            <div className="stat-label" style={{ color: "var(--color-text-muted)" }}>Step Delivery Workflow</div>
          </Reveal>

          <Reveal className="stat-box" delay={0.3} style={{ backgroundColor: "var(--color-text-white)", border: "1px solid var(--color-border-light)" }}>
            <div className="stat-icon-wrapper">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 3h18v18H3z"/>
                <path d="M21 9H3M21 15H3M12 3v18"/>
              </svg>
            </div>
            <div className="stat-number" style={{ color: "var(--color-text-dark)" }}>
              <StatCounter end={2026} />
            </div>
            <div className="stat-label" style={{ color: "var(--color-text-muted)" }}>Registered (CIN)</div>
          </Reveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-subtitle">Our Operations</span>
            <h2 className="section-title">Operational Highlights</h2>
            <p className="section-desc">
              Visual records of our freight movement, fleet placement, and warehouse consolidation across India.
            </p>
          </Reveal>
          <div className="gallery-grid" style={{ marginBottom: "40px" }}>
            {galleryItems.map((item, index) => (
              <Reveal key={index} delay={(index % 3) * 0.1} className="gallery-item">
                <div
                  className="gallery-image-bg"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="gallery-overlay">
                  <span className="gallery-overlay-text">{item.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/gallery" className="btn btn-outline">
              View All Photos
            </Link>
          </div>
        </div>
      </section>

      {/* Split CTA Section */}
      <section className="section" style={{ paddingBottom: "120px" }}>
        <div className="container">
          <div className="cta-split">
            <Reveal className="cta-split-left">
              <h2>Ready to move your cargo?</h2>
              <p>
                Get direct access to freight routing coordinators, transit monitoring, safe handling standards, and competitive pricing for FTL, LTL, and dedicated fleet bookings.
              </p>
              <div className="hero-btns">
                <Link href="/contact" className="btn btn-primary">
                  Inquire Now
                </Link>
                <a href="tel:+917050044409" className="btn btn-secondary" style={{ border: "2px solid #555", color: "white" }}>
                  Call Support
                </a>
              </div>
            </Reveal>
            <Reveal
              delay={0.15}
              className="cta-split-right"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600)" }}
            />
          </div>
        </div>
      </section>

      {/* Floatable WhatsApp Support Widget */}
      <a
        href="https://wa.me/917050044409?text=Hi%20Parshuram%20Express,%20I'd%20like%20to%20inquire%20about%20your%20logistics%20services."
        className="whatsapp-widget"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.07 .953 11.45.951c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.475 3.393 1.374 4.887l-.938 3.43 3.551-.917zM17.487 14.39c-.27-.136-1.602-.79-1.85-.88-.25-.09-.43-.136-.61.136-.18.273-.697.88-.853 1.06-.156.183-.31.205-.58.07-1.36-.68-2.29-1.229-3.21-2.802-.08-.137-.08-.222 0-.358.09-.12.388-.45.58-.675.19-.22.25-.37.38-.616.13-.245.06-.46-.03-.596-.09-.135-.61-1.472-.83-2.02-.22-.53-.44-.45-.61-.46-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.4s1.03 2.79 1.17 2.99c.14.2 2.03 3.1 4.92 4.35.688.298 1.224.478 1.64.61.69.22 1.32.19 1.82.11.56-.08 1.6-.66 1.83-1.27.23-.61.23-1.13.16-1.24-.07-.1-.26-.14-.53-.28z"/>
        </svg>
      </a>
    </>
  );
}
