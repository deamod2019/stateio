"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { FighterGroup: OriginalFighterGroup } = require("../src-cjs/72257_FighterGroup.js")
const { FighterGroup: RestoredFighterGroup } = require("../src-restored/core/FighterGroup.js")
const { PathHolder: OriginalPathHolder } = require("../src-cjs/85126_PathHolder.js")
const { PathHolder: RestoredPathHolder } = require("../src-restored/core/PathHolder.js")
const { Spawner: OriginalSpawner } = require("../src-cjs/52057_Spawner.js")
const { Spawner: RestoredSpawner } = require("../src-restored/core/Spawner.js")
const { FighterGroupsSystem } = require("../src-cjs/85765_FighterGroupsSystem.js")
const { FighterGroupsSystem: RestoredFighterGroupsSystem } = require("../src-restored/core/FighterGroupsSystem.js")
const { FighterView: OriginalFighterView } = require("../src-cjs/26463_FighterView.js")
const { FighterView: RestoredFighterView } = require("../src-restored/core/FighterView.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")

const originalDeps = {
  FighterGroup: OriginalFighterGroup,
  Spawner: OriginalSpawner,
  PathHolder: OriginalPathHolder,
  FighterView: OriginalFighterView,
}
const restoredDeps = {
  FighterGroup: RestoredFighterGroup,
  Spawner: RestoredSpawner,
  PathHolder: RestoredPathHolder,
  FighterView: RestoredFighterView,
  RuntimeCore: restoredCore,
}
originalDeps.RuntimeCore = core
let currentHarness = null
const originalDiGet = core.di.get
const originalRestoredDiGet = restoredCore.di.get

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.FighterGroup),
  publicPrototypeMembers(originalDeps.FighterGroup),
  "restored FighterGroup public prototype differs",
)

try {
  compareDateScenario("constructor and burst accessors", [1000], (deps) => {
    const h = makeHarness(deps)
    return {
      id: h.group.id,
      path: h.group.Path,
      speed: h.group.Speed,
      owner: h.group.Owner,
      target: h.group.Target.id,
      source: h.group.Source.id,
      amount: h.group.Amount,
      startTimestamp: h.group.StartTimestamp,
      burstWidth: h.group.BurstWidth,
      burstDelay: h.group.BurstDelay,
    }
  })

  compareDateScenario("path length", [1000], (deps) => {
    const h = makeHarness(deps)
    return h.group.GetPathLen()
  })

  compareDateScenario("initUnitGraphics uses skin and sprite pool", [1000], (deps) => {
    const h = makeHarness(deps)
    const sprite = h.group.initUnitGraphics(h.fighter)
    return { sprite, records: h.records }
  })

  compareDateScenario("AddFighter attaches view, adds entity, and links group", [1000, 2500], (deps) => {
    const h = makeHarness(deps)
    h.group.AddFighter(h.fighter)
    return snapshot(h)
  })

  compareDateScenario("Check removes finished empty group", [1000, 5000], (deps) => {
    const h = makeHarness(deps)
    h.group.Amount = 0
    h.group.Check()
    return snapshot(h)
  })

  compareDateScenario("Check keeps active group with fighters", [1000, 5000], (deps) => {
    const h = makeHarness(deps)
    h.group.Amount = 1
    h.group.Check()
    return snapshot(h)
  })

  compareDateScenario("OnFighterDied decrements amount", [1000], (deps) => {
    const h = makeHarness(deps)
    h.group.Amount = 2
    h.group.OnFighterDied()
    return snapshot(h)
  })

  console.log(
    JSON.stringify(
      {
        module: "FighterGroup",
        prototype: publicPrototypeMembers(restoredDeps.FighterGroup),
        scenarios: 7,
        status: "ok",
      },
      null,
      2,
    ),
  )
} finally {
  core.di.get = originalDiGet
  restoredCore.di.get = originalRestoredDiGet
}

