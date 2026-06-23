"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface AnimatedGridWithDotsProps {
  className?: string;
  gridSize?: number;
  dotSize?: number;
  glowRadius?: number;
  highlightColor?: string;
  highlightColorDark?: string;
}

export function AnimatedGridWithDots({
  className,
  gridSize = 80,
  dotSize = 2,
  glowRadius = 150,
  highlightColor = "#6366f1",
  highlightColorDark = "#a5b4fc",
}: AnimatedGridWithDotsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [isDark, setIsDark] = useState(false);

  const pointer = useRef({ x: -9999, y: -9999, active: false });
  const current = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number | null>(null);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);

  // Measure container
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      setSize({ width: r.width, height: r.height });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Detect dark mode via the `dark` class on <html>
  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));
    update();
    const mo = new MutationObserver(update);
    mo.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  // Track pointer (passive, window-level so proximity works behind content)
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      pointer.current = {
        x: e.clientX - r.left,
        y: e.clientY - r.top,
        active: true,
      };
    };
    const onLeave = () => {
      pointer.current.active = false;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave, { passive: true });
    window.addEventListener("blur", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("blur", onLeave);
    };
  }, []);

  // Geometry
  const cols = Math.ceil(size.width / gridSize);
  const rows = Math.ceil(size.height / gridSize);
  const verticals = Array.from({ length: cols + 1 }, (_, i) => i * gridSize);
  const horizontals = Array.from({ length: rows + 1 }, (_, i) => i * gridSize);
  const dots: { x: number; y: number }[] = [];
  for (let i = 0; i <= cols; i++) {
    for (let j = 0; j <= rows; j++) {
      dots.push({ x: i * gridSize, y: j * gridSize });
    }
  }

  // Animation loop
  useEffect(() => {
    const highlight = isDark ? highlightColorDark : highlightColor;
    const baseLine = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
    const baseDot = isDark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.14)";

    const render = () => {
      const c = current.current;
      const p = pointer.current;
      c.x += (p.x - c.x) * 0.12;
      c.y += (p.y - c.y) * 0.12;

      for (let idx = 0; idx < dotRefs.current.length; idx++) {
        const dot = dotRefs.current[idx];
        const d = dots[idx];
        if (!dot || !d) continue;
        const dist = Math.hypot(d.x - c.x, d.y - c.y);
        if (p.active && dist < glowRadius) {
          const t = 1 - dist / glowRadius;
          dot.setAttribute("fill", highlight);
          dot.setAttribute("opacity", `${0.25 + t * 0.75}`);
          dot.setAttribute("r", `${dotSize * (1 + t * 1.6)}`);
        } else {
          dot.setAttribute("fill", baseDot);
          dot.setAttribute("opacity", "1");
          dot.setAttribute("r", `${dotSize}`);
        }
      }

      for (let idx = 0; idx < lineRefs.current.length; idx++) {
        const line = lineRefs.current[idx];
        if (!line) continue;
        const orient = line.dataset.orient;
        const pos = Number(line.dataset.pos);
        const dist = orient === "v" ? Math.abs(pos - c.x) : Math.abs(pos - c.y);
        if (p.active && dist < glowRadius) {
          const t = 1 - dist / glowRadius;
          line.setAttribute("stroke", highlight);
          line.setAttribute("stroke-opacity", `${0.06 + t * 0.5}`);
        } else {
          line.setAttribute("stroke", baseLine);
          line.setAttribute("stroke-opacity", "1");
        }
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isDark, highlightColor, highlightColorDark, glowRadius, dotSize, dots]);

  return (
    <div ref={containerRef} className={cn("absolute inset-0", className)}>
      <svg width={size.width} height={size.height} className="h-full w-full">
        {verticals.map((x, i) => (
          <line
            key={`v-${i}`}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            data-orient="v"
            data-pos={x}
            x1={x}
            y1={0}
            x2={x}
            y2={size.height}
            strokeWidth={1}
          />
        ))}
        {horizontals.map((y, j) => (
          <line
            key={`h-${j}`}
            ref={(el) => {
              lineRefs.current[verticals.length + j] = el;
            }}
            data-orient="h"
            data-pos={y}
            x1={0}
            y1={y}
            x2={size.width}
            y2={y}
            strokeWidth={1}
          />
        ))}
        {dots.map((d, i) => (
          <circle
            key={`d-${i}`}
            ref={(el) => {
              dotRefs.current[i] = el;
            }}
            cx={d.x}
            cy={d.y}
            r={dotSize}
          />
        ))}
      </svg>
    </div>
  );
}
