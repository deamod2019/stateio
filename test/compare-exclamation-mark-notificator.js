"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/5777_ExclamationMarkNotificator.js")
const restored = require("../src-restored/ui/ExclamationMarkNotificator.js")
const styleSideEffects = require("../src-restored/ui/styleSideEffects")

assert.deepEqual(Object.keys(restored), Object.keys(original), "ExclamationMarkNotificator export keys differ")
assert.deepEqual(
  normalizeVNode(restored.ExclamationMarkNotificator({ className: "pulse top" })),
  normalizeVNode(original.ExclamationMarkNotificator({ className: "pulse top" })),
  "ExclamationMarkNotificator className output differs",
)
assert.deepEqual(
  normalizeVNode(restored.ExclamationMarkNotificator({})),
  normalizeVNode(original.ExclamationMarkNotificator({})),
  "ExclamationMarkNotificator default output differs",
)
assert(styleSideEffects.getLoadedStyleModuleIds().includes("47519"), "style marker 47519 was not recorded")

console.log(
  JSON.stringify(
    {
      module: "ExclamationMarkNotificator",
      scenarios: 2,
      status: "ok",
    },
    null,
    2,
  ),
)

function normalizeVNode(vnode) {
  return {
    type: vnode.type,
    key: vnode.key ?? null,
    props: vnode.props || {},
  }
}
