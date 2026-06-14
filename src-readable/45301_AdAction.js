/**
 * Webpack Module #45301
 * @exports AdAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.AdAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86178) /* 86178__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(68019) /* 68019__mod */,
    u = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var t, n, r
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t = undefined),
                    (n = false),
                    (r = true),
                    "boolean" == typeof e
                      ? (n = e)
                      : undefined !== e && ((t = e.placement), (n = e.reward), (r = e.preloadNext)),
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
            undefined === t && (t = false),
            undefined === n && (n = true),
            i.__awaiter(this, undefined, undefined, function () {
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
                    return [4, this.ads.showAd(e || s.AdManagerBase.config.ids.INTER, false, n)]
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
            undefined === e && (e = s.AdManagerBase.config.ids.REWARD),
            undefined === t && (t = true),
            i.__awaiter(this, undefined, undefined, function () {
              return i.__generator(this, function (n) {
                return [2, this.showAd(e, true, t)]
              })
            })
          )
        }),
        i.__decorate(
          [(0, a.inject)(r.TypesAds.manager), i.__metadata("design:type", Object)],
          t.prototype,
          "ads",
          undefined,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(o.Action)
  t.AdAction = u
}
