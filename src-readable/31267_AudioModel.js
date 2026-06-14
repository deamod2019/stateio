/**
 * Webpack Module #31267
 * @exports AudioModel, COOKIE_KEY, MUTE_MUSIC, MUTE_SOUNDS
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.AudioModel = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(41766) /* 41766_Howler */,
    u = (function (e) {
      function t() {
        var t = e.call(this) || this
        return (
          (t._paused = false),
          (t._started = false),
          (t._ready = false),
          (t._isAdPlaying = false),
          (t._onBackgroundLoopEnded = function () {
            return t.onBackgroundLoopEnded()
          }),
          (t.backgroundSounds = [{ id: "howl_music", default: true }]),
          t
        )
      }
      var n
      return (
        i.__extends(t, e),
        (n = t),
        (t.prototype.initBackgroundSounds = function () {
          this.backgroundSounds.forEach(function (e) {
            ;((e.howl = (0, r.lazyGet)(e.id)), (e.initiated = true))
          })
        }),
        (t.prototype.init = function (e, t) {
          return (
            undefined === e && (e = false),
            undefined === t && (t = false),
            i.__awaiter(this, undefined, undefined, function () {
              var n
              return i.__generator(this, function (i) {
                return (
                  this.initBackgroundSounds(),
                  this.addListener(o.AdEvents.STARTED, this.onAdStarted),
                  this.addListener(o.AdEvents.ENDED, this.onAdEnded),
                  this.addListener(r.CommonEvents.PAUSE, this.onPause),
                  this.muteMusic(t),
                  this.muteSounds(e),
                  (null ==
                  (n = this.backgroundSounds.find(function (e) {
                    return e.default
                  }))
                    ? undefined
                    : n.howl) && (this.activeBackgroundHowl = n.howl),
                  (this._ready = true),
                  [2, this]
                )
              })
            })
          )
        }),
        (t.prototype.soundsMuted = function () {
          return this._sounds
        }),
        (t.prototype.musicMuted = function () {
          return this._music
        }),
        (t.prototype.muteSounds = function (e) {
          return (
            this._sounds !== e &&
              ((this._sounds = e), this.dispatch(n.MUTE_SOUNDS, e), this.postData()),
            this._sounds
          )
        }),
        (t.prototype.muteMusic = function (e) {
          return (
            this._music !== e &&
              ((this._music = e), this.tapMusic(), this.dispatch(n.MUTE_MUSIC, e), this.postData()),
            this._music
          )
        }),
        (t.prototype.activateBackgroundMusic = function () {
          ;((this._started = true), this.tapMusic())
        }),
        Object.defineProperty(t.prototype, "ready", {
          get: function () {
            return this._ready
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "paused", {
          get: function () {
            return this._paused
          },
          set: function (e) {
            ;((this._paused = e), this.tapMusic())
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.onAdStarted = function () {
          this.isAdPlaying = true
        }),
        (t.prototype.onAdEnded = function () {
          this.isAdPlaying = false
        }),
        Object.defineProperty(t.prototype, "isAdPlaying", {
          get: function () {
            return this._isAdPlaying
          },
          set: function (e) {
            ;((this._isAdPlaying = e), this.tapMusic())
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.onPause = function (e) {
          this.paused = e
        }),
        (t.prototype.postData = function () {
          var e = this._sounds,
            t = this._music
          this.cookie.save(n.COOKIE_KEY, { sounds: e, music: t })
        }),
        (t.prototype.tapMusic = function () {
          if (this._ready && this._started) {
            var e = this._isAdPlaying || (!this._isAdPlaying && this._paused)
            this.runMusicAction(!this._music && !e)
          }
        }),
        (t.prototype.runMusicAction = function (e) {
          var t
          return i.__awaiter(this, undefined, undefined, function () {
            var n
            return i.__generator(this, function (i) {
              return (
                (n = this._activeBackgroundHowl),
                [
                  2,
                  null === (t = (0, r.lazyGet)(o.TypesAudio.musicAction)) || undefined === t
                    ? undefined
                    : t.run({ active: e, howlInstance: n }),
                ]
              )
            })
          })
        }),
        (t.prototype.onBackgroundLoopEnded = function () {
          this.changeBackgroundMusic()
        }),
        (t.prototype.changeBackgroundMusic = function (e) {
          var t
          this.activeBackgroundHowl =
            null ===
              (t = this.backgroundSounds.find(function (t) {
                return t.id === e
              })) || undefined === t
              ? undefined
              : t.howl
        }),
        (t.prototype.disableOnBackgroundLoopEnded = function (e) {
          e && e.off("end", this._onBackgroundLoopEnded)
        }),
        (t.prototype.enableOnBackgroundLoopEnded = function (e) {
          e && e.on("end", this._onBackgroundLoopEnded)
        }),
        Object.defineProperty(t.prototype, "activeBackgroundHowl", {
          get: function () {
            return this._activeBackgroundHowl
          },
          set: function (e) {
            if (e && this._activeBackgroundHowl !== e) {
              var t = this._activeBackgroundHowl
              ;(this.disableOnBackgroundLoopEnded(this._activeBackgroundHowl),
                this._activeBackgroundHowl && this.runMusicAction(false),
                (this._activeBackgroundHowl = e),
                this.enableOnBackgroundLoopEnded(this._activeBackgroundHowl),
                t !== this._activeBackgroundHowl && this.activateBackgroundMusic())
            }
          },
          enumerable: false,
          configurable: true,
        }),
        (t.COOKIE_KEY = "audio"),
        (t.MUTE_MUSIC = "AudioModel.MUTE_MUSIC"),
        (t.MUTE_SOUNDS = "AudioModel.MUTE_SOUNDS"),
        i.__decorate(
          [(0, r.lazyInject)("howl_sounds"), i.__metadata("design:type", s.Howl)],
          t.prototype,
          "howl",
          undefined,
        ),
        i.__decorate(
          [(0, a.inject)(o.TypesSocial.cookie), i.__metadata("design:type", Object)],
          t.prototype,
          "cookie",
          undefined,
        ),
        (t = n = i.__decorate([(0, a.injectable)(), i.__metadata("design:paramtypes", [])], t))
      )
    })(r.GlobalEventProvider)
  t.AudioModel = u
}
