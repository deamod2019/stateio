/**
 * Webpack Module #73018
 * @exports AdManagerBase
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.AdManagerBase = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(84194) /* 84194__mod */,
    s = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.needToThrottleAd = function (e) {
          var t = e.systemStart,
            n = e.lastShow,
            i = t + e.showFirstDelay,
            r = Date.now()
          if (r < i) return (a.log.trace("needToThrottleAdd until " + (i - r)), true)
          if (n) {
            var o = n + e.showNextDelay
            if (r < o) return (a.log.trace("needToThrottleAdd until " + (o - r)), true)
          }
          return false
        }),
        (t.prototype.showAd = function (e, t, n) {
          return (
            undefined === t && (t = false),
            undefined === n && (n = true),
            i.__awaiter(this, undefined, undefined, function () {
              return i.__generator(this, function (e) {
                return [2, o.AdResponse.NOT_SUPPORTED]
              })
            })
          )
        }),
        (t.prototype.showRewardAd = function (e, t) {
          return (
            undefined === t && (t = true),
            i.__awaiter(this, undefined, undefined, function () {
              return i.__generator(this, function (e) {
                return [2, o.AdResponse.NOT_SUPPORTED]
              })
            })
          )
        }),
        (t.prototype.preloadNextInter = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return [2]
            })
          })
        }),
        (t.prototype.preloadNextReward = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return [2]
            })
          })
        }),
        (t.prototype.onAdStarted = function (e) {
          this.dispatch(o.AdEvents.STARTED, e)
        }),
        (t.prototype.onAdEnded = function (e) {
          this.dispatch(o.AdEvents.ENDED, e)
        }),
        (t.config = {
          ids: { INTER: "", BANNER: "", REWARD: "" },
          throttling: {
            interstitial: {
              systemStart: Date.now(),
              showFirstDelay: 2e4,
              showNextDelay: 6e4,
              lastShow: 0,
            },
          },
          interstitialsDisabled: false,
        }),
        t
      )
    })(r.GlobalEventProvider)
  t.AdManagerBase = s
}
