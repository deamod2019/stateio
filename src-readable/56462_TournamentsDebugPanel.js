/**
 * Webpack Module #56462
 * @exports TournamentsDebugPanel
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.TournamentsDebugPanel = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */
  n(1245) /* 1245__mod */
  var o = n(30396) /* 30396__mod */,
    a = n(83430) /* 83430_InversifyContext */,
    s = n(43507) /* 43507_CreateTournamentFormDebug */,
    u = n(86178) /* 86178__mod */,
    l = n(44656) /* 44656__mod */,
    c = n(2719) /* 2719_ShareTournamentFormDebug */
  t.TournamentsDebugPanel = function () {
    var e = i.__read((0, o.useState)({ tournaments: [] }), 2),
      t = e[0],
      n = e[1]
    return (
      (0, o.useEffect)(function () {
        FBInstant.tournament.getTournamentsAsync().then(function (e) {
          n({ tournaments: e })
        })
      }, []),
      (0, r.jsx)(
        "div",
        i.__assign(
          {
            className: "popups",
            style: {
              width: "100%",
              height: "100%",
              paddingTop: "20px",
              background: "rgba(black, 0.5)",
            },
          },
          {
            children: (0, r.jsxs)(
              "div",
              i.__assign(
                { class: "debug-tournaments-popup" },
                {
                  children: [
                    "Tournaments",
                    (0, r.jsx)("ul", {
                      children: t.tournaments.map(function (e) {
                        return (0, r.jsxs)("li", {
                          children: [
                            "".concat(e.getID(), " ").concat(e.getTitle()),
                            (0, r.jsx)(
                              "a",
                              i.__assign(
                                {
                                  href: "#",
                                  onClick: function () {
                                    FBInstant.tournament
                                      .joinAsync("" + e.getID())
                                      .then(function () {})
                                  },
                                },
                                { children: "Join" },
                              ),
                            ),
                          ],
                        })
                      }),
                    }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)("hr", {}),
                    (0, r.jsx)(s.CreateTournamentFormDebug, {}),
                    (0, r.jsx)("hr", {}),
                    (0, r.jsx)(c.ShareTournamentFormDebug, {}),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(
                      a.Button,
                      i.__assign(
                        {
                          onClick: function () {
                            return l.di
                              .get(u.TypesCore.dispatcher)
                              .emit(a.UIEvents.POPUP, { id: null })
                          },
                        },
                        { children: "Close" },
                      ),
                    ),
                  ],
                },
              ),
            ),
          },
        ),
      )
    )
  }
}
