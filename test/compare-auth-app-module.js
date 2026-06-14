"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()
installLocalReflectDecorate()

const TARGETS = [
  "../src-cjs/65248_AuthActionBase.js",
  "../src-restored/core/AuthActionBase.js",
  "../src-cjs/60320_AppModule.js",
  "../src-restored/core/AppModule.js",
]

Promise.resolve()
  .then(async () => {
    assert.deepEqual(await exerciseAuthActionBase("restored", {}), await exerciseAuthActionBase("original", {}))
    assert.deepEqual(
      await exerciseAuthActionBase("restored", { firstResponseWithoutToken: true }),
      await exerciseAuthActionBase("original", { firstResponseWithoutToken: true }),
    )
    assert.deepEqual(
      await exerciseAuthActionBase("restored", { missingToken: true }),
      await exerciseAuthActionBase("original", { missingToken: true }),
    )
    assert.deepEqual(
      await exerciseAuthActionBase("restored", { getAuthThrows: true }),
      await exerciseAuthActionBase("original", { getAuthThrows: true }),
    )
    assert.deepEqual(
      await exerciseAuthActionBase("restored", { signInRejects: true }),
      await exerciseAuthActionBase("original", { signInRejects: true }),
    )
    assert.deepEqual(
      await exerciseLoadProfileImage("restored", {}),
      await exerciseLoadProfileImage("original", {}),
    )
    assert.deepEqual(
      await exerciseLoadProfileImage("restored", { fetchRejects: true }),
      await exerciseLoadProfileImage("original", { fetchRejects: true }),
    )
    assert.deepEqual(exerciseAppModule("restored"), exerciseAppModule("original"))
    assertRestoredAppModuleTargets()

    console.log(
      JSON.stringify(
        {
          module: "AuthActionBase/AppModule",
          scenarios: 8,
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

async function exerciseAuthActionBase(kind, options) {
  const records = []
  const mocks = createMocks(records, options)

  return withMockedModules(mocks, async () => {
    const { AuthActionBase } = freshRequire(kind, "AuthActionBase")

    class TestAuthAction extends AuthActionBase {
      async getPlayerInfo() {
        records.push(["getPlayerInfo"])
        return {
          id: "user-1",
          name: "Ada",
          photo: "https://photo.example/avatar.png",
          signature: "sig-1",
        }
      }
    }

    const action = new TestAuthAction()
    Object.defineProperty(action, "model", {
      value: makeModel(records, options),
      configurable: true,
    })
    await action.execute()

    return normalize({
      members: publicPrototypeMembers(AuthActionBase),
      modelSignature: action.model.signature,
      records,
    })
  })
}

async function exerciseLoadProfileImage(kind, options) {
  const records = []
  const mocks = createMocks(records, options)

  return withFetchAndFileReader(records, options, async () => {
    return withMockedModules(mocks, async () => {
      const { AuthActionBase } = freshRequire(kind, "AuthActionBase")
      const action = new AuthActionBase()

      const loaded = await action.loadProfileImage("https://photo.example/avatar.png")
      const skipped = await action.loadProfileImage("")
      const authResult = await action.auth("a", "b")

      return normalize({
        loaded,
        skipped,
        authResult,
        records,
      })
    })
  })
}

function exerciseAppModule(kind) {
  const { AppModule } = freshRequire(kind, "AppModule")
  const { TypesApp } = require("../src-restored/core/CoreTypes.js")
  const records = []

  AppModule.registry((token) => {
    records.push(["bind", tokenLabel(token, TypesApp)])
    return makeBindSyntax(records)
  })

  return {
    records,
  }
}

function assertRestoredAppModuleTargets() {
  const { AppModule } = require("../src-restored/core/AppModule.js")
  const { TypesApp } = require("../src-restored/core/CoreTypes.js")
  const { AppModel } = require("../src-restored/core/AppModel.js")
  const { LoginAction } = require("../src-restored/core/LoginAction.js")
  const { PageModel } = require("../src-restored/core/PageModel.js")
  const targets = new Map()

  AppModule.registry((token) => ({
    to(target) {
      targets.set(token, target)
      return {
        inSingletonScope() {
          return this
        },
      }
    },
  }))

  assert.equal(targets.get(TypesApp.pageModel), PageModel)
  assert.equal(targets.get(TypesApp.model), AppModel)
  assert.equal(targets.get(TypesApp.loginAction), LoginAction)
}

function makeModel(records, options) {
  return {
    firebaseApp: { name: "firebase-app" },
    signature: undefined,

    async post(path, payload, withAuthorization) {
      records.push(["model.post", path, payload, withAuthorization])
      if (options.missingToken) return {}
      if (options.firstResponseWithoutToken && records.filter((item) => item[0] === "model.post").length === 1) {
        return { ok: true }
      }
      return { token: "custom-token" }
    },
  }
}

function createMocks(records, options) {
  return {
    "../src-cjs/84194__mod.js": makeLogMock(records),
    "../src-restored/core/RuntimeUtils.js": makeLogMock(records),
    "../src-cjs/56467__mod.js": {
      getAuth(firebaseApp) {
        records.push(["getAuth", firebaseApp])
        if (options.getAuthThrows) throw new Error("getAuth failed")
        return { auth: true, firebaseApp }
      },
      signInWithCustomToken(auth, token) {
        records.push(["signInWithCustomToken", auth, token])
        return options.signInRejects
          ? Promise.reject(new Error("sign-in failed"))
          : Promise.resolve({ signedIn: true, auth, token })
      },
    },
    "../src-restored/core/FirebaseAuthRuntime.js": {
      getAuth(firebaseApp) {
        records.push(["getAuth", firebaseApp])
        if (options.getAuthThrows) throw new Error("getAuth failed")
        return { auth: true, firebaseApp }
      },
      signInWithCustomToken(auth, token) {
        records.push(["signInWithCustomToken", auth, token])
        return options.signInRejects
          ? Promise.reject(new Error("sign-in failed"))
          : Promise.resolve({ signedIn: true, auth, token })
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

async function withFetchAndFileReader(records, options, run) {
  const originalFetch = global.fetch
  const originalFileReader = global.FileReader

  global.fetch = async (url) => {
    records.push(["fetch", url])
    if (options.fetchRejects) throw new Error("fetch failed")
    return {
      async blob() {
        records.push(["blob"])
        return { blob: true }
      },
    }
  }

  global.FileReader = class FileReader {
    readAsDataURL(blob) {
      records.push(["readAsDataURL", blob])
      this.result = "data:image/png;base64,avatar"
      this.onloadend()
    }
  }

  try {
    return await run()
  } finally {
    global.fetch = originalFetch
    global.FileReader = originalFileReader
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
    AuthActionBase: {
      original: "../src-cjs/65248_AuthActionBase.js",
      restored: "../src-restored/core/AuthActionBase.js",
    },
    AppModule: {
      original: "../src-cjs/60320_AppModule.js",
      restored: "../src-restored/core/AppModule.js",
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

function makeBindSyntax(records) {
  const syntax = {
    to(target) {
      records.push(["to", typeof target])
      return syntax
    },
    inSingletonScope() {
      records.push(["inSingletonScope"])
      return syntax
    },
  }

  return syntax
}

function tokenLabel(token, typesApp) {
  for (const [name, value] of Object.entries(typesApp)) {
    if (token === value) return `TypesApp.${name}`
  }
  return String(token)
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
