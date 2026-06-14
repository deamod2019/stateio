#!/usr/bin/env node
// Report restored modules that still reference the CJS snapshot.

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const RESTORED_DIR = path.join(ROOT, "src-restored");
const STATUS_PATH = path.join(RESTORED_DIR, "RESTORATION_STATUS.md");
const REPORT_PATH = path.join(RESTORED_DIR, "_RESIDUAL_CJS_REPORT.md");

const restoredModules = readRestoredModuleMap();
const jsFiles = walk(RESTORED_DIR).filter((file) => file.endsWith(".js"));
const residuals = collectResiduals(jsFiles);
const hookResiduals = collectHookResiduals(jsFiles);
const restoredResiduals = residuals.filter((item) => restoredModules.has(item.id));
const externalResiduals = residuals.filter((item) => !restoredModules.has(item.id));
const reviewSummary = summarizeReviewState(restoredResiduals, hookResiduals);

writeReport({
  restoredResiduals,
  externalResiduals,
  hookResiduals,
  reviewSummary,
});

console.log(`Restored CJS residuals: ${restoredResiduals.length}`);
console.log(`External/runtime CJS references: ${externalResiduals.length}`);
console.log(`Direct old hook references: ${hookResiduals.length}`);
console.log(`Actionable needs-review residuals: ${reviewSummary.needsReview}`);
console.log(`Report: ${path.relative(ROOT, REPORT_PATH)}`);

