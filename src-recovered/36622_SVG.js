/**
 * Webpack Module #36622
 * @exports SVG, Images
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.win_rays = t.confirm_icon = t.cancel_icon = t.no_ads_icon = t.SVG = t.Images = void 0))
  var i = n(70655),
    r = n(16584),
    o = i.__importStar(n(82110)),
    a = i.__importStar(n(3791)),
    s = i.__importStar(n(61709))
  t.win_rays = s
  var u = i.__importStar(n(83451)),
    l = i.__importStar(n(73956)),
    c = i.__importStar(n(7997)),
    d = i.__importStar(n(1255)),
    h = i.__importStar(n(95579)),
    p = i.__importStar(n(55803)),
    f = i.__importStar(n(20080)),
    _ = i.__importStar(n(10797))
  t.cancel_icon = _
  var g = i.__importStar(n(73230))
  t.confirm_icon = g
  var m = i.__importStar(n(22283)),
    v = i.__importStar(n(47058))
  t.no_ads_icon = v
  var y = i.__importStar(n(36211)),
    C = i.__importStar(n(24368)),
    b = i.__importStar(n(39066)),
    w = i.__importStar(n(8928)),
    x = i.__importStar(n(83354)),
    T = i.__importStar(n(53152)),
    S = i.__importStar(n(18230)),
    L = i.__importStar(n(33001)),
    E = i.__importStar(n(35536)),
    A = i.__importStar(n(55641)),
    I = n(83430),
    M = function (e, t) {
      return (0, r.jsx)(I.Graphics, { svg: e, className: t.className, inline: !1 })
    }
  ;((t.Images = {
    Gift: function () {
      return (0, r.jsx)("img", { src: "./assets/gift-icon.svg" })
    },
    Star: function () {
      return (0, r.jsx)("img", { src: "./assets/star-icon.svg" })
    },
  }),
    (t.SVG = {
      Shop: function (e) {
        return M(T, e)
      },
      NO_ADS: function (e) {
        return M(v, e)
      },
      COINS: function (e) {
        return M(m, e)
      },
      BoosterOfflineEarningsIcon: function (e) {
        return M(c, e)
      },
      BoosterProduceSpeedIcon: function (e) {
        return M(d, e)
      },
      BoosterProduceSpeed: function (e) {
        return M(h, e)
      },
      BoosterStartUnitsIcon: function (e) {
        return M(p, e)
      },
      BoosterStartUnits: function (e) {
        return M(f, e)
      },
      BackButton: function (e) {
        return M(l, e)
      },
      PopupWinCup: function (e) {
        return M(a, e)
      },
      PopupLose: function (e) {
        return M(o, e)
      },
      WinRays: function (e) {
        return M(s, e)
      },
      WinStars: function (e) {
        return M(u, e)
      },
      Video: function (e) {
        return M(S, e)
      },
      OfflineEarnings: function (e) {
        return M(y, e)
      },
      Settings: function (e) {
        return M(C, e)
      },
      Sounds: function (e) {
        return M(b, e)
      },
      Vibrate: function (e) {
        return M(x, e)
      },
      Music: function (e) {
        return M(w, e)
      },
      Cancel: function (e) {
        return M(_, e)
      },
      Confirm: function (e) {
        return M(g, e)
      },
      LeaderBoardPlayIcon: function (e) {
        return M(L, e)
      },
      LeaderBoardCupIcon: function (e) {
        return M(E, e)
      },
      VictoryFraming: function (e) {
        return M(A, e)
      },
    }))
}
