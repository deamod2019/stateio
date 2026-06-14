/**
 * Restored source for Webpack Module #55937.
 *
 * Main game DI module for the SIO build. It keeps the original module loading
 * order while routing the main launch action through src-restored.
 */
"use strict"

const core = require("./RuntimeCore")
const { ContainerModule } = require("./diRuntime")
const { TypesFlow, TypesNotification } = require("./CoreTypes")
const { PIXIUIModule } = require("./PIXIUIModule")
const { HTMLUIModule } = require("../ui/HTMLUIModule")
const { CoreGameModule } = require("./CoreGameModule")
const { GameUIModule } = require("../ui/GameUIModule")
const { NAStartSIO } = require("./NAStartSIO")
const { SIOPreloadAssetsAction } = require("./SIOPreloadAssetsAction")
const { MainAction } = require("./MainAction")

const GameModule = new ContainerModule((bind, unbind, isBound, rebind) => {
  core.di.load(PIXIUIModule)
  core.di.load(HTMLUIModule)
  core.di.load(CoreGameModule)
  core.di.load(GameUIModule)

  if (isBound(TypesNotification.start)) {
    rebind(TypesNotification.start).to(NAStartSIO)
  }

  bind(TypesFlow.assetsPreload).to(SIOPreloadAssetsAction)
  bind(TypesFlow.mainAction).to(MainAction)
})

module.exports = { GameModule }
