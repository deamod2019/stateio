/**
 * Webpack Module #74886
 * @exports PlayMusicAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.PlayMusicAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86700) /* 86700_MetadataReader */,
    a = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (n = t),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
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
                          ((n.activeMusicState.playing = true),
                          this.fadeTo(s, 1, n.activeMusicState.instance))
                        : ((n.activeMusicState.instance = s.play(o || "track") || NaN),
                          (n.activeMusicState.playing = true))
                      : n.activeMusicState.playing &&
                        ((n.activeMusicState.playing = false),
                        u && this.fadeTo(s, 0, n.activeMusicState.instance)),
                    [2])
                  : [2]
              )
            })
          })
        }),
        (t.prototype.fadeTo = function (e, t, n, i) {
          undefined === i && (i = 500)
          var r = e.volume()
          ;((i *= Math.abs(Math.min(r, t) - Math.max(r, t))), e.fade(r, t, i, n))
        }),
        (t.activeMusicState = { playing: false }),
        (t = n = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.Action)
  t.PlayMusicAction = a
}
