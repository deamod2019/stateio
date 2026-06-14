/**
 * Restored source for Webpack Module #37360.
 *
 * Wraps a callback as an async Action.
 */
"use strict"

const { Action } = require("./Action")

class LazyAction extends Action {
  constructor(callback) {
    super()
    this.callback = callback
  }

  async execute(data) {
    const result = this.callback(data)
    return result instanceof Promise ? await result : result
  }
}

module.exports = { LazyAction }
