/**
 * Restored source for Webpack Module #75564.
 *
 * Dependency-injection bindings for the audio model and actions.
 */
"use strict"

const { ContainerModule } = require("./diRuntime")
const { TypesAudio } = require("./CoreTypes")
const { AudioModel } = require("./AudioModel")
const { InitAudioAction } = require("./InitAudioAction")
const { PlaySoundAction } = require("./PlaySoundAction")
const { PlayMusicAction } = require("./PlayMusicAction")

const AudioModule = new ContainerModule((bind) => {
  bind(TypesAudio.model).to(AudioModel).inSingletonScope()
  bind(TypesAudio.initAction).to(InitAudioAction)
  bind(TypesAudio.soundAction).to(PlaySoundAction)
  bind(TypesAudio.musicAction).to(PlayMusicAction)
})

module.exports = { AudioModule }
