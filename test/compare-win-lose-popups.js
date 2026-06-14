"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesCore, TypesFlow, AdResponse } = require("../src-cjs/86178__mod.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")

const TARGETS = [
  "../src-cjs/46696_WinStagePopup.js",
  "../src-restored/ui/WinStagePopup.js",
  "../src-cjs/53841_LosePopup.js",
  "../src-restored/ui/LosePopup.js",
  "../src-restored/ui/UIHooks.js",
]

Promise.resolve()
  .then(async () => {
    await compareWinScenario("win claim branch renders and no-thanks closes through interstitial", {
      popupInvisible: true,
      state: { startCoinsTotal: 100, adViewed: false, reward: 77 },
      triggerType: "NoThanksButton",
      expectedControlType: "ClaimButton",
      props: { coins: 20, showRewardAd: true, animationEnabled: true },
    })
    await compareWinScenario("win reward ad marks state as viewed", {
      popupInvisible: false,
      state: { startCoinsTotal: 110, adViewed: false, reward: 0 },
      triggerType: "ClaimButton",
      expectedControlType: "ClaimButton",
      props: { coins: 15, showRewardAd: true, animationEnabled: false },
    })
    await compareWinScenario("win continue branch pays claimed reward", {
      popupInvisible: false,
      state: { startCoinsTotal: 120, adViewed: true, reward: 45 },
      triggerType: "ContinueButton",
      expectedControlType: "ContinueButton",
      props: { coins: 15, showRewardAd: true, animationEnabled: false },
    })
    await compareWinScenario("disabled rewarded ad uses continue branch", {
      popupInvisible: false,
      state: { startCoinsTotal: 130, adViewed: false, reward: 25 },
      triggerType: "ContinueButton",
      expectedControlType: "ContinueButton",
      props: { coins: 25, showRewardAd: false, animationEnabled: true },
    })
    await compareLoseScenario("lose popup pays reward and runs next flow", {
      state: { startCoinsTotal: 210, reward: 33, visible: true },
      props: { coins: 33, animationEnabled: true },
    })
    await compareLoseScenario("lose popup without animation keeps continue behavior", {
      state: { startCoinsTotal: 220, reward: 12, visible: false },
      props: { coins: 12, animationEnabled: false },
    })

    console.log(
      JSON.stringify(
        {
          module: "WinStagePopup/LosePopup",
          scenarios: 6,
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

async function compareWinScenario(name, options) {
  const originalResult = await exerciseWinPopup(loadOriginalWin, options)
  const restoredResult = await exerciseWinPopup(loadRestoredWin, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareLoseScenario(name, options) {
  const originalResult = await exerciseLosePopup(loadOriginalLose, options)
  const restoredResult = await exerciseLosePopup(loadRestoredLose, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseWinPopup(loadModule, options) {
  const records = []
  const model = createModel()
  const dispatcher = createDispatcher(records)
  const mocks = createMocks({
    records,
    model,
    dispatcher,
    popupInvisible: options.popupInvisible,
    state: options.state,
  })

  return withMockedModules(mocks, async () => {
    const { WinStagePopup } = loadModule()
    const props = Object.assign({}, options.props, {
      onContinue(value) {
        records.push(["onContinue", value])
        return Promise.resolve(`continued:${value}`)
      },
    })
    const vnode = WinStagePopup(props)
    const normalizedVNode = normalizeVNode(vnode)

    assert.notEqual(
      findVNodeByType(vnode, options.expectedControlType),
      null,
      `${options.expectedControlType} branch was not rendered`,
    )

    const trigger = findVNodeByType(vnode, options.triggerType)
    assert.notEqual(trigger, null, `${options.triggerType} was not rendered`)
    const clickResult = await trigger.props.onClick()

    return normalize({
      vnode: normalizedVNode,
      records,
      modelCoins: model.cookie.coins,
      clickResult,
    })
  })
}

async function exerciseLosePopup(loadModule, options) {
  const records = []
  const model = createModel()
  const dispatcher = createDispatcher(records)
  const mocks = createMocks({ records, model, dispatcher, state: options.state })

  return withMockedModules(mocks, async () => {
    const { LosePopup } = loadModule()
    const vnode = LosePopup(options.props)
    const normalizedVNode = normalizeVNode(vnode)
    const trigger = findVNodeByType(vnode, "ContinueButton")
    assert.notEqual(trigger, null, "ContinueButton was not rendered")
    const clickResult = await trigger.props.onClick()

    return normalize({
      vnode: normalizedVNode,
      records,
      modelCoins: model.cookie.coins,
      clickResult,
    })
  })
}

function loadOriginalWin() {
  deleteTargetModules()
  return require("../src-cjs/46696_WinStagePopup.js")
}

function loadRestoredWin() {
  deleteTargetModules()
  return require("../src-restored/ui/WinStagePopup.js")
}

function loadOriginalLose() {
  deleteTargetModules()
  return require("../src-cjs/53841_LosePopup.js")
}

function loadRestoredLose() {
  deleteTargetModules()
  return require("../src-restored/ui/LosePopup.js")
}

function createModel() {
  return { cookie: { coins: 500 } }
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

  function visibilityEffect(delay) {
    records.push(["visibilityEffect", delay])
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

  function CoinsIndicator() {}
  function PopupWinIndicator() {}
  function ContinueButton() {}
  function NoThanksButton() {}
  function WinRays() {}
  function WinStars() {}
  function ClaimButton() {}
  function PopupWinCup() {}
  function PopupLose() {}

  return {
    "../src-cjs/83430_InversifyContext.js": {
      UIEvents: { POPUP: "UIEvents.POPUP" },
      useInjection,
      visibilityEffect,
    },
    "../src-restored/ui/UIContext.js": {
      UIEvents: { POPUP: "UIEvents.POPUP" },
      useInjection,
      visibilityEffect,
    },
    "../src-cjs/30396__mod.js": { useState, useEffect },
    "../src-restored/ui/preactHooks.js": { useState, useEffect },
    "../src-cjs/44365_SIOConstants.js": { SIOConstants: { CLAIM_FACTOR: 3 } },
    "../src-restored/core/SIOConstants.js": { SIOConstants: { CLAIM_FACTOR: 3 } },
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
    "../src-cjs/32715_CoinsIndicator.js": { CoinsIndicator },
    "../src-restored/ui/CoinsIndicator.js": { CoinsIndicator },
    "../src-cjs/49071_PopupWinIndicator.js": { PopupWinIndicator },
    "../src-cjs/53527_ContinueButton.js": { ContinueButton },
    "../src-cjs/86602_NoThanksButton.js": { NoThanksButton },
    "../src-cjs/94571_WinRays.js": { WinRays },
    "../src-cjs/57103_WinStars.js": { WinStars },
    "../src-cjs/75663_ClaimButton.js": { ClaimButton },
    "../src-cjs/36622_SVG.js": { SVG: { PopupWinCup, PopupLose } },
    "../src-restored/ui/SVGAssets.js": { SVG: { PopupWinCup, PopupLose } },
    "../src-cjs/20621__mod.js": {},
    "../src-cjs/52388__mod.js": {},
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
