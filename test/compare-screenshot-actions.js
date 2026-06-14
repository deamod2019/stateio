"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const pixi = require("../src-cjs/6538_SIDES.js")
const { ScreenshotAction: OriginalScreenshotAction } = require("../src-cjs/77754_ScreenshotAction.js")
const { ScreenShotActionSIO: OriginalScreenShotActionSIO } = require("../src-cjs/16465_ScreenShotActionSIO.js")
const { ScreenshotAction: RestoredScreenshotAction } = require("../src-restored/core/ScreenshotAction.js")
const { ScreenShotActionSIO: RestoredScreenShotActionSIO } = require("../src-restored/core/ScreenShotActionSIO.js")

const originalDeps = {
  ScreenshotAction: OriginalScreenshotAction,
  ScreenShotActionSIO: OriginalScreenShotActionSIO,
}
const restoredDeps = {
  ScreenshotAction: RestoredScreenshotAction,
  ScreenShotActionSIO: RestoredScreenShotActionSIO,
}

const originalPixi = {
  create: pixi.RenderTexture.create,
  removeFromCache: pixi.Texture.removeFromCache,
}

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.ScreenshotAction),
  publicPrototypeMembers(originalDeps.ScreenshotAction),
  "ScreenshotAction prototype surface differs",
)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.ScreenShotActionSIO),
  publicPrototypeMembers(originalDeps.ScreenShotActionSIO),
  "ScreenShotActionSIO prototype surface differs",
)

Promise.resolve()
  .then(async () => {
    await compareScenario("generic screenshot defaults to root stage", (deps) =>
      exerciseGeneric(deps.ScreenshotAction),
    )
    await compareScenario("generic screenshot accepts explicit image", (deps) =>
      exerciseGeneric(deps.ScreenshotAction, image("explicit", 80, 30)),
    )
    await compareScenario("sio screenshot defaults to root stage and scale", (deps) =>
      exerciseSIO(deps.ScreenShotActionSIO, {}),
    )
    await compareScenario("sio screenshot accepts explicit image scale", (deps) =>
      exerciseSIO(deps.ScreenShotActionSIO, { image: image("map", 120, 60), imageScale: 0.25 }),
    )

    console.log(
      JSON.stringify(
        {
          modules: ["ScreenshotAction", "ScreenShotActionSIO"],
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
  .finally(restorePixi)

async function compareScenario(name, run) {
  restorePixi()
  const originalResult = normalize(await run(originalDeps))
  restorePixi()
  const restoredResult = normalize(await run(restoredDeps))
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseGeneric(Klass, explicitImage) {
  const records = []
  patchPixi(records)
  const action = new Klass()
  action.root = root(records)

  const result = arguments.length === 2 ? await action.execute(explicitImage) : await action.execute()
  return { records, result }
}

async function exerciseSIO(Klass, payload) {
  const records = []
  patchPixi(records)
  const action = new Klass()
  action.root = root(records)

  const result = await action.execute(payload)
  return { records, result }
}

function root(records) {
  const stage = image("stage", 200, 100)
  const renderer = {
    render(displayObject, renderTexture, clear, matrix) {
      records.push([
        "renderer.render",
        displayName(displayObject),
        textureSize(renderTexture),
        clear,
        matrixValues(matrix),
      ])
    },
    extract: {
      base64(displayObject, mime) {
        records.push(["renderer.extract.base64", textureSize(displayObject.texture), mime])
        return `data:${mime};${textureSize(displayObject.texture).join("x")}`
      },
    },
  }

  return { app: { renderer, stage } }
}

function patchPixi(records) {
  pixi.RenderTexture.create = function create(options) {
    records.push(["RenderTexture.create", options.width, options.height])
    const texture = originalPixi.create.call(this, options)
    texture._restoredTestSize = [texture.width, texture.height]
    return texture
  }
  pixi.Texture.removeFromCache = function removeFromCache(texture) {
    records.push(["Texture.removeFromCache", textureSize(texture)])
    return undefined
  }
}

function restorePixi() {
  pixi.RenderTexture.create = originalPixi.create
  pixi.Texture.removeFromCache = originalPixi.removeFromCache
}

function image(name, width, height) {
  return { name, width, height }
}

function displayName(displayObject) {
  return displayObject?.name || displayObject?.constructor?.name || typeof displayObject
}

function textureSize(texture) {
  return texture?._restoredTestSize || [texture?.width, texture?.height]
}

function matrixValues(matrix) {
  return [matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty]
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(JSON.stringify(value))
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
