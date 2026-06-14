/**
 * Webpack Module #95622
 * @exports GamePlayScreen
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.GamePlayScreen = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(44656),
    a = n(95781),
    s = n(7161),
    u = n(52951),
    l = i.__importDefault(n(94184))
  n(11748)
  n(14936)
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
