/**
 * Webpack Module #8189
 * @exports ShareLevelResultPopup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ShareLevelResultPopup = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(83430),
    a = n(95781),
    s = n(86178),
    u = n(32715),
    l = n(86602),
    c = n(56612),
    d = n(94571),
    h = n(57103),
    p = n(74083),
    f = i.__importDefault(n(94184))
  n(28130)
  var _ = n(44656),
    g = n(86125),
    m = n(53527)
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
          void 0 === e && (e = !1),
          i.__awaiter(void 0, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return (x(!0), [4, _.WaitAction.ms(p.UIConstants.coinsIndicator.updateDelay)])
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
