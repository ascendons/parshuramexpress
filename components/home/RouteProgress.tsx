"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { workflow } from "../../lib/site";
import { Truck } from "../icons";

/**
 * The six-stage workflow as a road. On desktop the section pins and the truck
 * drives from Booking to POD as you scroll; on phones it's a plain list.
 */
export default function RouteProgress() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);

  // Hold briefly at each end so the first and last stop get their moment.
  const travel = useTransform(scrollYProgress, [0.08, 0.92], [0, 1], { clamp: true });
  const truckLeft = useTransform(travel, (v) => `${v * 100}%`);

  useMotionValueEvent(travel, "change", (v) => {
    setActive(Math.min(workflow.length - 1, Math.round(v * (workflow.length - 1))));
  });

  const step = workflow[active];

  return (
    <section ref={ref} className="route dark">
      <div className="route-sticky">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div>
              <p className="eyebrow">Operational workflow</p>
              <h2 className="display h-lg">
                Six stops. <em>One promise.</em>
              </h2>
            </div>
            <p className="lead">
              A smooth, transparent transportation experience at every stage, from the booking call to the signed
              proof of delivery.
            </p>
          </div>

          <div className="route-stage">
            <div className="route-track" aria-hidden>
              <div className="route-line" />
              <motion.div className="route-line-fill" style={{ scaleX: travel }} />
              <ol className="route-stops">
                {workflow.map((w, i) => (
                  <li
                    key={w.title}
                    className={`route-stop ${i < active ? "is-passed" : ""} ${i === active ? "is-active" : ""}`}
                  >
                    <i />
                    <span>{w.title}</span>
                  </li>
                ))}
              </ol>
              <motion.div className="route-truck" style={{ left: truckLeft }}>
                <Truck />
              </motion.div>
            </div>

            <div className="route-focus" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={`n${active}`}
                  className="num"
                  initial={{ opacity: 0, y: reduce ? 0 : 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduce ? 0 : -30 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  0{active + 1}
                </motion.span>
              </AnimatePresence>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`t${active}`}
                  initial={{ opacity: 0, x: reduce ? 0 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reduce ? 0 : -20 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <ol className="route-cards">
              {workflow.map((w, i) => (
                <li key={w.title} className="route-card">
                  <span className="num">0{i + 1}</span>
                  <h3>{w.title}</h3>
                  <p>{w.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
