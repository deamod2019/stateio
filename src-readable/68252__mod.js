/**
 * Webpack Module #68252
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.showReward = t.showAd = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */
  t.showAd = function (e) {
    return i.__awaiter(undefined, undefined, undefined, function () {
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
    return i.__awaiter(undefined, undefined, undefined, function () {
      return i.__generator(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, r.di.get(o.TypesAds.adAction).showAd(e, true)]
          case 1:
            return [2, t.sent()]
        }
      })
    })
  }
}
