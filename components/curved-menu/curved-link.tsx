"use client";

import { motion } from "motion/react";

import { scale, slide } from "./anim";

type CurvedLinkProps = {
  data: { name: string; link: string; index: number };
  isActive: boolean;
  setSelectedIndicator: (link: string) => void;
  onNavigate: () => void;
};

export function CurvedLink({
  data,
  isActive,
  setSelectedIndicator,
  onNavigate,
}: CurvedLinkProps) {
  const { name, link, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => setSelectedIndicator(link)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="absolute -left-8 size-2.5 rounded-full bg-foreground"
      />
      <a
        href={link}
        onClick={onNavigate}
        className="text-4xl font-light text-foreground transition-opacity hover:opacity-70 sm:text-5xl"
      >
        {name}
      </a>
    </motion.div>
  );
}
