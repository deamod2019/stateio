"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/86178__mod.js")
const restored = require("../src-restored/core/CoreTypes.js")

const exportKeys = [
  "AdEvents",
  "AdResponse",
  "Types2D",
  "TypesAnalytics",
  "TypesAudio",
  "TypesCore",
  "TypesFlow",
  "TypesPromo",
  "TypesSocial",
  "TypesNotification",
  "TypesAds",
  "TypesApp",
  "TypesUI",
]

for (const key of exportKeys) {
  assert.deepEqual(restored[key], original[key], `${key} differs from original`)
  assert.deepEqual(Object.keys(restored[key]), Object.keys(original[key]), `${key} key order differs`)
}

console.log(
  JSON.stringify(
    {
      module: "CoreTypes",
      exports: exportKeys,
      status: "ok",
    },
    null,
    2,
  ),
)
