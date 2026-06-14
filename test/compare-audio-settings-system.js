"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const core = require("../src-cjs/44656__mod.js")
const restoredCore = require("../src-restored/core/RuntimeCore.js")
const { TypesAudio } = require("../src-cjs/86178__mod.js")

const original = {
  AudioModel: require("../src-cjs/31267_AudioModel.js").AudioModel,
  PlaySoundAction: require("../src-cjs/70919_PlaySoundAction.js").PlaySoundAction,
  PlayMusicAction: require("../src-cjs/74886_PlayMusicAction.js").PlayMusicAction,
  InitAudioAction: require("../src-cjs/23416_InitAudioAction.js").InitAudioAction,
  AudioModule: require("../src-cjs/75564_AudioModule.js").AudioModule,
  AudioExports: require("../src-cjs/87195__mod.js"),
  Settings: require("../src-cjs/84725_Settings.js").Settings,
}

const restored = {
  AudioModel: require("../src-restored/core/AudioModel.js").AudioModel,
  PlaySoundAction: require("../src-restored/core/PlaySoundAction.js").PlaySoundAction,
  PlayMusicAction: require("../src-restored/core/PlayMusicAction.js").PlayMusicAction,
  InitAudioAction: require("../src-restored/core/InitAudioAction.js").InitAudioAction,
  AudioModule: require("../src-restored/core/AudioModule.js").AudioModule,
  AudioExports: require("../src-restored/core/AudioExports.js"),
  Settings: require("../src-restored/core/Settings.js").Settings,
}

Promise.resolve()
  .then(async () => {
    assert.deepEqual(Object.keys(restored.AudioExports), Object.keys(original.AudioExports), "audio barrel keys differ")
    assert.deepEqual(restored.Settings, original.Settings, "Settings constants differ")
    assert.deepEqual(publicPrototypeMembers(restored.AudioModel), publicPrototypeMembers(original.AudioModel))
    assert.deepEqual(publicPrototypeMembers(restored.PlaySoundAction), publicPrototypeMembers(original.PlaySoundAction))
    assert.deepEqual(publicPrototypeMembers(restored.PlayMusicAction), publicPrototypeMembers(original.PlayMusicAction))
    assert.deepEqual(publicPrototypeMembers(restored.InitAudioAction), publicPrototypeMembers(original.InitAudioAction))

    assert.deepEqual(
      await exerciseAudioModel(restored.AudioModel, restoredCore),
      await exerciseAudioModel(original.AudioModel, core),
      "AudioModel behavior differs",
    )
    assert.deepEqual(
      await exercisePlaySoundAction(restored.PlaySoundAction, restoredCore),
      await exercisePlaySoundAction(original.PlaySoundAction, core),
      "PlaySoundAction behavior differs",
    )
    assert.deepEqual(
      await exercisePlayMusicAction(restored.PlayMusicAction),
      await exercisePlayMusicAction(original.PlayMusicAction),
      "PlayMusicAction behavior differs",
    )
    assert.deepEqual(
      await exerciseInitAudioAction(restored.InitAudioAction),
      await exerciseInitAudioAction(original.InitAudioAction),
      "InitAudioAction behavior differs",
    )

    const originalBindings = recordBindings(original.AudioModule)
    const restoredBindings = recordBindings(restored.AudioModule)
    assert.deepEqual(restoredBindings.records, originalBindings.records, "AudioModule binding topology differs")
    assert.equal(restoredBindings.targets.get(TypesAudio.model), restored.AudioModel)
    assert.equal(restoredBindings.targets.get(TypesAudio.initAction), restored.InitAudioAction)
    assert.equal(restoredBindings.targets.get(TypesAudio.soundAction), restored.PlaySoundAction)
    assert.equal(restoredBindings.targets.get(TypesAudio.musicAction), restored.PlayMusicAction)

    console.log(
      JSON.stringify(
        {
          modules: [
            "AudioModel",
            "InitAudioAction",
            "PlaySoundAction",
            "PlayMusicAction",
            "AudioModule",
            "AudioExports",
            "Settings",
          ],
          scenarios: 5,
          status: "ok",
        },
        null,
        2,
      ),
    )
  })
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })

async function exerciseAudioModel(AudioModel, runtime) {
  const records = []
  const howls = {
    howl_music: createHowl(records, "music"),
    howl_alt: createHowl(records, "alt"),
  }
  const restoreDi = patchDi(runtime, (token) => {
    records.push(["di.get", token])
    if (token === TypesAudio.musicAction) {
      return {
        run(payload) {
          records.push(["musicAction.run", normalizeMusicPayload(payload)])
          return "music-action-result"
        },
      }
    }
    return howls[token]
  })

  try {
    const model = new AudioModel()
    model.cookie = {
      save(key, value) {
        records.push(["cookie.save", key, value])
      },
    }
    model.addListener = (event, handler) => records.push(["addListener", event, typeof handler])
    model.dispatch = (event, payload) => records.push(["dispatch", event, payload])
    model.backgroundSounds.push({ id: "howl_alt" })

    const initResult = await model.init(false, true)
    const afterInit = snapshotAudioModel(model)
    const muteSoundsResult = model.muteSounds(true)
    const muteMusicResult = model.muteMusic(false)
    model.paused = true
    model.paused = false
    model.isAdPlaying = true
    model.isAdPlaying = false
    model.changeBackgroundMusic("howl_alt")
    model.onBackgroundLoopEnded()

    return {
      initReturnedSelf: initResult === model,
      afterInit,
      muteSoundsResult,
      muteMusicResult,
      afterMutations: snapshotAudioModel(model),
      constants: {
        COOKIE_KEY: AudioModel.COOKIE_KEY,
        MUTE_MUSIC: AudioModel.MUTE_MUSIC,
        MUTE_SOUNDS: AudioModel.MUTE_SOUNDS,
      },
      records,
    }
  } finally {
    restoreDi()
  }
}

