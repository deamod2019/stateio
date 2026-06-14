/**
 * Webpack Module #70919
 * @exports PlaySoundAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.PlaySoundAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86178) /* 86178__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(31267) /* 31267_AudioModel */,
    u = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          var t
          return i.__awaiter(this, undefined, undefined, function () {
            var n
            return i.__generator(this, function (i) {
              return !this.model.soundsMuted() && (n = this.transformSound(e))
                ? [
                    2,
                    (null === (t = (0, o.lazyGet)("howl_sounds")) || undefined === t
                      ? undefined
                      : t.play(n)) || -1,
                  ]
                : [2, -1]
            })
          })
        }),
        (t.prototype.transformSound = function (e) {
          return e
        }),
        i.__decorate(
          [(0, a.inject)(r.TypesAudio.model), i.__metadata("design:type", s.AudioModel)],
          t.prototype,
          "model",
          undefined,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(o.Action)
  t.PlaySoundAction = u
}
