/**
 * Webpack Module #79147
 * @exports GiftItem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.GiftItem = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */
  n(36050) /* 36050__mod */
  var o = n(66154) /* 66154_SelectableFighterDataSet */,
    a = n(83430) /* 83430_InversifyContext */,
    s = n(95781) /* 95781_TypesGame */,
    u = i.__importDefault(n(94184) /* 94184__mod */),
    l = n(83719) /* 83719_BuildingItem */,
    c = n(30851) /* 30851_FighterItem */,
    d = n(36622) /* 36622_SVG */,
    h = function (e) {
      var t,
        n,
        i,
        u = e.type,
        d = e.id,
        h = (0, a.useInjection)(s.TypesGame.model).cookie.selectedColorSet,
        p = null == h ? undefined : h.data,
        f =
          (null ===
            (t = o.SelectableColorCss.find(function (e) {
              return e.id === (null == h ? undefined : h.id)
            })) || undefined === t
            ? undefined
            : t.className) || ""
      switch (u) {
        case o.SkinType.BUILDING:
          return (0, r.jsx)(l.BuildingItem, {
            textureUrl:
              null ===
                (n = o.SelectableBuildingDataSet.find(function (e) {
                  return e.id === d
                })) || undefined === n
                ? undefined
                : n.ui_textureUrl,
            className: f,
            playerColor: p,
          })
        case o.SkinType.FIGHTER:
          return (0, r.jsx)(c.FighterItem, {
            textureUrl:
              null ===
                (i = o.SelectableFighterDataSet.find(function (e) {
                  return e.id === d
                })) || undefined === i
                ? undefined
                : i.ui_textureUrl,
            className: f,
            playerColor: p,
          })
      }
    }
  t.GiftItem = function (e) {
    var t = e.reward
    return (0, r.jsx)(
      "span",
      i.__assign(
        { className: (0, u.default)("shop-item", "gift-item") },
        { children: t ? (0, r.jsx)(h, { id: t.id, type: t.type }) : (0, r.jsx)(d.Images.Gift, {}) },
      ),
    )
  }
}
