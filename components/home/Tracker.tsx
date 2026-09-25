"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { workflow } from "../../lib/site";

const STEP_MS = 1500;
const HOLD_MS = 2600;

/** A consignment card that walks through the six workflow stages on a loop. */
export default function Tracker() {
  const reduce = useReducedMotion();
  // 0..5 = stage in progress, 6 = delivered & POD confirmed
  const [stage, setStage] = useState(2);

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(
      () => setStage((s) => (s >= workflow.length ? 0 : s + 1)),
      stage >= workflow.length ? HOLD_MS : STEP_MS,
    );
    return () => clearTimeout(t);
  }, [stage, reduce]);

  const delivered = stage >= workflow.length;

  return (
    <div className="tracker" role="img" aria-label="Illustration of a consignment moving through the six stages from booking to proof of delivery">
      <div className="tracker-head">
        <span className="mono">Consignment · PEL/RNC</span>
        <span className="mono tracker-live">{delivered ? "Closed" : "In motion"}</span>
      </div>

      <div className="tracker-lane">
        <div>
          <span className="mono">Origin</span>
          <strong>Ranchi</strong>
        </div>
        <svg width="56" height="14" viewBox="0 0 56 14" fill="none" aria-hidden>
          <path d="M0 7h50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="m46 2 6 5-6 5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <div>
          <span className="mono">Destination</span>
          <strong>Pan-India</strong>
        </div>
      </div>

      <ol className="tracker-steps">
        {workflow.map((step, i) => {
          const state = i < stage ? "is-done" : i === stage ? "is-current" : "";
          return (
            <li key={step.title} className={`tracker-step ${state}`}>
              <span className="tracker-dot">
                {i < stage && (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" aria-hidden>
                    <path d="M4 12.5 9.5 18 20 6" />
                  </svg>
                )}
              </span>
              <span>{step.title}</span>
              <span className="mono">{i < stage ? "Done" : i === stage ? "Now" : ""}</span>
            </li>
          );
        })}
      </ol>

      <div className={`tracker-stamp ${delivered ? "is-on" : ""}`}>POD ✓</div>

      <div className="tracker-foot">
        <span>Every booking runs these six stages.</span>
        <span className="mono" style={{ fontSize: 10 }}>
          {Math.min(stage, workflow.length)}/{workflow.length}
        </span>
      </div>
    </div>
  );
}
