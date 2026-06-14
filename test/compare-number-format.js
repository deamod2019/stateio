"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/38319__mod.js")
const restored = require("../src-restored/core/NumberFormat.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "NumberFormat export order differs")

const digitScenarios = [
  [],
  [undefined],
  [0],
  [1],
  [1234],
  [12345],
  [12345678],
  [123456789],
  [12345, 2, 7],
  [1234567, 2, 7],
  [12, 1, 3],
  ["123456", 2, 7],
]

for (const args of digitScenarios) {
  assert.equal(
    restored.getFontClassByDigits(...args),
    original.getFontClassByDigits(...args),
    `getFontClassByDigits differs for ${JSON.stringify(args)}`,
  )
}

const fixedScenarios = [
  [12],
  [12.3456],
  ["7.891"],
  [12.3456, 1],
  [12.3456, 2, "."],
  ["12,345", 2, ","],
  [-12.3456, 3],
  ["100"],
]

for (const args of fixedScenarios) {
  assert.equal(
    restored.toFixedString(...args),
    original.toFixedString(...args),
    `toFixedString differs for ${JSON.stringify(args)}`,
  )
}

console.log(
  JSON.stringify(
    {
      module: "NumberFormat",
      digitScenarios: digitScenarios.length,
      fixedScenarios: fixedScenarios.length,
      status: "ok",
    },
    null,
    2,
  ),
)
