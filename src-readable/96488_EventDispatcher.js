/**
 * Webpack Module #96488
 * @exports EventDispatcher
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.EventDispatcher = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (i.__extends(t, e), (t = i.__decorate([(0, r.injectable)()], t)))
    })(n(26729) /* 26729__mod */.EventEmitter)
  t.EventDispatcher = o
}
