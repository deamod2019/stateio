/**
 * Restored source for Webpack Module #45105.
 *
 * Runs a list of actions in parallel and resolves with all results.
 */
"use strict"

const { Action } = require("./Action")

class ParallelAction extends Action {
  async execute(actions) {
    const pending = []
    for (const action of actions) {
      pending.push(action.run())
    }
    return Promise.all(pending)
  }
}

module.exports = { ParallelAction }
