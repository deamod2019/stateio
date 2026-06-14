"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const gsapModule = require("../src-cjs/25317_SteppedEase.js")
const { Random } = require("../src-cjs/84194__mod.js")
const restoredRuntime = require("../src-restored/core/RuntimeUtils.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")
const { FighterView: OriginalFighterView } = require("../src-cjs/26463_FighterView.js")
const { FighterView: RestoredFighterView } = require("../src-restored/core/FighterView.js")
const { FighterDeathEffectAction: OriginalDeathEffect } = require("../src-cjs/71981_FighterDeathEffectAction.js")
const { FighterDeathEffectAction: RestoredDeathEffect } = require("../src-restored/core/FighterDeathEffectAction.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")

const originalDeps = {
  FighterView: OriginalFighterView,
  FighterDeathEffectAction: OriginalDeathEffect,
}
const restoredDeps = {
  FighterView: RestoredFighterView,
  FighterDeathEffectAction: RestoredDeathEffect,
}

const originalEnv = {
  timeline: gsapModule.gsap.timeline,
  to: gsapModule.gsap.to,
  randomFrom: Random.from,
  restoredRandomFrom: restoredRuntime.Random.from,
  diGet: core.di.get,
  diIsBound: core.di.isBound,
  restoredDiGet: restoredCore.di.get,
  restoredDiIsBound: restoredCore.di.isBound,
}
let currentHarness = null

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.FighterView),
  publicPrototypeMembers(originalDeps.FighterView),
  "restored FighterView public prototype differs",
)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.FighterDeathEffectAction),
  publicPrototypeMembers(originalDeps.FighterDeathEffectAction),
  "restored FighterDeathEffectAction public prototype differs",
)

compareAsyncScenario("death effect animates skulls between fighter view pairs", async (deps) => {
  const h = makeHarness(deps)
  await h.action.execute(h.fighters)
  return {
    skull: {
      tint: h.skull.tint,
      width: h.skull.width,
      pivot: h.skull.pivot.value,
      scale: { x: h.skull.scale.x, y: h.skull.scale.y },
      position: { x: h.skull.position.x, y: h.skull.position.y },
    },
    records: h.records,
  }
})

function compareAsyncScenario(name, run) {
  patchEnvironment()
  Promise.resolve()
    .then(async () => {
      currentHarness = null
      const originalResult = normalize(await run(originalDeps))
      currentHarness = null
      const restoredResult = normalize(await run(restoredDeps))
      assert.deepEqual(restoredResult, originalResult, name)
      console.log(
        JSON.stringify(
          {
            module: "FighterViewDeathEffect",
            fighterViewPrototype: publicPrototypeMembers(restoredDeps.FighterView),
            deathEffectPrototype: publicPrototypeMembers(restoredDeps.FighterDeathEffectAction),
            scenarios: 1,
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
    .finally(() => {
      restoreEnvironment()
      currentHarness = null
    })
}

function makeHarness(deps) {
  const records = []
  const skull = makeSkull(records)
  const action = new deps.FighterDeathEffectAction()
  action.skull = skull
  const field = {
    addChild(child) {
      records.push(["field.addChild", child === skull])
      child.parent = {
        removeChild(removed) {
          records.push(["field.removeChild", removed === skull])
          removed.parent = null
        },
      }
    },
  }
  currentHarness = {
    deps,
    records,
    skull,
    action,
    field,
    fighters: [
      makeFighter(deps, "a", "#111111", 10, 20, 40),
      makeFighter(deps, "b", "#222222", 30, 50, 60),
      makeFighter(deps, "c", "#333333", 100, 150, 20),
      makeFighter(deps, "d", "#444444", 200, 250, 30),
    ],
  }
  return currentHarness
}

function makeFighter(deps, id, color, x, y, width) {
  const view = {
    id: `view-${id}`,
    width,
    position: { x, y },
  }
  return {
    id,
    color,
    get(token) {
      return token === deps.FighterView ? view : undefined
    },
  }
}

function makeSkull(records) {
  return {
    tint: 0,
    width: 0,
    height: 12,
    alpha: 1,
    x: 0,
    y: 0,
    parent: null,
    pivot: {
      value: null,
      set(value) {
        this.value = value
        records.push(["skull.pivot.set", value])
      },
    },
    scale: {
      x: 1,
      y: 1,
      set(value) {
        this.x = value
        this.y = value
        records.push(["skull.scale.set", value])
      },
      clone() {
        return { x: this.x, y: this.y }
      },
    },
    position: {
      x: 0,
      y: 0,
      set(x, y) {
        this.x = x
        this.y = y
        records.push(["skull.position.set", x, y])
      },
    },
  }
}

function patchEnvironment() {
  gsapModule.gsap.timeline = function timeline() {
    currentHarness.records.push(["gsap.timeline"])
    return {
      fromTo(target, from, to) {
        currentHarness.records.push(["timeline.fromTo", labelTarget(target), from, to])
        Object.assign(target, to)
        return this
      },
      add(tween, position) {
        currentHarness.records.push(["timeline.add", normalize(tween), position])
        return this
      },
    }
  }
  gsapModule.gsap.to = function to(target, vars) {
    currentHarness.records.push(["gsap.to", labelTarget(target), cloneVars(vars)])
    Object.assign(target, Object.fromEntries(Object.entries(vars).filter(([key]) => key !== "onComplete")))
    if (typeof vars.onComplete === "function") vars.onComplete()
    return { target: labelTarget(target), vars: cloneVars(vars) }
  }
  Random.from = function from(...values) {
    currentHarness.records.push(["random.from", values])
    return "random-color"
  }
  restoredRuntime.Random.from = Random.from
  core.di.isBound = function isBound(token) {
    return token === TypesGame.views.fieldInstance
  }
  core.di.get = function get(token) {
    return token === TypesGame.views.fieldInstance ? currentHarness.field : undefined
  }
  restoredCore.di.isBound = core.di.isBound
  restoredCore.di.get = core.di.get
}

function restoreEnvironment() {
  gsapModule.gsap.timeline = originalEnv.timeline
  gsapModule.gsap.to = originalEnv.to
  Random.from = originalEnv.randomFrom
  restoredRuntime.Random.from = originalEnv.restoredRandomFrom
  core.di.get = originalEnv.diGet
  core.di.isBound = originalEnv.diIsBound
  restoredCore.di.get = originalEnv.restoredDiGet
  restoredCore.di.isBound = originalEnv.restoredDiIsBound
}

function cloneVars(vars) {
  return Object.fromEntries(
    Object.entries(vars).map(([key, value]) => [key, typeof value === "function" ? "__function__" : value]),
  )
}

function labelTarget(target) {
  if (target === currentHarness?.skull) return "skull"
  if (target === currentHarness?.skull.scale) return "skull.scale"
  return target?.id || target?.constructor?.name || typeof target
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
