"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

/**
 * Splits a stat value into its leading integer and the rest, e.g.
 * "5+" -> { number: 5, suffix: "+" }. Non-numeric values -> { number: null }.
 */
function parseValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { number: null as number | null, suffix: "" };
  return { number: Number(match[1]), suffix: match[2] };
}

export function AboutStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const { number, suffix } = parseValue(value);
  const animated = number !== null && !reduceMotion;

  const [count, setCount] = useState(animated ? `0${suffix}` : value);

  useEffect(() => {
    if (!animated || !inView) return;

    const controls = animate(0, number, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (latest) => setCount(`${Math.round(latest)}${suffix}`),
    });
    return () => controls.stop();
  }, [animated, inView, number, suffix]);

  return (
    <div className="space-y-1">
      <p
        ref={ref}
        className="text-2xl font-bold leading-tight tracking-tight text-foreground tabular-nums"
      >
        {animated ? count : value}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
