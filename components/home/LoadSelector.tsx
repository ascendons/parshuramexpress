"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { services } from "../../lib/site";
import TruckBed from "../TruckBed";
import { Arrow } from "../icons";

/** "What are you moving?" — pick your situation, see the service built for it. */
export default function LoadSelector() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const s = services[active];

  return (
    <div className="selector">
      <ul className="selector-list" role="tablist" aria-label="Your shipment">
        {services.map((svc, i) => (
          <li key={svc.id}>
            <button
              type="button"
              role="tab"
              id={`need-${svc.id}`}
              aria-selected={i === active}
              aria-controls="need-panel"
              className="selector-btn"
              onClick={() => setActive(i)}
            >
              <span className="mono">{svc.code}</span>
              <span className="need">{svc.need}</span>
              <span className="arrow">
                <Arrow size={20} />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="selector-panel" id="need-panel" role="tabpanel" aria-labelledby={`need-${s.id}`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="selector-panel-head">
              <span className="mono" style={{ color: "var(--muted-light)" }}>
                You need
              </span>
              <span className="selector-code">{s.code}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.summary}</p>
            <TruckBed load={s.load} id={s.id} />
            <ul className="feature-list">
              {s.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link href={`/services#${s.id}`} className="link-arrow">
              How {s.title} works <Arrow />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
