"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface PulsingCirclesProps {
  className?: string;
  /** Diameter of the innermost circle in px; each ring grows by this amount. */
  baseSize?: number;
  count?: number;
}

export function PulsingCircles({
  className,
  baseSize = 280,
  count = 3,
}: PulsingCirclesProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        className,
      )}
      aria-hidden
    >
      {Array.from({ length: count }).map((_, i) => {
        const size = baseSize * (i + 1);
        return (
          <motion.div
            key={i}
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 1.05, 1], opacity: 1 }}
            transition={{
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              },
              opacity: { duration: 1 },
            }}
            style={{ width: size, height: size }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-gradient-to-b from-foreground/[0.05] to-transparent dark:from-foreground/[0.04]"
          />
        );
      })}
    </div>
  );
}
