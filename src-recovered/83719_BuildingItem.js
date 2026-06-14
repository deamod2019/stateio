/**
 * Webpack Module #83719
 * @exports BuildingItem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.BuildingItem = void 0))
  var i = n(70655),
    r = n(16584)
  n(70535)
  var o = n(62415)
  t.BuildingItem = function (e) {
    var t = e.textureUrl,
      n = void 0 === t ? "" : t,
      a = e.playerColor,
      s = void 0 === a ? void 0 : a,
      u = e.className,
      l = void 0 === u ? "" : u
    return (0, r.jsx)(
      "div",
      i.__assign(
        { className: "shop-item-building" },
        {
          children: (0, r.jsx)(o.TexturedShopItem, { textureUrl: n, className: l, playerColor: s }),
        },
      ),
    )
  }
}
