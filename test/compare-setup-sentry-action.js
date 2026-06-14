"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const originalModulePath = require.resolve("../src-cjs/54261_SetupSentryAction.js")
const restoredModulePath = require.resolve("../src-restored/core/SetupSentryAction.js")
const sentryModulePath = require.resolve("../src-cjs/90505__mod.js")
const tracingModulePath = require.resolve("../src-cjs/88183__mod.js")
const restoredSentryModulePath = require.resolve("../src-restored/core/SentryRuntime.js")
const restoredTracingModulePath = require.resolve("../src-restored/core/SentryTracingRuntime.js")

const originalCacheEntries = new Map()
for (const modulePath of [
  originalModulePath,
  restoredModulePath,
  sentryModulePath,
  tracingModulePath,
  restoredSentryModulePath,
  restoredTracingModulePath,
]) {
  originalCacheEntries.set(modulePath, require.cache[modulePath])
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

async function main() {
  try {
    const original = await exerciseModule(originalModulePath)
    const restored = await exerciseModule(restoredModulePath)

    assert.deepEqual(restored.withConfig, original.withConfig)
    assert.deepEqual(restored.withoutConfig, original.withoutConfig)

    console.log(
      JSON.stringify(
        {
          module: "SetupSentryAction",
          initCalls: restored.withConfig.records.filter((record) => record[0] === "init").length,
          configureScopeCalls: restored.withConfig.records.filter((record) => record[0] === "configureScope").length,
          status: "ok",
        },
        null,
        2,
      ),
    )
  } finally {
    for (const [modulePath, cacheEntry] of originalCacheEntries.entries()) {
      if (cacheEntry) {
        require.cache[modulePath] = cacheEntry
      } else {
        delete require.cache[modulePath]
      }
    }
  }
}

async function exerciseModule(modulePath) {
  const withConfigHarness = installSentryHarness()
  delete require.cache[modulePath]
  const { SetupSentryAction } = require(modulePath)
  const withConfigAction = new SetupSentryAction()
  const gameConfig = {
    sentry: {
      project: "state-io",
      release: "0.0.63",
      dsn: "https://example.invalid/1",
    },
  }

  withConfigAction.gameConfig = gameConfig
  const getConfigResult = withConfigAction.getConfig()
  const executeResult = withConfigAction.execute()

  const resolvedExecuteResult = await executeResult
  const processedEvent = await withConfigHarness.processor({
    culprit: "https://assets.example.com:8080/build/main.js/",
    exception: {
      values: [
        {
          stacktrace: {
            frames: [
              { filename: "https://assets.example.com/build/chunk.js/" },
              { filename: "webpack://src/index.js" },
            ],
          },
        },
      ],
    },
  })

  const withoutConfigHarness = installSentryHarness()
  delete require.cache[modulePath]
  const { SetupSentryAction: SetupSentryActionWithoutConfig } = require(modulePath)
  const withoutConfigAction = new SetupSentryActionWithoutConfig()
  withoutConfigAction.gameConfig = {}
  const withoutConfigGetConfigResult = withoutConfigAction.getConfig()
  const withoutConfigExecuteResult = await withoutConfigAction.execute()

  return {
    withConfig: {
      getConfigResult: clone(getConfigResult),
      executeResult: resolvedExecuteResult,
      gameConfig: clone(gameConfig),
      records: withConfigHarness.records,
      processedEvent,
    },
    withoutConfig: {
      getConfigResult: withoutConfigGetConfigResult,
      executeResult: withoutConfigExecuteResult,
      records: withoutConfigHarness.records,
    },
  }
}

function installSentryHarness() {
  const records = []
  let processor = null

  class BrowserTracing {
    constructor() {
      this.kind = "BrowserTracing"
    }
  }

  require.cache[sentryModulePath] = {
    id: sentryModulePath,
    filename: sentryModulePath,
    loaded: true,
    exports: {
      init(options) {
        records.push([
          "init",
          {
            dsn: options.dsn,
            environment: options.environment,
            project: options.project,
            release: options.release,
            tracesSampleRate: options.tracesSampleRate,
            integrations: options.integrations.map((integration) => integration.kind),
          },
        ])
      },
      configureScope(callback) {
        records.push(["configureScope"])
        callback({
          addEventProcessor(fn) {
            records.push(["addEventProcessor", typeof fn])
            processor = fn
          },
        })
      },
    },
  }
  require.cache[restoredSentryModulePath] = require.cache[sentryModulePath]

  require.cache[tracingModulePath] = {
    id: tracingModulePath,
    filename: tracingModulePath,
    loaded: true,
    exports: {
      Integrations: { BrowserTracing },
    },
  }
  require.cache[restoredTracingModulePath] = require.cache[tracingModulePath]

  return {
    records,
    get processor() {
      assert.equal(typeof processor, "function", "Sentry event processor was not registered")
      return processor
    },
  }
}

function clone(value) {
  return JSON.parse(JSON.stringify(value))
}
