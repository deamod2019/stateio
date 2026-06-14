"use strict"

const assert = require("node:assert/strict")

const originalInjectDecorators = require("../src-cjs/84879__mod.js")
const restoredInjectDecorators = require("../src-restored/core/InjectDecoratorsRuntime.js")

assert.equal(
  restoredInjectDecorators,
  originalInjectDecorators,
  "inject decorator runtime adapter must expose the original module",
)
assert.equal(typeof restoredInjectDecorators.default, "function", "inject decorator default export differs")

console.log(
  JSON.stringify(
    {
      module: "InjectDecoratorsRuntime",
      status: "ok",
    },
    null,
    2,
  ),
)
