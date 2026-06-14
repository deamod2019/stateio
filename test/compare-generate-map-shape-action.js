"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const pixi = require("../src-cjs/6538_SIDES.js")
const { GenerateMapShapeAction: OriginalGenerateMapShapeAction } = require("../src-cjs/48115_GenerateMapShapeAction.js")
const { GenerateMapShapeAction: RestoredGenerateMapShapeAction } = require("../src-restored/core/GenerateMapShapeAction.js")

const originalDeps = {
  GenerateMapShapeAction: OriginalGenerateMapShapeAction,
}
const restoredDeps = {
  GenerateMapShapeAction: RestoredGenerateMapShapeAction,
}

const originalEnv = {
  textureRemoveFromCache: pixi.Texture.removeFromCache,
}
let currentHarness = null

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.GenerateMapShapeAction),
  publicPrototypeMembers(originalDeps.GenerateMapShapeAction),
  "restored GenerateMapShapeAction public prototype differs",
)

const pendingComparisons = []

compareScenario("empty or missing shapes return EMPTY sprite", async (deps) => {
  const h = makeHarness(deps)
  const empty = await h.action.execute({ id: "empty", shapes: [] })
  const missing = await h.action.execute({ id: "missing" })
  return {
    emptyTextureIsEmpty: empty.texture === pixi.Texture.EMPTY,
    missingTextureIsEmpty: missing.texture === pixi.Texture.EMPTY,
    records: h.records,
  }
})

compareScenario("multiple shapes render relative to minimum bounds with cache kept", async (deps) => {
  const h = makeHarness(deps)
  const output = await h.action.execute({
    id: "field-a",
    shapes: [
      "M10 20 L30 20 L30 40 L10 40 Z",
      "M-5 15 L5 15 L5 25 L-5 25 Z",
    ],
  })
  return snapshot(h, output)
})

compareScenario("keepCache false removes source and generated textures", async (deps) => {
  const h = makeHarness(deps)
  const output = await h.action.execute({
    id: "field-b",
    keepCache: false,
    shapes: [
      "M0 0 L10 0 L10 10 L0 10 Z",
      "M20 5 L25 5 L25 15 L20 15 Z",
    ],
  })
  return snapshot(h, output)
})

Promise.resolve()
  .then(async () => {
    for (const run of pendingComparisons) await run()
    console.log(
      JSON.stringify(
        {
          module: "GenerateMapShapeAction",
          prototype: publicPrototypeMembers(restoredDeps.GenerateMapShapeAction),
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
  const action = new deps.GenerateMapShapeAction()
  action.rootView = {
    app: {
      renderer: {
        generateTexture(container, scaleMode, resolution) {
          const texture = pixi.Texture.WHITE
          texture.__id = `generated-${container.children.length}-${scaleMode}-${resolution}`
          records.push([
            "renderer.generateTexture",
            container.children.map((child) => ({
              id: child.__id,
              x: child.position.x,
              y: child.position.y,
            })),
            scaleMode,
            resolution,
          ])
          return texture
        },
      },
    },
  }
  action.spritesPool = {
    async createShape(id, shape, keepCache) {
      records.push(["pool.createShape", id, shape, keepCache])
      const sprite = new pixi.Sprite(pixi.Texture.WHITE)
      sprite.__id = id
      sprite.texture.__id = `texture-${id}`
      return sprite
    },
  }
  currentHarness = { records, action }
  return currentHarness
}

function snapshot(h, output) {
  return {
    outputTextureId: output.texture.__id,
    outputPosition: { x: output.position.x, y: output.position.y },
    records: h.records,
  }
}

function patchEnvironment() {
  pixi.Texture.removeFromCache = function removeFromCache(texture) {
    currentHarness?.records.push(["Texture.removeFromCache", texture?.__id || typeof texture])
  }
}

function restoreEnvironment() {
  pixi.Texture.removeFromCache = originalEnv.textureRemoveFromCache
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
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
