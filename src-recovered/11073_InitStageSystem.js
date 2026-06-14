/**
 * Webpack Module #11073
 * @exports InitStageSystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.InitStageSystem = void 0))
  var i = n(70655),
    r = n(75111),
    o = n(36596),
    a = n(44656),
    s = n(86178),
    u = n(47283),
    l = n(91585),
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
                null === (r = a.get(l.StateShapeView)) || void 0 === r ? void 0 : r.initialPromise,
              ))
          }),
            Promise.all(n).then(function () {
              var e
              null === (e = (0, a.lazyGet)(s.TypesCore.dispatcher)) ||
                void 0 === e ||
                e.emit(u.GameEvents.LEVEL_LOADED)
            }),
            this.engine.removeSystem(this))
        }),
        t
      )
    })(r.System)
  t.InitStageSystem = c
}
