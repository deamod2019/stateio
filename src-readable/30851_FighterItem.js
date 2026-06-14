/**
 * Webpack Module #30851
 * @exports FighterItem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.FighterItem = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */
  n(10471) /* 10471__mod */
  var o = n(30396) /* 30396__mod */,
    a = n(62415) /* 62415_TexturedShopItem */
  t.FighterItem = function (e) {
    var t = e.textureUrl,
      n = undefined === t ? "" : t,
      s = e.playerColor,
      u = undefined === s ? undefined : s,
      l = e.className,
      c = undefined === l ? "" : l,
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
