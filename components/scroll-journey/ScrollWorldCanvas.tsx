"use client";

import { Suspense, type MutableRefObject } from "react";
import { Canvas } from "@react-three/fiber";
import CameraRig from "./CameraRig";
import Ground from "./props/Ground";
import WarehouseScene from "./scenes/WarehouseScene";
import LoadingDockScene from "./scenes/LoadingDockScene";
import ShipmentBeginsScene from "./scenes/ShipmentBeginsScene";
import JourneyScene from "./scenes/JourneyScene";
import SpecializedTransportScene from "./scenes/SpecializedTransportScene";
import NationwideNetworkScene from "./scenes/NationwideNetworkScene";
import TrustScene from "./scenes/TrustScene";
import FinalDeliveryScene from "./scenes/FinalDeliveryScene";
import { SCENES } from "@/lib/scroll-journey/sceneConfig";

export default function ScrollWorldCanvas({
  progressRef,
}: {
  progressRef: MutableRefObject<number>;
}) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ fov: 50, near: 0.1, far: 400 }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={["#0a0e17"]} />
      {/* All 8 scenes share one world with no per-scene occlusion, so a loose
          fog range lets 2-3 scenes' worth of geometry bleed into the same
          frame (e.g. the Loading Dock crane sharing the shot with a distant
          gate and glowing feature markers). Keep the far plane tight enough
          that only the current scene, not the whole route ahead, reads. */}
      <fog attach="fog" args={["#0a0e17", 10, 42]} />
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[12, 22, 10]}
        intensity={1.3}
        color="#ffe8cf"
        castShadow
      />
      <Suspense fallback={null}>
        <Ground />
        <WarehouseScene anchor={SCENES[0].anchor} />
        <LoadingDockScene anchor={SCENES[1].anchor} />
        <ShipmentBeginsScene anchor={SCENES[2].anchor} />
        <JourneyScene anchor={SCENES[3].anchor} />
        <SpecializedTransportScene anchor={SCENES[4].anchor} />
        <NationwideNetworkScene anchor={SCENES[5].anchor} />
        <TrustScene anchor={SCENES[6].anchor} />
        <FinalDeliveryScene anchor={SCENES[7].anchor} />
      </Suspense>
      <CameraRig progressRef={progressRef} />
    </Canvas>
  );
}
