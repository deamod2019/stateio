/**
 * Webpack Module #75663
 * @exports ClaimButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ClaimButton = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(86125),
    a = n(83430),
    s = n(36622),
    u = i.__importDefault(n(94184)),
    l = n(37725)
  t.ClaimButton = function (e) {
    var t = e.onClick,
      n = e.className,
      c = (e.placement, e.reward),
      d = void 0 === c ? 0 : c,
      h = e.text,
      p = void 0 === h ? o.Localize.get("ui-win-claim", "CLAIM") : h,
      f = e.multiplierText,
      _ = void 0 === f ? "X3" : f,
      g = e.showIcom,
      m = void 0 === g || g
    return (0, r.jsxs)(
      a.Button,
      i.__assign(
        {
          className: (0, u.default)("btn-green", n, { "btn-multiline": d }),
          onClick: function () {
            t && ((0, l.playUIClickSound)(), t())
          },
        },
        {
          children: [
            m ? (0, r.jsx)(s.SVG.Video, {}) : null,
            d
              ? (0, r.jsxs)(
                  "span",
                  i.__assign(
                    { className: "column" },
                    {
                      children: [
                        (0, r.jsxs)(
                          "span",
                          i.__assign(
                            { className: (0, u.default)("btn-content-title") },
                            { children: [p, " ", _] },
                          ),
                        ),
                        (0, r.jsxs)(
                          "span",
                          i.__assign(
                            { className: (0, u.default)("row", "row_centred") },
                            {
                              children: [
                                (0, r.jsx)(
                                  "span",
                                  i.__assign(
                                    { className: (0, u.default)("btn-content-important") },
                                    { children: d },
                                  ),
                                ),
                                (0, r.jsx)(s.SVG.COINS, {
                                  className: (0, u.default)("icon-coins"),
                                }),
                              ],
                            },
                          ),
                        ),
                      ],
                    },
                  ),
                )
              : (0, r.jsx)("span", i.__assign({ className: "btn-content-title" }, { children: p })),
          ],
        },
      ),
    )
  }
}
