/**
 * Webpack Module #49071
 * @exports PopupWinIndicator
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.PopupWinIndicator = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(46766) /* 46766_CoinsField */,
    a = n(36622) /* 36622_SVG */,
    s = i.__importDefault(n(94184) /* 94184__mod */)
  n(13283) /* 13283__mod */
  var u = n(74083) /* 74083_UIConstants */
  t.PopupWinIndicator = function (e) {
    var t = e.className,
      n = e.total,
      l = undefined === n ? 600 : n
    return (0, r.jsx)(
      "div",
      i.__assign(
        { className: "absolute_box" },
        {
          children: (0, r.jsxs)(
            "div",
            i.__assign(
              { className: (0, s.default)(t) },
              {
                children: [
                  (0, r.jsx)(o.CoinsField, {
                    className: (0, s.default)("coins-indicator__total", "coins-indicator__plus"),
                    total: l,
                    tickupDuration: l > 0 ? u.UIConstants.popup.updateCoinsTime : 0,
                  }),
                  (0, r.jsx)(
                    "div",
                    i.__assign(
                      { className: (0, s.default)("coins-indicator__icon") },
                      { children: (0, r.jsx)(a.SVG.COINS, {}) },
                    ),
                  ),
                ],
              },
            ),
          ),
        },
      ),
    )
  }
}
