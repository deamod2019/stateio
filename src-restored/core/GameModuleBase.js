/**
 * Restored source for Webpack Module #25871.
 *
 * Base application module loader. Restored audio, analytics, and flow modules
 * are loaded where available; the broad app module stays on the CJS layer.
 */
"use strict"

const core = require("./RuntimeCore")
const { ContainerModule } = require("./diRuntime")
const { AppModule } = require("./SocialAppExports")
const { AnalyticsModule } = require("./AnalyticsModule")
const { SetupSentryAction } = require("./SetupSentryAction")
const { AudioModule } = require("./AudioModule")
const { GameFlowModule } = require("./GameFlowModule")
require("./DebugModule")

const GameModuleBase = new ContainerModule(() => {
  core.di.load(core.CoreModule, AppModule, AudioModule, AnalyticsModule, GameFlowModule)
  core.di.bind("sentryAction").to(SetupSentryAction)
  core.di.bind("template.action").toConstantValue(
    new core.LazyAction(() => {
      core.lazyGet("sentryAction")?.run()
      core.lazyGet("fspMeterAction")?.run()
    }),
  )
})

module.exports = { GameModuleBase }
