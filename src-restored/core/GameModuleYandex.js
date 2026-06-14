/**
 * Restored source for Webpack Module #89286.
 *
 * Yandex platform game module loader.
 */
"use strict"

const { di } = require("./RuntimeCore")
const { TypesApp } = require("./CoreTypes")
const { ContainerModule } = require("./diRuntime")
const { AdsModule } = require("./SocialAppExports")
const { AdsModuleYandex } = require("../../src-cjs/9045_AdsModuleYandex.js")
const { AuthYandexAction } = require("../../src-cjs/90190_AuthYandexAction.js")
const { CrossPromoModule } = require("../../src-cjs/5962__mod.js")
const { SocialModuleYandex } = require("./SocialModuleYandex")

const GameModuleYandex = new ContainerModule(() => {
  di.load(AdsModule)
  di.load(AdsModuleYandex, SocialModuleYandex, CrossPromoModule)
  di.bind(TypesApp.authAction).to(AuthYandexAction)
})

module.exports = { GameModuleYandex }
