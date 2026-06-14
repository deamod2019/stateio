"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const TARGETS = [
  "../src-cjs/96087_LeaderboardButton.js",
  "../src-restored/ui/LeaderboardButton.js",
  "../src-cjs/41976_LeaderboardGlobalExternal.js",
  "../src-restored/core/LeaderboardGlobalExternal.js",
  "../src-cjs/97954_LeaderboardGlobalYandex.js",
  "../src-restored/core/LeaderboardGlobalYandex.js",
  "../src-cjs/43603_LeaderboardContextExternal.js",
  "../src-restored/core/LeaderboardContextExternal.js",
  "../src-restored/core/DecoratorHelpers.js",
]

const TypesSocial = {
  model: "social.model",
  user: "social.user",
}
const TypesGame = {
  actions: {
    suggestAuthorizeAction: "game.actions.suggestAuthorizeAction",
    syncYandexLeaderboardsAction: "game.actions.syncYandexLeaderboardsAction",
  },
}
const TypesApp = { model: "app.model" }
const CommonEvents = { UPDATED: "updated" }

Promise.resolve()
  .then(async () => {
    await compareButtonScenario("leaderboard button authorizes and syncs before click", {
      userAuthorized: false,
      authorizeUser: true,
      suggestResult: true,
      hasOnClick: true,
    })
    await compareButtonScenario("leaderboard button ignores missing onClick", {
      userAuthorized: false,
      authorizeUser: true,
      suggestResult: true,
      hasOnClick: false,
    })
    await compareGlobalExternalScenario("external global leaderboard sync and submit")
    await compareGlobalYandexScenario("yandex global leaderboard sync and submit")
    await compareContextExternalScenario("external context leaderboard sync and submit")
    await compareContextExternalSoloScenario("external context leaderboard skips solo mode")

    console.log(
      JSON.stringify(
        {
          module:
            "LeaderboardButton/LeaderboardGlobalExternal/LeaderboardGlobalYandex/LeaderboardContextExternal",
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

async function compareButtonScenario(name, options) {
  const originalResult = await exerciseButton(loadOriginalButton, options)
  const restoredResult = await exerciseButton(loadRestoredButton, options)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareGlobalExternalScenario(name) {
  const originalResult = await exerciseGlobalExternal(loadOriginalGlobalExternal)
  const restoredResult = await exerciseGlobalExternal(loadRestoredGlobalExternal)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareGlobalYandexScenario(name) {
  const originalResult = await exerciseGlobalYandex(loadOriginalGlobalYandex)
  const restoredResult = await exerciseGlobalYandex(loadRestoredGlobalYandex)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareContextExternalScenario(name) {
  const originalResult = await exerciseContextExternal(loadOriginalContextExternal, false)
  const restoredResult = await exerciseContextExternal(loadRestoredContextExternal, false)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareContextExternalSoloScenario(name) {
  const originalResult = await exerciseContextExternal(loadOriginalContextExternal, true)
  const restoredResult = await exerciseContextExternal(loadRestoredContextExternal, true)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseButton(loadModule, options) {
  const records = []
  const social = {
    userAuthorized: options.userAuthorized,
  }
  if (options.authorizeUser) social.authorizeUser = () => records.push(["social.authorizeUser"])
  const actions = createButtonActions(records, options)
  const mocks = createMocks({ records, social, actions })

  return withMockedModules(mocks, async () => {
    const { LeaderboardButton } = loadModule()
    const props = {
      className: "extra",
      onClick: options.hasOnClick ? () => records.push(["props.onClick"]) : undefined,
    }
    const vnode = LeaderboardButton(props)
    const result = await vnode.props.onClick()

    return normalize({
      vnode: normalizeVNode(vnode),
      records,
      result,
    })
  })
}

async function exerciseGlobalExternal(loadModule) {
  const records = []
  const social = createSocialModel(records)
  const appModel = createAppModel(records, {
    "scores/get": {
      friend: { score: 20, extData: "friend-extra" },
      me: { score: 15, extData: "me-extra" },
    },
    "scores/post": { ok: true },
  })
  const mocks = createMocks({ records, social, appModel })

  return withMockedModules(mocks, async () => {
    const { LeaderboardGlobalExternal } = loadModule()
    const adapter = new LeaderboardGlobalExternal()
    adapter.social = social

    const syncResult = await adapter.sync(50)
    const syncAgain = await adapter.sync()
    const lowSubmit = await adapter.submit(3, "low")
    const highSubmit = await adapter.submit(30, { stage: 1 })

    return normalize({
      syncResult,
      syncAgain,
      lowSubmit,
      highSubmit,
      synced: adapter.__SYNCED,
      records,
      me: social.me.snapshot(),
      friend: social.friends[0].snapshot(),
    })
  })
}

async function exerciseGlobalYandex(loadModule) {
  const records = []
  const social = createYandexSocialModel(records)
  const mocks = createMocks({ records, social })

  return withMockedModules(mocks, async () => {
    const { LeaderboardGlobalYandex } = loadModule()
    const adapter = new LeaderboardGlobalYandex()
    adapter.social = social

    const syncResult = await adapter.sync()
    const submitResult = await adapter.submit(30, { round: 2 })
    await settleAsyncWork()

    return normalize({
      syncResult,
      submitResult,
      records,
      friends: social.friends.map((user) => user.snapshot()),
      me: social.me.snapshot(),
    })
  })
}

async function exerciseContextExternal(loadModule, inSolo) {
  const records = []
  const social = createSocialModel(records, { inSolo })
  const appModel = createAppModel(records, {
    "scores-context/get": {
      friend: { score: 7, extData: "ctx-friend" },
      me: { score: 8, extData: "ctx-me" },
    },
    "scores-context/post": { score: 12, extData: "ctx-submit" },
  })
  const mocks = createMocks({ records, social, appModel })

  return withMockedModules(mocks, async () => {
    const { LeaderboardContextExternal } = loadModule()
    const adapter = new LeaderboardContextExternal()
    adapter.social = social
    adapter.appModel = appModel

    const syncResult = await adapter.sync()
    const submitResult = await adapter.submit(12, { wave: 3 })

    return normalize({
      syncResult,
      submitResult,
      records,
      me: social.me.snapshot(),
      friend: social.friends[0].snapshot(),
    })
  })
}

function loadOriginalButton() {
  deleteTargetModules()
  return require("../src-cjs/96087_LeaderboardButton.js")
}

function loadRestoredButton() {
  deleteTargetModules()
  return require("../src-restored/ui/LeaderboardButton.js")
}

function loadOriginalGlobalExternal() {
  deleteTargetModules()
  return require("../src-cjs/41976_LeaderboardGlobalExternal.js")
}

function loadRestoredGlobalExternal() {
  deleteTargetModules()
  return require("../src-restored/core/LeaderboardGlobalExternal.js")
}

function loadOriginalGlobalYandex() {
  deleteTargetModules()
  return require("../src-cjs/97954_LeaderboardGlobalYandex.js")
}

function loadRestoredGlobalYandex() {
  deleteTargetModules()
  return require("../src-restored/core/LeaderboardGlobalYandex.js")
}

function loadOriginalContextExternal() {
  deleteTargetModules()
  return require("../src-cjs/43603_LeaderboardContextExternal.js")
}

function loadRestoredContextExternal() {
  deleteTargetModules()
  return require("../src-restored/core/LeaderboardContextExternal.js")
}

function createButtonActions(records, options) {
  return {
    suggestAuthorizeAction: {
      async run() {
        records.push(["suggestAuthorizeAction.run"])
        return options.suggestResult
      },
    },
    syncYandexLeaderboardsAction: {
      async run() {
        records.push(["syncYandexLeaderboardsAction.run"])
        return true
      },
    },
  }
}

function createUser(records, id, scoreGlobal = 10) {
  const updates = []
  return {
    id,
    rawData: { id, raw: true },
    scoreGlobal,
    lbRecords: [],
    scores: {
      update(...args) {
        records.push(["scores.update", id, normalize(args)])
        updates.push(normalize(args.map((arg) => snapshotLeaderboardEntry(arg))))
      },
    },
    init(rawData) {
      records.push(["user.init", id, normalize(rawData)])
      this.id = rawData.getUniqueID()
      this.rawData = rawData
    },
    snapshot() {
      return {
        id: this.id,
        updates,
        lbRecords: this.lbRecords,
      }
    },
  }
}

function createSocialModel(records, options = {}) {
  const me = createUser(records, "me", 10)
  const friend = createUser(records, "friend", 5)
  return {
    me,
    friends: [friend],
    inSolo: options.inSolo || false,
    context_id: "ctx-1",
    getFriendById(id, users) {
      records.push(["social.getFriendById", id, users.map((user) => user.id)])
      return users.find((user) => user.id === id)
    },
  }
}

function createYandexSocialModel(records) {
  const social = createSocialModel(records)
  social.friends = [createUser(records, "old-friend", 1)]
  const lb = {
    async getLeaderboardEntries(prefix, options) {
      records.push(["lb.getLeaderboardEntries", prefix, options])
      return {
        entries: [
          {
            score: 25,
            formattedScore: "25",
            rank: 1,
            extraData: "me-extra",
            player: {
              uniqueID: "me",
              publicName: "Me",
              getAvatarSrc: () => "me.png",
            },
          },
          {
            score: 18,
            formattedScore: "18",
            rank: 2,
            extraData: "friend-extra",
            player: {
              uniqueID: "friend-y",
              publicName: "Friend Y",
              getAvatarSrc: () => "friend.png",
            },
          },
        ],
      }
    },
    async getLeaderboardPlayerEntry(prefix) {
      records.push(["lb.getLeaderboardPlayerEntry", prefix])
      return {
        score: 31,
        formattedScore: "31",
        rank: 1,
        extraData: "player-entry",
        player: { uniqueID: "me" },
      }
    },
    async setLeaderboardScore(prefix, score, extraData) {
      records.push(["lb.setLeaderboardScore", prefix, score, extraData])
    },
  }
  social.sdk = {
    async getLeaderboards() {
      records.push(["sdk.getLeaderboards"])
      return lb
    },
    async isAvailableMethod(method) {
      records.push(["sdk.isAvailableMethod", method])
      return true
    },
  }
  return social
}

function createAppModel(records, responses) {
  return {
    async post(url, payload) {
      records.push(["appModel.post", url, normalize(payload)])
      return responses[url]
    },
  }
}

function createMocks({ records, social, appModel, actions = {} }) {
  function EventDispatcher() {}
  EventDispatcher.prototype.emit = function emit(eventName, payload) {
    records.push(["emit", eventName, normalize(payload)])
  }

  const di = {
    get(token) {
      records.push(["di.get", token])
      if (token === TypesSocial.user) return createUser(records, "di-user", 0)
      return undefined
    },
  }

  function lazyGet(token) {
    records.push(["lazyGet", token])
    if (token === TypesApp.model) return appModel
    if (token === TypesGame.actions.suggestAuthorizeAction) return actions.suggestAuthorizeAction
    if (token === TypesGame.actions.syncYandexLeaderboardsAction) return actions.syncYandexLeaderboardsAction
    return undefined
  }

  function lazyInject(token) {
    return function decorateLazyInject() {
      records.push(["lazyInject", token])
    }
  }

  function inject(token) {
    return function decorateInject() {
      records.push(["inject", token])
    }
  }

  function injectable() {
    return function decorateInjectable(target) {
      records.push(["injectable", "[class]"])
      return target
    }
  }

  function useInjection(token) {
    records.push(["useInjection", token])
    if (token === TypesSocial.model) return social
    return undefined
  }

  function Button() {}
  const uiContextMock = { useInjection, Button }

  return {
    "../src-cjs/44656__mod.js": {
      EventDispatcher,
      CommonEvents,
      di,
      lazyGet,
      lazyInject,
    },
    "../src-restored/core/RuntimeCore.js": {
      EventDispatcher,
      CommonEvents,
      di,
      lazyGet,
      lazyInject,
    },
    "../src-cjs/86178__mod.js": {
      TypesSocial,
      TypesApp,
    },
    "../src-cjs/95781_TypesGame.js": { TypesGame },
    "../src-cjs/86700_MetadataReader.js": {
      injectable,
      inject,
    },
    "../src-restored/core/diRuntime.js": {
      injectable,
      inject,
    },
    "../src-cjs/84194__mod.js": {
      log: {
        warn(...args) {
          records.push(["log.warn", normalize(args)])
        },
        debug(...args) {
          records.push(["log.debug", normalize(args)])
        },
      },
    },
    "../src-restored/core/RuntimeUtils.js": {
      log: {
        warn(...args) {
          records.push(["log.warn", normalize(args)])
        },
        debug(...args) {
          records.push(["log.debug", normalize(args)])
        },
      },
    },
    "../src-cjs/4421__mod.js": { AppModel: function AppModel() {} },
    "../src-restored/core/AppModel.js": { AppModel: function AppModel() {} },
    "../src-cjs/83430_InversifyContext.js": uiContextMock,
    "../src-restored/ui/UIContext.js": uiContextMock,
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

function snapshotLeaderboardEntry(entry) {
  if (!entry || typeof entry !== "object") return entry
  if (typeof entry.getScore !== "function") return entry
  return {
    score: entry.getScore(),
    formattedScore: entry.getFormattedScore(),
    timestamp: entry.getTimestamp(),
    rank: entry.getRank(),
    extraData: entry.getExtraData(),
    player: entry.getPlayer(),
  }
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
