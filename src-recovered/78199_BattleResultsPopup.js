/**
 * Webpack Module #78199
 * @exports BattleResultsPopup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.BattleResultsPopup = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(86178),
    a = n(86125),
    s = n(83430),
    u = n(95781),
    l = n(53527),
    c = n(74083),
    d = n(32715),
    h = i.__importDefault(n(94184)),
    p = n(62482)
  n(21774)
  t.BattleResultsPopup = function (e) {
    var t = e.win,
      n = void 0 !== t && t,
      f = e.onContinue,
      _ = (0, s.useInjection)(o.TypesCore.dispatcher),
      g = (0, s.useInjection)(u.TypesGame.model),
      m = i.__read((0, s.visibilityEffect)(c.UIConstants.popup.startDelay), 1)[0],
      v = g.currentContinent.stageLevel - 1,
      y = g.currentContinent.data.id,
      C = function (e) {
        return (
          void 0 === e && (e = !0),
          i.__awaiter(void 0, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return (_.emit(s.UIEvents.POPUP, { id: null }), f ? [4, f(e)] : [3, 2])
                case 1:
                  ;(t.sent(), (t.label = 2))
                case 2:
                  return [2]
              }
            })
          })
        )
      }
    return (0, r.jsxs)(
      "div",
      i.__assign(
        { className: "popups" },
        {
          children: [
            (0, r.jsx)(
              "div",
              i.__assign(
                { className: (0, h.default)("coins-bar") },
                {
                  children: (0, r.jsx)(d.CoinsIndicator, {
                    className: (0, h.default)("coins-indicator", "coins-indicator_filled"),
                    total: g.cookie.coins,
                  }),
                },
              ),
            ),
            (0, r.jsx)(
              "div",
              i.__assign(
                { className: (0, h.default)("popup-battle-results") },
                {
                  children: (0, r.jsxs)(
                    "div",
                    i.__assign(
                      { className: (0, h.default)("popup", { invisible: m }) },
                      {
                        children: [
                          (0, r.jsxs)(
                            "div",
                            i.__assign(
                              { className: "popup__title" },
                              {
                                children: [
                                  a.Localize.get("ui-battle-battle_title", "Battle Results"),
                                  (0, r.jsxs)(
                                    "div",
                                    i.__assign(
                                      {
                                        className: (0, h.default)("popup__title-detailed", {
                                          "popup__title-detailed_lose": !n,
                                        }),
                                      },
                                      {
                                        children: [
                                          (0, r.jsxs)("span", { children: [y, " "] }),
                                          (0, r.jsx)("span", { children: " stage " }),
                                          "#".concat(n ? v + 1 : v + 2),
                                        ],
                                      },
                                    ),
                                  ),
                                ],
                              },
                            ),
                          ),
                          (0, r.jsx)(
                            "div",
                            i.__assign(
                              { className: "popup__body" },
                              {
                                children: (0, r.jsx)(p.BattleResults, {
                                  passedStage: v,
                                  isLevelFinished: g.currentContinent.isFinished,
                                }),
                              },
                            ),
                          ),
                          n
                            ? (0, r.jsx)(l.ContinueButton, {
                                onClick: function () {
                                  return C(!0)
                                },
                              })
                            : (0, r.jsx)(
                                s.Button,
                                i.__assign(
                                  {
                                    className: (0, h.default)("try-again-button", "btn-green"),
                                    onClick: function () {
                                      return C(!1)
                                    },
                                  },
                                  { children: a.Localize.get("ui-try-again-button", "TRY AGAIN") },
                                ),
                              ),
                        ],
                      },
                    ),
                  ),
                },
              ),
            ),
          ],
        },
      ),
    )
  }
}
