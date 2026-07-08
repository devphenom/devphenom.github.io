// Post-build SEO fixup for GitHub Pages static hosting.
//
// Next's metadata image routes (opengraph-image, twitter-image, icon,
// apple-icon) are emitted as EXTENSIONLESS files. GitHub Pages serves files
// without a known extension as `application/octet-stream`, which Facebook /
// LinkedIn crawlers reject for og:image. This script writes real `.png`
// siblings and rewrites the generated HTML / manifest to reference them, so
// every social/image URL is served with the correct content type.

import { copyFileSync, existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const NAMES = ["opengraph-image", "twitter-image", "apple-icon", "icon"]; // longest first

if (!existsSync(OUT)) {
  console.error(`[seo-postbuild] "${OUT}/" not found — run \`next build\` first.`);
  process.exit(1);
}

// 1) Copy each extensionless image to a .png sibling.
for (const name of NAMES) {
  const src = join(OUT, name);
  const dest = join(OUT, `${name}.png`);
  if (existsSync(src)) {
    copyFileSync(src, dest);
    console.log(`[seo-postbuild] wrote ${dest}`);
  } else {
    console.warn(`[seo-postbuild] skip ${src} (not found)`);
  }
}

// 2) Rewrite references in text output: `/name` or `/name?hash` -> `/name.png`.
//    Idempotent: the negative lookahead skips paths already ending in `.png`.
function rewrite(content) {
  let out = content;
  for (const name of NAMES) {
    const re = new RegExp(`/${name}(\\?[A-Za-z0-9]+)?(?![\\w.])`, "g");
    out = out.replace(re, `/${name}.png`);
  }
  return out;
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) {
      walk(p);
    } else if (/\.(html|webmanifest)$/.test(entry)) {
      const before = readFileSync(p, "utf8");
      const after = rewrite(before);
      if (after !== before) {
        writeFileSync(p, after);
        console.log(`[seo-postbuild] patched ${p}`);
      }
    }
  }
}

walk(OUT);
console.log("[seo-postbuild] done.");
