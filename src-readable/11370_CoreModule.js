/**
 * Webpack Module #11370
 * @exports CoreModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.CoreModule = undefined))
  var i = n(86178) /* 86178__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = n(13011) /* 13011__mod */
  t.CoreModule = new r.ContainerModule(function (e) {
    ;(e(i.TypesCore.gameConfig).toConstantValue({ id: "unset", sid: "unset" }),
      e(i.TypesCore.dispatcher).to(o.EventDispatcher).inSingletonScope(),
      e(i.TypesCore.eventProvider).to(o.GlobalEventProvider))
  })
}
