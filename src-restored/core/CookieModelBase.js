/**
 * Restored source for Webpack Module #28696.
 *
 * Base persistent store backed by the active social cookie adapter.
 */
"use strict"

const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { log } = require("./RuntimeUtils")
const { TypesSocial } = require("./CoreTypes")

class CookieModelBase {
  constructor() {
    this._store = this.getDefaultStore()
  }

  async sync() {
    const cookie = this.social.cookie
    const data = await cookie.get(Object.keys(this._store))

    Object.keys(data).forEach((key) => {
      if (data[key] === undefined) {
        const value = this._store[key]
        log.debug(key, "set to default", value)
        cookie.save(key, value)
      } else {
        this._store[key] = data[key]
      }
    })
  }

  get(key) {
    return this._store[key]
  }

  set(key, value) {
    this._store[key] = value
    this.social.cookie.save(key, value)
  }

  clear() {
    this._store = this.getDefaultStore()
    Object.keys(this._store).forEach((key) => {
      const value = this._store[key]
      log.debug(key, "set to default", value)
      this.social.cookie.save(key, value)
    })
  }
}

injectProperty(CookieModelBase, "social", TypesSocial.model, Object)
markInjectable(CookieModelBase)

module.exports = { CookieModelBase }
