#!/usr/bin/env node
// Generate a readable first-pass copy of the recovered webpack modules.

import { tokenizer } from "acorn";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const INPUT_DIR = process.argv[2] || "src-recovered";
const OUTPUT_DIR = process.argv[3] || "src-readable";

const inputPath = path.resolve(ROOT, INPUT_DIR);
const outputPath = path.resolve(ROOT, OUTPUT_DIR);
const indexPath = path.join(inputPath, "_index.json");
const exportsPath = path.join(inputPath, "_exports.json");

const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
const exportsIndex = JSON.parse(fs.readFileSync(exportsPath, "utf8"));
const moduleById = new Map(index.map((entry) => [String(entry.id), entry]));

const priorityModules = [
  { exportName: "Building", file: "26511_Building.js" },
  { exportName: "Population", file: "26630_Population.js" },
  { exportName: "InputSystem", file: "47572_InputSystem.js" },
  { exportName: "BotCalculationLogic", file: "59474_BotCalculationLogic.js" },
  { exportName: "GameModel", file: "94572_GameModel.js" },
];

const helperNames = [
  "__extends",
  "__decorate",
  "__awaiter",
  "__generator",
  "__read",
  "__spread",
  "__spreadArray",
  "__spreadArrays",
];

const totals = {
  files: 0,
  copiedMetadata: 0,
  bangTrue: 0,
  bangFalse: 0,
  voidZero: 0,
  requireAnnotations: 0,
  tokenizeErrors: [],
};

fs.rmSync(outputPath, { recursive: true, force: true });
fs.mkdirSync(outputPath, { recursive: true });

copyMetadataFile("_index.json");
copyMetadataFile("_exports.json");
copyMetadataFile("_SUMMARY.md");
copyMetadataFile("HANDOFF.md");

for (const entry of index) {
  const sourceFile = path.join(inputPath, entry.file);
  const source = fs.readFileSync(sourceFile, "utf8");
  const result = transformModule(source, entry.file);
  fs.writeFileSync(path.join(outputPath, entry.file), result.code);
  totals.files += 1;
  totals.bangTrue += result.stats.bangTrue;
  totals.bangFalse += result.stats.bangFalse;
  totals.voidZero += result.stats.voidZero;
  totals.requireAnnotations += result.stats.requireAnnotations;
}

writeReport();

console.log(`Generated ${totals.files} readable modules in ${OUTPUT_DIR}/`);
console.log(
  `Replaced !0=${totals.bangTrue}, !1=${totals.bangFalse}, void 0=${totals.voidZero}`,
);
console.log(`Added ${totals.requireAnnotations} require annotations`);
console.log(`Report: ${path.join(OUTPUT_DIR, "_TRANSFORM_REPORT.md")}`);

function copyMetadataFile(fileName) {
  const sourceFile = path.join(inputPath, fileName);
  if (!fs.existsSync(sourceFile)) return;
  fs.copyFileSync(sourceFile, path.join(outputPath, fileName));
  totals.copiedMetadata += 1;
}

function transformModule(source, fileName) {
  const stats = {
    bangTrue: 0,
    bangFalse: 0,
    voidZero: 0,
    requireAnnotations: 0,
  };
  let tokens;
  try {
    tokens = readTokens(source);
  } catch (error) {
    totals.tokenizeErrors.push({ file: fileName, message: error.message });
    return { code: source, stats };
  }

  const replacements = [];

  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    const next = tokens[i + 1];

    if (isBang(token) && next && isNumberLiteral(next, 0)) {
      replacements.push({ start: token.start, end: next.end, text: "true" });
      stats.bangTrue += 1;
      i += 1;
      continue;
    }

    if (isBang(token) && next && isNumberLiteral(next, 1)) {
      replacements.push({ start: token.start, end: next.end, text: "false" });
      stats.bangFalse += 1;
      i += 1;
      continue;
    }

    if (isVoidKeyword(token) && next && isNumberLiteral(next, 0)) {
      replacements.push({ start: token.start, end: next.end, text: "undefined" });
      stats.voidZero += 1;
      i += 1;
      continue;
    }

    const maybeAnnotated = getRequireAnnotation(source, tokens, i);
    if (maybeAnnotated) {
      replacements.push({
        start: maybeAnnotated.insertAt,
        end: maybeAnnotated.insertAt,
        text: ` /* ${maybeAnnotated.moduleLabel} */`,
      });
      stats.requireAnnotations += 1;
    }
  }

  return { code: applyReplacements(source, replacements), stats };
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

function getRequireAnnotation(source, tokens, indexInTokens) {
  const name = tokens[indexInTokens];
  const open = tokens[indexInTokens + 1];
  const id = tokens[indexInTokens + 2];
  const close = tokens[indexInTokens + 3];

  if (!name || !open || !id || !close) return null;
  if (!isName(name, "n") || !isPunct(open, "(") || !isPunct(close, ")")) return null;
  if (!Number.isInteger(id.value)) return null;

  const moduleEntry = moduleById.get(String(id.value));
  if (!moduleEntry) return null;

  const rest = source.slice(close.end).trimStart();
  if (rest.startsWith("/*")) return null;

  return {
    insertAt: close.end,
    moduleLabel: moduleEntry.file.replace(/\.js$/, ""),
  };
}

