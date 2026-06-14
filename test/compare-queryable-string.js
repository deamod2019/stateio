"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/88460_QueryableString.js")
const restored = require("../src-restored/core/QueryableString.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "QueryableString export keys differ")
assert.deepEqual(
  publicPrototypeMembers(restored.QueryableString),
  publicPrototypeMembers(original.QueryableString),
  "QueryableString prototype differs",
)

for (const value of ["State.io", "", "prefix-middle-suffix", "aaaa"]) {
  compareScenario(`QueryableString:${value}`, (module) => {
    const query = new module.QueryableString(value)
    return {
      stored: query.str,
      startsWithState: query.startsWith("State"),
      startsWithEmpty: query.startsWith(""),
      endsWithIo: query.endsWith("io"),
      endsWithEmpty: query.endsWith(""),
      containsMiddle: query.contains("middle"),
      containsEmpty: query.contains(""),
      equalsValue: query.equals(value),
      equalsOther: query.equals(`${value}!`),
      value: query.value(),
    }
  })
}

console.log(
  JSON.stringify(
    {
      module: "QueryableString",
      scenarios: 4,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareScenario(name, run) {
  assert.deepEqual(normalize(run(restored)), normalize(run(original)), name)
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_key, item) => (item === undefined ? "__undefined__" : item)))
}
