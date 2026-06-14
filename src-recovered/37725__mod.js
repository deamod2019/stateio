/**
 * Webpack Module #37725
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.playUIClickSound = t.playSound = t.showReward = t.showAd = t.isRankableUser = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178)
  t.isRankableUser = function (e) {
    return void 0 !== e.getLbRecord
  }
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
  t.playSound = function (e) {
    return i.__awaiter(void 0, void 0, void 0, function () {
      var t
      return i.__generator(this, function (n) {
        return [
          2,
          null === (t = (0, r.lazyGet)(o.TypesAudio.soundAction)) || void 0 === t
            ? void 0
            : t.run(e),
        ]
      })
    })
  }
  t.playUIClickSound = function () {
    ;(0, t.playSound)("click_ui")
  }
}
