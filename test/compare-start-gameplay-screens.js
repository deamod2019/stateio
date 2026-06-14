"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesCore, TypesSocial, TypesUI } = require("../src-cjs/86178__mod.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")
const { PopupType } = require("../src-cjs/30107_PopupType.js")

const TARGETS = [
  "../src-cjs/95622_GamePlayScreen.js",
  "../src-restored/ui/GamePlayScreen.js",
  "../src-cjs/96648_StartScreen.js",
  "../src-restored/ui/StartScreen.js",
  "../src-restored/ui/UIHooks.js",
]

Promise.resolve()
  .then(async () => {
    await compareGamePlayScenario("gameplay renders progress and exits through model")
    await compareStartScenario("default platform renders home controls and routes buttons", {
      socialPlatform: "vk",
      invisible: false,
      offlineRewarded: true,
      triggerTypes: ["SettingsButton", "LeaderboardButton", "ShopButton", "TapToPlayButton", "UserStatusInfo"],
      expectInvite: true,
      expectLeaderboard: true,
      unstoredSkin: true,
      authorizeUser: true,
      syncAfterAuth: true,
    })
    await compareStartScenario("yandex platform hides invite but keeps leaderboard", {
      socialPlatform: "ya",
      invisible: true,
      offlineRewarded: false,
      triggerTypes: ["TapToPlayButton"],
      expectInvite: false,
      expectLeaderboard: true,
      unstoredSkin: false,
      authorizeUser: false,
      syncAfterAuth: false,
    })
    await compareStartScenario("game distribution platform hides invite and leaderboard", {
      socialPlatform: "gd",
      invisible: false,
      offlineRewarded: false,
      triggerTypes: ["ShopButton"],
      expectInvite: false,
      expectLeaderboard: false,
      unstoredSkin: true,
      authorizeUser: true,
      syncAfterAuth: false,
    })

    console.log(
      JSON.stringify(
        {
          module: "GamePlayScreen/StartScreen",
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

async function compareGamePlayScenario(name) {
  const originalResult = await exerciseGamePlayScreen(loadOriginalGamePlay)
  const restoredResult = await exerciseGamePlayScreen(loadRestoredGamePlay)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareStartScenario(name, options) {
  const originalResult = await exerciseStartScreen(loadOriginalStart, options)
  const restoredResult = await exerciseStartScreen(loadRestoredStart, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseGamePlayScreen(loadModule) {
  const records = []
  const model = createModel({ records })
  const mocks = createCommonMocks({ records, model })

  return withMockedModules(mocks, async () => {
    const { GamePlayScreen } = loadModule()
    const participants = [{ id: "me" }, { id: "other" }]
    const vnode = GamePlayScreen({ participants })
    const normalizedVNode = normalizeVNode(vnode)
    const backButton = findVNodeByType(vnode, "BackButton")
    assert.notEqual(backButton, null, "BackButton was not rendered")
    const clickResult = await backButton.props.onClick()

    return normalize({
      vnode: normalizedVNode,
      records,
      clickResult,
    })
  })
}

async function exerciseStartScreen(loadModule, options) {
  const records = []
  const model = createModel({ records, offlineRewarded: options.offlineRewarded })
  const social = createSocial({ records, options })
  const skinManager = createSkinManager(options.unstoredSkin)
  const cookieModel = createCookieModel({ records, options })
  const dispatcher = createDispatcher(records)
  const mocks = createCommonMocks({
    records,
    model,
    social,
    skinManager,
    cookieModel,
    dispatcher,
    invisible: options.invisible,
  })

  return withMockedModules(mocks, async () => {
    const { StartScreen } = loadModule()
    const vnode = StartScreen()
    const normalizedVNode = normalizeVNode(vnode)

    assert.equal(findVNodeByType(vnode, "InviteButton") !== null, options.expectInvite)
    assert.equal(findVNodeByType(vnode, "LeaderboardButton") !== null, options.expectLeaderboard)

    for (const type of options.triggerTypes) {
      const trigger = findVNodeByType(vnode, type)
      assert.notEqual(trigger, null, `${type} was not rendered`)
      if (type === "TapToPlayButton") {
        await trigger.props.onDown()
        await trigger.props.onClick()
      } else if (type === "UserStatusInfo") {
        await trigger.props.onLogin()
      } else {
        await trigger.props.onClick()
      }
    }

    return normalize({
      vnode: normalizedVNode,
      records,
    })
  })
}

function loadOriginalGamePlay() {
  deleteTargetModules()
  return require("../src-cjs/95622_GamePlayScreen.js")
}

function loadRestoredGamePlay() {
  deleteTargetModules()
  return require("../src-restored/ui/GamePlayScreen.js")
}

function loadOriginalStart() {
  deleteTargetModules()
  return require("../src-cjs/96648_StartScreen.js")
}

function loadRestoredStart() {
  deleteTargetModules()
  return require("../src-restored/ui/StartScreen.js")
}

function createModel({ records, offlineRewarded = false }) {
  return {
    cookie: {
      coins: 777,
      availableColors: [{ id: "red", stored: true }, { id: "blue", stored: false }],
    },
    currentContinent: {
      stageLevel: 4,
      totalStages: 8,
    },
    exitTheGame() {
      records.push(["model.exitTheGame"])
      return "exited"
    },
    getOfflineEarning() {
      records.push(["model.getOfflineEarning"])
      return {
        isRewarded: offlineRewarded,
        reward: 123,
        date: new Date(Date.UTC(2026, 0, 2, 3, 4, 5)),
      }
    },
  }
}

function createSocial({ records, options }) {
  const social = {
    userAuthorized: false,
    session: { ftue: false },
    inSolo: true,
    socialPlatform: options.socialPlatform,
    friends: [{ id: "friend" }],
    me: { id: "me" },
  }
  if (options.authorizeUser) {
    social.authorizeUser = async () => {
      records.push(["social.authorizeUser"])
      return true
    }
  }
  return social
}

function createSkinManager(unstoredSkin) {
  return {
    availableBuildings: [{ id: "building", stored: !unstoredSkin }],
    availableFighters: [{ id: "fighter", stored: true }],
  }
}

function createCookieModel({ records, options }) {
  if (!options.syncAfterAuth) return {}
  return {
    async syncAfterAuthStateChange() {
      records.push(["cookie.syncAfterAuthStateChange"])
      return true
    },
  }
}

function createDispatcher(records) {
  return {
    emit(eventName, payload) {
      records.push(["dispatcher.emit", eventName, normalizeEventPayload(payload)])
    },
  }
}

function createCommonMocks({
  records,
  model,
  social,
  skinManager,
  cookieModel,
  dispatcher,
  invisible = false,
}) {
  function useInjection(token) {
    records.push(["useInjection", tokenLabel(token)])
    if (token === TypesGame.model) return model
    if (token === TypesSocial.model) return social
    if (token === TypesGame.skinManager) return skinManager
    if (token === TypesCore.dispatcher) return dispatcher
    if (token === TypesGame.cookieModel) return cookieModel
    return undefined
  }

  function visibilityEffect() {
    records.push(["visibilityEffect"])
    return [
      invisible,
      (value) => {
        records.push(["setInvisible", value])
      },
    ]
  }

  function useState(initialValue) {
    records.push(["useState", typeof initialValue === "function" ? "function" : normalize(initialValue)])
    const state = typeof initialValue === "function" ? initialValue() : initialValue
    function setState(value) {
      const next = typeof value === "function" ? value(state) : value
      records.push(["setState", normalize(next)])
    }
    return [state, setState]
  }

  function useEffect(effect, deps) {
    records.push(["useEffect", normalize(deps), typeof effect])
    effect()
  }

  function BackButton() {}
  function ProgressBar() {}
  function Boosters() {}
  function Capturing() {}
  function InviteButton() {}
  function LeaderboardButton() {}
  function LevelTitle() {}
  function CoinsIndicator() {}
  function NoAdsButton() {}
  function SettingsButton() {}
  function ShopButton() {}
  function TapToPlayButton() {}
  function UserStatusInfo() {}

  const fakeRuntime = {
      di: {
        get(token) {
          records.push(["di.get", tokenLabel(token)])
          if (token === TypesGame.model) return model
          return undefined
        },
      },
      lazyGet(token) {
        records.push(["lazyGet", tokenLabel(token)])
        if (token === TypesGame.actions.startGame) {
          return {
            run() {
              records.push(["startGame.run"])
              return "started"
            },
          }
        }
        if (token === TypesGame.actions.levelRestartAfterYandexLoginAction) {
          return {
            async run() {
              records.push(["levelRestartAfterYandexLoginAction.run"])
            },
          }
        }
        return null
      },
    }

  return {
    "../src-cjs/44656__mod.js": fakeRuntime,
    "../src-restored/core/RuntimeCore.js": fakeRuntime,
    "../src-cjs/83430_InversifyContext.js": {
      UIEvents: {
        POPUP: "UIEvents.POPUP",
        SCREEN_CHANGED: "UIEvents.SCREEN_CHANGED",
      },
      useInjection,
      visibilityEffect,
    },
    "../src-restored/ui/UIContext.js": {
      UIEvents: {
        POPUP: "UIEvents.POPUP",
        SCREEN_CHANGED: "UIEvents.SCREEN_CHANGED",
      },
      useInjection,
      visibilityEffect,
    },
    "../src-cjs/30396__mod.js": { useState, useEffect },
    "../src-restored/ui/preactHooks.js": { useState, useEffect },
    "../src-cjs/48616__mod.js": { ScoreType: { GLOBAL: "ScoreType.GLOBAL" } },
    "../src-restored/core/SocialAppExports.js": { ScoreType: { GLOBAL: "ScoreType.GLOBAL" } },
    "../src-cjs/7161_BackButton.js": { BackButton },
    "../src-restored/ui/BackButton.js": { BackButton },
    "../src-cjs/52951_ProgressBar.js": { ProgressBar },
    "../src-restored/ui/ProgressBar.js": { ProgressBar },
    "../src-cjs/11748_DebugPanelGamePlay.js": {},
    "../src-restored/ui/DebugPanelGamePlay.js": {},
    "../src-cjs/14936__mod.js": {},
    "../src-cjs/67884_Boosters.js": { Boosters },
    "../src-restored/ui/Boosters.js": { Boosters },
    "../src-cjs/10065_Capturing.js": { Capturing },
    "../src-restored/ui/Capturing.js": { Capturing },
    "../src-cjs/55378_InviteButton.js": { InviteButton },
    "../src-restored/ui/InviteButton.js": { InviteButton },
    "../src-cjs/96087_LeaderboardButton.js": { LeaderboardButton },
    "../src-restored/ui/LeaderboardButton.js": { LeaderboardButton },
    "../src-cjs/20911_LevelTitle.js": { LevelTitle },
    "../src-restored/ui/LevelTitle.js": { LevelTitle },
    "../src-cjs/32715_CoinsIndicator.js": { CoinsIndicator },
    "../src-restored/ui/CoinsIndicator.js": { CoinsIndicator },
    "../src-cjs/14954_NoAdsButton.js": { NoAdsButton },
    "../src-restored/ui/NoAdsButton.js": { NoAdsButton },
    "../src-cjs/12832_SettingsButton.js": { SettingsButton },
    "../src-restored/ui/SettingsButton.js": { SettingsButton },
    "../src-cjs/82978_ShopButton.js": { ShopButton },
    "../src-restored/ui/ShopButton.js": { ShopButton },
    "../src-cjs/53309_TapToPlayButton.js": { TapToPlayButton },
    "../src-restored/ui/TapToPlayButton.js": { TapToPlayButton },
    "../src-cjs/56635__mod.js": {},
    "../src-cjs/69080_UserStatusInfo.js": { UserStatusInfo },
    "../src-restored/ui/UserStatusInfo.js": { UserStatusInfo },
    "../src-cjs/37725__mod.js": {
      playUIClickSound() {
        records.push(["playUIClickSound"])
      },
    },
    "../src-restored/core/UIHelpers.js": {
      playUIClickSound() {
        records.push(["playUIClickSound"])
      },
    },
    "../src-cjs/86125__mod.js": {
      Localize: {
        get(key, fallback) {
          records.push(["Localize.get", key, fallback])
          return fallback
        },
      },
    },
  }
}

function withMockedModules(mocks, run) {
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
    return run()
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

function findVNodeByType(vnode, typeName) {
  if (!vnode || typeof vnode !== "object") return null
  if (vnodeTypeName(vnode.type) === typeName) return vnode

  const children = vnode.props?.children
  const childList = Array.isArray(children) ? children : [children]
  for (const child of childList) {
    const result = findVNodeByType(child, typeName)
    if (result) return result
  }
  return null
}

function normalizeVNode(vnode) {
  if (Array.isArray(vnode)) return vnode.map(normalizeVNode)
  if (!vnode || typeof vnode !== "object") return vnode

  return {
    type: vnodeTypeName(vnode.type),
    key: vnode.key === undefined ? null : vnode.key,
    props: normalizeProps(vnode.props || {}),
  }
}

function normalizeProps(props) {
  const result = {}
  for (const [key, value] of Object.entries(props)) {
    if (key === "children") result.children = normalizeVNode(value)
    else if (typeof value === "function") result[key] = "[function]"
    else result[key] = normalizeValue(value)
  }
  return result
}

function normalizeValue(value) {
  if (Array.isArray(value)) return value.map(normalizeValue)
  if (value && typeof value === "object") {
    const result = {}
    for (const [key, item] of Object.entries(value)) result[key] = normalizeValue(item)
    return result
  }
  if (value === undefined) return "__undefined__"
  return value
}

function normalizeEventPayload(payload) {
  if (!payload || typeof payload !== "object") return payload
  if (payload.id === PopupType.OFFLINE_EARNINGS) {
    return { id: "PopupType.OFFLINE_EARNINGS", props: payload.props }
  }
  if (payload.id === PopupType.SETTINGS) return { id: "PopupType.SETTINGS" }
  if (payload.id === TypesUI.screen.LEADERBOARD) {
    return {
      id: "TypesUI.screen.LEADERBOARD",
      props: normalize(payload.props),
    }
  }
  if (payload.id === TypesUI.screen.SHOP) return { id: "TypesUI.screen.SHOP", props: payload.props }
  return normalize(payload)
}

function vnodeTypeName(type) {
  if (typeof type === "function") return type.name || "[anonymous]"
  return type
}

function tokenLabel(token) {
  if (typeof token === "symbol") return token.toString()
  if (typeof token === "function") return token.name || "(anonymous function)"
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
