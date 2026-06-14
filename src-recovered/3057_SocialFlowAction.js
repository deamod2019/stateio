/**
 * Webpack Module #3057
 * @exports SocialFlowAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.SocialFlowAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(48616),
    s = n(84194),
    u = n(86700),
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return (s.log.debug("#gameflow", this), [4, this.beforeLaunch()])
                case 1:
                  return (t.sent(), [4, this.launch(e)])
                case 2:
                  return (t.sent(), [4, this.afterLaunch()])
                case 3:
                  return (t.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.beforeLaunch = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.showAdIfNeeded()]
                case 1:
                  return (e.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.afterLaunch = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return (this.TRACK_EVENT && this.track(), [2])
            })
          })
        }),
        (t.prototype.showAdIfNeeded = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return this.needToShowAD() ? [4, this.showAd()] : [3, 2]
                case 1:
                  ;(e.sent(), (e.label = 2))
                case 2:
                  return [2]
              }
            })
          })
        }),
        (t.prototype.sendPush = function (e, t) {
          this.sendPushAsync(e, t).then()
        }),
        (t.prototype.sendPushAsync = function (e, t) {
          var n
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, null === (n = (0, r.lazyGet)(e)) || void 0 === n ? void 0 : n.run(t)]
                case 1:
                  return (i.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.showAd = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.adAction.run()]
                case 1:
                  return (e.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.needToShowAD = function () {
          return !0
        }),
        (t.prototype.tryToShowBanner = function () {
          var e, t
          this.gameConfig.useBannerAd &&
            (null === (t = (e = this.adManager).showBanner) || void 0 === t || t.call(e))
        }),
        (t.prototype.track = function () {
          var e
          null === (e = (0, r.lazyGet)(o.TypesAnalytics.tracker)) ||
            void 0 === e ||
            e.track("".concat(this.social.session.ftue ? "ftue_" : "").concat(this.TRACK_EVENT))
        }),
        i.__decorate(
          [(0, u.inject)(o.TypesSocial.model), i.__metadata("design:type", Object)],
          t.prototype,
          "social",
          void 0,
        ),
        i.__decorate(
          [(0, u.inject)(o.TypesAds.adAction), i.__metadata("design:type", a.AdAction)],
          t.prototype,
          "adAction",
          void 0,
        ),
        i.__decorate(
          [(0, r.lazyInject)(o.TypesCore.gameConfig), i.__metadata("design:type", Object)],
          t.prototype,
          "gameConfig",
          void 0,
        ),
        i.__decorate(
          [(0, r.lazyInject)(o.TypesAds.manager), i.__metadata("design:type", Object)],
          t.prototype,
          "adManager",
          void 0,
        ),
        (t = i.__decorate([(0, u.injectable)()], t))
      )
    })(r.Action)
  t.SocialFlowAction = l
}
