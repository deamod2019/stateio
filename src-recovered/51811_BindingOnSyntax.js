/**
 * Webpack Module #51811
 * @exports BindingOnSyntax
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingOnSyntax = void 0))
  var i = n(98370),
    r = (function () {
      function e(e) {
        this._binding = e
      }
      return (
        (e.prototype.onActivation = function (e) {
          return ((this._binding.onActivation = e), new i.BindingWhenSyntax(this._binding))
        }),
        e
      )
    })()
  t.BindingOnSyntax = r
}
