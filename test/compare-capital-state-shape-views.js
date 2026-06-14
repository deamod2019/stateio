"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const gsapModule = require("../src-cjs/25317_SteppedEase.js")
const pixi = require("../src-cjs/6538_SIDES.js")
const { CapitalView: OriginalCapitalView } = require("../src-cjs/53351_CapitalView.js")
const { CapitalView: RestoredCapitalView } = require("../src-restored/core/CapitalView.js")
const { StateShapeView: OriginalStateShapeView } = require("../src-cjs/91585_StateShapeView.js")
const { StateShapeView: RestoredStateShapeView } = require("../src-restored/core/StateShapeView.js")
const { SkinManager: OriginalSkinManager } = require("../src-cjs/60079_SkinManager.js")
const { SkinManager: RestoredSkinManager } = require("../src-restored/core/SkinManager.js")
const { Random } = require("../src-cjs/84194__mod.js")
const restoredRuntime = require("../src-restored/core/RuntimeUtils.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")

const originalDeps = {
  CapitalView: OriginalCapitalView,
  StateShapeView: OriginalStateShapeView,
  SkinManager: OriginalSkinManager,
}
const restoredDeps = {
  CapitalView: RestoredCapitalView,
  StateShapeView: RestoredStateShapeView,
  SkinManager: RestoredSkinManager,
}

const originalDiGet = core.di.get
const originalRestoredDiGet = restoredCore.di.get
const originalGsap = {
  killTweensOf: gsapModule.gsap.killTweensOf,
  fromTo: gsapModule.gsap.fromTo,
  to: gsapModule.gsap.to,
  isTweening: gsapModule.gsap.isTweening,
}
const originalRangeFloat = Random.rangeFloat
const originalRestoredRangeFloat = restoredRuntime.Random.rangeFloat
let currentHarness = null
const pendingComparisons = []

installTexture("buildings/1.svg", 10, 20)
installTexture("buildings/3.svg", 30, 10)

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

async function main() {
  try {
  assert.deepEqual(
    publicPrototypeMembers(restoredDeps.CapitalView),
    publicPrototypeMembers(originalDeps.CapitalView),
    "restored CapitalView public prototype differs",
  )
  assert.deepEqual(
    publicPrototypeMembers(restoredDeps.StateShapeView),
    publicPrototypeMembers(originalDeps.StateShapeView),
    "restored StateShapeView public prototype differs",
  )

  compareScenario("capital init and base graphics fallback", (deps) => {
    const h = makeHarness(deps)
    const view = makeCapitalView(deps, h, { selectedBuilding: null })
    view.init({ stateRadius: 15, statePos: [11, 22] })
    const base = view.initBaseGraphics()
    return {
      position: pointSnapshot(view.position),
      base: baseSnapshot(base),
    }
  })

  compareScenario("capital base graphics uses selected building texture", (deps) => {
    const h = makeHarness(deps)
    const view = makeCapitalView(deps, h, { selectedBuilding: { textureUrl: "buildings/3.svg" } })
    view.init({ stateRadius: 15, statePos: [0, 0] })
    const base = view.initBaseGraphics()
    return baseSnapshot(base)
  })

  compareScenario("capital update skin, selection, active, occupied and shake", (deps) => {
    const h = makeHarness(deps)
    const view = makeCapitalView(deps, h)
    view.init({ stateRadius: 12, statePos: [1, 2] })
    view.updateSkin(PlayerType.First, true)
    const afterUpdate = capitalSnapshot(view, h.records)
    view.showSelection(0x112233, 0.4)
    view.showSelection(Number.NaN)
    view.occupiedAnimation(0.2)
    view.shake(0.3, 0.1)
    view.setActive(false, 0.6)

    return {
      afterUpdate,
      afterActions: capitalSnapshot(view, h.records),
    }
  })

  compareAsyncScenario("state shape init creates map part and tints sprite", async (deps) => {
    const h = makeHarness(deps)
    const view = makeShapeView(deps, h)
    view.color = 123
    await view.init({ shapes: ["shape-a"] }, "state-a")
    await view.initialPromise
    return {
      records: h.records,
      tint: view._shapesSprite.tint,
      children: view._container.children.length,
    }
  })

  compareScenario("state shape skin, fill and active behavior", (deps) => {
    const h = makeHarness(deps)
    const view = makeShapeView(deps, h)
    view._shapesSprite = { tint: 0 }
    view.updateSkin(PlayerType.First)
    const afterSkin = shapeSnapshot(view, h.records)
    view.updateWithPopulation({ current: 3, cap: 10 })
    const afterPopulation = shapeSnapshot(view, h.records)
    view.updateWithPopulation({ current: 8, cap: 10 }, true)
    view.fill = 0.5
    view.setActive(false, 0.7)

    return {
      afterSkin,
      afterPopulation,
      afterActions: shapeSnapshot(view, h.records),
    }
  })

  await Promise.all(pendingComparisons)

    console.log(
      JSON.stringify(
        {
          module: "CapitalStateShapeViews",
          capitalPrototype: publicPrototypeMembers(restoredDeps.CapitalView),
          shapePrototype: publicPrototypeMembers(restoredDeps.StateShapeView),
          scenarios: 5,
          status: "ok",
        },
        null,
        2,
      ),
    )
  } finally {
    core.di.get = originalDiGet
    restoredCore.di.get = originalRestoredDiGet
    restoreGsap()
    Random.rangeFloat = originalRangeFloat
    restoredRuntime.Random.rangeFloat = originalRestoredRangeFloat
    currentHarness = null
  }
}

