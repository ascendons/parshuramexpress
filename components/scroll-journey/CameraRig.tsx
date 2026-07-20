"use client";

import { useRef, type MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { cameraCurve, progressToCurveT } from "@/lib/scroll-journey/cameraPath";

const rawPosition = new THREE.Vector3();
const rawTarget = new THREE.Vector3();

export default function CameraRig({
  progressRef,
}: {
  progressRef: MutableRefObject<number>;
}) {
  const dampedPosition = useRef(new THREE.Vector3());
  const dampedTarget = useRef(new THREE.Vector3());
  const initialized = useRef(false);

  useFrame((state, delta) => {
    const t = progressToCurveT(progressRef.current);
    cameraCurve.getPoint(t, rawPosition);
    cameraCurve.getPoint(Math.min(t + 0.015, 1), rawTarget);

    if (!initialized.current) {
      dampedPosition.current.copy(rawPosition);
      dampedTarget.current.copy(rawTarget);
      initialized.current = true;
    }

    // Framerate-independent exponential damping — this is what makes scroll
    // read as inertia rather than a 1:1 slider.
    const lambda = 1 - Math.exp(-4.5 * delta);
    dampedPosition.current.lerp(rawPosition, lambda);
    dampedTarget.current.lerp(rawTarget, lambda);

    state.camera.position.copy(dampedPosition.current);
    state.camera.lookAt(dampedTarget.current);
  });

  return null;
}
