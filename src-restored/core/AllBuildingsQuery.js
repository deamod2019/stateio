/**
 * Restored source for Webpack Module #9964.
 *
 * Matches every building entity by the CapitalView component, preserving the
 * original view-backed query key until the visual modules are restored.
 */
"use strict"

const { Query } = require("./ECSCore")
const { CapitalView } = require("./CapitalView")

const AllBuildingsQuery = new Query((entity) => {
  return entity.has(CapitalView)
})

module.exports = { AllBuildingsQuery }
