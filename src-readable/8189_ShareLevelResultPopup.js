/**
 * Webpack Module #8189
 * @exports ShareLevelResultPopup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ShareLevelResultPopup = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(83430) /* 83430_InversifyContext */,
    a = n(95781) /* 95781_TypesGame */,
    s = n(86178) /* 86178__mod */,
    u = n(32715) /* 32715_CoinsIndicator */,
    l = n(86602) /* 86602_NoThanksButton */,
    c = n(56612) /* 56612_Winner */,
    d = n(94571) /* 94571_WinRays */,
    h = n(57103) /* 57103_WinStars */,
    p = n(74083) /* 74083_UIConstants */,
    f = i.__importDefault(n(94184) /* 94184__mod */)
  n(28130) /* 28130__mod */
  var _ = n(44656) /* 44656__mod */,
    g = n(86125) /* 86125__mod */,
    m = n(53527) /* 53527_ContinueButton */
  t.ShareLevelResultPopup = function (e) {
    var t = e.shareImage,
      n = e.onContinue,
      v = (0, o.useInjection)(a.TypesGame.model),
      y = (0, o.useInjection)(s.TypesSocial.model),
      C = (0, o.useInjection)(s.TypesCore.dispatcher),
      b = i.__read((0, o.visibilityEffect)(p.UIConstants.popup.startDelay), 2),
      w = b[0],
      x = b[1],
      T = v.screenshots[v.screenshots.length - 1],
      S = function (e) {
        return (
          undefined === e && (e = false),
          i.__awaiter(undefined, undefined, undefined, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return (x(true), [4, _.WaitAction.ms(p.UIConstants.coinsIndicator.updateDelay)])
                case 1:
                  return (t.sent(), C.emit(o.UIEvents.POPUP, { id: null }), n ? [4, n(e)] : [3, 3])
                case 2:
                  ;(t.sent(), (t.label = 3))
                case 3:
                  return [2]
              }
            })
          })
        )
      }
    return (0, r.jsxs)(
      "div",
      i.__assign(
        { className: (0, f.default)("popups") },
        {
          children: [
            (0, r.jsx)(
              "div",
              i.__assign(
                { className: (0, f.default)("coins-bar") },
                {
                  children: (0, r.jsx)(u.CoinsIndicator, {
                    className: (0, f.default)("coins-indicator", "coins-indicator_filled"),
                    total: v.cookie.coins,
                  }),
                },
              ),
            ),
            (0, r.jsx)(
              "div",
              i.__assign(
                { className: (0, f.default)("popup-share-level-completed") },
                {
                  children: (0, r.jsxs)(
                    "div",
                    i.__assign(
                      { className: (0, f.default)("popup", { invisible: w }) },
                      {
                        children: [
                          (0, r.jsx)(
                            "div",
                            i.__assign(
                              { className: "popup__title" },
                              {
                                children: (0, r.jsx)(
                                  "div",
                                  i.__assign(
                                    { className: "popup__title-detailed" },
                                    {
                                      children: g.Localize.get(
                                        "level_completed_message",
                                        "ALL STAGES COMPLETED!",
                                      ),
                                    },
                                  ),
                                ),
                              },
                            ),
                          ),
                          (0, r.jsxs)(
                            "div",
                            i.__assign(
                              { className: "popup__body" },
                              {
                                children: [
                                  (0, r.jsx)(c.Winner, { user: y.me }),
                                  (0, r.jsx)(d.WinRays, {}),
                                  (0, r.jsx)(h.WinStars, {}),
                                  (0, r.jsx)("img", {
                                    className: (0, f.default)("level-image"),
                                    src: T,
                                  }),
                                ],
                              },
                            ),
                          ),
                          (0, r.jsx)(o.ShareComponent, {
                            invisible: w || !t,
                            screenshot: t,
                            onShare: S,
                          }),
                          t && "" !== t
                            ? (0, r.jsx)(l.NoThanksButton, {
                                delay: p.UIConstants.popup.noThanksButtonDelay,
                                onClick: S,
                              })
                            : (0, r.jsx)(m.ContinueButton, { onClick: S }),
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
