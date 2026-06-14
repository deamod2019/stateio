"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/47283_GameEvents.js")
const restored = require("../src-restored/core/GameEvents.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "GameEvents export order differs")
assert.deepEqual(Object.keys(restored.GameEvents), Object.keys(original.GameEvents), "GameEvents key order differs")
assert.deepEqual(restored.GameEvents, original.GameEvents)

console.log(
  JSON.stringify(
    {
      module: "GameEvents",
      entries: Object.keys(restored.GameEvents).length,
      status: "ok",
    },
    null,
    2,
  ),
)
