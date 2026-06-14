/**
 * Restored source for Webpack Module #30945.
 *
 * Cookie-backed web user-data adapter.
 */
"use strict"

const { markInjectable } = require("./DecoratorHelpers")
const { log } = require("./RuntimeUtils")
const { UserDataBase } = require("./UserDataBase")

class UserDataWeb extends UserDataBase {
  async read(keys) {
    const allCacheKeys = Array.from(this.cache.keys())
    const payload = {}
    ;(keys || allCacheKeys).forEach((key) => {
      const value = this.getCookieValue(key)
      payload[key] = value
      this.cache.set(key, value)
    })
    log.trace(this, "read", payload)
    this.lastSync = Date.now()
  }

  async write(keys) {
    const payload = {}
    this.cache.forEach((value, key) => {
      if (!keys || keys.includes(key)) {
        payload[key] = value
        this.setCookieValue(key, value)
      }
    })
    log.trace(this, "write", payload)
  }

  getCookieValue(key) {
    const rawValue = this.getCookie(key)
    if (rawValue) return JSON.parse(rawValue)
  }

  setCookieValue(key, value) {
    this.setCookie(key, typeof value === "object" ? JSON.stringify(value) : `${value}`)
  }

  setCookie(key, value, minutes = 10080) {
    const expiresAt = new Date()
    expiresAt.setMinutes(expiresAt.getMinutes() + minutes)
    document.cookie = `${key}=${escape(value)}${minutes == null ? "" : `;expires=${expiresAt.toUTCString()}`}`
  }

  getCookie(key) {
    const prefix = `${key}=`
    const cookies = decodeURIComponent(document.cookie).split(";")
    for (let index = 0; index < cookies.length; index += 1) {
      let cookie = cookies[index]
      while (cookie.charAt(0) === " ") cookie = cookie.substring(1)
      if (cookie.indexOf(prefix) === 0) return cookie.substring(prefix.length, cookie.length)
    }
    return ""
  }
}

UserDataWeb.COOKIE_NAME = "dp-instant"
markInjectable(UserDataWeb)

module.exports = { UserDataWeb }
