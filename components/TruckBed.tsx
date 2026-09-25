"use client";

import { motion, useReducedMotion } from "framer-motion";

const BED_X = 8;
const BED_W = 300;
const BED_Y = 12;
const BED_H = 86;
const GAP = 6;

const fills = ["var(--brass)", "currentColor", "currentColor"];
const opacities = [1, 0.32, 0.18];

/**
 * Side view of a truck showing how much of the bed a service typically uses:
 * one full block for FTL, several smaller consignments sharing for LTL, etc.
 */
export default function TruckBed({ load, id }: { load: number[]; id: string }) {
  const reduce = useReducedMotion();
  const used = Math.round(Math.min(1, load.reduce((a, b) => a + b, 0)) * 100);

  const widths = load.map((share, i) => Math.max(0, share * (BED_W - 8) - (i < load.length - 1 ? GAP : 0)));
  const blocks = widths.map((w, i) => ({
    x: BED_X + 4 + widths.slice(0, i).reduce((a, b) => a + b + GAP, 0),
    w,
    i,
  }));

  return (
    <div className="truckbed">
      <svg viewBox="0 0 420 130" width="100%" aria-hidden>
        {/* trailer */}
        <rect x={BED_X} y={BED_Y} width={BED_W} height={BED_H} rx="3" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="5 5" />
        {blocks.map((b) => (
          <motion.rect
            key={`${id}-${b.i}`}
            x={b.x}
            y={BED_Y + 4}
            height={BED_H - 8}
            rx="2"
            fill={fills[b.i] ?? "currentColor"}
            fillOpacity={opacities[b.i] ?? 0.18}
            initial={{ width: 0 }}
            animate={{ width: b.w }}
            transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : b.i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        {/* cab */}
        <path d="M322 34h46l30 32v32h-76V34Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M332 42h32l20 22h-52V42Z" fill="var(--brass)" fillOpacity="0.8" />
        <path d="M0 100h412" stroke="currentColor" strokeWidth="2" />
        {[44, 92, 356].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="108" r="13" fill="var(--truck-wheel, var(--navy))" stroke="currentColor" strokeWidth="2" />
            <circle cx={cx} cy="108" r="4" fill="currentColor" />
          </g>
        ))}
      </svg>
      <div className="truckbed-meta">
        <span className="mono">
          Bed used <strong>~{used}%</strong>
        </span>
        <span className="mono">
          {load.length === 1
            ? "Your load only"
            : `Yours + ${load.length - 1} other${load.length > 2 ? "s" : ""} sharing`}
        </span>
      </div>
    </div>
  );
}
