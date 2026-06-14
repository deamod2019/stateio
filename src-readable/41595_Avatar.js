/**
 * Webpack Module #41595
 * @exports Avatar
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Avatar = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = i.__importDefault(n(94184) /* 94184__mod */),
    a = n(86939) /* 86939__mod */,
    s = n(8407) /* 8407_Button */,
    u = n(55960) /* 55960_Score */,
    l = function (e) {
      var t = e.content,
        n = e.icon,
        a = e.className,
        u = e.visible,
        l = e.onClick,
        c = (0, o.default)("avatar-play-with-btn", a, { "avatar-play-with-btn-visible": u })
      return (0, r.jsx)(
        "div",
        i.__assign(
          { className: c },
          {
            children: (0, r.jsx)(
              s.Button,
              i.__assign(
                { icon: n, type: "primary", shape: "oval", bordered: true, onClick: l },
                { children: t },
              ),
            ),
          },
        ),
      )
    }
  t.Avatar = function (e) {
    var t = e.className,
      n = e.imgPath,
      s = e.score,
      c = e.scoreIconType,
      d = e.imgAlt,
      h = undefined === d ? "Avatar" : d,
      p = e.playWithBtn,
      f = (0, o.default)("avatar", { "avatar-play-with": p }, t)
    return (0, r.jsxs)(
      "span",
      i.__assign(
        { className: f },
        {
          children: [
            (0, r.jsx)(
              "span",
              i.__assign(
                { className: "avatar-inner" },
                {
                  children: n
                    ? (0, r.jsx)("img", { src: n, alt: h })
                    : (0, r.jsx)(a.Icon, { type: "placeholder-avatar", className: "avatar-bg" }),
                },
              ),
            ),
            p && (0, r.jsx)(l, i.__assign({}, p)),
            (s || 0 === s) &&
              (0, r.jsx)(
                u.Score,
                i.__assign({ className: "avatar-score", icon: c }, { children: s }),
              ),
          ],
        },
      ),
    )
  }
}
