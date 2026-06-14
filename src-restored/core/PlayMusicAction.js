/**
 * Restored source for Webpack Module #74886.
 *
 * Starts, stops, and fades the active background music howl.
 */
"use strict"

const { lazyGet } = require("./RuntimeCore")
const { markInjectable } = require("./DecoratorHelpers")
const { Action } = require("./Action")

class PlayMusicAction extends Action {
  async execute({ active, sprite, howlInstance }) {
    const howl = howlInstance || lazyGet("howl_music")
    if (!howl) return undefined

    const hasActiveInstance = !isNaN(PlayMusicAction.activeMusicState.instance)
    if (active) {
      if (hasActiveInstance) {
        if (!PlayMusicAction.activeMusicState.playing) {
          PlayMusicAction.activeMusicState.playing = true
          this.fadeTo(howl, 1, PlayMusicAction.activeMusicState.instance)
        }
      } else {
        PlayMusicAction.activeMusicState.instance = howl.play(sprite || "track") || NaN
        PlayMusicAction.activeMusicState.playing = true
      }
    } else if (PlayMusicAction.activeMusicState.playing) {
      PlayMusicAction.activeMusicState.playing = false
      if (hasActiveInstance) {
        this.fadeTo(howl, 0, PlayMusicAction.activeMusicState.instance)
      }
    }

    return undefined
  }

  fadeTo(howl, targetVolume, soundId, duration = 500) {
    const currentVolume = howl.volume()
    const scaledDuration =
      duration * Math.abs(Math.min(currentVolume, targetVolume) - Math.max(currentVolume, targetVolume))
    howl.fade(currentVolume, targetVolume, scaledDuration, soundId)
  }
}

PlayMusicAction.activeMusicState = { playing: false }

markInjectable(PlayMusicAction)

module.exports = { PlayMusicAction }
