"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const gsapModule = require("../src-cjs/25317_SteppedEase.js")
const { Sprite, Texture } = require("../src-cjs/6538_SIDES.js")
const { TutorialFingerView: OriginalTutorialFingerView } = require("../src-cjs/51006_TutorialFingerView.js")
const { TutorialFingerView: RestoredTutorialFingerView } = require("../src-restored/core/TutorialFingerView.js")
const { FingerView: OriginalFingerView } = require("../src-cjs/42854_FingerView.js")
const { FingerView: RestoredFingerView } = require("../src-restored/core/FingerView.js")

const originalGsap = {
  timeline: gsapModule.gsap.timeline,
  killTweensOf: gsapModule.gsap.killTweensOf,
}
let currentHarness = null

const originalDeps = {
  TutorialFingerView: OriginalTutorialFingerView,
  FingerView: OriginalFingerView,
}
const restoredDeps = {
  TutorialFingerView: RestoredTutorialFingerView,
  FingerView: RestoredFingerView,
}

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.TutorialFingerView),
  publicPrototypeMembers(originalDeps.TutorialFingerView),
  "restored TutorialFingerView public prototype differs",
)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.FingerView),
  publicPrototypeMembers(originalDeps.FingerView),
  "restored FingerView public prototype differs",
)

const pendingComparisons = []

compareScenario("TutorialFingerView onAdded anchors and attaches sprite", async (deps) => {
  const h = makeHarness(deps.TutorialFingerView)
  h.view.onAdded()
  return snapshot(h)
})

compareScenario("FingerView onAdded anchors and attaches sprite", async (deps) => {
  const h = makeHarness(deps.FingerView)
  h.view.onAdded()
  return snapshot(h)
})

compareScenario("TutorialFingerView hold release and tap sequence", async (deps) => {
  const h = makeHarness(deps.TutorialFingerView)
  await h.view.hold(0.25)
  await h.view.release(0.35)
  await h.view.tap(0)
  return h.records
})

compareScenario("FingerView hold release and tap sequence", async (deps) => {
  const h = makeHarness(deps.FingerView)
  await h.view.hold(0.25)
  await h.view.release(0.35)
  await h.view.tap(0)
  return h.records
})

pendingComparisons
  .reduce((promise, runComparison) => promise.then(runComparison), Promise.resolve())
  .then(() => {
    console.log(
      JSON.stringify(
        {
          module: "FingerViews",
          tutorialPrototype: publicPrototypeMembers(restoredDeps.TutorialFingerView),
          fingerPrototype: publicPrototypeMembers(restoredDeps.FingerView),
          scenarios: 4,
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

function compareScenario(name, run) {
  pendingComparisons.push(async () => {
    patchGsap()
    try {
      currentHarness = null
      const originalResult = normalize(await run(originalDeps))
      currentHarness = null
      const restoredResult = normalize(await run(restoredDeps))
      assert.deepEqual(restoredResult, originalResult, name)
    } finally {
      restoreGsap()
      currentHarness = null
    }
  })
}

function makeHarness(ViewClass) {
  const records = []
  const view = new ViewClass()
  const sprite = new Sprite(Texture.WHITE)
  sprite.width = 50
  sprite.height = 100
  sprite.__kind = "sprite"
  sprite.scale.__kind = "sprite.scale"
  view.sprite = sprite
  currentHarness = { records, view, sprite }
  return currentHarness
}

function snapshot(h) {
  return {
    childCount: h.view.children.length,
    firstChildIsSprite: h.view.children[0] === h.sprite,
    anchor: [h.sprite.anchor.x, h.sprite.anchor.y],
    position: [h.sprite.position.x, h.sprite.position.y],
  }
}

function patchGsap() {
  gsapModule.gsap.killTweensOf = function killTweensOf(target) {
    currentHarness?.records.push(["gsap.killTweensOf", labelTarget(target)])
  }
  gsapModule.gsap.timeline = function timeline() {
    currentHarness?.records.push(["gsap.timeline"])
    return {
      to(target, vars, position) {
        currentHarness?.records.push(["timeline.to", labelTarget(target), cloneVars(vars), position])
        Object.assign(target, Object.fromEntries(Object.entries(vars).filter(([key]) => key !== "duration" && key !== "onComplete")))
        if (typeof vars.onComplete === "function") vars.onComplete()
        return this
      },
    }
  }
}

function restoreGsap() {
  gsapModule.gsap.timeline = originalGsap.timeline
  gsapModule.gsap.killTweensOf = originalGsap.killTweensOf
}

function cloneVars(vars) {
  return Object.fromEntries(
    Object.entries(vars).map(([key, value]) => [
      key,
      typeof value === "function" ? "__function__" : typeof value === "number" ? round(value) : value,
    ]),
  )
}

function labelTarget(target) {
  return target?.__kind || target?.constructor?.name || typeof target
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (typeof item === "number") return round(item)
      return item
    }),
  )
}

function round(value) {
  return Math.round(value * 1e9) / 1e9
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
