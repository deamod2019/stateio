/**
 * Webpack Module #28300
 * @exports PopulationSystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.PopulationSystem = void 0))
  var i = n(70655),
    r = n(75111),
    o = n(26630),
    a = n(26511),
    s = n(91585),
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
