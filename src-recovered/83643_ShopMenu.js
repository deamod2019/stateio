/**
 * Webpack Module #83643
 * @exports ShopMenu
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ShopMenu = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(86125),
    a = n(86178),
    s = n(83430),
    u = n(66154),
    l = n(37725),
    c = n(95781),
    d = n(76282),
    h = n(74083),
    p = i.__importDefault(n(94184)),
    f = n(30396),
    _ = n(37079),
    g = h.UIConstants.shop.defaultTabType,
    m = function (e) {
      0
    }
  t.ShopMenu = function () {
    var e = (0, s.useInjection)(c.TypesGame.model),
      t = (0, s.useInjection)(c.TypesGame.skinManager),
      n = { shopItems: [], adViewed: !1, lastOpenedTab: g, selectedItemId: null },
      v = i.__read(
        (0, f.useState)(function () {
          return n
        }),
        2,
      ),
      y = v[0],
      C = v[1],
      b = y.shopItems,
      w = y.adViewed,
      x = function (e) {
        return i.__awaiter(void 0, void 0, void 0, function () {
          return i.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  C(function (e) {
                    return i.__assign(i.__assign({}, e), { adViewed: !1 })
                  }),
                  [4, (0, l.showReward)()]
                )
              case 1:
                return (
                  t.sent() === a.AdResponse.PLAYED &&
                    (e(),
                    C(function (e) {
                      return i.__assign(i.__assign({}, e), { adViewed: !0 })
                    })),
                  [2]
                )
            }
          })
        })
      },
      T = function (e, t) {
        e.selected ||
          ((0, l.playUIClickSound)(),
          t(),
          C(function (t) {
            return i.__assign(i.__assign({}, t), { selectedItemId: e.id })
          }))
      },
      S = function (t) {
        return function (n) {
          if (t.stored)
            T(t, function () {
              return (e.cookie.selected_fighter_id = t.id)
            })
          else {
            if (m()) return void e.cookie.addUserFighter(t.id)
            x(function () {
              return e.cookie.addUserFighter(t.id)
            })
          }
        }
      },
      L = function (t) {
        return function (n) {
          if (t.stored)
            T(t, function () {
              return (e.cookie.selected_building_id = t.id)
            })
          else {
            if (m()) return void e.cookie.addUserBuilding(t.id)
            x(function () {
              return e.cookie.addUserBuilding(t.id)
            })
          }
        }
      },
      E = function (t) {
        return function () {
          return (
            t.stored &&
            T(t, function () {
              return (e.cookie.selected_color_set_id = t.id)
            })
          )
        }
      },
      A = function () {
        return h.UIConstants.shop.tabTypes.map(function (n) {
          var r = n === g,
            a = (function (e) {
              switch (e) {
                case h.ShopType.BUILDING:
                  return o.Localize.get("ui-store-building", "BUILDING")
                case h.ShopType.FIGHTER:
                  return o.Localize.get("ui-store-fighter", "FIGHTER")
                default:
                  return o.Localize.get("ui-store-color", "COLOR")
              }
            })(n),
            s = (function (n) {
              var i,
                r,
                o = null === (i = e.cookie.selectedColorSet) || void 0 === i ? void 0 : i.data,
                a =
                  (null ===
                    (r = u.SelectableColorCss.find(function (t) {
                      var n
                      return (
                        t.id ===
                        (null === (n = e.cookie.selectedColorSet) || void 0 === n ? void 0 : n.id)
                      )
                    })) || void 0 === r
                    ? void 0
                    : r.className) || ""
              switch (n) {
                case h.ShopType.BUILDING:
                  return t.availableBuildings.map(function (e) {
                    return {
                      id: e.id,
                      type: n,
                      content: {
                        selectedColorSet: o,
                        textureUrl: e.ui_textureUrl,
                        isSelected: e.selected,
                        stored: e.stored,
                        colorClassName: a,
                        onClick: L(e),
                      },
                    }
                  })
                case h.ShopType.FIGHTER:
                  return t.availableFighters.map(function (e) {
                    return {
                      id: e.id,
                      type: n,
                      content: {
                        selectedColorSet: o,
                        textureUrl: e.ui_textureUrl,
                        isSelected: e.selected,
                        stored: e.stored,
                        colorClassName: a,
                        onClick: S(e),
                      },
                    }
                  })
                case h.ShopType.COLOR:
                  return e.cookie.availableColors.map(function (e) {
                    return {
                      id: e.id,
                      type: n,
                      content: {
                        isSelected: e.selected,
                        stored: e.stored,
                        colorData: e.data,
                        onClick: E(e),
                      },
                    }
                  })
              }
              return []
            })(n),
            c =
              s.filter(function (e) {
                var t
                return !(null === (t = e.content) || void 0 === t ? void 0 : t.stored)
              }).length > 0
          return {
            type: n,
            isActive: r,
            items: s,
            header: {
              className: r ? "shop-menu__tab-header_active" : "",
              showNotification: c,
              title: a,
              onClick: function () {
                ;((0, l.playUIClickSound)(),
                  (g = n),
                  C(function (e) {
                    return i.__assign(i.__assign({}, e), { lastOpenedTab: n })
                  }))
              },
            },
          }
        })
      }
    return (
      (0, f.useEffect)(
        function () {
          var e = A()
          C(function (t) {
            return i.__assign(i.__assign({}, t), { shopItems: e })
          })
        },
        [w, y.lastOpenedTab, y.selectedItemId],
      ),
      (0, r.jsxs)(
        "div",
        i.__assign(
          { className: (0, p.default)("shop-menu") },
          {
            children: [
              (0, r.jsx)(
                "div",
                i.__assign(
                  { className: (0, p.default)("shop-menu__tabs-header") },
                  {
                    children: b.map(function (e) {
                      return (0, r.jsx)(_.ShopTabHeader, i.__assign({}, e.header))
                    }),
                  },
                ),
              ),
              (0, r.jsx)(
                "div",
                i.__assign(
                  { className: (0, p.default)("shop-menu__tabs-content") },
                  {
                    children: (0, r.jsx)(
                      "div",
                      i.__assign(
                        { className: (0, p.default)("shop-menu__tab-content") },
                        {
                          children: b.map(function (e) {
                            return e.isActive
                              ? e.items.map(function (e) {
                                  return (0, r.jsx)(
                                    d.ShopItem,
                                    i.__assign({ id: e.id, type: e.type }, e.content),
                                  )
                                })
                              : null
                          }),
                        },
                      ),
                    ),
                  },
                ),
              ),
            ],
          },
        ),
      )
    )
  }
}
