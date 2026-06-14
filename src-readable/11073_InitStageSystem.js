/**
 * Webpack Module #11073
 * @exports InitStageSystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.InitStageSystem = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(75111) /* 75111__mod */,
    o = n(36596) /* 36596_PlayerType */,
    a = n(44656) /* 44656__mod */,
    s = n(86178) /* 86178__mod */,
    u = n(47283) /* 47283_GameEvents */,
    l = n(91585) /* 91585_StateShapeView */,
    c = (function (e) {
      function t(t, n) {
        var i = e.call(this) || this
        return ((i.currentContinent = t), (i.stageLevel = n), i)
      }
      return (
        i.__extends(t, e),
        (t.prototype.onAddedToEngine = function () {
          var t = this
          e.prototype.onAddedToEngine.call(this)
          var n = []
          ;(this.currentContinent.parsed.forEach(function (e, i) {
            var r,
              a = t.currentContinent.getOrCreateBuildingEntity(i, e)
            t.engine.addEntity(a)
            var s = t.stageLevel - e.stage
            ;(0 === s
              ? a.setStartOwner(e.startOwner)
              : s > 0
                ? a.setStartOwner(o.PlayerType.First)
                : a.setStartOwner(o.PlayerType.Neutral),
              a.setInactive(0 !== s),
              n.push(
                null === (r = a.get(l.StateShapeView)) || undefined === r ? undefined : r.initialPromise,
              ))
          }),
            Promise.all(n).then(function () {
              var e
              null === (e = (0, a.lazyGet)(s.TypesCore.dispatcher)) ||
                undefined === e ||
                e.emit(u.GameEvents.LEVEL_LOADED)
            }),
            this.engine.removeSystem(this))
        }),
        t
      )
    })(r.System)
  t.InitStageSystem = c
}
