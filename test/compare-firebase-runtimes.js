"use strict"

const assert = require("node:assert/strict")

const appOriginal = require("../src-cjs/83977__mod.js")
const appRestored = require("../src-restored/core/FirebaseAppRuntime.js")
const remoteConfigOriginal = require("../src-cjs/47135__mod.js")
const remoteConfigRestored = require("../src-restored/core/FirebaseRemoteConfigRuntime.js")
const authOriginal = require("../src-cjs/56467__mod.js")
const authRestored = require("../src-restored/core/FirebaseAuthRuntime.js")
const analyticsOriginal = require("../src-cjs/99261__mod.js")
const analyticsRestored = require("../src-restored/core/FirebaseAnalyticsRuntime.js")

assert.equal(appRestored, appOriginal, "Firebase app runtime adapter differs")
assert.equal(remoteConfigRestored, remoteConfigOriginal, "Firebase remote-config runtime adapter differs")
assert.equal(authRestored, authOriginal, "Firebase auth runtime adapter differs")
assert.equal(analyticsRestored, analyticsOriginal, "Firebase analytics runtime adapter differs")

assert.equal(typeof appRestored.initializeApp, "function")
assert.equal(typeof remoteConfigRestored.getRemoteConfig, "function")
assert.equal(typeof authRestored.getAuth, "function")
assert.equal(typeof analyticsRestored.getAnalytics, "function")

console.log(
  JSON.stringify(
    {
      module: "FirebaseRuntimes",
      status: "ok",
    },
    null,
    2,
  ),
)
