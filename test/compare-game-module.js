"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { TypesFlow, TypesNotification } = require("../src-cjs/86178__mod.js")
const { GameModule: OriginalGameModule } = require("../src-cjs/55937_GameModule.js")
const { GameModule: RestoredGameModule } = require("../src-restored/core/GameModule.js")
const { NAStartSIO } = require("../src-restored/core/NAStartSIO.js")
const { SIOPreloadAssetsAction } = require("../src-restored/core/SIOPreloadAssetsAction.js")
const { MainAction } = require("../src-restored/core/MainAction.js")

const originalEnv = {
  load: core.di.load,
  restoredLoad: restoredCore.di.load,
}

try {
  const originalBindings = recordBindings(OriginalGameModule)
  const restoredBindings = recordBindings(RestoredGameModule)

  assert.deepEqual(restoredBindings.records, originalBindings.records, "GameModule binding topology differs")
  assert.equal(restoredBindings.targets.get(TypesNotification.start), NAStartSIO)
  assert.equal(restoredBindings.targets.get(TypesFlow.assetsPreload), SIOPreloadAssetsAction)
  assert.equal(restoredBindings.targets.get(TypesFlow.mainAction), MainAction)

  console.log(
    JSON.stringify(
        {
          module: "GameModule",
          bindingEvents: restoredBindings.records.length,
          restoredTargetsChecked: 3,
          status: "ok",
        },
      null,
      2,
    ),
  )
} catch (error) {
  console.error(error)
  process.exitCode = 1
} finally {
  restoreEnvironment()
}

function recordBindings(containerModule) {
  const records = []
  const targets = new Map()

  core.di.load = restoredCore.di.load = function load(...modules) {
    records.push(["di.load", modules.length])
  }

  containerModule.registry(
    (token) => {
      records.push(["bind", tokenLabel(token)])
      return makeBindSyntax(records, targets, token)
    },
    (token) => records.push(["unbind", tokenLabel(token)]),
    (token) => {
      records.push(["isBound", tokenLabel(token)])
      return token === TypesNotification.start
    },
    (token) => {
      records.push(["rebind", tokenLabel(token)])
      return makeBindSyntax(records, targets, token)
    },
  )

  return { records, targets }
}

function makeBindSyntax(records, targets, token) {
  const syntax = {
    to(target) {
      records.push(["to"])
      targets.set(token, target)
      return syntax
    },
  }

  return syntax
}

function restoreEnvironment() {
  core.di.load = originalEnv.load
  restoredCore.di.load = originalEnv.restoredLoad
}

function tokenLabel(token) {
  if (token === TypesNotification.start) return "TypesNotification.start"
  if (token === TypesFlow.assetsPreload) return "TypesFlow.assetsPreload"
  if (token === TypesFlow.mainAction) return "TypesFlow.mainAction"
  return String(token)
}
