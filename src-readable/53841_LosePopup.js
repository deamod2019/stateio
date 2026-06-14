/**
 * Webpack Module #53841
 * @exports LosePopup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LosePopup = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(86125) /* 86125__mod */,
    s = n(44656) /* 44656__mod */,
    u = n(83430) /* 83430_InversifyContext */,
    l = n(95781) /* 95781_TypesGame */,
    c = n(32715) /* 32715_CoinsIndicator */,
    d = n(49071) /* 49071_PopupWinIndicator */,
    h = n(53527) /* 53527_ContinueButton */,
    p = n(74083) /* 74083_UIConstants */,
    f = i.__importDefault(n(94184) /* 94184__mod */),
    _ = n(30396) /* 30396__mod */,
    g = n(36622) /* 36622_SVG */
  n(52388) /* 52388__mod */
  t.LosePopup = function (e) {
    var t = e.animationEnabled,
      n = undefined === t || t,
      m = e.coins,
      v = undefined === m ? 999 : m,
      y = (0, u.useInjection)(l.TypesGame.model),
      C = (0, u.useInjection)(o.TypesCore.dispatcher),
      b = { startCoinsTotal: y.cookie.coins, reward: v, visible: false },
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
          return i.__assign(i.__assign({}, e), { visible: true })
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
                              return i.__awaiter(undefined, undefined, undefined, function () {
                                var e
                                return i.__generator(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return [
                                        4,
                                        i.__awaiter(undefined, undefined, undefined, function () {
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
                                          undefined === e ||
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
