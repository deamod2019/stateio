/**
 * Webpack Module #96126
 * @exports OfflineEarningsPopup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.OfflineEarningsPopup = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(86178),
    a = n(86125),
    s = n(44656),
    u = n(86178),
    l = n(83430),
    c = n(37725),
    d = n(95781),
    h = n(75663),
    p = n(32715),
    f = n(49071),
    _ = n(53527),
    g = n(86602),
    m = n(94571),
    v = n(57103),
    y = n(74083),
    C = i.__importDefault(n(94184)),
    b = n(30396),
    w = n(36710),
    x = n(36622)
  n(98919)
  t.OfflineEarningsPopup = function (e) {
    var t = e.coins,
      n = void 0 === t ? 1e3 : t,
      T = e.hours,
      S = void 0 === T ? 23 : T,
      L = e.minutes,
      E = void 0 === L ? 59 : L,
      A = e.seconds,
      I = void 0 === A ? 59 : A,
      M = e.animationEnabled,
      P = void 0 === M || M,
      O = (0, l.useInjection)(d.TypesGame.model),
      R = (0, l.useInjection)(o.TypesCore.dispatcher),
      k = {
        startCoinsTotal: O.cookie.coins,
        adViewed: !1,
        multiplierSelected: !1,
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
      F = i.__read((0, l.visibilityEffect)(y.UIConstants.popup.startDelay, !1, [D.adViewed]), 1)[0],
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
        return i.__awaiter(void 0, void 0, void 0, function () {
          return i.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  O.cookie.syncTime(),
                  [
                    4,
                    i.__awaiter(void 0, void 0, void 0, function () {
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
                                                    void 0,
                                                    void 0,
                                                    void 0,
                                                    function () {
                                                      return i.__generator(this, function (e) {
                                                        switch (e.label) {
                                                          case 0:
                                                            return (
                                                              B(function (e) {
                                                                return i.__assign(
                                                                  i.__assign({}, e),
                                                                  { multiplierSelected: !0 },
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
                                                                    { adViewed: !0 },
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
                                  return i.__awaiter(void 0, void 0, void 0, function () {
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
