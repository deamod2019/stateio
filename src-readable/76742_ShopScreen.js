/**
 * Webpack Module #76742
 * @exports ShopScreen
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ShopScreen = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(83430) /* 83430_InversifyContext */,
    a = n(95781) /* 95781_TypesGame */,
    s = n(7161) /* 7161_BackButton */,
    u = n(32715) /* 32715_CoinsIndicator */,
    l = n(44698) /* 44698_ShopPreview */,
    c = i.__importDefault(n(94184) /* 94184__mod */),
    d = n(83643) /* 83643_ShopMenu */
  n(61750) /* 61750__mod */
  var h = n(30396) /* 30396__mod */
  t.ShopScreen = function () {
    var e = (0, o.useInjection)(a.TypesGame.model)
    return (
      (0, h.useEffect)(function () {
        return function () {
          return e.onShopScreenChanged()
        }
      }),
      (0, r.jsxs)(
        "div",
        i.__assign(
          { className: (0, c.default)("screen", "screen__shop") },
          {
            children: [
              (0, r.jsx)(
                "div",
                i.__assign(
                  { className: (0, c.default)("screen-top", "visible") },
                  {
                    children: (0, r.jsxs)(
                      "div",
                      i.__assign(
                        { className: (0, c.default)("container", "top-bar") },
                        {
                          children: [
                            (0, r.jsx)(s.BackButton, {
                              onClick: function () {
                                e.goToLobby()
                              },
                            }),
                            (0, r.jsx)(u.CoinsIndicator, {
                              className: (0, c.default)(
                                "coins-indicator",
                                "coins-indicator_filled",
                              ),
                              total: e.cookie.coins,
                            }),
                          ],
                        },
                      ),
                    ),
                  },
                ),
              ),
              (0, r.jsxs)(
                "div",
                i.__assign(
                  { className: (0, c.default)("container", "shop-area") },
                  { children: [(0, r.jsx)(l.ShopPreview, {}), (0, r.jsx)(d.ShopMenu, {})] },
                ),
              ),
            ],
          },
        ),
      )
    )
  }
}
