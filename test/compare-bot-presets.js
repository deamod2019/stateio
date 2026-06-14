"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/13866_BotPreset6FinalAgressive.js")
const restored = require("../src-restored/core/BotPresets.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "BotPresets export order differs")

for (const key of Object.keys(original)) {
  assert.deepEqual(restored[key], original[key], `${key} differs`)
  assert.deepEqual(Object.keys(restored[key]), Object.keys(original[key]), `${key} property order differs`)
}

assert.deepEqual(
  restored.BotPreset6FinalAgressive.commandInDecisionOrder,
  [0, 0],
  "final aggressive preset should inherit default command order",
)

console.log(
  JSON.stringify(
    {
      module: "BotPresets",
      exports: Object.keys(restored),
      status: "ok",
    },
    null,
    2,
  ),
)
