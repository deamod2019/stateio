/**
 * Webpack Module #70919
 * @exports PlaySoundAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.PlaySoundAction = void 0))
  var i = n(70655),
    r = n(86178),
    o = n(44656),
    a = n(86700),
    s = n(31267),
    u = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          var t
          return i.__awaiter(this, void 0, void 0, function () {
            var n
            return i.__generator(this, function (i) {
              return !this.model.soundsMuted() && (n = this.transformSound(e))
                ? [
                    2,
                    (null === (t = (0, o.lazyGet)("howl_sounds")) || void 0 === t
                      ? void 0
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
          void 0,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(o.Action)
  t.PlaySoundAction = u
}
