import Image from "next/image";
import Link from "next/link";
import logoFull from "../../assets/logo-full.png";

export default function About() {
  const values = [
    {
      title: "Trust",
      description: "Our clients rely on us for their most valuable equipment shipments. We maintain complete transparency and integrity in every transaction.",
    },
    {
      title: "Care",
      description: "From specialized wooden wrapping to high-grade loading techniques, we treat every machinery cargo with the utmost precision and safety.",
    },
    {
      title: "Commitment",
      description: "We are dedicated to meeting strict timelines and providing responsive support all across our 17 regional clusters in India.",
    },
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="section section-dark" style={{ padding: "60px 0", textAlign: "center" }}>
        <div className="container">
          <span className="section-subtitle">Our Corporate Profile</span>
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>About Parshuram Express</h1>
          <p style={{ color: "var(--color-text-muted-light)", maxWidth: "600px", margin: "0 auto" }}>
            Learn more about India's trusted logistics and transportation specialists.
          </p>
        </div>
      </section>

      {/* Main Info Section */}
      <section className="section">
        <div className="container about-split">
          <div className="about-content">
            <span className="section-subtitle">Establishment</span>
            <h2 style={{ fontSize: "32px", marginBottom: "20px", fontWeight: "800" }}>
              Leading the Transport Sector with Excellence
            </h2>
            <p className="welcome-desc">
              Parshuram Express Logistics Pvt. Ltd. was founded with a singular focus: to make industrial and commercial cargo movement seamless, safe, and highly efficient. We have grown into one of India's leading logistics providers, managing bulk shipments and high-value machinery distributions.
            </p>
            <p className="welcome-desc">
              Our operational standards are recognized by major corporate manufacturers, including our decade-long partnership and award-winning service achievements with Saint Gobain.
            </p>
            <p className="welcome-desc">
              We leverage an extensive network of attached and owned vehicles, skilled loading/packing specialists, and GPS-guided fleet control rooms to deliver a superior logistics experience.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <span className="icon-bullet">✓</span>
                30+ Dedicated Logistics Coordinators &amp; Employees
              </div>
              <div className="about-feature">
                <span className="icon-bullet">✓</span>
                17 Regional Clusters for Seamless Interstate Transit
              </div>
              <div className="about-feature">
                <span className="icon-bullet">✓</span>
                Strong Financial Backing by Canara Bank
              </div>
            </div>
          </div>

          <div className="about-graphic-wrapper">
            <div className="about-graphic-text">
              <Image
                src={logoFull}
                alt="Parshuram Express Logistics Pvt. Ltd."
                className="about-graphic-logo"
              />
              <p>India&apos;s Trusted Transporter</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section" style={{ backgroundColor: "#f1f5f9" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Foundations</span>
            <h2 className="section-title">Core Corporate Values</h2>
            <p className="section-desc">
              These principles guide every shipment, fleet deployment, and client service dispatch.
            </p>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {values.map((value, idx) => (
              <div
                key={idx}
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
                  <span style={{ fontSize: "20px", fontWeight: "800" }}>{idx + 1}</span>
                </div>
                <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>{value.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--color-text-muted)" }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & CTA Section */}
      <section className="section" style={{ paddingBottom: "120px" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px", fontWeight: "800" }}>
            Partner with a Leader in Logistics
          </h2>
          <p className="welcome-desc" style={{ marginBottom: "40px" }}>
            Whether you need custom woodworking machinery transit, heavy-load flatbed trailers, or short-term warehouse holding, Parshuram Express is ready to assist your team.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn btn-primary">
              Contact Our Team
            </Link>
            <Link href="/services" className="btn btn-outline">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
