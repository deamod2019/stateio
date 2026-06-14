/**
 * Webpack Module #83719
 * @exports BuildingItem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.BuildingItem = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */
  n(70535) /* 70535__mod */
  var o = n(62415) /* 62415_TexturedShopItem */
  t.BuildingItem = function (e) {
    var t = e.textureUrl,
      n = undefined === t ? "" : t,
      a = e.playerColor,
      s = undefined === a ? undefined : a,
      u = e.className,
      l = undefined === u ? "" : u
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
