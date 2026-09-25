import Reveal from "./motion/Reveal";
import BookingSlip from "./BookingSlip";
import { mailto, site, tel, whatsapp } from "../lib/site";

export default function BookSection({ heading = true }: { heading?: boolean }) {
  return (
    <section id="book" className="section ink">
      <div className="container book-grid">
        <Reveal>
          {heading && (
            <>
              <p className="eyebrow">Book a vehicle</p>
              <h2 className="display h-lg">
                Tell us the lane.
                <br />
                <em>We&apos;ll place the truck.</em>
              </h2>
            </>
          )}
          <p className="lead" style={{ marginTop: heading ? 28 : 0 }}>
            Share where it starts, where it ends and what&apos;s on board. Our coordinators come back with the right
            vehicle and a clear rate for FTL, part load, express or dedicated fleet.
          </p>
          <div className="book-contacts">
            <a href={tel}>
              <span className="mono">Call the dispatch desk</span>
              <strong>{site.phoneDisplay}</strong>
            </a>
            <a href={whatsapp()} target="_blank" rel="noopener noreferrer">
              <span className="mono">WhatsApp</span>
              <strong>Chat with us</strong>
            </a>
            <a href={mailto()}>
              <span className="mono">Email</span>
              <strong>{site.email}</strong>
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <BookingSlip />
        </Reveal>
      </div>
    </section>
  );
}
