import { cn } from "@/lib/utils";

const baseTone = "text-foreground/[0.06] dark:text-foreground/[0.09]";
/** Brighter tone for feature illustrations that should be clearly visible. */
const strongTone = "text-foreground/25 dark:text-foreground/30";

/** GitHub-style dotted wireframe globe (Location / Remote). */
export function GlobeIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      aria-hidden
      className={cn(
        "absolute -bottom-12 -right-12 size-52",
        baseTone,
        className,
      )}
    >
      <circle cx="110" cy="110" r="88" strokeDasharray="2 5" />
      <ellipse cx="110" cy="110" rx="88" ry="32" strokeDasharray="2 5" />
      <ellipse cx="110" cy="110" rx="88" ry="62" strokeDasharray="2 5" />
      <ellipse cx="110" cy="110" rx="32" ry="88" strokeDasharray="2 5" />
      <ellipse cx="110" cy="110" rx="62" ry="88" strokeDasharray="2 5" />
      <line x1="22" y1="110" x2="198" y2="110" strokeDasharray="2 5" />
    </svg>
  );
}

/**
 * Visible, continuously rotating wireframe globe (Location / Remote).
 * The meridian lines spin about the centre to read as a turning globe; the
 * outer circle and latitude lines stay fixed. Theme-aware via currentColor.
 */
export function SpinningGlobeIllustration({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      aria-hidden
      className={cn(
        "absolute -bottom-8 -right-6 size-52",
        strongTone,
        className,
      )}
    >
      {/* Fixed frame */}
      <circle cx="100" cy="100" r="86" />
      <ellipse cx="100" cy="100" rx="86" ry="30" />
      <ellipse cx="100" cy="100" rx="86" ry="58" />
      <line x1="14" y1="100" x2="186" y2="100" />
      {/* Spinning meridians */}
      <g className="origin-center animate-globe-spin [transform-box:fill-box]">
        <ellipse cx="100" cy="100" rx="30" ry="86" />
        <ellipse cx="100" cy="100" rx="58" ry="86" />
        <line x1="100" y1="14" x2="100" y2="186" />
      </g>
    </svg>
  );
}

/**
 * "Arsenal": a shot fired into a bullseye, hitting dead centre. Conveys
 * precision tooling. Theme-aware via currentColor.
 */
export function TargetHitIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 170"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("absolute -bottom-4 -right-4 w-56", strongTone, className)}
    >
      {/* Bullseye */}
      <circle cx="155" cy="70" r="46" />
      <circle cx="155" cy="70" r="30" />
      <circle cx="155" cy="70" r="15" />
      <circle cx="155" cy="70" r="4" fill="currentColor" stroke="none" />
      {/* Shot trajectory hitting the centre */}
      <path d="M10 158 L155 70" strokeDasharray="3 6" />
      {/* Arrow / impact head at the centre */}
      <path d="M138 76 L155 70 L146 86" />
      {/* Impact sparks */}
      <path d="M168 58 l9 -7 M172 70 l11 0 M168 82 l9 7" />
    </svg>
  );
}

/** Faint dot-matrix pattern (Bio). */
export function DotGridIllustration({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={cn("absolute right-0 top-0 h-full w-2/3", baseTone, className)}
    >
      <defs>
        <pattern
          id="about-dot-grid"
          x="0"
          y="0"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#about-dot-grid)" />
    </svg>
  );
}

/** Connected nodes / network (Tech stack). */
export function NodesIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      aria-hidden
      className={cn("absolute -bottom-6 -right-6 w-56", baseTone, className)}
    >
      <path d="M20 130 L70 80 L120 110 L180 40" strokeDasharray="2 5" />
      <path d="M20 60 L80 120 L150 70" strokeDasharray="2 5" />
      <g fill="currentColor" stroke="none">
        <circle cx="20" cy="130" r="3" />
        <circle cx="70" cy="80" r="3" />
        <circle cx="120" cy="110" r="3" />
        <circle cx="180" cy="40" r="3" />
        <circle cx="20" cy="60" r="3" />
        <circle cx="80" cy="120" r="3" />
        <circle cx="150" cy="70" r="3" />
      </g>
    </svg>
  );
}

/** Concentric dartboard rings with a dart in the bullseye (Currently). */
export function RadarIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn(
        "absolute -bottom-12 -right-12 size-48",
        strongTone,
        className,
      )}
    >
      <circle cx="100" cy="100" r="80" />
      <circle cx="100" cy="100" r="55" />
      <circle cx="100" cy="100" r="30" />
      <circle cx="100" cy="100" r="7" fill="currentColor" stroke="none" />
      {/* Dart landing in the bullseye */}
      <path d="M100 100 L168 40" strokeWidth={2} />
      <path d="M168 40 l-13 1 M168 40 l1 13" strokeWidth={2} />
    </svg>
  );
}

/** Ascending bar chart (Stats). */
export function BarsIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 100"
      fill="currentColor"
      aria-hidden
      className={cn("absolute -bottom-2 -right-2 w-44", baseTone, className)}
    >
      <rect x="10" y="60" width="18" height="40" rx="3" />
      <rect x="40" y="44" width="18" height="56" rx="3" />
      <rect x="70" y="28" width="18" height="72" rx="3" />
      <rect x="100" y="14" width="18" height="86" rx="3" />
      <rect x="130" y="2" width="18" height="98" rx="3" />
    </svg>
  );
}

/** Chevron arrows pointing toward the CTA. */
export function ArrowsIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 120"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn(
        "absolute right-0 top-1/2 w-64 -translate-y-1/2",
        baseTone,
        className,
      )}
    >
      <path d="M20 20 L70 60 L20 100" />
      <path d="M80 20 L130 60 L80 100" />
      <path d="M140 20 L190 60 L140 100" />
    </svg>
  );
}
