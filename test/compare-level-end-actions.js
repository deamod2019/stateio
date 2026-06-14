"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { UIEvents } = require("../src-cjs/83430_InversifyContext.js")
const {
  TypesAnalytics,
  TypesFlow,
  TypesNotification,
  TypesSocial,
} = require("../src-cjs/86178__mod.js")
const { PopupType } = require("../src-cjs/30107_PopupType.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")
const { GameState } = require("../src-cjs/65370_GameState.js")
const { SIOConstants } = require("../src-cjs/44365_SIOConstants.js")
const { SIOConstants: RestoredSIOConstants } = require("../src-restored/core/SIOConstants.js")
const { LevelEndAction: OriginalLevelEndAction } = require("../src-cjs/61201_LevelEndAction.js")
const { LevelEndActionSIO: OriginalLevelEndActionSIO } = require("../src-cjs/24294_LevelEndActionSIO.js")
const { LevelEndAction: RestoredLevelEndAction } = require("../src-restored/core/LevelEndAction.js")
const { LevelEndActionSIO: RestoredLevelEndActionSIO } = require("../src-restored/core/LevelEndActionSIO.js")

const originalDeps = {
  LevelEndAction: OriginalLevelEndAction,
  LevelEndActionSIO: OriginalLevelEndActionSIO,
  SIOConstants,
}
const restoredDeps = {
  LevelEndAction: RestoredLevelEndAction,
  LevelEndActionSIO: RestoredLevelEndActionSIO,
  SIOConstants: RestoredSIOConstants,
}

const originalEnv = {
  diGet: core.di.get,
  diIsBound: core.di.isBound,
  restoredDiGet: restoredCore.di.get,
  restoredDiIsBound: restoredCore.di.isBound,
}
let currentHarness = null

assert.deepEqual(
  publicPrototypeMembers(restoredDeps.LevelEndAction),
  publicPrototypeMembers(originalDeps.LevelEndAction),
  "restored LevelEndAction public prototype differs",
)
assert.deepEqual(
  publicPrototypeMembers(restoredDeps.LevelEndActionSIO),
  publicPrototypeMembers(originalDeps.LevelEndActionSIO),
  "restored LevelEndActionSIO public prototype differs",
)

const pendingComparisons = []

compareScenario("LevelEndAction detects win state across social modes", async (deps) => {
  const h = makeGenericEndHarness(deps.LevelEndAction)
  const results = []

  h.action.data = true
  results.push(["explicit", h.action.isWon()])

  h.action.data = undefined
  h.action.social.inSolo = true
  h.action.social.me.scoreSession = 20
  h.action.social.me.scoreGlobal = 10
  results.push(["solo", h.action.isWon()])

  h.action.social.inSolo = false
  h.action.social.inBlindContext = true
  results.push(["blind", h.action.isWon()])

  h.action.social.inBlindContext = false
  h.action.social.inGroup = true
  h.action.social.me.scoreContext = 15
  h.action.social.me.scoreSession = 12
  h.action.social.contextPlayers = [{ scoreContext: 8 }, { scoreContext: 15 }]
  results.push(["group", h.action.isWon()])

  h.action.social.inGroup = false
  h.action.social.opponent = { scoreContext: 30 }
  h.action.social.me.scoreSession = 31
  results.push(["opponent", h.action.isWon()])

  return results
})

compareScenario("LevelEndAction beforeLaunch, launch, submitScore, and track", async (deps) => {
  const h = makeGenericEndHarness(deps.LevelEndAction)
  h.action.social.inSolo = false
  h.action.social.me.scoreSession = 50
  h.action.social.me.scoreGlobal = 40
  await h.action.beforeLaunch()
  await h.action.launch()
  h.action.track()
  return {
    won: h.action._won,
    records: h.records,
  }
})

compareScenario("LevelEndAction submitScore skips context leaderboard in solo mode", async (deps) => {
  const h = makeGenericEndHarness(deps.LevelEndAction)
  h.action.social.inSolo = true
  h.action.social.me.scoreSession = 5
  h.action.social.me.scoreGlobal = 10
  await h.action.submitScore()
  return h.records
})

compareScenario("LevelEndActionSIO launch win branch in solo mode", async (deps) => {
  const h = makeSioEndHarness(deps)
  h.action.social.inSolo = true
  await h.action.launch(true)
  return snapshotSioEnd(h)
})

compareScenario("LevelEndActionSIO launch win branch outside solo mode", async (deps) => {
  const h = makeSioEndHarness(deps)
  h.action.social.inSolo = false
  h.action.data = { battle: "data" }
  await h.action.launch(true)
  return snapshotSioEnd(h)
})

compareScenario("LevelEndActionSIO launch lose branch dispatches lose popup", async (deps) => {
  const h = makeSioEndHarness(deps)
  await h.action.launch(false)
  return snapshotSioEnd(h)
})

compareScenario("LevelEndActionSIO popup helpers and submitScore", async (deps) => {
  const h = makeSioEndHarness(deps)
  await h.action.popupGift()
  await h.action.updateTournament()
  await h.action.createTournament()
  await h.action.popupWin()
  await h.action.popupLevelComplete()
  h.action.data = { battle: "direct" }
  await h.action.popupBattleResults()
  await h.action.submitScore()
  return {
    scoreSession: h.action.social.me.scoreSession,
    records: h.records,
  }
})

