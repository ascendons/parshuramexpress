"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import type { ScenePropsBlock } from "./types";

export default function LoadingDockScene({ anchor }: ScenePropsBlock) {
  const [x, y, z] = anchor;
  const craneArm = useRef<Group>(null);
  const forkliftMast = useRef<Group>(null);

  useFrame((state) => {
    // Slow, restrained ambient motion — a crane that never stops swinging or
    // a mast that bobs like it's breathing reads as fidgety, not alive.
    if (craneArm.current) {
      craneArm.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.35;
    }
    if (forkliftMast.current) {
      forkliftMast.current.position.y = 1.2 + Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
    }
  });

  return (
    <group>
      {/* Crane */}
      <mesh position={[x - 3, y + 3, z]}>
        <cylinderGeometry args={[0.25, 0.25, 6, 8]} />
        <meshStandardMaterial color="#e13a3a" roughness={0.5} />
      </mesh>
      <group ref={craneArm} position={[x - 3, y + 6, z]}>
        <mesh position={[2, 0, 0]}>
          <boxGeometry args={[4, 0.3, 0.3]} />
          <meshStandardMaterial color="#e13a3a" roughness={0.5} />
        </mesh>
      </group>

      {/* Forklift */}
      <group position={[x + 2, y, z + 3]}>
        <mesh position={[0, 0.6, 0]} castShadow>
          <boxGeometry args={[1.2, 1.2, 1.8]} />
          <meshStandardMaterial color="#8291ab" roughness={0.6} />
        </mesh>
        <group ref={forkliftMast} position={[0, 1.2, 1]}>
          <mesh>
            <boxGeometry args={[1, 1.4, 0.15]} />
            <meshStandardMaterial color="#121a2b" roughness={0.5} />
          </mesh>
        </group>
      </group>

      {/* Container with hinged-look open doors */}
      <mesh position={[x, y + 1.2, z - 4]} castShadow>
        <boxGeometry args={[2.4, 2.4, 5]} />
        <meshStandardMaterial color="#182235" roughness={0.8} />
      </mesh>
      <mesh position={[x - 1.3, y + 1.2, z - 1.2]} rotation={[0, Math.PI / 3, 0]}>
        <planeGeometry args={[2.4, 2.4]} />
        <meshStandardMaterial color="#0a0e17" side={2} />
      </mesh>

      {/* Instanced crates */}
      {[-2, 0, 2].map((offset) => (
        <mesh key={offset} position={[x + offset, y + 0.6, z + 1]} castShadow>
          <boxGeometry args={[1.1, 1.1, 1.1]} />
          <meshStandardMaterial color="#f0b429" roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}
