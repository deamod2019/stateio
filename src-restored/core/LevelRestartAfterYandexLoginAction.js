/**
 * Restored source for Webpack Module #70055.
 *
 * Restarts the current SIO level after Yandex login without showing another ad.
 */
"use strict"

const { injectable } = require("./diRuntime")
const { LevelStartActionSIO } = require("./LevelStartActionSIO")

class LevelRestartAfterYandexLoginAction extends LevelStartActionSIO {
  needToShowAD() {
    return false
  }
}

injectable()(LevelRestartAfterYandexLoginAction)

module.exports = { LevelRestartAfterYandexLoginAction }
