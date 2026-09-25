"use client";

import { useReducedMotion } from "framer-motion";

// The logo's road swoosh, stretched across the page: wide at the near
// (left) end, narrowing toward a horizon on the right.
const EDGE_TOP = "M-60 360 C 420 250, 820 170, 1500 150";
const EDGE_BOTTOM = "M1500 170 C 820 216, 420 352, -60 530";
const CENTRE = "M-60 445 C 420 301, 820 193, 1500 160";

export default function Road({ truck = true, className }: { truck?: boolean; className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg className={className} viewBox="0 0 1440 440" preserveAspectRatio="xMidYMax slice" aria-hidden>
      <defs>
        <linearGradient id="road-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#f3ecde" stopOpacity="0.1" />
          <stop offset="1" stopColor="#f3ecde" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path d={`${EDGE_TOP} L 1500 170 ${EDGE_BOTTOM.replace("M1500 170", "")} Z`} fill="url(#road-fade)" />
      <path d={EDGE_TOP} stroke="#ca9c51" strokeOpacity="0.55" strokeWidth="1.5" fill="none" />
      <path d={EDGE_BOTTOM} stroke="#ca9c51" strokeOpacity="0.35" strokeWidth="1.5" fill="none" />
      <path d={CENTRE} stroke="#f3ecde" strokeOpacity="0.5" strokeWidth="3" fill="none" className="road-dash" />

      {truck && !reduce && (
        <g>
          <animateMotion dur="14s" repeatCount="indefinite" rotate="auto" path={CENTRE} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.3 0 0.7 1" />
          <g>
            <animateTransform attributeName="transform" type="scale" values="1.25;0.22" dur="14s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.3 0 0.7 1" />
            <g transform="translate(-60 -46)" color="#f3ecde">
              <rect x="0" y="4" width="78" height="34" rx="2" fill="#0a1c38" stroke="currentColor" strokeWidth="2" />
              <path d="M10 14h30M10 21h18" stroke="#ca9c51" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M82 14h20l14 14v10H82V14Z" fill="#0a1c38" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M88 18h12l8 9H88v-9Z" fill="#ca9c51" />
              <circle cx="18" cy="42" r="6.5" fill="#06101f" stroke="currentColor" strokeWidth="2" />
              <circle cx="60" cy="42" r="6.5" fill="#06101f" stroke="currentColor" strokeWidth="2" />
              <circle cx="100" cy="42" r="6.5" fill="#06101f" stroke="currentColor" strokeWidth="2" />
            </g>
          </g>
        </g>
      )}
    </svg>
  );
}
