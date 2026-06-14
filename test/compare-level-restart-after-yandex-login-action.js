"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { LevelStartActionSIO: OriginalLevelStartActionSIO } = require("../src-cjs/99629_LevelStartActionSIO.js")
const { LevelRestartAfterYandexLoginAction: OriginalLevelRestartAfterYandexLoginAction } = require("../src-cjs/70055_LevelRestartAfterYandexLoginAction.js")
const { LevelStartActionSIO: RestoredLevelStartActionSIO } = require("../src-restored/core/LevelStartActionSIO.js")
const { LevelRestartAfterYandexLoginAction: RestoredLevelRestartAfterYandexLoginAction } = require("../src-restored/core/LevelRestartAfterYandexLoginAction.js")

const originalSnapshot = snapshotAction(
  OriginalLevelRestartAfterYandexLoginAction,
  OriginalLevelStartActionSIO,
)
const restoredSnapshot = snapshotAction(
  RestoredLevelRestartAfterYandexLoginAction,
  RestoredLevelStartActionSIO,
)

assert.deepEqual(restoredSnapshot, originalSnapshot)

console.log(
  JSON.stringify(
    {
      module: "LevelRestartAfterYandexLoginAction",
      prototype: restoredSnapshot.prototype,
      status: "ok",
    },
    null,
    2,
  ),
)

function snapshotAction(ActionClass, BaseClass) {
  const action = new ActionClass()

  return normalize({
    prototype: publicPrototypeMembers(ActionClass),
    needToShowAD: action.needToShowAD(),
    inheritsFromLevelStartActionSIO: action instanceof BaseClass,
    inheritedBeforeLaunch: ActionClass.prototype.beforeLaunch === BaseClass.prototype.beforeLaunch,
    inheritedLaunch: ActionClass.prototype.launch === BaseClass.prototype.launch,
    inheritedSendPush: ActionClass.prototype.sendPush === BaseClass.prototype.sendPush,
    hasOwnNeedToShowAD: Object.prototype.hasOwnProperty.call(
      ActionClass.prototype,
      "needToShowAD",
    ),
  })
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
