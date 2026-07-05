import {
  IconBrandFramerMotion,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTailwind,
  IconBrandTypescript,
  IconDatabase,
  IconServer,
  type IconProps,
} from "@tabler/icons-react";
import type { ComponentType } from "react";

/** Shared map of tech name -> themed, monochrome brand icon (currentColor). */
export const techIcon: Record<string, ComponentType<IconProps>> = {
  TypeScript: IconBrandTypescript,
  React: IconBrandReact,
  "Next.js": IconBrandNextjs,
  "React Native": IconBrandReactNative,
  Motion: IconBrandFramerMotion,
  "Node.js": IconBrandNodejs,
  NestJS: IconServer,
  Prisma: IconBrandPrisma,
  PostgreSQL: IconDatabase,
  "Tailwind CSS": IconBrandTailwind,
};
