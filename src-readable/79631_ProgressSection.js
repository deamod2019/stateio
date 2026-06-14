/**
 * Webpack Module #79631
 * @exports ProgressSection
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ProgressSection = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */
  t.ProgressSection = function (e) {
    var t = e.x,
      n = e.progress,
      o = e.fill,
      a = e.className,
      s = 596,
      u = "transform 0.2s"
    return (0, r.jsxs)(
      "g",
      i.__assign(
        { className: a },
        {
          children: [
            (0, r.jsx)("rect", {
              style: {
                width: s,
                height: 38,
                fill: o,
                transform: "translateX(".concat(s * t, "px) scaleX(").concat(n, ")"),
                transition: u,
              },
            }),
            (0, r.jsx)("rect", {
              style: {
                width: 4,
                height: 38,
                fill: "white",
                transform: "translateX(".concat(s * t + s * n - 4, "px)"),
                transition: u,
              },
            }),
          ],
        },
      ),
    )
  }
}
