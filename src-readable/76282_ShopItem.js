/**
 * Webpack Module #76282
 * @exports ShopItem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ShopItem = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(86125) /* 86125__mod */,
    a = n(83430) /* 83430_InversifyContext */,
    s = n(74083) /* 74083_UIConstants */,
    u = n(36622) /* 36622_SVG */,
    l = i.__importDefault(n(94184) /* 94184__mod */),
    c = n(83719) /* 83719_BuildingItem */,
    d = n(30851) /* 30851_FighterItem */,
    h = n(92068) /* 92068_ColorItem */,
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
      n = undefined === t ? "" : t,
      o = e.className,
      u = undefined === o ? "" : o,
      f = e.isSelected,
      _ = undefined !== f && f,
      g = e.onClick,
      m = undefined === g ? function () {} : g,
      v = e.stored,
      y = undefined !== v && v,
      C = e.textureUrl,
      b = undefined === C ? "" : C,
      w = e.selectedColorSet,
      x = undefined === w ? undefined : w,
      T = e.type,
      S = undefined === T ? s.ShopType.COLOR : T,
      L = e.colorData,
      E = undefined === L ? undefined : L,
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
