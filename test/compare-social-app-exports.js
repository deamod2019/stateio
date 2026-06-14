"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const original = require("../src-cjs/48616__mod.js")
const restored = require("../src-restored/core/SocialAppExports.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "SocialAppExports key order differs")

for (const key of ["ScoreType", "ScoreEvent", "SOCIAL_POPUP", "SocialEvents"]) {
  assert.deepEqual(restored[key], original[key], `${key} differs from original`)
}

assert.equal(restored.LoginAction, require("../src-restored/core/LoginAction.js").LoginAction)
assert.equal(restored.AuthActionBase, require("../src-restored/core/AuthActionBase.js").AuthActionBase)
assert.equal(restored.PageModel, require("../src-restored/core/PageModel.js").PageModel)
assert.equal(restored.AppModule, require("../src-restored/core/AppModule.js").AppModule)
assert.equal(restored.AdManagerBase, require("../src-restored/core/AdManagerBase.js").AdManagerBase)
assert.equal(restored.AdAction, require("../src-restored/core/AdAction.js").AdAction)
assert.equal(restored.AdsModule, require("../src-restored/core/AdsModule.js").AdsModule)
assert.equal(restored.showAd, require("../src-restored/core/AdHelpers.js").showAd)
assert.equal(restored.showReward, require("../src-restored/core/AdHelpers.js").showReward)
assert.equal(restored.CookieDataBase, require("../src-restored/core/UserDataBase.js").UserDataBase)
assert.equal(restored.CookieDataWeb, require("../src-restored/core/UserDataWeb.js").UserDataWeb)
assert.equal(
  restored.CookieDataLocalStorage,
  require("../src-restored/core/UserDataLocalStorage.js").UserDataLocalStorage,
)
assert.equal(restored.UserDataBase, require("../src-restored/core/UserDataBase.js").UserDataBase)
assert.equal(restored.UserDataWeb, require("../src-restored/core/UserDataWeb.js").UserDataWeb)
assert.equal(
  restored.UserDataLocalStorage,
  require("../src-restored/core/UserDataLocalStorage.js").UserDataLocalStorage,
)
assert.equal(restored.SessionData, require("../src-restored/core/SessionData.js").SessionData)
assert.equal(
  restored.NotificationAction,
  require("../src-restored/core/NotificationActions.js").NotificationAction,
)
assert.equal(restored.NAStart, require("../src-restored/core/NotificationActions.js").NAStart)
assert.equal(restored.NAFinish, require("../src-restored/core/NotificationActions.js").NAFinish)
assert.equal(restored.NALeave, require("../src-restored/core/NotificationActions.js").NALeave)
assert.equal(
  restored.NotificationsModule,
  require("../src-restored/core/NotificationsModule.js").NotificationsModule,
)
assert.equal(restored.SocialModelBase, require("../src-restored/core/SocialModelBase.js").SocialModelBase)
assert.equal(
  restored.LeaderboardGlobalExternal,
  require("../src-restored/core/LeaderboardGlobalExternal.js").LeaderboardGlobalExternal,
)
assert.equal(
  restored.LeaderboardContextExternal,
  require("../src-restored/core/LeaderboardContextExternal.js").LeaderboardContextExternal,
)
assert.equal(restored.UserScore, require("../src-restored/core/UserScore.js").UserScore)
assert.equal(restored.PaymentsModelBase, require("../src-restored/core/PaymentsModelBase.js").PaymentsModelBase)

for (const key of [
  "PageModel",
  "AuthActionBase",
  "AppModel",
  "AppModule",
  "InitAdManagerAction",
  "NotificationAction",
  "NAStart",
  "NAFinish",
  "NALeave",
  "NotificationsModule",
  "ReferralRewardsModel",
]) {
  assert.equal(typeof restored[key], typeof original[key], `${key} export type differs`)
}

console.log(
  JSON.stringify(
    {
      module: "SocialAppExports",
      exports: Object.keys(restored).length,
      status: "ok",
    },
    null,
    2,
  ),
)
