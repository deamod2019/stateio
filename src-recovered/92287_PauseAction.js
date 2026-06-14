/**
 * Webpack Module #92287
 * @exports PauseAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.PauseAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86700),
    a = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return (
            void 0 === e && (e = !0),
            i.__awaiter(this, void 0, void 0, function () {
              return i.__generator(this, function (t) {
                return (this.dispatch(r.CommonEvents.PAUSE, e), [2])
              })
            })
          )
        }),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.Action)
  t.PauseAction = a
}
