"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

import { ArrowUpRight } from "lucide-react";
import type { ComponentType } from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/constants";
import { techIcon } from "@/components/tech-icons";

type Project = (typeof projects.items)[number];
type PanelVariant = "card" | "bleed";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 * i, ease: "easeOut" as const },
  }),
};

const featured = projects.items.find((p) => p.featured) ?? projects.items[0];
// The zoom gallery has 6 tile positions. Tenalve still appears in the scrolling
// panels, but is omitted here so Marvin takes a visible slot (7 tiles would
// overlap into 6 positions and hide Marvin).
const galleryOmit = new Set(["Tenalve"]);
const scattered = projects.items.filter(
  (p) => p !== featured && !galleryOmit.has(p.name),
);

/** Scatter layout for the zoom-parallax tiles (desktop), mirrors the Marvin gallery. */
const tilePosition = [
  "md:w-[24vw] -top-[30vh] -left-[15vw]",
  "md:w-[20vw] -top-[27vh] left-[10vw]",
  "md:w-[25vw] top-[0vh] left-[-27vw]",
  "md:w-[26vw] top-[0vh] left-[27vw]",
  "md:w-[20vw] top-[28vh] -left-[15vw]",
  "md:w-[30vw] top-[33vh] left-[15vw]",
];

function ProjectLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
    >
      <Icon className="size-4" />
      {label}
    </a>
  );
}

