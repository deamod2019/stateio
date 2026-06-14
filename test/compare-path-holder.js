"use strict"

const assert = require("node:assert/strict")

const { PathHolder: OriginalPathHolder } = require("../src-cjs/85126_PathHolder.js")
const { PathHolder: RestoredPathHolder } = require("../src-restored/core/PathHolder.js")

const originalDeps = { PathHolder: OriginalPathHolder }
const restoredDeps = { PathHolder: RestoredPathHolder }

assert.equal(RestoredPathHolder.MAX_SPAWN_LEN_ONE_DIRECTION, OriginalPathHolder.MAX_SPAWN_LEN_ONE_DIRECTION)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.PathHolder),
  publicPrototypeMembers(originalDeps.PathHolder),
  "restored PathHolder public prototype differs",
)

compareScenario("add get getPath and clear", (deps) => {
  const holder = new deps.PathHolder()
  const target = { stateId: "target" }
  const path = [
    [
      [0, 0],
      [1, 1],
    ],
  ]
  holder.addPath(target, path)
  const beforeClear = {
    get: holder.get(target),
    getPath: holder.getPath("target"),
    width: holder.getPathWidth(),
  }
  holder.clearCache()
  return {
    beforeClear,
    afterClear: holder.get(target),
  }
})

console.log(
  JSON.stringify(
    {
      module: "PathHolder",
      prototype: publicPrototypeMembers(restoredDeps.PathHolder),
      scenarios: 1,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareScenario(name, run) {
  const originalResult = normalize(run(originalDeps))
  const restoredResult = normalize(run(restoredDeps))
  assert.deepEqual(restoredResult, originalResult, name)
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => (typeof item === "number" && Number.isNaN(item) ? "NaN" : item)))
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
