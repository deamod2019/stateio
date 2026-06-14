"use strict"

const assert = require("node:assert/strict")

const sentryOriginal = require("../src-cjs/90505__mod.js")
const sentryRestored = require("../src-restored/core/SentryRuntime.js")
const tracingOriginal = require("../src-cjs/88183__mod.js")
const tracingRestored = require("../src-restored/core/SentryTracingRuntime.js")

assert.equal(sentryRestored, sentryOriginal, "Sentry runtime adapter must expose the original SDK")
assert.equal(
  tracingRestored,
  tracingOriginal,
  "Sentry tracing runtime adapter must expose the original tracing module",
)
assert.equal(typeof sentryRestored.captureException, "function", "Sentry must expose captureException()")
assert.equal(typeof sentryRestored.captureMessage, "function", "Sentry must expose captureMessage()")
assert.equal(typeof sentryRestored.setUser, "function", "Sentry must expose setUser()")
assert.equal(
  typeof tracingRestored.Integrations.BrowserTracing,
  "function",
  "Sentry tracing must expose BrowserTracing",
)

console.log(
  JSON.stringify(
    {
      module: "SentryRuntime",
      status: "ok",
    },
    null,
    2,
  ),
)
