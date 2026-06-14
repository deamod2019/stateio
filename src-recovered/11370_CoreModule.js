/**
 * Webpack Module #11370
 * @exports CoreModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.CoreModule = void 0))
  var i = n(86178),
    r = n(86700),
    o = n(13011)
  t.CoreModule = new r.ContainerModule(function (e) {
    ;(e(i.TypesCore.gameConfig).toConstantValue({ id: "unset", sid: "unset" }),
      e(i.TypesCore.dispatcher).to(o.EventDispatcher).inSingletonScope(),
      e(i.TypesCore.eventProvider).to(o.GlobalEventProvider))
  })
}
