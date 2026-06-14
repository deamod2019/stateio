/**
 * Webpack Module #71290
 * @exports AvatarPlayInGroup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.AvatarPlayInGroup = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = i.__importDefault(n(94184) /* 94184__mod */),
    a = n(41595) /* 41595_Avatar */,
    s = n(55960) /* 55960_Score */
  ;((t.AvatarPlayInGroup = function (e) {
    var t = e.className,
      n = e.score,
      a = e.children,
      u = (0, o.default)("avatar-play-in-group", t)
    return (0, r.jsxs)(
      "span",
      i.__assign(
        { className: u },
        {
          children: [
            (0, r.jsx)(
              "ul",
              i.__assign({ className: "avatar-play-in-group-inner" }, { children: a }),
            ),
            n && (0, r.jsx)(s.Score, i.__assign({ className: "avatar-score" }, { children: n })),
          ],
        },
      ),
    )
  }),
    (t.AvatarPlayInGroup.Avatar = function (e) {
      var t = e.className,
        n = i.__rest(e, ["className"]),
        s = (0, o.default)("avatar-play-in-group-item", t)
      return (0, r.jsx)(
        "li",
        i.__assign({ className: s }, { children: (0, r.jsx)(a.Avatar, i.__assign({}, n)) }),
      )
    }))
}
