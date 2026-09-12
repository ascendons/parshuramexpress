import Image from "next/image";
import Link from "next/link";
import logoFull from "../../assets/logo-full.png";
import Reveal from "../../components/motion/Reveal";

export default function About() {
  const values = [
    {
      title: "Reliable Placement",
      description: "Precision vehicle matching tailored to consignment volume and route complexity — the right vehicle, every time.",
    },
    {
      title: "Safe Cargo Handling",
      description: "Professional lashing, transit protection, and zero-damage delivery standards across every consignment we move.",
    },
    {
      title: "Operational Excellence",
      description: "Proactive lifecycle management from initial dispatch to final POD delivery, backed by strict transit monitoring.",
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

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="section section-dark" style={{ padding: "60px 0", textAlign: "center" }}>
        <div className="container">
          <span className="section-subtitle">Our Corporate Profile</span>
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>About Parshuram Express</h1>
          <p style={{ color: "var(--color-text-muted-light)", maxWidth: "600px", margin: "0 auto" }}>
            Your Cargo, Our Commitment | Your Trust, Our Responsibility.
          </p>
        </div>
      </section>

      {/* Main Info Section */}
      <section className="section">
        <div className="container about-split">
          <Reveal className="about-content">
            <span className="section-subtitle">Company Overview</span>
            <h2 style={{ fontSize: "32px", marginBottom: "20px", fontWeight: "700" }}>
              A Premier Transport &amp; Supply Chain Partner
            </h2>
            <p className="welcome-desc">
              Parshuram Express Logistics Pvt. Ltd. is a professional transport &amp; logistics service provider offering reliable, efficient and cost-effective transportation solutions for businesses across India. We specialize in road transportation, full truck load, part load, dedicated vehicle movement, express transportation and door-to-door cargo delivery.
            </p>
            <p className="welcome-desc">
              Our focus is simple — the right vehicle, the right route, the right handling and the right delivery time. We believe transportation is more than moving goods from one place to another; it is about protecting your cargo, meeting delivery commitments, and building long-term business relationships.
            </p>
            <p className="welcome-desc">
              We leverage precision vehicle matching, proactive transit monitoring, and a Pan-India operations network to deliver a dependable, single-point transportation experience.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <span className="icon-bullet">✓</span>
                Pan-India Operations Network
              </div>
              <div className="about-feature">
                <span className="icon-bullet">✓</span>
                CIN: U49231JH2026PTC028433
              </div>
              <div className="about-feature">
                <span className="icon-bullet">✓</span>
                GSTIN: 20AARCP2584Q1ZQ
              </div>
            </div>
          </Reveal>

          <Reveal className="about-graphic-wrapper" delay={0.15}>
            <div className="about-graphic-text">
              <Image
                src={logoFull}
                alt="Parshuram Express Logistics Pvt. Ltd."
                className="about-graphic-logo"
              />
              <p>We Connect. We Deliver.<br />On Time, Every Time.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="section" style={{ backgroundColor: "var(--color-bg-alt)" }}>
        <div className="container">
          <Reveal className="section-header">
            <span className="section-subtitle">Why Parshuram Express</span>
            <h2 className="section-title">Core Corporate Values</h2>
            <p className="section-desc">
              These principles guide every booking, vehicle placement, and delivery confirmation.
            </p>
          </Reveal>
          <div className="services-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {values.map((value, idx) => (
              <Reveal
                key={idx}
                delay={idx * 0.1}
                className="highlight-box"
                style={{
                  flexDirection: "column",
                  padding: "40px 30px",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="icon-wrapper"
                  style={{
                    marginRight: "0",
                    marginBottom: "20px",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                  }}
                >
                  <span style={{ fontSize: "20px", fontWeight: "700" }}>{idx + 1}</span>
                </div>
                <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>{value.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--color-text-muted)" }}>{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business Clients / Industries Section */}
      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-subtitle">Our Business Clients</span>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-desc">
              Dependable logistics support designed around the transportation needs of business clients.
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

      {/* FAQ & CTA Section */}
      <section className="section" style={{ paddingBottom: "120px" }}>
        <Reveal className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px", fontWeight: "700" }}>
            Partner with a Dependable Logistics Provider
          </h2>
          <p className="welcome-desc" style={{ marginBottom: "40px" }}>
            Whether you need full truck load movement, consolidated part load shipments, a dedicated fleet, or express priority transit, Parshuram Express is ready to assist your team.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn btn-primary">
              Contact Our Team
            </Link>
            <Link href="/services" className="btn btn-outline">
              Explore Our Services
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
