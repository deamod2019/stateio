/**
 * Restored source for Webpack Module #10556.
 *
 * Base ads DI module.
 */
"use strict"

const { ContainerModule } = require("./diRuntime")
const { InitAdManagerAction } = require("../../src-cjs/64122_InitAdManagerAction.js")
const { TypesAds } = require("./CoreTypes")
const { AdAction } = require("./AdAction")
const { AdManagerBase } = require("./AdManagerBase")

const AdsModule = new ContainerModule((bind) => {
  bind(TypesAds.adAction).to(AdAction)
  bind(TypesAds.manager).to(AdManagerBase).inSingletonScope()
  bind(TypesAds.initAction).to(InitAdManagerAction)
})

module.exports = { AdsModule }
