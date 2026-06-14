/**
 * Webpack Module #83366
 * @exports BindingInSyntax
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingInSyntax = void 0))
  var i = n(28421),
    r = n(71325),
    o = (function () {
      function e(e) {
        this._binding = e
      }
      return (
        (e.prototype.inRequestScope = function () {
          return (
            (this._binding.scope = i.BindingScopeEnum.Request),
            new r.BindingWhenOnSyntax(this._binding)
          )
        }),
        (e.prototype.inSingletonScope = function () {
          return (
            (this._binding.scope = i.BindingScopeEnum.Singleton),
            new r.BindingWhenOnSyntax(this._binding)
          )
        }),
        (e.prototype.inTransientScope = function () {
          return (
            (this._binding.scope = i.BindingScopeEnum.Transient),
            new r.BindingWhenOnSyntax(this._binding)
          )
        }),
        e
      )
    })()
  t.BindingInSyntax = o
}
