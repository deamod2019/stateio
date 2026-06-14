/**
 * Webpack Module #71554
 * @exports LevelEndSystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LevelEndSystem = void 0))
  var i = n(70655),
    r = n(75111),
    o = n(52057),
    a = n(85765),
    s = (function (e) {
      function t() {
        var t =
          e.call(this, function (e) {
            return e.has(o.Spawner)
          }) || this
        return (a.FighterGroupsSystem.Clear(), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.update = function () {
          ;(this.entities.forEach(function (e) {
            var t
            return null === (t = e.get(o.Spawner)) || void 0 === t ? void 0 : t.stopRoutine()
          }),
            this.engine.removeSystem(this))
        }),
        t
      )
    })(r.ReactionSystem)
  t.LevelEndSystem = s
}
