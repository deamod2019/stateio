#!/usr/bin/env node
// Audit the user-selected restoration target: core gameplay plus settings.

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const READABLE_INDEX_PATH = path.join(ROOT, "src-readable", "_index.json");
const READABLE_DIR = path.join(ROOT, "src-readable");
const RESTORED_DIR = path.join(ROOT, "src-restored");
const STATUS_PATH = path.join(RESTORED_DIR, "RESTORATION_STATUS.md");
const RESIDUAL_REPORT_PATH = path.join(RESTORED_DIR, "_RESIDUAL_CJS_REPORT.md");
const SCOPE_REPORT_PATH = path.join(RESTORED_DIR, "_RESTORATION_SCOPE_REPORT.md");
const REPORT_PATH = path.join(RESTORED_DIR, "_TARGET_SCOPE_REPORT.md");

const restoredModules = readRestoredModuleMap();
const readableModules = readReadableIndex();
const residualSummary = readSummary(RESIDUAL_REPORT_PATH);
const scopeSummary = readSummary(SCOPE_REPORT_PATH);
const rows = readableModules.map(classifyModule).sort(sortRows);
const summary = summarize(rows);

writeReport(rows, summary);

console.log(`Target scope modules: ${summary.target.total}`);
console.log(`Target restored: ${summary.target.restored}`);
console.log(`Target missing: ${summary.target.missing}`);
console.log(`Target helper residue: ${summary.target.helperResidue}`);
console.log(`Excluded commercial/platform modules: ${summary.excluded.total}`);
console.log(`Report: ${path.relative(ROOT, REPORT_PATH)}`);

if (summary.target.missing > 0 || summary.target.helperResidue > 0 || summary.target.withoutProof > 0) {
  process.exitCode = 1;
}

function readRestoredModuleMap() {
  const map = new Map();
  const status = fs.readFileSync(STATUS_PATH, "utf8");
  for (const line of status.split("\n")) {
    const row = line.match(/^\| (?<moduleCell>.+?) \| (?<restoredCell>.+?) \| (?<testCell>.+?) \|/);
    if (!row) continue;
    const ids = row.groups.moduleCell.match(/\d+(?=[_\.])/g) || [];
    const restoredPath = (row.groups.restoredCell.match(/`(src-restored\/[^`]+)`/) || [])[1] || "";
    if (!restoredPath) continue;
    for (const id of ids) {
      map.set(id, {
        restoredPath,
        proof: row.groups.testCell.replaceAll("`", "").trim(),
      });
    }
  }
  return map;
}

function readReadableIndex() {
  return JSON.parse(fs.readFileSync(READABLE_INDEX_PATH, "utf8")).map((entry) => {
    const id = String(entry.id);
    const text = fs.readFileSync(path.join(READABLE_DIR, entry.file), "utf8");
    return {
      id,
      file: entry.file,
      exports: entry.exports || [],
      text,
      helpers: countHelpers(text),
    };
  });
}

function countHelpers(text) {
  const helpers = {};
  for (const name of ["__extends", "__decorate", "__awaiter", "__generator"]) {
    helpers[name] = (text.match(new RegExp(`\\b${name}\\b`, "g")) || []).length;
  }
  helpers.total = Object.values(helpers).reduce((sum, value) => sum + value, 0);
  return helpers;
}

function classifyModule(moduleInfo) {
  const restored = restoredModules.get(moduleInfo.id);
  const label = `${moduleInfo.file} ${moduleInfo.exports.join(" ")}`;
  const scope = classifyScope(label);
  const evidenceHelpers = restored
    ? countHelpers(fs.readFileSync(path.join(ROOT, restored.restoredPath), "utf8"))
    : moduleInfo.helpers;
  const hasProof = Boolean(restored?.proof && restored.proof !== "-");
  return {
    ...moduleInfo,
    readableHelpers: moduleInfo.helpers,
    helpers: evidenceHelpers,
    scope,
    restoredPath: restored?.restoredPath || "",
    proof: restored?.proof || "",
    restored: Boolean(restored),
    hasProof,
    targetIssue:
      scope === "target core/settings" &&
      (!restored || evidenceHelpers.total > 0 || !hasProof),
  };
}

function classifyScope(label) {
  if (isExcludedCommercialPlatform(label)) return "excluded commercial/platform";
  if (isThirdPartyRuntime(label)) return "third-party/runtime";
  if (isAssetOrStyle(label)) return "asset/style boundary";
  if (isTargetCoreSettings(label)) return "target core/settings";
  return "supporting restored/neutral";
}

function isExcludedCommercialPlatform(label) {
  if (/SocialFlowAction/.test(label)) return false;
  return /(Shop|Leader[Bb]oard|LeaderBoard|Leaderboard|Payment|Payments|Yandex|Authorize|Auth|Login|Referral|Tournament|CrossPromo|Invite|Share|NoAds|Purchase|Product|Catalog|AdAction|AdManager|AdsModule|TypesAds|InitAd|Social|PlayWith|Opponent|GroupModel|FighterItem|BuildingItem|Selectable|SkinType|ColorItem|Booster)/.test(label);
}

function isThirdPartyRuntime(label) {
  return /\b(Container|Inversify|preact|Preact|Pixi|PIXI|GSAP|Howler|Howl|Sentry|Firebase|FPSMeter|PathParser|svgSpriteRuntime|Runtime)\b/.test(label) &&
    !/\b(RuntimeCore|RuntimeActionExports|RuntimeUtils|RuntimeContainer)\b/.test(label);
}

function isAssetOrStyle(label) {
  return /\b(SVG|Icon|Css|CSS|Image|Sprite|Texture|Assets?)\b/.test(label) &&
    !/\b(SpritesPool|StateShapeView|GenerateMapSpriteAction|PreloadAssetsAction)\b/.test(label);
}

