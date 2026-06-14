/**
 * Webpack Module #56184
 * @exports GiftPopup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.GiftPopup = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */
  n(92015) /* 92015__mod */
  var o = n(86125) /* 86125__mod */,
    a = n(44656) /* 44656__mod */,
    s = n(86178) /* 86178__mod */,
    u = n(86178) /* 86178__mod */,
    l = n(83430) /* 83430_InversifyContext */,
    c = n(37725) /* 37725__mod */,
    d = n(95781) /* 95781_TypesGame */,
    h = n(75663) /* 75663_ClaimButton */,
    p = n(53527) /* 53527_ContinueButton */,
    f = n(86602) /* 86602_NoThanksButton */,
    _ = n(74083) /* 74083_UIConstants */,
    g = i.__importDefault(n(94184) /* 94184__mod */),
    m = n(30396) /* 30396__mod */,
    v = n(36622) /* 36622_SVG */,
    y = n(32715) /* 32715_CoinsIndicator */,
    C = n(73097) /* 73097_CapturingAnimated */,
    b = n(66154) /* 66154_SelectableFighterDataSet */,
    w = n(79147) /* 79147_GiftItem */
  t.GiftPopup = function (e) {
    var t = { adViewed: false, canCollect: false },
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
                                      L && M(i.__assign(i.__assign({}, I), { canCollect: true }))
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
                                                undefined,
                                                undefined,
                                                undefined,
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
                                                              adViewed: true,
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
                                  return i.__awaiter(undefined, undefined, undefined, function () {
                                    var t
                                    return i.__generator(this, function (n) {
                                      return (
                                        P(),
                                        e.onContinue
                                          ? [2, e.onContinue(true)]
                                          : [
                                              2,
                                              null ===
                                                (t = (0, a.lazyGet)(s.TypesFlow.LevelNext)) ||
                                              undefined === t
                                                ? undefined
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
                                  return i.__awaiter(undefined, undefined, undefined, function () {
                                    return i.__generator(this, function (t) {
                                      switch (t.label) {
                                        case 0:
                                          return [4, (0, c.showAd)()]
                                        case 1:
                                          return (
                                            t.sent(),
                                            P(),
                                            [2, e.onContinue && e.onContinue(false)]
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
