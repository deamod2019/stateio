/**
 * Restored source for Webpack Module #31267.
 *
 * Stores audio mute settings, persists them through the social cookie service,
 * and controls background music in response to pause/ad events.
 */
"use strict"

const { CommonEvents, lazyGet } = require("./RuntimeCore")
const {
  injectProperty,
  lazyInjectProperty,
  markInjectable,
} = require("./DecoratorHelpers")
const { Howl } = require("./AudioRuntime")
const { AdEvents, TypesAudio, TypesSocial } = require("./CoreTypes")
const { GlobalEventProvider } = require("./GlobalEventProvider")

class AudioModel extends GlobalEventProvider {
  constructor() {
    super()
    this._paused = false
    this._started = false
    this._ready = false
    this._isAdPlaying = false
    this._onBackgroundLoopEnded = () => this.onBackgroundLoopEnded()
    this.backgroundSounds = [{ id: "howl_music", default: true }]
  }

  initBackgroundSounds() {
    this.backgroundSounds.forEach((sound) => {
      sound.howl = lazyGet(sound.id)
      sound.initiated = true
    })
  }

  async init(soundsMuted = false, musicMuted = false) {
    this.initBackgroundSounds()
    this.addListener(AdEvents.STARTED, this.onAdStarted)
    this.addListener(AdEvents.ENDED, this.onAdEnded)
    this.addListener(CommonEvents.PAUSE, this.onPause)

    this.muteMusic(musicMuted)
    this.muteSounds(soundsMuted)

    const defaultBackgroundSound = this.backgroundSounds.find((sound) => sound.default)
    if (defaultBackgroundSound?.howl) {
      this.activeBackgroundHowl = defaultBackgroundSound.howl
    }

    this._ready = true
    return this
  }

  soundsMuted() {
    return this._sounds
  }

  musicMuted() {
    return this._music
  }

  muteSounds(value) {
    if (this._sounds !== value) {
      this._sounds = value
      this.dispatch(AudioModel.MUTE_SOUNDS, value)
      this.postData()
    }
    return this._sounds
  }

  muteMusic(value) {
    if (this._music !== value) {
      this._music = value
      this.tapMusic()
      this.dispatch(AudioModel.MUTE_MUSIC, value)
      this.postData()
    }
    return this._music
  }

  activateBackgroundMusic() {
    this._started = true
    this.tapMusic()
  }

  get ready() {
    return this._ready
  }

  get paused() {
    return this._paused
  }

  set paused(value) {
    this._paused = value
    this.tapMusic()
  }

  onAdStarted() {
    this.isAdPlaying = true
  }

  onAdEnded() {
    this.isAdPlaying = false
  }

  get isAdPlaying() {
    return this._isAdPlaying
  }

  set isAdPlaying(value) {
    this._isAdPlaying = value
    this.tapMusic()
  }

  onPause(value) {
    this.paused = value
  }

  postData() {
    const sounds = this._sounds
    const music = this._music
    this.cookie.save(AudioModel.COOKIE_KEY, { sounds, music })
  }

  tapMusic() {
    if (this._ready && this._started) {
      const blocked = this._isAdPlaying || (!this._isAdPlaying && this._paused)
      this.runMusicAction(!this._music && !blocked)
    }
  }

  async runMusicAction(active) {
    const howlInstance = this._activeBackgroundHowl
    return lazyGet(TypesAudio.musicAction)?.run({ active, howlInstance })
  }

  onBackgroundLoopEnded() {
    this.changeBackgroundMusic()
  }

  changeBackgroundMusic(id) {
    this.activeBackgroundHowl = this.backgroundSounds.find((sound) => sound.id === id)?.howl
  }

  disableOnBackgroundLoopEnded(howl) {
    if (howl) howl.off("end", this._onBackgroundLoopEnded)
  }

  enableOnBackgroundLoopEnded(howl) {
    if (howl) howl.on("end", this._onBackgroundLoopEnded)
  }

  get activeBackgroundHowl() {
    return this._activeBackgroundHowl
  }

  set activeBackgroundHowl(howl) {
    if (howl && this._activeBackgroundHowl !== howl) {
      const previous = this._activeBackgroundHowl
      this.disableOnBackgroundLoopEnded(this._activeBackgroundHowl)
      if (this._activeBackgroundHowl) this.runMusicAction(false)
      this._activeBackgroundHowl = howl
      this.enableOnBackgroundLoopEnded(this._activeBackgroundHowl)
      if (previous !== this._activeBackgroundHowl) this.activateBackgroundMusic()
    }
  }
}

AudioModel.COOKIE_KEY = "audio"
AudioModel.MUTE_MUSIC = "AudioModel.MUTE_MUSIC"
AudioModel.MUTE_SOUNDS = "AudioModel.MUTE_SOUNDS"

lazyInjectProperty(AudioModel, "howl", "howl_sounds", Howl)
injectProperty(AudioModel, "cookie", TypesSocial.cookie, Object)
markInjectable(AudioModel)

module.exports = { AudioModel }
