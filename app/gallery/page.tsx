import Reveal from "../../components/motion/Reveal";

export default function Gallery() {
  const galleryItems = [
    {
      title: "Interstate Fleet Transit",
      category: "Transportation",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Precision CNC Router Rigging",
      category: "Machinery",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Industrial Storage Facility",
      category: "Warehousing",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Heavy Woodworking Line Placement",
      category: "Machinery",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Consolidated Warehouse Sorting",
      category: "Warehousing",
      image: "https://images.unsplash.com/photo-1607473129014-0afb7ded099e?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Flatbed Trailer Setup",
      category: "Transportation",
      image: "https://images.unsplash.com/photo-1516576885230-100c08f53839?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Bakery Oven Relocation",
      category: "Machinery",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Heavy Cargo Dock Loading",
      category: "Transportation",
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "High-Volume Inventory Control",
      category: "Warehousing",
      image: "https://images.unsplash.com/photo-1553413719-8758737f8f7f?auto=format&fit=crop&q=80&w=800",
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
            Take a look at our specialized transport fleet, heavy machinery packaging, and secure warehouse facilities.
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
