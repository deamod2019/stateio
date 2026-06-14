/**
 * Webpack Module #10065
 * @exports Capturing
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Capturing = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(52472),
    a = n(36622)
  n(89264)
  t.Capturing = function (e) {
    var t = e.stages,
      n = void 0 === t ? 4 : t,
      s = e.captured,
      u = void 0 === s ? 0.01 : s,
      l = e.title,
      c = e.showGift,
      d = void 0 === c || c
    return (0, r.jsxs)(
      "div",
      i.__assign(
        { className: "capturing" },
        {
          children: [
            l
              ? (0, r.jsx)("div", i.__assign({ className: "capturing__title" }, { children: l }))
              : null,
            (0, r.jsx)(
              "div",
              i.__assign(
                { className: "capturing__progress" },
                {
                  children: (0, r.jsx)(o.SvgCapturingProgress, {
                    width: 482,
                    height: 76,
                    captured: u,
                    stages: n,
                  }),
                },
              ),
            ),
            d
              ? (0, r.jsx)(
                  "div",
                  i.__assign(
                    { className: "capturing__gift-image" },
                    { children: (0, r.jsx)(a.Images.Gift, {}) },
                  ),
                )
              : null,
          ],
        },
      ),
    )
  }
}
