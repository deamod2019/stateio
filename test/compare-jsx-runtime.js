"use strict"

const assert = require("node:assert/strict")

const preact = require("../src-cjs/6400__mod.js")

compareWithFreshModules("exports and vnode shape", (original, restored) => {
  assert.deepEqual(Object.keys(restored), Object.keys(original), "JSX runtime export keys differ")
  assert.equal(restored.jsx, restored.jsxs, "restored jsx/jsxs identity differs")
  assert.equal(restored.jsx, restored.jsxDEV, "restored jsx/jsxDEV identity differs")
  assert.equal(restored.Fragment, original.Fragment, "Fragment export differs")

  function Component() {}
  Component.defaultProps = { fallback: "default", supplied: "default" }

  const originalVNode = original.jsx(
    Component,
    { supplied: "value", ref: "ref-value", children: ["a", "b"] },
    "key",
    "self",
    "source",
  )
  const restoredVNode = restored.jsx(
    Component,
    { supplied: "value", ref: "ref-value", children: ["a", "b"] },
    "key",
    "self",
    "source",
  )
  assert.deepEqual(normalizeVNode(restoredVNode), normalizeVNode(originalVNode), "component vnode differs")
})

compareWithFreshModules("vnode hook and id sequence", (original, restored) => {
  const originalCalls = []
  const restoredCalls = []
  const previousHook = preact.options.vnode

  try {
    preact.options.vnode = (vnode) => originalCalls.push(vnode.__v)
    const originalFirst = original.jsx("div", { className: "a" }, "one")
    const originalSecond = original.jsxs("span", { children: ["x"] }, "two")

    preact.options.vnode = (vnode) => restoredCalls.push(vnode.__v)
    const restoredFirst = restored.jsx("div", { className: "a" }, "one")
    const restoredSecond = restored.jsxs("span", { children: ["x"] }, "two")

    assert.deepEqual(
      [normalizeVNode(restoredFirst), normalizeVNode(restoredSecond), restoredCalls],
      [normalizeVNode(originalFirst), normalizeVNode(originalSecond), originalCalls],
      "vnode sequence differs",
    )
  } finally {
    preact.options.vnode = previousHook
  }
})

console.log(
  JSON.stringify(
    {
      module: "jsxRuntime",
      scenarios: 2,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareWithFreshModules(name, run) {
  const originalPath = require.resolve("../src-cjs/16584__mod.js")
  const restoredPath = require.resolve("../src-restored/ui/jsxRuntime.js")
  delete require.cache[originalPath]
  delete require.cache[restoredPath]
  const original = require("../src-cjs/16584__mod.js")
  const restored = require("../src-restored/ui/jsxRuntime.js")
  try {
    run(original, restored)
  } catch (error) {
    error.message = `${name}: ${error.message}`
    throw error
  }
}

function normalizeVNode(vnode) {
  return {
    type: typeof vnode.type === "function" ? vnode.type.name : vnode.type,
    props: vnode.props,
    key: vnode.key,
    ref: vnode.ref,
    __k: vnode.__k,
    __: vnode.__,
    __b: vnode.__b,
    __e: vnode.__e,
    __d: vnode.__d,
    __c: vnode.__c,
    __h: vnode.__h,
    constructor: vnode.constructor,
    __v: vnode.__v,
    __source: vnode.__source,
    __self: vnode.__self,
  }
}
