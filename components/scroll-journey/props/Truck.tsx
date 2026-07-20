"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WHEEL_POSITIONS: Array<[number, number, number]> = [
  [-0.95, 0.45, 1.15],
  [0.95, 0.45, 1.15],
  [-0.95, 0.45, -0.85],
  [0.95, 0.45, -0.85],
  [-0.95, 0.45, -1.65],
  [0.95, 0.45, -1.65],
];

const ROOF_LIGHT_X = [-0.6, -0.3, 0, 0.3, 0.6];

/**
 * Stylised low-poly flatbed lorry — built entirely from primitives (no DCC
 * tool / model file involved). Silhouette cues — cab-over grille, roof
 * marker lights, mudguards, exhaust stack — are deliberately Indian-highway-
 * truck shaped rather than a generic Western cab, since that's the fleet
 * Parshuram actually runs. Final art can replace this 1:1 with a modeled
 * .glb; the group structure and wheel-rig below are what it should preserve.
 */
export default function Truck({
  position = [0, 0, 0],
  rotationY = 0,
}: {
  position?: [number, number, number];
  rotationY?: number;
}) {
  const wheelsRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!wheelsRef.current) return;
    // rotateY spins each wheel around its OWN local axle axis (set up by the
    // static Z tilt on each wheel group below) via quaternion composition.
    // Mutating .rotation.x directly here would fight Three's Euler XYZ
    // composition order and make the wheel tumble end-over-end instead of
    // rolling — see the wheel group comment for why the tilt matters.
    wheelsRef.current.children.forEach((wheel) => {
      wheel.rotateY(-delta * 6);
    });
  });

  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      {/* Chassis rails, ground the silhouette instead of it floating */}
      {[-0.75, 0.75].map((xOff) => (
        <mesh key={xOff} position={[xOff, 0.42, -0.2]} castShadow>
          <boxGeometry args={[0.18, 0.22, 4.6]} />
          <meshStandardMaterial color="#20293d" roughness={0.7} metalness={0.2} />
        </mesh>
      ))}

      {/* Cab — lower body */}
      <mesh position={[0, 1.15, 1.85]} castShadow>
        <boxGeometry args={[1.9, 1.3, 1.3]} />
        <meshStandardMaterial color="#e13a3a" roughness={0.35} metalness={0.15} />
      </mesh>
      {/* Cab — upper/roof, stepped narrower for a cab-over silhouette */}
      <mesh position={[0, 1.98, 1.7]} castShadow>
        <boxGeometry args={[1.72, 0.42, 1.1]} />
        <meshStandardMaterial color="#c62f2f" roughness={0.35} metalness={0.15} />
      </mesh>
      {/* Windshield */}
      <mesh position={[0, 1.68, 1.22]} rotation={[0.32, 0, 0]}>
        <boxGeometry args={[1.6, 0.62, 0.06]} />
        <meshStandardMaterial color="#0d1420" roughness={0.15} metalness={0.4} />
      </mesh>
      {/* Side windows */}
      {[-0.86, 0.86].map((xOff) => (
        <mesh key={xOff} position={[xOff, 1.62, 1.75]}>
          <boxGeometry args={[0.06, 0.42, 0.85]} />
          <meshStandardMaterial color="#0d1420" roughness={0.15} metalness={0.4} />
        </mesh>
      ))}
      {/* Side mirrors */}
      {[-0.98, 0.98].map((xOff) => (
        <group key={xOff} position={[xOff, 1.55, 1.35]}>
          <mesh>
            <boxGeometry args={[0.05, 0.05, 0.3]} />
            <meshStandardMaterial color="#0a0e17" roughness={0.6} />
          </mesh>
          <mesh position={[xOff > 0 ? 0.12 : -0.12, 0, -0.16]}>
            <boxGeometry args={[0.2, 0.24, 0.05]} />
            <meshStandardMaterial color="#0a0e17" roughness={0.4} metalness={0.3} />
          </mesh>
        </group>
      ))}
      {/* Grille + bumper */}
      <mesh position={[0, 1.02, 2.51]}>
        <boxGeometry args={[1.6, 0.6, 0.06]} />
        <meshStandardMaterial color="#0a0e17" roughness={0.5} metalness={0.3} />
      </mesh>
      <mesh position={[0, 0.62, 2.53]} castShadow>
        <boxGeometry args={[1.9, 0.28, 0.22]} />
        <meshStandardMaterial color="#0a0e17" roughness={0.6} />
      </mesh>
      {/* Headlights */}
      {[-0.7, 0.7].map((xOff) => (
        <mesh key={xOff} position={[xOff, 1.02, 2.52]}>
          <boxGeometry args={[0.26, 0.18, 0.05]} />
          <meshStandardMaterial
            color="#ffdca8"
            emissive="#ffdca8"
            emissiveIntensity={0.6}
            roughness={0.3}
          />
        </mesh>
      ))}
      {/* Roof marker lights — a small, deliberate Indian-highway-truck tell */}
      {ROOF_LIGHT_X.map((xOff) => (
        <mesh key={xOff} position={[xOff, 2.23, 2.18]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial
            color="#f0b429"
            emissive="#f0b429"
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
      {/* Exhaust stack */}
      <mesh position={[-1.05, 1.9, 1.15]} castShadow>
        <cylinderGeometry args={[0.07, 0.08, 1.5, 8]} />
        <meshStandardMaterial color="#5a6478" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* Flatbed */}
      <mesh position={[0, 0.9, -0.7]} castShadow>
        <boxGeometry args={[2.1, 0.5, 3.4]} />
        <meshStandardMaterial color="#182235" roughness={0.6} />
      </mesh>
      {/* Flatbed side rails */}
      {[-1.05, 1.05].map((xOff) => (
        <mesh key={xOff} position={[xOff, 1.3, -0.7]} castShadow>
          <boxGeometry args={[0.08, 0.35, 3.4]} />
          <meshStandardMaterial color="#0a0e17" roughness={0.6} />
        </mesh>
      ))}
      <mesh position={[0, 1.3, -2.38]} castShadow>
        <boxGeometry args={[2.1, 0.35, 0.08]} />
        <meshStandardMaterial color="#0a0e17" roughness={0.6} />
      </mesh>

      {/* Cargo block, with cinch straps so it doesn't read as a floating slab */}
      <mesh position={[0, 1.55, -0.7]} castShadow>
        <boxGeometry args={[1.8, 0.9, 2.8]} />
        <meshStandardMaterial color="#8291ab" roughness={0.8} />
      </mesh>
      {[-0.85, 0.85].map((zOff) => (
        <mesh key={zOff} position={[0, 1.55, -0.7 + zOff]}>
          <boxGeometry args={[1.84, 0.94, 0.08]} />
          <meshStandardMaterial color="#0a0e17" roughness={0.7} />
        </mesh>
      ))}

      {/* Mudguards over each wheel pair */}
      {[1.15, -0.85, -1.65].map((zOff) => (
        <mesh key={zOff} position={[0, 0.86, zOff]} castShadow>
          <boxGeometry args={[2.05, 0.06, 0.55]} />
          <meshStandardMaterial color="#0a0e17" roughness={0.7} />
        </mesh>
      ))}

      <group ref={wheelsRef}>
        {WHEEL_POSITIONS.map((p, i) => (
          <group key={i} position={p} rotation={[0, 0, Math.PI / 2]}>
            {/* Low segment count reads as a faceted tire when it spins */}
            <mesh>
              <cylinderGeometry args={[0.45, 0.45, 0.38, 10]} />
              <meshStandardMaterial color="#0a0e17" roughness={0.9} />
            </mesh>
            {/* Off-centre hub mark — without it the tire is perfectly radially
                symmetric, so spinning it around its own axle shows no motion at all */}
            <mesh position={[0.29, 0.19, 0]}>
              <boxGeometry args={[0.08, 0.08, 0.38]} />
              <meshStandardMaterial color="#4a5570" roughness={0.6} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}
