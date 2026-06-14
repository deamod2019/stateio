/**
 * Webpack Module #2719
 * @exports ShareTournamentFormDebug
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ShareTournamentFormDebug = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(84194) /* 84194__mod */,
    a = n(30396) /* 30396__mod */
  t.ShareTournamentFormDebug = function () {
    var e = i.__read((0, a.useState)({ data: undefined, score: 0 }), 2),
      t = e[0],
      n = e[1]
    return (0, r.jsxs)("form", {
      children: [
        (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("label", i.__assign({ for: "iscore" }, { children: "Score:" })),
            (0, r.jsx)("input", {
              type: "text",
              id: "iscore",
              name: "iscore",
              value: t.score,
              onChange: function (e) {
                return n(
                  i.__assign(i.__assign({}, t), { score: parseInt(e.currentTarget.value || 0) }),
                )
              },
            }),
          ],
        }),
        (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("label", i.__assign({ for: "ttitle" }, { children: "Data (JSON):" })),
            (0, r.jsx)("input", {
              type: "text",
              id: "ttitle",
              name: "ttitle",
              onChange: function (e) {
                return n(i.__assign(i.__assign({}, t), { data: e.currentTarget.value || 0 }))
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
                return FBInstant.tournament
                  .shareAsync(t)
                  .then(function (e) {})
                  .catch(o.log.error)
              },
            },
            { children: "Update" },
          ),
        ),
      ],
    })
  }
}
