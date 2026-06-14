/**
 * Webpack Module #44367
 * @exports GameFlowModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.GameFlowModule = void 0))
  var i = n(86178),
    r = n(86700),
    o = n(91881)
  t.GameFlowModule = new r.ContainerModule(function (e) {
    ;(e(i.TypesFlow.boot).to(o.BootAction),
      e(i.TypesFlow.LevelStart).to(o.LevelStartAction),
      e(i.TypesFlow.LevelEnd).to(o.LevelEndAction),
      e(i.TypesFlow.LevelNext).to(o.LevelNextAction),
      e(i.TypesFlow.LevelRestart).to(o.LevelRestartAction),
      e(i.TypesFlow.PlayWith).to(o.PlayWithOpponentAction))
  })
}
