import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

import { ArrowUp, Sparkles } from "lucide-react";
import { profile, socials } from "@/lib/constants";

const socialLinks = [
  { href: socials.github, label: "GitHub", icon: IconBrandGithub },
  { href: socials.linkedin, label: "LinkedIn", icon: IconBrandLinkedin },
  { href: socials.twitter, label: "X", icon: IconBrandX },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="sticky bottom-0 z-0 flex min-h-[75vh] w-full flex-col justify-between overflow-hidden bg-background">
      {/* Foreground: divider, socials, copyright */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-12">
        <div className="flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            {socialLinks.map(({ href, label, icon: Icon }) => (
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

          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © {year} {profile.name}
            </p>
            <a
              href="#"
              className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to top
              <ArrowUp className="size-4 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Giant name wordmark — decorative; SVG textLength fits the full word to
          the width so it never clips, regardless of character count. */}
      <div
        aria-hidden
        className="pointer-events-none relative select-none px-4"
      >
        <Sparkles className="absolute right-[12%] top-2 size-[3.5vw] text-foreground/10 sm:size-[2.5vw]" />
        <Sparkles className="absolute right-[8%] top-[3.5vw] size-[2vw] text-foreground/[0.07] sm:size-[1.4vw]" />
        <svg
          viewBox="0 0 1200 210"
          preserveAspectRatio="xMidYMax meet"
          className="block w-full"
        >
          <text
            x="600"
            y="168"
            textAnchor="middle"
            textLength="1180"
            lengthAdjust="spacingAndGlyphs"
            className="fill-current font-display text-[175px] font-bold tracking-tight text-foreground/[0.05]"
          >
            {profile.handle}
          </text>
        </svg>
      </div>
    </footer>
  );
}
