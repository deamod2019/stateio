/**
 * Webpack Module #46696
 * @exports WinStagePopup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.WinStagePopup = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(86178),
    a = n(86125),
    s = n(86178),
    u = n(83430),
    l = n(44365),
    c = n(37725),
    d = n(95781),
    h = n(32715),
    p = n(49071),
    f = n(53527),
    _ = n(86602),
    g = n(94571),
    m = n(57103),
    v = n(74083),
    y = i.__importDefault(n(94184)),
    C = n(30396),
    b = n(75663),
    w = n(36622)
  n(20621)
  var x = n(44656)
  t.WinStagePopup = function (e) {
    var t = e.animationEnabled,
      n = void 0 === t || t,
      T = e.coins,
      S = void 0 === T ? 9999 : T,
      L = e.showRewardAd,
      E = void 0 === L || L,
      A = e.onContinue,
      I = (0, u.useInjection)(d.TypesGame.model),
      M = (0, u.useInjection)(o.TypesCore.dispatcher),
      P = i.__read((0, u.visibilityEffect)(v.UIConstants.popup.startDelay), 2),
      O = P[0],
      R = P[1],
      k = i.__read(
        (0, C.useState)({ startCoinsTotal: I.cookie.coins, adViewed: !1, reward: 0 }),
        2,
      ),
      N = k[0],
      D = k[1],
      B = S * l.SIOConstants.CLAIM_FACTOR
    ;(0, C.useEffect)(
      function () {
        if (!N.adViewed) {
          var e = setTimeout(function () {
            return D(i.__assign(i.__assign({}, N), { reward: S }))
          }, 200)
          return function () {
            return clearTimeout(e)
          }
        }
        D(i.__assign(i.__assign({}, N), { reward: B }))
      },
      [N.adViewed],
    )
    var F = function (e) {
        return (
          void 0 === e && (e = !1),
          i.__awaiter(void 0, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    R(!0),
                    (I.cookie.coins += N.reward),
                    [4, x.WaitAction.ms(v.UIConstants.coinsIndicator.updateDelay)]
                  )
                case 1:
                  return (t.sent(), M.emit(u.UIEvents.POPUP, { id: null }), A ? [4, A(e)] : [3, 3])
                case 2:
                  ;(t.sent(), (t.label = 3))
                case 3:
                  return [2]
              }
            })
          })
        )
      },
      U = E && !N.adViewed
    return (0, r.jsxs)(
      "div",
      i.__assign(
        { className: "popups" },
        {
          children: [
            (0, r.jsx)(
              "div",
              i.__assign(
                { className: (0, y.default)("coins-bar") },
                {
                  children: (0, r.jsx)(h.CoinsIndicator, {
                    className: (0, y.default)("coins-indicator", "coins-indicator_filled"),
                    total: N.startCoinsTotal,
                  }),
                },
              ),
            ),
            (0, r.jsx)(
              "div",
              i.__assign(
                { className: "popup-win-level" },
                {
                  children: (0, r.jsxs)(
                    "div",
                    i.__assign(
                      { className: (0, y.default)("popup", { invisible: O }) },
                      {
                        children: [
                          (0, r.jsx)(
                            "div",
                            i.__assign(
                              { className: "popup__title" },
                              { children: a.Localize.get("ui-win-win_label", "YOU WON") },
                            ),
                          ),
                          n
                            ? (0, r.jsxs)(
                                "div",
                                i.__assign(
                                  { className: "popup__main-animation" },
                                  {
                                    children: [
                                      (0, r.jsx)(w.SVG.PopupWinCup, {}),
                                      (0, r.jsx)(g.WinRays, {}),
                                      (0, r.jsx)(m.WinStars, {}),
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
                                      { className: "popup__sub-title" },
                                      {
                                        children: a.Localize.get(
                                          "ui-win-reward_label",
                                          "YOUR REWARD",
                                        ),
                                      },
                                    ),
                                  ),
                                  (0, r.jsx)(p.PopupWinIndicator, {
                                    className: (0, y.default)(
                                      "coins-indicator",
                                      "coins-indicator_internal",
                                    ),
                                    total: N.reward,
                                  }),
                                ],
                              },
                            ),
                          ),
                          U
                            ? (0, r.jsx)(
                                "div",
                                i.__assign(
                                  { className: "popup__body-buttons" },
                                  {
                                    children: (0, r.jsx)(
                                      "div",
                                      i.__assign(
                                        {
                                          className: (0, y.default)("popup__body-button", "center"),
                                        },
                                        {
                                          children: N.adViewed
                                            ? null
                                            : (0, r.jsx)(b.ClaimButton, {
                                                onClick: function () {
                                                  return i.__awaiter(
                                                    void 0,
                                                    void 0,
                                                    void 0,
                                                    function () {
                                                      return i.__generator(this, function (e) {
                                                        switch (e.label) {
                                                          case 0:
                                                            return [4, (0, c.showReward)()]
                                                          case 1:
                                                            return (
                                                              e.sent() === s.AdResponse.PLAYED &&
                                                                D(function (e) {
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
                                                reward: B,
                                              }),
                                        },
                                      ),
                                    ),
                                  },
                                ),
                              )
                            : null,
                          U
                            ? (0, r.jsx)(_.NoThanksButton, {
                                delay: v.UIConstants.popup.noThanksButtonDelay,
                                onClick: function () {
                                  return i.__awaiter(void 0, void 0, void 0, function () {
                                    return i.__generator(this, function (e) {
                                      switch (e.label) {
                                        case 0:
                                          return [4, (0, c.showAd)()]
                                        case 1:
                                          return (e.sent(), [4, F(!1)])
                                        case 2:
                                          return (e.sent(), [2])
                                      }
                                    })
                                  })
                                },
                              })
                            : (0, r.jsx)(f.ContinueButton, {
                                onClick: function () {
                                  return F(!0)
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
