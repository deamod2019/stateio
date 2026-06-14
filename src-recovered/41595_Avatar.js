/**
 * Webpack Module #41595
 * @exports Avatar
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Avatar = void 0))
  var i = n(70655),
    r = n(16584),
    o = i.__importDefault(n(94184)),
    a = n(86939),
    s = n(8407),
    u = n(55960),
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
                { icon: n, type: "primary", shape: "oval", bordered: !0, onClick: l },
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
      h = void 0 === d ? "Avatar" : d,
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
