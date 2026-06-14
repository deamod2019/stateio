/**
 * Restored source for Webpack Module #70051.
 *
 * HTML UI action binding module. The binding topology mirrors the original
 * module, while the end-screen action is wired to the restored class.
 */
"use strict"

const { TypesUI } = require("../core/CoreTypes")
const { ContainerModule } = require("../core/diRuntime")
const { UIRoot } = require("./UIRoot")
const { SetupUIAction } = require("../core/SetupUIAction")
const { StartScreenAction } = require("../core/StartScreenAction")
const { EndScreenAction } = require("../core/EndScreenAction")

const HTMLUIModule = new ContainerModule((bind) => {
  bind(TypesUI.uiRootClass).toConstantValue(UIRoot)
  bind(TypesUI.setupAction).to(SetupUIAction)
  bind(TypesUI.startScreenAction).to(StartScreenAction)
  bind(TypesUI.endScreenAction).to(EndScreenAction)
})

module.exports = { HTMLUIModule }
