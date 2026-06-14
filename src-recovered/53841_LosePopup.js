/**
 * Webpack Module #53841
 * @exports LosePopup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LosePopup = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(86178),
    a = n(86125),
    s = n(44656),
    u = n(83430),
    l = n(95781),
    c = n(32715),
    d = n(49071),
    h = n(53527),
    p = n(74083),
    f = i.__importDefault(n(94184)),
    _ = n(30396),
    g = n(36622)
  n(52388)
  t.LosePopup = function (e) {
    var t = e.animationEnabled,
      n = void 0 === t || t,
      m = e.coins,
      v = void 0 === m ? 999 : m,
      y = (0, u.useInjection)(l.TypesGame.model),
      C = (0, u.useInjection)(o.TypesCore.dispatcher),
      b = { startCoinsTotal: y.cookie.coins, reward: v, visible: !1 },
      w = p.UIConstants.coinsIndicator.updateDelay,
      x = i.__read(
        (0, _.useState)(function () {
          return b
        }),
        2,
      ),
      T = x[0],
      S = x[1]
    ;(0, _.useEffect)(function () {
      var e = setTimeout(function () {
        return S(function (e) {
          return i.__assign(i.__assign({}, e), { visible: !0 })
        })
      }, p.UIConstants.popup.startDelay)
      return function () {
        clearTimeout(e)
      }
    }, [])
    var L = function (e) {
      y.cookie.coins += e
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
                { className: (0, f.default)("coins-bar") },
                {
                  children: (0, r.jsx)(c.CoinsIndicator, {
                    className: (0, f.default)("coins-indicator", "coins-indicator_filled"),
                    total: T.startCoinsTotal,
                  }),
                },
              ),
            ),
            (0, r.jsx)(
              "div",
              i.__assign(
                { className: "popup-lose" },
                {
                  children: (0, r.jsxs)(
                    "div",
                    i.__assign(
                      { className: (0, f.default)("popup", { visible: T.visible }) },
                      {
                        children: [
                          (0, r.jsx)(
                            "div",
                            i.__assign(
                              { className: "popup__title" },
                              { children: a.Localize.get("ui-lose-lose_label", "YOU LOSE") },
                            ),
                          ),
                          n
                            ? (0, r.jsx)(
                                "div",
                                i.__assign(
                                  { className: "popup__main-animation" },
                                  { children: (0, r.jsx)(g.SVG.PopupLose, {}) },
                                ),
                              )
                            : null,
                          (0, r.jsx)(
                            "div",
                            i.__assign(
                              { className: "popup__body" },
                              {
                                children: (0, r.jsx)(d.PopupWinIndicator, {
                                  className: (0, f.default)(
                                    "coins-indicator",
                                    "coins-indicator_internal",
                                  ),
                                  total: T.reward,
                                }),
                              },
                            ),
                          ),
                          (0, r.jsx)(h.ContinueButton, {
                            onClick: function () {
                              return i.__awaiter(void 0, void 0, void 0, function () {
                                var e
                                return i.__generator(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return [
                                        4,
                                        i.__awaiter(void 0, void 0, void 0, function () {
                                          return i.__generator(this, function (e) {
                                            switch (e.label) {
                                              case 0:
                                                return (L(T.reward), [4, s.WaitAction.ms(w)])
                                              case 1:
                                                return (
                                                  e.sent(),
                                                  C.emit(u.UIEvents.POPUP, { id: null }),
                                                  [2]
                                                )
                                            }
                                          })
                                        }),
                                      ]
                                    case 1:
                                      return (
                                        t.sent(),
                                        null === (e = (0, s.lazyGet)(o.TypesFlow.LevelNext)) ||
                                          void 0 === e ||
                                          e.run(),
                                        [2]
                                      )
                                  }
                                })
                              })
                            },
                          }),
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
