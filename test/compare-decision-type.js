"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/25583_DecisionType.js")
const restored = require("../src-restored/core/DecisionType.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "DecisionType export order differs")
assert.deepEqual(Object.keys(restored.DecisionType), Object.keys(original.DecisionType), "DecisionType key order differs")
assert.deepEqual(restored.DecisionType, original.DecisionType)

console.log(
  JSON.stringify(
    {
      module: "DecisionType",
      entries: Object.keys(restored.DecisionType).length,
      status: "ok",
    },
    null,
    2,
  ),
)
