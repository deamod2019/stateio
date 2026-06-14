"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesAudio, TypesCore, TypesSocial } = require("../src-cjs/86178__mod.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")

const TARGETS = [
  "../src-cjs/2906_LeaderboardScreen.js",
  "../src-restored/ui/LeaderboardScreen.js",
  "../src-cjs/76742_ShopScreen.js",
  "../src-restored/ui/ShopScreen.js",
  "../src-cjs/47277_SettingsPopup.js",
  "../src-restored/ui/SettingsPopup.js",
  "../src-restored/ui/UIHooks.js",
]

Promise.resolve()
  .then(async () => {
    await compareLeaderboardScenario("leaderboard renders and handles coin event")
    await compareShopScenario("shop renders and cleanup refreshes shop skins")
    await compareSettingsScenario("settings renders vibration and sound toggles", {
      popupInvisible: false,
      vibrationManager: createVibrationManager(true),
      soundsMuted: false,
    })
    await compareSettingsScenario("settings renders without vibration manager", {
      popupInvisible: true,
      vibrationManager: null,
      soundsMuted: true,
    })

    console.log(
      JSON.stringify(
        {
          module: "LeaderboardScreen/ShopScreen/SettingsPopup",
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

async function compareLeaderboardScenario(name) {
  const originalResult = await exerciseLeaderboard(loadOriginalLeaderboard)
  const restoredResult = await exerciseLeaderboard(loadRestoredLeaderboard)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareShopScenario(name) {
  const originalResult = await exerciseShop(loadOriginalShop)
  const restoredResult = await exerciseShop(loadRestoredShop)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareSettingsScenario(name, options) {
  const originalResult = await exerciseSettings(loadOriginalSettings, options)
  const restoredResult = await exerciseSettings(loadRestoredSettings, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseLeaderboard(loadModule) {
  const records = []
  const model = createGameModel(records)
  const mocks = createMocks({ records, model })

  return withMockedModules(mocks, async () => {
    const { LeaderboardScreen } = loadModule()
    const props = { group: "friends", context: "weekly" }
    const vnode = LeaderboardScreen(props)

    const listener = mocks.__listeners.find((entry) => entry.event === "GameEvents.COINS_UPDATED")
    assert.notEqual(listener, undefined, "coins listener was not registered")
    listener.handler({ coins: 1200, startCoins: 1000 })

    const backButton = findVNodeByType(vnode, "BackButton")
    assert.notEqual(backButton, null, "BackButton was not rendered")
    backButton.props.onClick()

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      cookie: model.cookie,
    })
  })
}

async function exerciseShop(loadModule) {
  const records = []
  const model = createGameModel(records)
  const cleanups = []
  const mocks = createMocks({ records, model, cleanups })

  return withMockedModules(mocks, async () => {
    const { ShopScreen } = loadModule()
    const vnode = ShopScreen()

    const backButton = findVNodeByType(vnode, "BackButton")
    assert.notEqual(backButton, null, "BackButton was not rendered")
    backButton.props.onClick()

    for (const cleanup of cleanups) cleanup()

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      cookie: model.cookie,
    })
  })
}

async function exerciseSettings(loadModule, options) {
  const records = []
  const model = createGameModel(records)
  const dispatcher = createDispatcher(records)
  const audioModel = createAudioModel(records, options.soundsMuted)
  const mocks = createMocks({
    records,
    model,
    dispatcher,
    audioModel,
    popupInvisible: options.popupInvisible,
    vibrationManager: options.vibrationManager,
  })

  return withMockedModules(mocks, async () => {
    const { SettingsPopup } = loadModule()
    const vnode = SettingsPopup()
    const buttons = findAllVNodesByType(vnode, "Button")

    for (const button of buttons) button.props.onClick()

    const backButton = findVNodeByType(vnode, "BackButton")
    assert.notEqual(backButton, null, "BackButton was not rendered")
    await backButton.props.onClick()

    for (const listener of mocks.__listeners) {
      if (listener.event === "AudioModel.MUTE_SOUNDS" || listener.event === "AudioModel.MUTE_MUSIC") {
        records.push(["listenerResult", listener.event, listener.handler()])
      }
    }

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      vibrationManager: options.vibrationManager,
      audioMuted: audioModel.muted,
    })
  })
}

function loadOriginalLeaderboard() {
  deleteTargetModules()
  return require("../src-cjs/2906_LeaderboardScreen.js")
}

function loadRestoredLeaderboard() {
  deleteTargetModules()
  return require("../src-restored/ui/LeaderboardScreen.js")
}

function loadOriginalShop() {
  deleteTargetModules()
  return require("../src-cjs/76742_ShopScreen.js")
}

function loadRestoredShop() {
  deleteTargetModules()
  return require("../src-restored/ui/ShopScreen.js")
}

function loadOriginalSettings() {
  deleteTargetModules()
  return require("../src-cjs/47277_SettingsPopup.js")
}

function loadRestoredSettings() {
  deleteTargetModules()
  return require("../src-restored/ui/SettingsPopup.js")
}

function createGameModel(records) {
  return {
    cookie: { coins: 1000 },
    goToLobby() {
      records.push(["model.goToLobby"])
    },
    onShopScreenChanged() {
      records.push(["model.onShopScreenChanged"])
    },
  }
}

function createDispatcher(records) {
  return {
    emit(eventName, payload) {
      records.push(["dispatcher.emit", eventName, payload])
    },
  }
}

function createAudioModel(records, muted) {
  return {
    muted,
    soundsMuted() {
      records.push(["audio.soundsMuted"])
      return this.muted
    },
    muteSounds(value) {
      records.push(["audio.muteSounds", value])
      this.muted = value
    },
  }
}

function createVibrationManager(enabled) {
  return {
    enabled,
    vibrateCount: 0,
    vibrate() {
      this.vibrateCount += 1
    },
  }
}

function createMocks({
  records,
  model,
  dispatcher,
  audioModel,
  popupInvisible = false,
  vibrationManager = null,
  cleanups = [],
}) {
  const listeners = []

  function useInjection(token) {
    records.push(["useInjection", tokenLabel(token)])
    if (token === TypesGame.model) return model
    if (token === TypesCore.dispatcher) return dispatcher
    if (token === TypesAudio.model) return audioModel
    if (token === TypesSocial.model) return { type: "social-model" }
    return undefined
  }

  function useEventListener(event, handler, deps) {
    records.push(["useEventListener", event, typeof handler, normalize(deps)])
    listeners.push({ event, handler })
  }

  function useState(initialValue) {
    records.push(["useState", typeof initialValue === "function" ? "function" : normalize(initialValue)])
    const initialState = typeof initialValue === "function" ? initialValue() : initialValue
    function setState(value) {
      const next = typeof value === "function" ? value(initialState) : value
      records.push(["setState", normalize(next)])
    }
    return [initialState, setState]
  }

  function useEffect(effect, deps) {
    records.push(["useEffect", normalize(deps), typeof effect])
    const cleanup = effect()
    records.push(["useEffect.cleanup", typeof cleanup])
    if (typeof cleanup === "function") cleanups.push(cleanup)
  }

  function useCallback(callback, deps) {
    records.push(["useCallback", normalize(deps), typeof callback])
    return callback
  }

  function setPopupInvisible(value) {
    records.push(["setPopupInvisible", value])
  }

  function visibilityEffect(...args) {
    records.push(["visibilityEffect", normalize(args)])
    return [popupInvisible, setPopupInvisible]
  }

  function BackButton() {}
  function LeaderBoardTabs() {}
  function CoinsIndicator() {}
  function ShopPreview() {}
  function ShopMenu() {}
  function Button() {}
  function CrossPromo() {}
  function VersionLabel() {}
  function Vibrate() {}
  function Sounds() {}
  function UserIdLabel() {}

  const uiContextMock = {
    UIEvents: { POPUP: "UIEvents.POPUP" },
    useInjection,
    useEventListener,
    visibilityEffect,
    Button,
    CrossPromo,
    VersionLabel,
  }

  const mocks = {
    __listeners: listeners,
    "../src-cjs/83430_InversifyContext.js": uiContextMock,
    "../src-restored/ui/UIContext.js": uiContextMock,
    "../src-cjs/30396__mod.js": { useState, useEffect, useCallback },
    "../src-restored/ui/preactHooks.js": {
      useCallback,
      useEffect,
      useLayoutEffect: useEffect,
      useState,
    },
    "../src-cjs/47283_GameEvents.js": {
      GameEvents: { COINS_UPDATED: "GameEvents.COINS_UPDATED" },
    },
    "../src-restored/core/GameEvents.js": {
      GameEvents: { COINS_UPDATED: "GameEvents.COINS_UPDATED" },
    },
    "../src-cjs/7161_BackButton.js": { BackButton },
    "../src-restored/ui/BackButton.js": { BackButton },
    "../src-cjs/30326_LeaderBoardTabs.js": { LeaderBoardTabs },
    "../src-restored/ui/LeaderBoardTabs.js": { LeaderBoardTabs },
    "../src-cjs/32715_CoinsIndicator.js": { CoinsIndicator },
    "../src-restored/ui/CoinsIndicator.js": { CoinsIndicator },
    "../src-cjs/44698_ShopPreview.js": { ShopPreview },
    "../src-restored/ui/ShopPreview.js": { ShopPreview },
    "../src-cjs/83643_ShopMenu.js": { ShopMenu },
    "../src-restored/ui/ShopMenu.js": { ShopMenu },
    "../src-cjs/44656__mod.js": {
      WaitAction: {
        async ms(delay) {
          records.push(["WaitAction.ms", delay])
        },
      },
      lazyGet(token) {
        records.push(["lazyGet", tokenLabel(token)])
        if (token === TypesSocial.vibrationManager) return vibrationManager
        return null
      },
    },
    "../src-restored/core/RuntimeCore.js": {
      lazyGet(token) {
        records.push(["lazyGet", tokenLabel(token)])
        if (token === TypesSocial.vibrationManager) return vibrationManager
        return null
      },
    },
    "../src-restored/core/WaitAction.js": {
      WaitAction: {
        async ms(delay) {
          records.push(["WaitAction.ms", delay])
        },
      },
    },
    "../src-cjs/74083_UIConstants.js": {
      UIConstants: { popup: { startDelay: 25 } },
    },
    "../src-restored/core/UIConstants.js": {
      UIConstants: { popup: { startDelay: 25 } },
    },
    "../src-cjs/36622_SVG.js": {
      SVG: { Vibrate, Sounds },
    },
    "../src-restored/ui/SVGAssets.js": {
      SVG: { Vibrate, Sounds },
    },
    "../src-cjs/87195__mod.js": {
      AudioModel: {
        MUTE_SOUNDS: "AudioModel.MUTE_SOUNDS",
        MUTE_MUSIC: "AudioModel.MUTE_MUSIC",
      },
    },
    "../src-restored/core/AudioModel.js": {
      AudioModel: {
        MUTE_SOUNDS: "AudioModel.MUTE_SOUNDS",
        MUTE_MUSIC: "AudioModel.MUTE_MUSIC",
      },
    },
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
    "../src-cjs/29343_UserIdLabel.js": { UserIdLabel },
    "../src-restored/ui/UserIdLabel.js": { UserIdLabel },
    "../src-cjs/57862__mod.js": {},
    "../src-cjs/61750__mod.js": {},
    "../src-cjs/80951__mod.js": {},
  }

  return mocks
}

function withMockedModules(mocks, run) {
  const originals = new Map()

  for (const [request, exportsObject] of Object.entries(mocks)) {
    if (request.startsWith("__")) continue
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

function findAllVNodesByType(vnode, typeName, results = []) {
  if (!vnode || typeof vnode !== "object") return results
  if (vnodeTypeName(vnode.type) === typeName) results.push(vnode)

  const children = vnode.props?.children
  const childList = Array.isArray(children) ? children : [children]
  for (const child of childList) findAllVNodesByType(child, typeName, results)
  return results
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