Promise.resolve()
  .then(async () => {
    for (const run of pendingComparisons) await run()
    console.log(
      JSON.stringify(
        {
          modules: ["LevelEndAction", "LevelEndActionSIO"],
          scenarios: pendingComparisons.length,
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
  .finally(() => {
    restoreEnvironment()
    currentHarness = null
  })

function compareScenario(name, run) {
  pendingComparisons.push(async () => {
    patchEnvironment()
    currentHarness = null
    const originalResult = normalize(await run(originalDeps))
    patchEnvironment()
    currentHarness = null
    const restoredResult = normalize(await run(restoredDeps))
    assert.deepEqual(restoredResult, originalResult, name)
  })
}

function makeGenericEndHarness(Klass) {
  const records = []
  const action = new Klass()
  action.data = undefined
  action.social = {
    inSolo: false,
    inBlindContext: false,
    inGroup: false,
    opponent: null,
    contextPlayers: [],
    me: {
      scoreSession: 0,
      scoreGlobal: 0,
      scoreContext: 0,
    },
    postSessionScore() {
      records.push(["social.postSessionScore"])
    },
  }
  action.gameConfig = { useBannerAd: true }
  action.adManager = {
    showBanner() {
      records.push(["adManager.showBanner"])
    },
  }
  action.adAction = {
    async run() {
      records.push(["adAction.run"])
    },
  }
  currentHarness = { action, records }
  return currentHarness
}

function makeSioEndHarness(deps) {
  const records = []
  const action = new deps.LevelEndActionSIO()
  const rewardAds = deps.SIOConstants.REWARD_AD_PLAYED
  rewardAds.set("boosters", true)
  action.model = {
    absoluteLevelNum: 42,
    cookie: {
      absoluteTryNum: 3,
      absoluteLevelNum: 7,
    },
    meta: {
      loseMultiplier: 2,
      getReward() {
        records.push(["meta.getReward"])
        return 11
      },
    },
    currentContinent: {
      data: { id: "continent-1" },
      getTotalScore() {
        records.push(["continent.getTotalScore"])
        return 1234
      },
    },
    set state(value) {
      records.push(["model.state", gameStateName(value)])
      this._state = value
    },
    get state() {
      return this._state
    },
  }
  action.social = {
    inSolo: true,
    me: { scoreSession: 0 },
    async playSolo() {
      records.push(["social.playSolo"])
    },
  }
  action.assets = {
    purge() {
      records.push(["assets.purge"])
    },
  }
  action.levelNext = {
    async run() {
      records.push(["levelNext.run"])
    },
  }
  action.dispatch = function dispatch(eventName, payload) {
    records.push([
      "dispatch",
      eventName === UIEvents.POPUP,
      payload?.id,
      payload?.props?.coins,
    ])
  }
  currentHarness = { action, records, rewardAds }
  return currentHarness
}

function patchEnvironment() {
  core.di.isBound = restoredCore.di.isBound = function isBound(token) {
    currentHarness?.records.push(["di.isBound", tokenName(token)])
    return true
  }
  core.di.get = restoredCore.di.get = function get(token) {
    currentHarness?.records.push(["di.get", tokenName(token)])
    return {
      async run(data) {
        currentHarness?.records.push(["di.run", tokenName(token), normalizeActionData(data)])
        if (token === TypesGame.actions.tournamentReShare) return "reshare-result"
        if (token === TypesGame.actions.tournamentCreate) return "create-result"
        return undefined
      },
      submit(...args) {
        currentHarness?.records.push(["di.submit", tokenName(token), args])
        return Promise.resolve("submitted")
      },
      track(...args) {
        currentHarness?.records.push(["di.track", args])
      },
    }
  }
}

function restoreEnvironment() {
  core.di.get = originalEnv.diGet
  core.di.isBound = originalEnv.diIsBound
  restoredCore.di.get = originalEnv.restoredDiGet
  restoredCore.di.isBound = originalEnv.restoredDiIsBound
  SIOConstants.REWARD_AD_PLAYED.clear()
  RestoredSIOConstants.REWARD_AD_PLAYED.clear()
}

function snapshotSioEnd(h) {
  return {
    cookie: h.action.model.cookie,
    rewardAdHasBoosters: h.rewardAds.has("boosters"),
    records: h.records,
  }
}

function normalizeActionData(data) {
  if (data === undefined) return "__undefined__"
  return data
}

function tokenName(token) {
  if (token === TypesNotification.finish) return "TypesNotification.finish"
  if (token === TypesFlow.UI.endScreenAction) return "TypesFlow.UI.endScreenAction"
  if (token === TypesFlow.share) return "TypesFlow.share"
  if (token === TypesSocial.leaderboardContext) return "TypesSocial.leaderboardContext"
  if (token === TypesSocial.leaderboardGlobal) return "TypesSocial.leaderboardGlobal"
  if (token === TypesAnalytics.tracker) return "TypesAnalytics.tracker"
  if (token === TypesGame.actions.tournamentPostScore) return "actions.tournamentPostScore"
  if (token === TypesGame.actions.giftPopup) return "actions.giftPopup"
  if (token === TypesGame.actions.tournamentReShare) return "actions.tournamentReShare"
  if (token === TypesGame.actions.tournamentCreate) return "actions.tournamentCreate"
  if (token === TypesGame.actions.winPopup) return "actions.winPopup"
  if (token === TypesGame.actions.levelCompletePopup) return "actions.levelCompletePopup"
  if (token === TypesGame.actions.battleResultsPopup) return "actions.battleResultsPopup"
  return String(token)
}

function gameStateName(value) {
  const entry = Object.entries(GameState).find(([, item]) => item === value)
  return entry?.[0] || String(value)
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
