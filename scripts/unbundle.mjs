#!/usr/bin/env node
// unbundle.mjs — Split a webpack 5 bundle into individual module files
// Usage: node scripts/unbundle.mjs [input] [outputDir]

import { parse } from "acorn";
import fs from "node:fs";
import path from "node:path";

const INPUT = process.argv[2] || "main.js";
const OUT = process.argv[3] || "src-recovered";

// ─── 1. Read source ────────────────────────────────────────────────
const src = fs.readFileSync(INPUT, "utf8");
console.log(`[1/5] Loaded ${(src.length / 1e6).toFixed(2)} MB from ${INPUT}`);

// ─── 2. Parse AST ─────────────────────────────────────────────────
console.log("[2/5] Parsing AST …");
const ast = parse(src, {
  ecmaVersion: 2022,
  sourceType: "script",
  ranges: true,
});
console.log("      AST parsed OK");

// ─── 3. Find the webpack modules object ────────────────────────────
// Structure: (()=>{ var e = { 952:(e,t,n)=>{…}, … }; … })()
// We look for the first large ObjectExpression whose keys are numeric.

let modulesNode = null;

function walk(node) {
  if (!node || typeof node !== "object" || modulesNode) return;
  if (node.type === "ObjectExpression" && node.properties.length > 20) {
    const first = node.properties[0];
    if (
      first &&
      first.key &&
      first.key.type === "Literal" &&
      typeof first.key.value === "number" &&
      (first.value.type === "ArrowFunctionExpression" ||
        first.value.type === "FunctionExpression")
    ) {
      modulesNode = node;
      return;
    }
  }
  for (const key of Object.keys(node)) {
    if (key === "type" || key === "range") continue;
    const val = node[key];
    if (Array.isArray(val)) {
      for (const item of val) {
        if (item && typeof item === "object" && item.type) walk(item);
      }
    } else if (val && typeof val === "object" && val.type) {
      walk(val);
    }
  }
}

walk(ast);

if (!modulesNode) {
  console.error("ERROR: Could not locate webpack modules object");
  process.exit(1);
}

console.log(`[3/5] Found ${modulesNode.properties.length} webpack modules`);

// ─── 4. Extract each module ────────────────────────────────────────
fs.mkdirSync(OUT, { recursive: true });

const index = [];
const ROLE = ["module", "exports", "__require"];

for (const prop of modulesNode.properties) {
  const id = String(prop.key.value ?? prop.key.name);
  const fn = prop.value;

  // Source for the function body (including the braces)
  let bodyCode;
  if (fn.body.type === "BlockStatement") {
    bodyCode = src.slice(fn.body.range[0], fn.body.range[1]);
  } else {
    // expression body arrow: (e,t)=>expr
    bodyCode = "{ return " + src.slice(fn.body.range[0], fn.body.range[1]) + "; }";
  }

  // Parameter names
  const params = fn.params.map((p) => src.slice(p.range[0], p.range[1]));

  // Detect exported names via pattern: exports.ClassName =
  const expParam = params[1] || "t";
  const esc = expParam.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(?:${esc})\\.([A-Z][A-Za-z0-9_]+)\\s*=`, "g");
  const exports = [];
  let m;
  while ((m = re.exec(bodyCode)) !== null) {
    if (!exports.includes(m[1])) exports.push(m[1]);
  }

  // Also detect: Object.defineProperty(exports,"__esModule" …) to mark ES modules
  const isEsm = bodyCode.includes("__esModule");

  // File name
  const primary = exports[0] || `_mod`;
  const fileName = `${id}_${primary}.js`;

  // Header comment
  const header = [
    `/**`,
    ` * Webpack Module #${id}`,
    exports.length > 0
      ? ` * @exports ${exports.join(", ")}`
      : ` * (barrel / re‑export module)`,
    isEsm ? ` * @esmodule` : "",
    ` */`,
    ``,
    `// (${params.map((p, i) => `${p}/*${ROLE[i] || "?"}*/`).join(", ")}) =>`,
  ]
    .filter(Boolean)
    .join("\n");

  fs.writeFileSync(path.join(OUT, fileName), header + "\n" + bodyCode + "\n");
  index.push({ id: Number(id), file: fileName, exports });
}

