"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { TypesAnalytics, TypesCore } = require("../src-cjs/86178__mod.js")

const original = {
  AnalyticsTracker: require("../src-cjs/53373_AnalyticsTracker.js").AnalyticsTracker,
  GTAGAnalyticsProvider: require("../src-cjs/97907_GTAGAnalyticsProvider.js").GTAGAnalyticsProvider,
  FirebaseAnalyticsProvider: require("../src-cjs/23004_FirebaseAnalyticsProvider.js").FirebaseAnalyticsProvider,
  AnalyticsModule: require("../src-cjs/74981_AnalyticsModule.js").AnalyticsModule,
  AnalyticsProvidersExports: require("../src-cjs/32455__mod.js"),
  AnalyticsExports: require("../src-cjs/73802__mod.js"),
}

const restored = {
  AnalyticsTracker: require("../src-restored/core/AnalyticsTracker.js").AnalyticsTracker,
  GTAGAnalyticsProvider: require("../src-restored/core/GTAGAnalyticsProvider.js").GTAGAnalyticsProvider,
  FirebaseAnalyticsProvider: require("../src-restored/core/FirebaseAnalyticsProvider.js").FirebaseAnalyticsProvider,
  AnalyticsModule: require("../src-restored/core/AnalyticsModule.js").AnalyticsModule,
  AnalyticsProvidersExports: require("../src-restored/core/AnalyticsProvidersExports.js"),
  AnalyticsExports: require("../src-restored/core/AnalyticsExports.js"),
}

const originalEnv = {
  diGet: core.di.get,
  restoredDiGet: restoredCore.di.get,
  gtag: globalThis.gtag,
}

Promise.resolve()
  .then(async () => {
    assert.deepEqual(Object.keys(restored.AnalyticsProvidersExports), Object.keys(original.AnalyticsProvidersExports))
    assert.deepEqual(Object.keys(restored.AnalyticsExports), Object.keys(original.AnalyticsExports))
    assert.deepEqual(publicPrototypeMembers(restored.AnalyticsTracker), publicPrototypeMembers(original.AnalyticsTracker))
    assert.deepEqual(publicPrototypeMembers(restored.GTAGAnalyticsProvider), publicPrototypeMembers(original.GTAGAnalyticsProvider))
    assert.deepEqual(
      publicPrototypeMembers(restored.FirebaseAnalyticsProvider),
      publicPrototypeMembers(original.FirebaseAnalyticsProvider),
    )

    assert.deepEqual(
      exerciseTracker(restored.AnalyticsTracker, restoredCore),
      exerciseTracker(original.AnalyticsTracker, core),
    )
    assert.deepEqual(exerciseGtag(restored.GTAGAnalyticsProvider), exerciseGtag(original.GTAGAnalyticsProvider))
    assert.deepEqual(exerciseFirebase(restored.FirebaseAnalyticsProvider), exerciseFirebase(original.FirebaseAnalyticsProvider))

    const originalBindings = recordBindings(original.AnalyticsModule)
    const restoredBindings = recordBindings(restored.AnalyticsModule)
    assert.deepEqual(restoredBindings.records, originalBindings.records, "AnalyticsModule topology differs")
    assert.equal(restoredBindings.targets.get(TypesAnalytics.tracker), restored.AnalyticsTracker)

    console.log(
      JSON.stringify(
        {
          modules: [
            "AnalyticsTracker",
            "GTAGAnalyticsProvider",
            "FirebaseAnalyticsProvider",
            "AnalyticsModule",
            "AnalyticsExports",
          ],
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
  .finally(restoreEnvironment)

function exerciseTracker(AnalyticsTracker, runtime) {
  restoreEnvironment()
  const records = []
  runtime.di.get = (token) => {
    records.push(["di.get", tokenLabel(token)])
    return { analytics: { fb: false, firebase: true } }
  }

  const tracker = new AnalyticsTracker()
  tracker.init()
  const providerA = makeProvider(records, "a")
  const providerB = makeProvider(records, "b")
  tracker.addProvider(providerA)
  tracker.addProvider(providerB)
  tracker.track("start")
  tracker.track("score", 5, { mode: "solo" })
  tracker.track("payload", { flag: true })
  tracker.track("")
  tracker.removeProvider(providerA)
  tracker.track("after-remove", 2)

  return {
    useFb: tracker._useFb,
    providerCount: tracker.providers.size,
    records,
  }
}

function exerciseGtag(GTAGAnalyticsProvider) {
  restoreEnvironment()
  const records = []
  globalThis.gtag = (...args) => records.push(["gtag", ...args])
  const provider = new GTAGAnalyticsProvider()
  provider.track("event_name", 9, { value: 3, label: "x" })
  return records
}

function exerciseFirebase(FirebaseAnalyticsProvider) {
  restoreEnvironment()
  const records = []

  const provider = new FirebaseAnalyticsProvider()
  provider.logEvent = (eventName, data) => records.push(["logEvent", eventName, data])
  provider.track("purchase", 10, { item: "skin" })

  return records
}

function recordBindings(containerModule) {
  const records = []
  const targets = new Map()

  containerModule.registry((token) => {
    records.push(["bind", tokenLabel(token)])
    return {
      to(target) {
        records.push(["to"])
        targets.set(token, target)
        return this
      },
      inSingletonScope() {
        records.push(["inSingletonScope"])
        return this
      },
    }
  })

  return { records, targets }
}

function makeProvider(records, label) {
  return {
    track(eventName, value, data) {
      records.push(["provider.track", label, eventName, value, data])
    },
  }
}

function restoreEnvironment() {
  core.di.get = originalEnv.diGet
  restoredCore.di.get = originalEnv.restoredDiGet
  if (originalEnv.gtag === undefined) delete globalThis.gtag
  else globalThis.gtag = originalEnv.gtag
}

function tokenLabel(token) {
  if (token === TypesAnalytics.tracker) return "TypesAnalytics.tracker"
  if (token === TypesCore.gameConfig) return "TypesCore.gameConfig"
  return String(token)
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
