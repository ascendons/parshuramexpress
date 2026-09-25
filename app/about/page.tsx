import type { Metadata } from "next";
import Image from "next/image";
import logoFull from "../../assets/logo-full.png";
import PageHero from "../../components/PageHero";
import Seal from "../../components/Seal";
import BookSection from "../../components/BookSection";
import Reveal from "../../components/motion/Reveal";
import { industries, promises, site } from "../../lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Parshuram Express Logistics Pvt. Ltd. is a Ranchi-based transport and supply chain partner offering pan-India road freight.",
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the company"
        title={
          <>
            Your cargo, <em>our commitment.</em>
          </>
        }
        lead="Your trust, our responsibility. A professional transport & logistics company from Ranchi, moving freight for businesses across India."
      />

      <section className="section">
        <div className="container split">
          <Reveal className="prose">
            <p>
              We believe transportation is more than moving goods from one place to another. It is about protecting
              your cargo, meeting delivery commitments, and building long-term business relationships.
            </p>
            <p>
              {site.name} offers reliable, efficient and cost-effective transportation for businesses across
              India, specialising in full truck load, part load, dedicated vehicle movement, express transportation
              and door-to-door cargo delivery.
            </p>
            <p>
              Our focus is simple: the right vehicle, the right route, the right handling and the right delivery
              time. Precision vehicle matching, proactive transit monitoring and a pan-India operations network make
              that a single-point transportation experience for our clients.
            </p>
          </Reveal>
          <Reveal delay={0.15} style={{ display: "grid", gap: 32, alignContent: "start" }}>
            <div
              style={{
                padding: "48px 32px",
                borderRadius: 10,
                background: "var(--paper-2)",
                border: "1px solid var(--line-light)",
                display: "grid",
                placeItems: "center",
                gap: 20,
                textAlign: "center",
              }}
            >
              <Image src={logoFull} alt={site.name} style={{ width: "min(260px, 70%)", height: "auto" }} />
              <span className="mono" style={{ color: "var(--brass-deep)" }}>
                {site.tagline}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-2)" }}>
        <div className="container">
          <Reveal className="section-head">
            <div>
              <p className="eyebrow">What guides us</p>
              <h2 className="display h-lg">
                Principles behind <em>every booking.</em>
              </h2>
            </div>
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

      <section className="section dark">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <p className="eyebrow">Industries served</p>
              <h2 className="display h-lg">
                Built around <em>business</em> freight.
              </h2>
            </div>
            <p className="lead">
              Dependable logistics support designed around the transportation needs of business clients across
              sectors.
            </p>
          </Reveal>
          <Reveal>
            <ul className="industry-grid">
              {industries.map((name, i) => (
                <li key={name} className="industry">
                  <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{name}</h3>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="registry">
            <Seal />
            <div>
              <p className="eyebrow">Corporate details</p>
              <dl>
                <div>
                  <dt>Registered name</dt>
                  <dd>{site.name}</dd>
                </div>
                <div>
                  <dt>CIN</dt>
                  <dd>{site.cin}</dd>
                </div>
                <div>
                  <dt>GSTIN</dt>
                  <dd>{site.gstin}</dd>
                </div>
                <div>
                  <dt>Registered office</dt>
                  <dd>{site.address.lines.join(", ")}</dd>
                </div>
                <div>
                  <dt>Network</dt>
                  <dd>Pan-India operations</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <BookSection />
    </>
  );
}
