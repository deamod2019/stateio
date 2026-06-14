/**
 * Restored source for Webpack Module #54261.
 *
 * Initializes Sentry from the game config and rewrites browser stack-frame
 * filenames to the release-relative path format expected by the original app.
 */
"use strict"

const sentry = require("./SentryRuntime")
const tracing = require("./SentryTracingRuntime")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { TypesCore } = require("./CoreTypes")
const { Action } = require("./Action")

class SetupSentryAction extends Action {
  async execute() {
    const config = this.getConfig()

    if (config) {
      sentry.init(
        {
          ...config,
          integrations: [new tracing.Integrations.BrowserTracing()],
          tracesSampleRate: 1,
        },
      )

      sentry.configureScope((scope) => {
        const rewriteFilename = (filename) =>
          filename.replace(
            /^(.*:)\/\/([A-z0-9\-.]+)(:[0-9]+)?\/(.*)\//,
            `~/${config.project}-ya/${config.release}/`,
          )

        scope.addEventProcessor(async (event) => {
          if (event.culprit) {
            event.culprit = rewriteFilename(event.culprit)
          }

          const firstException = event.exception?.values[0]
          if (firstException?.stacktrace?.frames) {
            event.exception.values[0].stacktrace.frames = event.exception.values[0].stacktrace.frames.map((frame) => {
              frame.filename = rewriteFilename(frame.filename)
              return frame
            })
          }

          return event
        })
      })
    }

    return undefined
  }

  getConfig() {
    const config = this.gameConfig.sentry
    if (config) {
      config.environment = ["ya", "production"].filter((value) => !!value).join("-")
    }
    return config
  }
}

injectProperty(SetupSentryAction, "gameConfig", TypesCore.gameConfig, Object)
markInjectable(SetupSentryAction)

module.exports = { SetupSentryAction }
