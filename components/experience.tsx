"use client";

import { motion, useReducedMotion } from "motion/react";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { experience } from "@/lib/constants";
import { techIcon } from "@/components/tech-icons";

type Item = (typeof experience.items)[number];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 * i, ease: "easeOut" as const },
  }),
};

function TagPills({ tags }: { tags: Item["tags"] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const Icon = techIcon[tag];
        return (
          <span
            key={tag}
            className="group/pill inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            {Icon ? (
              <Icon
                className="size-4 text-foreground/60 transition-colors group-hover/pill:text-foreground"
                stroke={1.75}
              />
            ) : null}
            {tag}
          </span>
        );
      })}
    </div>
  );
}

function TimelineItem({
  item,
  index,
  reduceMotion,
}: {
  item: Item;
  index: number;
  reduceMotion: boolean;
}) {
  const anim = reduceMotion
    ? {}
    : {
        variants: fadeUp,
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: { once: true, margin: "-80px" },
        custom: index,
      };

  return (
    <motion.li {...anim} className="relative pl-10 sm:pl-14">
      {/* Timeline node — pulses for the current role, muted otherwise. */}
      <span
        aria-hidden
        className={cn(
          "absolute left-0 top-1.5 size-3 rounded-full ring-4 ring-background",
          item.current ? "bg-primary" : "bg-muted-foreground/40",
        )}
      >
        {item.current ? (
          <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
        ) : null}
      </span>

      <div className="flex flex-col gap-3 pb-12">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-lg font-semibold text-foreground sm:text-xl">
            {item.role}
          </h3>
          <span aria-hidden className="text-muted-foreground">
            ·
          </span>
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-lg font-semibold text-primary transition-colors hover:text-primary/80 sm:text-xl"
            >
              {item.company}
              <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ) : (
            <span className="text-lg font-semibold text-primary sm:text-xl">
              {item.company}
            </span>
          )}
          {item.current ? (
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              Present
            </span>
          ) : null}
        </div>

        <p className="flex flex-wrap items-center gap-x-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span>
            {item.start} — {item.end}
          </span>
          <span aria-hidden>·</span>
          <span>{item.type}</span>
          <span aria-hidden>·</span>
          <span>{item.location}</span>
        </p>

        <ul className="max-w-2xl space-y-1.5">
          {item.points.map((point) => (
            <li
              key={point}
              className="relative pl-4 leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:size-1 before:rounded-full before:bg-muted-foreground/50"
            >
              {point}
            </li>
          ))}
        </ul>

        {item.tags.length > 0 ? <TagPills tags={item.tags} /> : null}
      </div>
    </motion.li>
  );
}

const DEFAULT_VISIBLE = 2;

export function Experience() {
  const reduceMotion = useReducedMotion() ?? false;
  const [expanded, setExpanded] = useState(false);

  const visibleItems = expanded
    ? experience.items
    : experience.items.slice(0, DEFAULT_VISIBLE);
  const hiddenCount = experience.items.length - DEFAULT_VISIBLE;

  return (
    <section
      id="experience"
      className="relative w-full bg-background py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-5">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-6"
        >
          <h2 className="text-gradient-brand whitespace-nowrap text-4xl font-bold tracking-tight md:text-5xl">
            {experience.heading}
          </h2>
          <span
            aria-hidden
            className="h-px flex-1 bg-gradient-to-r from-border to-transparent"
          />
        </motion.div>

        <ol className="relative mt-14">
          {/* Vertical rail, aligned to the node centers, fading out at the base. */}
          <span
            aria-hidden
            className="absolute bottom-2 left-1.5 top-2 w-px bg-gradient-to-b from-border via-border to-transparent"
          />
          {visibleItems.map((item, i) => (
            <TimelineItem
              key={`${item.company}-${item.start}`}
              item={item}
              index={i}
              reduceMotion={reduceMotion}
            />
          ))}
        </ol>

        {hiddenCount > 0 ? (
          <div className="mt-2 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-5 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              {expanded ? "View less" : `View ${hiddenCount} more`}
              <ChevronDown
                className={cn(
                  "size-4 transition-transform duration-300",
                  expanded && "rotate-180",
                )}
              />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
