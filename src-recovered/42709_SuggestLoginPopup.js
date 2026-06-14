/**
 * Webpack Module #42709
 * @exports SuggestLoginPopup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.SuggestLoginPopup = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(86125),
    a = n(74083),
    s = i.__importDefault(n(94184)),
    u = n(83430)
  n(85525)
  var l = n(86602),
    c = n(83430),
    d = n(86178),
    h = n(86178),
    p = n(30396),
    f = n(86178),
    _ = n(95781),
    g = n(44656),
    m = n(75663)
  t.SuggestLoginPopup = function (e) {
    var t = e.loginResolve,
      n = (0, c.useInjection)(d.TypesCore.dispatcher),
      v = (0, c.useInjection)(_.TypesGame.cookieModel),
      y = i.__read((0, u.visibilityEffect)(a.UIConstants.popup.startDelay), 2),
      C = y[0],
      b = y[1],
      w = (0, c.useInjection)(f.TypesSocial.model),
      x = i.__read((0, p.useState)(!1), 2),
      T = x[0],
      S = x[1],
      L = function () {
        return i.__awaiter(void 0, void 0, void 0, function () {
          return i.__generator(this, function (e) {
            return (b(!0), n.emit(h.TypesUI.events.POPUP, { id: null }), [2])
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
                                        showIcom: !1,
                                        onClick: function () {
                                          return i.__awaiter(void 0, void 0, void 0, function () {
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
                                                          )) || void 0 === n
                                                          ? void 0
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
