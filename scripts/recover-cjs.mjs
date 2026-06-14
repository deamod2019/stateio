#!/usr/bin/env node
// Wrap readable webpack module bodies as CommonJS modules for load-time checks.

import fs from "node:fs";
import path from "node:path";
import { parse } from "acorn";

const ROOT = process.cwd();
const INPUT_DIR = process.argv[2] || "src-readable";
const OUTPUT_DIR = process.argv[3] || "src-cjs";

const inputPath = path.resolve(ROOT, INPUT_DIR);
const outputPath = path.resolve(ROOT, OUTPUT_DIR);
const index = JSON.parse(fs.readFileSync(path.join(inputPath, "_index.json"), "utf8"));
const moduleMap = Object.fromEntries(
  index.map((entry) => [String(entry.id), `./${entry.file}`]),
);

const failures = [];

fs.rmSync(outputPath, { recursive: true, force: true });
fs.mkdirSync(outputPath, { recursive: true });

copyIfExists("_index.json");
copyIfExists("_exports.json");
copyIfExists("_SUMMARY.md");
copyIfExists("_TRANSFORM_REPORT.md");
copyIfExists("_deps.json");
copyIfExists("_MODULE_GRAPH.md");
copyIfExists("HANDOFF.md");

for (const entry of index) {
  const source = fs.readFileSync(path.join(inputPath, entry.file), "utf8");
  const body = extractModuleBody(source);
  if (!body) {
    failures.push(`${entry.file}: could not extract top-level webpack module body`);
    continue;
  }

  fs.writeFileSync(path.join(outputPath, entry.file), renderCjsModule(entry, body));
}

fs.writeFileSync(path.join(outputPath, "_cjs-module-map.json"), JSON.stringify(moduleMap, null, 2));
fs.writeFileSync(path.join(outputPath, "_CJS_REPORT.md"), renderReport());

console.log(`Generated ${index.length - failures.length} CommonJS modules in ${OUTPUT_DIR}/`);
console.log(`Failures: ${failures.length}`);
console.log(`Report: ${path.join(OUTPUT_DIR, "_CJS_REPORT.md")}`);

function copyIfExists(fileName) {
  const sourceFile = path.join(inputPath, fileName);
  if (fs.existsSync(sourceFile)) fs.copyFileSync(sourceFile, path.join(outputPath, fileName));
}

function extractModuleBody(source) {
  try {
    const ast = parse(source, {
      ecmaVersion: 2022,
      sourceType: "script",
      ranges: true,
    });
    const block = ast.body.find((node) => node.type === "BlockStatement");
    if (block?.range) return source.slice(block.range[0], block.range[1]);
  } catch {
    // Fall back to a lightweight matcher below; parse errors are reported only if both paths fail.
  }

  const marker = "// (";
  const markerIndex = source.indexOf(marker);
  const searchStart = markerIndex === -1 ? 0 : source.indexOf("\n", markerIndex);
  const openBrace = source.indexOf("{", searchStart);
  if (openBrace === -1) return null;
  const closeBrace = findMatchingBrace(source, openBrace);
  if (closeBrace === -1) return null;
  return source.slice(openBrace, closeBrace + 1);
}

