"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { ScoreType } = require("../src-cjs/60539__mod.js")
const { SessionData } = require("../src-restored/core/SessionData.js")

const TypesApp = { pageModel: Symbol("TypesApp.pageModel") }
const TypesSocial = {
  cookie: Symbol("TypesSocial.cookie"),
  dummyUser: Symbol("TypesSocial.dummyUser"),
  leaderboardContext: Symbol("TypesSocial.leaderboardContext"),
  leaderboardGlobal: Symbol("TypesSocial.leaderboardGlobal"),
  payments: Symbol("TypesSocial.payments"),
  user: Symbol("TypesSocial.user"),
}

const TARGETS = [
  "../src-cjs/63895_SocialModelYandex.js",
  "../src-restored/core/SocialModelYandex.js",
  "../src-restored/core/SocialModelBase.js",
  "../src-restored/core/CookieDataLocalStorage.js",
]

Promise.resolve()
  .then(async () => {
    await compareLifecycleScenario("lifecycle, authorization, locale, friends, and switchGame")
    await compareLocaleScenario("locale mapping")
    await compareLeaderboardScenario("leaderboard synchronization")

    console.log(
      JSON.stringify(
        {
          module: "SocialModelYandex",
          scenarios: 3,
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

async function compareLifecycleScenario(name) {
  const originalResult = await exerciseLifecycle(loadOriginalSocialModelYandex)
  const restoredResult = await exerciseLifecycle(loadRestoredSocialModelYandex)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareLocaleScenario(name) {
  const originalResult = await exerciseLocaleMapping(loadOriginalSocialModelYandex)
  const restoredResult = await exerciseLocaleMapping(loadRestoredSocialModelYandex)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareLeaderboardScenario(name) {
  const originalResult = await exerciseLeaderboards(loadOriginalSocialModelYandex)
  const restoredResult = await exerciseLeaderboards(loadRestoredSocialModelYandex)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseLifecycle(loadModule) {
  const records = []
  const mocks = createCommonMocks({ records })

  return withMockedModules(mocks, async () => {
    const { SocialModelYandex } = loadModule()
    const model = new SocialModelYandex()
    const opened = []
    const originalOpen = window.open
    window.open = (url) => opened.push(url)

    try {
      const players = [createPlayer("lite", "lite-user"), createPlayer("full", "full-user")]
      const yasdk = {
        environment: { i18n: { lang: "zh", tld: "ru" } },
        auth: {
          async openAuthDialog() {
            records.push(["auth.openAuthDialog"])
          },
        },
        async getPlayer(options) {
          records.push(["yasdk.getPlayer", options])
          return players.shift()
        },
      }

      model.pageModel = { bus: { params: { yasdk } } }
      model.cookie = {
        async get(keys) {
          records.push(["cookie.get", keys])
          return { session: { gameSession: "2", friends: ["old"] }, extra: 7 }
        },
        save(key, value) {
          records.push(["cookie.save", key, value])
        },
        init(player) {
          records.push(["cookie.init", player ? player.getUniqueID() : null])
        },
      }
      model.payments = {
        async init(payload) {
          records.push(["payments.init", payload.yasdk === yasdk])
        },
      }
      model._leaderboardGlobal = { name: "global" }
      model._leaderboardContext = { name: "context" }

      const startResult = await model.startGameAsync()
      const initResult = await model.init({ cookies: ["extra"] })
      const authorized = await model.authorizeUser()
      model._me.id = "me"
      model._friends = [{ id: "friend" }, { id: "other" }]
      const postSessionScore = await model.postSessionScore(12)
      const switchResult = await model.switchGame(12345, { source: "test" })

      return normalize({
        startResult,
        initResult,
        authorized,
        userAuthorized: model.userAuthorized,
        meId: model.me.id,
        meLastRaw: model.me.lastRaw,
        friends: model.friends,
        friendSelf: model.getFriendById("me") === model.me,
        friendHit: model.getFriendById("friend"),
        friendMiss: model.getFriendById("missing"),
        leaderboards: model.leaderboards,
        locale: model.locale,
        localizeDefaultLocale: mocks.localize.Localize.defaultLocale,
        tld: model.tld,
        sdkSame: model.sdk === yasdk,
        socialPlatform: model.socialPlatform,
        postSessionScore,
        switchResult,
        opened,
        records,
      })
    } finally {
      window.open = originalOpen
    }
  })
}

async function exerciseLocaleMapping(loadModule) {
  const records = []
  const mocks = createCommonMocks({ records })

  return withMockedModules(mocks, async () => {
    const { SocialModelYandex } = loadModule()
    const model = new SocialModelYandex()

    const locales = [
      ["ru", "ru_RU"],
      ["be", "ru_RU"],
      ["tr", "tr_TR"],
      ["es", "es_ES"],
      ["pt", "pt_BR"],
      ["hi", "hi_IN"],
      ["ar", "ar_AR"],
      ["ja", "ja_JP"],
      ["fr", "fr_FR"],
      ["id", "id_ID"],
      ["de", "de_DE"],
      ["it", "it_IT"],
      ["zh", "zh_CN"],
      ["unknown", "en_US"],
    ].map(([lang, expected]) => {
      model._yasdk = { environment: { i18n: { lang, tld: `${lang}-tld` } } }
      return [lang, model._determinateLocale(), model.tld, expected]
    })

    model._yasdk = {}
    const fallback = model._determinateLocale()

    return normalize({ locales, fallback })
  })
}

async function exerciseLeaderboards(loadModule) {
  const records = []
  const mocks = createCommonMocks({ records })

  return withMockedModules(mocks, async () => {
    const { SocialModelYandex } = loadModule()
    const model = new SocialModelYandex()
    const extra = { value: "old" }
    const me = {
      scoreGlobal: 10,
      scores: {
        getEntry(type) {
          records.push(["scores.getEntry", type])
          return {
            getExtraData() {
              records.push(["entry.getExtraData"])
              return extra.value ? { value: extra.value } : undefined
            },
          }
        },
      },
    }

    model._me = me
    model._leaderboardContext = {
      async sync() {
        records.push(["context.sync"])
      },
      async submit(score, payload) {
        records.push(["context.submit", score, payload])
      },
    }
    model._leaderboardGlobal = {
      nextScore: 6,
      async sync() {
        records.push(["global.sync"])
        me.scoreGlobal = this.nextScore
      },
      async submit(score, payload) {
        records.push(["global.submit", score, payload])
      },
    }

    await model.syncLeaderboards()

    model._userAuthorized = true
    me.scoreGlobal = 10
    model._leaderboardGlobal.nextScore = 6
    extra.value = "old"
    await model.syncLeaderboards()

    me.scoreGlobal = 5
    model._leaderboardGlobal.nextScore = 9
    extra.value = "new"
    await model.syncLeaderboards()

    me.scoreGlobal = 7
    model._leaderboardGlobal.nextScore = 3
    extra.value = ""
    await model.syncLeaderboards()

    return normalize({ records })
  })
}

function loadOriginalSocialModelYandex() {
  deleteTargetModules()
  return require("../src-cjs/63895_SocialModelYandex.js")
}

function loadRestoredSocialModelYandex() {
  deleteTargetModules()
  return require("../src-restored/core/SocialModelYandex.js")
}

function createCommonMocks({ records }) {
  function EventDispatcher() {}
  EventDispatcher.prototype.emit = function emit(event) {
    records.push(["base.emit", event])
  }

  function SocialModelBaseStub() {
    EventDispatcher.call(this)
    this.session = new SessionData()
    this.showPauseOverlay = false
  }
  SocialModelBaseStub.prototype = Object.create(EventDispatcher.prototype)
  SocialModelBaseStub.prototype.constructor = SocialModelBaseStub

  function createUser(label) {
    return {
      id: `${label}-id`,
      init(raw) {
        this.raw = raw
        this.lastRaw = raw && raw.getUniqueID ? raw.getUniqueID() : raw?.id
        records.push(["user.init", label, this.lastRaw])
        return this
      },
    }
  }

  const dummyUser = createUser("dummy")
  dummyUser.id = "dummy"

  const localize = {
    Localize: function Localize() {},
  }

  return {
    localize,
    "../src-cjs/44656__mod.js": {
      EventDispatcher,
      di: {
        get(token) {
          records.push(["di.get", tokenLabel(token)])
          if (token === TypesSocial.user) return createUser("user")
          if (token === TypesSocial.dummyUser) return dummyUser
          return undefined
        },
      },
      lazyInject() {
        return function lazyInjectDecorator() {}
      },
    },
    "../src-cjs/84194__mod.js": {
      log: {
        warn(error) {
          records.push(["log.warn", error?.message || String(error)])
        },
      },
    },
    "../src-restored/core/RuntimeCore.js": {
      di: {
        get(token) {
          records.push(["di.get", tokenLabel(token)])
          if (token === TypesSocial.user) return createUser("user")
          if (token === TypesSocial.dummyUser) return dummyUser
          return undefined
        },
      },
      lazyInject() {
        return function lazyInjectDecorator() {}
      },
    },
    "../src-restored/core/RuntimeUtils.js": {
      log: {
        warn(error) {
          records.push(["log.warn", error?.message || String(error)])
        },
      },
    },
    "../src-cjs/86125__mod.js": localize,
    "../src-cjs/86178__mod.js": { TypesApp, TypesSocial },
    "../src-restored/core/CoreTypes.js": { TypesApp, TypesSocial },
    "../src-restored/core/EventDispatcher.js": { EventDispatcher },
    "../src-cjs/48616__mod.js": {
      PageModel: function PageModel() {},
      ScoreType,
      SocialModelBase: SocialModelBaseStub,
    },
    "../src-cjs/86700_MetadataReader.js": {
      injectable() {
        return function injectableDecorator(target) {
          return target
        }
      },
      inject() {
        return function injectDecorator() {}
      },
      __metadata() {
        return function metadataDecorator() {}
      },
    },
    "../src-restored/core/diRuntime.js": {
      injectable() {
        return function injectableDecorator(target) {
          return target
        }
      },
      inject() {
        return function injectDecorator() {}
      },
      __metadata() {
        return function metadataDecorator() {}
      },
    },
    "../src-cjs/60539__mod.js": { ScoreType },
  }
}

function createPlayer(mode, id) {
  return {
    getMode() {
      return mode
    },
    getUniqueID() {
      return id
    },
  }
}

function withMockedModules(mocks, run) {
  const originals = new Map()

  for (const [request, exportsObject] of Object.entries(mocks)) {
    if (request === "localize") continue
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
    if (typeof item === "number" && Number.isNaN(item)) return "__NaN__"
    return item
  }))
}
