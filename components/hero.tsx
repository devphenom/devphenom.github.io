"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedGridWithDots } from "@/components/ui/animated-grid-with-dots";
import { PulsingCircles } from "@/components/ui/pulsing-circles";
import { profile } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 * i, ease: "easeOut" as const },
  }),
};

// Badge copy options: "Available for new opportunities" | "Open to new roles & freelance" | "Currently available for hire"
const AVAILABILITY_TEXT = "Open to work, let's build something";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Interactive grid background */}
      <AnimatedGridWithDots
        className="[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        highlightColor="#52525b"
        highlightColorDark="#a1a1aa"
      />
      {/* Pulsing concentric circles behind the hero text */}
      <PulsingCircles />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-5 text-center">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.03 }}
          className="group relative mb-8 inline-flex items-center gap-2 overflow-hidden rounded-full border border-border bg-background/60 px-4 py-1.5 text-sm text-muted-foreground shadow-sm backdrop-blur"
        >
          {/* Shimmer sweep */}
          <span className="animate-shimmer pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent,45%,color-mix(in_oklch,var(--foreground)_18%,transparent),55%,transparent)] bg-[length:200%_100%]" />
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="relative">{AVAILABILITY_TEXT}</span>
        </motion.span>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-gradient-brand text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
        >
          Turning <span className="text-shimmer">ideas</span> into
          <br />
          shipped <span className="text-shimmer">reality</span>.
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          I&apos;m{" "}
          <span className="font-semibold text-foreground">{profile.name}</span>,
          a fullstack engineer who turns rough concepts into dependable,
          production-grade software. I move comfortably across the stack, from
          fluid{" "}
          <span className="font-medium text-foreground">
            React &amp; React Native
          </span>{" "}
          interfaces to resilient{" "}
          <span className="font-medium text-foreground">
            Node.js services with NestJS &amp; Fastify.
          </span>
          {/* {" "}
          &mdash; so an idea can go from sketch to shipped without the handoffs.
          Right now I&apos;m doing exactly that at {profile.company}. */}
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex items-center justify-center"
        >
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 gap-2 rounded-full px-8 text-base font-medium",
            )}
          >
            Get in touch
            <ArrowRight className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
