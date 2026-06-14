#!/usr/bin/env node
// Audit which readable webpack modules are hand-restored, deferred, or still need review.

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const READABLE_DIR = path.join(ROOT, "src-readable");
const RESTORED_DIR = path.join(ROOT, "src-restored");
const STATUS_PATH = path.join(RESTORED_DIR, "RESTORATION_STATUS.md");
const REPORT_PATH = path.join(RESTORED_DIR, "_RESTORATION_SCOPE_REPORT.md");

const restoredModules = readRestoredModuleMap();
const readableModules = readReadableModules();
const rows = readableModules.map(classifyModule).sort(sortRow);
const summary = summarize(rows);

writeReport(rows, summary);

console.log(`Readable modules: ${readableModules.length}`);
console.log(`Hand-restored module ids: ${restoredModules.size}`);
console.log(`Unrestored modules with TS helper residue: ${summary.unrestoredWithHelpers}`);
console.log(`Actionable needs-review helper modules: ${summary.actionableNeedsReviewWithHelpers}`);
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

function readReadableModules() {
  return fs
    .readdirSync(READABLE_DIR)
    .filter((file) => file.endsWith(".js"))
    .map((file) => {
      const id = (file.match(/^(\d+)_/) || [])[1] || "";
      const fullPath = path.join(READABLE_DIR, file);
      const text = fs.readFileSync(fullPath, "utf8");
      return {
        id,
        file,
        text,
        helpers: countHelpers(text),
      };
    })
    .filter((item) => item.id);
}

function countHelpers(text) {
  const names = ["__extends", "__decorate", "__awaiter", "__generator", "__read", "__spreadArray", "__assign", "__rest"];
  const helpers = {};
  for (const name of names) helpers[name] = count(text, new RegExp(`\\b${name}\\b`, "g"));
  helpers.total = Object.values(helpers).reduce((sum, value) => sum + value, 0);
  helpers.tsStateMachine = helpers.__extends + helpers.__decorate + helpers.__awaiter + helpers.__generator;
  return helpers;
}

function count(text, pattern) {
  return (text.match(pattern) || []).length;
}

function classifyModule(moduleInfo) {
  if (restoredModules.has(moduleInfo.id)) {
    return {
      ...moduleInfo,
      category: "hand-restored",
      restored: restoredModules.get(moduleInfo.id),
      actionable: false,
    };
  }

  const category = classifyUnrestored(moduleInfo);
  return {
    ...moduleInfo,
    category,
    restored: "",
    actionable: category === "needs review",
  };
}

function classifyUnrestored({ id, file, text }) {
  const haystack = `${file}\n${text.slice(0, 2500)}`;

  if (isDeferredCommercialPlatform(haystack)) return "deferred commercial/platform";
  if (isThirdPartyRuntime(id, haystack)) return "third-party/runtime boundary";
  if (isStyleOrAssetBoundary(file, haystack)) return "style/asset boundary";
  if (isConstantOrUtilityLeaf(file, haystack)) return "constant/utility leaf";
  if (isEmptyOrBarrel(file, text)) return "empty/barrel snapshot";
  return "needs review";
}

function isThirdPartyRuntime(id, text) {
  const explicitIds = new Set([
    "51389", // Inversify Container
    "6400", // Preact runtime
    "6538", // Pixi runtime barrel
    "8575", // URL parser used inside the Pixi runtime snapshot
    "66713", // Promise polyfill used inside the Pixi runtime snapshot
    "86700", // Inversify metadata reader/runtime surface
    "25317", // GSAP runtime surface
    "10990", // CSS animation runtime
    "41766", // Howler
    "66721", // SVG path parser
    "90505", // Sentry
    "88183", // Sentry tracing
    "79349", // FPSMeter
    "95348", // SVG sprite loader runtime
  ]);
  if (explicitIds.has(id)) return true;
  return /(Inversify|Container|Binding|Resolver|Planner|Metadata|Reflect|Lookup|Request|Target|Scope|preact|pixi|gsap|sentry|firebase|howler|FPSMeter)/i.test(text);
}

function isStyleOrAssetBoundary(file, text) {
  return /(__mod\.js$|SVG|png|jpg|jpeg|webp|gif|css|style|asset|sprite|image|icon)/i.test(file) &&
    !/(Action|Model|System|Popup|Screen|Button|Manager|Logic|View|Component)/.test(file + text.slice(0, 500));
}

function isDeferredCommercialPlatform(text) {
  return /(Shop|Leader[Bb]oard|LeaderBoard|Payment|Social|Yandex|Ad|Ads|Invite|Share|Referral|Tournament|Authorize|Auth|Login|CrossPromo|NoAds|Purchase|Product|Catalog)/.test(text);
}

