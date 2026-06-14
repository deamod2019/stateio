"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { Fighter: OriginalFighter } = require("../src-cjs/46697_Fighter.js")
const { Fighter: RestoredFighter } = require("../src-restored/core/Fighter.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")

const originalDeps = { Fighter: OriginalFighter }
const restoredDeps = { Fighter: RestoredFighter }

for (const key of ["TAG", "TAG_DIED", "DEFAULT_SIZE", "NORMAL_SPEED", "DISTANCE_TOLERANCE"]) {
  assert.equal(restoredDeps.Fighter[key], originalDeps.Fighter[key], `static ${key} differs`)
}
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.Fighter),
  publicPrototypeMembers(originalDeps.Fighter),
  "restored Fighter public prototype differs",
)

compareScenario("constructor initializes moving unit", (deps) => {
  const fighter = makeFighter(deps)
  return snapshot(fighter)
})

compareScenario("position on grid rounds coordinates", (deps) => {
  const fighter = makeFighter(deps)
  fighter.position = [149, 251]
  return {
    defaultGrid: fighter.getPositionOnGrid(),
    customGrid: fighter.getPositionOnGrid(50),
  }
})

compareScenario("empty path is already complete", (deps) => {
  const fighter = makeFighter(deps, { path: [] })
  return { done: fighter.move(1), snapshot: snapshot(fighter) }
})

compareScenario("move advances toward target and rotates", (deps) => {
  const fighter = makeFighter(deps, { path: [[70, 0]] })
  const done = fighter.move(7)
  return { done, snapshot: snapshot(fighter) }
})

compareScenario("move consumes close waypoint", (deps) => {
  const fighter = makeFighter(deps, { path: [[10, 0], [30, 0]], speed: 6 })
  const done = fighter.move(1)
  return { done, snapshot: snapshot(fighter) }
})

console.log(
  JSON.stringify(
    {
      module: "Fighter",
      prototype: publicPrototypeMembers(restoredDeps.Fighter),
      scenarios: 5,
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

function makeFighter(deps, overrides = {}) {
  return new deps.Fighter(
    overrides.owner ?? PlayerType.First,
    overrides.source ?? { id: "source" },
    overrides.target ?? { id: "target" },
    overrides.step ?? 0,
    overrides.path ?? [
      [10, 0],
      [30, 0],
    ],
    overrides.amount ?? 5,
    overrides.speed ?? deps.Fighter.NORMAL_SPEED,
    overrides.scaleFactor ?? 1,
  )
}

function snapshot(fighter) {
  return {
    owner: fighter.owner,
    source: fighter.source.id,
    target: fighter.target.id,
    step: fighter.step,
    path: fighter.path,
    amount: fighter.amount,
    speed: fighter.speed,
    scaleFactor: fighter.scaleFactor,
    color: fighter.color,
    position: fighter.position,
    rotation: fighter.rotation,
    hasTag: typeof fighter.hasTag === "function" ? fighter.hasTag(fighter.constructor.TAG) : undefined,
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
