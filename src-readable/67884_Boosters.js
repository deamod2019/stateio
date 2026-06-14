/**
 * Webpack Module #67884
 * @exports Boosters
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Boosters = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(86178) /* 86178__mod */,
    s = n(83430) /* 83430_InversifyContext */,
    u = n(77577) /* 77577__mod */,
    l = n(36596) /* 36596_PlayerType */,
    c = n(37725) /* 37725__mod */,
    d = n(95781) /* 95781_TypesGame */,
    h = n(56721) /* 56721_Booster */,
    p = n(74083) /* 74083_UIConstants */,
    f = i.__importDefault(n(94184) /* 94184__mod */),
    _ = n(30396) /* 30396__mod */,
    g = n(38319) /* 38319__mod */
  n(46193) /* 46193__mod */
  var m = n(47283) /* 47283_GameEvents */,
    v = n(44365) /* 44365_SIOConstants */,
    y = true
  t.Boosters = function (e) {
    var t = e.className,
      n = p.UIConstants.boosters,
      C = (0, s.useInjection)(d.TypesGame.model),
      b = (0, s.useInjection)(o.TypesSocial.model)
    ;(0, s.useEventListener)("YANDEX_SYNC", function () {
      S(function (e) {
        return i.__assign(i.__assign({}, e), { coins: C.cookie.coins })
      })
    })
    var w = { coins: C.cookie.coins, startCoins: C.cookie.coins, boosters: n, adViewed: false },
      x = i.__read(
        (0, _.useState)(function () {
          return w
        }),
        2,
      ),
      T = x[0],
      S = x[1],
      L = (T.startCoins, T.coins),
      E = T.adViewed,
      A = function () {
        var e = I()
        ;(S(function (t) {
          return i.__assign(i.__assign({}, t), { boosters: e })
        }),
          y && (y = false))
      }
    ;((0, _.useEffect)(A, [L, E, y]), (0, s.useEventListener)(m.GameEvents.COINS_UPDATED, A))
    Date.now()
    var I = function () {
        for (
          var e = b.session.ftue && y, t = C.absoluteLevelNum > 1, r = [], o = 0;
          o < n.length;
          o++
        )
          r[o] = i.__assign(i.__assign({}, n[o]), M(n[o]))
        var s = []
        ;(r.forEach(function (e) {
          s.push({ id: e.id, price: e.price })
        }),
          s.sort(function (e, t) {
            return t.price - e.price
          }))
        var u = s[0].id
        return (
          r.forEach(function (n) {
            var r
            ;((n.isFree = false),
              (n.disabled = !C.cookie.isEnoughCoins(n.price)),
              n.id === u && n.disabled && t && ((n.disabled = false), (n.isFree = true)),
              (r = "boosters"),
              v.SIOConstants.REWARD_AD_PLAYED.has(r) &&
                v.SIOConstants.REWARD_AD_PLAYED.get(r) > Date.now() - 6e4 &&
                (n.disabled = true))
            var o = function () {},
              s = function () {}
            switch (n.id) {
              case h.BoosterType.START_UNITS:
                ;((s = function () {
                  C.meta.increaseStartPopulation()
                }),
                  (o = function () {
                    C.meta.increaseStartPopulationFree()
                  }))
                break
              case h.BoosterType.START_PRODUCE:
                ;((s = function () {
                  C.meta.increaseSpawn()
                }),
                  (o = function () {
                    C.meta.increaseSpawnFree()
                  }))
                break
              case h.BoosterType.OFFLINE_EARNINGS:
                ;((s = function () {
                  C.meta.increaseOffline()
                }),
                  (o = function () {
                    C.meta.increaseOfflineFree()
                  }))
            }
            ;((n.onClick = function () {
              return i.__awaiter(undefined, undefined, undefined, function () {
                return i.__generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        S(function (e) {
                          return i.__assign(i.__assign({}, e), { adViewed: false })
                        }),
                        n.isFree && t ? [4, (0, c.showReward)()] : [3, 2]
                      )
                    case 1:
                      return (
                        e.sent() === a.AdResponse.PLAYED &&
                          (v.SIOConstants.REWARD_AD_PLAYED.set("boosters", Date.now()),
                          o(),
                          S(function (e) {
                            return i.__assign(i.__assign({}, e), { adViewed: true })
                          })),
                        [3, 3]
                      )
                    case 2:
                      ;(s(),
                        S(function (e) {
                          return i.__assign(i.__assign({}, e), { coins: C.cookie.coins })
                        }),
                        (e.label = 3))
                    case 3:
                      return [2]
                  }
                })
              })
            }),
              e && ((n.disabled = true), (n.isFree = false)))
          }),
          r
        )
      },
      M = function (e) {
        var t = 11,
          n = i.__read([99, 66, false], 3),
          r = n[0],
          o = n[1],
          a = n[2]
        switch (e.id) {
          case h.BoosterType.START_UNITS:
            ;((o = C.cookie.playerStartPopulation),
              (r = C.meta.getStartPopulationCost()),
              (t = C.meta.getStartPopulation(l.PlayerType.First)))
            break
          case h.BoosterType.START_PRODUCE:
            ;((o = C.cookie.playerSpawnLevel),
              (r = C.meta.getPopulationRateCost()),
              (t = u.math.round(C.meta.getPlayerGenerationRateValue(o), 100)))
            break
          default:
            ;((o = C.cookie.playerOfflineLevel),
              (r = C.meta.getOfflineEarningCost()),
              (t = C.meta.getOfflineEarning()))
        }
        return {
          defaultCount: (t = (0, g.toFixedString)(t)),
          price: r,
          levelNum: o,
          disabled: a,
          isFree: false,
          onClick: function () {
            return i.__awaiter(undefined, undefined, undefined, function () {
              return i.__generator(this, function (e) {
                return [2]
              })
            })
          },
        }
      }
    return (0, r.jsx)(
      "div",
      i.__assign(
        { className: (0, f.default)("boosters", t) },
        {
          children: T.boosters.map(function (e) {
            return (0, r.jsx)(h.Booster, i.__assign({}, e))
          }),
        },
      ),
    )
  }
}
