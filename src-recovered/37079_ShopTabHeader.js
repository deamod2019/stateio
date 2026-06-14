/**
 * Webpack Module #37079
 * @exports ShopTabHeader
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ShopTabHeader = void 0))
  var i = n(70655),
    r = n(16584),
    o = i.__importDefault(n(94184)),
    a = n(5777)
  t.ShopTabHeader = function (e) {
    var t = e.className,
      n = void 0 === t ? "" : t,
      s = e.title,
      u = void 0 === s ? "Test" : s,
      l = e.showNotification,
      c = void 0 !== l && l,
      d = e.onClick,
      h = void 0 === d ? function () {} : d
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
