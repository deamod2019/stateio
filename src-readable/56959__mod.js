/**
 * Webpack Module #56959
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.iconsMap = undefined))
  var i,
    r,
    o = n(70655) /* 70655__mod */,
    a = n(16584) /* 16584__mod */,
    s = n(73134) /* 73134_Graphics */,
    u = o.__importStar(n(14565) /* 14565__mod */),
    l = o.__importStar(n(72630) /* 72630__mod */),
    c = o.__importStar(n(49473) /* 49473__mod */),
    d = o.__importStar(n(66823) /* 66823__mod */),
    h = o.__importStar(n(10660) /* 10660__mod */),
    p = o.__importStar(n(83372) /* 83372__mod */),
    f = o.__importStar(n(29671) /* 29671__mod */),
    _ = o.__importStar(n(24998) /* 24998__mod */),
    g = o.__importStar(n(68760) /* 68760__mod */),
    m = o.__importStar(n(27106) /* 27106__mod */),
    v = o.__importStar(n(65203) /* 65203__mod */),
    y = o.__importStar(n(5130) /* 5130__mod */),
    C = o.__importStar(n(97573) /* 97573__mod */),
    b = o.__importStar(n(83864) /* 83864__mod */)
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
