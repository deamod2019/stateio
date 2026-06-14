/**
 * Webpack Module #70051
 * @exports HTMLUIModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.HTMLUIModule = void 0))
  var i = n(86178),
    r = n(86700),
    o = n(20167),
    a = n(76883)
  t.HTMLUIModule = new r.ContainerModule(function (e, t, n, r) {
    ;(e(i.TypesUI.uiRootClass).toConstantValue(a.UIRoot),
      e(i.TypesUI.setupAction).to(o.SetupUIAction),
      e(i.TypesUI.startScreenAction).to(o.StartScreenAction),
      e(i.TypesUI.endScreenAction).to(o.EndScreenAction))
  })
}
