"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/45329_BState.js")
const restored = require("../src-restored/core/BState.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "BState export order differs")
assert.deepEqual(
  Object.getOwnPropertyNames(restored.BState.prototype).sort(),
  Object.getOwnPropertyNames(original.BState.prototype).sort(),
  "BState prototype differs",
)

const buildings = [{ id: "b1" }]
const groups = [{ id: "g1" }]
const originalState = new original.BState(buildings, groups, 123)
const restoredState = new restored.BState(buildings, groups, 123)

assert.deepEqual(snapshot(restoredState), snapshot(originalState), "BState constructor shape differs")
assert.deepEqual(snapshot(restoredState.clone()), snapshot(originalState.clone()), "BState clone differs")
assert.notEqual(restoredState.clone(), restoredState, "BState clone should return a new state")
assert.equal(restoredState.clone().buildings, buildings, "BState clone should preserve buildings array identity")
assert.equal(restoredState.clone().groups, groups, "BState clone should preserve groups array identity")

console.log(
  JSON.stringify(
    {
      module: "BState",
      status: "ok",
    },
    null,
    2,
  ),
)

function snapshot(state) {
  return {
    buildings: state.buildings,
    groups: state.groups,
    timestamp: state.timestamp,
  }
}