function compareScenario(name, run) {
  withPatchedGsap(() => {
    core.di.get = function getFromTestContainer(token) {
      if (currentHarness) return currentHarness.getService(token)
      return originalDiGet.call(core.di, token)
    }
    const originalResult = normalize(run(originalDeps))
    currentHarness = null
    restoredCore.di.get = function getFromRestoredTestContainer(token) {
      if (currentHarness) return currentHarness.getService(token)
      return originalRestoredDiGet.call(restoredCore.di, token)
    }
    const restoredResult = normalize(run(restoredDeps))
    currentHarness = null
    assert.deepEqual(restoredResult, originalResult, name)
  })
}

function compareAsyncScenario(name, run) {
  pendingComparisons.push(
    withPatchedGsap(async () => {
      core.di.get = function getFromTestContainer(token) {
        if (currentHarness) return currentHarness.getService(token)
        return originalDiGet.call(core.di, token)
      }
      const originalResult = normalize(await run(originalDeps))
      currentHarness = null
      restoredCore.di.get = function getFromRestoredTestContainer(token) {
        if (currentHarness) return currentHarness.getService(token)
        return originalRestoredDiGet.call(restoredCore.di, token)
      }
      const restoredResult = normalize(await run(restoredDeps))
      currentHarness = null
      assert.deepEqual(restoredResult, originalResult, name)
    }),
  )
}

function makeHarness(deps) {
  const records = []
  const services = new Map()
  const harness = {
    records,
    getService(token) {
      if (token === TypesGame.actions.createMapPart) {
        if (!services.has(token)) {
          services.set(token, {
            run(payload) {
              records.push(["createMapPart.run", payload])
              const sprite = new pixi.Sprite(pixi.Texture.WHITE)
              sprite.id = payload.id
              sprite.tint = -1
              return Promise.resolve(sprite)
            },
          })
        }
        return services.get(token)
      }
      return {}
    },
  }
  currentHarness = harness
  return harness
}

function makeCapitalView(deps, harness, cookieOverrides = {}) {
  const view = new deps.CapitalView()
  view.cookies = {
    selectedBuilding: { textureUrl: "buildings/3.svg" },
    ...cookieOverrides,
  }
  view.skinManager = makeSkinManager(deps)
  view.spritesPool = makeSpritesPool(harness.records)
  return view
}

function makeShapeView(deps, harness) {
  const view = new deps.StateShapeView()
  view.skinManager = makeSkinManager(deps)
  return view
}

