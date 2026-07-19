export default function Services() {
  const serviceList = [
    {
      id: "transport",
      title: "All India Heavy Transportation",
      description: "We provide comprehensive road transportation solutions across all 29 states in India. From raw materials to heavy industrial components, our fleet guarantees secure and scheduled transit. Equipped with GPS and managed by certified interstate operators.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
      features: ["Interstate Permits & Clearances", "Full Truck Load (FTL) Options", "GPS Vehicle Track & Trace", "24/7 Route Coordination Desk"],
    },
    {
      id: "woodworking",
      title: "Woodworking Machine Logistics",
      description: "Transporting woodworking machinery requires specialized loading docks, careful tie-down rigs, and experienced operators. We handle edge banders, panel saws, automated CNC woodworking lines, and sanders with complete damage-free assurance.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
      features: ["Machinery Rigging & Lifting", "Cushioned Transit Ties", "Tailored Insurance Coverage", "On-site Placement Support"],
    },
    {
      id: "cnc",
      title: "CNC Machine & Heavy Machinery",
      description: "Precision CNC machinery is highly sensitive to vibrations and tilt. Our specialized logistics team uses custom flatbed trailers, air-ride suspension options, and protective wrapping to ensure alignment and calibrations remain intact.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      features: ["Vibration-dampened Trailers", "Industrial Crane Loading", "Climate-secure Tarps", "Heavy Cargo Transit Approvals"],
    },
    {
      id: "bakery",
      title: "Bakery & Food Processing Equipment",
      description: "Specialized logistics support for commercial kitchens, retail bakery operations, and food production plants. We relocate sensitive machinery like industrial deck ovens, mixers, sorting belts, and refrigeration units.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
      features: ["Food-Grade Wrapping Guidelines", "Heavy Oven Relocations", "Temperature Control Transit", "Multi-Unit Assembly Planning"],
    },
    {
      id: "exhibition",
      title: "Exhibition Goods & Event Logistics",
      description: "Timing is critical for corporate exhibitions and commercial displays. We manage the pickup, transport, safe delivery, unloading, and subsequent retrieval of display materials, showroom samples, and event booths.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      features: ["Strict Event Deadline Adherence", "Safe Unloading & Unpacking", "Multi-Stop Return Routing", "Priority Showroom Transit"],
    },
    {
      id: "warehousing",
      title: "Safe Warehousing & Planned Storage",
      description: "Our modern warehouses in strategic South India locations provide temporary and long-term storage facilities. Complete with inventory registries, secure loading docks, fire safety, and round-the-clock patrol.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      features: ["24/7 Security & CCTV Monitoring", "Inventory Management Systems", "Flexible Storage Contracts", "Consolidation & Deconsolidation"],
    },
    {
      id: "packing",
      title: "Industrial Packing & Crating",
      description: "Proper packaging is the first line of defense for freight. We offer professional industrial packing services, including heavy wooden box crating, vacuum packaging, bubble padding, and custom anti-corrosion sheets for ocean/road transit.",
      image: "https://images.unsplash.com/photo-1607473129014-0afb7ded099e?auto=format&fit=crop&q=80&w=800",
      features: ["Heavy Duty Wooden Crates", "Anti-Rust Vacuum Packaging", "Shock & Moisture Indicators", "Fragile Component Sorting"],
    },
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="section section-dark" style={{ padding: "60px 0", textAlign: "center" }}>
        <div className="container">
          <span className="section-subtitle">What We Do</span>
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>Logistics Solutions Directory</h1>
          <p style={{ color: "var(--color-text-muted-light)", maxWidth: "600px", margin: "0 auto" }}>
            Comprehensive transportation, packaging, and warehouse storage operations tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container detailed-services-list">
          {serviceList.map((service, index) => (
            <div key={index} id={service.id} className="detailed-service-item">
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
