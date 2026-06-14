/**
 * Webpack Module #44966
 * @exports ProgressIndicator
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ProgressIndicator = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */
  n(34365) /* 34365__mod */
  var o = n(79631) /* 79631_ProgressSection */
  t.ProgressIndicator = function (e) {
    var t = e.itemsToDiplay
    return (0, r.jsxs)(
      "svg",
      i.__assign(
        {
          className: "progress-indicator",
          width: "596",
          height: "38",
          viewBox: "0 0 596 38",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        {
          children: [
            (0, r.jsx)("rect", {
              className: "progress-indicator__background",
              x: "2",
              y: "2",
              width: "592",
              height: "34",
              rx: "17",
              style: { fill: "#C4C4C4", stroke: "white", strokeWidth: "4px" },
            }),
            (0, r.jsx)(
              "mask",
              i.__assign(
                { id: "mask0", "mask-type": "alpha", width: "592", height: "34" },
                {
                  children: (0, r.jsx)("rect", {
                    width: "588",
                    x: "4",
                    y: "4",
                    height: "30",
                    rx: "13",
                    fill: "#000",
                  }),
                },
              ),
            ),
            (0, r.jsx)(
              "g",
              i.__assign(
                { mask: "url(#mask0)" },
                {
                  children: t.map(function (e) {
                    var t = i.__read(e, 3),
                      n = t[0],
                      a = t[1],
                      s = t[2]
                    return (0, r.jsx)(o.ProgressSection, {
                      className: "progress-indicator__section",
                      x: n,
                      progress: a,
                      fill: s,
                    })
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
