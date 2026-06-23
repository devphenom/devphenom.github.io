"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 lg:auto-rows-fr",
        className,
      )}
    >
      {children}
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.08 * i, ease: "easeOut" as const },
  }),
};

/** Updates the pointer-spotlight CSS vars without triggering a React re-render. */
function handleSpotlight(event: React.MouseEvent<HTMLDivElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty(
    "--mx",
    `${event.clientX - rect.left}px`,
  );
  event.currentTarget.style.setProperty(
    "--my",
    `${event.clientY - rect.top}px`,
  );
}

export function BentoCard({
  className,
  children,
  index = 0,
  illustration,
  illustrationClassName,
}: {
  className?: string;
  children: React.ReactNode;
  index?: number;
  illustration?: React.ReactNode;
  illustrationClassName?: string;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      onMouseMove={handleSpotlight}
      className={cn(
        "group relative isolate flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-[transform,border-color,box-shadow] duration-300 hover:border-foreground/20 hover:shadow-md motion-safe:hover:-translate-y-0.5",
        className,
      )}
    >
      {illustration ? (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 -z-20 overflow-hidden opacity-80 transition-transform duration-500 ease-out group-hover:opacity-100 motion-safe:group-hover:scale-[1.04]",
            illustrationClassName,
          )}
        >
          {illustration}
        </div>
      ) : null}
      {/* Pointer-follow spotlight — decorative, theme-neutral, fades in on hover. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(220px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_oklch,var(--foreground)_8%,transparent),transparent_72%)]"
      />
      {children}
    </motion.div>
  );
}
