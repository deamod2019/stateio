"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { PCell: OriginalPCell } = require("../src-cjs/96239_PCell.js")
const { PCell: RestoredPCell } = require("../src-restored/core/PCell.js")
const { Fighter: OriginalFighter } = require("../src-cjs/46697_Fighter.js")
const { Fighter: RestoredFighter } = require("../src-restored/core/Fighter.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")

const originalDeps = { PCell: OriginalPCell, Fighter: OriginalFighter }
const restoredDeps = { PCell: RestoredPCell, Fighter: RestoredFighter }

assert.equal(restoredDeps.PCell.SIZE, originalDeps.PCell.SIZE)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.PCell),
  publicPrototypeMembers(originalDeps.PCell),
  "restored PCell public prototype differs",
)

compareScenario("single owner has no collisions and keeps state", (deps) => {
  const cell = new deps.PCell()
  cell.add(makeFighter("a", PlayerType.First, [0, 0]))
  cell.add(makeFighter("b", PlayerType.First, [1, 1]))
  return snapshot(cell)
})

compareScenario("opposing close fighters collide and clear cell", (deps) => {
  const cell = new deps.PCell()
  const a = makeFighter("a", PlayerType.First, [0, 0])
  const b = makeFighter("b", PlayerType.Second, [1, 1])
  cell.add(a)
  cell.add(b)
  return {
    collisions: cell.getCollisions().map((pair) => pair.map((fighter) => fighter.id)),
    after: snapshot(cell),
  }
})

compareScenario("opposing distant fighters do not collide but clear after check", (deps) => {
  const cell = new deps.PCell()
  cell.add(makeFighter("a", PlayerType.First, [0, 0]))
  cell.add(makeFighter("b", PlayerType.Second, [100, 100]))
  return {
    collisions: cell.getCollisions().map((pair) => pair.map((fighter) => fighter.id)),
    after: snapshot(cell),
  }
})

console.log(
  JSON.stringify(
    {
      module: "PCell",
      prototype: publicPrototypeMembers(restoredDeps.PCell),
      scenarios: 3,
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

function makeFighter(id, owner, position) {
  return { id, owner, position }
}

function snapshot(cell) {
  return {
    owners: cell._owners.slice(0),
    fighters: Array.from(cell._fighters).map((fighter) => fighter.id),
  }
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => (typeof item === "number" && Number.isNaN(item) ? "NaN" : item)))
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
