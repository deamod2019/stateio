/**
 * Webpack Module #56184
 * @exports GiftPopup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.GiftPopup = void 0))
  var i = n(70655),
    r = n(16584)
  n(92015)
  var o = n(86125),
    a = n(44656),
    s = n(86178),
    u = n(86178),
    l = n(83430),
    c = n(37725),
    d = n(95781),
    h = n(75663),
    p = n(53527),
    f = n(86602),
    _ = n(74083),
    g = i.__importDefault(n(94184)),
    m = n(30396),
    v = n(36622),
    y = n(32715),
    C = n(73097),
    b = n(66154),
    w = n(79147)
  t.GiftPopup = function (e) {
    var t = { adViewed: !1, canCollect: !1 },
      n = e.captured,
      x = e.total,
      T = (0, l.useInjection)(d.TypesGame.model),
      S = (0, l.useInjection)(s.TypesCore.dispatcher),
      L = n >= x,
      E = i.__read((0, l.visibilityEffect)(_.UIConstants.popup.startDelay), 1)[0],
      A = i.__read(
        (0, m.useState)(function () {
          return t
        }),
        2,
      ),
      I = A[0],
      M = A[1],
      P = function () {
        ;(M(function (e) {
          return i.__assign({}, e)
        }),
          S.emit(l.UIEvents.POPUP, { id: null }))
      }
    return (0, r.jsxs)(
      "div",
      i.__assign(
        { className: "popups" },
        {
          children: [
            (0, r.jsx)(
              "div",
              i.__assign(
                { className: (0, g.default)("coins-bar") },
                {
                  children: (0, r.jsx)(y.CoinsIndicator, {
                    className: (0, g.default)("coins-indicator", "coins-indicator_filled"),
                    total: T.cookie.coins,
                  }),
                },
              ),
            ),
            (0, r.jsx)(
              "div",
              i.__assign(
                { className: (0, g.default)("popup-gift") },
                {
                  children: (0, r.jsxs)(
                    "div",
                    i.__assign(
                      { className: (0, g.default)("popup", { invisible: E }) },
                      {
                        children: [
                          (0, r.jsx)(
                            "div",
                            i.__assign(
                              { className: "popup__title" },
                              { children: o.Localize.get("ui-fillbox-title", "GIFT") },
                            ),
                          ),
                          (0, r.jsxs)(
                            "div",
                            i.__assign(
                              { className: "popup__body" },
                              {
                                children: [
                                  (0, r.jsx)(w.GiftItem, { reward: I.adViewed ? e.reward : null }),
                                  (0, r.jsx)(C.CapturingAnimated, {
                                    from: n - 1,
                                    to: n,
                                    startDelay: 1,
                                    total: x,
                                    onAnimationComplete: function () {
                                      L && M(i.__assign(i.__assign({}, I), { canCollect: !0 }))
                                    },
                                  }),
                                  (0, r.jsx)(
                                    "div",
                                    i.__assign(
                                      {
                                        className: (0, g.default)(
                                          "decoration-gift",
                                          "decoration-gift_top-left",
                                        ),
                                      },
                                      { children: (0, r.jsx)(v.Images.Gift, {}) },
                                    ),
                                  ),
                                  (0, r.jsx)(
                                    "div",
                                    i.__assign(
                                      {
                                        className: (0, g.default)(
                                          "decoration-gift",
                                          "decoration-gift_right-bottom",
                                          "decoration-gift_small",
                                        ),
                                      },
                                      { children: (0, r.jsx)(v.Images.Gift, {}) },
                                    ),
                                  ),
                                ],
                              },
                            ),
                          ),
                          (0, r.jsx)(
                            "div",
                            i.__assign(
                              { className: "popup__body-buttons" },
                              {
                                children: (0, r.jsx)(
                                  "div",
                                  i.__assign(
                                    {
                                      className: (0, g.default)("popup__body-button", "center", {
                                        invisible: I.adViewed || !I.canCollect,
                                      }),
                                    },
                                    {
                                      children: I.adViewed
                                        ? null
                                        : (0, r.jsx)(h.ClaimButton, {
                                            onClick: function () {
                                              return i.__awaiter(
                                                void 0,
                                                void 0,
                                                void 0,
                                                function () {
                                                  return i.__generator(this, function (t) {
                                                    switch (t.label) {
                                                      case 0:
                                                        return [4, (0, c.showReward)()]
                                                      case 1:
                                                        if (t.sent() === u.AdResponse.PLAYED) {
                                                          if (e.reward) {
                                                            switch (e.reward.type) {
                                                              case b.SkinType.BUILDING:
                                                                T.cookie.addUserBuilding(
                                                                  e.reward.id,
                                                                )
                                                                break
                                                              case b.SkinType.FIGHTER:
                                                                T.cookie.addUserFighter(e.reward.id)
                                                            }
                                                            T.onShopScreenChanged()
                                                          }
                                                          M(function (e) {
                                                            return i.__assign(i.__assign({}, e), {
                                                              adViewed: !0,
                                                            })
                                                          })
                                                        }
                                                        return [2]
                                                    }
                                                  })
                                                },
                                              )
                                            },
                                          }),
                                    },
                                  ),
                                ),
                              },
                            ),
                          ),
                          I.adViewed || !L
                            ? (0, r.jsx)(p.ContinueButton, {
                                onClick: function () {
                                  return i.__awaiter(void 0, void 0, void 0, function () {
                                    var t
                                    return i.__generator(this, function (n) {
                                      return (
                                        P(),
                                        e.onContinue
                                          ? [2, e.onContinue(!0)]
                                          : [
                                              2,
                                              null ===
                                                (t = (0, a.lazyGet)(s.TypesFlow.LevelNext)) ||
                                              void 0 === t
                                                ? void 0
                                                : t.run(),
                                            ]
                                      )
                                    })
                                  })
                                },
                              })
                            : (0, r.jsx)(f.NoThanksButton, {
                                delay: _.UIConstants.popup.noThanksButtonDelay + 1e3,
                                onClick: function () {
                                  return i.__awaiter(void 0, void 0, void 0, function () {
                                    return i.__generator(this, function (t) {
                                      switch (t.label) {
                                        case 0:
                                          return [4, (0, c.showAd)()]
                                        case 1:
                                          return (
                                            t.sent(),
                                            P(),
                                            [2, e.onContinue && e.onContinue(!1)]
                                          )
                                      }
                                    })
                                  })
                                },
                              }),
                        ],
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
  }
}
