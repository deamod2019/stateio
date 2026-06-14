/**
 * Webpack Module #10556
 * @exports AdsModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.AdsModule = undefined))
  var i = n(86700) /* 86700_MetadataReader */,
    r = n(86178) /* 86178__mod */,
    o = n(73018) /* 73018_AdManagerBase */,
    a = n(64122) /* 64122_InitAdManagerAction */,
    s = n(45301) /* 45301_AdAction */
  t.AdsModule = new i.ContainerModule(function (e) {
    ;(e(r.TypesAds.adAction).to(s.AdAction),
      e(r.TypesAds.manager).to(o.AdManagerBase).inSingletonScope(),
      e(r.TypesAds.initAction).to(a.InitAdManagerAction))
  })
}
