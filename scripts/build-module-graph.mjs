#!/usr/bin/env node
// Build dependency reports for recovered webpack modules.

import { tokenizer } from "acorn";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const INPUT_DIR = process.argv[2] || "src-readable";

const inputPath = path.resolve(ROOT, INPUT_DIR);
const index = JSON.parse(fs.readFileSync(path.join(inputPath, "_index.json"), "utf8"));
const moduleById = new Map(index.map((entry) => [String(entry.id), entry]));

const thirdPartyIds = new Set(["6538", "86700", "25317", "41766", "70655", "90505"]);
const priorityIds = ["26511", "26630", "47572", "59474", "94572"];

const categories = [
  ["Bot / AI", /^(Bot|Command|Decision)/],
  ["Building / Population", /^(Building|Population|Spawner|Captur)/],
  ["Input / Interaction", /^(Input|Arrow|Arrows)/],
  ["Game Flow", /^(Game|Level|Stage|Load|Start|End|Boot)/],
  ["Map / Path", /^(Map|State|Continent|Path|Generate|Group)/],
  ["Fighter / Combat", /^(Fighter|Battle|Burst|Capital)/],
  ["UI / Popup", /^(Button|Popup|Overlay|Screen|View|Alert|Title|Claim|Shop|Gift|Leader)/],
  ["ECS / Framework", /^(Engine|Entity|System|Query|Component|Mediator|Action|Binding|Container|Signal)/],
  ["Platform / Social", /^(Yandex|Social|Auth|User|Backend|Cookie|Payment|Leaderboard|Tournament)/],
  ["Ads / Analytics", /^(Ad|Analytics|Tracker|Sentry|Firebase|GTAG)/],
];

const reports = index.map((entry) => {
  const filePath = path.join(inputPath, entry.file);
  const source = fs.readFileSync(filePath, "utf8");
  const dependencyIds = collectDependencies(source);
  return {
    id: entry.id,
    file: entry.file,
    exports: entry.exports,
    category: classify(entry),
    dependencyIds,
    dependencies: dependencyIds.map((id) => {
      const dep = moduleById.get(String(id));
      return {
        id,
        file: dep?.file || null,
        exports: dep?.exports || [],
        category: dep ? classify(dep) : "Unknown",
      };
    }),
  };
});

const reverseDependencyIds = new Map(index.map((entry) => [String(entry.id), []]));
for (const report of reports) {
  for (const id of report.dependencyIds) {
    reverseDependencyIds.get(String(id))?.push(report.id);
  }
}

for (const report of reports) {
  report.dependentIds = reverseDependencyIds.get(String(report.id)) || [];
  report.dependents = report.dependentIds.map((id) => {
    const dep = moduleById.get(String(id));
    return { id, file: dep.file, exports: dep.exports, category: classify(dep) };
  });
}

const graph = {
  generatedAt: new Date().toISOString(),
  source: INPUT_DIR,
  moduleCount: reports.length,
  edgeCount: reports.reduce((sum, report) => sum + report.dependencyIds.length, 0),
  modules: reports,
};

fs.writeFileSync(path.join(inputPath, "_deps.json"), JSON.stringify(graph, null, 2));
fs.writeFileSync(path.join(inputPath, "_MODULE_GRAPH.md"), renderMarkdown(reports));

console.log(`Wrote ${INPUT_DIR}/_deps.json`);
console.log(`Wrote ${INPUT_DIR}/_MODULE_GRAPH.md`);
console.log(`Modules: ${graph.moduleCount}, edges: ${graph.edgeCount}`);

function collectDependencies(source) {
  let tokens;
  try {
    tokens = readTokens(source);
  } catch {
    return [];
  }

  const ids = new Set();
  for (let i = 0; i < tokens.length - 3; i += 1) {
    if (
      isName(tokens[i], "n") &&
      isPunct(tokens[i + 1], "(") &&
      tokens[i + 2].type.label === "num" &&
      Number.isInteger(tokens[i + 2].value) &&
      isPunct(tokens[i + 3], ")")
    ) {
      const id = String(tokens[i + 2].value);
      if (moduleById.has(id)) ids.add(Number(id));
    }
  }

  return [...ids].sort((a, b) => a - b);
}

