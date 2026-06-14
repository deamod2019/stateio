"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/86700_MetadataReader.js")
const restored = require("../src-restored/core/diRuntime.js")

assert.equal(restored, original, "diRuntime should expose the original Inversify runtime object")

for (const key of [
  "Container",
  "ContainerModule",
  "inject",
  "injectable",
  "decorate",
  "MetadataReader",
]) {
  assert.equal(restored[key], original[key], `${key} export differs`)
}

console.log(
  JSON.stringify(
    {
      module: "diRuntime",
      exports: Object.keys(restored).length,
      status: "ok",
    },
    null,
    2,
  ),
)
