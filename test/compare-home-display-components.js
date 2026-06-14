"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { GameEvents } = require("../src-cjs/47283_GameEvents.js")
const { TypesSocial } = require("../src-cjs/86178__mod.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")

const AdResponse = {
  UNKNOWN: 0,
  NOT_SUPPORTED: 1,
  PLAYED: 2,
  THROTTLED: 3,
  NO_FILL: 4,
  CANCELLED: 5,
  FAILED: 6,
}

const BOOSTER_CONFIGS = [
  {
    id: "BoosterType.START_UNITS",
    className: "booster-start-units",
    disabled: true,
    defaultCount: 10,
    title: { i18n: "ui-upgrade-start_units", default: "START UNITS" },
    description: { i18n: "ui-upgrade-units", default: "units" },
  },
  {
    id: "BoosterType.START_PRODUCE",
    className: "booster-produce-speed",
    disabled: false,
    defaultCount: "10",
    title: { i18n: "ui-upgrade-produce_speed", default: "PRODUCE SPEED" },
    description: { i18n: "ui-upgrate-rate", default: "units per second" },
  },
  {
    id: "BoosterType.OFFLINE_EARNINGS",
    className: "booster-offline-earnings",
    disabled: false,
    defaultCount: 10,
    title: { i18n: "ui-offline-title", default: "OFFLINE EARNINGS" },
    description: { i18n: "ui-upgrade-offline", default: "coins per hour" },
  },
]

const TARGETS = [
  "../src-cjs/20911_LevelTitle.js",
  "../src-restored/ui/LevelTitle.js",
  "../src-cjs/10065_Capturing.js",
  "../src-restored/ui/Capturing.js",
  "../src-cjs/69080_UserStatusInfo.js",
  "../src-restored/ui/UserStatusInfo.js",
  "../src-cjs/79631_ProgressSection.js",
  "../src-restored/ui/ProgressSection.js",
  "../src-cjs/44966_ProgressIndicator.js",
  "../src-restored/ui/ProgressIndicator.js",
  "../src-cjs/52951_ProgressBar.js",
  "../src-restored/ui/ProgressBar.js",
  "../src-restored/ui/UIHooks.js",
  "../src-cjs/56721_Booster.js",
  "../src-restored/ui/Booster.js",
  "../src-cjs/67884_Boosters.js",
  "../src-restored/ui/Boosters.js",
]

