"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/25317_SteppedEase.js")
const restored = require("../src-restored/core/animationRuntime.js")

assert.equal(restored, original, "animationRuntime should expose the original GSAP runtime object")
assert.equal(restored.gsap, original.gsap, "gsap export differs")
assert.equal(restored.Sine, original.Sine, "Sine export differs")

console.log(
  JSON.stringify(
    {
      module: "animationRuntime",
      exports: Object.keys(restored),
      status: "ok",
    },
    null,
    2,
  ),
)
