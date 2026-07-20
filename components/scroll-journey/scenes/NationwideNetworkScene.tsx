import { Line } from "@react-three/drei";
import type { ScenePropsBlock } from "./types";

const CITY_OFFSETS: Array<[number, number, number]> = [
  [-8, 0.3, 12],
  [4, 0.3, 8],
  [-2, 0.3, -2],
  [7, 0.3, -10],
  [-6, 0.3, -14],
];

export default function NationwideNetworkScene({ anchor }: ScenePropsBlock) {
  const [x, y, z] = anchor;
  const cities = CITY_OFFSETS.map(([ox, oy, oz]) => [x + ox, y + oy, z + oz] as [number, number, number]);

  return (
    <group>
      {/* Map base */}
      <mesh position={[x, y - 0.1, z]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 32]} />
        <meshStandardMaterial color="#0d1220" roughness={1} />
      </mesh>

      {cities.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.35, 12, 12]} />
          <meshStandardMaterial
            color="#e13a3a"
            emissive="#e13a3a"
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}

      {cities.slice(0, -1).map((pos, i) => (
        <Line
          key={i}
          points={[pos, cities[i + 1]]}
          color="#f0b429"
          lineWidth={1.5}
          transparent
          opacity={0.6}
        />
      ))}
    </group>
  );
}
