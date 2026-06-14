"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/30107_PopupType.js")
const restored = require("../src-restored/core/PopupType.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "PopupType export order differs")
assert.deepEqual(Object.keys(restored.PopupType), Object.keys(original.PopupType), "PopupType key order differs")
assert.deepEqual(restored.PopupType, original.PopupType)

console.log(
  JSON.stringify(
    {
      module: "PopupType",
      entries: Object.keys(restored.PopupType).length,
      status: "ok",
    },
    null,
    2,
  ),
)
