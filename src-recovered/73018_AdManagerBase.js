/**
 * Webpack Module #73018
 * @exports AdManagerBase
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.AdManagerBase = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(84194),
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
          if (r < i) return (a.log.trace("needToThrottleAdd until " + (i - r)), !0)
          if (n) {
            var o = n + e.showNextDelay
            if (r < o) return (a.log.trace("needToThrottleAdd until " + (o - r)), !0)
          }
          return !1
        }),
        (t.prototype.showAd = function (e, t, n) {
          return (
            void 0 === t && (t = !1),
            void 0 === n && (n = !0),
            i.__awaiter(this, void 0, void 0, function () {
              return i.__generator(this, function (e) {
                return [2, o.AdResponse.NOT_SUPPORTED]
              })
            })
          )
        }),
        (t.prototype.showRewardAd = function (e, t) {
          return (
            void 0 === t && (t = !0),
            i.__awaiter(this, void 0, void 0, function () {
              return i.__generator(this, function (e) {
                return [2, o.AdResponse.NOT_SUPPORTED]
              })
            })
          )
        }),
        (t.prototype.preloadNextInter = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return [2]
            })
          })
        }),
        (t.prototype.preloadNextReward = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
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
          interstitialsDisabled: !1,
        }),
        t
      )
    })(r.GlobalEventProvider)
  t.AdManagerBase = s
}
