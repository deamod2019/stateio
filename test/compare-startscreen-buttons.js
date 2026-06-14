"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesFlow, TypesSocial } = require("../src-cjs/86178__mod.js")

const SOCIAL_POPUP = {
  ACCEPTED: "accepted",
  CANCELLED: "cancelled",
}

const TARGETS = [
  "../src-cjs/55378_InviteButton.js",
  "../src-restored/ui/InviteButton.js",
  "../src-cjs/82978_ShopButton.js",
  "../src-restored/ui/ShopButton.js",
  "../src-cjs/53309_TapToPlayButton.js",
  "../src-restored/ui/TapToPlayButton.js",
  "../src-restored/ui/UIHooks.js",
  "../src-cjs/14954_NoAdsButton.js",
  "../src-restored/ui/NoAdsButton.js",
]

Promise.resolve()
  .then(async () => {
    await compareInviteScenario("invite accepted restarts level", SOCIAL_POPUP.ACCEPTED)
    await compareInviteScenario("invite cancelled skips restart", SOCIAL_POPUP.CANCELLED)
    await compareShopScenario("shop button renders notification", true)
    await compareShopScenario("shop button renders without notification", false)
    await compareTapToPlayScenario("tap to play animates and delays callback")
    await compareNoAdsScenario("no ads button renders and forwards click")

    console.log(
      JSON.stringify(
        {
          module: "InviteButton/ShopButton/TapToPlayButton/NoAdsButton",
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

async function compareInviteScenario(name, inviteResult) {
  const originalResult = await exerciseInvite(loadOriginalInvite, inviteResult)
  const restoredResult = await exerciseInvite(loadRestoredInvite, inviteResult)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareShopScenario(name, showNotification) {
  const originalResult = await exerciseShop(loadOriginalShop, showNotification)
  const restoredResult = await exerciseShop(loadRestoredShop, showNotification)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareTapToPlayScenario(name) {
  const originalResult = await exerciseTapToPlay(loadOriginalTapToPlay)
  const restoredResult = await exerciseTapToPlay(loadRestoredTapToPlay)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareNoAdsScenario(name) {
  const originalResult = await exerciseNoAds(loadOriginalNoAds)
  const restoredResult = await exerciseNoAds(loadRestoredNoAds)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseInvite(loadModule, inviteResult) {
  const records = []
  const mocks = createMocks({ records, inviteResult })

  return withMockedModules(mocks, async () => {
    const { InviteButton } = loadModule()
    const vnode = InviteButton({
      options: { source: "home" },
      onClick: () => records.push(["props.onClick"]),
    })
    const clickResult = await vnode.props.onClick()

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      clickResult,
    })
  })
}

async function exerciseShop(loadModule, showNotification) {
  const records = []
  const mocks = createMocks({ records })

  return withMockedModules(mocks, async () => {
    const { ShopButton } = loadModule()
    const vnode = ShopButton({
      className: "wide",
      showNotification,
      onClick: () => records.push(["props.onClick"]),
    })
    const clickResult = vnode.props.onClick()

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      clickResult,
    })
  })
}

async function exerciseTapToPlay(loadModule) {
  const records = []
  const mocks = createMocks({ records })

  return withMockedModules(mocks, async () => {
    const { TapToPlayButton } = loadModule()
    const vnode = TapToPlayButton({
      className: "primary",
      onDown: () => records.push(["props.onDown"]),
      onClick: () => records.push(["props.onClick"]),
    })
    const clickResult = await vnode.props.onClick()

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      clickResult,
    })
  })
}

async function exerciseNoAds(loadModule) {
  const records = []
  const mocks = createMocks({ records })

  return withMockedModules(mocks, async () => {
    const { NoAdsButton } = loadModule()
    const vnode = NoAdsButton({
      className: "compact",
      onClick: () => records.push(["props.onClick"]),
    })
    const clickResult = vnode.props.onClick()

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      clickResult,
    })
  })
}

function loadOriginalInvite() {
  deleteTargetModules()
  return require("../src-cjs/55378_InviteButton.js")
}

function loadRestoredInvite() {
  deleteTargetModules()
  return require("../src-restored/ui/InviteButton.js")
}

function loadOriginalShop() {
  deleteTargetModules()
  return require("../src-cjs/82978_ShopButton.js")
}

function loadRestoredShop() {
  deleteTargetModules()
  return require("../src-restored/ui/ShopButton.js")
}

function loadOriginalTapToPlay() {
  deleteTargetModules()
  return require("../src-cjs/53309_TapToPlayButton.js")
}

function loadRestoredTapToPlay() {
  deleteTargetModules()
  return require("../src-restored/ui/TapToPlayButton.js")
}

function loadOriginalNoAds() {
  deleteTargetModules()
  return require("../src-cjs/14954_NoAdsButton.js")
}

function loadRestoredNoAds() {
  deleteTargetModules()
  return require("../src-restored/ui/NoAdsButton.js")
}

function createMocks({ records, inviteResult = SOCIAL_POPUP.ACCEPTED }) {
  function Button() {}
  function ExclamationMarkNotificator() {}

  const socialModel = {
    async invite(options, openNativePopup) {
      records.push(["social.invite", normalize(options), openNativePopup])
      return inviteResult
    },
  }

  const levelStart = {
    async run() {
      records.push(["LevelStart.run"])
      return "level-started"
    },
  }

  function get(token) {
    records.push(["di.get", tokenLabel(token)])
    if (token === TypesSocial.model) return socialModel
    if (token === TypesFlow.LevelStart) return levelStart
    return undefined
  }

  const stateStore = []
  function useState(initialValue) {
    records.push(["useState", typeof initialValue])
    const state = typeof initialValue === "function" ? initialValue() : initialValue
    stateStore[0] = state
    function setState(value) {
      const next = typeof value === "function" ? value(stateStore[0]) : value
      stateStore[0] = next
      records.push(["setState", normalize(next)])
    }
    return [state, setState]
  }

  return {
    "../src-cjs/44656__mod.js": {
      di: { get },
      WaitAction: {
        ms(milliseconds) {
          records.push(["WaitAction.ms", milliseconds])
          return Promise.resolve(milliseconds)
        },
      },
    },
    "../src-restored/core/RuntimeCore.js": {
      di: { get },
    },
    "../src-restored/core/WaitAction.js": {
      WaitAction: {
        ms(milliseconds) {
          records.push(["WaitAction.ms", milliseconds])
          return Promise.resolve(milliseconds)
        },
      },
    },
    "../src-cjs/86178__mod.js": { TypesFlow, TypesSocial },
    "../src-cjs/48616__mod.js": { SOCIAL_POPUP },
    "../src-restored/core/SocialAppExports.js": { SOCIAL_POPUP },
    "../src-cjs/83430_InversifyContext.js": { Button },
    "../src-cjs/5777_ExclamationMarkNotificator.js": { ExclamationMarkNotificator },
    "../src-cjs/30396__mod.js": { useState },
    "../src-restored/ui/preactHooks.js": { useState },
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
    "../src-cjs/74083_UIConstants.js": {
      UIConstants: {
        tapToPlayButton: {
          showGoDelay: 140,
          hideDelay: 420,
        },
      },
    },
    "../src-restored/core/UIConstants.js": {
      UIConstants: {
        tapToPlayButton: {
          showGoDelay: 140,
          hideDelay: 420,
        },
      },
    },
    "../src-cjs/69130__mod.js": {},
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
