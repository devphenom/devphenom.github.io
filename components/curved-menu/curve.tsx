"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const ease = [0.76, 0, 0.24, 1] as const;

/**
 * Animated SVG curve on the panel's left edge. The `Q` control point morphs
 * from -100 (bulging left) to 100 (flush), producing the curved sweep on
 * enter and reversing on exit. Height is read on the client (and on resize)
 * so it fills the viewport without relying on `window` during render.
 */
export function Curve() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const update = () => setHeight(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!height) return null;

  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${height / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${height / 2} 100 0`;

  const curve = {
    initial: { d: initialPath },
    enter: { d: targetPath, transition: { duration: 1, ease } },
    exit: { d: initialPath, transition: { duration: 0.8, ease } },
  };

  return (
    <svg className="pointer-events-none absolute left-[-99px] top-0 h-full w-[100px] fill-card stroke-none">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
}
