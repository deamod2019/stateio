"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const pixi = require("../src-cjs/6538_SIDES.js")
const originalRuntime = require("../src-cjs/84194__mod.js")
const restoredRuntime = require("../src-restored/core/RuntimeUtils.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")
const { GenerateMapSpriteAction: OriginalGenerateMapSpriteAction } = require("../src-cjs/11470_GenerateMapSpriteAction.js")
const { GenerateMapSpriteAction: RestoredGenerateMapSpriteAction } = require("../src-restored/core/GenerateMapSpriteAction.js")

const originalDeps = {
  GenerateMapSpriteAction: OriginalGenerateMapSpriteAction,
}
const restoredDeps = {
  GenerateMapSpriteAction: RestoredGenerateMapSpriteAction,
}

const originalEnv = {
  renderTextureCreate: pixi.RenderTexture.create,
  textureRemoveFromCache: pixi.Texture.removeFromCache,
  originalLogDebug: originalRuntime.log.debug,
  restoredLogDebug: restoredRuntime.log.debug,
}

let currentHarness = null
const pendingComparisons = []

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.GenerateMapSpriteAction),
  publicPrototypeMembers(originalDeps.GenerateMapSpriteAction),
  "restored GenerateMapSpriteAction public prototype differs",
)

compareScenario("aspect factor and fit match original scaling", async (deps) => {
  const h = makeHarness(deps)
  const sprite = { width: 200, height: 100 }
  const wide = h.action.aspectFactor(200, 100, 50, 50)
  const tall = h.action.aspectFactor(100, 200, 50, 50)
  h.action.fit(sprite, { width: 50, height: 50 })
  return { wide, tall, sprite }
})

compareScenario("getPlayerColor uses action data activeStage", async (deps) => {
  const h = makeHarness(deps)
  h.action.data = { activeStage: 1 }
  return [
    h.action.getPlayerColor(0),
    h.action.getPlayerColor(1),
    h.action.getPlayerColor(2),
    h.records,
  ]
})

compareScenario("createStateSprite builds tinted shape and base marker", async (deps) => {
  const h = makeHarness(deps)
  const stateSprite = await h.action.createStateSprite(
    "sprite-map-a",
    { id: "a", shapes: ["shape-a"], radius: 12, x: 30, y: 40 },
    ["#112233", "#445566", "#778899"],
  )
  return snapshotStateSprite(stateSprite, h)
})

compareScenario("run creates every state sprite and merges with area", async (deps) => {
  const h = makeHarness(deps)
  const sprite = await h.action.run({
    activeStage: 1,
    data: {
      id: "map",
      stages: [
        { states: [{ id: "a", shapes: ["a"], radius: 10, x: 1, y: 2 }] },
        { states: [{ id: "b", shapes: ["b"], radius: 20, x: 3, y: 4 }] },
        { states: [{ id: "c", shapes: ["c"], x: 5, y: 6 }] },
      ],
    },
    area: { width: 120, height: 90 },
  })
  return {
    outputTextureId: sprite.texture.__id,
    records: h.records,
  }
})

compareScenario("execute without area uses local bounds", async (deps) => {
  const h = makeHarness(deps)
  h.action.data = { activeStage: 0 }
  const sprite = await h.action.execute({
    data: {
      id: "map-no-area",
      stages: [{ states: [{ id: "a", shapes: [], radius: 8, x: 7, y: 9 }] }],
    },
  })
  return {
    outputTextureId: sprite.texture.__id,
    records: h.records,
  }
})

Promise.resolve()
  .then(async () => {
    for (const run of pendingComparisons) await run()
    console.log(
      JSON.stringify(
        {
          module: "GenerateMapSpriteAction",
          prototype: publicPrototypeMembers(restoredDeps.GenerateMapSpriteAction),
          scenarios: pendingComparisons.length,
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

function compareScenario(name, run) {
  pendingComparisons.push(async () => {
    patchEnvironment()
    currentHarness = null
    const originalResult = normalize(await run(originalDeps))
    currentHarness = null
    const restoredResult = normalize(await run(restoredDeps))
    assert.deepEqual(restoredResult, originalResult, name)
  })
}

function makeHarness(deps) {
  const records = []
  const action = new deps.GenerateMapSpriteAction()
  action.rootView = {
    app: {
      renderer: {
        render(container, renderTexture) {
          records.push([
            "renderer.render",
            container.children.length,
            round(container.width),
            round(container.height),
            renderTexture.__id,
          ])
        },
      },
    },
  }
  action.skinManager = {
    getColorBy(owner) {
      records.push(["skin.getColorBy", owner])
      if (owner === PlayerType.First) return ["#111111", "#222222", "#333333"]
      return ["#aaaaaa", "#bbbbbb", "#cccccc"]
    },
  }
  action.spritesPool = {
    fromDisplayObject(id, factory) {
      records.push(["pool.fromDisplayObject", id, typeof factory])
      factory()
      const sprite = new pixi.Sprite(pixi.Texture.WHITE)
      sprite.__poolId = id
      return sprite
    },
  }
  action.createMapPart = {
    async run(payload) {
      records.push(["createMapPart.run", payload])
      const sprite = new pixi.Sprite(pixi.Texture.WHITE)
      sprite.__shapeId = payload.id
      return sprite
    },
  }
  currentHarness = { records, action, renderTextureIndex: 0 }
  return currentHarness
}

function snapshotStateSprite(stateSprite, h) {
  const shape = stateSprite.children[0]
  const base = stateSprite.children[1]
  return {
    childCount: stateSprite.children.length,
    shape: {
      id: shape.__shapeId,
      tint: shape.tint,
    },
    base: {
      poolId: base.__poolId,
      tint: base.tint,
      anchor: { x: base.anchor.x, y: base.anchor.y },
      position: { x: base.position.x, y: base.position.y },
    },
    records: h.records,
  }
}

function patchEnvironment() {
  pixi.RenderTexture.create = function create(options) {
    const texture = pixi.Texture.WHITE
    texture.__id = `render-${++currentHarness.renderTextureIndex}-${options.width}x${options.height}`
    currentHarness?.records.push(["RenderTexture.create", options])
    return texture
  }
  pixi.Texture.removeFromCache = function removeFromCache(texture) {
    currentHarness?.records.push(["Texture.removeFromCache", texture && texture.__id ? texture.__id : typeof texture])
  }
  const debug = function debug(...args) {
    currentHarness?.records.push(["log.debug", args])
  }
  originalRuntime.log.debug = debug
  restoredRuntime.log.debug = debug
}

function restoreEnvironment() {
  pixi.RenderTexture.create = originalEnv.renderTextureCreate
  pixi.Texture.removeFromCache = originalEnv.textureRemoveFromCache
  originalRuntime.log.debug = originalEnv.originalLogDebug
  restoredRuntime.log.debug = originalEnv.restoredLogDebug
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
