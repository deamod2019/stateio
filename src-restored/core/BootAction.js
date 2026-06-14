/**
 * Restored source for Webpack Module #19305.
 *
 * Bootstraps app configuration, analytics, assets, login, UI setup, social
 * initialization, main flow, and background music activation.
 */
"use strict"

const sentry = require("./SentryRuntime")
const core = require("./RuntimeCore")
const { lazyGet, lazyRun } = core
const { Action } = require("./Action")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { GTAGAnalyticsProvider } = require("./GTAGAnalyticsProvider")
const { Localize } = require("./Localize")
const { log } = require("./RuntimeUtils")
const { AdManagerBase, PageModel } = require("./SocialAppExports")
const {
  TypesAds,
  TypesAnalytics,
  TypesApp,
  TypesAudio,
  TypesCore,
  TypesFlow,
  TypesSocial,
} = require("./CoreTypes")
const { BOOT_CONFIG } = require("./BootConfig")

class BootAction extends Action {
  async execute() {
    core.di.rebind(TypesCore.gameConfig).toConstantValue(BOOT_CONFIG)
    lazyGet(TypesAnalytics.tracker)?.addProvider(new GTAGAnalyticsProvider())

    const gameConfig = core.di.get(TypesCore.gameConfig)
    lazyRun("template.action")
    if (gameConfig.i18n) Localize.addTemplates(gameConfig.i18n)

    let loginActionPromise
    await Promise.all([
      this.page.isBusReadyAsync().then(() => {
        loginActionPromise = lazyRun(TypesApp.loginAction)
      }),
      lazyRun(TypesFlow.assetsPreload),
    ])

    this.page.assetsProgress = 1
    log.trace("all done")

    await this.social.startGameAsync()
    lazyRun(TypesAudio.initAction)
    await lazyRun(TypesFlow.UI.setupAction)

    Promise.all([TypesFlow.assetsProcess, TypesAds.initAction].map(lazyRun)).then()
    await this.social.init(this.page.bus?.params)

    const { id, name, photo } = this.social.me
    sentry.setUser({ id, name, photo, locale: Localize.defaultLocale })

    lazyGet(TypesSocial.refRewardsModel)?.init()
    await loginActionPromise

    AdManagerBase.config.throttling.interstitial.systemStart = Date.now()
    await lazyRun(TypesFlow.mainAction)
    await lazyGet(TypesAudio.model)?.activateBackgroundMusic()
  }
}

injectProperty(BootAction, "page", TypesApp.pageModel, PageModel)
injectProperty(BootAction, "social", TypesSocial.model, Object)
markInjectable(BootAction)

module.exports = { BootAction }