function applyReplacements(source, replacements) {
  if (replacements.length === 0) return source;

  const sorted = replacements
    .slice()
    .sort((a, b) => b.start - a.start || b.end - a.end);

  let output = source;
  let previousStart = source.length + 1;

  for (const replacement of sorted) {
    if (replacement.end > previousStart) continue;
    output =
      output.slice(0, replacement.start) + replacement.text + output.slice(replacement.end);
    previousStart = replacement.start;
  }

  return output;
}

function isBang(token) {
  return token.value === "!" || token.type.label === "!";
}

function isPunct(token, value) {
  return token.type.label === value;
}

function isName(token, value) {
  return token.type.label === "name" && token.value === value;
}

function isNumberLiteral(token, value) {
  return token.type.label === "num" && token.value === value;
}

function isVoidKeyword(token) {
  return token.type.label === "void" || token.value === "void";
}

function writeReport() {
  const fileReports = index.map((entry) => {
    const code = fs.readFileSync(path.join(outputPath, entry.file), "utf8");
    return buildFileReport(entry, code);
  });

  const residuals = sumResiduals(fileReports);
  const priorityReports = priorityModules.map((item) => {
    const entry = index.find((candidate) => candidate.file === item.file);
    const report = fileReports.find((candidate) => candidate.file === item.file);
    return { ...item, entry, report };
  });

  const helperHotspots = helperNames
    .map((helper) => ({
      helper,
      files: fileReports
        .filter((report) => report.helpers[helper] > 0)
        .sort((a, b) => b.helpers[helper] - a.helpers[helper])
        .slice(0, 10),
    }))
    .filter((item) => item.files.length > 0);

  const classInventory = fileReports
    .filter((report) => report.helpers.__extends > 0)
    .map((report) => {
      const exportNames = report.exports.length > 0 ? report.exports.join(", ") : "(barrel)";
      const parents =
        report.extendsParents.length > 0 ? report.extendsParents.join("; ") : "unresolved parent";
      return `| ${report.file} | ${exportNames} | ${parents} | ${report.helpers.__extends} |`;
    });

  const lines = [
    "# First-Pass Readability Transform Report",
    "",
    "## Summary",
    "",
    `- Source: \`${INPUT_DIR}/\``,
    `- Output: \`${OUTPUT_DIR}/\``,
    `- Modules processed: ${totals.files}`,
    `- Metadata files copied: ${totals.copiedMetadata}`,
    `- Replacements: \`!0 -> true\` ${totals.bangTrue}, \`!1 -> false\` ${totals.bangFalse}, \`void 0 -> undefined\` ${totals.voidZero}`,
    `- Require annotations added: ${totals.requireAnnotations}`,
    "",
    "## Residual Checks",
    "",
    `- Remaining \`!0\`: ${residuals.bangTrue}`,
    `- Remaining \`!1\`: ${residuals.bangFalse}`,
    `- Remaining \`void 0\`: ${residuals.voidZero}`,
    `- Unannotated known numeric require calls \`n(moduleId)\`: ${residuals.unannotatedRequireCalls}`,
    "",
    "## Helper Inventory",
    "",
    "| Helper | Files | Total occurrences |",
    "|--------|-------|-------------------|",
    ...helperNames.map((helper) => {
      const files = fileReports.filter((report) => report.helpers[helper] > 0);
      const total = files.reduce((sum, report) => sum + report.helpers[helper], 0);
      return `| \`${helper}\` | ${files.length} | ${total} |`;
    }),
    "",
    "## Class Inventory",
    "",
    "| File | Exports | Parent expression(s) | `__extends` count |",
    "|------|---------|----------------------|-------------------|",
    ...classInventory,
    "",
    "## Helper Hotspots",
    "",
    ...helperHotspots.flatMap((item) => [
      `### ${item.helper}`,
      "",
      "| File | Occurrences |",
      "|------|-------------|",
      ...item.files.map((report) => `| ${report.file} | ${report.helpers[item.helper]} |`),
      "",
    ]),
    "## Priority Manual Modules",
    "",
    "| Module | File | Remaining helpers | Notes |",
    "|--------|------|-------------------|-------|",
    ...priorityReports.map(({ exportName, file, report }) => {
      if (!report) return `| ${exportName} | ${file} | missing | Expected priority module not found |`;
      const helpers = helperNames
        .filter((helper) => report.helpers[helper] > 0)
        .map((helper) => `${helper}:${report.helpers[helper]}`)
        .join(", ");
      const note = report.extendsParents.length
        ? `extends ${report.extendsParents.join("; ")}`
        : "no class parent detected";
      return `| ${exportName} | ${file} | ${helpers || "none"} | ${note} |`;
    }),
  ];

  if (totals.tokenizeErrors.length > 0) {
    lines.push("", "## Tokenize Errors", "");
    for (const error of totals.tokenizeErrors) {
      lines.push(`- ${error.file}: ${error.message}`);
    }
  }

  fs.writeFileSync(path.join(outputPath, "_TRANSFORM_REPORT.md"), `${lines.join("\n")}\n`);
}