function isConstantOrUtilityLeaf(file, text) {
  return /(Types[A-Z]|ScoreEvent|Claim|Count|Url|QueryableString|BindingCount|UIEvents|ExclamationMarkNotificator|DebugPanel|Promise)/.test(file) ||
    (/Object\.defineProperty\(t, "__esModule"/.test(text) && !/(class|function \(|__extends|__decorate|__awaiter|__generator)/.test(text));
}

function isEmptyOrBarrel(file, text) {
  if (/__mod\.js$/.test(file) && !/(class|function|=>|__extends|__awaiter|__decorate|__generator)/.test(text.slice(500))) {
    return true;
  }
  return /barrel \/ re-export module/.test(text);
}

function summarize(items) {
  const byCategory = groupBy(items, "category");
  const unrestored = items.filter((item) => item.category !== "hand-restored");
  const unrestoredWithHelpers = unrestored.filter((item) => item.helpers.tsStateMachine > 0);
  const needsReview = items.filter((item) => item.category === "needs review");
  const needsReviewWithHelpers = needsReview.filter((item) => item.helpers.tsStateMachine > 0);

  return {
    total: items.length,
    restored: (byCategory["hand-restored"] || []).length,
    unrestored: unrestored.length,
    unrestoredWithHelpers: unrestoredWithHelpers.length,
    actionableNeedsReview: needsReview.length,
    actionableNeedsReviewWithHelpers: needsReviewWithHelpers.length,
    byCategory,
  };
}

function writeReport(items, summary) {
  const helperRows = items
    .filter((item) => item.category !== "hand-restored" && item.helpers.tsStateMachine > 0)
    .sort(sortHelperRow);
  const needsReviewRows = items
    .filter((item) => item.category === "needs review")
    .sort(sortHelperRow);

  const lines = [
    "# Restoration Scope Report",
    "",
    "Generated by `node scripts/report-restoration-scope.mjs` from `src-readable/` and `src-restored/RESTORATION_STATUS.md`.",
    "",
    "## Summary",
    "",
    `- Readable webpack modules: ${summary.total}`,
    `- Hand-restored module ids: ${summary.restored}`,
    `- Unrestored module ids: ${summary.unrestored}`,
    `- Unrestored modules with class/decorator/async helper residue: ${summary.unrestoredWithHelpers}`,
    `- Actionable needs-review modules: ${summary.actionableNeedsReview}`,
    `- Actionable needs-review modules with class/decorator/async helper residue: ${summary.actionableNeedsReviewWithHelpers}`,
    "",
    "## Category Counts",
    "",
    ...formatCategoryCounts(summary.byCategory),
    "",
    "## Unrestored Helper Residue",
    "",
    ...formatHelperRows(helperRows),
    "",
    "## Needs-Review Modules",
    "",
    ...formatNeedsReviewRows(needsReviewRows),
    "",
    "## Unrestored Constant/Utility Leaves",
    "",
    ...formatUnrestoredLeafRows(items),
    "",
  ];

  fs.writeFileSync(REPORT_PATH, `${lines.join("\n")}\n`);
}

function formatCategoryCounts(groups) {
  const lines = ["| Category | Modules |", "|----------|---------|"];
  for (const [category, items] of Object.entries(groups).sort()) {
    lines.push(`| ${category} | ${items.length} |`);
  }
  return lines;
}

function formatHelperRows(rows) {
  if (rows.length === 0) return ["None."];
  const lines = [
    "| Module | Category | `__extends` | `__decorate` | `__awaiter` | `__generator` |",
    "|--------|----------|-------------|--------------|-------------|---------------|",
  ];
  for (const item of rows) {
    lines.push(
      `| \`${item.file}\` | ${item.category} | ${item.helpers.__extends} | ${item.helpers.__decorate} | ${item.helpers.__awaiter} | ${item.helpers.__generator} |`,
    );
  }
  return lines;
}

function formatNeedsReviewRows(rows) {
  if (rows.length === 0) return ["None."];
  const lines = [
    "| Module | Helper residue |",
    "|--------|----------------|",
  ];
  for (const item of rows) {
    lines.push(`| \`${item.file}\` | ${item.helpers.tsStateMachine} |`);
  }
  return lines;
}

function formatUnrestoredLeafRows(items) {
  const rows = items
    .filter((item) => item.category === "constant/utility leaf")
    .sort((a, b) => Number(a.id) - Number(b.id));
  if (rows.length === 0) return ["None."];
  const lines = ["| Module | Helper residue |", "|--------|----------------|"];
  for (const item of rows) {
    lines.push(`| \`${item.file}\` | ${item.helpers.tsStateMachine} |`);
  }
  return lines;
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

function sortRow(a, b) {
  return a.category.localeCompare(b.category) || Number(a.id) - Number(b.id);
}

function sortHelperRow(a, b) {
  return (
    Number(a.actionable) - Number(b.actionable) ||
    b.helpers.tsStateMachine - a.helpers.tsStateMachine ||
    a.category.localeCompare(b.category) ||
    Number(a.id) - Number(b.id)
  );
}
