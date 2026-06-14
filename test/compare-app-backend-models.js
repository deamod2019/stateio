"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()
installLocalReflectDecorate()

const TARGETS = [
  "../src-cjs/93668_HTTPRequest.js",
  "../src-restored/core/HTTPRequest.js",
  "../src-cjs/63333_BackendModel.js",
  "../src-restored/core/BackendModel.js",
  "../src-cjs/20383_AppModel.js",
  "../src-restored/core/AppModel.js",
]

Promise.resolve()
  .then(async () => {
    assert.deepEqual(await exerciseHTTPRequest("restored"), await exerciseHTTPRequest("original"))
    assert.deepEqual(await exerciseBackendModel("restored"), await exerciseBackendModel("original"))
    assert.deepEqual(await exerciseAppModel("restored", {}), await exerciseAppModel("original", {}))
    assert.deepEqual(
      await exerciseAppModel("restored", { backendOverride: "https://override.example///" }),
      await exerciseAppModel("original", { backendOverride: "https://override.example///" }),
    )
    assert.deepEqual(
      await exerciseAppModel("restored", { ensureReject: true, activateReject: true }),
      await exerciseAppModel("original", { ensureReject: true, activateReject: true }),
    )

    console.log(
      JSON.stringify(
        {
          module: "HTTPRequest/BackendModel/AppModel",
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

async function exerciseHTTPRequest(kind) {
  const records = []
  const mocks = createMocks(records, {})

  return withMockedModules(mocks, async () => {
    const { HTTPRequest } = freshRequire(kind, "HTTPRequest")
    const request = new HTTPRequest()
    const restoreFetch = installFetchMock(records, {
      jsonResult: { ok: true },
      jsonError: new Error("json failed"),
      fetchError: new Error("fetch failed"),
    })

    try {
      const ok = await request.json("https://api.example/ok", { a: 1 }, "POST", { "X-Test": "1" })
      const noPayload = await request.json("https://api.example/no-payload")
      const jsonError = await request.json("https://api.example/json-error")
      const fetchError = await request.json("https://api.example/fetch-error")

      return normalize({ ok, noPayload, jsonError, fetchError, records })
    } finally {
      restoreFetch()
    }
  })
}

async function exerciseBackendModel(kind) {
  const records = []
  const mocks = createMocks(records, {})

  return withMockedModules(mocks, async () => {
    const { BackendModel } = freshRequire(kind, "BackendModel")
    const model = new BackendModel()
    model._defaultHost = "https://backend.example"
    model._defaultPayload = { app_id: "app", sn: "ya" }
    model.getAuthorizationHeader = () => "Bearer token"
    model.json = async (url, payload, method, headers) => {
      records.push(["json", url, payload, method, headers])
      return { url, payload, method, headers }
    }

    const post = await model.post("auth", { user_id: "u" })
    const put = await model.put("/profile", { name: "n" }, false)
    const del = await model.delete("profile", undefined)
    const get = await model.get("status")
    const direct = await model.performHTTPRequest("/", { ping: true }, "PATCH", false)

    return normalize({
      members: publicPrototypeMembers(BackendModel),
      defaultHost: model.defaultHost,
      defaultPayload: model.getDefaultPayload(),
      authHeader: model.getAuthorizationHeader(),
      post,
      put,
      del,
      get,
      direct,
      records,
    })
  })
}

async function exerciseAppModel(kind, options) {
  const records = []
  const mocks = createMocks(records, options)

  return withBackendOverride(options.backendOverride, async () => {
    return withMockedModules(mocks, async () => {
      const { AppModel } = freshRequire(kind, "AppModel")
      const model = new AppModel()
      model.signature = "sig-123"

      await model.init({
        appId: "stateio",
        firebase: { apiKey: "firebase-key" },
        host: "https://configured.example///",
        provider: "ya",
      })

      return normalize({
        members: publicPrototypeMembers(AppModel),
        firebaseApp: model.firebaseApp,
        defaultEndpoint: model.defaultEndpoint,
        defaultHost: model.defaultHost,
        defaultPayload: model.getDefaultPayload(),
        defaultRemoteConfig: model.getDefaultRemoteConfig("https://host.example"),
        authorizationHeader: model.getAuthorizationHeader(),
        remoteConfig: model.remoteConfig,
        records,
      })
    })
  })
}

function createMocks(records, options) {
  function injectable() {
    return function injectableDecorator(target) {
      return target
    }
  }
  const remoteConfig = { defaultConfig: null }

  return {
    "../src-cjs/86700_MetadataReader.js": { injectable },
    "../src-restored/core/diRuntime.js": { injectable },
    "../src-cjs/84194__mod.js": makeLogMock(records),
    "../src-restored/core/RuntimeUtils.js": makeLogMock(records),
    "../src-cjs/83977__mod.js": {
      initializeApp(config) {
        records.push(["initializeApp", config])
        return { app: "firebase", config }
      },
    },
    "../src-restored/core/FirebaseAppRuntime.js": {
      initializeApp(config) {
        records.push(["initializeApp", config])
        return { app: "firebase", config }
      },
    },
    "../src-cjs/47135__mod.js": {
      getRemoteConfig() {
        records.push(["getRemoteConfig"])
        return remoteConfig
      },
      ensureInitialized(config) {
        records.push(["ensureInitialized", config === remoteConfig])
        return options.ensureReject ? Promise.reject("ensure-error") : Promise.resolve("ensure-ok")
      },
      fetchAndActivate(config) {
        records.push(["fetchAndActivate", config === remoteConfig])
        return options.activateReject ? Promise.reject("activate-error") : Promise.resolve("activate-ok")
      },
      getString(config, key) {
        records.push(["getString", config === remoteConfig, key])
        return config.defaultConfig[key]
      },
    },
    "../src-restored/core/FirebaseRemoteConfigRuntime.js": {
      getRemoteConfig() {
        records.push(["getRemoteConfig"])
        return remoteConfig
      },
      ensureInitialized(config) {
        records.push(["ensureInitialized", config === remoteConfig])
        return options.ensureReject ? Promise.reject("ensure-error") : Promise.resolve("ensure-ok")
      },
      fetchAndActivate(config) {
        records.push(["fetchAndActivate", config === remoteConfig])
        return options.activateReject ? Promise.reject("activate-error") : Promise.resolve("activate-ok")
      },
      getString(config, key) {
        records.push(["getString", config === remoteConfig, key])
        return config.defaultConfig[key]
      },
    },
  }
}

function makeLogMock(records) {
  return {
    log: {
      warn(...args) {
        records.push(["log.warn", normalize(args)])
      },
      info(...args) {
        records.push(["log.info", normalize(args)])
      },
    },
  }
}

function installFetchMock(records, options) {
  const originalFetch = global.fetch

  global.fetch = async (url, request) => {
    records.push(["fetch", url, normalize(request)])
    if (url.includes("fetch-error")) throw options.fetchError
    return {
      json() {
        records.push(["response.json", url])
        if (url.includes("json-error")) throw options.jsonError
        return { ...options.jsonResult, url }
      },
    }
  }

  return () => {
    global.fetch = originalFetch
  }
}

async function withBackendOverride(value, run) {
  const script = value === undefined ? "delete globalThis.__BACKEND_HOST__" : `globalThis.__BACKEND_HOST__ = ${JSON.stringify(value)}`
  const cleanup = "delete globalThis.__BACKEND_HOST__"

  Function(script)()
  try {
    return await run()
  } finally {
    Function(cleanup)()
  }
}

function withMockedModules(mocks, run) {
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

  function restore() {
    deleteTargetModules()
    for (const [resolved, cached] of originals) {
      if (cached) require.cache[resolved] = cached
      else delete require.cache[resolved]
    }
  }

  try {
    const result = run()
    if (result && typeof result.then === "function") {
      return result.finally(restore)
    }
    restore()
    return result
  } catch (error) {
    restore()
    throw error
  }
}

function freshRequire(kind, name) {
  const map = {
    HTTPRequest: {
      original: "../src-cjs/93668_HTTPRequest.js",
      restored: "../src-restored/core/HTTPRequest.js",
    },
    BackendModel: {
      original: "../src-cjs/63333_BackendModel.js",
      restored: "../src-restored/core/BackendModel.js",
    },
    AppModel: {
      original: "../src-cjs/20383_AppModel.js",
      restored: "../src-restored/core/AppModel.js",
    },
  }
  const request = map[name][kind]
  delete require.cache[require.resolve(request)]
  return require(request)
}

function deleteTargetModules() {
  for (const target of TARGETS) {
    delete require.cache[require.resolve(target)]
  }
}

function publicPrototypeMembers(constructor) {
  return Object.getOwnPropertyNames(constructor.prototype)
    .filter((key) => key !== "constructor")
    .sort()
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => {
    if (typeof item === "function") return "[function]"
    if (typeof item === "symbol") return item.toString()
    if (item instanceof Error) return `${item.name}: ${item.message}`
    if (item === undefined) return "__undefined__"
    return item
  }))
}

function installLocalReflectDecorate() {
  Reflect.decorate ??= function decorate(decorators, target, propertyKey, descriptor) {
    let result = descriptor ?? target
    for (let index = decorators.length - 1; index >= 0; index -= 1) {
      const decorator = decorators[index]
      const decorated =
        propertyKey === undefined
          ? decorator(result)
          : decorator(target, propertyKey, result)
      if (decorated !== undefined && decorated !== null) result = decorated
    }
    return result
  }
}
