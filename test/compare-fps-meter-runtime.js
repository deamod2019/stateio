"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const original = require("../src-cjs/79349__mod.js")
const restored = require("../src-restored/core/FPSMeterRuntime.js")

assert.equal(restored, original, "FPSMeter runtime adapter must expose the original module")
assert.equal(typeof globalThis.FPSMeter, "function", "FPSMeter runtime must install global FPSMeter")

console.log(
  JSON.stringify(
    {
      module: "FPSMeterRuntime",
      status: "ok",
    },
    null,
    2,
  ),
)
