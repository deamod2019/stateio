/**
 * Restored source for Webpack Module #59795.
 *
 * Display framework barrel for View, Mediator, and mediator activation helper.
 */
"use strict"

const { bindMediator } = require("./BindMediator")
const { View } = require("./View")
const { Mediator } = require("./Mediator")

const exportsObject = {
  bindMediator,
  View,
  Mediator,
}

Object.defineProperty(exportsObject, "__esModule", { value: true })

module.exports = exportsObject
