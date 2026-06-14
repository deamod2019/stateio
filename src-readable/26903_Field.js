/**
 * Webpack Module #26903
 * @exports Field
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Field = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.init = function (e) {
          return ((this._fieldId = e.data.id), this)
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(75111) /* 75111__mod */.Entity)
  t.Field = o
}
