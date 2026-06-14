/**
 * Webpack Module #52472
 * @exports SvgCapturingProgress
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.SvgCapturingProgress = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(84965) /* 84965_FilledRects */
  t.SvgCapturingProgress = function (e) {
    var t = e.width,
      n = e.height,
      a = e.captured,
      s = e.stages
    return (0, r.jsxs)(
      "svg",
      i.__assign(
        {
          width: t,
          height: n,
          viewBox: "0 0 ".concat(t, " ").concat(n),
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        {
          children: [
            (0, r.jsx)("rect", {
              width: t,
              height: n,
              rx: n / 2,
              fill: "#FEEB5D",
              className: "background",
            }),
            (0, r.jsx)(o.FilledRects, {
              fill: "#B3B3B3",
              stages: s,
              width: t,
              height: n,
              pad: 10,
              gap: 5,
            }),
            (0, r.jsx)(
              "mask",
              i.__assign(
                {
                  id: "mask-capturing",
                  "mask-type": "alpha",
                  maskUnits: "userSpaceOnUse",
                  x: "0",
                  y: "0",
                  width: t,
                  height: n,
                },
                { children: (0, r.jsx)("rect", { width: t * a, height: n, fill: "#000" }) },
              ),
            ),
            (0, r.jsx)(
              "g",
              i.__assign(
                { mask: "url(#mask-capturing)" },
                {
                  children: (0, r.jsx)(o.FilledRects, {
                    fill: "#77D982",
                    stages: s,
                    width: t,
                    height: n,
                    pad: 10,
                    gap: 5,
                  }),
                },
              ),
            ),
          ],
        },
      ),
    )
  }
}
