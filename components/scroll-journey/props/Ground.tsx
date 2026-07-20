export default function Ground() {
  return (
    <mesh position={[0, -0.05, -110]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[60, 260]} />
      <meshStandardMaterial color="#111726" roughness={1} />
    </mesh>
  );
}
