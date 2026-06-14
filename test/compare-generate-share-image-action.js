"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const pixi = require("../src-cjs/6538_SIDES.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")

installPixiTestDoubles()

const { GenerateShareImageAction: OriginalGenerateShareImageAction } = require("../src-cjs/45724_GenerateShareImageAction.js")
const { GenerateShareImageAction: RestoredGenerateShareImageAction } = require("../src-restored/core/GenerateShareImageAction.js")

const originalDeps = {
  GenerateShareImageAction: OriginalGenerateShareImageAction,
}
const restoredDeps = {
  GenerateShareImageAction: RestoredGenerateShareImageAction,
}

const originalEnv = {
  diGet: core.di.get,
  restoredDiGet: restoredCore.di.get,
  renderTextureCreate: pixi.RenderTexture.create,
  textureRemoveFromCache: pixi.Texture.removeFromCache,
}
let currentHarness = null

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.GenerateShareImageAction),
  publicPrototypeMembers(originalDeps.GenerateShareImageAction),
  "restored GenerateShareImageAction public prototype differs",
)

const pendingComparisons = []

compareScenario("createFieldSprite runs createMap with completed-stage payload", async (deps) => {
  const h = makeHarness(deps)
  const result = await h.action.createFieldSprite()
  return {
    result,
    records: h.records,
  }
})

compareScenario("createAvatar builds avatar frame and score badge without a user photo", async (deps) => {
  const h = makeHarness(deps)
  const avatar = await h.action.createAvatar(321, null)
  return snapshotDisplay(avatar, h)
})

compareScenario("drawScreenShot overlays rendered avatar on the generated field sprite", async (deps) => {
  const h = makeHarness(deps)
  h.action.createAvatar = async () => makeAvatarFixture()
  h.action.createFieldSprite = async () => makeFieldSpriteFixture()
  const output = await h.action.drawScreenShot(77, null)
  return snapshotDisplay(output, h)
})

compareScenario("execute extracts the composed screenshot as base64", async (deps) => {
  const h = makeHarness(deps)
  h.action.drawScreenShot = async (points, user) => {
    h.records.push(["drawScreenShot", points, user])
    return { id: "composed-screenshot" }
  }
  const result = await h.action.execute({ points: 999 })
  return { result, records: h.records }
})

Promise.resolve()
  .then(async () => {
    for (const run of pendingComparisons) await run()
    console.log(
      JSON.stringify(
        {
          module: "GenerateShareImageAction",
          prototype: publicPrototypeMembers(restoredDeps.GenerateShareImageAction),
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
  const action = new deps.GenerateShareImageAction()
  action.rootView = {
    app: {
      renderer: {
        render(displayObject, texture) {
          records.push(["renderer.render", displayName(displayObject), texture?.__id])
        },
        extract: {
          base64(displayObject) {
            records.push(["renderer.extract.base64", displayObject?.id || displayName(displayObject)])
            return "data:image/png;base64,share"
          },
        },
      },
    },
  }
  action.social = { me: null }
  action.model = { currentContinent: { data: { id: "continent-data" } } }
  currentHarness = { action, records }
  return currentHarness
}

function patchEnvironment() {
  core.di.get = restoredCore.di.get = function get(token) {
    currentHarness?.records.push(["di.get", token === TypesGame.actions.createMap])
    if (token === TypesGame.actions.createMap) {
      return {
        run: async (payload) => {
          currentHarness?.records.push(["createMap.run", payload])
          return { id: "field-map-result" }
        },
      }
    }
    return undefined
  }
  pixi.RenderTexture.create = function createRenderTexture(options) {
    currentHarness?.records.push(["RenderTexture.create", options])
    const texture = pixi.Texture.WHITE
    texture.__id = `render-${options.width}x${options.height}`
    return texture
  }
  pixi.Texture.removeFromCache = function removeFromCache(texture) {
    currentHarness?.records.push(["Texture.removeFromCache", texture?.__id || typeof texture])
  }
}

function restoreEnvironment() {
  core.di.get = originalEnv.diGet
  restoredCore.di.get = originalEnv.restoredDiGet
  pixi.RenderTexture.create = originalEnv.renderTextureCreate
  pixi.Texture.removeFromCache = originalEnv.textureRemoveFromCache
}

function installPixiTestDoubles() {
  global.HTMLCanvasElement ||= class HTMLCanvasElement {}
  global.HTMLVideoElement ||= class HTMLVideoElement {}

  const chars = {}
  for (let code = 32; code <= 126; code += 1) {
    chars[code] = {
      id: code,
      x: 0,
      y: 0,
      width: 10,
      height: 20,
      xOffset: 0,
      yOffset: 0,
      xAdvance: 10,
      kerning: {},
      texture: pixi.Texture.WHITE,
      page: 0,
    }
  }
  pixi.BitmapFont.available.Helvetica = {
    chars,
    lineHeight: 20,
    size: 20,
    baseLineOffset: 0,
    pages: [{ texture: pixi.Texture.WHITE }],
  }

  pixi.utils.TextureCache["victory-framing.svg"] = pixi.Texture.WHITE
  pixi.utils.TextureCache["animation/win-rays.svg"] = pixi.Texture.WHITE
}

function makeAvatarFixture() {
  const avatar = new pixi.Container()
  avatar.id = "avatar-fixture"
  avatar.width = 134
  avatar.height = 134
  return avatar
}

function makeFieldSpriteFixture() {
  const sprite = new pixi.Sprite(pixi.Texture.WHITE)
  sprite.id = "field-sprite-fixture"
  sprite.width = 200
  sprite.height = 120
  sprite.getBounds = () => ({
    width: 200,
    height: 120,
    pad(x, y) {
      return { width: this.width + x * 2, height: this.height + y * 2 }
    },
  })
  return sprite
}

function snapshotDisplay(displayObject, h) {
  return {
    type: displayName(displayObject),
    childTypes: (displayObject.children || []).map(displayName),
    childCount: displayObject.children?.length || 0,
    children: (displayObject.children || []).map((child) => ({
      type: displayName(child),
      x: round(child.x),
      y: round(child.y),
      width: round(child.width),
      height: round(child.height),
      alpha: round(child.alpha),
      blendMode: child.blendMode,
      maskType: child.mask ? displayName(child.mask) : null,
    })),
    records: h.records,
  }
}

function displayName(value) {
  if (!value) return String(value)
  return value.id || value.constructor?.name || typeof value
}

function round(value) {
  return typeof value === "number" ? Math.round(value * 1e6) / 1e6 : value
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
