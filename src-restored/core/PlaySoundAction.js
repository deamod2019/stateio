/**
 * Restored source for Webpack Module #70919.
 *
 * Plays a named sound sprite unless sound effects are muted.
 */
"use strict"

const { lazyGet } = require("./RuntimeCore")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { TypesAudio } = require("./CoreTypes")
const { AudioModel } = require("./AudioModel")
const { Action } = require("./Action")

class PlaySoundAction extends Action {
  async execute(sound) {
    const sprite = !this.model.soundsMuted() ? this.transformSound(sound) : undefined
    if (!sprite) return -1

    return lazyGet("howl_sounds")?.play(sprite) || -1
  }

  transformSound(sound) {
    return sound
  }
}

injectProperty(PlaySoundAction, "model", TypesAudio.model, AudioModel)
markInjectable(PlaySoundAction)

module.exports = { PlaySoundAction }
