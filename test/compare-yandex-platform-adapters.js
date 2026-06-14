"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { ScoreEvent, ScoreType, SOCIAL_POPUP } = require("../src-cjs/60539__mod.js")
const TypesAnalytics = { tracker: Symbol("TypesAnalytics.tracker") }
const TypesSocial = { userScore: Symbol("TypesSocial.userScore") }

const TARGETS = [
  "../src-cjs/92819_UserDataBase.js",
  "../src-restored/core/UserDataBase.js",
  "../src-cjs/90050_UserDataYandex.js",
  "../src-restored/core/UserDataYandex.js",
  "../src-cjs/30945_UserDataWeb.js",
  "../src-restored/core/UserDataWeb.js",
  "../src-cjs/77499_UserDataLocalStorage.js",
  "../src-restored/core/UserDataLocalStorage.js",
  "../src-cjs/57655_SessionData.js",
  "../src-restored/core/SessionData.js",
  "../src-cjs/58670_CookieDataLocalStorage.js",
  "../src-restored/core/CookieDataLocalStorage.js",
  "../src-cjs/38889_SocialModelBase.js",
  "../src-restored/core/SocialModelBase.js",
  "../src-cjs/66423_UserScore.js",
  "../src-restored/core/UserScore.js",
  "../src-cjs/59503_UserYandex.js",
  "../src-restored/core/UserYandex.js",
  "../src-cjs/42560_PaymentsModelBase.js",
  "../src-restored/core/PaymentsModelBase.js",
  "../src-cjs/61767_PaymentsModelYandex.js",
  "../src-restored/core/PaymentsModelYandex.js",
]

