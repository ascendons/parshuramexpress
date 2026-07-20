import Truck from "../props/Truck";
import type { ScenePropsBlock } from "./types";

export default function ShipmentBeginsScene({ anchor }: ScenePropsBlock) {
  const [x, y, z] = anchor;
  return (
    <group>
      {/* Gate posts */}
      <mesh position={[x - 3.5, y + 2, z + 8]}>
        <boxGeometry args={[0.4, 4, 0.4]} />
        <meshStandardMaterial color="#182235" />
      </mesh>
      <mesh position={[x + 3.5, y + 2, z + 8]}>
        <boxGeometry args={[0.4, 4, 0.4]} />
        <meshStandardMaterial color="#182235" />
      </mesh>
      <mesh position={[x, y + 4, z + 8]}>
        <boxGeometry args={[7.4, 0.3, 0.3]} />
        <meshStandardMaterial color="#e13a3a" emissive="#e13a3a" emissiveIntensity={0.3} />
      </mesh>

      <Truck position={[x, y, z]} />
    </group>
  );
}
