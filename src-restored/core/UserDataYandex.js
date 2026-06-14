/**
 * Restored source for Webpack Module #90050.
 *
 * Yandex player-data adapter.
 */
"use strict"

const { log } = require("./RuntimeUtils")
const { UserDataBase } = require("./UserDataBase")
const { markInjectable } = require("./DecoratorHelpers")

let UserDataYandex = class UserDataYandex extends UserDataBase {
  init(player) {
    this._player = player
    this.read()
  }

  async write(keys, flush = false) {
    const payload = {}
    this.cache.forEach((value, key) => {
      if (!keys || keys.includes(key)) payload[key] = value
    })
    log.trace(this, "write", payload)
    if (this._player && this._player.setData) {
      await this._player.setData(payload, flush)
    } else {
      log.warn("UserDataYandex::write. Not supported")
    }
  }

  async read(keys) {
    if (this._player && this._player.getData) {
      const data = await this._player.getData(keys)
      log.trace(this, "read", data)
      if (data) {
        Object.keys(data).forEach((key) => {
          this.cache.set(key, data[key])
        })
      }
      this.lastSync = Date.now()
    } else {
      log.warn("UserDataYandex::read. Not supported")
    }
  }
}

markInjectable(UserDataYandex)

module.exports = { UserDataYandex }