Promise.resolve()
  .then(async () => {
    await compareUserScoreScenario("user score aggregates and emits")
    await compareUserYandexScenario("yandex user wrapper exposes raw player fields and scores")
    await compareUserDataBaseScenario("user data base caches reads and writes")
    await compareUserDataYandexScenario("yandex user data reads and writes player data")
    await compareUserDataWebScenario("web user data reads and writes cookies")
    await compareUserDataLocalStorageScenario("local storage user data reads and writes localStorage")
    await compareSessionDataScenario("session data increments session and exposes ftue")
    await compareCookieDataBarrelScenario("cookie data barrel exports adapter aliases")
    await compareSocialModelBaseScenario("social model base exposes no-op defaults")
    await comparePaymentsBaseScenario("payment base tracks analytics and validates remotely")
    await comparePaymentsYandexScenario("yandex payments purchases and consumes")

    console.log(
      JSON.stringify(
        {
          module:
            "UserScore/UserYandex/UserDataBase/UserDataYandex/UserDataWeb/UserDataLocalStorage/SessionData/CookieDataLocalStorage/SocialModelBase/PaymentsModelBase/PaymentsModelYandex",
          scenarios: 11,
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

async function compareUserScoreScenario(name) {
  const originalResult = await exerciseUserScore(loadOriginalUserScore)
  const restoredResult = await exerciseUserScore(loadRestoredUserScore)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareUserYandexScenario(name) {
  const originalResult = await exerciseUserYandex(loadOriginalUserYandex)
  const restoredResult = await exerciseUserYandex(loadRestoredUserYandex)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareUserDataBaseScenario(name) {
  const originalResult = await exerciseUserDataBase(loadOriginalUserDataBase)
  const restoredResult = await exerciseUserDataBase(loadRestoredUserDataBase)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareUserDataYandexScenario(name) {
  const originalResult = await exerciseUserDataYandex(loadOriginalUserDataYandex)
  const restoredResult = await exerciseUserDataYandex(loadRestoredUserDataYandex)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareUserDataWebScenario(name) {
  const originalResult = await exerciseUserDataWeb(loadOriginalUserDataWeb)
  const restoredResult = await exerciseUserDataWeb(loadRestoredUserDataWeb)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareUserDataLocalStorageScenario(name) {
  const originalResult = await exerciseUserDataLocalStorage(loadOriginalUserDataLocalStorage)
  const restoredResult = await exerciseUserDataLocalStorage(loadRestoredUserDataLocalStorage)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareSessionDataScenario(name) {
  const originalResult = await exerciseSessionData(loadOriginalSessionData)
  const restoredResult = await exerciseSessionData(loadRestoredSessionData)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareCookieDataBarrelScenario(name) {
  const originalResult = await exerciseCookieDataBarrel(loadOriginalCookieDataBarrel)
  const restoredResult = await exerciseCookieDataBarrel(loadRestoredCookieDataBarrel)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function compareSocialModelBaseScenario(name) {
  const originalResult = await exerciseSocialModelBase(loadOriginalSocialModelBase)
  const restoredResult = await exerciseSocialModelBase(loadRestoredSocialModelBase)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function comparePaymentsBaseScenario(name) {
  const originalResult = await exercisePaymentsBase(loadOriginalPaymentsBase)
  const restoredResult = await exercisePaymentsBase(loadRestoredPaymentsBase)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function comparePaymentsYandexScenario(name) {
  const originalResult = await exercisePaymentsYandex(loadOriginalPaymentsYandex)
  const restoredResult = await exercisePaymentsYandex(loadRestoredPaymentsYandex)
  assert.deepEqual(restoredResult, originalResult, name)
}

async function exerciseUserScore(loadModule) {
  const records = []
  const mocks = createCommonMocks({ records })

  return withMockedModules(mocks, async () => {
    const { UserScore } = loadModule()
    const score = new UserScore()
    score.emit = (event) => records.push(["emit", event])
    const contextEntry = { getScore: () => 7 }
    const globalEntry = { getScore: () => 9 }

    score.setScoreSession(5)
    score.setScoreSession(3)
    score.update(contextEntry, globalEntry)
    const allScore = score.getScore()
    const sessionScore = score.getScore(ScoreType.SESSION)
    const contextScore = score.getScore(ScoreType.CONTEXT)
    const globalScore = score.getScore(ScoreType.GLOBAL)
    const contextEntryResult = score.getEntry(ScoreType.CONTEXT)
    const globalEntryResult = score.getEntry(ScoreType.GLOBAL)
    score.flush()

    return normalize({
      records,
      allScore,
      sessionScore,
      contextScore,
      globalScore,
      contextEntrySame: contextEntryResult === contextEntry,
      globalEntrySame: globalEntryResult === globalEntry,
      afterFlush: {
        session: score.getScore(ScoreType.SESSION),
        context: score.getEntry(ScoreType.CONTEXT),
      },
    })
  })
}

async function exerciseUserYandex(loadModule) {
  const records = []
  const mocks = createCommonMocks({ records })

  return withMockedModules(mocks, async () => {
    const { UserYandex } = loadModule()
    const user = new UserYandex()
    user._scores = {
      getScore(type) {
        records.push(["scores.getScore", type])
        if (type === ScoreType.SESSION) return 11
        if (type === ScoreType.GLOBAL) return 22
        if (type === ScoreType.CONTEXT) return 33
      },
      setScoreSession(score) {
        records.push(["scores.setScoreSession", score])
      },
    }
    user.lbRecords = [{ lb: "Scores", score: 100 }, { lb: "Daily", score: 7 }]
    const raw = {
      getUniqueID: () => "unique-42",
      getID: () => "fallback",
      getName: () => "Alice",
      getPhoto: (size) => `photo-${size}`,
    }
    const initResult = user.init(raw, true)
    user.scoreSession = 44

    return normalize({
      initSame: initResult === user,
      id: user.id,
      name: user.name,
      photo: user.photo,
      scoreSession: user.scoreSession,
      scoreGlobal: user.scoreGlobal,
      scoreContext: user.scoreContext,
      scoresSame: user.scores === user._scores,
      isNew: user.isNew,
      lbRecord: user.getLbRecord("Daily"),
      defaultLbRecord: user.getLbRecord(),
      records,
    })
  })
}

async function exerciseUserDataBase(loadModule) {
  const records = []
  const mocks = createCommonMocks({ records })

  return withMockedModules(mocks, async () => {
    const { UserDataBase } = loadModule()
    class TestUserData extends UserDataBase {
      read(keys) {
        records.push(["read", normalize(keys)])
        keys.forEach((key) => this.cache.set(key, `${key}-value`))
        return Promise.resolve()
      }
      write(keys) {
        const payload = {}
        this.cache.forEach((value, key) => {
          if (!keys || keys.includes(key)) payload[key] = value
        })
        records.push(["write", normalize(keys), payload])
        return Promise.resolve()
      }
    }

    const data = new TestUserData()
    const values = await data.get(["a", "b"])
    data.lastSaveCall = Date.now() - UserDataBase.FORCED_WRITE_INTERVAL - 1
    const saved = data.save("c", 3)
    const erased = await data.erase("d")

    return normalize({
      values,
      saved,
      erased,
      cache: Array.from(data.cache.entries()),
      records,
    })
  })
}

async function exerciseUserDataYandex(loadModule) {
  const records = []
  const mocks = createCommonMocks({ records })

  return withMockedModules(mocks, async () => {
    const { UserDataYandex } = loadModule()
    const data = new UserDataYandex()
    data.cache.set("keep", 1)
    data.cache.set("skip", 2)
    data._player = {
      async setData(payload, flush) {
        records.push(["player.setData", payload, flush])
      },
      async getData(keys) {
        records.push(["player.getData", normalize(keys)])
        return { keep: 10, extra: 20 }
      },
    }

    await data.write(["keep"], true)
    await data.read(["keep", "extra"])

    return normalize({
      cache: Array.from(data.cache.entries()),
      lastSyncType: typeof data.lastSync,
      records,
    })
  })
}

async function exerciseUserDataWeb(loadModule) {
  const records = []
  const mocks = createCommonMocks({ records })
  const restoreCookie = installCookieJar()

  try {
    return await withMockedModules(mocks, async () => {
      const { UserDataWeb } = loadModule()
      const data = new UserDataWeb()
      data.cache.set("keep", { count: 1 })
      data.cache.set("skip", 2)

      await data.write(["keep"])
      data.cache.clear()
      data.cache.set("keep", undefined)
      await data.read(["keep"])
      data.setCookie("short", JSON.stringify({ ok: true }), null)

      return normalize({
        cookieName: UserDataWeb.COOKIE_NAME,
        keep: data.cache.get("keep"),
        short: data.getCookieValue("short"),
        rawCookie: document.cookie,
        lastSyncType: typeof data.lastSync,
        records,
      })
    })
  } finally {
    restoreCookie()
  }
}

async function exerciseUserDataLocalStorage(loadModule) {
  const records = []
  const mocks = createCommonMocks({ records })
  const restoreLocalStorage = installLocalStorage()

  try {
    return await withMockedModules(mocks, async () => {
      const { UserDataLocalStorage } = loadModule()
      const data = new UserDataLocalStorage()
      data.keyPrefix = "p:"
      data.cache.set("keep", { count: 3 })
      data.cache.set("num", 4)

      await data.write(["keep", "num"])
      window.localStorage.setItem("p:raw", "plain")
      data.setCookie("boom", "ok")
      window.localStorage.failNextSet = true
      data.setCookie("fail", "x")
      data.cache.clear()
      await data.read(["keep", "raw", "missing"])

      return normalize({
        cache: Array.from(data.cache.entries()),
        raw: data.getCookieValue("raw"),
        missingCookie: data.getCookie("missing"),
        stored: window.localStorage.dump(),
        records,
      })
    })
  } finally {
    restoreLocalStorage()
  }
}

async function exerciseSessionData(loadModule) {
  const { SessionData } = loadModule()
  const fresh = new SessionData()
  const freshRaw = fresh.getRawData()
  const first = new SessionData()
  const firstResult = first.init({ gameSession: "0", friends: ["a"] })
  const later = new SessionData()
  const laterResult = later.init({ gameSession: "4", friends: ["b", "c"] })
  const empty = new SessionData()
  const emptyResult = empty.init(undefined)

  return normalize({
    freshRaw,
    freshFtue: fresh.ftue,
    firstResult,
    firstFtue: first.ftue,
    laterResult,
    laterFtue: later.ftue,
    emptyResult,
    emptyFtue: empty.ftue,
  })
}

async function exerciseCookieDataBarrel(loadModule) {
  const exportsObject = loadModule()
  return normalize({
    keys: Object.keys(exportsObject).filter((key) => key !== "__esModule").sort(),
    baseAlias: exportsObject.CookieDataBase === exportsObject.UserDataBase,
    webAlias: exportsObject.CookieDataWeb === exportsObject.UserDataWeb,
    localAlias: exportsObject.CookieDataLocalStorage === exportsObject.UserDataLocalStorage,
    hasSessionData: typeof exportsObject.SessionData === "function",
  })
}

async function exerciseSocialModelBase(loadModule) {
  const records = []
  const mocks = createCommonMocks({ records })

  return withMockedModules(mocks, async () => {
    const { SocialModelBase } = loadModule()
    const model = new SocialModelBase()
    const nobody = { id: "nobody" }
    model.nobody = nobody

    return normalize({
      showPauseOverlay: model.showPauseOverlay,
      sessionRaw: model.session.getRawData(),
      sessionFtue: model.session.ftue,
      startGameAsync: await model.startGameAsync(),
      init: await model.init({}),
      playSolo: await model.playSolo(),
      playOffline: await model.playOffline(),
      playWith: await model.playWith({ id: "friend" }, true),
      notify: await model.notify("hello"),
      shortcut: await model.showShortcutPopup(),
      bot: await model.showBotPopup({ id: "bot" }),
      share: await model.share({}),
      switchGame: await model.switchGame("game", {}),
      invite: await model.invite({}, true),
      friendById: model.getFriendById("id", "fallback"),
      randomChallenger: model.getRandomChallenger(["id"]),
      randomOpponent: model.getRandomOpponent(),
      syncLeaderboards: await model.syncLeaderboards(),
      postSessionScore: model.postSessionScore(5),
      meSame: model.me === nobody,
      opponent: model.opponent,
      contextPlayers: model.contextPlayers,
      inSolo: model.inSolo,
      inGroup: model.inGroup,
      friends: model.friends,
      socialPlatform: model.socialPlatform,
      records,
    })
  })
}

async function exercisePaymentsBase(loadModule) {
  const records = []
  const mocks = createCommonMocks({ records })

  return withMockedModules(mocks, async () => {
    const { PaymentsModelBase } = loadModule()
    const payments = new PaymentsModelBase()
    payments.trackEcommerce("purchase", {
      item_id: "coins",
      item_name: "Coins",
      currency: "USD",
      value: 5,
    })
    payments.trackPurchase("attempt", { item_id: "coins" })
    const validation = await payments.validateRemotely("/validate", { token: "abc" })

    let buyError
    try {
      await payments.buy("coins")
    } catch (error) {
      buyError = error.message
    }

    return normalize({
      supported: payments.supported,
      all: payments.getAll(),
      paid: payments.isPaid("coins"),
      consume: await payments.consume("token"),
      purchase: await payments.purchase("coins"),
      validation,
      buyError,
      records,
    })
  })
}

async function exercisePaymentsYandex(loadModule) {
  const records = []
  const mocks = createCommonMocks({ records })

  return withMockedModules(mocks, async () => {
    const { PaymentsModelYandex } = loadModule()
    const payments = new PaymentsModelYandex()
    const catalog = [
      { id: "coins", title: "Coins", priceCurrencyCode: "USD", priceValue: "5" },
      { id: "skin", title: "Skin", priceCurrencyCode: "USD", priceValue: "7" },
    ]
    let purchases = [{ productID: "skin", purchaseToken: "skin-token" }]
    const paymentsSDK = {
      async getCatalog() {
        records.push(["sdk.getCatalog"])
        return catalog
      },
      async getPurchases() {
        records.push(["sdk.getPurchases"])
        return purchases
      },
      async purchase(payload) {
        records.push(["sdk.purchase", payload])
        purchases = [{ productID: payload.id, purchaseToken: `${payload.id}-token` }]
        return purchases[0]
      },
      async consumePurchase(token) {
        records.push(["sdk.consumePurchase", token])
        purchases = []
      },
    }
    const yasdk = {
      async getPayments(options) {
        records.push(["yasdk.getPayments", options])
        return paymentsSDK
      },
    }

    await payments.init({ yasdk })
    const byId = payments.getById("coins")
    const all = payments.getAll()
    const paidSkinBefore = payments.isPaid("skin")
    const buyNonConsumable = await payments.buy("coins", false)
    purchases = [{ productID: "coins", purchaseToken: "coins-token" }]
    payments._purchases = purchases
    const buyConsumable = await payments.buy("coins", true)

    return normalize({
      supported: payments.supported,
      byId,
      allLength: all.length,
      paidSkinBefore,
      buyNonConsumable,
      buyConsumable,
      purchases: payments.purchases,
      payload: payments.trackingPayloadFromProduct(catalog[0]),
      validate: await payments.validate({}),
      records,
    })
  })
}

function loadOriginalUserDataBase() {
  deleteTargetModules()
  return require("../src-cjs/92819_UserDataBase.js")
}

function loadRestoredUserDataBase() {
  deleteTargetModules()
  return require("../src-restored/core/UserDataBase.js")
}

function loadOriginalUserDataYandex() {
  deleteTargetModules()
  return require("../src-cjs/90050_UserDataYandex.js")
}

function loadRestoredUserDataYandex() {
  deleteTargetModules()
  return require("../src-restored/core/UserDataYandex.js")
}

function loadOriginalUserDataWeb() {
  deleteTargetModules()
  return require("../src-cjs/30945_UserDataWeb.js")
}

function loadRestoredUserDataWeb() {
  deleteTargetModules()
  return require("../src-restored/core/UserDataWeb.js")
}

function loadOriginalUserDataLocalStorage() {
  deleteTargetModules()
  return require("../src-cjs/77499_UserDataLocalStorage.js")
}

function loadRestoredUserDataLocalStorage() {
  deleteTargetModules()
  return require("../src-restored/core/UserDataLocalStorage.js")
}

function loadOriginalSessionData() {
  deleteTargetModules()
  return require("../src-cjs/57655_SessionData.js")
}

function loadRestoredSessionData() {
  deleteTargetModules()
  return require("../src-restored/core/SessionData.js")
}

function loadOriginalCookieDataBarrel() {
  deleteTargetModules()
  return require("../src-cjs/58670_CookieDataLocalStorage.js")
}

function loadRestoredCookieDataBarrel() {
  deleteTargetModules()
  return require("../src-restored/core/CookieDataLocalStorage.js")
}

function loadOriginalSocialModelBase() {
  deleteTargetModules()
  return require("../src-cjs/38889_SocialModelBase.js")
}

function loadRestoredSocialModelBase() {
  deleteTargetModules()
  return require("../src-restored/core/SocialModelBase.js")
}

function loadOriginalUserScore() {
  deleteTargetModules()
  return require("../src-cjs/66423_UserScore.js")
}

function loadRestoredUserScore() {
  deleteTargetModules()
  return require("../src-restored/core/UserScore.js")
}

function loadOriginalUserYandex() {
  deleteTargetModules()
  return require("../src-cjs/59503_UserYandex.js")
}

function loadRestoredUserYandex() {
  deleteTargetModules()
  return require("../src-restored/core/UserYandex.js")
}

function loadOriginalPaymentsBase() {
  deleteTargetModules()
  return require("../src-cjs/42560_PaymentsModelBase.js")
}

function loadRestoredPaymentsBase() {
  deleteTargetModules()
  return require("../src-restored/core/PaymentsModelBase.js")
}

function loadOriginalPaymentsYandex() {
  deleteTargetModules()
  return require("../src-cjs/61767_PaymentsModelYandex.js")
}

function loadRestoredPaymentsYandex() {
  deleteTargetModules()
  return require("../src-restored/core/PaymentsModelYandex.js")
}

function createCommonMocks({ records }) {
  function EventDispatcher() {}
  EventDispatcher.prototype.emit = function emit(event) {
    records.push(["base.emit", event])
  }

  function UserDataBaseStub() {
    this.lastSaveCall = NaN
    this.cache = new Map()
  }

  function PaymentsModelBaseStub() {}
  PaymentsModelBaseStub.prototype.trackEcommerce = function trackEcommerce(eventName, payload) {
    this.trackEvent(eventName, {
      currency: payload.currency,
      value: payload.value,
      items: [{ item_id: payload.item_id, item_name: payload.item_id, price: payload.value }],
    })
  }
  PaymentsModelBaseStub.prototype.trackPurchase = function trackPurchase(eventName, payload) {
    this.trackEvent(eventName, payload, 1, "purchase_")
  }
  PaymentsModelBaseStub.prototype.trackEvent = function trackEvent(
    eventName,
    payload,
    value = 1,
    prefix = "",
  ) {
    records.push(["lazyGet", tokenLabel(TypesAnalytics.tracker)])
    records.push(["tracker.track", `${prefix}${eventName}`, value, payload])
  }

  const logMock = {
    trace(...args) {
      records.push(["log.trace", normalizeLogArgs(args)])
    },
    warn(...args) {
      records.push(["log.warn", normalizeLogArgs(args)])
    },
    error(...args) {
      records.push(["log.error", normalizeLogArgs(args)])
    },
    debug(...args) {
      records.push(["log.debug", normalizeLogArgs(args)])
    },
  }

  return {
    "../src-cjs/44656__mod.js": {
      EventDispatcher,
      lazyInject() {
        return function lazyInjectDecorator() {}
      },
      lazyGet(token) {
        records.push(["lazyGet", tokenLabel(token)])
        return {
          track(event, value, payload) {
            records.push(["tracker.track", event, value, payload])
          },
        }
      },
    },
    "../src-cjs/84194__mod.js": {
      log: logMock,
    },
    "../src-restored/core/RuntimeUtils.js": { log: logMock },
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
    "../src-cjs/86178__mod.js": { TypesAnalytics, TypesSocial },
    "../src-restored/core/CoreTypes.js": { TypesAnalytics, TypesSocial },
    "../src-cjs/48616__mod.js": {
      PaymentsModelBase: PaymentsModelBaseStub,
      UserDataBase: UserDataBaseStub,
      ScoreType,
    },
    "../src-cjs/90505__mod.js": {
      captureException(error) {
        records.push(["Sentry.captureException", error.message || String(error)])
      },
    },
    "../src-restored/core/SentryRuntime.js": {
      captureException(error) {
        records.push(["Sentry.captureException", error.message || String(error)])
      },
    },
    "../src-cjs/60539__mod.js": { ScoreEvent, ScoreType, SOCIAL_POPUP },
  }
}

function withMockedModules(mocks, run) {
  const originals = new Map()
  const originalFetch = globalThis.fetch
  globalThis.fetch = async (url, options) => {
    const parsed = JSON.parse(options.body)
    return {
      async json() {
        return { success: parsed.token === "abc" }
      },
    }
  }

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
    globalThis.fetch = originalFetch
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

function normalizeLogArgs(args) {
  return args.map((arg) => {
    if (arg && typeof arg === "object" && arg.constructor && arg.constructor.name) {
      if (arg.constructor.name === "Error") return { error: arg.message, code: arg.code }
      if (arg.constructor.name !== "Object" && !Array.isArray(arg)) return "[instance]"
    }
    return arg
  })
}

function tokenLabel(token) {
  if (typeof token === "symbol") return token.toString()
  if (typeof token === "function") return token.name || "(anonymous function)"
  return String(token)
}

function installCookieJar() {
  const descriptor = Object.getOwnPropertyDescriptor(document, "cookie")
  const cookieJar = new Map()

  Object.defineProperty(document, "cookie", {
    configurable: true,
    get() {
      return Array.from(cookieJar.entries())
        .map(([key, value]) => `${key}=${value}`)
        .join("; ")
    },
    set(value) {
      const [pair] = String(value).split(";")
      const equalsIndex = pair.indexOf("=")
      if (equalsIndex < 0) return
      cookieJar.set(pair.slice(0, equalsIndex), pair.slice(equalsIndex + 1))
    },
  })

  return () => {
    if (descriptor) Object.defineProperty(document, "cookie", descriptor)
    else delete document.cookie
  }
}

function installLocalStorage() {
  const originalLocalStorage = window.localStorage
  const storage = new Map()
  const localStorage = {
    failNextSet: false,
    getItem(key) {
      return storage.has(key) ? storage.get(key) : null
    },
    setItem(key, value) {
      if (this.failNextSet) {
        this.failNextSet = false
        throw new Error("localStorage quota")
      }
      storage.set(key, String(value))
    },
    dump() {
      return Array.from(storage.entries()).sort(([left], [right]) => left.localeCompare(right))
    },
  }

  window.localStorage = localStorage

  return () => {
    if (originalLocalStorage === undefined) delete window.localStorage
    else window.localStorage = originalLocalStorage
  }
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
