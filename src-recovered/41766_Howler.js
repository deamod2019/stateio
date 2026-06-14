/**
 * Webpack Module #41766
 * @exports Howler, Howl
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  var i
  ;(!(function () {
    "use strict"
    var r = function () {
      this.init()
    }
    r.prototype = {
      init: function () {
        var e = this || o
        return (
          (e._counter = 1e3),
          (e._html5AudioPool = []),
          (e.html5PoolSize = 10),
          (e._codecs = {}),
          (e._howls = []),
          (e._muted = !1),
          (e._volume = 1),
          (e._canPlayEvent = "canplaythrough"),
          (e._navigator =
            "undefined" != typeof window && window.navigator ? window.navigator : null),
          (e.masterGain = null),
          (e.noAudio = !1),
          (e.usingWebAudio = !0),
          (e.autoSuspend = !0),
          (e.ctx = null),
          (e.autoUnlock = !0),
          e._setup(),
          e
        )
      },
      volume: function (e) {
        var t = this || o
        if (((e = parseFloat(e)), t.ctx || p(), void 0 !== e && e >= 0 && e <= 1)) {
          if (((t._volume = e), t._muted)) return t
          t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, o.ctx.currentTime)
          for (var n = 0; n < t._howls.length; n++)
            if (!t._howls[n]._webAudio)
              for (var i = t._howls[n]._getSoundIds(), r = 0; r < i.length; r++) {
                var a = t._howls[n]._soundById(i[r])
                a && a._node && (a._node.volume = a._volume * e)
              }
          return t
        }
        return t._volume
      },
      mute: function (e) {
        var t = this || o
        ;(t.ctx || p(),
          (t._muted = e),
          t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, o.ctx.currentTime))
        for (var n = 0; n < t._howls.length; n++)
          if (!t._howls[n]._webAudio)
            for (var i = t._howls[n]._getSoundIds(), r = 0; r < i.length; r++) {
              var a = t._howls[n]._soundById(i[r])
              a && a._node && (a._node.muted = !!e || a._muted)
            }
        return t
      },
      stop: function () {
        for (var e = this || o, t = 0; t < e._howls.length; t++) e._howls[t].stop()
        return e
      },
      unload: function () {
        for (var e = this || o, t = e._howls.length - 1; t >= 0; t--) e._howls[t].unload()
        return (
          e.usingWebAudio &&
            e.ctx &&
            void 0 !== e.ctx.close &&
            (e.ctx.close(), (e.ctx = null), p()),
          e
        )
      },
      codecs: function (e) {
        return (this || o)._codecs[e.replace(/^x-/, "")]
      },
      _setup: function () {
        var e = this || o
        if (((e.state = (e.ctx && e.ctx.state) || "suspended"), e._autoSuspend(), !e.usingWebAudio))
          if ("undefined" != typeof Audio)
            try {
              void 0 === new Audio().oncanplaythrough && (e._canPlayEvent = "canplay")
            } catch (t) {
              e.noAudio = !0
            }
          else e.noAudio = !0
        try {
          new Audio().muted && (e.noAudio = !0)
        } catch (e) {}
        return (e.noAudio || e._setupCodecs(), e)
      },
      _setupCodecs: function () {
        var e = this || o,
          t = null
        try {
          t = "undefined" != typeof Audio ? new Audio() : null
        } catch (t) {
          return e
        }
        if (!t || "function" != typeof t.canPlayType) return e
        var n = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
          i = e._navigator ? e._navigator.userAgent : "",
          r = i.match(/OPR\/([0-6].)/g),
          a = r && parseInt(r[0].split("/")[1], 10) < 33,
          s = -1 !== i.indexOf("Safari") && -1 === i.indexOf("Chrome"),
          u = i.match(/Version\/(.*?) /),
          l = s && u && parseInt(u[1], 10) < 15
        return (
          (e._codecs = {
            mp3: !(a || (!n && !t.canPlayType("audio/mp3;").replace(/^no$/, ""))),
            mpeg: !!n,
            opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(t.canPlayType('audio/wav; codecs="1"') || t.canPlayType("audio/wav")).replace(
              /^no$/,
              "",
            ),
            aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(
              t.canPlayType("audio/x-m4a;") ||
              t.canPlayType("audio/m4a;") ||
              t.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            m4b: !!(
              t.canPlayType("audio/x-m4b;") ||
              t.canPlayType("audio/m4b;") ||
              t.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            mp4: !!(
              t.canPlayType("audio/x-mp4;") ||
              t.canPlayType("audio/mp4;") ||
              t.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            weba: !(l || !t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(l || !t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(
              /^no$/,
              "",
            ),
          }),
          e
        )
      },
      _unlockAudio: function () {
        var e = this || o
        if (!e._audioUnlocked && e.ctx) {
          ;((e._audioUnlocked = !1),
            (e.autoUnlock = !1),
            e._mobileUnloaded ||
              44100 === e.ctx.sampleRate ||
              ((e._mobileUnloaded = !0), e.unload()),
            (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050)))
          var t = function (n) {
            for (; e._html5AudioPool.length < e.html5PoolSize; )
              try {
                var i = new Audio()
                ;((i._unlocked = !0), e._releaseHtml5Audio(i))
              } catch (n) {
                e.noAudio = !0
                break
              }
            for (var r = 0; r < e._howls.length; r++)
              if (!e._howls[r]._webAudio)
                for (var o = e._howls[r]._getSoundIds(), a = 0; a < o.length; a++) {
                  var s = e._howls[r]._soundById(o[a])
                  s && s._node && !s._node._unlocked && ((s._node._unlocked = !0), s._node.load())
                }
            e._autoResume()
            var u = e.ctx.createBufferSource()
            ;((u.buffer = e._scratchBuffer),
              u.connect(e.ctx.destination),
              void 0 === u.start ? u.noteOn(0) : u.start(0),
              "function" == typeof e.ctx.resume && e.ctx.resume(),
              (u.onended = function () {
                ;(u.disconnect(0),
                  (e._audioUnlocked = !0),
                  document.removeEventListener("touchstart", t, !0),
                  document.removeEventListener("touchend", t, !0),
                  document.removeEventListener("click", t, !0),
                  document.removeEventListener("keydown", t, !0))
                for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit("unlock")
              }))
          }
          return (
            document.addEventListener("touchstart", t, !0),
            document.addEventListener("touchend", t, !0),
            document.addEventListener("click", t, !0),
            document.addEventListener("keydown", t, !0),
            e
          )
        }
      },
      _obtainHtml5Audio: function () {
        var e = this || o
        if (e._html5AudioPool.length) return e._html5AudioPool.pop()
        var t = new Audio().play()
        return (
          t &&
            "undefined" != typeof Promise &&
            (t instanceof Promise || "function" == typeof t.then) &&
            t.catch(function () {
              console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
            }),
          new Audio()
        )
      },
      _releaseHtml5Audio: function (e) {
        var t = this || o
        return (e._unlocked && t._html5AudioPool.push(e), t)
      },
      _autoSuspend: function () {
        var e = this
        if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && o.usingWebAudio) {
          for (var t = 0; t < e._howls.length; t++)
            if (e._howls[t]._webAudio)
              for (var n = 0; n < e._howls[t]._sounds.length; n++)
                if (!e._howls[t]._sounds[n]._paused) return e
          return (
            e._suspendTimer && clearTimeout(e._suspendTimer),
            (e._suspendTimer = setTimeout(function () {
              if (e.autoSuspend) {
                ;((e._suspendTimer = null), (e.state = "suspending"))
                var t = function () {
                  ;((e.state = "suspended"),
                    e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume()))
                }
                e.ctx.suspend().then(t, t)
              }
            }, 3e4)),
            e
          )
        }
      },
      _autoResume: function () {
        var e = this
        if (e.ctx && void 0 !== e.ctx.resume && o.usingWebAudio)
          return (
            "running" === e.state && "interrupted" !== e.ctx.state && e._suspendTimer
              ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
              : "suspended" === e.state || ("running" === e.state && "interrupted" === e.ctx.state)
                ? (e.ctx.resume().then(function () {
                    e.state = "running"
                    for (var t = 0; t < e._howls.length; t++) e._howls[t]._emit("resume")
                  }),
                  e._suspendTimer && (clearTimeout(e._suspendTimer), (e._suspendTimer = null)))
                : "suspending" === e.state && (e._resumeAfterSuspend = !0),
            e
          )
      },
    }
    var o = new r(),
      a = function (e) {
        e.src && 0 !== e.src.length
          ? this.init(e)
          : console.error("An array of source files must be passed with any new Howl.")
      }
    a.prototype = {
      init: function (e) {
        var t = this
        return (
          o.ctx || p(),
          (t._autoplay = e.autoplay || !1),
          (t._format = "string" != typeof e.format ? e.format : [e.format]),
          (t._html5 = e.html5 || !1),
          (t._muted = e.mute || !1),
          (t._loop = e.loop || !1),
          (t._pool = e.pool || 5),
          (t._preload = ("boolean" != typeof e.preload && "metadata" !== e.preload) || e.preload),
          (t._rate = e.rate || 1),
          (t._sprite = e.sprite || {}),
          (t._src = "string" != typeof e.src ? e.src : [e.src]),
          (t._volume = void 0 !== e.volume ? e.volume : 1),
          (t._xhr = {
            method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
            headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
            withCredentials: !(!e.xhr || !e.xhr.withCredentials) && e.xhr.withCredentials,
          }),
          (t._duration = 0),
          (t._state = "unloaded"),
          (t._sounds = []),
          (t._endTimers = {}),
          (t._queue = []),
          (t._playLock = !1),
          (t._onend = e.onend ? [{ fn: e.onend }] : []),
          (t._onfade = e.onfade ? [{ fn: e.onfade }] : []),
          (t._onload = e.onload ? [{ fn: e.onload }] : []),
          (t._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
          (t._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
          (t._onpause = e.onpause ? [{ fn: e.onpause }] : []),
          (t._onplay = e.onplay ? [{ fn: e.onplay }] : []),
          (t._onstop = e.onstop ? [{ fn: e.onstop }] : []),
          (t._onmute = e.onmute ? [{ fn: e.onmute }] : []),
          (t._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
          (t._onrate = e.onrate ? [{ fn: e.onrate }] : []),
          (t._onseek = e.onseek ? [{ fn: e.onseek }] : []),
          (t._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
          (t._onresume = []),
          (t._webAudio = o.usingWebAudio && !t._html5),
          void 0 !== o.ctx && o.ctx && o.autoUnlock && o._unlockAudio(),
          o._howls.push(t),
          t._autoplay &&
            t._queue.push({
              event: "play",
              action: function () {
                t.play()
              },
            }),
          t._preload && "none" !== t._preload && t.load(),
          t
        )
      },
      load: function () {
        var e = this,
          t = null
        if (o.noAudio) e._emit("loaderror", null, "No audio support.")
        else {
          "string" == typeof e._src && (e._src = [e._src])
          for (var n = 0; n < e._src.length; n++) {
            var i, r
            if (e._format && e._format[n]) i = e._format[n]
            else {
              if ("string" != typeof (r = e._src[n])) {
                e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.")
                continue
              }
              ;((i = /^data:audio\/([^;,]+);/i.exec(r)) ||
                (i = /\.([^.]+)$/.exec(r.split("?", 1)[0])),
                i && (i = i[1].toLowerCase()))
            }
            if (
              (i ||
                console.warn(
                  'No file extension was found. Consider using the "format" property or specify an extension.',
                ),
              i && o.codecs(i))
            ) {
              t = e._src[n]
              break
            }
          }
          if (t)
            return (
              (e._src = t),
              (e._state = "loading"),
              "https:" === window.location.protocol &&
                "http:" === t.slice(0, 5) &&
                ((e._html5 = !0), (e._webAudio = !1)),
              new s(e),
              e._webAudio && l(e),
              e
            )
          e._emit("loaderror", null, "No codec support for selected audio sources.")
        }
      },
      play: function (e, t) {
        var n = this,
          i = null
        if ("number" == typeof e) ((i = e), (e = null))
        else {
          if ("string" == typeof e && "loaded" === n._state && !n._sprite[e]) return null
          if (void 0 === e && ((e = "__default"), !n._playLock)) {
            for (var r = 0, a = 0; a < n._sounds.length; a++)
              n._sounds[a]._paused && !n._sounds[a]._ended && (r++, (i = n._sounds[a]._id))
            1 === r ? (e = null) : (i = null)
          }
        }
        var s = i ? n._soundById(i) : n._inactiveSound()
        if (!s) return null
        if ((i && !e && (e = s._sprite || "__default"), "loaded" !== n._state)) {
          ;((s._sprite = e), (s._ended = !1))
          var u = s._id
          return (
            n._queue.push({
              event: "play",
              action: function () {
                n.play(u)
              },
            }),
            u
          )
        }
        if (i && !s._paused) return (t || n._loadQueue("play"), s._id)
        n._webAudio && o._autoResume()
        var l = Math.max(0, s._seek > 0 ? s._seek : n._sprite[e][0] / 1e3),
          c = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - l),
          d = (1e3 * c) / Math.abs(s._rate),
          h = n._sprite[e][0] / 1e3,
          p = (n._sprite[e][0] + n._sprite[e][1]) / 1e3
        ;((s._sprite = e), (s._ended = !1))
        var f = function () {
          ;((s._paused = !1),
            (s._seek = l),
            (s._start = h),
            (s._stop = p),
            (s._loop = !(!s._loop && !n._sprite[e][2])))
        }
        if (!(l >= p)) {
          var _ = s._node
          if (n._webAudio) {
            var g = function () {
              ;((n._playLock = !1), f(), n._refreshBuffer(s))
              var e = s._muted || n._muted ? 0 : s._volume
              ;(_.gain.setValueAtTime(e, o.ctx.currentTime),
                (s._playStart = o.ctx.currentTime),
                void 0 === _.bufferSource.start
                  ? s._loop
                    ? _.bufferSource.noteGrainOn(0, l, 86400)
                    : _.bufferSource.noteGrainOn(0, l, c)
                  : s._loop
                    ? _.bufferSource.start(0, l, 86400)
                    : _.bufferSource.start(0, l, c),
                d !== 1 / 0 && (n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), d)),
                t ||
                  setTimeout(function () {
                    ;(n._emit("play", s._id), n._loadQueue())
                  }, 0))
            }
            "running" === o.state && "interrupted" !== o.ctx.state
              ? g()
              : ((n._playLock = !0), n.once("resume", g), n._clearTimer(s._id))
          } else {
            var m = function () {
              ;((_.currentTime = l),
                (_.muted = s._muted || n._muted || o._muted || _.muted),
                (_.volume = s._volume * o.volume()),
                (_.playbackRate = s._rate))
              try {
                var i = _.play()
                if (
                  (i &&
                  "undefined" != typeof Promise &&
                  (i instanceof Promise || "function" == typeof i.then)
                    ? ((n._playLock = !0),
                      f(),
                      i
                        .then(function () {
                          ;((n._playLock = !1),
                            (_._unlocked = !0),
                            t ? n._loadQueue() : n._emit("play", s._id))
                        })
                        .catch(function () {
                          ;((n._playLock = !1),
                            n._emit(
                              "playerror",
                              s._id,
                              "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.",
                            ),
                            (s._ended = !0),
                            (s._paused = !0))
                        }))
                    : t || ((n._playLock = !1), f(), n._emit("play", s._id)),
                  (_.playbackRate = s._rate),
                  _.paused)
                )
                  return void n._emit(
                    "playerror",
                    s._id,
                    "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.",
                  )
                "__default" !== e || s._loop
                  ? (n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), d))
                  : ((n._endTimers[s._id] = function () {
                      ;(n._ended(s), _.removeEventListener("ended", n._endTimers[s._id], !1))
                    }),
                    _.addEventListener("ended", n._endTimers[s._id], !1))
              } catch (e) {
                n._emit("playerror", s._id, e)
              }
            }
            "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" ===
              _.src && ((_.src = n._src), _.load())
            var v = (window && window.ejecta) || (!_.readyState && o._navigator.isCocoonJS)
            if (_.readyState >= 3 || v) m()
            else {
              ;((n._playLock = !0), (n._state = "loading"))
              var y = function () {
                ;((n._state = "loaded"), m(), _.removeEventListener(o._canPlayEvent, y, !1))
              }
              ;(_.addEventListener(o._canPlayEvent, y, !1), n._clearTimer(s._id))
            }
          }
          return s._id
        }
        n._ended(s)
      },
      pause: function (e) {
        var t = this
        if ("loaded" !== t._state || t._playLock)
          return (
            t._queue.push({
              event: "pause",
              action: function () {
                t.pause(e)
              },
            }),
            t
          )
        for (var n = t._getSoundIds(e), i = 0; i < n.length; i++) {
          t._clearTimer(n[i])
          var r = t._soundById(n[i])
          if (
            r &&
            !r._paused &&
            ((r._seek = t.seek(n[i])),
            (r._rateSeek = 0),
            (r._paused = !0),
            t._stopFade(n[i]),
            r._node)
          )
            if (t._webAudio) {
              if (!r._node.bufferSource) continue
              ;(void 0 === r._node.bufferSource.stop
                ? r._node.bufferSource.noteOff(0)
                : r._node.bufferSource.stop(0),
                t._cleanBuffer(r._node))
            } else (isNaN(r._node.duration) && r._node.duration !== 1 / 0) || r._node.pause()
          arguments[1] || t._emit("pause", r ? r._id : null)
        }
        return t
      },
      stop: function (e, t) {
        var n = this
        if ("loaded" !== n._state || n._playLock)
          return (
            n._queue.push({
              event: "stop",
              action: function () {
                n.stop(e)
              },
            }),
            n
          )
        for (var i = n._getSoundIds(e), r = 0; r < i.length; r++) {
          n._clearTimer(i[r])
          var o = n._soundById(i[r])
          o &&
            ((o._seek = o._start || 0),
            (o._rateSeek = 0),
            (o._paused = !0),
            (o._ended = !0),
            n._stopFade(i[r]),
            o._node &&
              (n._webAudio
                ? o._node.bufferSource &&
                  (void 0 === o._node.bufferSource.stop
                    ? o._node.bufferSource.noteOff(0)
                    : o._node.bufferSource.stop(0),
                  n._cleanBuffer(o._node))
                : (isNaN(o._node.duration) && o._node.duration !== 1 / 0) ||
                  ((o._node.currentTime = o._start || 0),
                  o._node.pause(),
                  o._node.duration === 1 / 0 && n._clearSound(o._node))),
            t || n._emit("stop", o._id))
        }
        return n
      },
      mute: function (e, t) {
        var n = this
        if ("loaded" !== n._state || n._playLock)
          return (
            n._queue.push({
              event: "mute",
              action: function () {
                n.mute(e, t)
              },
            }),
            n
          )
        if (void 0 === t) {
          if ("boolean" != typeof e) return n._muted
          n._muted = e
        }
        for (var i = n._getSoundIds(t), r = 0; r < i.length; r++) {
          var a = n._soundById(i[r])
          a &&
            ((a._muted = e),
            a._interval && n._stopFade(a._id),
            n._webAudio && a._node
              ? a._node.gain.setValueAtTime(e ? 0 : a._volume, o.ctx.currentTime)
              : a._node && (a._node.muted = !!o._muted || e),
            n._emit("mute", a._id))
        }
        return n
      },
      volume: function () {
        var e,
          t,
          n,
          i = this,
          r = arguments
        if (0 === r.length) return i._volume
        if (1 === r.length || (2 === r.length && void 0 === r[1])) {
          var a = i._getSoundIds(),
            s = a.indexOf(r[0])
          s >= 0 ? (t = parseInt(r[0], 10)) : (e = parseFloat(r[0]))
        } else r.length >= 2 && ((e = parseFloat(r[0])), (t = parseInt(r[1], 10)))
        if (!(void 0 !== e && e >= 0 && e <= 1))
          return (n = t ? i._soundById(t) : i._sounds[0]) ? n._volume : 0
        if ("loaded" !== i._state || i._playLock)
          return (
            i._queue.push({
              event: "volume",
              action: function () {
                i.volume.apply(i, r)
              },
            }),
            i
          )
        ;(void 0 === t && (i._volume = e), (t = i._getSoundIds(t)))
        for (var u = 0; u < t.length; u++)
          (n = i._soundById(t[u])) &&
            ((n._volume = e),
            r[2] || i._stopFade(t[u]),
            i._webAudio && n._node && !n._muted
              ? n._node.gain.setValueAtTime(e, o.ctx.currentTime)
              : n._node && !n._muted && (n._node.volume = e * o.volume()),
            i._emit("volume", n._id))
        return i
      },
      fade: function (e, t, n, i) {
        var r = this
        if ("loaded" !== r._state || r._playLock)
          return (
            r._queue.push({
              event: "fade",
              action: function () {
                r.fade(e, t, n, i)
              },
            }),
            r
          )
        ;((e = Math.min(Math.max(0, parseFloat(e)), 1)),
          (t = Math.min(Math.max(0, parseFloat(t)), 1)),
          (n = parseFloat(n)),
          r.volume(e, i))
        for (var a = r._getSoundIds(i), s = 0; s < a.length; s++) {
          var u = r._soundById(a[s])
          if (u) {
            if ((i || r._stopFade(a[s]), r._webAudio && !u._muted)) {
              var l = o.ctx.currentTime,
                c = l + n / 1e3
              ;((u._volume = e),
                u._node.gain.setValueAtTime(e, l),
                u._node.gain.linearRampToValueAtTime(t, c))
            }
            r._startFadeInterval(u, e, t, n, a[s], void 0 === i)
          }
        }
        return r
      },
      _startFadeInterval: function (e, t, n, i, r, o) {
        var a = this,
          s = t,
          u = n - t,
          l = Math.abs(u / 0.01),
          c = Math.max(4, l > 0 ? i / l : i),
          d = Date.now()
        ;((e._fadeTo = n),
          (e._interval = setInterval(function () {
            var r = (Date.now() - d) / i
            ;((d = Date.now()),
              (s += u * r),
              (s = Math.round(100 * s) / 100),
              (s = u < 0 ? Math.max(n, s) : Math.min(n, s)),
              a._webAudio ? (e._volume = s) : a.volume(s, e._id, !0),
              o && (a._volume = s),
              ((n < t && s <= n) || (n > t && s >= n)) &&
                (clearInterval(e._interval),
                (e._interval = null),
                (e._fadeTo = null),
                a.volume(n, e._id),
                a._emit("fade", e._id)))
          }, c)))
      },
      _stopFade: function (e) {
        var t = this,
          n = t._soundById(e)
        return (
          n &&
            n._interval &&
            (t._webAudio && n._node.gain.cancelScheduledValues(o.ctx.currentTime),
            clearInterval(n._interval),
            (n._interval = null),
            t.volume(n._fadeTo, e),
            (n._fadeTo = null),
            t._emit("fade", e)),
          t
        )
      },
      loop: function () {
        var e,
          t,
          n,
          i = this,
          r = arguments
        if (0 === r.length) return i._loop
        if (1 === r.length) {
          if ("boolean" != typeof r[0]) return !!(n = i._soundById(parseInt(r[0], 10))) && n._loop
          ;((e = r[0]), (i._loop = e))
        } else 2 === r.length && ((e = r[0]), (t = parseInt(r[1], 10)))
        for (var o = i._getSoundIds(t), a = 0; a < o.length; a++)
          (n = i._soundById(o[a])) &&
            ((n._loop = e),
            i._webAudio &&
              n._node &&
              n._node.bufferSource &&
              ((n._node.bufferSource.loop = e),
              e &&
                ((n._node.bufferSource.loopStart = n._start || 0),
                (n._node.bufferSource.loopEnd = n._stop),
                i.playing(o[a]) && (i.pause(o[a], !0), i.play(o[a], !0)))))
        return i
      },
      rate: function () {
        var e,
          t,
          n,
          i = this,
          r = arguments
        if (0 === r.length) t = i._sounds[0]._id
        else if (1 === r.length) {
          var a = i._getSoundIds(),
            s = a.indexOf(r[0])
          s >= 0 ? (t = parseInt(r[0], 10)) : (e = parseFloat(r[0]))
        } else 2 === r.length && ((e = parseFloat(r[0])), (t = parseInt(r[1], 10)))
        if ("number" != typeof e) return (n = i._soundById(t)) ? n._rate : i._rate
        if ("loaded" !== i._state || i._playLock)
          return (
            i._queue.push({
              event: "rate",
              action: function () {
                i.rate.apply(i, r)
              },
            }),
            i
          )
        ;(void 0 === t && (i._rate = e), (t = i._getSoundIds(t)))
        for (var u = 0; u < t.length; u++)
          if ((n = i._soundById(t[u]))) {
            ;(i.playing(t[u]) &&
              ((n._rateSeek = i.seek(t[u])),
              (n._playStart = i._webAudio ? o.ctx.currentTime : n._playStart)),
              (n._rate = e),
              i._webAudio && n._node && n._node.bufferSource
                ? n._node.bufferSource.playbackRate.setValueAtTime(e, o.ctx.currentTime)
                : n._node && (n._node.playbackRate = e))
            var l = i.seek(t[u]),
              c = (i._sprite[n._sprite][0] + i._sprite[n._sprite][1]) / 1e3 - l,
              d = (1e3 * c) / Math.abs(n._rate)
            ;((!i._endTimers[t[u]] && n._paused) ||
              (i._clearTimer(t[u]), (i._endTimers[t[u]] = setTimeout(i._ended.bind(i, n), d))),
              i._emit("rate", n._id))
          }
        return i
      },
      seek: function () {
        var e,
          t,
          n = this,
          i = arguments
        if (0 === i.length) n._sounds.length && (t = n._sounds[0]._id)
        else if (1 === i.length) {
          var r = n._getSoundIds(),
            a = r.indexOf(i[0])
          a >= 0
            ? (t = parseInt(i[0], 10))
            : n._sounds.length && ((t = n._sounds[0]._id), (e = parseFloat(i[0])))
        } else 2 === i.length && ((e = parseFloat(i[0])), (t = parseInt(i[1], 10)))
        if (void 0 === t) return 0
        if ("number" == typeof e && ("loaded" !== n._state || n._playLock))
          return (
            n._queue.push({
              event: "seek",
              action: function () {
                n.seek.apply(n, i)
              },
            }),
            n
          )
        var s = n._soundById(t)
        if (s) {
          if (!("number" == typeof e && e >= 0)) {
            if (n._webAudio) {
              var u = n.playing(t) ? o.ctx.currentTime - s._playStart : 0,
                l = s._rateSeek ? s._rateSeek - s._seek : 0
              return s._seek + (l + u * Math.abs(s._rate))
            }
            return s._node.currentTime
          }
          var c = n.playing(t)
          ;(c && n.pause(t, !0),
            (s._seek = e),
            (s._ended = !1),
            n._clearTimer(t),
            n._webAudio || !s._node || isNaN(s._node.duration) || (s._node.currentTime = e))
          var d = function () {
            ;(c && n.play(t, !0), n._emit("seek", t))
          }
          if (c && !n._webAudio) {
            var h = function () {
              n._playLock ? setTimeout(h, 0) : d()
            }
            setTimeout(h, 0)
          } else d()
        }
        return n
      },
      playing: function (e) {
        var t = this
        if ("number" == typeof e) {
          var n = t._soundById(e)
          return !!n && !n._paused
        }
        for (var i = 0; i < t._sounds.length; i++) if (!t._sounds[i]._paused) return !0
        return !1
      },
      duration: function (e) {
        var t = this,
          n = t._duration,
          i = t._soundById(e)
        return (i && (n = t._sprite[i._sprite][1] / 1e3), n)
      },
      state: function () {
        return this._state
      },
      unload: function () {
        for (var e = this, t = e._sounds, n = 0; n < t.length; n++)
          (t[n]._paused || e.stop(t[n]._id),
            e._webAudio ||
              (e._clearSound(t[n]._node),
              t[n]._node.removeEventListener("error", t[n]._errorFn, !1),
              t[n]._node.removeEventListener(o._canPlayEvent, t[n]._loadFn, !1),
              t[n]._node.removeEventListener("ended", t[n]._endFn, !1),
              o._releaseHtml5Audio(t[n]._node)),
            delete t[n]._node,
            e._clearTimer(t[n]._id))
        var i = o._howls.indexOf(e)
        i >= 0 && o._howls.splice(i, 1)
        var r = !0
        for (n = 0; n < o._howls.length; n++)
          if (o._howls[n]._src === e._src || e._src.indexOf(o._howls[n]._src) >= 0) {
            r = !1
            break
          }
        return (
          u && r && delete u[e._src],
          (o.noAudio = !1),
          (e._state = "unloaded"),
          (e._sounds = []),
          (e = null),
          null
        )
      },
      on: function (e, t, n, i) {
        var r = this["_on" + e]
        return (
          "function" == typeof t && r.push(i ? { id: n, fn: t, once: i } : { id: n, fn: t }),
          this
        )
      },
      off: function (e, t, n) {
        var i = this,
          r = i["_on" + e],
          o = 0
        if (("number" == typeof t && ((n = t), (t = null)), t || n))
          for (o = 0; o < r.length; o++) {
            var a = n === r[o].id
            if ((t === r[o].fn && a) || (!t && a)) {
              r.splice(o, 1)
              break
            }
          }
        else if (e) i["_on" + e] = []
        else {
          var s = Object.keys(i)
          for (o = 0; o < s.length; o++)
            0 === s[o].indexOf("_on") && Array.isArray(i[s[o]]) && (i[s[o]] = [])
        }
        return i
      },
      once: function (e, t, n) {
        return (this.on(e, t, n, 1), this)
      },
      _emit: function (e, t, n) {
        for (var i = this, r = i["_on" + e], o = r.length - 1; o >= 0; o--)
          (r[o].id && r[o].id !== t && "load" !== e) ||
            (setTimeout(
              function (e) {
                e.call(this, t, n)
              }.bind(i, r[o].fn),
              0,
            ),
            r[o].once && i.off(e, r[o].fn, r[o].id))
        return (i._loadQueue(e), i)
      },
      _loadQueue: function (e) {
        var t = this
        if (t._queue.length > 0) {
          var n = t._queue[0]
          ;(n.event === e && (t._queue.shift(), t._loadQueue()), e || n.action())
        }
        return t
      },
      _ended: function (e) {
        var t = this,
          n = e._sprite
        if (
          !t._webAudio &&
          e._node &&
          !e._node.paused &&
          !e._node.ended &&
          e._node.currentTime < e._stop
        )
          return (setTimeout(t._ended.bind(t, e), 100), t)
        var i = !(!e._loop && !t._sprite[n][2])
        if (
          (t._emit("end", e._id),
          !t._webAudio && i && t.stop(e._id, !0).play(e._id),
          t._webAudio && i)
        ) {
          ;(t._emit("play", e._id),
            (e._seek = e._start || 0),
            (e._rateSeek = 0),
            (e._playStart = o.ctx.currentTime))
          var r = (1e3 * (e._stop - e._start)) / Math.abs(e._rate)
          t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), r)
        }
        return (
          t._webAudio &&
            !i &&
            ((e._paused = !0),
            (e._ended = !0),
            (e._seek = e._start || 0),
            (e._rateSeek = 0),
            t._clearTimer(e._id),
            t._cleanBuffer(e._node),
            o._autoSuspend()),
          t._webAudio || i || t.stop(e._id, !0),
          t
        )
      },
      _clearTimer: function (e) {
        var t = this
        if (t._endTimers[e]) {
          if ("function" != typeof t._endTimers[e]) clearTimeout(t._endTimers[e])
          else {
            var n = t._soundById(e)
            n && n._node && n._node.removeEventListener("ended", t._endTimers[e], !1)
          }
          delete t._endTimers[e]
        }
        return t
      },
      _soundById: function (e) {
        for (var t = this, n = 0; n < t._sounds.length; n++)
          if (e === t._sounds[n]._id) return t._sounds[n]
        return null
      },
      _inactiveSound: function () {
        var e = this
        e._drain()
        for (var t = 0; t < e._sounds.length; t++)
          if (e._sounds[t]._ended) return e._sounds[t].reset()
        return new s(e)
      },
      _drain: function () {
        var e = this,
          t = e._pool,
          n = 0,
          i = 0
        if (!(e._sounds.length < t)) {
          for (i = 0; i < e._sounds.length; i++) e._sounds[i]._ended && n++
          for (i = e._sounds.length - 1; i >= 0; i--) {
            if (n <= t) return
            e._sounds[i]._ended &&
              (e._webAudio && e._sounds[i]._node && e._sounds[i]._node.disconnect(0),
              e._sounds.splice(i, 1),
              n--)
          }
        }
      },
      _getSoundIds: function (e) {
        if (void 0 === e) {
          for (var t = [], n = 0; n < this._sounds.length; n++) t.push(this._sounds[n]._id)
          return t
        }
        return [e]
      },
      _refreshBuffer: function (e) {
        return (
          (e._node.bufferSource = o.ctx.createBufferSource()),
          (e._node.bufferSource.buffer = u[this._src]),
          e._panner
            ? e._node.bufferSource.connect(e._panner)
            : e._node.bufferSource.connect(e._node),
          (e._node.bufferSource.loop = e._loop),
          e._loop &&
            ((e._node.bufferSource.loopStart = e._start || 0),
            (e._node.bufferSource.loopEnd = e._stop || 0)),
          e._node.bufferSource.playbackRate.setValueAtTime(e._rate, o.ctx.currentTime),
          this
        )
      },
      _cleanBuffer: function (e) {
        var t = o._navigator && o._navigator.vendor.indexOf("Apple") >= 0
        if (
          o._scratchBuffer &&
          e.bufferSource &&
          ((e.bufferSource.onended = null), e.bufferSource.disconnect(0), t)
        )
          try {
            e.bufferSource.buffer = o._scratchBuffer
          } catch (e) {}
        return ((e.bufferSource = null), this)
      },
      _clearSound: function (e) {
        ;/MSIE |Trident\//.test(o._navigator && o._navigator.userAgent) ||
          (e.src =
            "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
      },
    }
    var s = function (e) {
      ;((this._parent = e), this.init())
    }
    s.prototype = {
      init: function () {
        var e = this,
          t = e._parent
        return (
          (e._muted = t._muted),
          (e._loop = t._loop),
          (e._volume = t._volume),
          (e._rate = t._rate),
          (e._seek = 0),
          (e._paused = !0),
          (e._ended = !0),
          (e._sprite = "__default"),
          (e._id = ++o._counter),
          t._sounds.push(e),
          e.create(),
          e
        )
      },
      create: function () {
        var e = this,
          t = e._parent,
          n = o._muted || e._muted || e._parent._muted ? 0 : e._volume
        return (
          t._webAudio
            ? ((e._node =
                void 0 === o.ctx.createGain ? o.ctx.createGainNode() : o.ctx.createGain()),
              e._node.gain.setValueAtTime(n, o.ctx.currentTime),
              (e._node.paused = !0),
              e._node.connect(o.masterGain))
            : o.noAudio ||
              ((e._node = o._obtainHtml5Audio()),
              (e._errorFn = e._errorListener.bind(e)),
              e._node.addEventListener("error", e._errorFn, !1),
              (e._loadFn = e._loadListener.bind(e)),
              e._node.addEventListener(o._canPlayEvent, e._loadFn, !1),
              (e._endFn = e._endListener.bind(e)),
              e._node.addEventListener("ended", e._endFn, !1),
              (e._node.src = t._src),
              (e._node.preload = !0 === t._preload ? "auto" : t._preload),
              (e._node.volume = n * o.volume()),
              e._node.load()),
          e
        )
      },
      reset: function () {
        var e = this,
          t = e._parent
        return (
          (e._muted = t._muted),
          (e._loop = t._loop),
          (e._volume = t._volume),
          (e._rate = t._rate),
          (e._seek = 0),
          (e._rateSeek = 0),
          (e._paused = !0),
          (e._ended = !0),
          (e._sprite = "__default"),
          (e._id = ++o._counter),
          e
        )
      },
      _errorListener: function () {
        var e = this
        ;(e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0),
          e._node.removeEventListener("error", e._errorFn, !1))
      },
      _loadListener: function () {
        var e = this,
          t = e._parent
        ;((t._duration = Math.ceil(10 * e._node.duration) / 10),
          0 === Object.keys(t._sprite).length &&
            (t._sprite = { __default: [0, 1e3 * t._duration] }),
          "loaded" !== t._state && ((t._state = "loaded"), t._emit("load"), t._loadQueue()),
          e._node.removeEventListener(o._canPlayEvent, e._loadFn, !1))
      },
      _endListener: function () {
        var e = this,
          t = e._parent
        ;(t._duration === 1 / 0 &&
          ((t._duration = Math.ceil(10 * e._node.duration) / 10),
          t._sprite.__default[1] === 1 / 0 && (t._sprite.__default[1] = 1e3 * t._duration),
          t._ended(e)),
          e._node.removeEventListener("ended", e._endFn, !1))
      },
    }
    var u = {},
      l = function (e) {
        var t = e._src
        if (u[t]) return ((e._duration = u[t].duration), void h(e))
        if (/^data:[^;]+;base64,/.test(t)) {
          for (
            var n = atob(t.split(",")[1]), i = new Uint8Array(n.length), r = 0;
            r < n.length;
            ++r
          )
            i[r] = n.charCodeAt(r)
          d(i.buffer, e)
        } else {
          var o = new XMLHttpRequest()
          ;(o.open(e._xhr.method, t, !0),
            (o.withCredentials = e._xhr.withCredentials),
            (o.responseType = "arraybuffer"),
            e._xhr.headers &&
              Object.keys(e._xhr.headers).forEach(function (t) {
                o.setRequestHeader(t, e._xhr.headers[t])
              }),
            (o.onload = function () {
              var t = (o.status + "")[0]
              "0" === t || "2" === t || "3" === t
                ? d(o.response, e)
                : e._emit(
                    "loaderror",
                    null,
                    "Failed loading audio file with status: " + o.status + ".",
                  )
            }),
            (o.onerror = function () {
              e._webAudio &&
                ((e._html5 = !0), (e._webAudio = !1), (e._sounds = []), delete u[t], e.load())
            }),
            c(o))
        }
      },
      c = function (e) {
        try {
          e.send()
        } catch (t) {
          e.onerror()
        }
      },
      d = function (e, t) {
        var n = function () {
            t._emit("loaderror", null, "Decoding audio data failed.")
          },
          i = function (e) {
            e && t._sounds.length > 0 ? ((u[t._src] = e), h(t, e)) : n()
          }
        "undefined" != typeof Promise && 1 === o.ctx.decodeAudioData.length
          ? o.ctx.decodeAudioData(e).then(i).catch(n)
          : o.ctx.decodeAudioData(e, i, n)
      },
      h = function (e, t) {
        ;(t && !e._duration && (e._duration = t.duration),
          0 === Object.keys(e._sprite).length &&
            (e._sprite = { __default: [0, 1e3 * e._duration] }),
          "loaded" !== e._state && ((e._state = "loaded"), e._emit("load"), e._loadQueue()))
      },
      p = function () {
        if (o.usingWebAudio) {
          try {
            "undefined" != typeof AudioContext
              ? (o.ctx = new AudioContext())
              : "undefined" != typeof webkitAudioContext
                ? (o.ctx = new webkitAudioContext())
                : (o.usingWebAudio = !1)
          } catch (e) {
            o.usingWebAudio = !1
          }
          o.ctx || (o.usingWebAudio = !1)
          var e = /iP(hone|od|ad)/.test(o._navigator && o._navigator.platform),
            t = o._navigator && o._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
            n = t ? parseInt(t[1], 10) : null
          if (e && n && n < 9) {
            var i = /safari/.test(o._navigator && o._navigator.userAgent.toLowerCase())
            o._navigator && !i && (o.usingWebAudio = !1)
          }
          ;(o.usingWebAudio &&
            ((o.masterGain =
              void 0 === o.ctx.createGain ? o.ctx.createGainNode() : o.ctx.createGain()),
            o.masterGain.gain.setValueAtTime(o._muted ? 0 : o._volume, o.ctx.currentTime),
            o.masterGain.connect(o.ctx.destination)),
            o._setup())
        }
      }
    ;(void 0 ===
      (i = function () {
        return { Howler: o, Howl: a }
      }.apply(t, [])) || (e.exports = i),
      (t.Howler = o),
      (t.Howl = a),
      void 0 !== n.g
        ? ((n.g.HowlerGlobal = r), (n.g.Howler = o), (n.g.Howl = a), (n.g.Sound = s))
        : "undefined" != typeof window &&
          ((window.HowlerGlobal = r), (window.Howler = o), (window.Howl = a), (window.Sound = s)))
  })(),
    (function () {
      "use strict"
      var e
      ;((HowlerGlobal.prototype._pos = [0, 0, 0]),
        (HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]),
        (HowlerGlobal.prototype.stereo = function (e) {
          var t = this
          if (!t.ctx || !t.ctx.listener) return t
          for (var n = t._howls.length - 1; n >= 0; n--) t._howls[n].stereo(e)
          return t
        }),
        (HowlerGlobal.prototype.pos = function (e, t, n) {
          var i = this
          return i.ctx && i.ctx.listener
            ? ((t = "number" != typeof t ? i._pos[1] : t),
              (n = "number" != typeof n ? i._pos[2] : n),
              "number" != typeof e
                ? i._pos
                : ((i._pos = [e, t, n]),
                  void 0 !== i.ctx.listener.positionX
                    ? (i.ctx.listener.positionX.setTargetAtTime(
                        i._pos[0],
                        Howler.ctx.currentTime,
                        0.1,
                      ),
                      i.ctx.listener.positionY.setTargetAtTime(
                        i._pos[1],
                        Howler.ctx.currentTime,
                        0.1,
                      ),
                      i.ctx.listener.positionZ.setTargetAtTime(
                        i._pos[2],
                        Howler.ctx.currentTime,
                        0.1,
                      ))
                    : i.ctx.listener.setPosition(i._pos[0], i._pos[1], i._pos[2]),
                  i))
            : i
        }),
        (HowlerGlobal.prototype.orientation = function (e, t, n, i, r, o) {
          var a = this
          if (!a.ctx || !a.ctx.listener) return a
          var s = a._orientation
          return (
            (t = "number" != typeof t ? s[1] : t),
            (n = "number" != typeof n ? s[2] : n),
            (i = "number" != typeof i ? s[3] : i),
            (r = "number" != typeof r ? s[4] : r),
            (o = "number" != typeof o ? s[5] : o),
            "number" != typeof e
              ? s
              : ((a._orientation = [e, t, n, i, r, o]),
                void 0 !== a.ctx.listener.forwardX
                  ? (a.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, 0.1),
                    a.ctx.listener.forwardY.setTargetAtTime(t, Howler.ctx.currentTime, 0.1),
                    a.ctx.listener.forwardZ.setTargetAtTime(n, Howler.ctx.currentTime, 0.1),
                    a.ctx.listener.upX.setTargetAtTime(i, Howler.ctx.currentTime, 0.1),
                    a.ctx.listener.upY.setTargetAtTime(r, Howler.ctx.currentTime, 0.1),
                    a.ctx.listener.upZ.setTargetAtTime(o, Howler.ctx.currentTime, 0.1))
                  : a.ctx.listener.setOrientation(e, t, n, i, r, o),
                a)
          )
        }),
        (Howl.prototype.init =
          ((e = Howl.prototype.init),
          function (t) {
            var n = this
            return (
              (n._orientation = t.orientation || [1, 0, 0]),
              (n._stereo = t.stereo || null),
              (n._pos = t.pos || null),
              (n._pannerAttr = {
                coneInnerAngle: void 0 !== t.coneInnerAngle ? t.coneInnerAngle : 360,
                coneOuterAngle: void 0 !== t.coneOuterAngle ? t.coneOuterAngle : 360,
                coneOuterGain: void 0 !== t.coneOuterGain ? t.coneOuterGain : 0,
                distanceModel: void 0 !== t.distanceModel ? t.distanceModel : "inverse",
                maxDistance: void 0 !== t.maxDistance ? t.maxDistance : 1e4,
                panningModel: void 0 !== t.panningModel ? t.panningModel : "HRTF",
                refDistance: void 0 !== t.refDistance ? t.refDistance : 1,
                rolloffFactor: void 0 !== t.rolloffFactor ? t.rolloffFactor : 1,
              }),
              (n._onstereo = t.onstereo ? [{ fn: t.onstereo }] : []),
              (n._onpos = t.onpos ? [{ fn: t.onpos }] : []),
              (n._onorientation = t.onorientation ? [{ fn: t.onorientation }] : []),
              e.call(this, t)
            )
          })),
        (Howl.prototype.stereo = function (e, n) {
          var i = this
          if (!i._webAudio) return i
          if ("loaded" !== i._state)
            return (
              i._queue.push({
                event: "stereo",
                action: function () {
                  i.stereo(e, n)
                },
              }),
              i
            )
          var r = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo"
          if (void 0 === n) {
            if ("number" != typeof e) return i._stereo
            ;((i._stereo = e), (i._pos = [e, 0, 0]))
          }
          for (var o = i._getSoundIds(n), a = 0; a < o.length; a++) {
            var s = i._soundById(o[a])
            if (s) {
              if ("number" != typeof e) return s._stereo
              ;((s._stereo = e),
                (s._pos = [e, 0, 0]),
                s._node &&
                  ((s._pannerAttr.panningModel = "equalpower"),
                  (s._panner && s._panner.pan) || t(s, r),
                  "spatial" === r
                    ? void 0 !== s._panner.positionX
                      ? (s._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime),
                        s._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime),
                        s._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime))
                      : s._panner.setPosition(e, 0, 0)
                    : s._panner.pan.setValueAtTime(e, Howler.ctx.currentTime)),
                i._emit("stereo", s._id))
            }
          }
          return i
        }),
        (Howl.prototype.pos = function (e, n, i, r) {
          var o = this
          if (!o._webAudio) return o
          if ("loaded" !== o._state)
            return (
              o._queue.push({
                event: "pos",
                action: function () {
                  o.pos(e, n, i, r)
                },
              }),
              o
            )
          if (
            ((n = "number" != typeof n ? 0 : n),
            (i = "number" != typeof i ? -0.5 : i),
            void 0 === r)
          ) {
            if ("number" != typeof e) return o._pos
            o._pos = [e, n, i]
          }
          for (var a = o._getSoundIds(r), s = 0; s < a.length; s++) {
            var u = o._soundById(a[s])
            if (u) {
              if ("number" != typeof e) return u._pos
              ;((u._pos = [e, n, i]),
                u._node &&
                  ((u._panner && !u._panner.pan) || t(u, "spatial"),
                  void 0 !== u._panner.positionX
                    ? (u._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime),
                      u._panner.positionY.setValueAtTime(n, Howler.ctx.currentTime),
                      u._panner.positionZ.setValueAtTime(i, Howler.ctx.currentTime))
                    : u._panner.setPosition(e, n, i)),
                o._emit("pos", u._id))
            }
          }
          return o
        }),
        (Howl.prototype.orientation = function (e, n, i, r) {
          var o = this
          if (!o._webAudio) return o
          if ("loaded" !== o._state)
            return (
              o._queue.push({
                event: "orientation",
                action: function () {
                  o.orientation(e, n, i, r)
                },
              }),
              o
            )
          if (
            ((n = "number" != typeof n ? o._orientation[1] : n),
            (i = "number" != typeof i ? o._orientation[2] : i),
            void 0 === r)
          ) {
            if ("number" != typeof e) return o._orientation
            o._orientation = [e, n, i]
          }
          for (var a = o._getSoundIds(r), s = 0; s < a.length; s++) {
            var u = o._soundById(a[s])
            if (u) {
              if ("number" != typeof e) return u._orientation
              ;((u._orientation = [e, n, i]),
                u._node &&
                  (u._panner || (u._pos || (u._pos = o._pos || [0, 0, -0.5]), t(u, "spatial")),
                  void 0 !== u._panner.orientationX
                    ? (u._panner.orientationX.setValueAtTime(e, Howler.ctx.currentTime),
                      u._panner.orientationY.setValueAtTime(n, Howler.ctx.currentTime),
                      u._panner.orientationZ.setValueAtTime(i, Howler.ctx.currentTime))
                    : u._panner.setOrientation(e, n, i)),
                o._emit("orientation", u._id))
            }
          }
          return o
        }),
        (Howl.prototype.pannerAttr = function () {
          var e,
            n,
            i,
            r = this,
            o = arguments
          if (!r._webAudio) return r
          if (0 === o.length) return r._pannerAttr
          if (1 === o.length) {
            if ("object" != typeof o[0])
              return (i = r._soundById(parseInt(o[0], 10))) ? i._pannerAttr : r._pannerAttr
            ;((e = o[0]),
              void 0 === n &&
                (e.pannerAttr ||
                  (e.pannerAttr = {
                    coneInnerAngle: e.coneInnerAngle,
                    coneOuterAngle: e.coneOuterAngle,
                    coneOuterGain: e.coneOuterGain,
                    distanceModel: e.distanceModel,
                    maxDistance: e.maxDistance,
                    refDistance: e.refDistance,
                    rolloffFactor: e.rolloffFactor,
                    panningModel: e.panningModel,
                  }),
                (r._pannerAttr = {
                  coneInnerAngle:
                    void 0 !== e.pannerAttr.coneInnerAngle
                      ? e.pannerAttr.coneInnerAngle
                      : r._coneInnerAngle,
                  coneOuterAngle:
                    void 0 !== e.pannerAttr.coneOuterAngle
                      ? e.pannerAttr.coneOuterAngle
                      : r._coneOuterAngle,
                  coneOuterGain:
                    void 0 !== e.pannerAttr.coneOuterGain
                      ? e.pannerAttr.coneOuterGain
                      : r._coneOuterGain,
                  distanceModel:
                    void 0 !== e.pannerAttr.distanceModel
                      ? e.pannerAttr.distanceModel
                      : r._distanceModel,
                  maxDistance:
                    void 0 !== e.pannerAttr.maxDistance ? e.pannerAttr.maxDistance : r._maxDistance,
                  refDistance:
                    void 0 !== e.pannerAttr.refDistance ? e.pannerAttr.refDistance : r._refDistance,
                  rolloffFactor:
                    void 0 !== e.pannerAttr.rolloffFactor
                      ? e.pannerAttr.rolloffFactor
                      : r._rolloffFactor,
                  panningModel:
                    void 0 !== e.pannerAttr.panningModel
                      ? e.pannerAttr.panningModel
                      : r._panningModel,
                })))
          } else 2 === o.length && ((e = o[0]), (n = parseInt(o[1], 10)))
          for (var a = r._getSoundIds(n), s = 0; s < a.length; s++)
            if ((i = r._soundById(a[s]))) {
              var u = i._pannerAttr
              u = {
                coneInnerAngle: void 0 !== e.coneInnerAngle ? e.coneInnerAngle : u.coneInnerAngle,
                coneOuterAngle: void 0 !== e.coneOuterAngle ? e.coneOuterAngle : u.coneOuterAngle,
                coneOuterGain: void 0 !== e.coneOuterGain ? e.coneOuterGain : u.coneOuterGain,
                distanceModel: void 0 !== e.distanceModel ? e.distanceModel : u.distanceModel,
                maxDistance: void 0 !== e.maxDistance ? e.maxDistance : u.maxDistance,
                refDistance: void 0 !== e.refDistance ? e.refDistance : u.refDistance,
                rolloffFactor: void 0 !== e.rolloffFactor ? e.rolloffFactor : u.rolloffFactor,
                panningModel: void 0 !== e.panningModel ? e.panningModel : u.panningModel,
              }
              var l = i._panner
              l
                ? ((l.coneInnerAngle = u.coneInnerAngle),
                  (l.coneOuterAngle = u.coneOuterAngle),
                  (l.coneOuterGain = u.coneOuterGain),
                  (l.distanceModel = u.distanceModel),
                  (l.maxDistance = u.maxDistance),
                  (l.refDistance = u.refDistance),
                  (l.rolloffFactor = u.rolloffFactor),
                  (l.panningModel = u.panningModel))
                : (i._pos || (i._pos = r._pos || [0, 0, -0.5]), t(i, "spatial"))
            }
          return r
        }),
        (Sound.prototype.init = (function (e) {
          return function () {
            var t = this,
              n = t._parent
            ;((t._orientation = n._orientation),
              (t._stereo = n._stereo),
              (t._pos = n._pos),
              (t._pannerAttr = n._pannerAttr),
              e.call(this),
              t._stereo
                ? n.stereo(t._stereo)
                : t._pos && n.pos(t._pos[0], t._pos[1], t._pos[2], t._id))
          }
        })(Sound.prototype.init)),
        (Sound.prototype.reset = (function (e) {
          return function () {
            var t = this,
              n = t._parent
            return (
              (t._orientation = n._orientation),
              (t._stereo = n._stereo),
              (t._pos = n._pos),
              (t._pannerAttr = n._pannerAttr),
              t._stereo
                ? n.stereo(t._stereo)
                : t._pos
                  ? n.pos(t._pos[0], t._pos[1], t._pos[2], t._id)
                  : t._panner &&
                    (t._panner.disconnect(0), (t._panner = void 0), n._refreshBuffer(t)),
              e.call(this)
            )
          }
        })(Sound.prototype.reset)))
      var t = function (e, t) {
        ;("spatial" === (t = t || "spatial")
          ? ((e._panner = Howler.ctx.createPanner()),
            (e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle),
            (e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle),
            (e._panner.coneOuterGain = e._pannerAttr.coneOuterGain),
            (e._panner.distanceModel = e._pannerAttr.distanceModel),
            (e._panner.maxDistance = e._pannerAttr.maxDistance),
            (e._panner.refDistance = e._pannerAttr.refDistance),
            (e._panner.rolloffFactor = e._pannerAttr.rolloffFactor),
            (e._panner.panningModel = e._pannerAttr.panningModel),
            void 0 !== e._panner.positionX
              ? (e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime),
                e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime),
                e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime))
              : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]),
            void 0 !== e._panner.orientationX
              ? (e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime),
                e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime),
                e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime))
              : e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2]))
          : ((e._panner = Howler.ctx.createStereoPanner()),
            e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)),
          e._panner.connect(e._node),
          e._paused || e._parent.pause(e._id, !0).play(e._id, !0))
      }
    })())
}
