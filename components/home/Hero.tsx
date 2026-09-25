"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Road from "../Road";
import Tracker from "./Tracker";
import { Arrow } from "../icons";

const facts = [
  ["6", "Core logistics solutions"],
  ["8", "Industries served"],
  ["Pan-India", "Road network"],
  ["Ranchi", "Head office, Jharkhand"],
];

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 36 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: reduce ? 0 : delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <motion.p className="eyebrow" {...rise(0.05)}>
            Road freight · FTL · LTL · Express
          </motion.p>
          <motion.h1 className="display h-xl" {...rise(0.15)}>
            We connect.
            <br />
            We deliver.
            <br />
            <span className="nowrap"><em>On time,</em> every time.</span>
          </motion.h1>
          <motion.p className="lead" {...rise(0.3)}>
            Parshuram Express is a transport &amp; supply chain partner for businesses across India. The right
            vehicle, the right route, the right handling and the right delivery time, on every consignment.
          </motion.p>
          <motion.div className="hero-actions" {...rise(0.4)}>
            <Link href="/contact#book" className="btn btn-brass">
              Book a vehicle <Arrow />
            </Link>
            <Link href="/services" className="btn btn-ghost">
              Explore services
            </Link>
          </motion.div>
        </div>

        <motion.div {...rise(0.35)}>
          <Tracker />
        </motion.div>
      </div>

      <div className="hero-road">
        <Road />
      </div>

      <div className="hero-bottom">
        <div className="container hero-bottom-row">
          {facts.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span className="mono">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
