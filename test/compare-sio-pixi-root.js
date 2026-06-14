"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const pixi = require("../src-cjs/6538_SIDES.js")
const { GameEvents } = require("../src-cjs/47283_GameEvents.js")

globalThis.devicePixelRatio ??= 2

const original = {
  SioRootView: require("../src-cjs/69185__mod.js").default,
  SioRootMediator: require("../src-cjs/20119_RootMediator.js").RootMediator,
  SioPreloadAssetsAction: require("../src-cjs/94766_SIOPreloadAssetsAction.js").SIOPreloadAssetsAction,
  pixiBarrel: require("../src-cjs/55132__mod.js"),
  layout: require("../src-cjs/99856__mod.js"),
  texture: require("../src-cjs/4199__mod.js"),
  preloadBase: require("../src-cjs/952_PreloadAssetsAction.js").PreloadAssetsAction,
}

const restored = {
  SioRootView: require("../src-restored/core/SIORootView.js").default,
  SioRootMediator: require("../src-restored/core/SIORootMediator.js").RootMediator,
  SioPreloadAssetsAction: require("../src-restored/core/SIOPreloadAssetsAction.js").SIOPreloadAssetsAction,
  pixiBarrel: require("../src-restored/core/SIOPixiExports.js"),
  layout: require("../src-restored/core/LayoutUtils.js"),
  texture: require("../src-restored/core/TextureLoader.js"),
  preloadBase: require("../src-restored/core/PreloadAssetsAction.js").PreloadAssetsAction,
}

assert.deepEqual(Object.keys(restored.pixiBarrel), Object.keys(original.pixiBarrel))
assert.deepEqual(publicPrototypeMembers(restored.SioRootView), publicPrototypeMembers(original.SioRootView))
assert.deepEqual(publicPrototypeMembers(restored.SioRootMediator), publicPrototypeMembers(original.SioRootMediator))
assert.deepEqual(
  publicPrototypeMembers(restored.SioPreloadAssetsAction),
  publicPrototypeMembers(original.SioPreloadAssetsAction),
)

assert.deepEqual(runRootMediatorScenario(restored.SioRootMediator), runRootMediatorScenario(original.SioRootMediator))
assert.deepEqual(runLayoutScenario(restored.layout), runLayoutScenario(original.layout))

