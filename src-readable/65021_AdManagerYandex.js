/**
 * Webpack Module #65021
 * @exports AdManagerYandex
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.AdManagerYandex = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = n(44656) /* 44656__mod */,
    a = n(48616) /* 48616__mod */,
    s = n(84194) /* 84194__mod */,
    u = n(86178) /* 86178__mod */,
    l = function (e, t, n) {
      var i
      return null === (i = (0, o.lazyGet)(u.TypesAnalytics.tracker)) || undefined === i
        ? undefined
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
            undefined === t && (t = false),
            undefined === n && (n = true),
            i.__awaiter(this, undefined, undefined, function () {
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
            undefined === t && (t = true),
            i.__awaiter(this, undefined, undefined, function () {
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
                              var t = false
                              n.adv.showRewardedVideo({
                                callbacks: {
                                  onOpen: function () {
                                    return (t = false)
                                  },
                                  onClose: function () {
                                    e(t ? u.AdResponse.PLAYED : u.AdResponse.CANCELLED)
                                  },
                                  onError: function (n) {
                                    ;(s.log.warn(n), (t = false), e(u.AdResponse.FAILED))
                                  },
                                  onRewarded: function () {
                                    return (t = true)
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
