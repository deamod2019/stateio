/**
 * Webpack Module #71554
 * @exports LevelEndSystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LevelEndSystem = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(75111) /* 75111__mod */,
    o = n(52057) /* 52057_Spawner */,
    a = n(85765) /* 85765_FighterGroupsSystem */,
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
            return null === (t = e.get(o.Spawner)) || undefined === t ? undefined : t.stopRoutine()
          }),
            this.engine.removeSystem(this))
        }),
        t
      )
    })(r.ReactionSystem)
  t.LevelEndSystem = s
}
