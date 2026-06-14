"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { BurstWaveAction: OriginalBurstWaveAction } = require("../src-cjs/46044_BurstWaveAction.js")
const { BurstWaveAction: RestoredBurstWaveAction } = require("../src-restored/core/BurstWaveAction.js")
const { PathHolder: OriginalPathHolder } = require("../src-cjs/85126_PathHolder.js")
const { PathHolder: RestoredPathHolder } = require("../src-restored/core/PathHolder.js")
const { FighterGroupsSystem: OriginalGroups } = require("../src-cjs/85765_FighterGroupsSystem.js")
const { FighterGroupsSystem: RestoredGroups } = require("../src-restored/core/FighterGroupsSystem.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")

const originalDeps = {
  BurstWaveAction: OriginalBurstWaveAction,
  PathHolder: OriginalPathHolder,
  FighterGroupsSystem: OriginalGroups,
}
const restoredDeps = {
  BurstWaveAction: RestoredBurstWaveAction,
  PathHolder: RestoredPathHolder,
  FighterGroupsSystem: RestoredGroups,
}

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.BurstWaveAction),
  publicPrototypeMembers(originalDeps.BurstWaveAction),
  "restored BurstWaveAction public prototype differs",
)

const pendingComparisons = []
let currentHarness = null

compareAsyncScenario("creates centered and alternating fighter offsets", async (deps) => {
  const h = makeHarness(deps, { amount: 3 })
  await h.action.execute(h.request)
  return snapshot(h)
})

compareAsyncScenario("fractional final fighter amount is preserved", async (deps) => {
  const h = makeHarness(deps, { amount: 2.5 })
  await h.action.execute(h.request)
  return snapshot(h)
})

compareAsyncScenario("missing path holder still creates empty path group", async (deps) => {
  const h = makeHarness(deps, { amount: 1, hasHolder: false })
  await h.action.execute(h.request)
  return snapshot(h)
})

compareAsyncScenario("missing cached path aborts", async (deps) => {
  const h = makeHarness(deps, { amount: 1, hasCachedPath: false })
  await h.action.execute(h.request)
  return snapshot(h)
})

compareAsyncScenario("source equal target aborts", async (deps) => {
  const h = makeHarness(deps, { amount: 1, sameTarget: true })
  await h.action.execute(h.request)
  return snapshot(h)
})

pendingComparisons
  .reduce((promise, runComparison) => promise.then(runComparison), Promise.resolve())
  .then(() => {
    console.log(
      JSON.stringify(
        {
          module: "BurstWaveAction",
          prototype: publicPrototypeMembers(restoredDeps.BurstWaveAction),
          scenarios: 5,
          status: "ok",
        },
        null,
        2,
      ),
    )
  })
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })

function compareAsyncScenario(name, run) {
  pendingComparisons.push(
    () => withPatchedGroups(async () => {
      const originalResult = normalize(await run(originalDeps))
      const restoredResult = normalize(await run(restoredDeps))
      assert.deepEqual(restoredResult, originalResult, name)
    }),
  )
}

function makeHarness(deps, options) {
  const records = []
  const action = new deps.BurstWaveAction()
  const target = { id: "target", stateId: "target" }
  const source = {
    id: "source",
    stateId: "source",
    owner: PlayerType.First,
    get(key) {
      if (key !== deps.PathHolder || options.hasHolder === false) return undefined
      const holder = new deps.PathHolder()
      if (options.hasCachedPath !== false) {
        holder.addPath(target, [
          [
            [0, 0],
            [10, 0],
          ],
          [
            [0, 10],
            [10, 10],
          ],
        ])
      }
      return holder
    },
  }
  const request = {
    amount: options.amount,
    target: options.sameTarget ? source : target,
    spawner: { selfBuilding: source },
  }
  currentHarness = { records, action, request, source, target }
  return currentHarness
}

function snapshot(h) {
  return { records: h.records }
}

async function withPatchedGroups(run) {
  const originals = [
    [OriginalGroups, OriginalGroups.CreateNewGroup, OriginalGroups.AddFighterToGroup],
    [RestoredGroups, RestoredGroups.CreateNewGroup, RestoredGroups.AddFighterToGroup],
  ]
  try {
    for (const [system] of originals) {
      system.CreateNewGroup = function patchedCreate(path, speed, owner, target, source) {
        const id = `group-${currentHarness.records.filter((record) => record[0] === "createGroup").length}`
        currentHarness.records.push(["createGroup", id, path, speed, owner, target.id, source.id])
        return id
      }
      system.AddFighterToGroup = function patchedAdd(groupId, fighter) {
        currentHarness.records.push([
          "addFighter",
          groupId,
          fighter.owner,
          fighter.source.id,
          fighter.target.id,
          fighter.step,
          fighter.path,
          fighter.amount,
          fighter.speed,
          fighter.scaleFactor,
          typeof fighter.hasTag === "function" ? fighter.hasTag(fighter.constructor.TAG) : undefined,
        ])
      }
    }
    return await run()
  } finally {
    for (const [system, create, add] of originals) {
      system.CreateNewGroup = create
      system.AddFighterToGroup = add
    }
    currentHarness = null
  }
}

function normalize(value) {
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (typeof item === "number" && Number.isNaN(item)) return "NaN"
      if (typeof item === "number") return Math.round(item * 1e9) / 1e9
      return item
    }),
  )
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
