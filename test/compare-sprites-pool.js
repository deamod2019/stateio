"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const pixi = require("../src-cjs/6538_SIDES.js")
const originalGetPathBounds = require("../src-cjs/11414__mod.js")
const restoredGetPathBounds = require("../src-restored/core/PathBounds.js")
const { SpritesPool: OriginalSpritesPool } = require("../src-cjs/158_SpritesPool.js")
const { SpritesPool: RestoredSpritesPool } = require("../src-restored/core/SpritesPool.js")

const originalDeps = {
  getPathBounds: originalGetPathBounds,
  SpritesPool: OriginalSpritesPool,
}
const restoredDeps = {
  getPathBounds: restoredGetPathBounds,
  SpritesPool: RestoredSpritesPool,
}

const originalEnv = {
  textureFromURL: pixi.Texture.fromURL,
  textureRemoveFromCache: pixi.Texture.removeFromCache,
  createObjectURL: URL.createObjectURL,
}
let currentHarness = null

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.SpritesPool),
  publicPrototypeMembers(originalDeps.SpritesPool),
  "SpritesPool prototype differs",
)

compare("path bounds", (deps) => {
  return [
    deps.getPathBounds("M10 20 L30 20 L30 40 L10 40 Z"),
    deps.getPathBounds("M0 0 H10 V20 H0 Z"),
    deps.getPathBounds("M0 0 Q10 30 20 0"),
    deps.getPathBounds("M0 0 C10 30 20 -30 30 0"),
  ]
})

compare("display object texture cache", (deps) => {
  const h = makeHarness(deps)
  const first = h.pool.fromDisplayObject("circle", () => ({ __shape: "a" }))
  const second = h.pool.fromDisplayObject("circle", () => ({ __shape: "b" }))
  h.pool.purge()
  return {
    sameTexture: first.texture === second.texture,
    firstTexture: first.texture.__id,
    secondTexture: second.texture.__id,
    records: h.records,
    sizes: poolSizes(h.pool),
  }
})

compareAsync("shape texture cache", async (deps) => {
  const h = makeHarness(deps)
  const first = await h.pool.createShape("shape-a", "M0 0 L10 0 L10 20 Z")
  const second = await h.pool.createShape("shape-a", "M0 0 L10 0 L10 20 Z")
  const transient = await h.pool.createShape("shape-b", "M5 5 L15 5 L15 25 Z", false)
  h.pool.purge()
  return {
    firstTexture: first.texture.__id,
    secondTexture: second.texture.__id,
    sameTexture: first.texture === second.texture,
    transientTexture: transient.texture.__id,
    records: h.records,
    sizes: poolSizes(h.pool),
  }
})
  .then(() => {
    console.log(
      JSON.stringify(
        {
          module: "SpritesPool",
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

function compare(name, exercise) {
  restoreEnvironment()
  const originalResult = normalize(exercise(originalDeps))
  restoreEnvironment()
  const restoredResult = normalize(exercise(restoredDeps))
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareAsync(name, exercise) {
  restoreEnvironment()
  const originalResult = normalize(await exercise(originalDeps))
  restoreEnvironment()
  const restoredResult = normalize(await exercise(restoredDeps))
  assert.deepEqual(restoredResult, originalResult, name)
}

function makeHarness(deps) {
  patchEnvironment()
  const records = []
  const pool = new deps.SpritesPool()
  pool.rootView = {
    app: {
      renderer: {
        generateTexture(displayObject, scaleMode, resolution) {
          const texture = makeTexture(`generated-${records.length}-${displayObject.__shape}-${scaleMode}-${resolution}`)
          records.push(["renderer.generateTexture", displayObject.__shape, scaleMode, resolution])
          return texture
        },
      },
    },
  }
  currentHarness = { records, textureIndex: 0 }
  return { pool, records }
}

function patchEnvironment() {
  pixi.Texture.fromURL = function fromURL(url) {
    const texture = makeTexture(`url-${++currentHarness.textureIndex}`)
    currentHarness.records.push(["Texture.fromURL", typeof url])
    return texture
  }
  pixi.Texture.removeFromCache = function removeFromCache(texture) {
    currentHarness?.records.push(["Texture.removeFromCache", texture && texture.__id ? texture.__id : typeof texture])
  }
  URL.createObjectURL = function createObjectURL(blob) {
    currentHarness?.records.push(["URL.createObjectURL", blob?.type || typeof blob])
    return "blob:shape"
  }
}

function restoreEnvironment() {
  pixi.Texture.fromURL = originalEnv.textureFromURL
  pixi.Texture.removeFromCache = originalEnv.textureRemoveFromCache
  URL.createObjectURL = originalEnv.createObjectURL
}

function makeTexture(id) {
  const texture = Object.create(pixi.Texture.WHITE)
  texture.__id = id
  texture.textureCacheIds = []
  return texture
}

function poolSizes(pool) {
  return {
    textures: pool._textures.size,
    shapes: pool._shapeTextures.size,
    pending: pool._pendingShapeTextures.size,
  }
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