function readTokens(source) {
  const lexer = tokenizer(source, {
    ecmaVersion: 2022,
    sourceType: "script",
    ranges: true,
  });
  const tokens = [];
  while (true) {
    const token = lexer.getToken();
    if (token.type.label === "eof") break;
    tokens.push(token);
  }
  return tokens;
}

function classify(entry) {
  if (thirdPartyIds.has(String(entry.id))) return "Third Party / Runtime";
  const primary = entry.exports[0] || path.basename(entry.file).replace(/^\d+_/, "");
  for (const [category, pattern] of categories) {
    if (pattern.test(primary)) return category;
  }
  if (entry.exports.length === 0) return "Barrel / Re-export";
  return "Other";
}

function renderMarkdown(reports) {
  const categoryRows = Object.entries(
    reports.reduce((groups, report) => {
      groups[report.category] ??= { modules: 0, outgoing: 0, incoming: 0 };
      groups[report.category].modules += 1;
      groups[report.category].outgoing += report.dependencyIds.length;
      groups[report.category].incoming += report.dependentIds.length;
      return groups;
    }, {}),
  ).sort((a, b) => a[0].localeCompare(b[0]));

  const mostDeps = reports
    .slice()
    .sort((a, b) => b.dependencyIds.length - a.dependencyIds.length)
    .slice(0, 20);

  const mostDependents = reports
    .slice()
    .sort((a, b) => b.dependentIds.length - a.dependentIds.length)
    .slice(0, 20);

  const priority = priorityIds
    .map((id) => reports.find((report) => String(report.id) === id))
    .filter(Boolean);

  return [
    "# Module Dependency Graph",
    "",
    "## Summary",
    "",
    `- Source: \`${INPUT_DIR}/\``,
    `- Modules: ${reports.length}`,
    `- Dependency edges: ${reports.reduce((sum, report) => sum + report.dependencyIds.length, 0)}`,
    `- Modules with no outgoing dependencies: ${reports.filter((report) => report.dependencyIds.length === 0).length}`,
    `- Modules with no incoming dependencies: ${reports.filter((report) => report.dependentIds.length === 0).length}`,
    "",
    "## Categories",
    "",
    "| Category | Modules | Outgoing edges | Incoming edges |",
    "|----------|---------|----------------|----------------|",
    ...categoryRows.map(
      ([category, stats]) =>
        `| ${category} | ${stats.modules} | ${stats.outgoing} | ${stats.incoming} |`,
    ),
    "",
    "## Core Restoration Neighborhood",
    "",
    "| Module | Category | Direct deps | Direct dependents | Key deps | Key dependents |",
    "|--------|----------|-------------|-------------------|----------|----------------|",
    ...priority.map((report) => {
      const deps = summarizeRefs(report.dependencies);
      const dependents = summarizeRefs(report.dependents);
      return `| ${label(report)} | ${report.category} | ${report.dependencyIds.length} | ${report.dependentIds.length} | ${deps} | ${dependents} |`;
    }),
    "",
    "## Most Dependencies",
    "",
    "| Module | Category | Direct deps |",
    "|--------|----------|-------------|",
    ...mostDeps.map(
      (report) => `| ${label(report)} | ${report.category} | ${report.dependencyIds.length} |`,
    ),
    "",
    "## Most Dependents",
    "",
    "| Module | Category | Direct dependents |",
    "|--------|----------|-------------------|",
    ...mostDependents.map(
      (report) => `| ${label(report)} | ${report.category} | ${report.dependentIds.length} |`,
    ),
    "",
  ].join("\n");
}

function summarizeRefs(refs) {
  if (refs.length === 0) return "-";
  return refs.slice(0, 8).map(label).join("<br>");
}

function label(entry) {
  if (!entry.exports?.length) return path.basename(entry.file, ".js");
  return `${entry.id}_${entry.exports.join(", ")}`;
}

function isName(token, value) {
  return token.type.label === "name" && token.value === value;
}

function isPunct(token, value) {
  return token.type.label === value;
}
