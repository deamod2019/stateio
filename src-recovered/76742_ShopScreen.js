/**
 * Webpack Module #76742
 * @exports ShopScreen
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ShopScreen = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(83430),
    a = n(95781),
    s = n(7161),
    u = n(32715),
    l = n(44698),
    c = i.__importDefault(n(94184)),
    d = n(83643)
  n(61750)
  var h = n(30396)
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
