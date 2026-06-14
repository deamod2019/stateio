"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { UIEvents } = require("../src-cjs/83430_InversifyContext.js")
const originalRuntime = require("../src-cjs/84194__mod.js")
const restoredRuntime = require("../src-restored/core/RuntimeUtils.js")
const { PopupType } = require("../src-cjs/30107_PopupType.js")
const { GenerateShareImageAction: OriginalGenerateShareImageAction } = require("../src-cjs/45724_GenerateShareImageAction.js")
const { LevelCompletedPopupAction: OriginalLevelCompletedPopupAction } = require("../src-cjs/87460_LevelCompletedPopupAction.js")
const { GenerateShareImageAction: RestoredGenerateShareImageAction } = require("../src-restored/core/GenerateShareImageAction.js")
const { LevelCompletedPopupAction: RestoredLevelCompletedPopupAction } = require("../src-restored/core/LevelCompletedPopupAction.js")

const originalEnv = {
  diGet: core.di.get,
  restoredDiGet: restoredCore.di.get,
  originalLogDebug: originalRuntime.log.debug,
  originalLogWarn: originalRuntime.log.warn,
  restoredLogDebug: restoredRuntime.log.debug,
  restoredLogWarn: restoredRuntime.log.warn,
}

let currentHarness = null

assert.deepEqual(
  publicPrototypeMembers(RestoredLevelCompletedPopupAction),
  publicPrototypeMembers(OriginalLevelCompletedPopupAction),
  "LevelCompletedPopupAction prototype surface differs",
)

Promise.resolve()
  .then(async () => {
    await compareScenario("web platform generates share image", {
      platform: "web",
      imageMode: "success",
    })
    await compareScenario("ya platform skips share image generation", {
      platform: "ya",
      imageMode: "success",
    })
    await compareScenario("failed image generation logs warning and continues", {
      platform: "web",
      imageMode: "throw",
    })

    console.log(
      JSON.stringify(
        {
          module: "LevelCompletedPopupAction",
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
  .finally(restoreEnvironment)

async function compareScenario(name, options) {
  restoreEnvironment()
  const originalResult = normalize(await exerciseAction(OriginalLevelCompletedPopupAction, options))
  restoreEnvironment()
  const restoredResult = normalize(await exerciseAction(RestoredLevelCompletedPopupAction, options))
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseAction(Klass, options) {
  const records = []
  currentHarness = { records, imageMode: options.imageMode }
  patchEnvironment()

  const action = new Klass()
  action.model = {
    currentContinent: {
      data: { id: "Europe" },
    },
  }
  action.social = {
    socialPlatform: options.platform,
    me: {
      scoreSession: 123.6,
    },
  }
  action.dispatch = (eventName, payload) => {
    records.push(["dispatch", eventName, summarizePayload(payload)])
    assert.equal(eventName, UIEvents.POPUP)
    assert.equal(payload.id, PopupType.LEVEL_COMPLETED)
    payload.props.onContinue("shared-value")
  }

  const result = await action.execute()
  return { records, result }
}

function patchEnvironment() {
  core.di.get = restoredCore.di.get = function get(token) {
    currentHarness.records.push(["di.get", tokenLabel(token)])
    return {
      async run(data) {
        currentHarness.records.push(["generate.run", data])
        if (currentHarness.imageMode === "throw") throw new Error("image failed")
        return { image: "data:image/png;base64,abc" }
      },
    }
  }
  const debug = function debug(...args) {
    currentHarness.records.push(["log.debug", ...args])
  }
  const warn = function warn(...args) {
    currentHarness.records.push(["log.warn", args[0], String(args[1]?.message || args[1])])
  }
  originalRuntime.log.debug = debug
  originalRuntime.log.warn = warn
  restoredRuntime.log.debug = debug
  restoredRuntime.log.warn = warn
}

function restoreEnvironment() {
  core.di.get = originalEnv.diGet
  restoredCore.di.get = originalEnv.restoredDiGet
  originalRuntime.log.debug = originalEnv.originalLogDebug
  originalRuntime.log.warn = originalEnv.originalLogWarn
  restoredRuntime.log.debug = originalEnv.restoredLogDebug
  restoredRuntime.log.warn = originalEnv.restoredLogWarn
  currentHarness = null
}

function summarizePayload(payload) {
  return {
    id: payload.id,
    props: {
      levelName: payload.props.levelName,
      points: payload.props.points,
      shareImage: payload.props.shareImage,
      onContinue: typeof payload.props.onContinue,
    },
  }
}

function tokenLabel(token) {
  if (token === OriginalGenerateShareImageAction || token === RestoredGenerateShareImageAction) {
    return "GenerateShareImageAction"
  }
  return String(token)
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (item === undefined) return "__undefined__"
      return item
    }),
  )
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
