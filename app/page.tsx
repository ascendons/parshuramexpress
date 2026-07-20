import HeroCarousel from "../components/HeroCarousel";
import ServiceCard from "../components/ServiceCard";
import StatCounter from "../components/StatCounter";
import Reveal from "../components/motion/Reveal";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Transportation (All India)",
      description: "Direct transport solutions to all 29 states in India. Timely delivery for industrial and commercial goods.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600",
      link: "/services#transport",
    },
    {
      title: "Woodworking Machine Transport",
      description: "Specialized transport and placement of heavy industrial woodworking machinery and automated tools.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
      link: "/services#woodworking",
    },
    {
      title: "CNC Machine & Heavy Cargo",
      description: "Secure handling, packing, loading, and transit of high-precision CNC routers and manufacturing equipment.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
      link: "/services#cnc",
    },
    {
      title: "Bakery & Food Equipment",
      description: "Relocating bakery systems, commercial ovens, storage cooling systems, and specialized food lines.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
      link: "/services#bakery",
    },
    {
      title: "Exhibition Goods & Relocations",
      description: "End-to-end logistics solutions for expo events, showrooms, and industrial/office moving services.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
      link: "/services#exhibition",
    },
    {
      title: "Warehousing & Secure Storage",
      description: "Planned storage inventory controls, dispatch, loading docks, and 24/7 security watch systems.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
      link: "/services#warehousing",
    },
  ];

  const galleryItems = [
    {
      title: "Industrial Machinery Loading",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Flatbed Trailer Cargo Transit",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Woodworking CNC Logistics",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Statewide Fleet Operations",
      image: "https://images.unsplash.com/photo-1516576885230-100c08f53839?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Secure Warehouse Stockpile",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Forklift Sorting & Operations",
      image: "https://images.unsplash.com/photo-1607473129014-0afb7ded099e?auto=format&fit=crop&q=80&w=400",
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
              Parshuram Express makes business flow. As one of India's leading transport and logistics companies, we design and implement industry-leading solutions in cargo transit all over India. We specialize in transporting woodworking machinery, CNC systems, heavy industrial goods, raw materials, bakery units, exhibition goods, and household cargo.
            </p>
            <p className="welcome-desc" style={{ marginBottom: "24px" }}>
              With a dedicated workforce and a robust network of regional clusters, we ensure operational excellence and direct response to the most challenging supply chain projects.
            </p>

            <ul className="mission-list">
              <li className="mission-item">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Strict Transit Timelines
              </li>
              <li className="mission-item">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Highly Secure Freight
              </li>
              <li className="mission-item">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Ethical Business Standards
              </li>
              <li className="mission-item">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Complete Loading &amp; Packing
              </li>
            </ul>
          </Reveal>

          {/* Achievement Box */}
          <Reveal className="achievement-showcase" delay={0.15}>
            <h3>Recognized Excellence</h3>
            <p className="welcome-desc" style={{ color: "var(--color-text-muted-light)", marginBottom: "30px" }}>
              Awarded for exceptional service quality and cargo handling standards, including recognition as the "Best Transporter of the Decade" by Saint Gobain.
            </p>
            <div className="award-images-carousel">
              <div className="award-img-wrapper">
                <p>Saint Gobain Best Transporter</p>
              </div>
              <div className="award-img-wrapper">
                <p>Decade Service Excellence</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlights / Features Banner */}
      <section className="section" style={{ backgroundColor: "#f1f5f9", padding: "60px 0" }}>
        <div className="container highlights-grid">
          <Reveal className="highlight-box">
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <div>
              <h3>GPS Vehicle Tracking</h3>
              <p>Real-time updates on vehicle position and estimated transit delivery timeframes.</p>
            </div>
          </Reveal>
          <Reveal className="highlight-box" delay={0.1}>
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <div>
              <h3>Packaging &amp; Storage</h3>
              <p>Heavy duty wooden crating, bubble wrapping, and safe warehouse consolidation.</p>
            </div>
          </Reveal>
          <Reveal className="highlight-box" delay={0.2}>
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3h18v18H3z"/>
                <path d="M21 9H3M21 15H3M12 3v18"/>
              </svg>
            </div>
            <div>
              <h3>Financial Credibility</h3>
              <p>Backed by strong banking credibility, including Canara Bank as our financial partner.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-subtitle">Specializations</span>
            <h2 className="section-title">Logistics &amp; Transport Services</h2>
            <p className="section-desc">
              We provide a full range of freight, equipment placement, and material handling solutions.
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

      {/* Stats Counter Section */}
      <section className="section section-dark">
        <div className="container stats-grid">
          <Reveal className="stat-box">
            <div className="stat-icon-wrapper">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <div className="stat-number">
              <StatCounter end={500} suffix="+" />
            </div>
            <div className="stat-label">Projects Completed</div>
          </Reveal>

          <Reveal className="stat-box" delay={0.1}>
            <div className="stat-icon-wrapper">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div className="stat-number">
              <StatCounter end={150} suffix="+" />
            </div>
            <div className="stat-label">Attached Vehicles</div>
          </Reveal>

          <Reveal className="stat-box" delay={0.2}>
            <div className="stat-icon-wrapper">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="1" y="3" width="15" height="13" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="13.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div className="stat-number">
              <StatCounter end={50} suffix="+" />
            </div>
            <div className="stat-label">Owned Vehicles</div>
          </Reveal>

          <Reveal className="stat-box" delay={0.3}>
            <div className="stat-icon-wrapper">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="stat-number">
              <StatCounter end={30} suffix="+" />
            </div>
            <div className="stat-label">People in Team</div>
          </Reveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-subtitle">Our Operations</span>
            <h2 className="section-title">Completed Project Highlights</h2>
            <p className="section-desc">
              Visual records of our machinery logistics and safe heavy equipment placements across India.
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
              <h2>Ready to secure your machinery shipment?</h2>
              <p>
                Get direct access to freight routing consultants, GPS vehicle coordination, safety crating guidelines, and competitive pricing for bulk freight.
              </p>
              <div className="hero-btns">
                <Link href="/contact" className="btn btn-primary">
                  Inquire Now
                </Link>
                <a href="tel:+919900070560" className="btn btn-secondary" style={{ border: "2px solid #555", color: "white" }}>
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
        href="https://wa.me/919900070560?text=Hi%20Parshuram%20Express,%20I'd%20like%20to%20inquire%20about%20your%20logistics%20services."
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
