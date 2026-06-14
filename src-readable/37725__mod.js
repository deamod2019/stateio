/**
 * Webpack Module #37725
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.playUIClickSound = t.playSound = t.showReward = t.showAd = t.isRankableUser = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */
  t.isRankableUser = function (e) {
    return undefined !== e.getLbRecord
  }
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
  t.playSound = function (e) {
    return i.__awaiter(undefined, undefined, undefined, function () {
      var t
      return i.__generator(this, function (n) {
        return [
          2,
          null === (t = (0, r.lazyGet)(o.TypesAudio.soundAction)) || undefined === t
            ? undefined
            : t.run(e),
        ]
      })
    })
  }
  t.playUIClickSound = function () {
    ;(0, t.playSound)("click_ui")
  }
}
