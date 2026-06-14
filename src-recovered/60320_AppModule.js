/**
 * Webpack Module #60320
 * @exports AppModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.AppModule = void 0))
  var i = n(86700),
    r = n(20383),
    o = n(86178),
    a = n(99794),
    s = n(98109)
  t.AppModule = new i.ContainerModule(function (e) {
    ;(e(o.TypesApp.pageModel).to(a.PageModel).inSingletonScope(),
      e(o.TypesApp.model).to(r.AppModel).inSingletonScope(),
      e(o.TypesApp.loginAction).to(s.LoginAction))
  })
}
