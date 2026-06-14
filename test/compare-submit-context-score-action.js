"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()
installLocalReflectDecorate()

const core = require("../src-cjs/44656__mod.js")
const restoredRuntime = require("../src-restored/core/RuntimeCore.js")
const { TypesSocial } = require("../src-restored/core/CoreTypes.js")

const TARGETS = [
  "../src-cjs/6248_SubmitContextScoreAction.js",
  "../src-restored/core/SubmitContextScoreAction.js",
]

const originalEnv = {
  legacyGet: core.di.get,
  legacyIsBound: core.di.isBound,
  restoredGet: restoredRuntime.di.get,
  restoredIsBound: restoredRuntime.di.isBound,
}

Promise.resolve()
  .then(async () => {
    await compareScenario("submits context score", {
      contextId: "ctx-1",
      inSolo: false,
      scoreContext: 7,
      leaderboardBound: true,
    })
    await compareScenario("skips solo context", {
      contextId: "ctx-1",
      inSolo: true,
      scoreContext: 7,
      leaderboardBound: true,
    })
    await compareScenario("skips missing context id", {
      contextId: "",
      inSolo: false,
      scoreContext: 7,
      leaderboardBound: true,
    })
    await compareScenario("tolerates missing leaderboard adapter", {
      contextId: "ctx-1",
      inSolo: false,
      scoreContext: 7,
      leaderboardBound: false,
    })

    console.log(
      JSON.stringify(
        {
          module: "SubmitContextScoreAction",
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
  .finally(restoreEnvironment)

async function compareScenario(name, options) {
  const originalResult = await exerciseAction("original", options)
  const restoredResult = await exerciseAction("restored", options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseAction(kind, options) {
  const records = []
  const leaderboard = {
    submit(score, history) {
      records.push(["leaderboard.submit", score, history])
      return "submitted"
    },
  }

  patchRuntimeDi(records, options.leaderboardBound, leaderboard)

  const { SubmitContextScoreAction } = freshRequire(kind)
  const action = new SubmitContextScoreAction()
  Object.defineProperty(action, "model", {
    value: createModel(records, options),
    configurable: true,
  })

  const result = await action.execute()

  return normalize({
    result,
    members: publicPrototypeMembers(SubmitContextScoreAction),
    records,
  })
}

function createModel(records, options) {
  return {
    meta: { touched: true },
    social: {
      context_id: options.contextId,
      inSolo: options.inSolo,
      me: {
        scoreContext: options.scoreContext,
      },
    },
    currentContinent: {
      getHistory() {
        records.push(["getHistory"])
        return { c: 2, l: "Europe", s: [3, 5, 8] }
      },
    },
  }
}

function patchRuntimeDi(records, leaderboardBound, leaderboard) {
  function isBound(token) {
    records.push(["di.isBound", tokenLabel(token)])
    return leaderboardBound && token === TypesSocial.leaderboardContext
  }

  function get(token) {
    records.push(["di.get", tokenLabel(token)])
    if (token === TypesSocial.leaderboardContext) return leaderboard
    return undefined
  }

  core.di.isBound = isBound
  core.di.get = get
  restoredRuntime.di.isBound = isBound
  restoredRuntime.di.get = get
}

function freshRequire(kind) {
  const request =
    kind === "original"
      ? "../src-cjs/6248_SubmitContextScoreAction.js"
      : "../src-restored/core/SubmitContextScoreAction.js"
  deleteTargetModules()
  return require(request)
}

function deleteTargetModules() {
  for (const target of TARGETS) {
    delete require.cache[require.resolve(target)]
  }
}

function restoreEnvironment() {
  core.di.get = originalEnv.legacyGet
  core.di.isBound = originalEnv.legacyIsBound
  restoredRuntime.di.get = originalEnv.restoredGet
  restoredRuntime.di.isBound = originalEnv.restoredIsBound
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

function tokenLabel(token) {
  if (token === TypesSocial.leaderboardContext) return "TypesSocial.leaderboardContext"
  return String(token)
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
