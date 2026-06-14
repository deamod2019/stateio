#!/usr/bin/env node
// Generate restored UI control icon SVG constants from src-readable.

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const ROOT = process.cwd();
const READABLE_DIR = path.join(ROOT, "src-readable");
const OUTPUT_PATH = path.join(ROOT, "src-restored/ui/UIControlIcons.js");

const icons = [
  ["adsIcon", "14565"],
  ["friendsIcon", "72630"],
  ["globeIcon", "49473"],
  ["playIcon", "66823"],
  ["replayIcon", "10660"],
  ["leaderboardIcon", "83372"],
  ["xIcon", "29671"],
  ["shareIcon", "24998"],
  ["trophyIcon", "68760"],
  ["placeholderAvatarIcon", "27106"],
  ["bombIcon", "65203"],
  ["heartIcon", "5130"],
  ["vsIcon", "97573"],
  ["gearIcon", "83864"],
];

const iconValues = icons.map(([name, id]) => {
  const file = fs.readdirSync(READABLE_DIR).find((entry) => entry.startsWith(`${id}_`));
  if (!file) throw new Error(`Missing readable module for ${id}`);
  const source = fs.readFileSync(path.join(READABLE_DIR, file), "utf8");
  return [name, id, readExportedSvg(source)];
});

const lines = [
  "/**",
  " * Restored UI control SVG icons generated from src-readable.",
  " */",
  '"use strict"',
  "",
];

for (const [name, id, svg] of iconValues) {
  lines.push(`const ${name} = createIconModule(${JSON.stringify(svg)}) // ${id}`);
}

lines.push(
  "",
  "function createIconModule(svg) {",
  "  const moduleObject = {}",
  "  for (let index = 0; index < svg.length; index += 1) {",
  "    const key = String(index)",
  "    Object.defineProperty(moduleObject, key, {",
  "      enumerable: true,",
  "      get() {",
  "        return svg[key]",
  "      },",
  "    })",
  "  }",
  "  Object.defineProperty(moduleObject, \"default\", { enumerable: true, value: svg })",
  "  return moduleObject",
  "}",
  "",
  "module.exports = {",
);

for (const [name] of iconValues) lines.push(`  ${name},`);

lines.push("}", "");

fs.writeFileSync(OUTPUT_PATH, lines.join("\n"));
console.log(`Generated ${path.relative(ROOT, OUTPUT_PATH)} (${iconValues.length} icons)`);

function readExportedSvg(source) {
  const match = source.match(/e\.exports\s*=\s*([\s\S]+?)\n\}/);
  if (!match) throw new Error("Unable to find e.exports SVG literal");
  return vm.runInNewContext(match[1]);
}