function readRestoredModuleMap() {
  const map = new Map();
  const status = fs.readFileSync(STATUS_PATH, "utf8");
  for (const line of status.split("\n")) {
    const row = line.match(/^\| (?<moduleCell>.+?) \| (?<restoredCell>.+?) \|/);
    if (!row) continue;
    const ids = row.groups.moduleCell.match(/\d+(?=[_\.])/g) || [];
    const restoredPath = (row.groups.restoredCell.match(/`(src-restored\/[^`]+)`/) || [])[1];
    if (!restoredPath) continue;
    for (const id of ids) map.set(id, restoredPath);
  }
  return map;
}

function collectResiduals(files) {
  const hits = [];
  const seen = new Set();
  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    const lines = text.split("\n");
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
      const line = lines[lineIndex];
      const re = /src-cjs\/(\d+)(?:_[^"']*)?\.js/g;
      let match;
      while ((match = re.exec(line))) {
        const id = match[1];
        const key = `${file}:${lineIndex + 1}:${id}`;
        if (seen.has(key)) continue;
        seen.add(key);
        hits.push({
          id,
          file: path.relative(ROOT, file),
          line: lineIndex + 1,
          restored: restoredModules.get(id) || "",
          category: classifyResidual(path.relative(ROOT, file), id),
        });
      }
    }
  }
  return hits.sort(sortHit);
}

function collectHookResiduals(files) {
  const hits = [];
  const pattern = 'require("../../src-cjs/30396__mod.js")';
  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    const lines = text.split("\n");
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
      if (!lines[lineIndex].includes(pattern)) continue;
      const relativeFile = path.relative(ROOT, file);
      hits.push({
        file: relativeFile,
        line: lineIndex + 1,
        category:
          relativeFile === "src-restored/ui/UIHooks.js"
            ? "central hook adapter"
            : classifySurface(relativeFile),
      });
    }
  }
  return hits.sort(sortHit);
}

function classifyResidual(file, id) {
  if (file === "src-restored/core/Localize.js" && (id === "70796" || id === "86125")) {
    return "compatibility cache seed";
  }
  if (file === "src-restored/core/TypesGame.js" && id === "95781") {
    return "compatibility cache seed";
  }
  if (file === "src-restored/ui/SVGAssets.js" && id === "36622") {
    return "legacy test/mock bridge";
  }
  if (file === "src-restored/ui/svgSpriteRuntime.js" && id === "95348") {
    return "third-party runtime boundary";
  }
  if (file === "src-restored/core/PathParserRuntime.js" && id === "66721") {
    return "third-party runtime boundary";
  }
  if (file === "src-restored/core/SentryRuntime.js" && id === "90505") {
    return "third-party runtime boundary";
  }
  if (file === "src-restored/core/SentryTracingRuntime.js" && id === "88183") {
    return "third-party runtime boundary";
  }
  if (file === "src-restored/core/AudioRuntime.js" && id === "41766") {
    return "third-party runtime boundary";
  }
  if (file === "src-restored/ui/preactRuntime.js" && id === "6400") {
    return "third-party runtime boundary";
  }
  if (file === "src-restored/core/diRuntime.js" && id === "86700") {
    return "third-party runtime boundary";
  }
  if (file === "src-restored/core/pixiRuntime.js" && id === "6538") {
    return "third-party runtime boundary";
  }
  if (file === "src-restored/core/animationRuntime.js" && id === "25317") {
    return "third-party runtime boundary";
  }
  if (file === "src-restored/core/CssAnimationRuntime.js" && id === "10990") {
    return "third-party runtime boundary";
  }
  if (file === "src-restored/core/FPSMeterRuntime.js" && id === "79349") {
    return "third-party runtime boundary";
  }
  if (file === "src-restored/core/InjectDecoratorsRuntime.js" && id === "84879") {
    return "third-party runtime boundary";
  }
  if (
    (file === "src-restored/core/FirebaseAppRuntime.js" && id === "83977") ||
    (file === "src-restored/core/FirebaseRemoteConfigRuntime.js" && id === "47135") ||
    (file === "src-restored/core/FirebaseAuthRuntime.js" && id === "56467") ||
    (file === "src-restored/core/FirebaseAnalyticsRuntime.js" && id === "99261")
  ) {
    return "third-party runtime boundary";
  }
  return classifySurface(file);
}

function classifySurface(file) {
  if (/(Shop|Leader[Bb]oard|LeaderBoard|Payment|Social|Yandex|Ad|Invite|Share|Referral)/.test(file)) {
    return "deferred commercial/platform surface";
  }
  if (/(Boosters|FighterItem|TexturedShopItem|ShopItem)/.test(file)) {
    return "deferred shop/skin/booster UI";
  }
  return "needs review";
}

function writeReport({ restoredResiduals, externalResiduals, hookResiduals, reviewSummary }) {
  const restoredByCategory = groupBy(restoredResiduals, "category");
  const hooksByCategory = groupBy(hookResiduals, "category");
  const needsReview = [
    ...restoredResiduals.filter((item) => item.category === "needs review"),
    ...hookResiduals.filter((item) => item.category === "needs review"),
  ];

  const lines = [
    "# Residual CJS Boundary Report",
    "",
    "Generated by `node scripts/report-restoration-residuals.mjs`.",
    "",
    "## Summary",
    "",
    `- Restored-module CJS residual references: ${restoredResiduals.length}`,
    `- External/runtime CJS references: ${externalResiduals.length}`,
    `- Direct old React-hook barrel references: ${hookResiduals.length}`,
    `- Needs-review residuals: ${needsReview.length}`,
    `- Compatibility cache seed references: ${reviewSummary.compatibilityCacheSeeds}`,
    `- Mixed-phase legacy bridge references: ${reviewSummary.mixedPhaseBridges}`,
    `- Third-party runtime boundary references: ${reviewSummary.thirdPartyRuntimeBoundaries}`,
    `- Deferred commercial/platform references: ${reviewSummary.deferredCommercialPlatform}`,
    `- Deferred shop/skin/booster references: ${reviewSummary.deferredShopSkinBooster}`,
    "",
    "## Restored-Module Residuals By Category",
    "",
    ...formatGroupedRestored(restoredByCategory),
    "",
    "## Direct Old Hook References",
    "",
    ...formatGroupedHooks(hooksByCategory),
    "",
    "## External Runtime Snapshot References",
    "",
    "These references point at modules not yet listed as hand-restored. They include Pixi/GSAP/Inversify/Sentry/Howler, Preact core, SVG/image assets, icons, FPS/debug helpers, and other third-party or deferred snapshot modules.",
    "",
    ...formatExternalSummary(externalResiduals),
    "",
  ];

  fs.writeFileSync(REPORT_PATH, `${lines.join("\n")}\n`);
}

function summarizeReviewState(restoredResiduals, hookResiduals) {
  const allItems = [...restoredResiduals, ...hookResiduals];
  return {
    compatibilityCacheSeeds: countCategory(allItems, "compatibility cache seed"),
    mixedPhaseBridges: countCategory(allItems, "mixed-phase legacy bridge"),
    thirdPartyRuntimeBoundaries: countCategory(allItems, "third-party runtime boundary"),
    deferredCommercialPlatform: countCategory(allItems, "deferred commercial/platform surface"),
    deferredShopSkinBooster: countCategory(allItems, "deferred shop/skin/booster UI"),
    needsReview: countCategory(allItems, "needs review"),
  };
}

function countCategory(items, category) {
  return items.filter((item) => item.category === category).length;
}

function formatGroupedRestored(groups) {
  const lines = [];
  for (const [category, items] of Object.entries(groups).sort()) {
    lines.push(`### ${titleCase(category)}`, "");
    lines.push("| Module | Restored file | Residual site |");
    lines.push("|--------|---------------|---------------|");
    for (const item of items) {
      lines.push(`| \`${item.id}\` | \`${item.restored}\` | \`${item.file}:${item.line}\` |`);
    }
    lines.push("");
  }
  if (lines.length === 0) return ["None."];
  return lines;
}

function formatGroupedHooks(groups) {
  const lines = [];
  for (const [category, items] of Object.entries(groups).sort()) {
    lines.push(`### ${titleCase(category)}`, "");
    lines.push("| Residual site |");
    lines.push("|---------------|");
    for (const item of items) lines.push(`| \`${item.file}:${item.line}\` |`);
    lines.push("");
  }
  if (lines.length === 0) return ["None."];
  return lines;
}

function formatExternalSummary(items) {
  const counts = new Map();
  for (const item of items) counts.set(item.id, (counts.get(item.id) || 0) + 1);
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 40)
    .map(([id, count]) => `- \`${id}\`: ${count}`);
}

function groupBy(items, key) {
  const groups = {};
  for (const item of items) {
    const value = item[key];
    if (!groups[value]) groups[value] = [];
    groups[value].push(item);
  }
  return groups;
}

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(file));
    else files.push(file);
  }
  return files;
}

function sortHit(a, b) {
  return a.file.localeCompare(b.file) || a.line - b.line || (a.id || "").localeCompare(b.id || "");
}

function titleCase(value) {
  return value.replace(/\b\w/g, (letter) => letter.toUpperCase());
}