function renderCjsModule(entry, body) {
  return [
    `/**`,
    ` * CommonJS restoration prototype for Webpack Module #${entry.id}`,
    entry.exports.length > 0
      ? ` * @exports ${entry.exports.join(", ")}`
      : ` * (barrel / re-export module)`,
    ` * Generated from ${INPUT_DIR}/${entry.file}`,
    ` */`,
    `"use strict"`,
    ``,
    `const __moduleMap = ${JSON.stringify(moduleMap, null, 2)}`,
    ``,
    `function __webpack_require__(id) {`,
    `  const target = __moduleMap[String(id)]`,
    `  if (!target) throw new Error(\`Unknown webpack module id: \${id}\`)`,
    `  return require(target)`,
    `}`,
    ``,
    `__webpack_require__.d = function defineGetters(exportsObject, definition) {`,
    `  for (const key of Object.keys(definition)) {`,
    `    if (!Object.prototype.hasOwnProperty.call(exportsObject, key)) {`,
    `      Object.defineProperty(exportsObject, key, { enumerable: true, get: definition[key] })`,
    `    }`,
    `  }`,
    `}`,
    ``,
    `__webpack_require__.r = function markAsEsModule(exportsObject) {`,
    `  if (typeof Symbol !== "undefined" && Symbol.toStringTag) {`,
    `    Object.defineProperty(exportsObject, Symbol.toStringTag, { value: "Module" })`,
    `  }`,
    `  Object.defineProperty(exportsObject, "__esModule", { value: true })`,
    `}`,
    ``,
    `__webpack_require__.o = function hasOwn(object, property) {`,
    `  return Object.prototype.hasOwnProperty.call(object, property)`,
    `}`,
    ``,
    `__webpack_require__.n = function getDefaultExport(moduleValue) {`,
    `  const getter = moduleValue && moduleValue.__esModule`,
    `    ? function getDefault() { return moduleValue.default }`,
    `    : function getModuleExports() { return moduleValue }`,
    `  __webpack_require__.d(getter, { a: getter })`,
    `  return getter`,
    `}`,
    ``,
    `__webpack_require__.g = globalThis`,
    ``,
    `__webpack_require__.nmd = function nodeModuleDecorator(moduleObject) {`,
    `  moduleObject.paths = []`,
    `  if (!moduleObject.children) moduleObject.children = []`,
    `  return moduleObject`,
    `}`,
    ``,
    `__webpack_require__.hmd = function harmonyModuleDecorator(moduleObject) {`,
    `  if (!moduleObject.children) moduleObject.children = []`,
    `  return moduleObject`,
    `}`,
    ``,
    `function __webpack_module__(e, t, n)`,
    body,
    ``,
    `__webpack_module__(module, exports, __webpack_require__)`,
    ``,
  ].join("\n");
}

function renderReport() {
  return [
    "# CommonJS Restoration Prototype Report",
    "",
    "## Summary",
    "",
    `- Source: \`${INPUT_DIR}/\``,
    `- Output: \`${OUTPUT_DIR}/\``,
    `- Modules generated: ${index.length - failures.length}`,
    `- Extraction failures: ${failures.length}`,
    "",
    "## Purpose",
    "",
    "This is a load-checking restoration layer, not the final hand-written source.",
    "Each file keeps the readable webpack body and runs it through a local CommonJS-compatible webpack require shim.",
    "Use this directory to prove dependency and export behavior before class, decorator, and async rewrites.",
    "",
    "## Failures",
    "",
    failures.length ? failures.map((failure) => `- ${failure}`).join("\n") : "- None",
    "",
  ].join("\n");
}

function findMatchingBrace(code, openBrace) {
  let depth = 0;
  for (let i = openBrace; i < code.length; i += 1) {
    i = skipLiteralOrComment(code, i);
    if (code[i] === "{") depth += 1;
    if (code[i] === "}") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function skipLiteralOrComment(code, index) {
  const char = code[index];
  const next = code[index + 1];
  if ((char === "'" || char === '"' || char === "`") && code[index - 1] !== "\\") {
    return skipString(code, index, char);
  }
  if (char === "/" && next === "/") {
    const lineEnd = code.indexOf("\n", index + 2);
    return lineEnd === -1 ? code.length - 1 : lineEnd;
  }
  if (char === "/" && next === "*") {
    const commentEnd = code.indexOf("*/", index + 2);
    return commentEnd === -1 ? code.length - 1 : commentEnd + 1;
  }
  return index;
}

function skipString(code, index, quote) {
  for (let i = index + 1; i < code.length; i += 1) {
    if (code[i] === "\\") {
      i += 1;
      continue;
    }
    if (code[i] === quote) return i;
  }
  return code.length - 1;
}