function buildFileReport(entry, code) {
  const helpers = Object.fromEntries(
    helperNames.map((helper) => [helper, countRegex(code, new RegExp(escapeRegExp(helper), "g"))]),
  );

  return {
    file: entry.file,
    exports: entry.exports,
    helpers,
    bangTrue: countRegex(code, /!0/g),
    bangFalse: countRegex(code, /!1/g),
    voidZero: countRegex(code, /void 0/g),
    requireCalls: countRegex(code, /\bn\(\d+\)/g),
    unannotatedRequireCalls: countUnannotatedRequireCalls(code),
    extendsParents: inferExtendsParents(code),
  };
}

function inferExtendsParents(code) {
  const parents = [];
  const extendsPattern = /__extends\(([^,]+),\s*([A-Za-z_$][\w$]*)\)/g;
  let match;
  while ((match = extendsPattern.exec(code)) !== null) {
    const parentParameter = match[2];
    const parent = inferIifeParent(code, match.index, parentParameter);
    if (parent && !parents.includes(parent)) parents.push(parent);
  }
  return parents;
}

function inferIifeParent(code, helperIndex, parentParameter) {
  const functionStart = code.lastIndexOf("(function", helperIndex);
  if (functionStart === -1) return null;

  const parameterMatch = code.slice(functionStart, functionStart + 120).match(/\(function\s*\(([^)]*)\)/);
  if (!parameterMatch) return null;

  const parameters = parameterMatch[1].split(",").map((item) => item.trim());
  const parameterIndex = parameters.indexOf(parentParameter);
  if (parameterIndex === -1) return null;

  const args = extractIifeArguments(code, functionStart);
  if (!args || parameterIndex >= args.length) return null;

  return args[parameterIndex].trim();
}

function countUnannotatedRequireCalls(code) {
  let tokens;
  try {
    tokens = readTokens(code);
  } catch {
    return 0;
  }

  let count = 0;
  for (let i = 0; i < tokens.length; i += 1) {
    if (getRequireAnnotation(code, tokens, i)) count += 1;
  }
  return count;
}

function extractIifeArguments(code, functionStart) {
  const openBrace = code.indexOf("{", functionStart);
  if (openBrace === -1) return null;

  const closeBrace = findMatchingBrace(code, openBrace);
  if (closeBrace === -1) return null;

  let cursor = closeBrace + 1;
  while (/\s/.test(code[cursor])) cursor += 1;
  if (code[cursor] !== ")" || code[cursor + 1] !== "(") return null;

  return splitTopLevelArguments(code, cursor + 2);
}

function findMatchingBrace(code, openBrace) {
  let depth = 0;
  for (let i = openBrace; i < code.length; i += 1) {
    i = skipTriviaLiteralOrComment(code, i);
    const char = code[i];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function splitTopLevelArguments(code, start) {
  const args = [];
  let depth = 0;
  let argStart = start;

  for (let i = start; i < code.length; i += 1) {
    i = skipTriviaLiteralOrComment(code, i);
    const char = code[i];

    if (char === "(" || char === "[" || char === "{") depth += 1;
    if (char === ")" || char === "]" || char === "}") {
      if (char === ")" && depth === 0) {
        args.push(code.slice(argStart, i).trim());
        return args;
      }
      depth -= 1;
    }
    if (char === "," && depth === 0) {
      args.push(code.slice(argStart, i).trim());
      argStart = i + 1;
    }
  }

  return null;
}

function skipTriviaLiteralOrComment(code, index) {
  const char = code[index];
  const next = code[index + 1];

  if ((char === "'" || char === '"' || char === "`") && code[index - 1] !== "\\") {
    return skipStringLike(code, index, char);
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

function skipStringLike(code, index, quote) {
  for (let i = index + 1; i < code.length; i += 1) {
    if (code[i] === "\\") {
      i += 1;
      continue;
    }
    if (code[i] === quote) return i;
  }
  return code.length - 1;
}

function sumResiduals(fileReports) {
  return fileReports.reduce(
    (sum, report) => ({
      bangTrue: sum.bangTrue + report.bangTrue,
      bangFalse: sum.bangFalse + report.bangFalse,
      voidZero: sum.voidZero + report.voidZero,
      requireCalls: sum.requireCalls + report.requireCalls,
      unannotatedRequireCalls: sum.unannotatedRequireCalls + report.unannotatedRequireCalls,
    }),
    { bangTrue: 0, bangFalse: 0, voidZero: 0, requireCalls: 0, unannotatedRequireCalls: 0 },
  );
}

function countRegex(code, regex) {
  return (code.match(regex) || []).length;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
