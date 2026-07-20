import Truck from "../props/Truck";
import type { ScenePropsBlock } from "./types";

export default function FinalDeliveryScene({ anchor }: ScenePropsBlock) {
  const [x, y, z] = anchor;
  return (
    <group>
      <mesh position={[x, y + 4, z - 6]} castShadow receiveShadow>
        <boxGeometry args={[14, 8, 12]} />
        <meshStandardMaterial color="#121a2b" roughness={0.9} />
      </mesh>
      {/* Open doorway, sunset glow */}
      <mesh position={[x, y + 1.8, z + 0.1]}>
        <planeGeometry args={[5, 3.6]} />
        <meshStandardMaterial color="#e17a2b" emissive="#e17a2b" emissiveIntensity={0.7} />
      </mesh>
      <Truck position={[x, y, z + 4]} rotationY={Math.PI} />
    </group>
  );
}