function isTargetCoreSettings(label) {
  return /(Settings|Audio|Sound|Music|Pause|Cookie|MainAction|BootAction|GameModule|GameFlow|CoreGame|RuntimeCore|RuntimeContainer|RuntimeUtils|Action|Flow|LevelStart|LevelEnd|LevelNext|LevelRestart|StageEnd|StartScreen|StartGame|GameModel|Building|Population|Input|Bot|Fighter|Spawner|Field|Continent|Capital|StateShape|Path|Tutorial|SkinManager|SpritesPool|ScreenContainer|RootView|RootMediator|Overlay|Spinner|ProgressBar|PopupType|GameEvents|GameState|TypesGame|CoreTypes|TypesAudio|UIHelpers|UIConstants|Localize|WaitAction|EventDispatcher|GlobalEventProvider|ECS|Query|System|Model|View|Mediator)/.test(label);
}

function summarize(items) {
  const target = items.filter((item) => item.scope === "target core/settings");
  const excluded = items.filter((item) => item.scope === "excluded commercial/platform");
  return {
    target: {
      total: target.length,
      restored: target.filter((item) => item.restored).length,
      missing: target.filter((item) => !item.restored).length,
      helperResidue: target.filter((item) => item.helpers.total > 0).length,
      withoutProof: target.filter((item) => !item.hasProof).length,
    },
    excluded: {
      total: excluded.length,
      restored: excluded.filter((item) => item.restored).length,
      missing: excluded.filter((item) => !item.restored).length,
      helperResidue: excluded.filter((item) => item.helpers.total > 0).length,
    },
    byScope: groupBy(items, "scope"),
  };
}

function writeReport(items, summary) {
  const targetRows = items.filter((item) => item.scope === "target core/settings");
  const targetIssues = targetRows.filter((item) => item.targetIssue);
  const excludedRows = items.filter((item) => item.scope === "excluded commercial/platform");

  const lines = [
    "# Target Restoration Scope Report",
    "",
    "Generated by `node scripts/report-target-restoration-scope.mjs`.",
    "",
    "This report follows the current user scope: keep core gameplay and settings restored; do not spend restoration effort on shop, leaderboards, advertising, social platform, or payment-specific surfaces unless they block core/settings behavior.",
    "",
    "## Summary",
    "",
    `- Target core/settings modules: ${summary.target.total}`,
    `- Target restored modules: ${summary.target.restored}`,
    `- Target missing modules: ${summary.target.missing}`,
    `- Target modules with TS helper residue: ${summary.target.helperResidue}`,
    `- Target modules without comparison proof: ${summary.target.withoutProof}`,
    `- Excluded commercial/platform modules: ${summary.excluded.total}`,
    `- Excluded restored modules: ${summary.excluded.restored}`,
    `- Excluded missing modules: ${summary.excluded.missing}`,
    `- Excluded modules with helper residue: ${summary.excluded.helperResidue}`,
    "",
    "## Upstream Report Signals",
    "",
    `- Residual needs-review references: ${residualSummary["Needs-review residuals"] || "unknown"}`,
    `- Restoration-scope needs-review modules: ${scopeSummary["Actionable needs-review modules"] || "unknown"}`,
    `- Restoration-scope helper needs-review modules: ${scopeSummary["Actionable needs-review modules with class/decorator/async helper residue"] || "unknown"}`,
    "",
    "## Target Issues",
    "",
    ...formatTargetIssues(targetIssues),
    "",
    "## Target Core/Settings Inventory",
    "",
    ...formatInventory(targetRows),
    "",
    "## Excluded Commercial/Platform Inventory",
    "",
    ...formatExcluded(excludedRows),
    "",
  ];

  fs.writeFileSync(REPORT_PATH, `${lines.join("\n")}\n`);
}

function formatTargetIssues(rows) {
  if (rows.length === 0) return ["None."];
  const lines = [
    "| Module | Restored | Helper residue | Proof |",
    "|--------|----------|----------------|-------|",
  ];
  for (const item of rows) {
    lines.push(
      `| \`${item.file}\` | ${item.restored ? "yes" : "no"} | ${item.helpers.total} | ${item.proof || "-"} |`,
    );
  }
  return lines;
}

function formatInventory(rows) {
  const lines = [
    "| Module | Exports | Restored file | Proof |",
    "|--------|---------|---------------|-------|",
  ];
  for (const item of rows) {
    lines.push(
      `| \`${item.file}\` | ${formatExports(item.exports)} | ${item.restoredPath ? `\`${item.restoredPath}\`` : "-"} | ${item.proof || "-"} |`,
    );
  }
  return lines;
}

function formatExcluded(rows) {
  const lines = [
    "| Module | Exports | Restored? | Helper residue |",
    "|--------|---------|-----------|----------------|",
  ];
  for (const item of rows) {
    lines.push(
      `| \`${item.file}\` | ${formatExports(item.exports)} | ${item.restored ? "yes" : "no"} | ${item.helpers.total} |`,
    );
  }
  return lines;
}

function formatExports(exports) {
  return exports.length ? exports.map((name) => `\`${name}\``).join(", ") : "-";
}

function readSummary(reportPath) {
  if (!fs.existsSync(reportPath)) return {};
  const summary = {};
  const text = fs.readFileSync(reportPath, "utf8");
  for (const line of text.split("\n")) {
    const match = line.match(/^- (?<key>[^:]+): (?<value>.+)$/);
    if (match) summary[match.groups.key] = match.groups.value;
  }
  return summary;
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

function sortRows(a, b) {
  return a.scope.localeCompare(b.scope) || Number(a.id) - Number(b.id);
}
