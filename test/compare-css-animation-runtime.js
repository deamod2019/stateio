"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/10990__mod.js")
const restored = require("../src-restored/core/CssAnimationRuntime.js")

assert.equal(restored, original, "CSS animation runtime adapter must expose the original module")
assert.equal(restored.default, original.default, "CSS animation runtime default export differs")
assert.equal(typeof restored.default.to, "function", "CSS animation runtime must expose to()")

console.log(
  JSON.stringify(
    {
      module: "CssAnimationRuntime",
      status: "ok",
    },
    null,
    2,
  ),
)
