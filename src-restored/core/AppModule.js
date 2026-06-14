/**
 * Restored source for Webpack Module #60320.
 *
 * App-layer dependency bindings for page state, backend app model, and login.
 */
"use strict"

const { ContainerModule } = require("./diRuntime")
const { AppModel } = require("./AppModel")
const { LoginAction } = require("./LoginAction")
const { PageModel } = require("./PageModel")
const { TypesApp } = require("./CoreTypes")

const AppModule = new ContainerModule((bind) => {
  bind(TypesApp.pageModel).to(PageModel).inSingletonScope()
  bind(TypesApp.model).to(AppModel).inSingletonScope()
  bind(TypesApp.loginAction).to(LoginAction)
})

module.exports = { AppModule }
