import type { Variants } from "motion/react";

const ease = [0.76, 0, 0.24, 1] as const;

/** Slides the whole panel in from off-screen right. */
export const menuSlide: Variants = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease } },
  exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease } },
};

/** Staggers each nav link in from the right. */
export const slide: Variants = {
  initial: { x: 80 },
  enter: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease, delay: 0.05 * i },
  }),
  exit: (i: number) => ({
    x: 80,
    transition: { duration: 0.8, ease, delay: 0.05 * i },
  }),
};

/** Toggles the active-link indicator dot. */
export const scale: Variants = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};
