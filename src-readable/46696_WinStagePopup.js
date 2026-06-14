/**
 * Webpack Module #46696
 * @exports WinStagePopup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.WinStagePopup = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(86125) /* 86125__mod */,
    s = n(86178) /* 86178__mod */,
    u = n(83430) /* 83430_InversifyContext */,
    l = n(44365) /* 44365_SIOConstants */,
    c = n(37725) /* 37725__mod */,
    d = n(95781) /* 95781_TypesGame */,
    h = n(32715) /* 32715_CoinsIndicator */,
    p = n(49071) /* 49071_PopupWinIndicator */,
    f = n(53527) /* 53527_ContinueButton */,
    _ = n(86602) /* 86602_NoThanksButton */,
    g = n(94571) /* 94571_WinRays */,
    m = n(57103) /* 57103_WinStars */,
    v = n(74083) /* 74083_UIConstants */,
    y = i.__importDefault(n(94184) /* 94184__mod */),
    C = n(30396) /* 30396__mod */,
    b = n(75663) /* 75663_ClaimButton */,
    w = n(36622) /* 36622_SVG */
  n(20621) /* 20621__mod */
  var x = n(44656) /* 44656__mod */
  t.WinStagePopup = function (e) {
    var t = e.animationEnabled,
      n = undefined === t || t,
      T = e.coins,
      S = undefined === T ? 9999 : T,
      L = e.showRewardAd,
      E = undefined === L || L,
      A = e.onContinue,
      I = (0, u.useInjection)(d.TypesGame.model),
      M = (0, u.useInjection)(o.TypesCore.dispatcher),
      P = i.__read((0, u.visibilityEffect)(v.UIConstants.popup.startDelay), 2),
      O = P[0],
      R = P[1],
      k = i.__read(
        (0, C.useState)({ startCoinsTotal: I.cookie.coins, adViewed: false, reward: 0 }),
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
          undefined === e && (e = false),
          i.__awaiter(undefined, undefined, undefined, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    R(true),
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
                                                    undefined,
                                                    undefined,
                                                    undefined,
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
                                  return i.__awaiter(undefined, undefined, undefined, function () {
                                    return i.__generator(this, function (e) {
                                      switch (e.label) {
                                        case 0:
                                          return [4, (0, c.showAd)()]
                                        case 1:
                                          return (e.sent(), [4, F(false)])
                                        case 2:
                                          return (e.sent(), [2])
                                      }
                                    })
                                  })
                                },
                              })
                            : (0, r.jsx)(f.ContinueButton, {
                                onClick: function () {
                                  return F(true)
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
