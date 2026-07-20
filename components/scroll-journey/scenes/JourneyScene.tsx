import Truck from "../props/Truck";
import type { ScenePropsBlock } from "./types";

const FEATURE_OFFSETS: Array<[number, number, number]> = [
  [3, 1.4, 18],
  [-3, 1.4, 8],
  [3, 1.4, -2],
  [-3, 1.4, -12],
  [3, 1.4, -22],
];

export default function JourneyScene({ anchor }: ScenePropsBlock) {
  const [x, y, z] = anchor;
  return (
    <group>
      <Truck position={[x, y, z]} />
      {FEATURE_OFFSETS.map(([ox, oy, oz], i) => (
        <mesh key={i} position={[x + ox, y + oy, z + oz]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial
            color="#f0b429"
            emissive="#f0b429"
            emissiveIntensity={0.4}
            roughness={0.4}
          />
        </mesh>
      ))}
      {/* Distant hill silhouettes for depth */}
      {[-16, 16].map((ox) => (
        <mesh key={ox} position={[x + ox, y + 3, z - 20]}>
          <coneGeometry args={[6, 8, 4]} />
          <meshStandardMaterial color="#0d1220" roughness={1} />
        </mesh>
      ))}
    </group>
  );
}
