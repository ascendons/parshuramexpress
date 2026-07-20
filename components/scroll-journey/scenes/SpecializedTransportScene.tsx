import type { ScenePropsBlock } from "./types";

const STOPS: Array<{ offset: [number, number, number]; color: string; label: string }> = [
  { offset: [-6, 1, 10], color: "#8a5a3a", label: "Woodworking Machinery" },
  { offset: [6, 1, 4], color: "#4a6a8a", label: "CNC Systems" },
  { offset: [-6, 1, -6], color: "#b98a4a", label: "Bakery & Food Equipment" },
  { offset: [6, 1, -12], color: "#7a4a8a", label: "Exhibition Goods" },
];

export default function SpecializedTransportScene({ anchor }: ScenePropsBlock) {
  const [x, y, z] = anchor;
  return (
    <group>
      {STOPS.map((stop) => (
        <mesh
          key={stop.label}
          position={[x + stop.offset[0], y + stop.offset[1], z + stop.offset[2]]}
          castShadow
        >
          <boxGeometry args={[2.4, 2, 2.4]} />
          <meshStandardMaterial color={stop.color} roughness={0.55} metalness={0.1} />
        </mesh>
      ))}
    </group>
  );
}
