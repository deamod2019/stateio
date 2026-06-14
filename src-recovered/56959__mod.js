/**
 * Webpack Module #56959
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.iconsMap = void 0))
  var i,
    r,
    o = n(70655),
    a = n(16584),
    s = n(73134),
    u = o.__importStar(n(14565)),
    l = o.__importStar(n(72630)),
    c = o.__importStar(n(49473)),
    d = o.__importStar(n(66823)),
    h = o.__importStar(n(10660)),
    p = o.__importStar(n(83372)),
    f = o.__importStar(n(29671)),
    _ = o.__importStar(n(24998)),
    g = o.__importStar(n(68760)),
    m = o.__importStar(n(27106)),
    v = o.__importStar(n(65203)),
    y = o.__importStar(n(5130)),
    C = o.__importStar(n(97573)),
    b = o.__importStar(n(83864))
  t.iconsMap =
    ((i = new Map([
      ["ads", u],
      ["friends", l],
      ["globe", c],
      ["play", d],
      ["replay", h],
      ["leaderboard", p],
      ["share", _],
      ["x", f],
      ["trophy", g],
      ["bomb", v],
      ["vs", C],
      ["heart", y],
      ["placeholder-avatar", m],
      ["gear", b],
    ])),
    (r = new Map()),
    i.forEach(function (e, t) {
      return r.set(t, function (t) {
        return (0, a.jsx)(s.Graphics, o.__assign({ svg: e }, t))
      })
    }),
    r)
}
