/**
 * Webpack Module #73134
 * @exports Graphics
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Graphics = void 0))
  var i = n(70655),
    r = n(16584),
    o = i.__importDefault(n(94184))
  t.Graphics = function (e) {
    return e.inline || void 0 === e.inline
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
