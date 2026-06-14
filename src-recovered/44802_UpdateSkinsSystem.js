/**
 * Webpack Module #44802
 * @exports UpdateSkinsSystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.UpdateSkinsSystem = void 0))
  var i = n(70655),
    r = n(75111),
    o = n(53351),
    a = n(91585),
    s = (function (e) {
      function t() {
        return (
          e.call(this, function (e) {
            return e.hasAny(o.CapitalView, a.StateShapeView)
          }) || this
        )
      }
      return (
        i.__extends(t, e),
        (t.prototype.updateEntity = function (e, t) {
          e.updateAllSkins()
        }),
        (t.prototype.update = function (t) {
          ;(void 0 === t && (t = 0),
            e.prototype.update.call(this, t),
            this.engine.removeSystem(this))
        }),
        t
      )
    })(r.IterativeSystem)
  t.UpdateSkinsSystem = s
}
