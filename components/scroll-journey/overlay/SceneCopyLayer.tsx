"use client";

import { AnimatePresence } from "framer-motion";
import { SCENES } from "@/lib/scroll-journey/sceneConfig";
import SceneCopy from "./SceneCopy";

export default function SceneCopyLayer({ activeSceneId }: { activeSceneId: string }) {
  const scene = SCENES.find((s) => s.id === activeSceneId) ?? SCENES[0];
  return (
    <div className="sw-copy-layer" aria-live="polite">
      <AnimatePresence mode="wait">
        <SceneCopy key={scene.id} scene={scene} />
      </AnimatePresence>
    </div>
  );
}
