import * as THREE from "three";
import { SCENES } from "./sceneConfig";

// One control point per scene boundary: P0 is where scene 0 starts, P1 is
// where scene 0 ends / scene 1 begins, ... P8 is where scene 7 (the final
// scene) comes to rest. That gives exactly 8 segments for 8 scenes, so
// scene[i] always maps onto curve segment i — no off-by-one between scene
// count and control-point count.
const CONTROL_POINTS: Array<[number, number, number]> = [
  [2, 13, 14], // P0 — aerial over the yard
  [5, 4, 0], // P1 — descended into the loading dock
  [8, 3, -18], // P2 — dock exit, gate lifting
  [6, 3.5, -55], // P3 — open road
  [-5, 4, -95], // P4 — deep into the journey leg
  [-9, 4, -125], // P5 — specialized transport stops
  [1, 20, -155], // P6 — risen for the nationwide map
  [3, 5, -190], // P7 — descended to the trust shelving
  [0, 3, -220], // P8 — final delivery, at rest
];

export const cameraCurve = new THREE.CatmullRomCurve3(
  CONTROL_POINTS.map(([x, y, z]) => new THREE.Vector3(x, y, z)),
  false,
  "catmullrom",
  0.5
);

const SEGMENT_COUNT = SCENES.length;

/**
 * Maps a global scroll progress [0..1] onto the camera curve's own parameter
 * space [0..1], using each scene's own from/to weighting rather than a flat
 * mapping — this is what makes the camera dwell longer in wide scenes (the
 * Journey) and move briskly through short ones (Shipment Begins).
 *
 * Uses Curve.getPoint (segment-index parametrization), not the arc-length
 * getPointAt, so t = i / SEGMENT_COUNT lands exactly on control point i —
 * scene boundaries and camera-path boundaries stay in lockstep.
 */
export function progressToCurveT(progress: number): number {
  const clamped = THREE.MathUtils.clamp(progress, 0, 1);
  for (let i = 0; i < SCENES.length; i++) {
    const scene = SCENES[i];
    const isLast = i === SCENES.length - 1;
    if (clamped <= scene.to || isLast) {
      const span = scene.to - scene.from || 1;
      const local = THREE.MathUtils.clamp((clamped - scene.from) / span, 0, 1);
      return (i + local) / SEGMENT_COUNT;
    }
  }
  return 1;
}
