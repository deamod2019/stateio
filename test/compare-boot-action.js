"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { Localize } = require("../src-cjs/86125__mod.js")
const originalRuntime = require("../src-cjs/84194__mod.js")
const restoredRuntime = require("../src-restored/core/RuntimeUtils.js")
const {
  TypesAds,
  TypesAnalytics,
  TypesApp,
  TypesAudio,
  TypesCore,
  TypesFlow,
  TypesSocial,
} = require("../src-cjs/86178__mod.js")
const { AdManagerBase: OriginalAdManagerBase } = require("../src-cjs/48616__mod.js")
const { AdManagerBase: RestoredAdManagerBase } = require("../src-restored/core/SocialAppExports.js")
const { BootAction: OriginalBootAction } = require("../src-cjs/19305_BootAction.js")
const { BootAction: RestoredBootAction } = require("../src-restored/core/BootAction.js")
const { BOOT_CONFIG } = require("../src-restored/core/BootConfig.js")

const originalEnv = {
  diGet: core.di.get,
  diRebind: core.di.rebind,
  diIsBound: core.di.isBound,
  restoredDiGet: restoredCore.di.get,
  restoredDiRebind: restoredCore.di.rebind,
  restoredDiIsBound: restoredCore.di.isBound,
  localizeAddTemplates: Localize.addTemplates,
  localizeDefaultLocale: Localize.defaultLocale,
  originalLogTrace: originalRuntime.log.trace,
  restoredLogTrace: restoredRuntime.log.trace,
  dateNow: Date.now,
  originalSystemStart: OriginalAdManagerBase.config.throttling.interstitial.systemStart,
  restoredSystemStart: RestoredAdManagerBase.config.throttling.interstitial.systemStart,
}

Promise.resolve()
  .then(async () => {
    assert.deepEqual(
      publicPrototypeMembers(RestoredBootAction),
      publicPrototypeMembers(OriginalBootAction),
      "BootAction prototype surface differs",
    )

    const originalResult = normalize(await exercise(OriginalBootAction, OriginalAdManagerBase, originalRuntime, core))
    const restoredResult = normalize(await exercise(RestoredBootAction, RestoredAdManagerBase, restoredRuntime, restoredCore))
    assert.deepEqual(restoredResult, originalResult, "BootAction execute behavior differs")
    assert.deepEqual(restoredResult.capturedConfig, BOOT_CONFIG, "restored BootConfig differs from executed config")

    console.log(
      JSON.stringify(
        {
          module: "BootAction",
          configKeys: Object.keys(restoredResult.capturedConfig),
          records: restoredResult.records.length,
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

async function exercise(BootAction, AdManagerBase, runtime, coreRuntime) {
  restoreEnvironment()
  const records = []
  let capturedConfig = null
  let configFromGet = null
  let assetsProcessResolve
  let adsInitResolve

  Date.now = () => 123456
  Localize.defaultLocale = "en_US"
  Localize.addTemplates = (templates) => {
    records.push(["Localize.addTemplates", Object.keys(templates).length])
  }
  runtime.log.trace = (message) => {
    records.push(["log.trace", message])
  }
  coreRuntime.di.isBound = () => true
  coreRuntime.di.rebind = (token) => {
    records.push(["di.rebind", tokenLabel(token)])
    return {
      toConstantValue(value) {
        capturedConfig = value
        configFromGet = value
        records.push(["toConstantValue", Object.keys(value)])
        return this
      },
    }
  }
  coreRuntime.di.get = (token) => {
    records.push(["di.get", tokenLabel(token)])
    if (token === TypesCore.gameConfig) return configFromGet
    if (token === TypesAnalytics.tracker) {
      return {
        addProvider(provider) {
          records.push(["tracker.addProvider", typeof provider?.track])
        },
      }
    }
    if (token === TypesSocial.refRewardsModel) {
      return {
        init() {
          records.push(["refRewards.init"])
        },
      }
    }
    if (token === TypesAudio.model) {
      return {
        async activateBackgroundMusic() {
          records.push(["audio.activateBackgroundMusic"])
        },
      }
    }
    return {
      async run(data) {
        records.push(["run", tokenLabel(token), normalize(data)])
        if (token === TypesFlow.assetsProcess) {
          await new Promise((resolve) => {
            assetsProcessResolve = resolve
          })
        }
        if (token === TypesAds.initAction) {
          await new Promise((resolve) => {
            adsInitResolve = resolve
          })
        }
        return `result:${tokenLabel(token)}`
      },
    }
  }

  AdManagerBase.config.throttling.interstitial.systemStart = 0

  const action = new BootAction()
  action.page = {
    assetsProgress: 0,
    bus: { params: { level: "boot-param" } },
    async isBusReadyAsync() {
      records.push(["page.isBusReadyAsync"])
    },
  }
  action.social = {
    me: { id: "user-1", name: "Ada", photo: "photo.png" },
    async startGameAsync() {
      records.push(["social.startGameAsync"])
    },
    async init(params) {
      records.push(["social.init", params])
    },
  }

  const executeResult = await action.execute()
  records.push(["page.assetsProgress", action.page.assetsProgress])
  records.push(["systemStart", AdManagerBase.config.throttling.interstitial.systemStart])
  if (assetsProcessResolve) assetsProcessResolve()
  if (adsInitResolve) adsInitResolve()
  await Promise.resolve()

  return {
    executeResult,
    capturedConfig,
    records,
  }
}

function restoreEnvironment() {
  core.di.get = originalEnv.diGet
  core.di.rebind = originalEnv.diRebind
  core.di.isBound = originalEnv.diIsBound
  restoredCore.di.get = originalEnv.restoredDiGet
  restoredCore.di.rebind = originalEnv.restoredDiRebind
  restoredCore.di.isBound = originalEnv.restoredDiIsBound
  Localize.addTemplates = originalEnv.localizeAddTemplates
  Localize.defaultLocale = originalEnv.localizeDefaultLocale
  originalRuntime.log.trace = originalEnv.originalLogTrace
  restoredRuntime.log.trace = originalEnv.restoredLogTrace
  Date.now = originalEnv.dateNow
  OriginalAdManagerBase.config.throttling.interstitial.systemStart = originalEnv.originalSystemStart
  RestoredAdManagerBase.config.throttling.interstitial.systemStart = originalEnv.restoredSystemStart
}

function tokenLabel(token) {
  if (token === TypesCore.gameConfig) return "TypesCore.gameConfig"
  if (token === TypesAnalytics.tracker) return "TypesAnalytics.tracker"
  if (token === TypesApp.loginAction) return "TypesApp.loginAction"
  if (token === TypesFlow.assetsPreload) return "TypesFlow.assetsPreload"
  if (token === TypesFlow.assetsProcess) return "TypesFlow.assetsProcess"
  if (token === TypesFlow.UI.setupAction) return "TypesFlow.UI.setupAction"
  if (token === TypesFlow.mainAction) return "TypesFlow.mainAction"
  if (token === TypesAds.initAction) return "TypesAds.initAction"
  if (token === TypesAudio.initAction) return "TypesAudio.initAction"
  if (token === TypesAudio.model) return "TypesAudio.model"
  if (token === TypesSocial.refRewardsModel) return "TypesSocial.refRewardsModel"
  return String(token)
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(JSON.stringify(value))
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
