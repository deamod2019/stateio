#!/usr/bin/env node
// Generate restored local SVG symbol modules for the settings UI icons.

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, "..")
const readableDir = path.join(rootDir, "src-readable")
const outputPath = path.join(rootDir, "src-restored", "ui", "SettingsSVGSymbols.js")

const ICONS = [
  ["settings", "24368__mod.js"],
  ["sounds", "39066__mod.js"],
  ["music", "8928__mod.js"],
  ["vibrate", "83354__mod.js"],
]

const symbols = ICONS.map(([name, filename]) => [name, extractSymbol(filename)])

fs.writeFileSync(outputPath, renderModule(symbols))
console.log(`Generated ${path.relative(rootDir, outputPath)} with ${symbols.length} symbols`)

function extractSymbol(filename) {
  const source = fs.readFileSync(path.join(readableDir, filename), "utf8")
  const match = source.match(
    /new \(r\(\)\)\(\{\s*id:\s*"([^"]+)",\s*use:\s*"([^"]+)",\s*viewBox:\s*"([^"]+)",\s*content:\s*\n\s*('(?:\\.|[^'])*')/s,
  )
  if (!match) throw new Error(`Could not extract SVG symbol from ${filename}`)

  return {
    id: match[1],
    use: match[2],
    viewBox: match[3],
    content: parseStringLiteral(match[4]),
  }
}

function parseStringLiteral(literal) {
  return Function(`"use strict"; return (${literal});`)()
}

function renderModule(symbols) {
  const entries = symbols
    .map(([name, symbol]) => `const ${name} = createSvgModule(${JSON.stringify(symbol, null, 2)})`)
    .join("\n\n")

  const exports = symbols.map(([name]) => `  ${name},`).join("\n")

  return `/**\n * Restored settings SVG symbols generated from src-readable.\n */\n"use strict"\n\n${entries}\n\nmodule.exports = {\n${exports}\n}\n\nfunction createSvgModule(symbolData) {\n  const symbol = {\n    ...symbolData,\n    stringify() {\n      return this.content\n    },\n    toString() {\n      return this.stringify()\n    },\n    destroy() {\n      delete this.id\n      delete this.viewBox\n      delete this.content\n    },\n  }\n\n  registerSymbol(symbol)\n  return { default: symbol }\n}\n\nfunction registerSymbol(symbol) {\n  if (typeof document === "undefined") return\n\n  try {\n    const spriteStore = require("./svgSpriteRuntime")\n    const store = spriteStore && (spriteStore.default || spriteStore)\n    if (store && typeof store.add === "function") store.add(symbol)\n  } catch (_error) {}\n}\n`
}
