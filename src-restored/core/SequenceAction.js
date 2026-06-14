/**
 * Restored source for Webpack Module #36889.
 *
 * Runs a list of actions sequentially.
 */
"use strict"

const { Action } = require("./Action")

class SequenceAction extends Action {
  async execute(actions) {
    for (const action of actions) {
      await action.run()
    }
  }
}

module.exports = { SequenceAction }
