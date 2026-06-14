/**
 * Webpack Module #79147
 * @exports GiftItem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.GiftItem = void 0))
  var i = n(70655),
    r = n(16584)
  n(36050)
  var o = n(66154),
    a = n(83430),
    s = n(95781),
    u = i.__importDefault(n(94184)),
    l = n(83719),
    c = n(30851),
    d = n(36622),
    h = function (e) {
      var t,
        n,
        i,
        u = e.type,
        d = e.id,
        h = (0, a.useInjection)(s.TypesGame.model).cookie.selectedColorSet,
        p = null == h ? void 0 : h.data,
        f =
          (null ===
            (t = o.SelectableColorCss.find(function (e) {
              return e.id === (null == h ? void 0 : h.id)
            })) || void 0 === t
            ? void 0
            : t.className) || ""
      switch (u) {
        case o.SkinType.BUILDING:
          return (0, r.jsx)(l.BuildingItem, {
            textureUrl:
              null ===
                (n = o.SelectableBuildingDataSet.find(function (e) {
                  return e.id === d
                })) || void 0 === n
                ? void 0
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
                })) || void 0 === i
                ? void 0
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
