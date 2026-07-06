"use client";

import { motion, useReducedMotion } from "motion/react";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { Mail } from "lucide-react";
import { contact, socials } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 * i, ease: "easeOut" as const },
  }),
};

const socialLinks = [
  { href: socials.github, label: "GitHub", icon: IconBrandGithub },
  { href: socials.linkedin, label: "LinkedIn", icon: IconBrandLinkedin },
  { href: socials.twitter, label: "X", icon: IconBrandX },
] as const;

export function Contact() {
  const reduceMotion = useReducedMotion() ?? false;

  const anim = (i: number) =>
    reduceMotion
      ? {}
      : {
          variants: fadeUp,
          initial: "hidden" as const,
          whileInView: "show" as const,
          viewport: { once: true, margin: "-80px" },
          custom: i,
        };

  return (
    <section
      id="contact"
      className="relative w-full bg-background py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-5">
        <motion.div {...anim(0)} className="flex items-center gap-6">
          <h2 className="text-gradient-brand whitespace-nowrap text-4xl font-bold tracking-tight md:text-5xl">
            {contact.heading}
          </h2>
          <span
            aria-hidden
            className="h-px flex-1 bg-gradient-to-r from-border to-transparent"
          />
        </motion.div>

        <motion.div {...anim(1)} className="mt-14 flex max-w-2xl flex-col gap-8">
          <div className="space-y-3">
            <p className="text-2xl font-semibold text-foreground sm:text-3xl">
              {contact.title}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {contact.description}
            </p>
          </div>

          <a
            href={`mailto:${contact.email}`}
            className="group inline-flex w-fit items-center gap-3 text-xl font-medium text-foreground transition-colors hover:text-primary sm:text-2xl"
          >
            <Mail className="size-6 text-muted-foreground transition-colors group-hover:text-primary" />
            {contact.email}
          </a>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <Icon className="size-4 text-foreground/60 transition-colors group-hover:text-foreground" />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
