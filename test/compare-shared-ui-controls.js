"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { GameEvents } = require("../src-cjs/47283_GameEvents.js")
const { TypesSocial } = require("../src-cjs/86178__mod.js")

const TARGETS = [
  "../src-cjs/7161_BackButton.js",
  "../src-restored/ui/BackButton.js",
  "../src-cjs/32715_CoinsIndicator.js",
  "../src-restored/ui/CoinsIndicator.js",
  "../src-restored/ui/UIHooks.js",
  "../src-cjs/12832_SettingsButton.js",
  "../src-restored/ui/SettingsButton.js",
  "../src-cjs/29343_UserIdLabel.js",
  "../src-restored/ui/UserIdLabel.js",
]

Promise.resolve()
  .then(async () => {
    await compareBackButtonScenario("back button plays sound then callback", true)
    await compareBackButtonScenario("back button tolerates missing callback", false)
    await compareSettingsButtonScenario("settings button plays sound then callback", true)
    await compareSettingsButtonScenario("settings button tolerates missing callback", false)
    await compareCoinsScenario("coins indicator updates from game and yandex events")
    await compareUserIdScenario("user id label renders injected social id")

    console.log(
      JSON.stringify(
        {
          module: "BackButton/CoinsIndicator/SettingsButton/UserIdLabel",
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

async function compareBackButtonScenario(name, hasCallback) {
  const originalResult = await exerciseBackButton(loadOriginalBackButton, hasCallback)
  const restoredResult = await exerciseBackButton(loadRestoredBackButton, hasCallback)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareSettingsButtonScenario(name, hasCallback) {
  const originalResult = await exerciseSettingsButton(loadOriginalSettingsButton, hasCallback)
  const restoredResult = await exerciseSettingsButton(loadRestoredSettingsButton, hasCallback)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareCoinsScenario(name) {
  const originalResult = await exerciseCoins(loadOriginalCoins)
  const restoredResult = await exerciseCoins(loadRestoredCoins)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareUserIdScenario(name) {
  const originalResult = await exerciseUserId(loadOriginalUserId)
  const restoredResult = await exerciseUserId(loadRestoredUserId)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseBackButton(loadModule, hasCallback) {
  const records = []
  const mocks = createMocks({ records })

  return withMockedModules(mocks, async () => {
    const { BackButton } = loadModule()
    const vnode = BackButton({
      className: "white",
      onClick: hasCallback ? () => records.push(["props.onClick"]) : undefined,
    })
    const clickResult = vnode.props.onClick()

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      clickResult,
    })
  })
}

async function exerciseSettingsButton(loadModule, hasCallback) {
  const records = []
  const mocks = createMocks({ records })

  return withMockedModules(mocks, async () => {
    const { SettingsButton } = loadModule()
    const vnode = SettingsButton({
      className: "round",
      onClick: hasCallback ? () => records.push(["props.onClick"]) : undefined,
    })
    const clickResult = vnode.props.onClick()

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      clickResult,
    })
  })
}

async function exerciseCoins(loadModule) {
  const records = []
  const listeners = []
  const mocks = createMocks({ records, listeners })

  return withMockedModules(mocks, async () => {
    const { CoinsIndicator } = loadModule()
    const vnode = CoinsIndicator({ className: "filled", total: 123 })

    const gameListener = listeners.find((entry) => entry.event === GameEvents.COINS_UPDATED)
    const yandexListener = listeners.find((entry) => entry.event === "YANDEX_SYNC")
    assert.notEqual(gameListener, undefined, "game coins listener missing")
    assert.notEqual(yandexListener, undefined, "yandex sync listener missing")
    gameListener.handler({ coins: 456 })
    yandexListener.handler({ coins: 789 })

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
    })
  })
}

async function exerciseUserId(loadModule) {
  const records = []
  const social = { me: { id: "user-123" } }
  const mocks = createMocks({ records, social })

  return withMockedModules(mocks, async () => {
    const { UserIdLabel } = loadModule()
    const vnode = UserIdLabel()
    return normalize({
      vnode: normalizeVNode(vnode),
      records,
    })
  })
}

function loadOriginalBackButton() {
  deleteTargetModules()
  return require("../src-cjs/7161_BackButton.js")
}

function loadRestoredBackButton() {
  deleteTargetModules()
  return require("../src-restored/ui/BackButton.js")
}

function loadOriginalCoins() {
  deleteTargetModules()
  return require("../src-cjs/32715_CoinsIndicator.js")
}

function loadRestoredCoins() {
  deleteTargetModules()
  return require("../src-restored/ui/CoinsIndicator.js")
}

function loadOriginalSettingsButton() {
  deleteTargetModules()
  return require("../src-cjs/12832_SettingsButton.js")
}

function loadRestoredSettingsButton() {
  deleteTargetModules()
  return require("../src-restored/ui/SettingsButton.js")
}

function loadOriginalUserId() {
  deleteTargetModules()
  return require("../src-cjs/29343_UserIdLabel.js")
}

function loadRestoredUserId() {
  deleteTargetModules()
  return require("../src-restored/ui/UserIdLabel.js")
}

function createMocks({ records, listeners = [], social = { me: { id: "me" } } }) {
  function Button() {}
  function BackButtonIcon() {}
  function Settings() {}
  function COINS() {}
  function CoinsField() {}

  function useState(initialValue) {
    records.push(["useState", normalize(initialValue)])
    function setState(value) {
      records.push(["setState", normalize(value)])
    }
    return [initialValue, setState]
  }

  function useEventListener(event, handler) {
    records.push(["useEventListener", event, typeof handler])
    listeners.push({ event, handler })
  }

  function useInjection(token) {
    records.push(["useInjection", tokenLabel(token)])
    if (token === TypesSocial.model) return social
    return undefined
  }

  return {
    "../src-cjs/30396__mod.js": { useState },
    "../src-restored/ui/preactHooks.js": { useState },
    "../src-cjs/83430_InversifyContext.js": {
      Button,
      useEventListener,
      useInjection,
    },
    "../src-restored/ui/UIContext.js": {
      Button,
      useEventListener,
      useInjection,
    },
    "../src-cjs/36622_SVG.js": {
      SVG: { BackButton: BackButtonIcon, Settings, COINS },
    },
    "../src-restored/ui/SVGAssets.js": {
      SVG: { BackButton: BackButtonIcon, Settings, COINS },
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
    "../src-cjs/47283_GameEvents.js": {
      GameEvents: { COINS_UPDATED: GameEvents.COINS_UPDATED },
    },
    "../src-restored/core/GameEvents.js": {
      GameEvents: { COINS_UPDATED: GameEvents.COINS_UPDATED },
    },
    "../src-cjs/46766_CoinsField.js": { CoinsField },
    "../src-cjs/86178__mod.js": { TypesSocial },
    "../src-cjs/89991__mod.js": {},
    "../src-cjs/13283__mod.js": {},
    "../src-cjs/35836__mod.js": {},
    "../src-cjs/9356__mod.js": {},
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
