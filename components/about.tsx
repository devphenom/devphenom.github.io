"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Clock,
  MapPin,
} from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

import { buttonVariants } from "@/components/ui/button";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  ArrowsIllustration,
  BarsIllustration,
  DotGridIllustration,
  RadarIllustration,
  SpinningGlobeIllustration,
  TargetHitIllustration,
} from "@/components/about-illustrations";
import { AboutStat } from "@/components/about-stat";
import { techIcon } from "@/components/tech-icons";
import { cn } from "@/lib/utils";
import { about, socials } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 * i, ease: "easeOut" as const },
  }),
};

export function About() {
  return (
    <section
      id="about"
      className="relative w-full  bg-background py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-5">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 flex items-center gap-6"
        >
          <h2 className="text-gradient-brand whitespace-nowrap text-4xl font-bold tracking-tight md:text-5xl">
            {about.heading}
          </h2>
          <span
            aria-hidden
            className="h-px flex-1 bg-gradient-to-r from-border to-transparent"
          />
        </motion.div>

        <BentoGrid>
          {/* Bio */}
          <BentoCard
            index={0}
            className="md:col-span-2 lg:col-span-4 lg:row-span-2 justify-between gap-6"
            illustration={<DotGridIllustration />}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 -z-10 size-56 rounded-full bg-foreground/[0.04] blur-3xl"
            />
            <div className="relative space-y-4">
              {about.bio.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="relative flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-5">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <IconBrandGithub className="size-4" stroke={1.75} />
                GitHub
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <IconBrandLinkedin className="size-4" stroke={1.75} />
                LinkedIn
              </a>
              <a
                href={about.oss.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                <span className="text-muted-foreground">Open source:</span>
                {about.oss.label}
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </BentoCard>

          {/* Location / Remote */}
          <BentoCard
            index={1}
            className="md:col-span-1 lg:col-span-2 min-h-[15rem] gap-4"
            illustration={
              <SpinningGlobeIllustration className="-bottom-8 -right-6 size-56" />
            }
          >
            <div className="flex size-10 items-center justify-center rounded-full border border-border bg-muted/40 text-foreground transition-colors group-hover:border-foreground/30">
              <MapPin className="size-5" />
            </div>
            <div className="mt-auto space-y-1">
              <p className="text-base font-semibold text-foreground">
                {about.location.base}
              </p>
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="size-3.5" />
                {about.location.timezone}
              </p>
            </div>
          </BentoCard>

          {/* Currently */}
          <BentoCard
            index={2}
            className="md:col-span-1 lg:col-span-2 gap-4"
            illustration={
              <>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,color-mix(in_oklch,var(--foreground)_8%,transparent),transparent_60%)]" />
                <RadarIllustration className="-bottom-12 -right-12 size-52" />
              </>
            }
          >
            <div className="flex size-10 items-center justify-center rounded-full border border-border bg-muted/40 text-foreground transition-colors group-hover:border-foreground/30">
              <Briefcase className="size-5" />
            </div>
            <div className="mt-auto space-y-1">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {about.current.label}
              </p>
              <a
                href={about.current.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-base font-semibold text-foreground transition-colors hover:text-muted-foreground"
              >
                {about.current.line}
                <ArrowRight className="size-3.5 -rotate-45" />
              </a>
              <p className="text-sm text-muted-foreground">
                {about.current.detail}
              </p>
            </div>
          </BentoCard>

          {/* Tech stack */}
          <BentoCard
            index={3}
            className="md:col-span-2 lg:col-span-4 gap-4"
            illustration={<TargetHitIllustration />}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {about.techLabel}
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {about.techStack.map((tech) => {
                const Icon = techIcon[tech];
                return (
                  <span
                    key={tech}
                    className="group/pill inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-foreground/30 hover:text-foreground"
                  >
                    {Icon ? (
                      <Icon
                        className="size-4 text-foreground/60 transition-colors group-hover/pill:text-foreground"
                        stroke={1.75}
                      />
                    ) : null}
                    {tech}
                  </span>
                );
              })}
            </div>
          </BentoCard>

          {/* Stats */}
          <BentoCard
            index={4}
            className="md:col-span-2 lg:col-span-2 justify-center gap-5"
            illustration={<BarsIllustration />}
          >
            {about.stats.map((stat) => (
              <AboutStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </BentoCard>

          {/* CTA */}
          <BentoCard
            index={5}
            className="md:col-span-2 lg:col-span-6 flex-row flex-wrap items-center justify-between gap-6"
            illustration={
              <ArrowsIllustration className="right-72 top-1/2 hidden -translate-y-1/2 sm:block" />
            }
          >
            <div className="space-y-1">
              <p className="text-xl font-semibold text-foreground">
                {about.cta.title}
              </p>
              <p className="text-muted-foreground">{about.cta.description}</p>
            </div>
            <a
              href={about.cta.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 gap-2 rounded-full px-8 text-base font-medium",
              )}
            >
              {about.cta.label}
              <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
            </a>
          </BentoCard>
        </BentoGrid>
      </div>
    </section>
  );
}
