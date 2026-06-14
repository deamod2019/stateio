/**
 * Webpack Module #60097
 * @exports DebugPopup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.DebugPopup = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(44656),
    a = n(86178),
    s = n(83430),
    u = n(56792),
    l = n(95781),
    c = i.__importDefault(n(94184)),
    d = n(30396),
    h = n(64920)
  n(83296)
  var p = n(196)
  t.DebugPopup = function () {
    var e = i.__read((0, d.useState)({}), 2)[1],
      t = (0, s.useInjection)(l.TypesGame.model)
    return (0, r.jsx)(
      "div",
      i.__assign(
        {
          className: "popups",
          style: { width: "100%", height: "100%", background: "rgba(black, 0.5)" },
        },
        {
          children: (0, r.jsxs)(
            "div",
            i.__assign(
              { className: (0, c.default)("debug-popup") },
              {
                children: [
                  (0, r.jsx)(
                    "ul",
                    i.__assign(
                      { style: { color: "white" } },
                      {
                        children: Object.keys(u.CookieModelKey).map(function (e) {
                          return (0, r.jsxs)("li", {
                            children: [e, " ", (0, r.jsx)("b", { children: t.cookie.get(e) })],
                          })
                        }),
                      },
                    ),
                  ),
                  (0, r.jsx)(
                    s.Button,
                    i.__assign(
                      {
                        onClick: function () {
                          return o.di
                            .get(a.TypesCore.dispatcher)
                            .emit(s.UIEvents.POPUP, { id: null })
                        },
                      },
                      { children: "Close" },
                    ),
                  ),
                  (0, r.jsx)(
                    s.Button,
                    i.__assign(
                      {
                        onClick: function () {
                          ;(o.di.get(p.DestroyFieldAction).run(),
                            t.cookie.clear(),
                            t.currentContinent.buildings.clear(),
                            t.engine.removeAllEntities(),
                            o.di.get(a.TypesFlow.LevelStart).run(),
                            e({}))
                        },
                      },
                      { children: "Clear cookies" },
                    ),
                  ),
                  (0, r.jsx)(h.DebugPanel, {}),
                ],
              },
            ),
          ),
        },
      ),
    )
  }
}
