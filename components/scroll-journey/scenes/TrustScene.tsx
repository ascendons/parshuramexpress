import type { ScenePropsBlock } from "./types";

export default function TrustScene({ anchor }: ScenePropsBlock) {
  const [x, y, z] = anchor;
  return (
    <group>
      {/* Shelving unit */}
      {[0, 1.8, 3.6].map((yOffset) => (
        <mesh key={yOffset} position={[x, y + yOffset, z]}>
          <boxGeometry args={[8, 0.15, 2]} />
          <meshStandardMaterial color="#182235" roughness={0.7} />
        </mesh>
      ))}
      {[-3.6, 3.6].map((xOffset) => (
        <mesh key={xOffset} position={[x + xOffset, y + 1.8, z]}>
          <boxGeometry args={[0.15, 4, 2]} />
          <meshStandardMaterial color="#182235" roughness={0.7} />
        </mesh>
      ))}

      {/* Award plaque */}
      <mesh position={[x, y + 2, z + 0.3]}>
        <boxGeometry args={[1.6, 1, 0.1]} />
        <meshStandardMaterial color="#f0b429" emissive="#f0b429" emissiveIntensity={0.35} />
      </mesh>

      {/* Client crates on the shelves */}
      {[-2.4, -0.8, 0.8, 2.4].map((xOffset) => (
        <mesh key={xOffset} position={[x + xOffset, y + 0.55, z]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#8291ab" roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}
