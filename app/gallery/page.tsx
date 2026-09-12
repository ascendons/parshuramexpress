import Reveal from "../../components/motion/Reveal";

export default function Gallery() {
  const galleryItems = [
    {
      title: "Interstate FTL Transit",
      category: "Full Truck Load",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Consolidated LTL Sorting",
      category: "Part Load / LTL",
      image: "https://images.unsplash.com/photo-1607473129014-0afb7ded099e?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Secure Warehouse Consolidation",
      category: "Warehousing",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Dedicated Fleet Deployment",
      category: "Dedicated Fleet",
      image: "https://images.unsplash.com/photo-1516576885230-100c08f53839?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Priority Express Loading",
      category: "Express Transit",
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "First-Mile Pickup Coordination",
      category: "Door-to-Door",
      image: "https://images.unsplash.com/photo-1553413719-8758737f8f7f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Long-Haul Route Transit",
      category: "Long-Distance Freight",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800&sat=-20",
    },
    {
      title: "Vehicle Placement & Loading",
      category: "Full Truck Load",
      image: "https://images.unsplash.com/photo-1607473129014-0afb7ded099e?auto=format&fit=crop&q=80&w=800&sat=-20",
    },
    {
      title: "Pan-India Transit Monitoring",
      category: "Operational Excellence",
      image: "https://images.unsplash.com/photo-1516576885230-100c08f53839?auto=format&fit=crop&q=80&w=800&sat=-20",
    },
  ];

  return (
    <div className="gallery-page">
      {/* Page Header */}
      <section className="section section-dark" style={{ padding: "60px 0", textAlign: "center" }}>
        <div className="container">
          <span className="section-subtitle">Visual Records</span>
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>Operations Gallery</h1>
          <p style={{ color: "var(--color-text-muted-light)", maxWidth: "600px", margin: "0 auto" }}>
            Take a look at our FTL, LTL, dedicated fleet, and express transit operations across India.
          </p>
        </div>
      </section>

      {/* Gallery Showcase Grid */}
      <section className="section">
        <div className="container">
          <div className="gallery-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {galleryItems.map((item, index) => (
              <Reveal key={index} delay={(index % 3) * 0.1} className="gallery-item" style={{ height: "300px" }}>
                <div
                  className="gallery-image-bg"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="gallery-overlay">
                  <div style={{ textAlign: "center" }}>
                    <span
                      style={{
                        display: "inline-block",
                        background: "var(--color-primary)",
                        color: "white",
                        fontSize: "11px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        padding: "4px 8px",
                        borderRadius: "var(--radius-sm)",
                        marginBottom: "10px",
                      }}
                    >
                      {item.category}
                    </span>
                    <h3 style={{ color: "white", fontSize: "18px", fontWeight: "700", margin: "0 10px" }}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
