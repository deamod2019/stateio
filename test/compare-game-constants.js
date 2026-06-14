"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/82496_GameConstants.js")
const restored = require("../src-restored/core/GameConstants.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "GameConstants export order differs")
assert.deepEqual(Object.keys(restored.GameConstants), Object.keys(original.GameConstants), "GameConstants key order differs")
assert.deepEqual(restored.GameConstants, original.GameConstants)

console.log(
  JSON.stringify(
    {
      module: "GameConstants",
      sections: Object.keys(restored.GameConstants).length,
      status: "ok",
    },
    null,
    2,
  ),
)
