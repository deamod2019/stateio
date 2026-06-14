/**
 * Webpack Module #42709
 * @exports SuggestLoginPopup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.SuggestLoginPopup = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(86125) /* 86125__mod */,
    a = n(74083) /* 74083_UIConstants */,
    s = i.__importDefault(n(94184) /* 94184__mod */),
    u = n(83430) /* 83430_InversifyContext */
  n(85525) /* 85525__mod */
  var l = n(86602) /* 86602_NoThanksButton */,
    c = n(83430) /* 83430_InversifyContext */,
    d = n(86178) /* 86178__mod */,
    h = n(86178) /* 86178__mod */,
    p = n(30396) /* 30396__mod */,
    f = n(86178) /* 86178__mod */,
    _ = n(95781) /* 95781_TypesGame */,
    g = n(44656) /* 44656__mod */,
    m = n(75663) /* 75663_ClaimButton */
  t.SuggestLoginPopup = function (e) {
    var t = e.loginResolve,
      n = (0, c.useInjection)(d.TypesCore.dispatcher),
      v = (0, c.useInjection)(_.TypesGame.cookieModel),
      y = i.__read((0, u.visibilityEffect)(a.UIConstants.popup.startDelay), 2),
      C = y[0],
      b = y[1],
      w = (0, c.useInjection)(f.TypesSocial.model),
      x = i.__read((0, p.useState)(false), 2),
      T = x[0],
      S = x[1],
      L = function () {
        return i.__awaiter(undefined, undefined, undefined, function () {
          return i.__generator(this, function (e) {
            return (b(true), n.emit(h.TypesUI.events.POPUP, { id: null }), [2])
          })
        })
      }
    return (0, r.jsx)(
      "div",
      i.__assign(
        { className: "popups" },
        {
          children: (0, r.jsx)(
            "div",
            i.__assign(
              { className: (0, s.default)("popup-login") },
              {
                children: (0, r.jsxs)(
                  "div",
                  i.__assign(
                    { className: (0, s.default)("popup", { invisible: C }) },
                    {
                      children: [
                        (0, r.jsxs)(
                          "div",
                          i.__assign(
                            { className: "popup__body" },
                            {
                              children: [
                                (0, r.jsx)(
                                  "div",
                                  i.__assign(
                                    { className: "popup-login-text" },
                                    {
                                      children: o.Localize.get(
                                        "game_login_text",
                                        "Log in to compete with others.",
                                      ),
                                    },
                                  ),
                                ),
                                (0, r.jsx)("div", {
                                  children: T
                                    ? null
                                    : (0, r.jsx)(m.ClaimButton, {
                                        showIcom: false,
                                        onClick: function () {
                                          return i.__awaiter(undefined, undefined, undefined, function () {
                                            var e, n
                                            return i.__generator(this, function (i) {
                                              switch (i.label) {
                                                case 0:
                                                  return w.authorizeUser
                                                    ? [4, w.authorizeUser()]
                                                    : [3, 5]
                                                case 1:
                                                  return (e = i.sent()) &&
                                                    v.syncAfterAuthStateChange
                                                    ? [4, v.syncAfterAuthStateChange()]
                                                    : [3, 4]
                                                case 2:
                                                  return i.sent()
                                                    ? [
                                                        4,
                                                        null ===
                                                          (n = (0, g.lazyGet)(
                                                            _.TypesGame.actions
                                                              .levelRestartAfterYandexLoginAction,
                                                          )) || undefined === n
                                                          ? undefined
                                                          : n.run(),
                                                      ]
                                                    : [3, 4]
                                                case 3:
                                                  ;(i.sent(), (i.label = 4))
                                                case 4:
                                                  ;(S(e), t(e), e && L(), (i.label = 5))
                                                case 5:
                                                  return [2]
                                              }
                                            })
                                          })
                                        },
                                        text: o.Localize.get("game_login_btn", "Login"),
                                      }),
                                }),
                              ],
                            },
                          ),
                        ),
                        (0, r.jsx)(l.NoThanksButton, { delay: 100, onClick: L }),
                      ],
                    },
                  ),
                ),
              },
            ),
          ),
        },
      ),
    )
  }
}
