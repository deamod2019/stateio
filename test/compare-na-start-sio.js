"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const restoreMocks = installModuleMocks()

const original = {
  NAStartSIO: require("../src-cjs/44025_NAStartSIO.js").NAStartSIO,
}
const restored = {
  NAStartSIO: require("../src-restored/core/NAStartSIO.js").NAStartSIO,
}
const cases = []

try {
  assert.deepEqual(
    publicPrototypeMembers(restored.NAStartSIO),
    publicPrototypeMembers(original.NAStartSIO),
    "NAStartSIO public prototype differs",
  )

  compareScenario("constructor overrides strategy to IMMEDIATE", async (deps) => {
    const action = new deps.NAStartSIO()
    return { strategy: action.strategy }
  })

  compareScenario("fallback image delegates to NAStart when no current continent exists", async (deps) => {
    const action = makeAction(deps.NAStartSIO, { currentContinent: null })
    action.loadImage = async (url) => `loaded:${url}`
    return action.getImage()
  })

  compareScenario("current continent renders map and avatar into notification canvas", async (deps) => {
    const action = makeAction(deps.NAStartSIO, {
      currentContinent: { stageLevel: 4, data: { id: "continent-data" } },
    })
    const image = await action.getImage()
    return {
      image,
      createMapCalls: action.createMapCalls,
      extractCalls: action.extractCalls.map(serializeDisplayObject),
      removedTextures: globalThis.__pixiHarness.removedTextures,
      loadedTextures: globalThis.__pixiHarness.loadedTextures,
    }
  })

  compareScenario("aspectFactor matches wide and tall inputs", async (deps) => {
    const action = new deps.NAStartSIO()
    return {
      wide: action.aspectFactor(400, 100, 120, 120),
      tall: action.aspectFactor(100, 400, 120, 120),
    }
  })

  Promise.resolve()
    .then(async () => {
      for (const run of cases) await run()
      console.log(
        JSON.stringify(
          {
            module: "NAStartSIO",
            scenarios: cases.length,
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
    .finally(restoreMocks)
} catch (error) {
  restoreMocks()
  throw error
}

function compareScenario(name, run) {
  cases.push(async () => {
    resetHarness()
    const originalResult = normalize(await run(original))
    resetHarness()
    const restoredResult = normalize(await run(restored))
    assert.deepEqual(restoredResult, originalResult, name)
  })
}

function makeAction(ActionClass, { currentContinent }) {
  const action = new ActionClass()
  action.model = { currentContinent }
  action.social = { me: { photo: "photo-url" } }
  action.createMapCalls = []
  action.extractCalls = []
  action.createMapAction = {
    run: async (payload) => {
      action.createMapCalls.push(payload)
      return new globalThis.__pixiHarness.Sprite({ id: "map-texture" }, { width: 320, height: 180 })
    },
  }
  action.rootView = {
    app: {
      renderer: {
        extract: {
          base64(container) {
            action.extractCalls.push(container)
            return "data:image/base64,map"
          },
        },
      },
    },
  }
  return action
}

function installModuleMocks() {
  const pixiPath = require.resolve("../src-cjs/6538_SIDES.js")
  const originalPixi = require.cache[pixiPath]
  const socialBarrelPath = require.resolve("../src-cjs/48616__mod.js")
  const originalSocialBarrel = require.cache[socialBarrelPath]
  const oldGameModelPath = require.resolve("../src-cjs/94572_GameModel.js")
  const originalOldGameModel = require.cache[oldGameModelPath]
  const oldCreateMapPath = require.resolve("../src-cjs/11470_GenerateMapSpriteAction.js")
  const originalOldCreateMap = require.cache[oldCreateMapPath]
  const oldTextureLoaderPath = require.resolve("../src-cjs/55132__mod.js")
  const originalOldTextureLoader = require.cache[oldTextureLoaderPath]
  const restoredTextureLoaderPath = require.resolve("../src-restored/core/TextureLoader.js")
  const originalRestoredTextureLoader = require.cache[restoredTextureLoaderPath]
  const restoredGameModelPath = require.resolve("../src-restored/core/GameModel.js")
  const originalRestoredGameModel = require.cache[restoredGameModelPath]
  const restoredRootViewPath = require.resolve("../src-restored/core/RootView.js")
  const originalRestoredRootView = require.cache[restoredRootViewPath]
  const restoredCreateMapPath = require.resolve("../src-restored/core/GenerateMapSpriteAction.js")
  const originalRestoredCreateMap = require.cache[restoredCreateMapPath]

  const pixi = makePixiMock()
  function FakeNotificationAction() {
    this.action = "CUSTOM"
    this.template = "play_turn"
    this.notification = "PUSH"
  }
  FakeNotificationAction.prototype.getImage = function getImage() {
    return this.loadImage("./assets/Notification.png")
  }
  FakeNotificationAction.WIDTH_FULL = 1200
  FakeNotificationAction.HEIGHT_FULL = 627

  function FakeNAStart() {
    FakeNotificationAction.apply(this, arguments)
    this.strategy = "LAST"
  }
  FakeNAStart.prototype = Object.create(FakeNotificationAction.prototype)
  FakeNAStart.prototype.constructor = FakeNAStart

  require.cache[pixiPath] = {
    id: pixiPath,
    filename: pixiPath,
    loaded: true,
    exports: pixi,
  }
  require.cache[socialBarrelPath] = {
    id: socialBarrelPath,
    filename: socialBarrelPath,
    loaded: true,
    exports: { NotificationAction: FakeNotificationAction, NAStart: FakeNAStart },
  }
  require.cache[oldGameModelPath] = {
    id: oldGameModelPath,
    filename: oldGameModelPath,
    loaded: true,
    exports: { GameModel: class GameModel {} },
  }
  require.cache[oldCreateMapPath] = {
    id: oldCreateMapPath,
    filename: oldCreateMapPath,
    loaded: true,
    exports: { GenerateMapSpriteAction: class GenerateMapSpriteAction {} },
  }
  require.cache[oldTextureLoaderPath] = {
    id: oldTextureLoaderPath,
    filename: oldTextureLoaderPath,
    loaded: true,
    exports: { loadTexture: fakeLoadTexture },
  }
  require.cache[restoredTextureLoaderPath] = {
    id: restoredTextureLoaderPath,
    filename: restoredTextureLoaderPath,
    loaded: true,
    exports: { loadTexture: fakeLoadTexture },
  }
  require.cache[restoredGameModelPath] = {
    id: restoredGameModelPath,
    filename: restoredGameModelPath,
    loaded: true,
    exports: { GameModel: class GameModel {} },
  }
  require.cache[restoredRootViewPath] = {
    id: restoredRootViewPath,
    filename: restoredRootViewPath,
    loaded: true,
    exports: { RootView: class RootView {} },
  }
  require.cache[restoredCreateMapPath] = {
    id: restoredCreateMapPath,
    filename: restoredCreateMapPath,
    loaded: true,
    exports: { GenerateMapSpriteAction: class GenerateMapSpriteAction {} },
  }

  for (const target of [
    "../src-cjs/44025_NAStartSIO.js",
    "../src-restored/core/NAStartSIO.js",
  ]) {
    delete require.cache[require.resolve(target)]
  }

  resetHarness()
  return function restoreMocks() {
    restoreCache(pixiPath, originalPixi)
    restoreCache(socialBarrelPath, originalSocialBarrel)
    restoreCache(oldGameModelPath, originalOldGameModel)
    restoreCache(oldCreateMapPath, originalOldCreateMap)
    restoreCache(oldTextureLoaderPath, originalOldTextureLoader)
    restoreCache(restoredTextureLoaderPath, originalRestoredTextureLoader)
    restoreCache(restoredGameModelPath, originalRestoredGameModel)
    restoreCache(restoredRootViewPath, originalRestoredRootView)
    restoreCache(restoredCreateMapPath, originalRestoredCreateMap)
  }
}

function makePixiMock() {
  class Container {
    constructor() {
      this.children = []
      this.scale = { x: 1, y: 1 }
      this.x = 0
      this.y = 0
      this.width = 0
      this.height = 0
    }

    addChild(...children) {
      this.children.push(...children)
      return children[0]
    }
  }

  class Graphics extends Container {
    constructor() {
      super()
      this.commands = []
    }

    beginFill(color) {
      this.commands.push(["beginFill", color])
      return this
    }

    lineStyle(width, color) {
      this.commands.push(["lineStyle", width, color])
      return this
    }

    drawRect(x, y, width, height) {
      this.commands.push(["drawRect", x, y, width, height])
      this.width = width
      this.height = height
      return this
    }

    drawCircle(x, y, radius) {
      this.commands.push(["drawCircle", x, y, radius])
      this.width = radius * 2
      this.height = radius * 2
      return this
    }

    endFill() {
      this.commands.push(["endFill"])
      return this
    }
  }

  class Sprite extends Container {
    constructor(texture = { id: "empty" }, size = {}) {
      super()
      this.texture = texture
      this.width = size.width ?? 80
      this.height = size.height ?? 80
      this.anchor = {
        value: undefined,
        set: (value) => {
          this.anchor.value = value
        },
      }
      this.mask = undefined
    }
  }

  const Texture = {
    EMPTY: { id: "empty" },
    removeFromCache(texture) {
      globalThis.__pixiHarness.removedTextures.push(texture?.id ?? texture)
    },
  }

  return { Container, Graphics, Sprite, Texture }
}

function fakeLoadTexture(url) {
  globalThis.__pixiHarness.loadedTextures.push(url)
  return Promise.resolve({ id: `texture:${url}` })
}

function resetHarness() {
  globalThis.__pixiHarness = {
    loadedTextures: [],
    removedTextures: [],
    Sprite: require("../src-cjs/6538_SIDES.js").Sprite,
  }
}

function restoreCache(path, cacheEntry) {
  if (cacheEntry) require.cache[path] = cacheEntry
  else delete require.cache[path]
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype).sort()
}

function serializeDisplayObject(object) {
  return {
    type: object.constructor.name,
    width: object.width,
    height: object.height,
    x: object.x,
    y: object.y,
    scale: object.scale,
    texture: object.texture?.id,
    commands: object.commands,
    mask: object.mask ? serializeDisplayObject(object.mask) : undefined,
    children: object.children?.map(serializeDisplayObject),
  }
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value))
}
