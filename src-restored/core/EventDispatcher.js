/**
 * Restored source for Webpack Module #96488.
 *
 * Injectable event dispatcher built on the bundled EventEmitter implementation.
 */
"use strict"

const { EventEmitter } = require("./EventEmitter")
const { markInjectable } = require("./DecoratorHelpers")

class EventDispatcher extends EventEmitter {}

markInjectable(EventDispatcher)

module.exports = { EventDispatcher }
