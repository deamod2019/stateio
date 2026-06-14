/**
 * Restored source for Webpack Module #8734.
 *
 * Base async action with termination and lifecycle callbacks.
 */
"use strict"

const { markInjectable } = require("./DecoratorHelpers")
const { GlobalEventProvider } = require("./GlobalEventProvider")

class Action extends GlobalEventProvider {
  async run(data) {
    this.data = data
    let result
    const executePromise = this.execute(this.data)
    const terminatePromise = new Promise((resolve, reject) => {
      this._resolve = resolve
      this._reject = reject
    })

    try {
      result = await Promise.race([executePromise, terminatePromise])
    } catch (error) {
      if (!this.onFailed) throw error
      this.onFailed?.()
    }

    this.onFinish?.()
    return result
  }

  terminate(error) {
    this._reject?.(error)
  }

  destroy() {
    delete this.data
    delete this._resolve
    delete this._reject
    delete this.onFinish
    delete this.onFailed
  }
}

markInjectable(Action)

module.exports = { Action }
