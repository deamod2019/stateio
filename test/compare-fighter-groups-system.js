"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { FighterGroupsSystem: OriginalFighterGroupsSystem } = require("../src-cjs/85765_FighterGroupsSystem.js")
const { FighterGroupsSystem: RestoredFighterGroupsSystem } = require("../src-restored/core/FighterGroupsSystem.js")
const { PathHolder } = require("../src-cjs/85126_PathHolder.js")
const { Spawner: OriginalSpawner } = require("../src-cjs/52057_Spawner.js")
const { Spawner: RestoredSpawner } = require("../src-restored/core/Spawner.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")

const originalDeps = { FighterGroupsSystem: OriginalFighterGroupsSystem, Spawner: OriginalSpawner }
const restoredDeps = { FighterGroupsSystem: RestoredFighterGroupsSystem, Spawner: RestoredSpawner }

assert.deepEqual(
  staticMembers(restoredDeps.FighterGroupsSystem),
  staticMembers(originalDeps.FighterGroupsSystem),
  "restored FighterGroupsSystem static surface differs",
)

compareScenario("clear removes active groups", (deps) => {
  resetSystem(deps.FighterGroupsSystem)
  deps.FighterGroupsSystem._groups[0] = { id: 0 }
  deps.FighterGroupsSystem._groups[2] = { id: 2 }
  deps.FighterGroupsSystem.Clear()
  return snapshot(deps.FighterGroupsSystem)
})

compareDateScenario("create group increments and wraps id", [1000, 1000], (deps) => {
  resetSystem(deps.FighterGroupsSystem)
  deps.FighterGroupsSystem._lastIndex = 98
  const first = deps.FighterGroupsSystem.CreateNewGroup(
    [
      [0, 0],
      [10, 0],
    ],
    1,
    PlayerType.First,
    { id: "target" },
    makeSource(deps),
  )
  const second = deps.FighterGroupsSystem.CreateNewGroup(
    [
      [0, 0],
      [10, 0],
    ],
    1,
    PlayerType.Second,
    { id: "target-2" },
    makeSource(deps),
  )
  return { first, second, snapshot: snapshot(deps.FighterGroupsSystem) }
})

compareScenario("add fighter delegates to active group", (deps) => {
  resetSystem(deps.FighterGroupsSystem)
  const records = []
  deps.FighterGroupsSystem._groups[3] = {
    id: 3,
    AddFighter(fighter) {
      records.push(["add", fighter.id])
    },
  }
  deps.FighterGroupsSystem.AddFighterToGroup(3, { id: "fighter" })
  deps.FighterGroupsSystem.AddFighterToGroup(4, { id: "ignored" })
  return { records, snapshot: snapshot(deps.FighterGroupsSystem) }
})

compareScenario("remove group nulls slot", (deps) => {
  resetSystem(deps.FighterGroupsSystem)
  deps.FighterGroupsSystem._groups[7] = { id: 7 }
  deps.FighterGroupsSystem.RemoveGroup(7)
  return snapshot(deps.FighterGroupsSystem)
})

console.log(
  JSON.stringify(
    {
      module: "FighterGroupsSystem",
      static: staticMembers(restoredDeps.FighterGroupsSystem),
      scenarios: 4,
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

function compareDateScenario(name, timestamps, run) {
  const realNow = Date.now
  try {
    let index = 0
    Date.now = () => timestamps[Math.min(index++, timestamps.length - 1)]
    const originalResult = normalize(run(originalDeps))

    index = 0
    Date.now = () => timestamps[Math.min(index++, timestamps.length - 1)]
    const restoredResult = normalize(run(restoredDeps))

    assert.deepEqual(restoredResult, originalResult, name)
  } finally {
    Date.now = realNow
  }
}

function resetSystem(system) {
  system._groups = new Array(100).fill(null)
  system._lastIndex = -1
}

function makeSource(deps) {
  return {
    id: "source",
    get(key) {
      if (key === PathHolder) return { getPathWidth: () => 10 }
      if (key === deps.Spawner) return { burstDelay: 0.3 }
      return undefined
    },
  }
}

function snapshot(system) {
  return {
    lastIndex: system._lastIndex,
    active: system.GetActiveGroups().map((group) => ({
      id: group.id,
      owner: group.Owner,
      amount: group.Amount,
      start: group.StartTimestamp,
      path: group.Path,
    })),
    occupied: system._groups
      .map((group, index) => (group ? index : null))
      .filter((index) => index !== null),
  }
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => (typeof item === "number" && Number.isNaN(item) ? "NaN" : item)))
}

function staticMembers(klass) {
  return Object.getOwnPropertyNames(klass)
    .filter((name) => !["length", "name", "prototype"].includes(name))
    .sort()
}
