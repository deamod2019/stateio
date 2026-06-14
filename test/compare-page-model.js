"use strict"

const assert = require("node:assert/strict")

const TARGETS = [
  "../src-cjs/99794_PageModel.js",
  "../src-restored/core/PageModel.js",
  "../src-restored/core/SocialAppExports.js",
]

Promise.resolve()
  .then(async () => {
    await compareScenario("constructor, progress, focus, visibility, and destroy", exerciseLifecycle)
    await compareScenario("assets progress without bus is ignored", exerciseNoBus)
    await compareScenario("waits until diffbus is ready", exerciseWaitUntilReady)

    console.log(
      JSON.stringify(
        {
          module: "PageModel",
          scenarios: 3,
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

async function compareScenario(name, run) {
  const originalResult = normalize(await run(loadOriginal))
  const restoredResult = normalize(await run(loadRestored))
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseLifecycle(loadModule) {
  const env = installDomHarness({ hidden: false, hasFocus: true, loaded: 25, ready: true })
  const records = env.records

  return withMockedModules(records, () => {
    const { PageModel } = loadModule()
    const model = new PageModel()
    const initial = snapshot(model)

    model.assetsProgress = 0.5
    const afterFirstProgress = snapshot(model)
    model.assetsProgress = 0.75
    const afterSecondProgress = snapshot(model)

    env.dispatchWindow("blur")
    const afterBlur = snapshot(model)
    env.dispatchWindow("focus")
    const afterFocus = snapshot(model)
    env.setHidden(true)
    env.dispatchDocument("visibilitychange")
    const afterHidden = snapshot(model)
    env.setHidden(false)
    env.dispatchDocument("visibilitychange")
    const afterVisible = snapshot(model)

    model.destroy()

    return {
      initial,
      afterFirstProgress,
      afterSecondProgress,
      afterBlur,
      afterFocus,
      afterHidden,
      afterVisible,
      bus: window.__diffbus,
      records,
    }
  })
}

async function exerciseNoBus(loadModule) {
  const env = installDomHarness({ hidden: true, hasFocus: false, withBus: false })
  const records = env.records

  return withMockedModules(records, () => {
    const { PageModel } = loadModule()
    const model = new PageModel()
    model.assetsProgress = 0.8
    return {
      snapshot: snapshot(model),
      records,
    }
  })
}

async function exerciseWaitUntilReady(loadModule) {
  const env = installDomHarness({ hidden: false, hasFocus: true, loaded: 0, ready: false })
  const records = env.records

  return withMockedModules(records, async () => {
    const { PageModel } = loadModule()
    const model = new PageModel()
    await model.isBusReadyAsync()
    return {
      snapshot: snapshot(model),
      bus: window.__diffbus,
      records,
    }
  })
}

function loadOriginal() {
  deleteTargetModules()
  return require("../src-cjs/99794_PageModel.js")
}

function loadRestored() {
  deleteTargetModules()
  return require("../src-restored/core/PageModel.js")
}

async function withMockedModules(records, run) {
  const mocks = createMocks(records)
  const originals = new Map()

  for (const [request, exportsObject] of Object.entries(mocks)) {
    const resolved = require.resolve(request)
    originals.set(resolved, require.cache[resolved])
    require.cache[resolved] = {
      id: resolved,
      filename: resolved,
      loaded: true,
      exports: exportsObject,
    }
  }

  try {
    return await run()
  } finally {
    deleteTargetModules()
    for (const [resolved, cached] of originals) {
      if (cached) require.cache[resolved] = cached
      else delete require.cache[resolved]
    }
    delete globalThis.gsap
    delete globalThis.window
    delete globalThis.document
  }
}

function createMocks(records) {
  function GlobalEventProvider() {
    records.push(["GlobalEventProvider.constructor"])
  }
  GlobalEventProvider.prototype.destroy = function destroy() {
    records.push(["GlobalEventProvider.destroy"])
  }

  const TypesSocial = { pauseAction: "TypesSocial.pauseAction" }

  return {
    "../src-cjs/44656__mod.js": {
      GlobalEventProvider,
      WaitAction: {
        async ms(delay) {
          records.push(["WaitAction.ms", delay])
          if (window.__diffbus.waits === undefined) window.__diffbus.waits = 0
          window.__diffbus.waits += 1
          if (window.__diffbus.waits >= 2) window.__diffbus.ready = true
        },
      },
      lazyGet(token) {
        records.push(["lazyGet", token])
        return {
          run(value) {
            records.push(["pauseAction.run", value])
          },
        }
      },
    },
    "../src-restored/core/RuntimeCore.js": {
      lazyGet(token) {
        records.push(["lazyGet", token])
        return {
          run(value) {
            records.push(["pauseAction.run", value])
          },
        }
      },
    },
    "../src-restored/core/GlobalEventProvider.js": { GlobalEventProvider },
    "../src-restored/core/WaitAction.js": {
      WaitAction: {
        async ms(delay) {
          records.push(["WaitAction.ms", delay])
          if (window.__diffbus.waits === undefined) window.__diffbus.waits = 0
          window.__diffbus.waits += 1
          if (window.__diffbus.waits >= 2) window.__diffbus.ready = true
        },
      },
    },
    "../src-cjs/86178__mod.js": { TypesSocial },
    "../src-restored/core/CoreTypes.js": { TypesSocial },
    "../src-cjs/86700_MetadataReader.js": {
      injectable() {
        return function injectableDecorator(target) {
          return target
        }
      },
    },
    "../src-restored/core/diRuntime.js": {
      injectable() {
        return function injectableDecorator(target) {
          return target
        }
      },
    },
  }
}

function installDomHarness({ hidden, hasFocus, loaded = 0, ready = false, withBus = true }) {
  const records = []
  const windowHandlers = new Map()
  const documentHandlers = new Map()
  let documentHidden = hidden

  globalThis.window = {
    addEventListener(eventName, handler) {
      records.push(["window.addEventListener", eventName])
      windowHandlers.set(eventName, handler)
    },
    removeEventListener(eventName, handler) {
      records.push(["window.removeEventListener", eventName, windowHandlers.get(eventName) === handler])
      windowHandlers.delete(eventName)
    },
  }
  if (withBus) window.__diffbus = { loaded, ready }

  globalThis.document = {
    get hidden() {
      return documentHidden
    },
    hasFocus() {
      records.push(["document.hasFocus"])
      return hasFocus
    },
    addEventListener(eventName, handler) {
      records.push(["document.addEventListener", eventName])
      documentHandlers.set(eventName, handler)
    },
    removeEventListener(eventName, handler) {
      records.push([
        "document.removeEventListener",
        eventName,
        documentHandlers.get(eventName) === handler,
      ])
      documentHandlers.delete(eventName)
    },
  }

  globalThis.gsap = {
    killTweensOf(target) {
      records.push(["gsap.killTweensOf", target === window.__diffbus])
    },
  }

  return {
    records,
    dispatchWindow(eventName) {
      windowHandlers.get(eventName)?.({ type: eventName })
    },
    dispatchDocument(eventName) {
      documentHandlers.get(eventName)?.({ type: eventName })
    },
    setHidden(value) {
      documentHidden = value
    },
  }
}

function deleteTargetModules() {
  for (const target of TARGETS) {
    delete require.cache[require.resolve(target)]
  }
}

function snapshot(model) {
  return {
    assetsProgress: model.assetsProgress,
    busLoaded: model.bus?.loaded,
    busReady: model.bus?.ready,
    windowBlured: model.windowBlured,
    prototype: publicPrototypeMembers(model.constructor),
  }
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => {
    if (typeof item === "function") return "[function]"
    if (item === undefined) return "__undefined__"
    return item
  }))
}