main()
  .then(() => {
    console.log(
      JSON.stringify(
        {
          modules: [
            "SIORootView",
            "SIORootMediator",
            "SIOPreloadAssetsAction",
            "SIOPixiExports",
            "TextureLoader",
            "LayoutUtils",
          ],
          scenarios: [
            "sio-root-view-layout",
            "sio-root-mediator-resize-dispatch",
            "sio-preload-assets",
            "sio-pixi-barrel-export",
            "layout-utils",
            "texture-loader",
          ],
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

async function main() {
  assert.deepEqual(await runRootViewScenario(restored), await runRootViewScenario(original))
  assert.deepEqual(await runPreloadScenario(restored), await runPreloadScenario(original))
  assert.deepEqual(await runTextureScenario(restored.texture), await runTextureScenario(original.texture))
}

async function runRootViewScenario(bundle) {
  const records = []
  const View = bundle.pixiBarrel.View
  const root = new bundle.SioRootView()

  root.spinner = makeSizedView(View, "spinner", records, { width: 20, height: 10 })
  root.screenContainer = makeScreenContainer(View, "screen", records)
  root.popupContainer = makeScreenContainer(View, "popup", records)
  root.overlay = makeScreenContainer(View, "overlay", records)
  root.progressBar = makeProgressBar(View, records)

  root.size = { width: 800, height: 600 }
  root.onAdded()
  root.onResize()
  const targetScreen = {
    name: "target",
    fadeIn: async () => records.push(["target.fadeIn"]),
  }

  const beforeScreen = {
    childCount: root.children.length,
    progressVisible: root.progressBar.visible,
    spinnerPosition: { x: root.spinner.x, y: root.spinner.y },
    overlaySize: { width: root.overlay.width, height: root.overlay.height },
    progressPosition: { x: root.progressBar.x, y: root.progressBar.y },
    screenSize: root.screenContainer.size,
    popupSize: root.popupContainer.size,
    records,
  }

  await root.goToScreen(targetScreen)

  return {
    ...beforeScreen,
    goToScreen: {
      records,
      screen: root.screenContainer.screen === targetScreen,
    },
  }
}

function runRootMediatorScenario(SioRootMediator) {
  const mediator = new SioRootMediator()
  const dispatches = []
  mediator.view = {
    app: {
      view: { clientWidth: 320, clientHeight: 240 },
      renderer: {
        resize(width, height) {
          dispatches.push(["resize", width, height])
        },
      },
    },
    resize(width, height) {
      dispatches.push(["view.resize", width, height])
    },
  }
  mediator.dispatch = (event, payload) => dispatches.push(["dispatch", event, payload])

  const config = mediator.getConfig()
  mediator.onResize()

  return {
    config: {
      backgroundColor: config.backgroundColor,
      antialias: config.antialias,
      legacy: config.legacy,
    },
    dispatches,
    resizeEvent: GameEvents.RESIZE,
  }
}

async function runPreloadScenario(bundle) {
  const records = []
  const originalError = console.error
  const originalFrom = pixi.BitmapFont.from
  const originalBaseExecute = bundle.preloadBase.prototype.execute
  const textureCache = pixi.utils.TextureCache
  const originalTexture = textureCache["Notification.png"]

  console.error = (...args) => records.push(["console.error", ...args])
  pixi.BitmapFont.from = (...args) => records.push(["BitmapFont.from", ...normalizeFontArgs(args)])
  bundle.preloadBase.prototype.execute = function execute(data) {
    records.push(["base.execute", data.assets, typeof data.onProgress])
    data.onProgress(25)
    return Promise.resolve("preloaded")
  }
  textureCache["Notification.png"] = {
    baseTexture: {
      setResolution(value) {
        records.push(["setResolution", value])
      },
    },
  }

  try {
    const action = new bundle.SioPreloadAssetsAction()
    action.pageModel = {}
    action.root = {
      onAdded() {
        records.push(["root.onAdded"])
      },
      spinner: {
        show() {
          records.push(["spinner.show"])
        },
      },
    }

    const result = await action.execute()

    return {
      result,
      progress: action.pageModel.assetsProgress,
      records,
    }
  } finally {
    console.error = originalError
    pixi.BitmapFont.from = originalFrom
    bundle.preloadBase.prototype.execute = originalBaseExecute
    if (originalTexture === undefined) delete textureCache["Notification.png"]
    else textureCache["Notification.png"] = originalTexture
  }
}

function runLayoutScenario(layout) {
  const target = { width: 20, height: 10, x: 0, y: 0 }
  const fit = { width: 400, height: 100 }
  const fill = { width: 100, height: 50, scale: { x: 1, y: 1 } }

  return {
    centerNumber: [layout.centerWidth(100), layout.centerHeight(80)],
    centerSize: layout.centerSize({ width: 100, height: 80 }, target),
    target,
    aspectFit: layout.aspectFit({ width: 200, height: 100 }, fit),
    aspectFill: layout.aspectFill(fill, { width: 300, height: 300 }),
  }
}

async function runTextureScenario(textureHelpers) {
  const textureCache = pixi.utils.TextureCache
  const originalCached = textureCache.cached
  const originalImage = globalThis.Image
  const originalTextureFrom = pixi.Texture.from
  const originalRuntime = require("../src-cjs/84194__mod.js")
  const restoredRuntime = require("../src-restored/core/RuntimeUtils.js")
  const originalWarn = originalRuntime.log.warn
  const restoredWarn = restoredRuntime.log.warn
  const warnings = []

  const cachedTexture = { id: "cached" }
  textureCache.cached = cachedTexture

  class FakeImage {
    set src(value) {
      this._src = value
      queueMicrotask(() => this.onload?.())
    }
  }

  globalThis.Image = FakeImage
  pixi.Texture.from = (image) => ({ id: `from:${image._src}` })
  originalRuntime.log.warn = (...args) => warnings.push(args)
  restoredRuntime.log.warn = (...args) => warnings.push(args)

  try {
    const cached = await textureHelpers.loadTexture("cached")
    const loaded = await textureHelpers.loadTexture("fresh.png")
    return {
      cachedIsSame: cached === cachedTexture,
      loaded,
      warnings,
    }
  } finally {
    pixi.Texture.from = originalTextureFrom
    globalThis.Image = originalImage
    originalRuntime.log.warn = originalWarn
    restoredRuntime.log.warn = restoredWarn
    if (originalCached === undefined) delete textureCache.cached
    else textureCache.cached = originalCached
  }
}

function makeSizedView(View, label, records, size) {
  const view = new View()
  Object.assign(view, size, { x: 0, y: 0, visible: true })
  view.label = label
  return view
}

function makeScreenContainer(View, label, records) {
  const view = makeSizedView(View, label, records, { width: 0, height: 0 })
  view.size = {}
  view.onResize = () => records.push([`${label}.onResize`, view.size])
  view.setScreen = async (screen) => {
    view.screen = screen
    records.push([`${label}.setScreen`, screen.name])
  }
  view.unblur = async () => records.push([`${label}.unblur`])
  return view
}

function makeProgressBar(View, records) {
  const view = makeSizedView(View, "progress", records, { width: 0, height: 0 })
  view.init = (config) => records.push(["progress.init", config])
  return view
}

function normalizeFontArgs(args) {
  return [
    args[0],
    args[1],
    { chars: args[2].chars, resolution: args[2].resolution },
  ]
}

function publicPrototypeMembers(ctor) {
  return Object.getOwnPropertyNames(ctor.prototype)
    .filter((key) => key !== "constructor")
    .sort()
}
