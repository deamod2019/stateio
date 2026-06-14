/**
 * Restored source for Webpack Module #23416.
 *
 * Creates Howl instances from game config and initializes persisted mute state.
 */
"use strict"

const core = require("./RuntimeCore")
const { Howl } = require("./AudioRuntime")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { TypesAudio, TypesCore, TypesSocial } = require("./CoreTypes")
const { AudioModel } = require("./AudioModel")
const { Action } = require("./Action")

class InitAudioAction extends Action {
  async execute() {
    const audioConfig = this.gameConfig.audio
    if (audioConfig) {
      const cookieData = await this.cookie.get(AudioModel.COOKIE_KEY)

      for (const key of Object.keys(audioConfig)) {
        if (audioConfig[key]) {
          const howl = new Howl(this.fixPaths(audioConfig[key]))
          core.di.bind(`howl_${key}`).toConstantValue(howl)
        }
      }

      this.model.init(
        cookieData[AudioModel.COOKIE_KEY]?.sounds,
        cookieData[AudioModel.COOKIE_KEY]?.music,
      )
    }

    return undefined
  }

  fixPaths(config, origin = core.IS_ODR_BUILD ? core.ODR_BUILD_ORIGIN : core.GAME_SCRIPT_ORIGIN) {
    if (Array.isArray(config.src)) {
      config.src = config.src.map((path) => `${origin}${path}`)
    } else if (typeof config.src === "string") {
      config.src = `${origin}${config.src}`
    }

    return config
  }
}

injectProperty(InitAudioAction, "gameConfig", TypesCore.gameConfig, Object)
injectProperty(InitAudioAction, "model", TypesAudio.model, AudioModel)
injectProperty(InitAudioAction, "cookie", TypesSocial.cookie, Object)
markInjectable(InitAudioAction)

module.exports = { InitAudioAction }
