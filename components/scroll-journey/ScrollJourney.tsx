"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useScrollProgress } from "@/lib/scroll-journey/useScrollProgress";
import { SCENES, TOTAL_SCROLL_VH } from "@/lib/scroll-journey/sceneConfig";
import SceneCopyLayer from "./overlay/SceneCopyLayer";
import RouteRail from "./RouteRail";
import "./scroll-journey.css";

const ScrollWorldCanvas = dynamic(() => import("./ScrollWorldCanvas"), {
  ssr: false,
});

export default function ScrollJourney() {
  const stageRef = useRef<HTMLDivElement>(null);
  const { progressRef, activeSceneId, scrollToScene, reducedMotion } =
    useScrollProgress(stageRef);

  if (reducedMotion) {
    return (
      <div className="sw-reduced">
        {SCENES.map((scene) => (
          <section key={scene.id} className="sw-reduced-scene">
            <span className="sw-eyebrow">{scene.eyebrow}</span>
            <h2 className="sw-title">{scene.title}</h2>
            <p className="sw-body">{scene.body}</p>
            {scene.tags && (
              <div className="sw-tags">
                {scene.tags.map((tag) => (
                  <span key={tag} className="sw-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {scene.cta && (
              <Link href={scene.cta.href} className="sw-cta">
                {scene.cta.label} →
              </Link>
            )}
          </section>
        ))}
      </div>
    );
  }

  return (
    <div className="sw-root">
      <div className="sw-viewport">
        <div aria-hidden="true" className="sw-canvas-wrap">
          <ScrollWorldCanvas progressRef={progressRef} />
        </div>
        <SceneCopyLayer activeSceneId={activeSceneId} />
        <RouteRail activeSceneId={activeSceneId} onNavigate={scrollToScene} />
      </div>
      <div ref={stageRef} className="sw-stage" style={{ height: `${TOTAL_SCROLL_VH}vh` }} />
    </div>
  );
}