// ─── 5. Extract webpack bootstrap / runtime ────────────────────────
// Everything between the end of the modules object and the end of the IIFE
const bootstrapStart = modulesNode.range[1];
const iifeBody = ast.body[0].expression.callee.body;
const bootstrapEnd = iifeBody.range[1] - 1; // exclude closing }
if (bootstrapEnd > bootstrapStart) {
  const bootstrap = src.slice(bootstrapStart, bootstrapEnd);
  fs.writeFileSync(
    path.join(OUT, "0000_webpack_runtime.js"),
    `/**\n * Webpack Runtime / Bootstrap\n */\n${bootstrap}\n`
  );
}

// ─── 6. Write index & summary ──────────────────────────────────────
index.sort((a, b) => a.id - b.id);

// _index.json — full module list
fs.writeFileSync(path.join(OUT, "_index.json"), JSON.stringify(index, null, 2));

// _exports.json — className → moduleId lookup
const byExport = {};
for (const entry of index) {
  for (const exp of entry.exports) {
    byExport[exp] = { moduleId: entry.id, file: entry.file };
  }
}
fs.writeFileSync(
  path.join(OUT, "_exports.json"),
  JSON.stringify(byExport, null, 2)
);

// _SUMMARY.md — human‑readable overview
const withExports = index.filter((e) => e.exports.length > 0);
const anon = index.filter((e) => e.exports.length === 0);

const categories = {
  "Core Game": /^(Game|Core|App|Boot)/,
  "Level / Stage": /^(Level|Stage|Load|Init|Debug)/,
  "Fighter / Combat": /^(Fighter|Battle|Burst|Arrow|Capital|Captur)/,
  "Bot / AI": /^(Bot|Command)/,
  "Map / State": /^(State|Map|Generate|Path|Continent|Group)/,
  "UI / Popup": /^(Button|Popup|Overlay|Alert|Confirm|Cancel|Continue|Title|Share|Rating|Win|Claim)/,
  "Economy / Boost": /^(Coin|Booster|Building|Gift|Reward|Shop)/,
  "Audio": /^(Audio|Music|Sound|Play)/,
  "Ads / Monetization": /^(Ad|Reward)/,
  "Social / Auth": /^(Auth|Cookie|User|Leaderboard|Backend)/,
  "Analytics": /^(Analytics|Tracker|Sentry|Firebase|GTAG)/,
  "Platform (Yandex)": /Yandex/,
  "Framework (MVC)": /^(Mediator|View$|Screen|Container$|Module$|Action$|Binding|Inject)/,
};

function categorize(name) {
  for (const [cat, re] of Object.entries(categories)) {
    if (re.test(name)) return cat;
  }
  return "Other";
}

const grouped = {};
for (const entry of withExports) {
  const cat = categorize(entry.exports[0]);
  (grouped[cat] ??= []).push(entry);
}

const mdLines = [
  `# Webpack Bundle — ${index.length} Modules`,
  ``,
  `| Metric | Count |`,
  `|--------|-------|`,
  `| Total modules | ${index.length} |`,
  `| With named exports | ${withExports.length} |`,
  `| Barrel / re‑export | ${anon.length} |`,
  `| Unique class names | ${Object.keys(byExport).length} |`,
  ``,
];

for (const [cat, entries] of Object.entries(grouped).sort()) {
  mdLines.push(`## ${cat}`);
  mdLines.push(``);
  for (const e of entries.sort((a, b) => a.exports[0].localeCompare(b.exports[0]))) {
    mdLines.push(`- **${e.exports.join(", ")}** → \`${e.file}\``);
  }
  mdLines.push(``);
}

if (anon.length > 0) {
  mdLines.push(`## Barrel / Re‑export Modules`);
  mdLines.push(``);
  for (const e of anon) {
    mdLines.push(`- \`${e.file}\``);
  }
  mdLines.push(``);
}

fs.writeFileSync(path.join(OUT, "_SUMMARY.md"), mdLines.join("\n"));

// Done
console.log(`[4/5] Wrote ${index.length} module files to ${OUT}/`);
console.log(`      ${withExports.length} with named exports`);
console.log(`      ${anon.length} barrel/re‑export modules`);
console.log(`      ${Object.keys(byExport).length} unique class names`);
console.log(`[5/5] See ${OUT}/_SUMMARY.md for categorized listing`);
