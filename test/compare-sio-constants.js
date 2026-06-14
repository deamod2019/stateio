"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/44365_SIOConstants.js")
const restored = require("../src-restored/core/SIOConstants.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "SIOConstants export order differs")
assert.deepEqual(Object.keys(restored.SIOConstants), Object.keys(original.SIOConstants), "SIOConstants key order differs")
assert.deepEqual(normalize(restored.SIOConstants), normalize(original.SIOConstants))
assert(restored.SIOConstants.REWARD_AD_PLAYED instanceof Map)
assert.notEqual(restored.SIOConstants.REWARD_AD_PLAYED, original.SIOConstants.REWARD_AD_PLAYED)

console.log(
  JSON.stringify(
    {
      module: "SIOConstants",
      entries: Object.keys(restored.SIOConstants).length,
      status: "ok",
    },
    null,
    2,
  ),
)

function normalize(constants) {
  return {
    ...constants,
    PLACEMENTS: { ...constants.PLACEMENTS },
    REWARD_AD_PLAYED: Array.from(constants.REWARD_AD_PLAYED.entries()),
  }
}
