import Reveal from "../../components/motion/Reveal";

export default function Services() {
  const serviceList = [
    {
      id: "ftl",
      title: "Full Truck Load (FTL)",
      description: "Dedicated trucks for large-volume consignments with direct point-to-point transportation, minimizing handling and transit time. Ideal for large consignments requiring minimum transit handling and complete vehicle control.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
      features: ["Direct Point-to-Point Transit", "Minimum Handling & Transit Time", "Precision Vehicle Matching", "24/7 Route Coordination Desk"],
    },
    {
      id: "ltl",
      title: "Part Load / LTL",
      description: "Reliable and economical transportation for smaller consignments through consolidated freight movement, helping businesses optimize transportation costs without compromising on delivery reliability.",
      image: "https://images.unsplash.com/photo-1607473129014-0afb7ded099e?auto=format&fit=crop&q=80&w=800",
      features: ["Consolidated Freight Movement", "Cost-Optimized Shipping", "Ideal for Smaller Consignments", "Reliable Transit Scheduling"],
    },
    {
      id: "dedicated-fleet",
      title: "Dedicated Vehicle Services",
      description: "Dedicated vehicle arrangements for regular business requirements, providing better control, consistent movement and dependable delivery schedules. Custom vehicle deployment for enterprise contracts with guaranteed availability.",
      image: "https://images.unsplash.com/photo-1516576885230-100c08f53839?auto=format&fit=crop&q=80&w=800",
      features: ["Guaranteed Vehicle Availability", "Consistent Movement Schedules", "Enterprise Contract Support", "Better Operational Control"],
    },
    {
      id: "express",
      title: "Express & Priority Transport",
      description: "Fast transportation solutions for time-sensitive and urgent consignments, with priority movement and close operational coordination. Fast-track priority transport engineered for urgent freight.",
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800",
      features: ["Priority Movement Scheduling", "Urgent Consignment Handling", "Close Operational Coordination", "Fast-Track Dispatch"],
    },
    {
      id: "door-to-door",
      title: "Door-to-Door Delivery",
      description: "Complete transportation support from pickup location to final destination, including first-mile pickup and last-mile delivery. Seamless end-to-end coverage with final verified delivery.",
      image: "https://images.unsplash.com/photo-1553413719-8758737f8f7f?auto=format&fit=crop&q=80&w=800",
      features: ["First-Mile Pickup", "Last-Mile Delivery", "Single-Point Coordination", "Final Verified Delivery (POD)"],
    },
    {
      id: "regular-business",
      title: "Regular Business Transportation",
      description: "Transportation solutions for companies requiring frequent and scheduled cargo movement, with coordinated vehicle placement and delivery management for ongoing business needs.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800&sat=-20",
      features: ["Frequent & Scheduled Movement", "Coordinated Vehicle Placement", "Dependable Delivery Management", "Business-Focused Service"],
    },
    {
      id: "long-distance",
      title: "Long-Distance Road Transport",
      description: "Efficient road transportation for intercity and interstate cargo movement, supported by route planning and operational coordination. Optimized with continuous transit tracking.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      features: ["Intercity & Interstate Transit", "Route Planning & Coordination", "Continuous Transit Tracking", "Pan-India Network"],
    },
    {
      id: "pickup-delivery",
      title: "Pickup & Delivery Management",
      description: "Coordinated pickup, transit and delivery operations to provide businesses with a single-point transportation solution — booking through POD confirmation, fully managed.",
      image: "https://images.unsplash.com/photo-1607473129014-0afb7ded099e?auto=format&fit=crop&q=80&w=800&sat=-20",
      features: ["Single-Point Transportation Solution", "Coordinated Pickup & Transit", "Transparent Delivery Process", "POD / Delivery Confirmation"],
    },
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="section section-dark" style={{ padding: "60px 0", textAlign: "center" }}>
        <div className="container">
          <span className="section-subtitle">What We Do</span>
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>Transport &amp; Logistics Services</h1>
          <p style={{ color: "var(--color-text-muted-light)", maxWidth: "600px", margin: "0 auto" }}>
            Reliable, efficient and cost-effective transportation solutions for businesses across India.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container detailed-services-list">
          {serviceList.map((service, index) => (
            <Reveal key={index} id={service.id} className="detailed-service-item">
              <div
                className="detailed-service-img"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="detailed-service-content">
                <span className="section-subtitle">Service Description</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <h4 style={{ fontSize: "15px", marginBottom: "12px", color: "var(--color-text-dark)" }}>
                  Key Capabilities Include:
                </h4>
                <ul className="service-features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ marginRight: "8px", color: "var(--color-primary)" }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
