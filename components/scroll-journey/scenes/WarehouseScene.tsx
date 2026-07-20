import Truck from "../props/Truck";
import type { ScenePropsBlock } from "./types";

export default function WarehouseScene({ anchor }: ScenePropsBlock) {
  const [x, y, z] = anchor;
  return (
    <group>
      {/* Warehouse shell */}
      <mesh position={[x, y + 4, z - 6]} castShadow receiveShadow>
        <boxGeometry args={[14, 8, 12]} />
        <meshStandardMaterial color="#121a2b" roughness={0.9} />
      </mesh>
      {/* Bay door glow — offset off the wall's own front face (z), which sits
          at this exact depth; coplanar with it, it z-fights into a flickering
          checkerboard instead of reading as a door. */}
      <mesh position={[x, y + 1.6, z + 0.08]}>
        <planeGeometry args={[5, 3.2]} />
        <meshStandardMaterial color="#e13a3a" emissive="#e13a3a" emissiveIntensity={0.5} />
      </mesh>
      <Truck position={[x, y, z + 4]} rotationY={Math.PI} />
      {[-5, 5].map((offset) => (
        <mesh key={offset} position={[x + offset, y + 1, z + 6]} castShadow>
          <boxGeometry args={[2, 2, 2.4]} />
          <meshStandardMaterial color="#8291ab" roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}
