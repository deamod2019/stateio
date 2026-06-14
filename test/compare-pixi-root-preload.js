"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

main()
  .then(() => {
    console.log(
      JSON.stringify(
        {
          modules: ["RootView", "RootMediator", "PreloadAssetsAction", "PreloadAssetsExports"],
          scenarios: [
            "root-view-resize",
            "root-mediator-initialize-resize",
            "preload-filter-progress-bind",
            "preload-barrel-export",
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
  await compareRootViewAndMediator()
  await comparePreloadAssetsAction()
  comparePreloadBarrel()
}

async function compareRootViewAndMediator() {
  const originalResult = await withMockedPixi((records) => {
    const { RootView } = freshRequire("../src-cjs/93710_RootView.js")
    const { RootMediator } = freshRequire("../src-cjs/65743_RootMediator.js")
    return rootScenario(RootView, RootMediator, records)
  })

  const restoredResult = await withMockedPixi((records) => {
    const { RootView } = freshRequire("../src-restored/core/RootView.js")
    const { RootMediator } = freshRequire("../src-restored/core/RootMediator.js")
    return rootScenario(RootView, RootMediator, records)
  })

  assert.deepEqual(restoredResult, originalResult)
}

function rootScenario(RootView, RootMediator, records) {
  const root = new RootView()
  const resizeCalls = []
  root.onResize = () => resizeCalls.push({ ...root.size })

  root.resize(320, 180)

  const mediator = new RootMediator()
  mediator.view = root
  const config = normalizeConfig(mediator.getConfig())
  mediator.initialize()

  root.app.view.clientWidth = 640
  root.app.view.clientHeight = 360
  mediator.onResize()

  return {
    rootPrototype: publicPrototypeMembers(RootView),
    mediatorPrototype: publicPrototypeMembers(RootMediator),
    config,
    size: root.size,
    resizeCalls,
    records,
  }
}

async function comparePreloadAssetsAction() {
  const originalResult = await withMockedPixi(async () => {
    const { PreloadAssetsAction } = freshRequire("../src-cjs/952_PreloadAssetsAction.js")
    return preloadScenario(PreloadAssetsAction, require("../src-cjs/84194__mod.js"))
  })

  const restoredResult = await withMockedPixi(async () => {
    const { PreloadAssetsAction } = freshRequire("../src-restored/core/PreloadAssetsAction.js")
    return preloadScenario(PreloadAssetsAction, require("../src-restored/core/RuntimeUtils.js"))
  })

  assert.deepEqual(restoredResult, originalResult)
}

async function preloadScenario(PreloadAssetsAction, runtime) {
  const core = require("../src-cjs/44656__mod.js")
  const restoredCore = require("../src-restored/core/RuntimeCore.js")
  const records = []
  const originalBind = core.di.bind
  const originalRestoredBind = restoredCore.di.bind
  const originalTrace = runtime.log.trace

  core.di.bind = restoredCore.di.bind = function bind(key) {
    records.push(["di.bind", key])
    return {
      toDynamicValue(factory) {
        records.push(["toDynamicValue", typeof factory(), factory().texture.id])
      },
    }
  }
  runtime.log.trace = (...args) => records.push(["log.trace", ...args])

  try {
    const action = new PreloadAssetsAction()
    action.data = { prefix: "prefix:" }
    const progressValues = []
    const returnValue = await action.execute({
      assets: ["a.svg", "b.jpg", "c.png", "d.webp", "folder/e.txt"],
      onProgress: (progress) => progressValues.push(progress),
    })

    return {
      prototype: publicPrototypeMembers(PreloadAssetsAction),
      transformed: action.transformAssetPath("a.svg"),
      returnValue,
      progressValues,
      records,
    }
  } finally {
    core.di.bind = originalBind
    restoredCore.di.bind = originalRestoredBind
    runtime.log.trace = originalTrace
  }
}

function comparePreloadBarrel() {
  const original = require("../src-cjs/89559__mod.js")
  const restored = require("../src-restored/core/PreloadAssetsExports.js")
  const { PreloadAssetsAction } = require("../src-restored/core/PreloadAssetsAction.js")

  assert.deepEqual(Object.keys(restored), Object.keys(original))
  assert.equal(restored.PreloadAssetsAction, PreloadAssetsAction)
  assert.deepEqual(
    publicPrototypeMembers(restored.PreloadAssetsAction),
    publicPrototypeMembers(original.PreloadAssetsAction),
  )
}

async function withMockedPixi(run) {
  const records = []
  const pixiPath = require.resolve("../src-cjs/6538_SIDES.js")
  const originalPixi = require.cache[pixiPath]

  require.cache[pixiPath] = {
    id: pixiPath,
    filename: pixiPath,
    loaded: true,
    exports: makePixiMock(records),
  }

  const purged = purgeModules([
    "../src-cjs/59795__mod.js",
    "../src-cjs/25487_View.js",
    "../src-cjs/42182_Mediator.js",
    "../src-cjs/65743_RootMediator.js",
    "../src-cjs/93710_RootView.js",
    "../src-cjs/952_PreloadAssetsAction.js",
    "../src-cjs/89559__mod.js",
    "../src-restored/core/RootView.js",
    "../src-restored/core/RootMediator.js",
    "../src-restored/core/View.js",
    "../src-restored/core/Mediator.js",
    "../src-restored/core/BindMediator.js",
    "../src-restored/core/DisplayFramework.js",
    "../src-restored/core/PreloadAssetsAction.js",
    "../src-restored/core/PreloadAssetsExports.js",
  ])

  try {
    return await run(records)
  } finally {
    restorePurgedModules(purged)
    if (originalPixi) require.cache[pixiPath] = originalPixi
    else delete require.cache[pixiPath]
  }
}

function makePixiMock(records) {
  function EventEmitter() {
    this._listeners = new Map()
  }

  EventEmitter.prototype.on = function on(event, listener) {
    if (!this._listeners.has(event)) this._listeners.set(event, new Set())
    this._listeners.get(event).add(listener)
    return this
  }

  EventEmitter.prototype.off = function off(event, listener) {
    this._listeners.get(event)?.delete(listener)
    return this
  }

  EventEmitter.prototype.emit = function emit(event, ...args) {
    for (const listener of this._listeners.get(event) || []) listener.apply(this, args)
    return this
  }

  EventEmitter.prototype.destroy = function destroy() {
    this._listeners.clear()
  }

  function Container() {
    EventEmitter.call(this)
    this.children = []
  }

  Container.prototype = Object.create(EventEmitter.prototype)
  Container.prototype.constructor = Container

  Container.prototype.addChild = function addChild(...children) {
    this.children.push(...children)
    return children[children.length - 1]
  }

  Container.prototype.addChildAt = function addChildAt(child, index) {
    this.children.splice(index, 0, child)
    return child
  }

  Container.prototype.removeChild = function removeChild(child) {
    this.children = this.children.filter((item) => item !== child)
    return child
  }

  Container.prototype.removeChildAt = function removeChildAt(index) {
    return this.children.splice(index, 1)[0]
  }

  function Sprite(texture) {
    Container.call(this)
    this.texture = texture
  }

  Sprite.prototype = Object.create(Container.prototype)
  Sprite.prototype.constructor = Sprite

  class Application {
    constructor(config) {
      records.push(["Application", normalizeConfig(config)])
      this.view = { clientWidth: 500, clientHeight: 250 }
      this.stage = {
        addChild: (child) => records.push(["stage.addChild", child ? "root" : "empty"]),
      }
      this.renderer = {
        resize: (width, height) => records.push(["renderer.resize", width, height]),
      }
    }
  }

  class Loader {
    constructor() {
      this.progress = 42
      this.resources = []
      this.onProgress = {
        add: (listener) => {
          records.push(["loader.onProgress.add", typeof listener])
          listener()
        },
      }
    }

    add(name, url, options, callback) {
      records.push(["loader.add", name, url, options])
      this.resources.push({ name, url, callback })
      return this
    }

    load(done) {
      records.push(["loader.load", this.resources.length])
      for (const resource of this.resources) {
        resource.callback({ name: resource.name, texture: { id: `texture:${resource.name}` } })
      }
      done()
    }
  }

  return {
    Application,
    Container,
    DisplayObject: Container,
    Loader,
    Sprite,
    utils: { EventEmitter },
  }
}

function normalizeConfig(config) {
  return {
    resolution: config.resolution,
    view: config.view,
    backgroundColor: config.backgroundColor,
    antialias: config.antialias,
    legacy: config.legacy,
  }
}

function freshRequire(request) {
  delete require.cache[require.resolve(request)]
  return require(request)
}

function purgeModules(requests) {
  const purged = new Map()
  for (const request of requests) {
    const resolved = require.resolve(request)
    purged.set(resolved, require.cache[resolved])
    delete require.cache[resolved]
  }
  return purged
}

function restorePurgedModules(purged) {
  for (const [resolved, cached] of purged) {
    if (cached) require.cache[resolved] = cached
    else delete require.cache[resolved]
  }
}

function publicPrototypeMembers(ctor) {
  return Object.getOwnPropertyNames(ctor.prototype)
    .filter((key) => key !== "constructor")
    .sort()
}
