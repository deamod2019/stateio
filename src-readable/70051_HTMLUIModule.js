/**
 * Webpack Module #70051
 * @exports HTMLUIModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.HTMLUIModule = undefined))
  var i = n(86178) /* 86178__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = n(20167) /* 20167__mod */,
    a = n(76883) /* 76883_UIRoot */
  t.HTMLUIModule = new r.ContainerModule(function (e, t, n, r) {
    ;(e(i.TypesUI.uiRootClass).toConstantValue(a.UIRoot),
      e(i.TypesUI.setupAction).to(o.SetupUIAction),
      e(i.TypesUI.startScreenAction).to(o.StartScreenAction),
      e(i.TypesUI.endScreenAction).to(o.EndScreenAction))
  })
}
