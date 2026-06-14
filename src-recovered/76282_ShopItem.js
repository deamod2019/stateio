/**
 * Webpack Module #76282
 * @exports ShopItem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ShopItem = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(86125),
    a = n(83430),
    s = n(74083),
    u = n(36622),
    l = i.__importDefault(n(94184)),
    c = n(83719),
    d = n(30851),
    h = n(92068),
    p = function () {
      return (0, r.jsxs)(
        "div",
        i.__assign(
          { className: "shop-item__price" },
          {
            children: [
              (0, r.jsx)(
                "div",
                i.__assign(
                  { className: "shop-item__price-text" },
                  {
                    children: (0, r.jsx)("span", {
                      children: o.Localize.get("ui-fillbox-get", "GET"),
                    }),
                  },
                ),
              ),
              (0, r.jsx)(
                "div",
                i.__assign(
                  { className: "shop-item__price-video-icon" },
                  { children: (0, r.jsx)(u.SVG.Video, {}) },
                ),
              ),
            ],
          },
        ),
      )
    }
  t.ShopItem = function (e) {
    var t = e.colorClassName,
      n = void 0 === t ? "" : t,
      o = e.className,
      u = void 0 === o ? "" : o,
      f = e.isSelected,
      _ = void 0 !== f && f,
      g = e.onClick,
      m = void 0 === g ? function () {} : g,
      v = e.stored,
      y = void 0 !== v && v,
      C = e.textureUrl,
      b = void 0 === C ? "" : C,
      w = e.selectedColorSet,
      x = void 0 === w ? void 0 : w,
      T = e.type,
      S = void 0 === T ? s.ShopType.COLOR : T,
      L = e.colorData,
      E = void 0 === L ? void 0 : L,
      A = i.__read((0, a.visibilityEffect)(200), 1)[0]
    return (0, r.jsxs)(
      "div",
      i.__assign(
        {
          onClick: m,
          className: (0, l.default)("shop-item", u, { invisible: A, "shop-item_selected": _ }),
        },
        {
          children: [
            (0, r.jsx)("div", { className: "shop-item__overlay" }),
            S === s.ShopType.COLOR
              ? (0, r.jsx)(h.ColorItem, { colorData: E })
              : S === s.ShopType.BUILDING
                ? (0, r.jsx)(c.BuildingItem, { textureUrl: b, className: n, playerColor: x })
                : (0, r.jsx)(d.FighterItem, { textureUrl: b, className: n, playerColor: x }),
            (0, r.jsx)("div", {
              className: (0, l.default)("shop-item-icon", { "shop-item-icon_selected": _ }),
            }),
            y ? null : (0, r.jsx)(p, {}),
          ],
        },
      ),
    )
  }
}
