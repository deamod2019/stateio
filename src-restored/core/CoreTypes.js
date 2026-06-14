/**
 * Restored source for the shared type/event barrel behind Webpack Module #86178.
 *
 * These are string-valued DI/event tokens plus the numeric ad response enum.
 */
"use strict"

const AdEvents = {
  STARTED: "AdEvents.Started",
  ENDED: "AdEvents.Ended",
  BANNER_SHOWN: "AdEvents.BannerShown",
  BANNER_HIDDEN: "AdEvents.BannerHidden",
}

const AdResponse = {}
AdResponse[(AdResponse.UNKNOWN = 0)] = "UNKNOWN"
AdResponse[(AdResponse.NOT_SUPPORTED = 1)] = "NOT_SUPPORTED"
AdResponse[(AdResponse.PLAYED = 2)] = "PLAYED"
AdResponse[(AdResponse.THROTTLED = 3)] = "THROTTLED"
AdResponse[(AdResponse.NO_FILL = 4)] = "NO_FILL"
AdResponse[(AdResponse.CANCELLED = 5)] = "CANCELLED"
AdResponse[(AdResponse.FAILED = 6)] = "FAILED"

const Types2D = {
  screenContainer: "2d.screencontainer",
  overlay: "2d.overlay",
  finger: "2d.finger",
  preloadAssetsAction: "2d.preload",
  screenShotAction: "2d.screenshot",
  spriteRenderer: "2d.spriteRenderer",
  rootView: "2d.rootView",
  spinner: "2d.spinner",
  blackSquareGraphics: "2d.blackSquareGraphics",
  whiteSquareGraphics: "2d.whiteSquareGraphics",
  userPic: "2d.userPic",
  circleAvatar: "2d.circleAvatar",
}

const TypesAnalytics = {
  tracker: "analytics.tracker",
}

const TypesAudio = {
  model: "audio.model",
  initAction: "audio.initAction",
  soundAction: "audio.soundAction",
  musicAction: "audio.musicAction",
}

const TypesCore = {
  gameConfig: "app.data",
  dispatcher: "core.dispatcher",
  eventProvider: "core.eventProvider",
  runtimeData: "core.runtimeData",
}

const TypesFlow = {
  boot: "flow.boot",
  mainAction: "flow.gameAction",
  assetsPreload: "assets.preload",
  assetsProcess: "assets.process",
  LoadRemoteConfigAction: "flow.remoteConfigAction",
  LevelStart: "flow.levelStart",
  LevelRestart: "flow.levelRestart",
  LevelNext: "flow.LevelNext",
  LevelEnd: "flow.levelEnd",
  PlayWith: "flow.PlayWith",
  share: "flow.share",
  UI: {
    setupAction: "ui.setupAction",
    startScreenAction: "ui.startScreenAction",
    endScreenAction: "ui.endScreenAction",
  },
}

const TypesPromo = {
  config: "cross.config",
  component: "cross.component",
  random: "cross.randomized",
  randomComponent: "cross.randomGameConf",
}

const TypesSocial = {
  model: "social.model",
  vibrationManager: "social.vibrationManager",
  auth: "social.auth",
  cookie: "social.cookie",
  user: "social.user",
  payments: "social.payments",
  refRewardsModel: "social.irewards",
  notifications: "social.notifications",
  dummyUser: "social.dummyUser",
  userScore: "social.user.score",
  leaderboardGlobal: "social.leaderboard.global",
  leaderboardContext: "social.leaderboard.context",
  pauseAction: "social.pauseAction",
}

const TypesNotification = {
  start: "ntf.start",
  finish: "ntf.finish",
  leave: "ntf.leave",
  i18n: "ntf.localizations",
}

const TypesAds = {
  initAction: "ads.initAction",
  manager: "ads.manager",
  i18n: "ads.i18n",
  adAction: "ads.adAction",
}

const TypesApp = {
  model: "app.model",
  pageModel: "page.model",
  loginAction: "app.loginAction",
  authAction: "app.authAction",
}

const TypesUI = {
  root: "ui.root",
  uiRootClass: "ui.root.class",
  setupAction: "ui.setupAction",
  startScreenAction: "ui.startScreenAction",
  endScreenAction: "ui.endScreenAction",
  events: {
    SCREEN_CHANGED: "UIEvents.SCREEN_CHANGED",
    POPUP: "UIEvents.POPUP",
    SHOW_CUSTOM_ALERT: "UIEvents.SHOW_CUSTOM_ALERT",
  },
  screen: {
    GAME_OVER: "ui.screen.GAME_OVER",
    HOME: "ui.screen.HOME",
    WIN: "ui.screen.WIN",
    SHOP: "ui.screen.SHOP",
    LEADERBOARD: "ui.screen.LEADERBOARD",
    GAMEPLAY: "ui.screen.GAMEPLAY",
  },
  customComponent: {
    SOCIAL_BANNERS: "ui.customComponent.SOCIAL_BANNERS",
  },
}

module.exports = {
  AdEvents,
  AdResponse,
  Types2D,
  TypesAnalytics,
  TypesAudio,
  TypesCore,
  TypesFlow,
  TypesPromo,
  TypesSocial,
  TypesNotification,
  TypesAds,
  TypesApp,
  TypesUI,
}
