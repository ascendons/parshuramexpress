// Single source of truth for the scroll journey: how much of the page scroll
// each scene owns, the copy shown over it, and where its greybox geometry
// and camera control point sit in world space. Everything else (camera math,
// DOM copy, route rail) reads from this file rather than hardcoding scenes.

export type Align = "left" | "right" | "center";

export type JourneyScene = {
  id: string;
  index: number;
  /** Fraction of total page scroll [0..1] where this scene owns the camera. */
  from: number;
  to: number;
  eyebrow: string;
  title: string;
  body: string;
  tags?: string[];
  cta?: { label: string; href: string };
  align: Align;
  /** Approximate ground position (x, y, z) for this scene's greybox geometry. */
  anchor: [number, number, number];
};

export const SCENES: JourneyScene[] = [
  {
    id: "warehouse",
    index: 0,
    from: 0.0,
    to: 0.08,
    eyebrow: "Scene 01 · Warehouse Reveal",
    title: "Moving India's Industry Forward",
    body: "Dawn fog over the yard. The fleet idles in the loading bay as the camera descends from above the hub.",
    tags: ["500+ Projects Completed"],
    align: "left",
    anchor: [3, 0, 6],
  },
  {
    id: "loading-dock",
    index: 1,
    from: 0.08,
    to: 0.18,
    eyebrow: "Scene 02 · Loading Dock",
    title: "Complete Loading & Packing",
    body: "Forklift, crane and crew move in sync — heavy-duty crating, container doors swinging open, nothing static.",
    align: "right",
    anchor: [6, 0, -9],
  },
  {
    id: "shipment-begins",
    index: 2,
    from: 0.18,
    to: 0.26,
    eyebrow: "Scene 03 · Shipment Begins",
    title: "On the road.",
    body: "The gate lifts. The truck pulls out of the bay and the yard gives way to open road.",
    align: "left",
    anchor: [7, 0, -36],
  },
  {
    id: "journey",
    index: 3,
    from: 0.26,
    to: 0.5,
    eyebrow: "Scene 04 · The Journey",
    title: "Bridges. Highways. Factories.",
    body: "The longest leg — five capabilities dock beside the truck as it earns them, one at a time.",
    tags: [
      "GPS Tracking",
      "Real-Time Updates",
      "Safe Delivery",
      "Dedicated Fleet — 150+ Vehicles",
      "Pan-India Network — 29 States",
    ],
    align: "center",
    anchor: [0, 0, -75],
  },
  {
    id: "specialized",
    index: 4,
    from: 0.5,
    to: 0.66,
    eyebrow: "Scene 05 · Specialized Transport",
    title: "What we actually carry.",
    body: "Woodworking machinery. CNC systems. Bakery production lines. Exhibition installs. Real Parshuram specializations, not generic cargo.",
    tags: ["Woodworking Machinery", "CNC Systems", "Bakery & Food Equipment", "Exhibition Goods"],
    align: "right",
    anchor: [-7, 0, -110],
  },
  {
    id: "network",
    index: 5,
    from: 0.66,
    to: 0.8,
    eyebrow: "Scene 06 · Nationwide Network",
    title: "All 29 states. One network.",
    body: "The road dissolves into a living map — routes tracing between hub cities, shipment dots in transit.",
    tags: ["150+ Attached Vehicles", "50+ Owned Fleet", "30+ Team"],
    align: "center",
    anchor: [-4, 0, -140],
  },
  {
    id: "trust",
    index: 6,
    from: 0.8,
    to: 0.9,
    eyebrow: "Scene 07 · Trust",
    title: "Best Transporter of the Decade — Saint Gobain",
    body: "Back at the warehouse shelving, the award and client crates sit as physical proof, not a testimonial carousel.",
    align: "left",
    anchor: [2, 0, -172],
  },
  {
    id: "delivery",
    index: 7,
    from: 0.9,
    to: 1.0,
    eyebrow: "Scene 08 · Final Delivery",
    title: "Ready to move your cargo?",
    body: "Destination doors open into low sunset light. The camera settles. Delivery complete.",
    cta: { label: "Request a Quote", href: "/contact" },
    align: "center",
    anchor: [1, 0, -205],
  },
];

/** Total scroll length of the journey, in viewport-heights. */
export const TOTAL_SCROLL_VH = 900;

export function findActiveScene(progress: number): JourneyScene {
  return (
    SCENES.find((scene) => progress >= scene.from && progress <= scene.to) ??
    SCENES[SCENES.length - 1]
  );
}
