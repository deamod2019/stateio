"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/6400__mod.js")
const restored = require("../src-restored/ui/preactRuntime.js")

assert.equal(restored, original, "preactRuntime should expose the original Preact runtime object")
assert.equal(restored.h, original.h, "preact h export differs")
assert.equal(restored.Component, original.Component, "preact Component export differs")
assert.equal(restored.options, original.options, "preact options object differs")

console.log(
  JSON.stringify(
    {
      module: "preactRuntime",
      exports: Object.keys(restored).length,
      status: "ok",
    },
    null,
    2,
  ),
)