function TagPills({ tags }: { tags: Project["tags"] }) {
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

/**
 * Clickable, hoverable project image. Opens the detail modal on click.
 * The caller supplies positioning (relative aspect box, or absolute fill).
 */
function ProjectImage({
  project,
  onOpen,
  sizes,
  className,
  imageClassName = "object-cover",
  priority = false,
}: {
  project: Project;
  onOpen: (project: Project) => void;
  sizes: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-label={`View ${project.name} details`}
      className={cn(
        "group/img block cursor-pointer overflow-hidden bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes={sizes}
        preload={priority}
        className={cn(
          "transition duration-500 ease-out group-hover/img:scale-[1.04] group-hover/img:brightness-105",
          imageClassName,
        )}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-transparent transition duration-300 group-hover/img:ring-foreground/25"
      />
      <span className="pointer-events-none absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground opacity-0 shadow-sm backdrop-blur transition duration-300 group-hover/img:opacity-100">
        View
        <ArrowUpRight className="size-3.5" />
      </span>
    </button>
  );
}

/** Full-screen panel for the horizontal-scroll phase (image on the right). */
function ProjectPanel({
  project,
  index,
  total,
  variant,
  onOpen,
}: {
  project: Project;
  index: number;
  total: number;
  variant: PanelVariant;
  onOpen: (project: Project) => void;
}) {
  const meta = (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <span>
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 bg-border" />
        <span>{project.eyebrow}</span>
      </div>

      <h3 className="text-gradient-brand text-4xl font-bold tracking-tight sm:text-6xl">
        {project.name}
      </h3>
      <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {project.tags.length > 0 ? <TagPills tags={project.tags} /> : null}

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
        {project.live ? (
          <ProjectLink
            href={project.live}
            icon={ArrowUpRight}
            label="Live site"
          />
        ) : null}
        {project.repo ? (
          <ProjectLink
            href={project.repo}
            icon={IconBrandGithub}
            label="Code"
          />
        ) : null}
      </div>
    </div>
  );

  if (variant === "bleed") {
    return (
      <div className="relative flex h-full w-screen shrink-0 items-center overflow-hidden">
        <div className="relative z-10 w-full max-w-xl px-8 sm:px-14 lg:pl-24">
          {meta}
        </div>
        <div className="absolute inset-y-[8vh] right-0 w-1/2 overflow-hidden rounded-l-3xl">
          <ProjectImage
            project={project}
            onOpen={onOpen}
            sizes="50vw"
            className="absolute inset-0 h-full w-full"
          />
          {/* Left fade toward the text — theme-aware (flips with --background). */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/5 to-transparent"
          />
          {/* Soft top/bottom fade so the image melts into the page in both themes. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60"
          />
        </div>
      </div>
    );
  }

  // variant === "card"
  return (
    <div className="relative flex h-full w-screen shrink-0 items-center justify-center px-6 py-[8vh] sm:px-12">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        {meta}
        <ProjectImage
          project={project}
          onOpen={onOpen}
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="relative aspect-video w-full rounded-2xl border border-border shadow-xl"
        />
      </div>
    </div>
  );
}

/** Static card for the mobile / reduced-motion fallback. */
function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-colors hover:border-foreground/20">
      <ProjectImage
        project={project}
        onOpen={onOpen}
        sizes="(max-width: 640px) 100vw, 50vw"
        className="relative aspect-video w-full"
      />
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {project.eyebrow}
          </p>
          <h3 className="text-xl font-semibold text-foreground">
            {project.name}
          </h3>
          <p className="leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>
        <div className="mt-auto space-y-4">
          {project.tags.length > 0 ? <TagPills tags={project.tags} /> : null}
          {project.live || project.repo ? (
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-4">
              {project.live ? (
                <ProjectLink
                  href={project.live}
                  icon={ArrowUpRight}
                  label="Live site"
                />
              ) : null}
              {project.repo ? (
                <ProjectLink
                  href={project.repo}
                  icon={IconBrandGithub}
                  label="Code"
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/** Detail modal shown when a project image is clicked. */
function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        {project ? (
          <>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted/30">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 92vw, 60vw"
                className="object-cover"
              />
            </div>
            <DialogHeader>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {project.eyebrow}
              </p>
              <DialogTitle>{project.name}</DialogTitle>
              <DialogDescription>{project.description}</DialogDescription>
            </DialogHeader>
            {project.tags.length > 0 ? <TagPills tags={project.tags} /> : null}
            {project.live || project.repo ? (
              <DialogFooter>
                {project.live ? (
                  <ProjectLink
                    href={project.live}
                    icon={ArrowUpRight}
                    label="Live site"
                  />
                ) : null}
                {project.repo ? (
                  <ProjectLink
                    href={project.repo}
                    icon={IconBrandGithub}
                    label="Code"
                  />
                ) : null}
              </DialogFooter>
            ) : null}
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

export function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  // TEMP: layout chooser — remove once a panel variant is picked.
  const [panelVariant, setPanelVariant] = useState<PanelVariant>("bleed");
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Phase 1 (0 -> 0.6): zoom parallax. Phase 2 (0.6 -> 1): horizontal scroll.
  const scaleB = useTransform(scrollYProgress, [0, 0.6], [1, 5]);
  const scaleC = useTransform(scrollYProgress, [0, 0.6], [1, 6]);
  const scaleD = useTransform(scrollYProgress, [0, 0.6], [1, 8]);
  const centerScale = useTransform(scrollYProgress, [0, 0.6], [1, 4]);
  const radius = useTransform(scrollYProgress, [0, 0.6], [20, 4]);
  const tileScales = [scaleC, scaleD, scaleC, scaleD, scaleB, scaleD];

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.599, 0.6, 1],
    [1, 1, 0, 0],
  );
  const horizontalOpacity = useTransform(
    scrollYProgress,
    [0, 0.599, 0.6, 1],
    [0, 0, 1, 1],
  );
  // Only the visible phase should capture clicks (the invisible layer sits on
  // top and would otherwise swallow them).
  const galleryPointer = useTransform(scrollYProgress, (v) =>
    v < 0.6 ? "auto" : "none",
  );
  const panelsPointer = useTransform(scrollYProgress, (v) =>
    v < 0.6 ? "none" : "auto",
  );
  const total = projects.items.length;
  const x = useTransform(
    scrollYProgress,
    [0.6, 1],
    ["0vw", `-${(total - 1) * 100}vw`],
  );

  return (
    <section id="projects" className="relative w-full bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 pt-24 sm:pt-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-6"
        >
          <h2 className="text-gradient-brand whitespace-nowrap text-4xl font-bold tracking-tight md:text-5xl">
            {projects.heading}
          </h2>
          <span
            aria-hidden
            className="h-px flex-1 bg-gradient-to-r from-border to-transparent"
          />
        </motion.div>

        {/* TEMP: panel layout chooser — remove once a variant is picked. */}
        {!reduceMotion && (
          <div className="mt-6 hidden items-center gap-3 lg:flex">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Panel layout
            </span>
            <div className="inline-flex rounded-full border border-border p-0.5">
              {(["card", "bleed"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setPanelVariant(v)}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium capitalize transition-colors",
                    panelVariant === v
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Desktop, motion-on: zoom parallax -> horizontal scroll */}
      {!reduceMotion && (
        <div
          ref={container}
          className="relative mt-12 hidden h-[700vh] lg:block"
        >
          <div className="sticky top-0 h-screen overflow-hidden">
            {/* Phase 1: zoom parallax */}
            <motion.div
              style={{ opacity: imageOpacity, pointerEvents: galleryPointer }}
              className="absolute inset-0"
            >
              {scattered.map((project, i) => (
                <motion.div
                  key={`${project.name}-${i}`}
                  style={{ scale: tileScales[i % tileScales.length] }}
                  className="absolute top-0 flex h-full w-full items-center justify-center"
                >
                  <motion.div
                    onClick={() => setActiveProject(project)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveProject(project);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${project.name} details`}
                    style={{ borderRadius: radius }}
                    className={cn(
                      "group relative aspect-video w-[60vw] cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40",
                      tilePosition[i % tilePosition.length],
                    )}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="60vw"
                      className="object-cover transition duration-500 ease-out group-hover:scale-[1.04] group-hover:brightness-105"
                    />
                    <span className="absolute bottom-2 left-3 z-10 font-mono text-[10px] uppercase tracking-widest text-white/70">
                      {project.name}
                    </span>
                  </motion.div>
                </motion.div>
              ))}

              {/* Center featured tile (zooms to fill) */}
              <motion.div
                style={{ scale: centerScale }}
                className="absolute top-0 flex h-full w-full items-center justify-center"
              >
                <motion.div
                  style={{ borderRadius: radius, scale: 0.25 }}
                  className="relative h-screen w-screen origin-center overflow-hidden bg-background"
                >
                  {/* Render the Pitchsync panel itself so the zoom crossfades
                      seamlessly into the first horizontal-scroll panel. */}
                  <ProjectPanel
                    project={featured}
                    index={0}
                    total={total}
                    variant="bleed"
                    onOpen={setActiveProject}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Phase 2: horizontal scroll */}
            <motion.div
              style={{
                opacity: horizontalOpacity,
                pointerEvents: panelsPointer,
              }}
              className="absolute inset-0"
            >
              <motion.div style={{ x }} className="flex h-full">
                {projects.items.map((project, i) => (
                  <ProjectPanel
                    key={`${project.name}-${i}`}
                    project={project}
                    index={i}
                    total={total}
                    variant={panelVariant}
                    onOpen={setActiveProject}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Mobile / reduced motion: static cards */}
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-5 pb-24 pt-12 sm:pb-32",
          !reduceMotion && "lg:hidden",
        )}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.items.map((project, i) => (
            <motion.div
              key={`${project.name}-${i}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
            >
              <ProjectCard project={project} onOpen={setActiveProject} />
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
