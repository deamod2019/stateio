/**
 * Webpack Module #56721
 * @exports Booster, BoosterType
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Booster = t.BoosterType = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(86125),
    a = n(36622),
    s = i.__importDefault(n(94184)),
    u = n(38319)
  n(67566)
  var l,
    c = n(37725)
  !(function (e) {
    ;((e.START_UNITS = "BoosterType.START_UNITS"),
      (e.START_PRODUCE = "BoosterType.START_PRODUCE"),
      (e.OFFLINE_EARNINGS = "BoosterType.OFFLINE_EARNINGS"))
  })((l = t.BoosterType || (t.BoosterType = {})))
  var d = function (e, t) {
    switch ((void 0 === t && (t = !1), e)) {
      case l.START_UNITS:
        return t
          ? (0, r.jsx)(a.SVG.BoosterStartUnitsIcon, {})
          : (0, r.jsx)(a.SVG.BoosterStartUnits, {})
      case l.START_PRODUCE:
        return t
          ? (0, r.jsx)(a.SVG.BoosterProduceSpeedIcon, {})
          : (0, r.jsx)(a.SVG.BoosterProduceSpeed, {})
      default:
        return t ? (0, r.jsx)(a.SVG.BoosterOfflineEarningsIcon, {}) : (0, r.jsx)(a.SVG.COINS, {})
    }
  }
  t.Booster = function (e) {
    var t = e.id,
      n = e.title,
      l = e.disabled,
      h = void 0 === l || l,
      p = e.isFree,
      f = void 0 === p || p,
      _ = e.defaultCount,
      g = void 0 === _ ? "10" : _,
      m = e.description,
      v = e.price,
      y = void 0 === v ? 50 : v,
      C = e.onClick,
      b = e.className,
      w = e.levelNum,
      x = void 0 === w ? 10 : w
    return (0, r.jsxs)(
      "div",
      i.__assign(
        { disabled: h, className: (0, s.default)("booster", b, { disabled: h }) },
        {
          children: [
            (0, r.jsxs)(
              "div",
              i.__assign(
                { className: (0, s.default)("booster-head") },
                {
                  children: [
                    (0, r.jsx)(
                      "div",
                      i.__assign(
                        { className: (0, s.default)("booster-head__icon") },
                        { children: d(t, !0) },
                      ),
                    ),
                    (0, r.jsxs)(
                      "div",
                      i.__assign(
                        { className: (0, s.default)("booster-head__info") },
                        {
                          children: [
                            (0, r.jsx)(
                              "div",
                              i.__assign(
                                {
                                  className: (0, s.default)(
                                    "booster-head__total",
                                    (0, u.getFontClassByDigits)(g, 2, 7),
                                  ),
                                },
                                { children: g },
                              ),
                            ),
                            (0, r.jsx)(
                              "div",
                              i.__assign(
                                { className: (0, s.default)("booster-head__description") },
                                {
                                  children: o.Localize.get(
                                    null == m ? void 0 : m.i18n,
                                    null == m ? void 0 : m.default,
                                  ),
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
            ),
            (0, r.jsxs)(
              "button",
              i.__assign(
                {
                  onClick: function () {
                    C && (!h && (0, c.playUIClickSound)(), C())
                  },
                  disabled: h,
                  className: (0, s.default)("booster-body", "btn", { "booster-body_free": f }),
                },
                {
                  children: [
                    (0, r.jsx)(
                      "div",
                      i.__assign(
                        { className: (0, s.default)("booster-body__title") },
                        {
                          children: o.Localize.get(
                            null == n ? void 0 : n.i18n,
                            null == n ? void 0 : n.default,
                          ),
                        },
                      ),
                    ),
                    (0, r.jsx)(
                      "div",
                      i.__assign(
                        { className: (0, s.default)("booster-body__image") },
                        { children: d(t) },
                      ),
                    ),
                    (0, r.jsxs)(
                      "div",
                      i.__assign(
                        {
                          className: (0, s.default)(
                            "booster-body__level",
                            (0, u.getFontClassByDigits)(x, 1, 3),
                          ),
                        },
                        { children: [o.Localize.get("ui-menu-lvl", "LVL"), " ", x] },
                      ),
                    ),
                    (0, r.jsx)(
                      "div",
                      i.__assign(
                        { className: (0, s.default)("booster-body__price") },
                        {
                          children: f
                            ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(
                                    "div",
                                    i.__assign(
                                      { className: (0, s.default)("booster-body__price-free") },
                                      { children: o.Localize.get("ui-common-free", "FREE") },
                                    ),
                                  ),
                                  (0, r.jsx)(
                                    "div",
                                    i.__assign(
                                      {
                                        className: (0, s.default)("booster-body__price-icon-free"),
                                      },
                                      { children: (0, r.jsx)(a.SVG.Video, {}) },
                                    ),
                                  ),
                                ],
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(
                                    "div",
                                    i.__assign(
                                      {
                                        className: (0, s.default)(
                                          "booster-body__price-total",
                                          (0, u.getFontClassByDigits)(y, 2, 7),
                                        ),
                                      },
                                      { children: y },
                                    ),
                                  ),
                                  (0, r.jsx)(
                                    "div",
                                    i.__assign(
                                      { className: (0, s.default)("booster-body__price-icon") },
                                      { children: (0, r.jsx)(a.SVG.COINS, {}) },
                                    ),
                                  ),
                                ],
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
