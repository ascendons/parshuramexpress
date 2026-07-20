"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type RefObject,
  type MutableRefObject,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { SCENES, TOTAL_SCROLL_VH, findActiveScene } from "./sceneConfig";

gsap.registerPlugin(ScrollTrigger);

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export type ScrollProgressApi = {
  /** Mutable, read every frame by the R3F camera rig — never drives React state. */
  progressRef: MutableRefObject<number>;
  activeSceneId: string;
  /** Smoothly scroll to the start of a given scene id, e.g. from the route rail. */
  scrollToScene: (id: string) => void;
  reducedMotion: boolean;
};

export function useScrollProgress(stageRef: RefObject<HTMLElement | null>): ScrollProgressApi {
  const progressRef = useRef(0);
  const lenisRef = useRef<Lenis | null>(null);
  const [activeSceneId, setActiveSceneId] = useState(SCENES[0].id);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    if (!stageRef.current || reducedMotion) return;

    const lenis = new Lenis({ smoothWheel: true, syncTouch: true });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    let lastActiveId = SCENES[0].id;
    const master = ScrollTrigger.create({
      trigger: stageRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6,
      onUpdate: (self) => {
        progressRef.current = self.progress;
        const scene = findActiveScene(self.progress);
        if (scene.id !== lastActiveId) {
          lastActiveId = scene.id;
          setActiveSceneId(scene.id);
        }
      },
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      master.kill();
      gsap.ticker.remove(onTick);
      window.removeEventListener("resize", onResize);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [stageRef, reducedMotion]);

  const scrollToScene = (id: string) => {
    if (!stageRef.current) return;
    const scene = SCENES.find((s) => s.id === id);
    if (!scene) return;
    const target = scene.from * stageRef.current.offsetHeight;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { duration: 1.1 });
    } else {
      window.scrollTo({ top: target, behavior: "smooth" });
    }
  };

  return { progressRef, activeSceneId, scrollToScene, reducedMotion };
}

export { TOTAL_SCROLL_VH };
