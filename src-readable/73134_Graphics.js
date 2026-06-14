/**
 * Webpack Module #73134
 * @exports Graphics
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Graphics = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = i.__importDefault(n(94184) /* 94184__mod */)
  t.Graphics = function (e) {
    return e.inline || undefined === e.inline
      ? (0, r.jsx)("span", {
          className: (0, o.default)(e.className, "icon"),
          dangerouslySetInnerHTML: { __html: e.svg.default },
        })
      : (0, r.jsx)(
          "span",
          i.__assign(
            { className: (0, o.default)(e.className, "icon") },
            {
              children: (0, r.jsx)("svg", {
                dangerouslySetInnerHTML: {
                  __html: '<use xlink:href="#'.concat(e.svg.default.id, '" />'),
                },
              }),
            },
          ),
        )
  }
}
