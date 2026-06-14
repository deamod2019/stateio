/**
 * Webpack Module #95622
 * @exports GamePlayScreen
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.GamePlayScreen = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(95781) /* 95781_TypesGame */,
    s = n(7161) /* 7161_BackButton */,
    u = n(52951) /* 52951_ProgressBar */,
    l = i.__importDefault(n(94184) /* 94184__mod */)
  n(11748) /* 11748_DebugPanelGamePlay */
  n(14936) /* 14936__mod */
  t.GamePlayScreen = function (e) {
    return (0, r.jsxs)(
      "div",
      i.__assign(
        { className: (0, l.default)("screen", "screen__game-play") },
        {
          children: [
            (0, r.jsx)(
              "div",
              i.__assign(
                { className: (0, l.default)("container", "back-btn") },
                {
                  children: (0, r.jsx)(s.BackButton, {
                    onClick: function () {
                      return o.di.get(a.TypesGame.model).exitTheGame()
                    },
                  }),
                },
              ),
            ),
            (0, r.jsx)(
              "div",
              i.__assign(
                { className: "container" },
                { children: (0, r.jsx)(u.ProgressBar, { participants: e.participants }) },
              ),
            ),
            null,
          ],
        },
      ),
    )
  }
}
