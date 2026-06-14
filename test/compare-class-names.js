"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/94184__mod.js")
const restored = require("../src-restored/ui/classNames.js")

assert.equal(typeof restored, typeof original, "classNames export type differs")
assert.equal(restored.default, restored, "default export should point at classNames")

const customToString = {
  toString() {
    return "custom-string"
  },
}

const cases = [
  [],
  ["base"],
  ["base", false, null, undefined, 0, "", "tail"],
  ["base", 2, ["nested", ["deep", { yes: true, no: false }]]],
  [{ a: true, b: false, c: 1 }],
  [customToString, "tail"],
  [{ toString: Object.prototype.toString, plain: true }],
]

for (const input of cases) {
  assert.equal(restored(...input), original(...input), `classNames case differs: ${JSON.stringify(input)}`)
}

console.log(
  JSON.stringify(
    {
      module: "classNames",
      cases: cases.length,
      status: "ok",
    },
    null,
    2,
  ),
)
