/**
 * Restored source for Webpack Module #32956.
 *
 * Core Pixi display barrel.
 */
"use strict"

const { RootView } = require("./RootView")
const { RootMediator } = require("./RootMediator")
const pixiUi = require("./PixiUIExports")
const { PIXIUIModule } = require("./PIXIUIModule")

const exportsObject = {
  RootView,
  RootMediator,
  ...pixiUi,
  PIXIUIModule,
}

Object.defineProperty(exportsObject, "__esModule", { value: true })

module.exports = exportsObject
