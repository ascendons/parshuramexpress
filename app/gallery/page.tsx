/* eslint-disable @next/next/no-img-element -- static export with remote images; next/image adds nothing here */
import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import BookSection from "../../components/BookSection";
import Reveal from "../../components/motion/Reveal";
import { Truck } from "../../components/icons";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Full truck load, part load, dedicated fleet and express transit operations.",
};

// Only two usable stock photos remain; the rest render as brand tiles until
// real fleet photos are supplied.
const shots: { title: string; tag: string; image?: string }[] = [
  { title: "Interstate FTL transit", tag: "FTL", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1400" },
  { title: "Consolidated part load", tag: "LTL" },
  { title: "Dedicated fleet deployment", tag: "DED" },
  { title: "Priority express dispatch", tag: "EXP" },
  { title: "Warehouse consolidation", tag: "LDF", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=900" },
  { title: "First-mile pickup", tag: "D2D" },
];

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Freight in <em>motion.</em>
          </>
        }
        lead="Full truck load, part load, dedicated fleet and express transit, from the loading bay to the open road."
      />

      <section className="section">
        <div className="container gallery">
          {shots.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08} style={{ height: "100%" }}>
              <figure className={`shot ${s.image ? "" : "is-art"}`}>
                {s.image ? (
                  <img src={s.image} alt={s.title} loading="lazy" />
                ) : (
                  <div className="shot-art" aria-hidden>
                    <span className="shot-code">{s.tag}</span>
                    <Truck className="shot-truck" />
                  </div>
                )}
                <figcaption>
                  <strong>{s.title}</strong>
                  <span className="mono">{s.tag}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <BookSection />
    </>
  );
}
