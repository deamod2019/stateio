/**
 * Restored source for Webpack Module #92819.
 *
 * Base cached user-data store with delayed writes.
 */
"use strict"

const { markInjectable } = require("./DecoratorHelpers")
const { log } = require("./RuntimeUtils")

class UserDataBase {
  constructor() {
    this.lastSaveCall = NaN
    this.cache = new Map()
  }

  async get(keys) {
    const normalizedKeys = (Array.isArray(keys) ? keys : [keys]) || []
    const missingKeys = normalizedKeys.filter((key) => !this.cache.has(key))
    missingKeys.forEach((key) => this.cache.set(key, undefined))

    await this.read(missingKeys)

    const result = {}
    normalizedKeys.forEach((key) => {
      result[key] = this.cache.get(key)
    })
    return result
  }

  save(key, value, delay = UserDataBase.DEFAULT_UPLOAD_DELAY) {
    this.cache.set(key, value)
    if (this.canWrite()) {
      this.internalWrite()
    } else {
      clearTimeout(this._uploadTimeout)
      this._uploadTimeout = setTimeout(() => {
        this.internalWrite()
      }, delay)
    }
    return value
  }

  internalWrite() {
    this.write()
    this.lastSaveCall = Date.now()
  }

  canWrite() {
    const now = Date.now()
    if (isNaN(this.lastSaveCall)) {
      this.lastSaveCall = now
      return false
    }
    return now - this.lastSaveCall > UserDataBase.FORCED_WRITE_INTERVAL
  }

  async erase(key) {
    this.cache.set(key, undefined)
    if (this.canWrite()) {
      this.internalWrite()
    } else {
      clearTimeout(this._uploadTimeout)
      this._uploadTimeout = setTimeout(() => this.write(), UserDataBase.DEFAULT_UPLOAD_DELAY)
    }
    return true
  }

  async write(keys) {
    const payload = {}
    this.cache.forEach((value, key) => {
      if (!keys || keys.includes(key)) payload[key] = value
    })
    log.trace(this, "write", payload)
    log.warn("UserDataBase::write. Not supported")
  }

  async read(keys) {
    log.trace(this, "read", keys)
    log.warn("UserDataBase::read. Not supported")
  }
}

UserDataBase.DEFAULT_UPLOAD_DELAY = 1000
UserDataBase.FORCED_WRITE_INTERVAL = 30000
markInjectable(UserDataBase)

module.exports = { UserDataBase }
