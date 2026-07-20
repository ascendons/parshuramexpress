"use client";

import React, { useState } from "react";
import Reveal from "../../components/motion/Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "transport",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "transport",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="section section-dark" style={{ padding: "60px 0", textAlign: "center" }}>
        <div className="container">
          <span className="section-subtitle">Get in Touch</span>
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>Contact Parshuram Express</h1>
          <p style={{ color: "var(--color-text-muted-light)", maxWidth: "600px", margin: "0 auto" }}>
            Reach out to our logistics coordination desks for cargo scheduling, rates, or warehouse slots.
          </p>
        </div>
      </section>

      {/* Main Split Section */}
      <section className="section">
        <div className="container contact-split">
          {/* Info Side */}
          <Reveal className="contact-info-side">
            <span className="section-subtitle">Support Center</span>
            <h2 style={{ fontSize: "28px", marginBottom: "24px", fontWeight: "800" }}>
              Corporate Office &amp; Inquiries
            </h2>
            <p className="welcome-desc" style={{ marginBottom: "30px" }}>
              Our administration and accounts teams are based at our registered office in Ratu, Ranchi. Connect directly via phone or email for fast bookings.
            </p>

            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4>Primary Address</h4>
                  <p>
                    Karamtoli, Opposite Hanuman Mandir,<br />
                    Daladali Chowk, Simlia, Ratu,<br />
                    Ranchi - 835222, Jharkhand, India
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4>Call Logistics Helpdesk</h4>
                  <p>
                    <a href="tel:+919900070560">+91 99000 70560</a><br />
                    <a href="tel:+919900070561">+91 99000 70561</a><br />
                    <a href="tel:+917050044409">+91 70500 44409</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4>Email Support</h4>
                  <p>
                    <a href="mailto:info@parshuramexpress.com">info@parshuramexpress.com</a><br />
                    <a href="mailto:accounts@parshuramexpress.com">accounts@parshuramexpress.com</a>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form Side */}
          <Reveal className="contact-form-wrapper" delay={0.15}>
            <h3 className="form-title">Send a Quick Inquiry</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="99000 70560"
                    required
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label htmlFor="service" className="form-label">Inquiry Topic / Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-input"
                  style={{ background: "white" }}
                >
                  <option value="transport">All India Cargo Transport</option>
                  <option value="woodworking">Woodworking Machine Relocation</option>
                  <option value="cnc">CNC or Heavy Rigging</option>
                  <option value="bakery">Bakery Equipment Transit</option>
                  <option value="warehousing">Warehouse Storage Booking</option>
                  <option value="packing">Packing or Loading Crates</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: "30px" }}>
                <label htmlFor="message" className="form-label">Shipment Details &amp; Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Specify cargo weight, size, origin and destination..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%" }}
                disabled={formStatus === "submitting"}
              >
                {formStatus === "submitting" ? "Sending Request..." : "Submit Quote Request"}
              </button>

              {formStatus === "success" && (
                <div
                  style={{
                    marginTop: "20px",
                    padding: "12px 16px",
                    backgroundColor: "#ecfdf5",
                    color: "#065f46",
                    borderRadius: "var(--radius-md)",
                    fontSize: "14px",
                    fontWeight: "600",
                    border: "1px solid #a7f3d0",
                  }}
                >
                  ✓ Thank you! Your inquiry has been sent. A logistics consultant will call you shortly.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
