"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesCore, TypesFlow, AdResponse } = require("../src-cjs/86178__mod.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")

const SkinType = { BUILDING: "BUILDING", FIGHTER: "FIGHTER" }

const TARGETS = [
  "../src-cjs/56532_ConfirmPopup.js",
  "../src-restored/ui/ConfirmPopup.js",
  "../src-cjs/56184_GiftPopup.js",
  "../src-restored/ui/GiftPopup.js",
  "../src-cjs/96126_OfflineEarningsPopup.js",
  "../src-restored/ui/OfflineEarningsPopup.js",
  "../src-restored/ui/UIHooks.js",
]

Promise.resolve()
  .then(async () => {
    await compareConfirmScenario("confirm popup accepts exit", {
      popupInvisible: true,
      triggerType: "ConfirmButton",
    })
    await compareConfirmScenario("confirm popup cancels exit", {
      popupInvisible: false,
      triggerType: "CancelButton",
    })
    await compareGiftScenario("gift claim awards building reward", {
      popupInvisible: false,
      state: { adViewed: false, canCollect: true },
      props: {
        captured: 3,
        total: 3,
        reward: { type: SkinType.BUILDING, id: "building-a" },
      },
      triggerType: "ClaimButton",
      animationComplete: true,
      withOnContinue: true,
    })
    await compareGiftScenario("gift claim awards fighter reward", {
      popupInvisible: true,
      state: { adViewed: false, canCollect: true },
      props: {
        captured: 5,
        total: 5,
        reward: { type: SkinType.FIGHTER, id: "fighter-a" },
      },
      triggerType: "ClaimButton",
      animationComplete: false,
      withOnContinue: false,
    })
    await compareGiftScenario("gift no-thanks closes and reports skipped", {
      popupInvisible: false,
      state: { adViewed: false, canCollect: true },
      props: { captured: 2, total: 2, reward: null },
      triggerType: "NoThanksButton",
      animationComplete: false,
      withOnContinue: true,
    })
    await compareGiftScenario("unfinished gift continues through level-next flow", {
      popupInvisible: false,
      state: { adViewed: false, canCollect: false },
      props: { captured: 1, total: 3, reward: null },
      triggerType: "ContinueButton",
      animationComplete: true,
      withOnContinue: false,
    })
    await compareOfflineScenario("offline claim selects multiplier and watches reward", {
      popupInvisible: false,
      state: {
        startCoinsTotal: 500,
        adViewed: false,
        multiplierSelected: false,
        mult: 3,
        reward: 100,
      },
      props: { coins: 100, hours: 2, minutes: 3, seconds: 4, animationEnabled: true },
      triggerType: "ClaimButton",
      pauseMultiplier: 4,
    })
    await compareOfflineScenario("offline no-thanks pays base reward and closes", {
      popupInvisible: true,
      state: {
        startCoinsTotal: 600,
        adViewed: false,
        multiplierSelected: false,
        mult: 1,
        reward: 80,
      },
      props: { coins: 80, hours: 1, minutes: 2, seconds: 3, animationEnabled: false },
      triggerType: "NoThanksButton",
    })
    await compareOfflineScenario("offline continue pays viewed reward", {
      popupInvisible: false,
      state: {
        startCoinsTotal: 700,
        adViewed: true,
        multiplierSelected: true,
        mult: 2,
        reward: 160,
      },
      props: { coins: 80, hours: 5, minutes: 6, seconds: 7, animationEnabled: true },
      triggerType: "ContinueButton",
    })

    console.log(
      JSON.stringify(
        {
          module: "ConfirmPopup/GiftPopup/OfflineEarningsPopup",
          scenarios: 9,
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

async function compareConfirmScenario(name, options) {
  const originalResult = await exerciseConfirmPopup(loadOriginalConfirm, options)
  const restoredResult = await exerciseConfirmPopup(loadRestoredConfirm, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareGiftScenario(name, options) {
  const originalResult = await exerciseGiftPopup(loadOriginalGift, options)
  const restoredResult = await exerciseGiftPopup(loadRestoredGift, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareOfflineScenario(name, options) {
  const originalResult = await exerciseOfflinePopup(loadOriginalOffline, options)
  const restoredResult = await exerciseOfflinePopup(loadRestoredOffline, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseConfirmPopup(loadModule, options) {
  const records = []
  const mocks = createMocks({ records, popupInvisible: options.popupInvisible })

  return withMockedModules(mocks, async () => {
    const { ConfirmPopup } = loadModule()
    const vnode = ConfirmPopup({
      onConfirm(value) {
        records.push(["onConfirm", value])
        return `confirm:${value}`
      },
    })
    const trigger = findVNodeByType(vnode, options.triggerType)
    assert.notEqual(trigger, null, `${options.triggerType} was not rendered`)
    const clickResult = trigger.props.onClick()

    return normalize({ vnode: normalizeVNode(vnode), records, clickResult })
  })
}

async function exerciseGiftPopup(loadModule, options) {
  const records = []
  const model = createModel(records)
  const dispatcher = createDispatcher(records)
  const mocks = createMocks({
    records,
    model,
    dispatcher,
    popupInvisible: options.popupInvisible,
    state: options.state,
  })

  return withMockedModules(mocks, async () => {
    const { GiftPopup } = loadModule()
    const props = Object.assign({}, options.props)
    if (options.withOnContinue) {
      props.onContinue = (value) => {
        records.push(["onContinue", value])
        return `continued:${value}`
      }
    }

    const vnode = GiftPopup(props)
    if (options.animationComplete) {
      const capturing = findVNodeByType(vnode, "CapturingAnimated")
      assert.notEqual(capturing, null, "CapturingAnimated was not rendered")
      capturing.props.onAnimationComplete()
    }

    const trigger = findVNodeByType(vnode, options.triggerType)
    assert.notEqual(trigger, null, `${options.triggerType} was not rendered`)
    const clickResult = await trigger.props.onClick()
    await settleAsyncWork()

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      cookie: model.cookie,
      clickResult,
    })
  })
}

async function exerciseOfflinePopup(loadModule, options) {
  const records = []
  const model = createModel(records)
  const dispatcher = createDispatcher(records)
  const mocks = createMocks({
    records,
    model,
    dispatcher,
    popupInvisible: options.popupInvisible,
    state: options.state,
  })

  return withMockedModules(mocks, async () => {
    const { OfflineEarningsPopup } = loadModule()
    const vnode = OfflineEarningsPopup(options.props)

    if (options.pauseMultiplier !== undefined) {
      const multiplyBonus = findVNodeByType(vnode, "MultiplyBonus")
      assert.notEqual(multiplyBonus, null, "MultiplyBonus was not rendered")
      multiplyBonus.props.onPause(options.pauseMultiplier)
    }

    const trigger = findVNodeByType(vnode, options.triggerType)
    assert.notEqual(trigger, null, `${options.triggerType} was not rendered`)
    const clickResult = await trigger.props.onClick()
    await settleAsyncWork()

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      cookie: model.cookie,
      clickResult,
    })
  })
}

function loadOriginalConfirm() {
  deleteTargetModules()
  return require("../src-cjs/56532_ConfirmPopup.js")
}

function loadRestoredConfirm() {
  deleteTargetModules()
  return require("../src-restored/ui/ConfirmPopup.js")
}

function loadOriginalGift() {
  deleteTargetModules()
  return require("../src-cjs/56184_GiftPopup.js")
}

function loadRestoredGift() {
  deleteTargetModules()
  return require("../src-restored/ui/GiftPopup.js")
}

function loadOriginalOffline() {
  deleteTargetModules()
  return require("../src-cjs/96126_OfflineEarningsPopup.js")
}

function loadRestoredOffline() {
  deleteTargetModules()
  return require("../src-restored/ui/OfflineEarningsPopup.js")
}

function createModel(records) {
  return {
    cookie: {
      coins: 1000,
      userBuildings: [],
      userFighters: [],
      syncCount: 0,
      addUserBuilding(id) {
        records.push(["cookie.addUserBuilding", id])
        this.userBuildings.push(id)
      },
      addUserFighter(id) {
        records.push(["cookie.addUserFighter", id])
        this.userFighters.push(id)
      },
      syncTime() {
        records.push(["cookie.syncTime"])
        this.syncCount += 1
      },
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

function createMocks({ records, model, dispatcher, popupInvisible = false, state }) {
  function useInjection(token) {
    records.push(["useInjection", tokenLabel(token)])
    if (token === TypesCore.dispatcher) return dispatcher
    if (token === TypesGame.model) return model
    return undefined
  }

  function setPopupInvisible(value) {
    records.push(["setPopupInvisible", value])
  }

  function visibilityEffect(...args) {
    records.push(["visibilityEffect", normalize(args)])
    return [popupInvisible, setPopupInvisible]
  }

  function useState(initialValue) {
    records.push(["useState", typeof initialValue === "function" ? "function" : normalize(initialValue)])
    const initialState = typeof initialValue === "function" ? initialValue() : initialValue
    const currentState = state || initialState
    function setState(value) {
      const next = typeof value === "function" ? value(currentState) : value
      records.push(["setState", normalize(next)])
    }
    return [currentState, setState]
  }

  function useEffect(effect, deps) {
    records.push(["useEffect", normalize(deps), typeof effect])
  }

  function CancelButton() {}
  function ConfirmButton() {}
  function CrossPromo() {}
  function ClaimButton() {}
  function ContinueButton() {}
  function NoThanksButton() {}
  function CoinsIndicator() {}
  function CapturingAnimated() {}
  function GiftItem() {}
  function Gift() {}
  function OfflineEarnings() {}
  function PopupWinIndicator() {}
  function WinRays() {}
  function WinStars() {}
  function MultiplyBonus() {}

  return {
    "../src-cjs/83430_InversifyContext.js": {
      UIEvents: { POPUP: "UIEvents.POPUP" },
      useInjection,
      visibilityEffect,
      CrossPromo,
    },
    "../src-restored/ui/UIContext.js": {
      UIEvents: { POPUP: "UIEvents.POPUP" },
      useInjection,
      visibilityEffect,
      CrossPromo,
    },
    "../src-cjs/30396__mod.js": { useState, useEffect },
    "../src-restored/ui/preactHooks.js": { useState, useEffect },
    "../src-cjs/86125__mod.js": {
      Localize: {
        get(key, fallback) {
          records.push(["Localize.get", key, fallback])
          return fallback
        },
      },
    },
    "../src-cjs/37725__mod.js": {
      async showReward() {
        records.push(["showReward"])
        return AdResponse.PLAYED
      },
      async showAd() {
        records.push(["showAd"])
        return "shown"
      },
    },
    "../src-restored/core/UIHelpers.js": {
      async showReward() {
        records.push(["showReward"])
        return AdResponse.PLAYED
      },
      async showAd() {
        records.push(["showAd"])
        return "shown"
      },
    },
    "../src-cjs/44656__mod.js": {
      WaitAction: {
        async ms(delay) {
          records.push(["WaitAction.ms", delay])
        },
      },
      lazyGet(token) {
        records.push(["lazyGet", tokenLabel(token)])
        if (token === TypesFlow.LevelNext) {
          return {
            run() {
              records.push(["levelNext.run"])
              return "level-next"
            },
          }
        }
        return null
      },
    },
    "../src-restored/core/RuntimeCore.js": {
      lazyGet(token) {
        records.push(["lazyGet", tokenLabel(token)])
        if (token === TypesFlow.LevelNext) {
          return {
            run() {
              records.push(["levelNext.run"])
              return "level-next"
            },
          }
        }
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
      UIConstants: {
        popup: { startDelay: 25, noThanksButtonDelay: 75 },
        coinsIndicator: { updateDelay: 125 },
      },
    },
    "../src-restored/core/UIConstants.js": {
      UIConstants: {
        popup: { startDelay: 25, noThanksButtonDelay: 75 },
        coinsIndicator: { updateDelay: 125 },
      },
    },
    "../src-cjs/45878_CancelButton.js": { CancelButton },
    "../src-cjs/62671_ConfirmButton.js": { ConfirmButton },
    "../src-cjs/75663_ClaimButton.js": { ClaimButton },
    "../src-cjs/53527_ContinueButton.js": { ContinueButton },
    "../src-cjs/86602_NoThanksButton.js": { NoThanksButton },
    "../src-cjs/32715_CoinsIndicator.js": { CoinsIndicator },
    "../src-restored/ui/CoinsIndicator.js": { CoinsIndicator },
    "../src-cjs/73097_CapturingAnimated.js": { CapturingAnimated },
    "../src-cjs/79147_GiftItem.js": { GiftItem },
    "../src-cjs/66154_SelectableFighterDataSet.js": { SkinType },
    "../src-restored/core/SelectableSkins.js": { SkinType },
    "../src-cjs/49071_PopupWinIndicator.js": { PopupWinIndicator },
    "../src-cjs/94571_WinRays.js": { WinRays },
    "../src-cjs/57103_WinStars.js": { WinStars },
    "../src-cjs/36710_MultiplyBonus.js": { MultiplyBonus },
    "../src-cjs/36622_SVG.js": {
      Images: { Gift },
      SVG: { OfflineEarnings },
    },
    "../src-restored/ui/SVGAssets.js": {
      Images: { Gift },
      SVG: { OfflineEarnings },
    },
    "../src-cjs/21391__mod.js": {},
    "../src-cjs/92015__mod.js": {},
    "../src-cjs/98919__mod.js": {},
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

async function settleAsyncWork() {
  await Promise.resolve()
  await Promise.resolve()
  await Promise.resolve()
}
