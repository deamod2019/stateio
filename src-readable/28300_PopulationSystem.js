/**
 * Webpack Module #28300
 * @exports PopulationSystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.PopulationSystem = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(75111) /* 75111__mod */,
    o = n(26630) /* 26630_Population */,
    a = n(26511) /* 26511_Building */,
    s = n(91585) /* 91585_StateShapeView */,
    u = (function (e) {
      function t() {
        var t =
          e.call(this, function (e) {
            return e.hasAll(o.Population, s.StateShapeView) && e.hasTag(a.Building.ACTIVE_TAG)
          }) || this
        return ((t.entityAdded = function (e) {}), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.updateEntity = function (e, t) {
          var n = e.get(o.Population)
          ;(n.tryPopulate(t), e.get(s.StateShapeView).updateWithPopulation(n))
        }),
        t
      )
    })(r.IterativeSystem)
  t.PopulationSystem = u
}
