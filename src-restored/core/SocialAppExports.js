/**
 * Restored compatibility barrel for Webpack Module #48616.
 *
 * The pure social score/popup enums are restored here. Heavy app/ad
 * leaves that are not restored yet are exposed lazily from their original CJS
 * leaf modules, while already restored platform leaves point at src-restored.
 */
"use strict"

const ScoreType = {}
ScoreType[(ScoreType.SESSION = 1)] = "SESSION"
ScoreType[(ScoreType.CONTEXT = 2)] = "CONTEXT"
ScoreType[(ScoreType.GLOBAL = 4)] = "GLOBAL"

const ScoreEvent = {
  UPDATED: "UserScore.UPDATED",
  INCREASED: "UserScore.INCREASED",
}

const SOCIAL_POPUP = {}
SOCIAL_POPUP[(SOCIAL_POPUP.ACCEPTED = 0)] = "ACCEPTED"
SOCIAL_POPUP[(SOCIAL_POPUP.CANCELLED = 1)] = "CANCELLED"
SOCIAL_POPUP[(SOCIAL_POPUP.REJECTED = 2)] = "REJECTED"
SOCIAL_POPUP[(SOCIAL_POPUP.FAILED = 3)] = "FAILED"

const SocialEvents = {
  CONTEXT_CHANGE: "context_change",
  SHOW_OVERLAY: "show_social_overlay",
  HIDE_OVERLAY: "hide_social_overlay",
}

exports.ScoreType = ScoreType
exports.ScoreEvent = ScoreEvent
exports.SOCIAL_POPUP = SOCIAL_POPUP
exports.SocialEvents = SocialEvents

defineLazyExport("PageModel", "./PageModel")
defineLazyExport("LoginAction", "./LoginAction")
defineLazyExport("AuthActionBase", "./AuthActionBase")
defineLazyExport("AppModel", "./AppModel")
defineLazyExport("AppModule", "./AppModule")
defineLazyExport("InitAdManagerAction", "../../src-cjs/64122_InitAdManagerAction.js")
defineLazyExport("AdManagerBase", "./AdManagerBase")
defineLazyExport("AdAction", "./AdAction")
defineLazyExport("AdsModule", "./AdsModule")
defineLazyExport("showAd", "./AdHelpers")
defineLazyExport("showReward", "./AdHelpers")
defineLazyExport("CookieDataBase", "./UserDataBase", "UserDataBase")
defineLazyExport("CookieDataWeb", "./UserDataWeb", "UserDataWeb")
defineLazyExport("CookieDataLocalStorage", "./UserDataLocalStorage", "UserDataLocalStorage")
defineLazyExport("UserDataBase", "./UserDataBase")
defineLazyExport("UserDataWeb", "./UserDataWeb")
defineLazyExport("UserDataLocalStorage", "./UserDataLocalStorage")
defineLazyExport("SessionData", "./SessionData")
defineLazyExport("NotificationAction", "./NotificationActions")
defineLazyExport("NAStart", "./NotificationActions")
defineLazyExport("NAFinish", "./NotificationActions")
defineLazyExport("NALeave", "./NotificationActions")
defineLazyExport("NotificationsModule", "./NotificationsModule")
defineLazyExport("SocialModelBase", "./SocialModelBase")
defineLazyExport("LeaderboardGlobalExternal", "./LeaderboardGlobalExternal")
defineLazyExport("LeaderboardContextExternal", "./LeaderboardContextExternal")
defineLazyExport("UserScore", "./UserScore")
defineLazyExport("ReferralRewardsModel", "../../src-cjs/50867_ReferralRewardsModel.js")
defineLazyExport("PaymentsModelBase", "./PaymentsModelBase")

function defineLazyExport(name, modulePath, exportName = name) {
  Object.defineProperty(exports, name, {
    enumerable: true,
    get() {
      return require(modulePath)[exportName]
    },
  })
}
