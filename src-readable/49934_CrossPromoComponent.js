/**
 * Webpack Module #49934
 * @exports CrossPromoComponent
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.CrossPromoComponent = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(44656) /* 44656__mod */,
    a = i.__importDefault(n(94184) /* 94184__mod */)
  n(36163) /* 36163__mod */
  var s = o.IS_ODR_BUILD ? o.ODR_BUILD_ORIGIN : o.GAME_SCRIPT_ORIGIN
  t.CrossPromoComponent = function (e) {
    var t = e.title,
      n = e.subtitle,
      o = e.icon,
      u = e.className,
      l = e.invisible,
      c = e.onClick
    return (0, r.jsxs)(
      "div",
      i.__assign(
        { className: (0, a.default)("crosspromo", u, { invisible: l }), onClick: c },
        {
          children: [
            (0, r.jsx)("img", {
              className: "crosspromo__icon",
              src: "".concat(s, "crosspromo/").concat(o),
            }),
            (0, r.jsxs)(
              "div",
              i.__assign(
                { className: "crosspromo__description" },
                {
                  children: [
                    (0, r.jsx)("div", i.__assign({ className: "title" }, { children: t })),
                    (0, r.jsx)("div", i.__assign({ className: "subtitle" }, { children: n })),
                  ],
                },
              ),
            ),
          ],
        },
      ),
    )
  }
}
