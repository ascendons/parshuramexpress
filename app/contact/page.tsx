import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import BookingSlip from "../../components/BookingSlip";
import Reveal from "../../components/motion/Reveal";
import { mailto, site, tel, whatsapp } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a vehicle or ask for a rate. Call, WhatsApp or email the Parshuram Express dispatch desk in Ranchi.",
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  "Daladalli Chowk, Karamtoli, Ranchi, Jharkhand 835303",
)}&output=embed`;

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Where&apos;s it <em>going?</em>
          </>
        }
        lead="Book a vehicle, ask for a rate or check on a consignment. The dispatch desk answers on phone, WhatsApp and email."
      />

      <section className="section">
        <div className="container book-grid">
          <Reveal>
            <div className="contact-cards">
              <a className="contact-card" href={tel}>
                <span className="mono">Call</span>
                <strong>{site.phoneDisplay}</strong>
                <span>Bookings, rates and vehicle placement</span>
              </a>
              <a className="contact-card" href={whatsapp()} target="_blank" rel="noopener noreferrer">
                <span className="mono">WhatsApp</span>
                <strong>Message the desk</strong>
                <span>Send load details and photos</span>
              </a>
              <a className="contact-card" href={mailto()} style={{ gridColumn: "1 / -1" }}>
                <span className="mono">Email</span>
                <strong>{site.email}</strong>
                <span>Enterprise contracts and documentation</span>
              </a>
              <div className="contact-card" style={{ gridColumn: "1 / -1" }}>
                <span className="mono">Registered office</span>
                <strong>{site.address.lines.join(", ")}</strong>
                <span>
                  CIN {site.cin} · GSTIN {site.gstin}
                </span>
              </div>
            </div>
            <div className="map-frame">
              <iframe src={mapSrc} title="Parshuram Express office on the map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>

          <Reveal delay={0.15} id="book" style={{ scrollMarginTop: 110 }}>
            <p className="eyebrow">Book a vehicle</p>
            <h2 className="display h-md" style={{ marginBottom: 32 }}>
              Fill the slip. <em>We&apos;ll call back.</em>
            </h2>
            <BookingSlip />
          </Reveal>
        </div>
      </section>
    </>
  );
}
