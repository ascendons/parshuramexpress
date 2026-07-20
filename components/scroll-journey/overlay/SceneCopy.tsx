"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { JourneyScene } from "@/lib/scroll-journey/sceneConfig";

export default function SceneCopy({ scene }: { scene: JourneyScene }) {
  return (
    <motion.div
      className={`sw-copy sw-copy--${scene.align}`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
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
    </motion.div>
  );
}
