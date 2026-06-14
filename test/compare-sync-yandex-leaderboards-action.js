"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const TypesSocial = {
  leaderboardGlobal: Symbol("TypesSocial.leaderboardGlobal"),
  model: Symbol("TypesSocial.model"),
}

const TARGETS = [
  "../src-cjs/25556_SyncYandexLeaderboardsAction.js",
  "../src-restored/core/SyncYandexLeaderboardsAction.js",
]

Promise.resolve()
  .then(async () => {
    await compareScenario("missing authorizeUser returns false", {
      authorize: undefined,
      oldGlobal: 5,
      session: 9,
      syncedGlobal: 1,
    })
    await compareScenario("authorization false skips sync", {
      authorize: false,
      oldGlobal: 5,
      session: 9,
      syncedGlobal: 1,
    })
    await compareScenario("authorization true backfills best known score", {
      authorize: true,
      oldGlobal: 5,
      session: 12,
      syncedGlobal: 7,
    })
    await compareScenario("authorization true skips backfill when synced score wins", {
      authorize: true,
      oldGlobal: 5,
      session: 12,
      syncedGlobal: 20,
    })

    console.log(
      JSON.stringify(
        {
          module: "SyncYandexLeaderboardsAction",
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

async function compareScenario(name, options) {
  const originalResult = await exercise(loadOriginal, options)
  const restoredResult = await exercise(loadRestored, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exercise(loadModule, options) {
  const records = []
  const mocks = createMocks(records)

  return withMockedModules(mocks, async () => {
    const { SyncYandexLeaderboardsAction } = loadModule()
    const action = new SyncYandexLeaderboardsAction()
    const social = {
      me: {
        scoreGlobal: options.oldGlobal,
        scoreSession: options.session,
      },
      async syncLeaderboards() {
        records.push(["social.syncLeaderboards"])
        social.me.scoreGlobal = options.syncedGlobal
      },
    }

    if (options.authorize !== undefined) {
      social.authorizeUser = async () => {
        records.push(["social.authorizeUser"])
        return options.authorize
      }
    }

    action.social = social
    const result = await action.execute()

    return normalize({
      result,
      finalGlobal: social.me.scoreGlobal,
      records,
    })
  })
}

function loadOriginal() {
  deleteTargetModules()
  return require("../src-cjs/25556_SyncYandexLeaderboardsAction.js")
}

function loadRestored() {
  deleteTargetModules()
  return require("../src-restored/core/SyncYandexLeaderboardsAction.js")
}

function createMocks(records) {
  function Action() {}

  return {
    "../src-cjs/44656__mod.js": {
      Action,
      di: {
        get(token) {
          records.push(["di.get", tokenLabel(token)])
          return {
            async submit(score) {
              records.push(["leaderboard.submit", score])
            },
          }
        },
      },
    },
    "../src-cjs/86178__mod.js": { TypesSocial },
    "../src-restored/core/CoreTypes.js": { TypesSocial },
    "../src-restored/core/RuntimeCore.js": {
      Action,
      di: {
        get(token) {
          records.push(["di.get", tokenLabel(token)])
          return {
            async submit(score) {
              records.push(["leaderboard.submit", score])
            },
          }
        },
      },
    },
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

async function withMockedModules(mocks, run) {
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
  }
}

function deleteTargetModules() {
  for (const target of TARGETS) {
    delete require.cache[require.resolve(target)]
  }
}

function tokenLabel(token) {
  if (typeof token === "symbol") return token.toString()
  return String(token)
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => {
    if (typeof item === "function") return "[function]"
    if (typeof item === "symbol") return item.toString()
    if (item === undefined) return "__undefined__"
    return item
  }))
}