function makeSkinManager(deps) {
  const skinManager = new deps.SkinManager()
  skinManager.cookies = {
    absoluteLevelNum: 4,
    selected_fighter_id: 1,
    selected_building_id: 1,
    selected_color_set_id: "missing",
    getUserFighterSet: () => [1],
    getUserBuildingSet: () => [1],
  }
  skinManager.fillSkins()
  return skinManager
}

function makeSpritesPool(records) {
  return {
    fromDisplayObject(id, factory) {
      records.push(["spritesPool.fromDisplayObject", id, typeof factory])
      const displayObject = makeDisplayObject(String(id))
      displayObject.factoryPreview = typeof factory
      return displayObject
    },
  }
}

function makeDisplayObject(id) {
  const displayObject = new pixi.Sprite(pixi.Texture.WHITE)
  displayObject.id = id
  displayObject.width = 30
  displayObject.height = 20
  return displayObject
}

function withPatchedGsap(run) {
  restoreGsap()
  const rangeFloat = (min, max) => (min + max) / 4
  Random.rangeFloat = rangeFloat
  restoredRuntime.Random.rangeFloat = rangeFloat
  gsapModule.gsap.killTweensOf = function killTweensOf(target, props) {
    currentHarness?.records.push(["gsap.killTweensOf", labelTarget(target), props])
  }
  gsapModule.gsap.fromTo = function fromTo(target, from, to) {
    currentHarness?.records.push(["gsap.fromTo", labelTarget(target), from, to])
    Object.assign(target, pickTweenValues(to))
    return { target, from, to }
  }
  gsapModule.gsap.to = function to(target, toVars) {
    currentHarness?.records.push(["gsap.to", labelTarget(target), toVars])
    Object.assign(target, pickTweenValues(toVars))
    return { target, toVars }
  }
  gsapModule.gsap.isTweening = function isTweening(target) {
    currentHarness?.records.push(["gsap.isTweening", labelTarget(target)])
    return false
  }

  return run()
}

function restoreGsap() {
  Object.assign(gsapModule.gsap, originalGsap)
}

function pickTweenValues(vars) {
  const values = {}
  for (const [key, value] of Object.entries(vars)) {
    if (!["duration", "ease", "delay", "repeat", "repeatDelay", "yoyo"].includes(key)) {
      values[key] = value
    }
  }
  return values
}

function installTexture(id, width, height) {
  const baseTexture = new pixi.BaseTexture()
  baseTexture.setSize(width, height)
  pixi.utils.TextureCache[id] = new pixi.Texture(baseTexture)
}

function baseSnapshot(base) {
  return {
    id: base.id,
    hasObject: Boolean(base.obj),
    anchor: base.obj?.anchor ? pointSnapshot(base.obj.anchor) : null,
    scale: base.obj?.scale ? pointSnapshot(base.obj.scale) : null,
  }
}

function capitalSnapshot(view, records) {
  return {
    radius: view._radius,
    active: view._active,
    alpha: view.alpha,
    baseTint: view.base?.tint,
    baseAnchor: view.base?.anchor ? pointSnapshot(view.base.anchor) : null,
    selectionTint: view.selection?.tint,
    selectionAlpha: view.selection?.alpha,
    childCount: view.children.length,
    records: records.slice(),
  }
}

function shapeSnapshot(view, records) {
  return {
    active: view._active,
    alpha: view.alpha,
    fill: view.fill,
    color: view._color,
    spriteTint: view._shapesSprite?.tint,
    baseColorMax: view.baseColorMax,
    records: records.slice(),
  }
}

function pointSnapshot(point) {
  return { x: point.x, y: point.y }
}

function labelTarget(target) {
  if (!target) return "null"
  if (target.id) return target.id
  if (target === currentHarness?.view) return "view"
  if ("alpha" in target && "children" in target) return "display"
  if ("x" in target && "y" in target) return "point"
  return target.constructor?.name || typeof target
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => (typeof item === "number" && Number.isNaN(item) ? "NaN" : item)))
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
