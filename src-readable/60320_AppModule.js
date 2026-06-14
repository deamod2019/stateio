/**
 * Webpack Module #60320
 * @exports AppModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.AppModule = undefined))
  var i = n(86700) /* 86700_MetadataReader */,
    r = n(20383) /* 20383_AppModel */,
    o = n(86178) /* 86178__mod */,
    a = n(99794) /* 99794_PageModel */,
    s = n(98109) /* 98109__mod */
  t.AppModule = new i.ContainerModule(function (e) {
    ;(e(o.TypesApp.pageModel).to(a.PageModel).inSingletonScope(),
      e(o.TypesApp.model).to(r.AppModel).inSingletonScope(),
      e(o.TypesApp.loginAction).to(s.LoginAction))
  })
}
