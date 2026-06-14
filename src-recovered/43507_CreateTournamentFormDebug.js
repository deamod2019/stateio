/**
 * Webpack Module #43507
 * @exports CreateTournamentFormDebug
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.CreateTournamentFormDebug = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(44656),
    a = n(30396),
    s = n(95781)
  t.CreateTournamentFormDebug = function () {
    var e = i.__read((0, a.useState)({ title: "", initialScore: 0 }), 2),
      t = e[0],
      n = e[1]
    return (0, r.jsxs)("form", {
      children: [
        (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("label", i.__assign({ for: "iscore" }, { children: "Initial score:" })),
            (0, r.jsx)("input", {
              type: "text",
              id: "iscore",
              name: "iscore",
              value: t.initialScore,
              onChange: function (e) {
                return n(
                  i.__assign(i.__assign({}, t), {
                    initialScore: parseInt(e.currentTarget.value || 0),
                  }),
                )
              },
            }),
          ],
        }),
        (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("label", i.__assign({ for: "ttitle" }, { children: "Title:" })),
            (0, r.jsx)("input", {
              type: "text",
              id: "ttitle",
              name: "ttitle",
              onChange: function (e) {
                return n(i.__assign(i.__assign({}, t), { title: e.currentTarget.value || 0 }))
              },
            }),
          ],
        }),
        (0, r.jsx)(
          "a",
          i.__assign(
            {
              href: "#",
              onClick: function () {
                return o.di.get(s.TypesGame.actions.tournamentCreate).run()
              },
            },
            { children: "Create tournament" },
          ),
        ),
      ],
    })
  }
}
