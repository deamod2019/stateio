/**
 * Webpack Module #68252
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.showReward = t.showAd = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178)
  t.showAd = function (e) {
    return i.__awaiter(void 0, void 0, void 0, function () {
      return i.__generator(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, r.di.get(o.TypesAds.adAction).showAd(e)]
          case 1:
            return [2, t.sent()]
        }
      })
    })
  }
  t.showReward = function (e) {
    return i.__awaiter(void 0, void 0, void 0, function () {
      return i.__generator(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, r.di.get(o.TypesAds.adAction).showAd(e, !0)]
          case 1:
            return [2, t.sent()]
        }
      })
    })
  }
}
