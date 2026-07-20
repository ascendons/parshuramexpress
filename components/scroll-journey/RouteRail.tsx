"use client";

import { SCENES } from "@/lib/scroll-journey/sceneConfig";

export default function RouteRail({
  activeSceneId,
  onNavigate,
}: {
  activeSceneId: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <nav className="sw-rail" aria-label="Journey progress">
      {SCENES.map((scene) => (
        <button
          key={scene.id}
          type="button"
          className={`sw-rail-dot ${scene.id === activeSceneId ? "is-active" : ""}`}
          aria-label={scene.eyebrow}
          aria-current={scene.id === activeSceneId}
          onClick={() => onNavigate(scene.id)}
        />
      ))}
    </nav>
  );
}
