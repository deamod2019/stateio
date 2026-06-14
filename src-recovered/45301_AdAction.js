/**
 * Webpack Module #45301
 * @exports AdAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.AdAction = void 0))
  var i = n(70655),
    r = n(86178),
    o = n(44656),
    a = n(86700),
    s = n(68019),
    u = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t, n, r
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t = void 0),
                    (n = !1),
                    (r = !0),
                    "boolean" == typeof e
                      ? (n = e)
                      : void 0 !== e && ((t = e.placement), (n = e.reward), (r = e.preloadNext)),
                    [4, this.showAd(t, n, r)]
                  )
                case 1:
                  return (i.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.showAd = function (e, t, n) {
          return (
            void 0 === t && (t = !1),
            void 0 === n && (n = !0),
            i.__awaiter(this, void 0, void 0, function () {
              var o
              return i.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (o = r.AdResponse.UNKNOWN),
                      t
                        ? [4, this.ads.showRewardAd(e || s.AdManagerBase.config.ids.REWARD, n)]
                        : [3, 2]
                    )
                  case 1:
                    return ((o = i.sent()), [3, 4])
                  case 2:
                    return [4, this.ads.showAd(e || s.AdManagerBase.config.ids.INTER, !1, n)]
                  case 3:
                    ;((o = i.sent()), (i.label = 4))
                  case 4:
                    return [2, o]
                }
              })
            })
          )
        }),
        (t.prototype.showRewardAd = function (e, t) {
          return (
            void 0 === e && (e = s.AdManagerBase.config.ids.REWARD),
            void 0 === t && (t = !0),
            i.__awaiter(this, void 0, void 0, function () {
              return i.__generator(this, function (n) {
                return [2, this.showAd(e, !0, t)]
              })
            })
          )
        }),
        i.__decorate(
          [(0, a.inject)(r.TypesAds.manager), i.__metadata("design:type", Object)],
          t.prototype,
          "ads",
          void 0,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(o.Action)
  t.AdAction = u
}