function compareDateScenario(name, timestamps, run) {
  withPatchedEnvironment(() => {
    const realNow = Date.now
    try {
      let index = 0
      core.di.get = function getFromTestContainer(token) {
        return currentHarness.getService(token)
      }
      Date.now = () => timestamps[Math.min(index++, timestamps.length - 1)]
      const originalResult = normalize(run(originalDeps))

      index = 0
      restoredCore.di.get = function getFromRestoredTestContainer(token) {
        return currentHarness.getService(token)
      }
      Date.now = () => timestamps[Math.min(index++, timestamps.length - 1)]
      const restoredResult = normalize(run(restoredDeps))

      assert.deepEqual(restoredResult, originalResult, name)
    } finally {
      Date.now = realNow
    }
  })
  currentHarness = null
}

function makeHarness(deps) {
  const records = []
  const source = {
    id: "source",
    get(key) {
      if (key === deps.PathHolder) return { getPathWidth: () => 12 }
      if (key === deps.Spawner) return { burstDelay: 0.3 }
      return undefined
    },
  }
  const target = { id: "target" }
  const group = new deps.FighterGroup(
    4,
    [
      [0, 0],
      [3, 4],
      [6, 8],
    ],
    2,
    PlayerType.First,
    target,
    source,
  )
  const fighter = {
    owner: PlayerType.First,
    scaleFactor: 2,
    add(component) {
      records.push(["fighter.add", component instanceof deps.FighterView])
      this.component = component
    },
  }
  const services = new Map()
  services.set(TypesGame.skinManager, {
    getFighterTextureBy(owner) {
      records.push(["skin.texture", owner])
      return "fighter-texture"
    },
    getColorBy(owner) {
      records.push(["skin.color", owner])
      return ["#000000", "#74BCFF"]
    },
  })
  services.set(TypesGame.spritesPool, {
    fromDisplayObject(texture, factory) {
      records.push(["pool.fromDisplayObject", texture, typeof factory])
      return {
        __sprite: true,
        tint: 0,
        anchor: {
          set(value) {
            records.push(["sprite.anchor", value])
          },
        },
      }
    },
  })
  services.set(TypesGame.model, {
    engine: {
      addEntity(entity) {
        records.push(["engine.addEntity", entity === fighter])
      },
    },
  })

  currentHarness = {
    deps,
    records,
    group,
    source,
    target,
    fighter,
    getService(token) {
      return services.get(token)
    },
  }
  return currentHarness
}

function snapshot(h) {
  return {
    amount: h.group.Amount,
    startTimestamp: h.group.StartTimestamp,
    fighterGroupLinked: h.fighter.group === h.group,
    fighterHasComponent: h.fighter.component instanceof h.deps.FighterView,
    records: h.records,
  }
}

function withPatchedEnvironment(run) {
  const realRemoveGroup = FighterGroupsSystem.RemoveGroup
  const realRestoredRemoveGroup = RestoredFighterGroupsSystem.RemoveGroup
  const realOriginalAddChild = OriginalFighterView.prototype.addChild
  const realRestoredAddChild = RestoredFighterView.prototype.addChild
  const patchedAddChild = function patchedAddChild(child) {
    currentHarness.records.push(["view.addChild", !!child.__sprite])
    return child
  }
  try {
    FighterGroupsSystem.RemoveGroup = function patchedRemoveGroup(id) {
      currentHarness.records.push(["groups.remove", id])
    }
    RestoredFighterGroupsSystem.RemoveGroup = function patchedRestoredRemoveGroup(id) {
      currentHarness.records.push(["groups.remove", id])
    }
    OriginalFighterView.prototype.addChild = patchedAddChild
    RestoredFighterView.prototype.addChild = patchedAddChild
    return run()
  } finally {
    FighterGroupsSystem.RemoveGroup = realRemoveGroup
    RestoredFighterGroupsSystem.RemoveGroup = realRestoredRemoveGroup
    OriginalFighterView.prototype.addChild = realOriginalAddChild
    RestoredFighterView.prototype.addChild = realRestoredAddChild
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
