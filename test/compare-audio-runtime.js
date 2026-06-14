"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/41766_Howler.js")
const restored = require("../src-restored/core/AudioRuntime.js")

assert.deepEqual(Object.keys(restored).sort(), ["Howl", "Howler"], "AudioRuntime export keys differ")
assert.equal(restored.Howl, original.Howl, "Howl should be the original Howler runtime class")
assert.equal(restored.Howler, original.Howler, "Howler should be the original global runtime")

console.log(
  JSON.stringify(
    {
      module: "AudioRuntime",
      exports: Object.keys(restored),
      status: "ok",
    },
    null,
    2,
  ),
)
