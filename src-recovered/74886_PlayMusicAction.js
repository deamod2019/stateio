/**
 * Webpack Module #74886
 * @exports PlayMusicAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.PlayMusicAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86700),
    a = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (n = t),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t, o, a, s, u
            return i.__generator(this, function (i) {
              return (
                (t = e.active),
                (o = e.sprite),
                (a = e.howlInstance),
                (s = a || (0, r.lazyGet)("howl_music"))
                  ? ((u = !isNaN(n.activeMusicState.instance)),
                    t
                      ? u
                        ? n.activeMusicState.playing ||
                          ((n.activeMusicState.playing = !0),
                          this.fadeTo(s, 1, n.activeMusicState.instance))
                        : ((n.activeMusicState.instance = s.play(o || "track") || NaN),
                          (n.activeMusicState.playing = !0))
                      : n.activeMusicState.playing &&
                        ((n.activeMusicState.playing = !1),
                        u && this.fadeTo(s, 0, n.activeMusicState.instance)),
                    [2])
                  : [2]
              )
            })
          })
        }),
        (t.prototype.fadeTo = function (e, t, n, i) {
          void 0 === i && (i = 500)
          var r = e.volume()
          ;((i *= Math.abs(Math.min(r, t) - Math.max(r, t))), e.fade(r, t, i, n))
        }),
        (t.activeMusicState = { playing: !1 }),
        (t = n = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.Action)
  t.PlayMusicAction = a
}