Promise.resolve()
  .then(async () => {
    await compareLevelTitleScenario("level title renders absolute level", { absoluteLevelNum: 12 })
    await compareLevelTitleScenario("level title renders dash without model", null)
    await compareCapturingScenario("capturing renders defaults", {})
    await compareCapturingScenario("capturing renders supplied progress", {
      stages: 9,
      captured: 0.42,
      title: "CAPTURING",
      showGift: false,
    })
    await compareUserStatusScenario("authorized status hides login", true)
    await compareUserStatusScenario("unauthorized status calls login", false)
    await compareProgressSectionScenario("progress section renders transform styles")
    await compareProgressIndicatorScenario("progress indicator renders all sections")
    await compareProgressBarScenario("progress bar registers stats updates")
    await compareBoosterScenario("booster enabled click plays sound", false)
    await compareBoosterScenario("booster disabled click skips sound", true)
    await compareBoostersScenario("boosters paid upgrade branch", { enoughCoins: true })
    await compareBoostersScenario("boosters free reward branch", { enoughCoins: false })

    console.log(
      JSON.stringify(
        {
          module:
            "LevelTitle/Capturing/UserStatusInfo/ProgressBar/ProgressIndicator/ProgressSection/Booster/Boosters",
          scenarios: 13,
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

async function compareLevelTitleScenario(name, model) {
  const originalResult = await exerciseLevelTitle(loadOriginalLevelTitle, model)
  const restoredResult = await exerciseLevelTitle(loadRestoredLevelTitle, model)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareCapturingScenario(name, props) {
  const originalResult = await exerciseCapturing(loadOriginalCapturing, props)
  const restoredResult = await exerciseCapturing(loadRestoredCapturing, props)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareUserStatusScenario(name, authorized) {
  const originalResult = await exerciseUserStatus(loadOriginalUserStatus, authorized)
  const restoredResult = await exerciseUserStatus(loadRestoredUserStatus, authorized)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareProgressSectionScenario(name) {
  const originalResult = await exerciseProgressSection(loadOriginalProgressSection)
  const restoredResult = await exerciseProgressSection(loadRestoredProgressSection)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareProgressIndicatorScenario(name) {
  const originalResult = await exerciseProgressIndicator(loadOriginalProgressIndicator)
  const restoredResult = await exerciseProgressIndicator(loadRestoredProgressIndicator)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareProgressBarScenario(name) {
  const originalResult = await exerciseProgressBar(loadOriginalProgressBar)
  const restoredResult = await exerciseProgressBar(loadRestoredProgressBar)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareBoosterScenario(name, disabled) {
  const originalResult = await exerciseBooster(loadOriginalBooster, disabled)
  const restoredResult = await exerciseBooster(loadRestoredBooster, disabled)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareBoostersScenario(name, options) {
  const originalResult = await exerciseBoosters(loadOriginalBoosters, options)
  const restoredResult = await exerciseBoosters(loadRestoredBoosters, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseLevelTitle(loadModule, model) {
  const records = []
  const mocks = createCommonMocks({ records, model })

  return withMockedModules(mocks, async () => {
    const { LevelTitle } = loadModule()
    const vnode = LevelTitle()

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
    })
  })
}

async function exerciseCapturing(loadModule, props) {
  const records = []
  const mocks = createCommonMocks({ records })

  return withMockedModules(mocks, async () => {
    const { Capturing } = loadModule()
    const vnode = Capturing(props)

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
    })
  })
}

async function exerciseUserStatus(loadModule, authorized) {
  const records = []
  const mocks = createCommonMocks({ records })

  return withMockedModules(mocks, async () => {
    const { UserStatusInfo } = loadModule()
    const vnode = UserStatusInfo({
      className: "wide",
      authorized,
      onLogin: () => records.push(["props.onLogin"]),
    })
    const button = findVNodeByType(vnode, "button")
    const clickResult = button ? button.props.onClick() : undefined

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      clickResult,
    })
  })
}

async function exerciseProgressSection(loadModule) {
  const records = []
  const mocks = createCommonMocks({ records })

  return withMockedModules(mocks, async () => {
    const { ProgressSection } = loadModule()
    const vnode = ProgressSection({
      x: 0.25,
      progress: 0.5,
      fill: "#123456",
      className: "slice",
    })

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
    })
  })
}

async function exerciseProgressIndicator(loadModule) {
  const records = []
  const mocks = createCommonMocks({ records })

  return withMockedModules(mocks, async () => {
    const { ProgressIndicator } = loadModule()
    const vnode = ProgressIndicator({
      itemsToDiplay: [
        [0, 0.4, "#ff0000"],
        [0.4, 0.6, "#00ff00"],
      ],
    })

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
    })
  })
}

async function exerciseProgressBar(loadModule) {
  const records = []
  const listeners = []
  const skinManager = {
    getColorBy(owner) {
      records.push(["skinManager.getColorBy", owner])
      return owner === 1 ? ["#111111", "unused"] : ["#222222", "unused"]
    },
  }
  const mocks = createCommonMocks({ records, listeners, skinManager })

  return withMockedModules(mocks, async () => {
    const { ProgressBar } = loadModule()
    const participants = [{ id: "p1" }, { id: "p2" }]
    const vnode = ProgressBar({ participants })
    const listener = listeners.find((entry) => entry.event === GameEvents.STATS_UPDATED)
    assert.notEqual(listener, undefined, "stats listener missing")
    listener.handler({
      totalValue: 10,
      items: [
        { owner: 1, count: 4 },
        { owner: 2, count: 6 },
      ],
    })

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
    })
  })
}

async function exerciseBooster(loadModule, disabled) {
  const records = []
  const mocks = createCommonMocks({ records })

  return withMockedModules(mocks, async () => {
    const { Booster } = loadModule()
    const vnode = Booster({
      id: "BoosterType.START_UNITS",
      title: { i18n: "title-key", default: "Title" },
      description: { i18n: "desc-key", default: "Description" },
      disabled,
      isFree: !disabled,
      defaultCount: "123",
      price: 4567,
      levelNum: 12,
      className: "custom",
      onClick: () => records.push(["props.onClick"]),
    })
    const button = findVNodeByType(vnode, "button")
    const clickResult = button.props.onClick()

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      clickResult,
    })
  })
}

