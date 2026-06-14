/**
 * Webpack Module #10065
 * @exports Capturing
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Capturing = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(52472) /* 52472_SvgCapturingProgress */,
    a = n(36622) /* 36622_SVG */
  n(89264) /* 89264__mod */
  t.Capturing = function (e) {
    var t = e.stages,
      n = undefined === t ? 4 : t,
      s = e.captured,
      u = undefined === s ? 0.01 : s,
      l = e.title,
      c = e.showGift,
      d = undefined === c || c
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
