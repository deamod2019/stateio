/**
 * Webpack Module #30851
 * @exports FighterItem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.FighterItem = void 0))
  var i = n(70655),
    r = n(16584)
  n(10471)
  var o = n(30396),
    a = n(62415)
  t.FighterItem = function (e) {
    var t = e.textureUrl,
      n = void 0 === t ? "" : t,
      s = e.playerColor,
      u = void 0 === s ? void 0 : s,
      l = e.className,
      c = void 0 === l ? "" : l,
      d = (0, o.useRef)(null)
    return (0, r.jsxs)(
      "div",
      i.__assign(
        { className: "shop-item-fighter" },
        {
          children: [
            (0, r.jsx)(
              "div",
              i.__assign(
                { ref: d, className: "shop-item-fighter__cell" },
                {
                  children: (0, r.jsx)(a.TexturedShopItem, {
                    className: c,
                    textureUrl: n,
                    playerColor: u,
                  }),
                },
              ),
            ),
            (0, r.jsxs)(
              "div",
              i.__assign(
                { className: "shop-item-fighter__cell" },
                {
                  children: [
                    (0, r.jsx)(
                      "div",
                      i.__assign(
                        { className: "shop-item-fighter__cell" },
                        {
                          children: (0, r.jsx)(a.TexturedShopItem, {
                            className: c,
                            textureUrl: n,
                            playerColor: u,
                          }),
                        },
                      ),
                    ),
                    (0, r.jsx)(
                      "div",
                      i.__assign(
                        { className: "shop-item-fighter__cell" },
                        {
                          children: (0, r.jsx)(a.TexturedShopItem, {
                            className: c,
                            textureUrl: n,
                            playerColor: u,
                          }),
                        },
                      ),
                    ),
                  ],
                },
              ),
            ),
          ],
        },
      ),
    )
  }
}
