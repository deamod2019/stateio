/**
 * Webpack Module #65021
 * @exports AdManagerYandex
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.AdManagerYandex = void 0))
  var i = n(70655),
    r = n(86700),
    o = n(44656),
    a = n(48616),
    s = n(84194),
    u = n(86178),
    l = function (e, t, n) {
      var i
      return null === (i = (0, o.lazyGet)(u.TypesAnalytics.tracker)) || void 0 === i
        ? void 0
        : i.track("admanager_" + e, t, n)
    },
    c = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.init = function (e) {
          this.yasdk = e
        }),
        (t.prototype.showAd = function (e, t, n) {
          return (
            void 0 === t && (t = !1),
            void 0 === n && (n = !0),
            i.__awaiter(this, void 0, void 0, function () {
              var n, r
              return i.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (n = u.AdResponse.NOT_SUPPORTED),
                      this.yasdk
                        ? !t &&
                          a.AdManagerBase.needToThrottleAd(
                            a.AdManagerBase.config.throttling.interstitial,
                          )
                          ? [2, u.AdResponse.THROTTLED]
                          : ((r = this.yasdk),
                            (n = u.AdResponse.UNKNOWN),
                            this.onAdStarted({ placement: e, status: n }),
                            [
                              4,
                              new Promise(function (e) {
                                r.adv.showFullscreenAdv({
                                  callbacks: {
                                    onClose: function (t) {
                                      return e(t ? u.AdResponse.PLAYED : u.AdResponse.CANCELLED)
                                    },
                                    onError: function (t) {
                                      ;(s.log.warn(t), e(u.AdResponse.FAILED))
                                    },
                                    onOffline: function () {
                                      return e(u.AdResponse.FAILED)
                                    },
                                  },
                                })
                              }),
                            ])
                        : [3, 2]
                    )
                  case 1:
                    ;((n = i.sent()),
                      this.onAdEnded({ placement: e, status: n }),
                      n === u.AdResponse.PLAYED &&
                        (l("show_inter", 1, { id: e }),
                        (a.AdManagerBase.config.throttling.interstitial.lastShow = Date.now())),
                      (i.label = 2))
                  case 2:
                    return [2, n]
                }
              })
            })
          )
        }),
        (t.prototype.showRewardAd = function (e, t) {
          return (
            void 0 === t && (t = !0),
            i.__awaiter(this, void 0, void 0, function () {
              var t, n
              return i.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (t = u.AdResponse.NOT_SUPPORTED),
                      this.yasdk
                        ? ((n = this.yasdk),
                          (t = u.AdResponse.UNKNOWN),
                          this.onAdStarted({ placement: e, status: t }),
                          [
                            4,
                            new Promise(function (e) {
                              var t = !1
                              n.adv.showRewardedVideo({
                                callbacks: {
                                  onOpen: function () {
                                    return (t = !1)
                                  },
                                  onClose: function () {
                                    e(t ? u.AdResponse.PLAYED : u.AdResponse.CANCELLED)
                                  },
                                  onError: function (n) {
                                    ;(s.log.warn(n), (t = !1), e(u.AdResponse.FAILED))
                                  },
                                  onRewarded: function () {
                                    return (t = !0)
                                  },
                                  onOffline: function () {
                                    return e(u.AdResponse.FAILED)
                                  },
                                },
                              })
                            }),
                          ])
                        : [3, 2]
                    )
                  case 1:
                    ;((t = i.sent()),
                      this.onAdEnded({ placement: e, status: t }),
                      t === u.AdResponse.PLAYED && l("show_reward", 1, { id: e }),
                      (i.label = 2))
                  case 2:
                    return [2, t]
                }
              })
            })
          )
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(a.AdManagerBase)
  t.AdManagerYandex = c
}
