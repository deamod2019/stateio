/**
 * Restored source for Webpack Module #77499.
 *
 * localStorage-backed user-data adapter.
 */
"use strict"

const { markInjectable } = require("./DecoratorHelpers")
const { log } = require("./RuntimeUtils")
const { UserDataWeb } = require("./UserDataWeb")

class UserDataLocalStorage extends UserDataWeb {
  constructor() {
    super()
    this.ls = window.localStorage
    this.keyPrefix = ""
  }

  getCookie(key) {
    return this.ls.getItem(`${this.keyPrefix}${key}`) || ""
  }

  getCookieValue(key) {
    const rawValue = this.getCookie(key)
    if (rawValue) {
      let value = undefined
      try {
        value = JSON.parse(rawValue)
      } catch (error) {
        log.warn(error, "raw dataString returned")
        value = rawValue
      }
      return value
    }
  }

  setCookie(key, value) {
    try {
      this.ls.setItem(`${this.keyPrefix}${key}`, value)
    } catch (error) {
      log.error(error)
    }
  }
}

markInjectable(UserDataLocalStorage)

module.exports = { UserDataLocalStorage }
