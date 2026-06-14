"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const original = require("../src-cjs/6538_SIDES.js")
const restored = require("../src-restored/core/pixiRuntime.js")

assert.equal(restored, original, "pixiRuntime should expose the original Pixi runtime object")

for (const key of [
  "Application",
  "BitmapFont",
  "BitmapText",
  "Container",
  "Graphics",
  "Loader",
  "Matrix",
  "Point",
  "RenderTexture",
  "SCALE_MODES",
  "Sprite",
  "Texture",
  "Ticker",
  "utils",
]) {
  assert.equal(restored[key], original[key], `${key} export differs`)
}

console.log(
  JSON.stringify(
    {
      module: "pixiRuntime",
      exports: Object.keys(restored).length,
      status: "ok",
    },
    null,
    2,
  ),
)
