"use strict"

const assert = require("node:assert/strict")

const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const original = require("../src-cjs/95348__mod.js")
const restored = require("../src-restored/ui/svgSpriteRuntime.js")
const store = restored && (restored.default || restored)

assert.equal(restored, original, "svg sprite runtime adapter must expose the original runtime")
assert.equal(typeof store.add, "function", "sprite runtime must expose add()")
assert.equal(typeof store.mount, "function", "sprite runtime must expose mount()")
assert.equal(typeof store.stringify, "function", "sprite runtime must expose stringify()")

console.log(
  JSON.stringify(
    {
      module: "svgSpriteRuntime",
      status: "ok",
    },
    null,
    2,
  ),
)
