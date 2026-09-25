import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import TruckBed from "../../components/TruckBed";
import BookSection from "../../components/BookSection";
import Reveal from "../../components/motion/Reveal";
import { Arrow } from "../../components/icons";
import { services, workflow } from "../../lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full truck load, part load, express transit, dedicated fleet, long-distance freight and door-to-door delivery across India.",
};

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={
          <>
            Six ways to move <em>freight</em> across India.
          </>
        }
        lead="Reliable, efficient and cost-effective road transportation for businesses, sized to the load and the deadline."
      >
        <nav className="page-hero-index" aria-label="Services on this page">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="section light-truck" style={{ ["--truck-wheel" as string]: "var(--paper-2)" }}>
        <div className="container">
          {services.map((s, i) => (
            <Reveal key={s.id} id={s.id} className="svc">
              <div className="svc-code">
                <b>0{i + 1}</b>
                {s.code}
              </div>
              <div>
                <h2>{s.title}</h2>
                <p className="svc-need">&ldquo;{s.need}.&rdquo;</p>
                <p>{s.summary}</p>
                <p style={{ marginTop: 14 }}>{s.body}</p>
                <Link href="/contact#book" className="link-arrow" style={{ marginTop: 28 }}>
                  Book {s.title} <Arrow />
                </Link>
              </div>
              <div className="svc-visual">
                <TruckBed load={s.load} id={s.id} />
                <ul className="feature-list">
                  {s.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <p className="eyebrow">Every service, same six stages</p>
              <h2 className="display h-md">
                From booking to <em>proof of delivery.</em>
              </h2>
            </div>
          </Reveal>
          <ol className="route-cards is-grid">
            {workflow.map((w, i) => (
              <li key={w.title} className="route-card">
                <span className="num">0{i + 1}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <BookSection />
    </>
  );
}
