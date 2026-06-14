"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const gsapModule = require("../src-cjs/25317_SteppedEase.js")
const originalRuntime = require("../src-cjs/84194__mod.js")
const restoredRuntime = require("../src-restored/core/RuntimeUtils.js")
const { TutorialFingerView: OriginalTutorialFingerView } = require("../src-cjs/51006_TutorialFingerView.js")
const { TutorialFingerView: RestoredTutorialFingerView } = require("../src-restored/core/TutorialFingerView.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")
const { Building: OriginalBuilding } = require("../src-cjs/26511_Building.js")
const { Building: RestoredBuilding } = require("../src-restored/core/Building.js")
const { TutorialSystem: OriginalTutorialSystem } = require("../src-cjs/10754_TutorialSystem.js")
const { TutorialSystem: RestoredTutorialSystem } = require("../src-restored/core/TutorialSystem.js")

const originalDeps = {
  TutorialSystem: OriginalTutorialSystem,
  Building: OriginalBuilding,
  TutorialFingerView: OriginalTutorialFingerView,
  RuntimeUtils: originalRuntime,
}
const restoredDeps = {
  TutorialSystem: RestoredTutorialSystem,
  Building: RestoredBuilding,
  TutorialFingerView: RestoredTutorialFingerView,
  RuntimeUtils: restoredRuntime,
}

let currentHarness = null
const originalContainerEnv = {
  oldGet: core.di.get,
  restoredGet: restoredCore.di.get,
}

core.di.get = restoredCore.di.get = function getFromTestContainer(token) {
  assert.equal(token, currentHarness.deps.TutorialFingerView)
  return currentHarness.finger
}

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.TutorialSystem),
  publicPrototypeMembers(originalDeps.TutorialSystem),
  "restored TutorialSystem public prototype differs",
)

compareScenario("constructor predicate selects active building tags", (deps) => {
  const h = makeHarness(deps, [])
  return {
    id: h.system._tutorialFingerEntityId,
    active: h.system.query._predicate(makePredicateEntity(deps, true)),
    inactive: h.system.query._predicate(makePredicateEntity(deps, false)),
  }
})

compareScenario("onAdded creates finger and nearest-target timeline", (deps) => {
  const h = makeHarness(deps, [
    makeBuilding("first", PlayerType.First, [0, 0]),
    makeBuilding("far", PlayerType.Second, [100, 0]),
    makeBuilding("near", PlayerType.Third, [30, 40]),
  ])
  h.system.onAddedToEngine()
  return snapshot(h)
})

compareScenario("onAdded without first-player source removes system", (deps) => {
  const h = makeHarness(deps, [makeBuilding("bot", PlayerType.Second, [100, 0])])
  h.system.onAddedToEngine()
  return snapshot(h)
})

compareScenario("onAdded without target removes system", (deps) => {
  const h = makeHarness(deps, [makeBuilding("first", PlayerType.First, [0, 0])])
  h.system.onAddedToEngine()
  return snapshot(h)
})

compareScenario("onRemoved removes tutorial finger entity", (deps) => {
  const h = makeHarness(deps, [
    makeBuilding("first", PlayerType.First, [0, 0]),
    makeBuilding("target", PlayerType.Second, [10, 0]),
  ])
  h.system.onAddedToEngine()
  h.records.length = 0
  h.system.onRemovedFromEngine()
  return snapshot(h)
})

compareScenario("update is intentionally empty", (deps) => {
  const h = makeHarness(deps, [])
  return h.system.update(0.25)
})

console.log(
  JSON.stringify(
    {
      module: "TutorialSystem",
      prototype: publicPrototypeMembers(restoredDeps.TutorialSystem),
      scenarios: 6,
      status: "ok",
    },
    null,
    2,
  ),
)
restoreContainers()

function compareScenario(name, run) {
  withPatchedAnimation(() => {
    const originalResult = normalize(run(originalDeps))
    const restoredResult = normalize(run(restoredDeps))
    assert.deepEqual(restoredResult, originalResult, name)
  })
  currentHarness = null
}

function makeHarness(deps, entities) {
  const records = []
  const finger = new deps.TutorialFingerView()
  finger.__kind = "finger"
  finger.scale.__kind = "scale"
  const system = new deps.TutorialSystem()
  const engineState = { fingerEntity: null }
  const engine = {
    addQuery(query) {
      query._entities = entities
      records.push(["engine.addQuery", query._predicate(makePredicateEntity(deps, true))])
    },
    removeQuery(query) {
      records.push(["engine.removeQuery", query === system.query])
    },
    addEntity(entity) {
      engineState.fingerEntity = entity
      records.push(["engine.addEntity", entity.get(deps.TutorialFingerView) === finger])
    },
    removeEntity(entity) {
      records.push(["engine.removeEntity", entity === engineState.fingerEntity])
      engineState.fingerEntity = null
    },
    getEntityById(id) {
      records.push(["engine.getEntityById", id === system._tutorialFingerEntityId])
      return engineState.fingerEntity && engineState.fingerEntity.id === id
        ? engineState.fingerEntity
        : undefined
    },
    removeSystem(removed) {
      records.push(["engine.removeSystem", removed === system])
    },
  }

  system.setEngine(engine)
  currentHarness = { deps, system, records, finger, engineState }
  return currentHarness
}

function makeBuilding(id, owner, statePos) {
  return { id, owner, data: { statePos } }
}

function makePredicateEntity(deps, active) {
  return {
    has(tag) {
      return active && tag === deps.Building.ACTIVE_TAG
    },
  }
}

function snapshot(h) {
  return {
    fingerEntityTracked: Boolean(h.engineState.fingerEntity),
    tutorialFingerEntityId: Number.isNaN(h.system._tutorialFingerEntityId)
      ? "NaN"
      : "number",
    records: h.records,
  }
}

function withPatchedAnimation(run) {
  const realTimeline = gsapModule.gsap.timeline
  const realFromTo = gsapModule.gsap.fromTo
  const realOriginalWarn = originalRuntime.log.warn
  const realRestoredWarn = restoredRuntime.log.warn

  try {
    gsapModule.gsap.fromTo = function fromTo(target, from, to) {
      currentHarness.records.push(["gsap.fromTo", labelTarget(target), from, to])
      return { tween: labelTarget(target), from, to }
    }
    gsapModule.gsap.timeline = function timeline(options) {
      currentHarness.records.push(["gsap.timeline", options])
      return {
        add(tween, position) {
          currentHarness.records.push(["timeline.add", normalize(tween), position])
          return this
        },
        fromTo(target, from, to) {
          currentHarness.records.push(["timeline.fromTo", labelTarget(target), from, to])
          return this
        },
      }
    }
    const warn = function warn(message) {
      currentHarness.records.push(["log.warn", message])
    }
    originalRuntime.log.warn = warn
    restoredRuntime.log.warn = warn

    return run()
  } finally {
    gsapModule.gsap.timeline = realTimeline
    gsapModule.gsap.fromTo = realFromTo
    originalRuntime.log.warn = realOriginalWarn
    restoredRuntime.log.warn = realRestoredWarn
  }
}

function labelTarget(target) {
  if (target && target.__kind) return target.__kind
  return String(target)
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (typeof item === "number" && Number.isNaN(item)) return "NaN"
      return item
    }),
  )
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}

function restoreContainers() {
  core.di.get = originalContainerEnv.oldGet
  restoredCore.di.get = originalContainerEnv.restoredGet
}
