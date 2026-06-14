/**
 * Webpack Module #37079
 * @exports ShopTabHeader
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ShopTabHeader = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = i.__importDefault(n(94184) /* 94184__mod */),
    a = n(5777) /* 5777_ExclamationMarkNotificator */
  t.ShopTabHeader = function (e) {
    var t = e.className,
      n = undefined === t ? "" : t,
      s = e.title,
      u = undefined === s ? "Test" : s,
      l = e.showNotification,
      c = undefined !== l && l,
      d = e.onClick,
      h = undefined === d ? function () {} : d
    return (0, r.jsxs)(
      "div",
      i.__assign(
        { onClick: h, className: (0, o.default)("shop-menu__tab-header", n) },
        {
          children: [
            (0, r.jsx)("span", { children: u }),
            c
              ? (0, r.jsx)("p", {
                  children: (0, r.jsx)(a.ExclamationMarkNotificator, {
                    className: (0, o.default)(
                      "exclamation-mark-notificator_top-right",
                      "exclamation-mark-notificator_animated",
                    ),
                  }),
                })
              : null,
          ],
        },
      ),
    )
  }
}
