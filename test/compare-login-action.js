"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const TypesAnalytics = { tracker: Symbol("TypesAnalytics.tracker") }
const TypesApp = {
  authAction: Symbol("TypesApp.authAction"),
  model: Symbol("TypesApp.model"),
}
const TypesCore = { gameConfig: Symbol("TypesCore.gameConfig") }
const TypesSocial = { model: Symbol("TypesSocial.model") }

const TARGETS = [
  "../src-cjs/15850_LoginAction.js",
  "../src-restored/core/LoginAction.js",
]

Promise.resolve()
  .then(async () => {
    await compareScenario("execute initializes and starts auth action", async (loadModule) => {
      const h = makeHarness(loadModule)
      await h.action.execute()
      return h.records
    })

    await compareScenario("execute without firebase only warns", async (loadModule) => {
      const h = makeHarness(loadModule, { firebase: undefined })
      await h.action.execute()
      return h.records
    })

    await compareScenario("entry tracking without ref respects ftue", async (loadModule) => {
      const h = makeHarness(loadModule, { ftue: true })
      h.action.trackEntryPoint()
      return h.records
    })

    await compareScenario("entry tracking with ref passes source payload", async (loadModule) => {
      const h = makeHarness(loadModule)
      h.action.trackEntryPoint({ ref: { source: "invite", campaign: "friend" } })
      return h.records
    })

    await compareScenario("entry tracking with ftue ref prefixes event", async (loadModule) => {
      const h = makeHarness(loadModule, { ftue: true })
      h.action.trackEntryPoint({ ref: { source: "share" } })
      return h.records
    })

    console.log(
      JSON.stringify(
        {
          module: "LoginAction",
          scenarios: 5,
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
  const originalResult = normalize(await withMockedModules(() => run(loadOriginal)))
  const restoredResult = normalize(await withMockedModules(() => run(loadRestored)))
  assert.deepEqual(restoredResult, originalResult, name)
}

function makeHarness(loadModule, options = {}) {
  const records = []
  currentRecords = records

  const { LoginAction } = loadModule()
  assert.deepEqual(publicPrototypeMembers(LoginAction), ["execute", "trackEntryPoint"])

  const action = new LoginAction()
  action.model = {
    async init(config) {
      records.push(["model.init", config])
    },
  }
  action.social = {
    session: { ftue: Boolean(options.ftue) },
    socialPlatform: options.socialPlatform || "ya",
  }
  action.gameConfig = {
    id: options.appId || "stateio-app",
    firebase: Object.prototype.hasOwnProperty.call(options, "firebase")
      ? options.firebase
      : { apiKey: "firebase-key" },
    backend: Object.prototype.hasOwnProperty.call(options, "backend")
      ? options.backend
      : { host: "https://backend.example" },
  }

  return { action, records }
}

function loadOriginal() {
  deleteTargetModules()
  return require("../src-cjs/15850_LoginAction.js")
}

function loadRestored() {
  deleteTargetModules()
  return require("../src-restored/core/LoginAction.js")
}

let currentRecords = null

function withMockedModules(run) {
  const mocks = createMocks()
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
    currentRecords = null
    return run()
  } finally {
    deleteTargetModules()
    currentRecords = null
    for (const [resolved, cached] of originals) {
      if (cached) require.cache[resolved] = cached
      else delete require.cache[resolved]
    }
  }
}

function createMocks() {
  function Action() {}
  function AppModel() {}

  return {
    "../src-cjs/44656__mod.js": {
      Action,
      lazyGet(token) {
        currentRecords?.push(["lazyGet", tokenLabel(token)])
        return {
          track(eventName, data) {
            currentRecords?.push(["tracker.track", eventName, data])
          },
        }
      },
      lazyRun(token) {
        currentRecords?.push(["lazyRun", tokenLabel(token)])
      },
    },
    "../src-restored/core/RuntimeCore.js": {
      Action,
      lazyGet(token) {
        currentRecords?.push(["lazyGet", tokenLabel(token)])
        return {
          track(eventName, data) {
            currentRecords?.push(["tracker.track", eventName, data])
          },
        }
      },
      lazyRun(token) {
        currentRecords?.push(["lazyRun", tokenLabel(token)])
      },
    },
    "../src-cjs/86178__mod.js": {
      TypesAnalytics,
      TypesApp,
      TypesCore,
      TypesSocial,
    },
    "../src-restored/core/CoreTypes.js": {
      TypesAnalytics,
      TypesApp,
      TypesCore,
      TypesSocial,
    },
    "../src-cjs/84194__mod.js": {
      log: {
        warn(message) {
          currentRecords?.push(["log.warn", message])
        },
      },
    },
    "../src-restored/core/RuntimeUtils.js": {
      log: {
        warn(message) {
          currentRecords?.push(["log.warn", message])
        },
      },
    },
    "../src-cjs/20383_AppModel.js": { AppModel },
    "../src-cjs/86700_MetadataReader.js": {
      injectable() {
        return function injectableDecorator(target) {
          return target
        }
      },
      inject() {
        return function injectDecorator() {}
      },
    },
    "../src-restored/core/diRuntime.js": {
      injectable() {
        return function injectableDecorator(target) {
          return target
        }
      },
      inject() {
        return function injectDecorator() {}
      },
    },
  }
}

function deleteTargetModules() {
  for (const target of TARGETS) {
    delete require.cache[require.resolve(target)]
  }
}

function tokenLabel(token) {
  if (token === TypesAnalytics.tracker) return "TypesAnalytics.tracker"
  if (token === TypesApp.authAction) return "TypesApp.authAction"
  if (token === TypesApp.model) return "TypesApp.model"
  if (token === TypesCore.gameConfig) return "TypesCore.gameConfig"
  if (token === TypesSocial.model) return "TypesSocial.model"
  return String(token)
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => {
    if (typeof item === "function") return "[function]"
    if (typeof item === "symbol") return item.toString()
    if (item === undefined) return "__undefined__"
    return item
  }))
}
