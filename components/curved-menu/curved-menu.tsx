"use client";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconX,
} from "@tabler/icons-react";
import { RESUME_URL, navItems, socials } from "@/lib/constants";

import { Curve } from "./curve";
import { CurvedLink } from "./curved-link";
import { Download } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { menuSlide } from "./anim";
import { motion } from "motion/react";
import { useState } from "react";

const socialLinks = [
  { href: socials.github, label: "GitHub", Icon: IconBrandGithub },
  { href: socials.linkedin, label: "LinkedIn", Icon: IconBrandLinkedin },
  { href: socials.twitter, label: "X", Icon: IconBrandX },
] as const;

export function CurvedMenu({ onNavigate }: { onNavigate: () => void }) {
  const [selectedIndicator, setSelectedIndicator] = useState<string>("");

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed right-0 top-0 z-[60] h-dvh w-[80vw] max-w-sm bg-card text-foreground lg:hidden"
    >
      <button
        type="button"
        onClick={onNavigate}
        aria-label="Close menu"
        className="absolute right-6 top-6 z-10 flex size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-muted/50 hover:text-foreground"
      >
        <IconX className="size-6" />
      </button>

      <div className="flex h-full flex-col gap-10 p-12 pt-24">
        <nav
          onMouseLeave={() => setSelectedIndicator("")}
          className="flex flex-col gap-3"
        >
          <p className="mb-6 border-b border-muted-foreground/40 pb-2 text-xs uppercase tracking-widest text-muted-foreground">
            Navigation
          </p>
          {navItems.map((item, index) => (
            <CurvedLink
              key={item.link}
              data={{ ...item, index }}
              isActive={selectedIndicator === item.link}
              setSelectedIndicator={setSelectedIndicator}
              onNavigate={onNavigate}
            />
          ))}
        </nav>

        <div className="flex flex-col gap-5">
          <a
            href={RESUME_URL}
            download
            onClick={onNavigate}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 w-fit gap-2 rounded-full px-8 text-base font-medium",
            )}
          >
            <Download className="size-4" />
            Download Resume
          </a>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-muted/40 text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <Curve />
    </motion.div>
  );
}
