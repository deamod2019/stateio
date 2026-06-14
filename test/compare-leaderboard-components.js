"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { TypesSocial, TypesFlow } = require("../src-cjs/86178__mod.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")

const ScoreType = { GLOBAL: "GLOBAL", CONTEXT: "CONTEXT" }

const TARGETS = [
  "../src-cjs/30326_LeaderBoardTabs.js",
  "../src-restored/ui/LeaderBoardTabs.js",
  "../src-cjs/14633_LeaderBoard.js",
  "../src-restored/ui/LeaderBoard.js",
  "../src-cjs/90211_LeaderBoardItem.js",
  "../src-restored/ui/LeaderBoardItem.js",
  "../src-cjs/23862_LeaderBoardInviteItem.js",
  "../src-restored/ui/LeaderBoardInviteItem.js",
]

Promise.resolve()
  .then(async () => {
    await compareTabsScenario("leaderboard tabs forwards props")
    await compareBoardScenario("leaderboard sorts users and appends invite rewards")
    await compareItemScenario("leaderboard item claims referral reward", {
      socialPlatform: "gd",
      props: {
        user: makeUser({ id: "u1", name: "Alice", score: 9, reward: { count: 50 } }),
        rank: 1,
      },
      triggerType: "ClaimButton",
    })
    await compareItemScenario("leaderboard item runs play-with flow", {
      socialPlatform: "gd",
      props: {
        user: makeUser({ id: "u2", name: "Bob", score: 7, reward: null }),
        rank: 2,
      },
      triggerType: "Button",
    })
    await compareItemScenario("leaderboard item hides play button on yandex", {
      socialPlatform: "ya",
      props: {
        user: makeUser({ id: "u3", name: "Cara", score: 0, reward: null }),
        rank: undefined,
      },
      triggerType: null,
    })
    await compareItemScenario("social leaderboard item uses cup icon branch", {
      socialPlatform: "gd",
      props: {
        user: makeUser({
          id: "u4",
          name: "Dana",
          score: 42,
          reward: null,
          rankableRank: 12,
        }),
        rank: 4,
        isSolo: false,
      },
      triggerType: null,
    })
    await compareInviteScenario("invite item requests and restarts level context")
    await compareInviteScenario("pending invite item renders disabled state", {
      pending: true,
      requestResult: false,
    })

    console.log(
      JSON.stringify(
        {
          module: "LeaderBoardTabs/LeaderBoard/LeaderBoardItem/LeaderBoardInviteItem",
          scenarios: 8,
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

async function compareTabsScenario(name) {
  const originalResult = await exerciseTabs(loadOriginalTabs)
  const restoredResult = await exerciseTabs(loadRestoredTabs)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareBoardScenario(name) {
  const originalResult = await exerciseBoard(loadOriginalBoard)
  const restoredResult = await exerciseBoard(loadRestoredBoard)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareItemScenario(name, options) {
  const originalResult = await exerciseItem(loadOriginalItem, options)
  const restoredResult = await exerciseItem(loadRestoredItem, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareInviteScenario(name, options = {}) {
  const originalResult = await exerciseInvite(loadOriginalInvite, options)
  const restoredResult = await exerciseInvite(loadRestoredInvite, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseTabs(loadModule) {
  const records = []
  const mocks = createMocks({ records })

  return withMockedModules(mocks, async () => {
    const { LeaderBoardTabs } = loadModule()
    const props = {
      activeTab: 0,
      className: "tabs",
      leaderboardsProps: {
        users: [makeOrigin({ id: "a", scoreGlobal: 1 })],
        scoreType: ScoreType.GLOBAL,
        onClose: "[onClose]",
      },
    }
    const vnode = LeaderBoardTabs(props)
    return normalize({ vnode: normalizeTabsVNode(vnode), records })
  })
}

async function exerciseBoard(loadModule) {
  const records = []
  const refRewardsModel = createRefRewardsModel(records)
  const mocks = createMocks({ records, refRewardsModel })

  return withMockedModules(mocks, async () => {
    const { LeaderBoard } = loadModule()
    const users = [
      makeOrigin({ id: "u-low", name: "Low", photo: "low.png", scoreGlobal: 2 }),
      makeOrigin({ id: "u-high", name: "High", photo: "high.png", scoreGlobal: 10 }),
      makeOrigin({ id: "u-mid", name: "Mid", photo: "mid.png", scoreGlobal: 5 }),
    ]
    const vnode = LeaderBoard({ users, scoreType: ScoreType.GLOBAL, onClose() {} })
    return normalize({ vnode: normalizeBoardVNode(vnode), records })
  })
}

async function exerciseItem(loadModule, options) {
  const records = []
  const model = createGameModel(records)
  const refRewardsModel = createRefRewardsModel(records)
  const playWithAction = createPlayWithAction(records)
  const socialModel = createSocialModel(options.socialPlatform)
  const mocks = createMocks({
    records,
    model,
    refRewardsModel,
    playWithAction,
    socialModel,
  })

  return withMockedModules(mocks, async () => {
    const { LeaderBoardItem } = loadModule()
    const vnode = LeaderBoardItem(options.props)
    let clickResult = "__not_triggered__"
    if (options.triggerType) {
      const trigger = findVNodeByType(vnode, options.triggerType)
      assert.notEqual(trigger, null, `${options.triggerType} was not rendered`)
      clickResult = trigger.props.onClick()
      await settleAsyncWork()
    }
    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      cookie: model.cookie,
      clickResult,
    })
  })
}

async function exerciseInvite(loadModule, options) {
  const records = []
  const refRewardsModel = createRefRewardsModel(records, options.requestResult)
  const levelStartAction = createLevelStartAction(records)
  const mocks = createMocks({ records, refRewardsModel, levelStartAction })

  return withMockedModules(mocks, async () => {
    const { LeaderBoardInviteItem } = loadModule()
    const vnode = LeaderBoardInviteItem({
      pending: options.pending || false,
      reward: { count: 33, type: "coins" },
      className: "extra",
    })
    let clickResult = "__not_triggered__"
    if (!options.pending) {
      const trigger = findVNodeByType(vnode, "Button")
      assert.notEqual(trigger, null, "Button was not rendered")
      clickResult = await trigger.props.onClick()
    }
    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      waitForContextChange: levelStartAction.waitForContextChange,
      clickResult,
    })
  })
}

function loadOriginalTabs() {
  deleteTargetModules()
  return require("../src-cjs/30326_LeaderBoardTabs.js")
}

function loadRestoredTabs() {
  deleteTargetModules()
  return require("../src-restored/ui/LeaderBoardTabs.js")
}

function loadOriginalBoard() {
  deleteTargetModules()
  return require("../src-cjs/14633_LeaderBoard.js")
}

function loadRestoredBoard() {
  deleteTargetModules()
  return require("../src-restored/ui/LeaderBoard.js")
}

function loadOriginalItem() {
  deleteTargetModules()
  return require("../src-cjs/90211_LeaderBoardItem.js")
}

function loadRestoredItem() {
  deleteTargetModules()
  return require("../src-restored/ui/LeaderBoardItem.js")
}

function loadOriginalInvite() {
  deleteTargetModules()
  return require("../src-cjs/23862_LeaderBoardInviteItem.js")
}

function loadRestoredInvite() {
  deleteTargetModules()
  return require("../src-restored/ui/LeaderBoardInviteItem.js")
}

function makeOrigin({
  id,
  name = id,
  photo = `${id}.png`,
  scoreGlobal = 0,
  scoreContext = 0,
  localScore = 0,
  rankableRank,
}) {
  const origin = {
    id,
    name,
    photo,
    scoreGlobal,
    scoreContext,
    scores: {
      getScore() {
        return localScore
      },
    },
  }
  if (rankableRank !== undefined) {
    origin.getLbRecord = () => ({ rank: rankableRank })
  }
  return origin
}

function makeUser({ id, name, score, reward, rankableRank }) {
  const origin = makeOrigin({
    id,
    name,
    photo: `${id}.png`,
    scoreGlobal: score,
    rankableRank,
  })
  return {
    name,
    image_url: origin.photo,
    score,
    reward,
    origin,
  }
}

function createGameModel(records) {
  return {
    cookie: { coins: 1000 },
    records,
  }
}

function createSocialModel(platform) {
  return {
    socialPlatform: platform,
    me: makeOrigin({ id: "me", scoreGlobal: 1 }),
    opponent: makeOrigin({ id: "opponent", scoreGlobal: 2 }),
  }
}

function createRefRewardsModel(records, requestResult = true) {
  return {
    getPendingItems() {
      records.push(["refRewards.getPendingItems"])
      return [
        { rf: "pending-a", value: { count: 15 } },
        { rf: "", value: { count: 20 } },
      ]
    },
    getAvailableItems() {
      records.push(["refRewards.getAvailableItems"])
      return [
        { rf: "u-high", value: { count: 100 } },
        { rf: "u-missing", value: { count: 5 } },
      ]
    },
    claim(userId) {
      records.push(["refRewards.claim", userId])
      return true
    },
    async request(reward) {
      records.push(["refRewards.request", reward])
      return requestResult
    },
  }
}

function createPlayWithAction(records) {
  return {
    run(origin) {
      records.push(["playWith.run", origin.id])
    },
  }
}

function createLevelStartAction(records) {
  return {
    waitForContextChange: false,
    async run() {
      records.push(["levelStart.run", this.waitForContextChange])
    },
  }
}

function createMocks({
  records,
  model = createGameModel(records),
  socialModel = createSocialModel("gd"),
  refRewardsModel = createRefRewardsModel(records),
  playWithAction = createPlayWithAction(records),
  levelStartAction = createLevelStartAction(records),
}) {
  function useInjection(token) {
    records.push(["useInjection", tokenLabel(token)])
    if (token === TypesSocial.model) return socialModel
    if (token === TypesGame.model) return model
    return undefined
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

  function lazyGet(token) {
    records.push(["lazyGet", tokenLabel(token)])
    if (token === TypesSocial.refRewardsModel) return refRewardsModel
    if (token === TypesFlow.PlayWith) return playWithAction
    return null
  }

  const di = {
    get(token) {
      records.push(["di.get", tokenLabel(token)])
      if (token === TypesSocial.refRewardsModel) return refRewardsModel
      if (token === TypesFlow.LevelStart) return levelStartAction
      return null
    },
  }

  function Avatar() {}
  function Button() {}
  function Icon() {}
  function ClaimButton() {}
  function COINS() {}
  function LeaderBoardCupIcon() {}
  function LeaderBoardPlayIcon() {}
  const uiContextMock = {
    useInjection,
    Avatar,
    Button,
    Icon,
  }

  return {
    "../src-cjs/30396__mod.js": { useState },
    "../src-cjs/44656__mod.js": { di, lazyGet },
    "../src-cjs/48616__mod.js": { ScoreType },
    "../src-restored/core/SocialAppExports.js": { ScoreType },
    "../src-cjs/83430_InversifyContext.js": uiContextMock,
    "../src-restored/ui/UIContext.js": uiContextMock,
    "../src-cjs/75663_ClaimButton.js": { ClaimButton },
    "../src-cjs/86125__mod.js": {
      Localize: {
        get(key, fallback) {
          records.push(["Localize.get", key, fallback])
          return fallback
        },
      },
    },
    "../src-cjs/36622_SVG.js": {
      SVG: { COINS, LeaderBoardCupIcon, LeaderBoardPlayIcon },
    },
    "../src-restored/ui/SVGAssets.js": {
      SVG: { COINS, LeaderBoardCupIcon, LeaderBoardPlayIcon },
    },
    "../src-cjs/37725__mod.js": {
      isRankableUser(origin) {
        return origin.getLbRecord !== undefined
      },
      playUIClickSound() {
        records.push(["playUIClickSound"])
      },
    },
    "../src-restored/core/UIHelpers.js": {
      isRankableUser(origin) {
        return origin.getLbRecord !== undefined
      },
      playUIClickSound() {
        records.push(["playUIClickSound"])
      },
    },
    "../src-cjs/38319__mod.js": {
      getFontClassByDigits(value, min, max) {
        records.push(["getFontClassByDigits", value, min, max])
        if (!value) return ""
        const digits = String(value).length
        if (digits <= min) return ""
        if (digits > min && digits < max) return `f${digits}-digits`
        return `f${max}-digits`
      },
    },
    "../src-restored/core/NumberFormat.js": {
      getFontClassByDigits(value, min, max) {
        records.push(["getFontClassByDigits", value, min, max])
        if (!value) return ""
        const digits = String(value).length
        if (digits <= min) return ""
        if (digits > min && digits < max) return `f${digits}-digits`
        return `f${max}-digits`
      },
    },
    "../src-cjs/6162__mod.js": {},
    "../src-cjs/45230__mod.js": {},
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

function normalizeTabsVNode(vnode) {
  const normalized = normalizeVNode(vnode)
  if (normalized?.props?.children && typeof normalized.props.children === "object") {
    normalized.props.children.type = "[component]"
  }
  return normalized
}

function normalizeBoardVNode(vnode) {
  const normalized = normalizeVNode(vnode)
  maskBoardItemComponentTypes(normalized)
  return normalized
}

function maskBoardItemComponentTypes(node) {
  if (Array.isArray(node)) {
    for (const child of node) maskBoardItemComponentTypes(child)
    return
  }
  if (!node || typeof node !== "object") return

  const props = node.props || {}
  if (
    (Object.prototype.hasOwnProperty.call(props, "user") && Object.prototype.hasOwnProperty.call(props, "rank")) ||
    (Object.prototype.hasOwnProperty.call(props, "reward") && Object.prototype.hasOwnProperty.call(props, "pending"))
  ) {
    node.type = "[component]"
  }
  maskBoardItemComponentTypes(props.children)
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