async function exerciseBoosters(loadModule, options) {
  const records = []
  const listeners = []
  const effects = []
  const model = createBoosterModel({ records, enoughCoins: options.enoughCoins })
  const social = { session: { ftue: false } }
  const mocks = createCommonMocks({ records, listeners, effects, model, social })

  return withMockedModules(mocks, async () => {
    const { Boosters } = loadModule()
    const vnode = Boosters({ className: "home" })

    for (const effect of effects) effect()
    const gameListener = listeners.find((entry) => entry.event === GameEvents.COINS_UPDATED)
    const yandexListener = listeners.find((entry) => entry.event === "YANDEX_SYNC")
    assert.notEqual(gameListener, undefined, "coins listener missing")
    assert.notEqual(yandexListener, undefined, "yandex listener missing")
    gameListener.handler()
    yandexListener.handler()

    const latestStateRecord = [...records].reverse().find((entry) => entry[0] === "setStateObject")
    assert.notEqual(latestStateRecord, undefined, "processed booster state missing")
    const processedBoosters = latestStateRecord[1].boosters
    const clickable = options.enoughCoins
      ? processedBoosters[0]
      : processedBoosters.find((booster) => booster.isFree)
    assert.notEqual(clickable, undefined, "clickable booster missing")
    await clickable.onClick()

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
    })
  })
}

function createBoosterModel({ records, enoughCoins }) {
  return {
    absoluteLevelNum: 3,
    cookie: {
      coins: 999,
      playerStartPopulation: 2,
      playerSpawnLevel: 3,
      playerOfflineLevel: 4,
      isEnoughCoins(price) {
        records.push(["cookie.isEnoughCoins", price])
        return enoughCoins
      },
    },
    meta: {
      getStartPopulationCost() {
        records.push(["meta.getStartPopulationCost"])
        return 100
      },
      getPopulationRateCost() {
        records.push(["meta.getPopulationRateCost"])
        return 200
      },
      getOfflineEarningCost() {
        records.push(["meta.getOfflineEarningCost"])
        return 300
      },
      getStartPopulation(playerType) {
        records.push(["meta.getStartPopulation", playerType])
        return 12
      },
      getPlayerGenerationRateValue(levelNum) {
        records.push(["meta.getPlayerGenerationRateValue", levelNum])
        return 4.567
      },
      getOfflineEarning() {
        records.push(["meta.getOfflineEarning"])
        return 88
      },
      increaseStartPopulation() {
        records.push(["meta.increaseStartPopulation"])
      },
      increaseSpawn() {
        records.push(["meta.increaseSpawn"])
      },
      increaseOffline() {
        records.push(["meta.increaseOffline"])
      },
      increaseStartPopulationFree() {
        records.push(["meta.increaseStartPopulationFree"])
      },
      increaseSpawnFree() {
        records.push(["meta.increaseSpawnFree"])
      },
      increaseOfflineFree() {
        records.push(["meta.increaseOfflineFree"])
      },
    },
  }
}

function loadOriginalLevelTitle() {
  deleteTargetModules()
  return require("../src-cjs/20911_LevelTitle.js")
}

function loadRestoredLevelTitle() {
  deleteTargetModules()
  return require("../src-restored/ui/LevelTitle.js")
}

function loadOriginalCapturing() {
  deleteTargetModules()
  return require("../src-cjs/10065_Capturing.js")
}

function loadRestoredCapturing() {
  deleteTargetModules()
  return require("../src-restored/ui/Capturing.js")
}

function loadOriginalUserStatus() {
  deleteTargetModules()
  return require("../src-cjs/69080_UserStatusInfo.js")
}

function loadRestoredUserStatus() {
  deleteTargetModules()
  return require("../src-restored/ui/UserStatusInfo.js")
}

function loadOriginalProgressSection() {
  deleteTargetModules()
  return require("../src-cjs/79631_ProgressSection.js")
}

