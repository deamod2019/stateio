/**
 * Webpack Module #11748
 * @exports DebugPanelGamePlay
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.DebugPanelGamePlay = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(44656),
    a = n(95781),
    s = n(83430)
  t.DebugPanelGamePlay = function () {
    var e = (0, s.useInjection)(a.TypesGame.model)
    return (0, r.jsxs)(
      "div",
      i.__assign(
        {
          style:
            "pointer-events: auto; position: absolute; right: 10px; bottom: 80px; display: flex; flex-direction: column;",
        },
        {
          children: [
            (0, r.jsx)("span", { children: o.di.get(a.TypesGame.model).currentContinent.data.id }),
            (0, r.jsx)(
              "button",
              i.__assign(
                {
                  onClick: function () {
                    return e.endStage(!1)
                  },
                },
                { children: "Loose" },
              ),
            ),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(
              "button",
              i.__assign(
                {
                  onClick: function () {
                    return e.endStage(!0)
                  },
                },
                { children: "Win Stage" },
              ),
            ),
            (0, r.jsx)(
              "button",
              i.__assign(
                {
                  onClick: function () {
                    return e.endStage(!0, !0)
                  },
                },
                { children: "Win Level" },
              ),
            ),
          ],
        },
      ),
    )
  }
}