async function exercisePlaySoundAction(PlaySoundAction, runtime) {
  const records = []
  const restoreDi = patchDi(runtime, (token) => {
    records.push(["di.get", token])
    return {
      play(sprite) {
        records.push(["howl.play", sprite])
        return sprite === "silent" ? 0 : 42
      },
    }
  })

  try {
    const action = new PlaySoundAction()
    action.model = { soundsMuted: () => false }
    const played = await action.execute("click_ui")
    const zeroIdFallsBack = await action.execute("silent")
    action.transformSound = () => undefined
    const transformedAway = await action.execute("ignored")
    action.model = { soundsMuted: () => true }
    const muted = await action.execute("click_ui")
    return { played, zeroIdFallsBack, transformedAway, muted, records }
  } finally {
    restoreDi()
  }
}

async function exercisePlayMusicAction(PlayMusicAction) {
  const records = []
  PlayMusicAction.activeMusicState = { playing: false }
  const howl = createHowl(records, "music")
  const action = new PlayMusicAction()

  await action.execute({ active: true, sprite: "track-a", howlInstance: howl })
  const afterStart = { ...PlayMusicAction.activeMusicState }
  await action.execute({ active: true, sprite: "track-a", howlInstance: howl })
  await action.execute({ active: false, howlInstance: howl })
  const afterStop = { ...PlayMusicAction.activeMusicState }

  return { afterStart, afterStop, records }
}

async function exerciseInitAudioAction(InitAudioAction) {
  const action = new InitAudioAction()
  const srcArray = action.fixPaths({ src: ["/a.mp3", "/a.ogg"] }, "https://cdn.example")
  const srcString = action.fixPaths({ src: "/b.mp3" }, "https://cdn.example")
  const noAudioRecords = []
  action.gameConfig = {}
  action.cookie = {
    get() {
      noAudioRecords.push(["cookie.get"])
      return {}
    },
  }
  action.model = {
    init() {
      noAudioRecords.push(["model.init"])
    },
  }

  return {
    srcArray,
    srcString,
    executeNoAudio: await action.execute(),
    noAudioRecords,
  }
}

function createHowl(records, label) {
  return {
    label,
    _volume: 0.25,
    on(event, handler) {
      records.push(["howl.on", label, event, typeof handler])
    },
    off(event, handler) {
      records.push(["howl.off", label, event, typeof handler])
    },
    play(sprite) {
      records.push(["howl.play", label, sprite])
      return label === "music" ? 7 : 11
    },
    volume() {
      records.push(["howl.volume", label])
      return this._volume
    },
    fade(from, to, duration, id) {
      records.push(["howl.fade", label, from, to, duration, id])
      this._volume = to
    },
  }
}

function snapshotAudioModel(model) {
  return {
    soundsMuted: model.soundsMuted(),
    musicMuted: model.musicMuted(),
    ready: model.ready,
    paused: model.paused,
    isAdPlaying: model.isAdPlaying,
    activeBackgroundHowl: model.activeBackgroundHowl?.label,
    backgroundSounds: model.backgroundSounds.map((sound) => ({
      id: sound.id,
      default: sound.default,
      initiated: sound.initiated,
      howl: sound.howl?.label,
    })),
  }
}

function normalizeMusicPayload(payload) {
  return {
    active: payload.active,
    howlInstance: payload.howlInstance?.label,
  }
}

function patchDi(runtime, implementation) {
  const originalGet = runtime.di.get
  const originalIsBound = runtime.di.isBound
  runtime.di.isBound = () => true
  runtime.di.get = implementation
  return () => {
    runtime.di.get = originalGet
    runtime.di.isBound = originalIsBound
  }
}

function recordBindings(containerModule) {
  const records = []
  const targets = new Map()

  containerModule.registry((token) => {
    records.push(["bind", token])
    return makeBindSyntax(records, targets, token)
  })

  return { records, targets }
}

function makeBindSyntax(records, targets, token) {
  const syntax = {
    to(target) {
      records.push(["to"])
      targets.set(token, target)
      return syntax
    },
    inSingletonScope() {
      records.push(["inSingletonScope"])
      return syntax
    },
  }

  return syntax
}

function publicPrototypeMembers(value) {
  return Object.getOwnPropertyNames(value.prototype).sort()
}