function loadRestoredProgressSection() {
  deleteTargetModules()
  return require("../src-restored/ui/ProgressSection.js")
}

function loadOriginalProgressIndicator() {
  deleteTargetModules()
  return require("../src-cjs/44966_ProgressIndicator.js")
}

function loadRestoredProgressIndicator() {
  deleteTargetModules()
  return require("../src-restored/ui/ProgressIndicator.js")
}

function loadOriginalProgressBar() {
  deleteTargetModules()
  return require("../src-cjs/52951_ProgressBar.js")
}

function loadRestoredProgressBar() {
  deleteTargetModules()
  return require("../src-restored/ui/ProgressBar.js")
}

function loadOriginalBooster() {
  deleteTargetModules()
  return require("../src-cjs/56721_Booster.js")
}

function loadRestoredBooster() {
  deleteTargetModules()
  return require("../src-restored/ui/Booster.js")
}

function loadOriginalBoosters() {
  deleteTargetModules()
  return require("../src-cjs/67884_Boosters.js")
}

function loadRestoredBoosters() {
  deleteTargetModules()
  return require("../src-restored/ui/Boosters.js")
}

function createCommonMocks({
  records,
  model = { absoluteLevelNum: 12 },
  social = { session: { ftue: false } },
  skinManager = { getColorBy: () => ["#000000", "unused"] },
  listeners = [],
  effects = [],
}) {
  function SvgCapturingProgress() {}
  function Gift() {}
  function Participants() {}
  function ProgressSection() {}
  function BoosterStartUnitsIcon() {}
  function BoosterStartUnits() {}
  function BoosterProduceSpeedIcon() {}
  function BoosterProduceSpeed() {}
  function BoosterOfflineEarningsIcon() {}
  function COINS() {}
  function Video() {}

  function lazyGet(token) {
    records.push(["lazyGet", tokenLabel(token)])
    if (token === TypesGame.model) return model
    return undefined
  }

  function useInjection(token) {
    records.push(["useInjection", tokenLabel(token)])
    if (token === TypesGame.model) return model
    if (token === TypesGame.skinManager) return skinManager
    if (token === TypesSocial.model) return social
    return undefined
  }

  let stateStore
  function useState(initialValue) {
    records.push(["useState", typeof initialValue === "function" ? "function" : normalize(initialValue)])
    stateStore = typeof initialValue === "function" ? initialValue() : initialValue
    function setState(value) {
      const next = typeof value === "function" ? value(stateStore) : value
      stateStore = next
      records.push(["setState", normalize(next)])
      records.push(["setStateObject", next])
    }
    return [stateStore, setState]
  }

  function useEffect(effect, deps) {
    records.push(["useEffect", normalize(deps), typeof effect])
    effects.push(effect)
  }

  function useEventListener(event, handler, deps) {
    records.push(["useEventListener", event, typeof handler, normalize(deps)])
    listeners.push({ event, handler })
  }

  return {
    "../src-cjs/44656__mod.js": { lazyGet },
    "../src-restored/core/RuntimeCore.js": { lazyGet },
    "../src-cjs/86125__mod.js": {
      Localize: {
        get(key, fallback) {
          records.push(["Localize.get", key, fallback])
          return fallback
        },
      },
    },
    "../src-cjs/83430_InversifyContext.js": {
      useInjection,
      useEventListener,
    },
    "../src-restored/ui/UIContext.js": {
      useInjection,
      useEventListener,
    },
    "../src-cjs/30396__mod.js": {
      useState,
      useEffect,
    },
    "../src-restored/ui/preactHooks.js": {
      useState,
      useEffect,
    },
    "../src-cjs/52472_SvgCapturingProgress.js": { SvgCapturingProgress },
    "../src-restored/ui/SvgCapturingProgress.js": { SvgCapturingProgress },
    "../src-cjs/36622_SVG.js": {
      Images: { Gift },
      SVG: {
        BoosterStartUnitsIcon,
        BoosterStartUnits,
        BoosterProduceSpeedIcon,
        BoosterProduceSpeed,
        BoosterOfflineEarningsIcon,
        COINS,
        Video,
      },
    },
    "../src-restored/ui/SVGAssets.js": {
      Images: { Gift },
      SVG: {
        BoosterStartUnitsIcon,
        BoosterStartUnits,
        BoosterProduceSpeedIcon,
        BoosterProduceSpeed,
        BoosterOfflineEarningsIcon,
        COINS,
        Video,
      },
    },
    "../src-cjs/9931_Participants.js": { Participants },
    "../src-restored/ui/Participants.js": { Participants },
    "../src-cjs/79631_ProgressSection.js": { ProgressSection },
    "../src-restored/ui/ProgressSection.js": { ProgressSection },
    "../src-cjs/47283_GameEvents.js": {
      GameEvents: { STATS_UPDATED: GameEvents.STATS_UPDATED, COINS_UPDATED: GameEvents.COINS_UPDATED },
    },
    "../src-restored/core/GameEvents.js": {
      GameEvents: { STATS_UPDATED: GameEvents.STATS_UPDATED, COINS_UPDATED: GameEvents.COINS_UPDATED },
    },
    "../src-cjs/86178__mod.js": { TypesSocial, AdResponse },
    "../src-cjs/95781_TypesGame.js": { TypesGame },
    "../src-cjs/74083_UIConstants.js": {
      UIConstants: { boosters: BOOSTER_CONFIGS },
    },
    "../src-restored/core/UIConstants.js": {
      UIConstants: { boosters: BOOSTER_CONFIGS },
    },
    "../src-cjs/77577__mod.js": {
      math: {
        round(value, precision) {
          records.push(["math.round", value, precision])
          return Math.round(value * precision) / precision
        },
      },
    },
    "../src-restored/core/MathUtils.js": {
      math: {
        round(value, precision) {
          records.push(["math.round", value, precision])
          return Math.round(value * precision) / precision
        },
      },
    },
    "../src-cjs/36596_PlayerType.js": {
      PlayerType: {
        First: 1,
      },
    },
    "../src-cjs/37725__mod.js": {
      playUIClickSound() {
        records.push(["playUIClickSound"])
      },
      async showReward() {
        records.push(["showReward"])
        return AdResponse.PLAYED
      },
    },
    "../src-restored/core/UIHelpers.js": {
      playUIClickSound() {
        records.push(["playUIClickSound"])
      },
      async showReward() {
        records.push(["showReward"])
        return AdResponse.PLAYED
      },
    },
    "../src-cjs/38319__mod.js": {
      getFontClassByDigits(value, min = 4, max = 9) {
        const length = value ? value.toString().length : 0
        if (length <= min) return ""
        if (length > min && length < max) return `f${length}-digits`
        return `f${max}-digits`
      },
      toFixedString(value, digits = 2, separator = ".") {
        const text = value.toString(10)
        const index = text.indexOf(separator)
        return index === -1 ? text : text.substr(0, index + 1 + digits)
      },
    },
    "../src-restored/core/NumberFormat.js": {
      getFontClassByDigits(value, min = 4, max = 9) {
        const length = value ? value.toString().length : 0
        if (length <= min) return ""
        if (length > min && length < max) return `f${length}-digits`
        return `f${max}-digits`
      },
      toFixedString(value, digits = 2, separator = ".") {
        const text = value.toString(10)
        const index = text.indexOf(separator)
        return index === -1 ? text : text.substr(0, index + 1 + digits)
      },
    },
    "../src-cjs/44365_SIOConstants.js": {
      SIOConstants: { REWARD_AD_PLAYED: new Map() },
    },
    "../src-restored/core/SIOConstants.js": {
      SIOConstants: { REWARD_AD_PLAYED: new Map() },
    },
    "../src-cjs/89264__mod.js": {},
    "../src-cjs/58319__mod.js": {},
    "../src-cjs/34365__mod.js": {},
    "../src-cjs/19963__mod.js": {},
    "../src-cjs/67566__mod.js": {},
    "../src-cjs/46193__mod.js": {},
    "../src-cjs/70461__mod.js": {},
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
  if (typeof type === "function") {
    if (type.name === "ProgressSection") return "[anonymous]"
    if (type.name === "ProgressIndicator") return "[anonymous]"
    if (type.name === "Booster") return "[anonymous]"
    return type.name || "[anonymous]"
  }
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
