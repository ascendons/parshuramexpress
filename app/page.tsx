import Hero from "../components/home/Hero";
import LoadSelector from "../components/home/LoadSelector";
import RouteProgress from "../components/home/RouteProgress";
import Marquee from "../components/Marquee";
import Seal from "../components/Seal";
import BookSection from "../components/BookSection";
import Reveal from "../components/motion/Reveal";
import { promises, site } from "../lib/site";

const rights = [
  ["Right", "vehicle"],
  ["Right", "route"],
  ["Right", "handling"],
  ["Right", "delivery time"],
];

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Who we are */}
      <section className="section">
        <div className="container">
          <div className="intro-grid">
            <Reveal>
              <p className="eyebrow">Who we are</p>
              <p className="intro-statement">
                A premier transport &amp; supply chain partner, moving freight across India{" "}
                <span className="fade">end-to-end, reliably, and at a cost that makes sense.</span>{" "}
                We don&apos;t
                just transport cargo, <em className="em">we deliver your business commitments.</em>
              </p>
            </Reveal>
            <Reveal className="intro-side" delay={0.15}>
              <p>
                {site.name} specialises in point-to-point full truckload, consolidated part load, priority express
                transit and dedicated enterprise fleet logistics, run from our office in Ranchi, Jharkhand, with
                operations across the country.
              </p>
              <Seal />
            </Reveal>
          </div>

          <Reveal className="rights">
            {rights.map(([a, b], i) => (
              <div key={b} className="right-item">
                <span className="mono">0{i + 1}</span>
                <h3>
                  {a} <em>{b}</em>
                </h3>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Services as a selector */}
      <section className="section dark" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal className="section-head">
            <div>
              <p className="eyebrow">Core logistics solutions</p>
              <h2 className="display h-lg">
                What are you <em>moving?</em>
              </h2>
            </div>
            <p className="lead">
              Pick the line that sounds like your shipment. Each one maps to a service built for it, from a single
              pallet sharing space to a fleet committed to your contract.
            </p>
          </Reveal>
          <LoadSelector />
        </div>
      </section>

      <RouteProgress />

      {/* Why us */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <p className="eyebrow">Why Parshuram Express</p>
              <h2 className="display h-lg">
                Four things we <em>won&apos;t</em> compromise on.
              </h2>
            </div>
            <p className="lead">
              Trust, care and commitment are easy to print on a truck. These are the practices behind them, on every
              consignment we accept.
            </p>
          </Reveal>
          <div className="promises" role="list">
            {promises.map((p, i) => (
              <Reveal key={p.title} className="promise" role="listitem" delay={i * 0.05}>
                <span className="mono">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section quote-band">
        <div className="container">
          <Reveal>
            <div className="quote-mark" aria-hidden>
              &ldquo;
            </div>
            <blockquote>
              Transportation is about <em>protecting your cargo,</em> fulfilling commitments, and driving your
              business forward.
            </blockquote>
            <cite className="mono">{site.short} · {site.motto}</cite>
          </Reveal>
        </div>
      </section>

      <BookSection />
    </>
  );
}
