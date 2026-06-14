/**
 * Webpack Module #69080
 * @exports UserStatusInfo
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.UserStatusInfo = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = i.__importDefault(n(94184) /* 94184__mod */),
    a = n(83430) /* 83430_InversifyContext */,
    s = n(86178) /* 86178__mod */
  n(58319) /* 58319__mod */
  var u = n(86125) /* 86125__mod */
  t.UserStatusInfo = function (e) {
    var t = e.className,
      n = e.authorized,
      l = e.onLogin
    ;(0, a.useInjection)(s.TypesSocial.model)
    return (0, r.jsx)(
      "div",
      i.__assign(
        { className: (0, o.default)("user-status-info", t, { authorized: n }) },
        {
          children: n
            ? null
            : (0, r.jsxs)(
                "p",
                i.__assign(
                  { className: "user-status-info-alert" },
                  {
                    children: [
                      u.Localize.get(
                        "game_login_text",
                        "Log in to compete with others and guaranteed to save progress.",
                      ),
                      (0, r.jsx)(
                        "button",
                        i.__assign(
                          {
                            className: (0, o.default)("login-btn", "btn"),
                            type: "button",
                            onClick: function () {
                              l && l()
                            },
                          },
                          { children: u.Localize.get("game_login_btn", "Login") },
                        ),
                      ),
                    ],
                  },
                ),
              ),
        },
      ),
    )
  }
}
