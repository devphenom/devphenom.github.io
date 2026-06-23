"use client";

import dynamic from "next/dynamic";

import type { GlobeConfig } from "@/components/ui/globe";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  { ssr: false },
);

const globeConfig: GlobeConfig = {
  pointSize: 4,
  globeColor: "#0b0f1a",
  showAtmosphere: true,
  atmosphereColor: "#9ca3af",
  atmosphereAltitude: 0.1,
  emissive: "#0b0f1a",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(160,160,180,0.7)",
  ambientLight: "#a1a1aa",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 9.082, lng: 8.6753 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const arcColor = "#6b7280";

const arcs = [
  {
    order: 1,
    startLat: 9.082,
    startLng: 8.6753,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: arcColor,
  },
  {
    order: 2,
    startLat: 9.082,
    startLng: 8.6753,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.4,
    color: arcColor,
  },
  {
    order: 3,
    startLat: 9.082,
    startLng: 8.6753,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.5,
    color: arcColor,
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.4,
    color: arcColor,
  },
  {
    order: 5,
    startLat: 40.7128,
    startLng: -74.006,
    endLat: -23.5505,
    endLng: -46.6333,
    arcAlt: 0.3,
    color: arcColor,
  },
  {
    order: 6,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: arcColor,
  },
];

/**
 * GitHub-style WebGL globe, positioned so only the top half is visible inside
 * a card. Rendered at full opacity (no dimming).
 */
export function GithubGlobe() {
  return (
    <div className="absolute -bottom-[55%] left-1/2 aspect-square w-[150%] -translate-x-1/2">
      <World globeConfig={globeConfig} data={arcs} />
    </div>
  );
}
