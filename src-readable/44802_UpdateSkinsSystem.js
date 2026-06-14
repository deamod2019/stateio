/**
 * Webpack Module #44802
 * @exports UpdateSkinsSystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.UpdateSkinsSystem = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(75111) /* 75111__mod */,
    o = n(53351) /* 53351_CapitalView */,
    a = n(91585) /* 91585_StateShapeView */,
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
          ;(undefined === t && (t = 0),
            e.prototype.update.call(this, t),
            this.engine.removeSystem(this))
        }),
        t
      )
    })(r.IterativeSystem)
  t.UpdateSkinsSystem = s
}
