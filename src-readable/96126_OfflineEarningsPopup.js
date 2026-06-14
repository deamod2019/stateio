/**
 * Webpack Module #96126
 * @exports OfflineEarningsPopup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.OfflineEarningsPopup = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(86125) /* 86125__mod */,
    s = n(44656) /* 44656__mod */,
    u = n(86178) /* 86178__mod */,
    l = n(83430) /* 83430_InversifyContext */,
    c = n(37725) /* 37725__mod */,
    d = n(95781) /* 95781_TypesGame */,
    h = n(75663) /* 75663_ClaimButton */,
    p = n(32715) /* 32715_CoinsIndicator */,
    f = n(49071) /* 49071_PopupWinIndicator */,
    _ = n(53527) /* 53527_ContinueButton */,
    g = n(86602) /* 86602_NoThanksButton */,
    m = n(94571) /* 94571_WinRays */,
    v = n(57103) /* 57103_WinStars */,
    y = n(74083) /* 74083_UIConstants */,
    C = i.__importDefault(n(94184) /* 94184__mod */),
    b = n(30396) /* 30396__mod */,
    w = n(36710) /* 36710_MultiplyBonus */,
    x = n(36622) /* 36622_SVG */
  n(98919) /* 98919__mod */
  t.OfflineEarningsPopup = function (e) {
    var t = e.coins,
      n = undefined === t ? 1e3 : t,
      T = e.hours,
      S = undefined === T ? 23 : T,
      L = e.minutes,
      E = undefined === L ? 59 : L,
      A = e.seconds,
      I = undefined === A ? 59 : A,
      M = e.animationEnabled,
      P = undefined === M || M,
      O = (0, l.useInjection)(d.TypesGame.model),
      R = (0, l.useInjection)(o.TypesCore.dispatcher),
      k = {
        startCoinsTotal: O.cookie.coins,
        adViewed: false,
        multiplierSelected: false,
        mult: 1,
        reward: n,
      },
      N = i.__read(
        (0, b.useState)(function () {
          return k
        }),
        2,
      ),
      D = N[0],
      B = N[1],
      F = i.__read((0, l.visibilityEffect)(y.UIConstants.popup.startDelay, false, [D.adViewed]), 1)[0],
      U = y.UIConstants.coinsIndicator.updateDelay
    ;(0, b.useEffect)(
      function () {
        D.adViewed &&
          D.multiplierSelected &&
          D.mult > 1 &&
          B(function (e) {
            return i.__assign(i.__assign({}, e), { reward: e.reward * e.mult })
          })
      },
      [D.multiplierSelected, D.adViewed, D.mult],
    )
    var G = function (e) {
        O.cookie.coins += e
      },
      j = function () {
        return i.__awaiter(undefined, undefined, undefined, function () {
          return i.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  O.cookie.syncTime(),
                  [
                    4,
                    i.__awaiter(undefined, undefined, undefined, function () {
                      return i.__generator(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return (G(D.reward), [4, s.WaitAction.ms(U)])
                          case 1:
                            return (e.sent(), R.emit(l.UIEvents.POPUP, { id: null }), [2])
                        }
                      })
                    }),
                  ]
                )
              case 1:
                return (e.sent(), [2])
            }
          })
        })
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
                { className: (0, C.default)("coins-bar") },
                {
                  children: (0, r.jsx)(p.CoinsIndicator, {
                    className: (0, C.default)("coins-indicator", "coins-indicator_filled"),
                    total: D.startCoinsTotal,
                  }),
                },
              ),
            ),
            (0, r.jsx)(
              "div",
              i.__assign(
                { className: (0, C.default)("popup-offline-earnings") },
                {
                  children: (0, r.jsxs)(
                    "div",
                    i.__assign(
                      { className: (0, C.default)("popup", { invisible: F }) },
                      {
                        children: [
                          (0, r.jsx)(
                            "div",
                            i.__assign(
                              { className: "popup__title" },
                              { children: a.Localize.get("ui-offline-title", "OFFLINE EARNINGS") },
                            ),
                          ),
                          P
                            ? (0, r.jsxs)(
                                "div",
                                i.__assign(
                                  { className: "popup__main-animation" },
                                  {
                                    children: [
                                      (0, r.jsx)(x.SVG.OfflineEarnings, {}),
                                      (0, r.jsx)(m.WinRays, {}),
                                      (0, r.jsx)(v.WinStars, {}),
                                    ],
                                  },
                                ),
                              )
                            : null,
                          (0, r.jsxs)(
                            "div",
                            i.__assign(
                              { className: "popup__body" },
                              {
                                children: [
                                  (0, r.jsx)(
                                    "div",
                                    i.__assign(
                                      { className: (0, C.default)("popup__body-line") },
                                      {
                                        children: a.Localize.get(
                                          "ui-offline-description",
                                          "YOU WERE AWAY FOR:",
                                        ),
                                      },
                                    ),
                                  ),
                                  (0, r.jsxs)(
                                    "div",
                                    i.__assign(
                                      {
                                        className: (0, C.default)("popup__body-line", "time-away"),
                                      },
                                      { children: [S, "H:", E, "M:", I, "S"] },
                                    ),
                                  ),
                                  (0, r.jsx)(f.PopupWinIndicator, {
                                    total: D.reward,
                                    className: (0, C.default)(
                                      "coins-indicator",
                                      "coins-indicator_internal",
                                      "coins-indicator_filled",
                                    ),
                                  }),
                                  (0, r.jsx)(
                                    "div",
                                    i.__assign(
                                      { className: (0, C.default)("popup__body-line") },
                                      {
                                        children: (0, r.jsx)(w.MultiplyBonus, {
                                          paused: D.multiplierSelected,
                                          onPause: function (e) {
                                            B(function (t) {
                                              return i.__assign(i.__assign({}, t), { mult: e })
                                            })
                                          },
                                        }),
                                      },
                                    ),
                                  ),
                                ],
                              },
                            ),
                          ),
                          D.adViewed
                            ? null
                            : (0, r.jsx)(
                                "div",
                                i.__assign(
                                  { className: "popup__body-buttons" },
                                  {
                                    children: (0, r.jsx)(
                                      "div",
                                      i.__assign(
                                        {
                                          className: (0, C.default)("popup__body-button", "center"),
                                        },
                                        {
                                          children: D.adViewed
                                            ? null
                                            : (0, r.jsx)(h.ClaimButton, {
                                                onClick: function () {
                                                  return i.__awaiter(
                                                    undefined,
                                                    undefined,
                                                    undefined,
                                                    function () {
                                                      return i.__generator(this, function (e) {
                                                        switch (e.label) {
                                                          case 0:
                                                            return (
                                                              B(function (e) {
                                                                return i.__assign(
                                                                  i.__assign({}, e),
                                                                  { multiplierSelected: true },
                                                                )
                                                              }),
                                                              [4, (0, c.showReward)()]
                                                            )
                                                          case 1:
                                                            return (
                                                              e.sent() === u.AdResponse.PLAYED &&
                                                                B(function (e) {
                                                                  return i.__assign(
                                                                    i.__assign({}, e),
                                                                    { adViewed: true },
                                                                  )
                                                                }),
                                                              [2]
                                                            )
                                                        }
                                                      })
                                                    },
                                                  )
                                                },
                                                text: a.Localize.get(
                                                  "ui-offline-mult_button",
                                                  "MULTIPLY",
                                                ),
                                              }),
                                        },
                                      ),
                                    ),
                                  },
                                ),
                              ),
                          D.adViewed
                            ? (0, r.jsx)(_.ContinueButton, { onClick: j })
                            : (0, r.jsx)(g.NoThanksButton, {
                                delay: y.UIConstants.popup.noThanksButtonDelay,
                                onClick: function () {
                                  return i.__awaiter(undefined, undefined, undefined, function () {
                                    return i.__generator(this, function (e) {
                                      switch (e.label) {
                                        case 0:
                                          return [4, (0, c.showAd)()]
                                        case 1:
                                          return (e.sent(), j(), [2])
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
