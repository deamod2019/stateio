/**
 * Webpack Module #11748
 * @exports DebugPanelGamePlay
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.DebugPanelGamePlay = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(95781) /* 95781_TypesGame */,
    s = n(83430) /* 83430_InversifyContext */
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
                    return e.endStage(false)
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
                    return e.endStage(true)
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
                    return e.endStage(true, true)
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
