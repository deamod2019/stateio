/**
 * Webpack Module #92287
 * @exports PauseAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.PauseAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86700) /* 86700_MetadataReader */,
    a = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return (
            undefined === e && (e = true),
            i.__awaiter(this, undefined, undefined, function () {
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
