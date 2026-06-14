/**
 * Webpack Module #47665
 * @exports ShowWinPopupAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ShowWinPopupAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(83430),
    a = n(84194),
    s = n(94572),
    u = n(95781),
    l = n(86700),
    c = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, void 0, Promise, function () {
            var t,
              n = this
            return i.__generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return [
                    4,
                    new Promise(function (t) {
                      var r,
                        a = i.__assign(
                          {
                            coins: n.model.meta.getReward(),
                            scoreStage:
                              (null === (r = n.model.currentContinent) || void 0 === r
                                ? void 0
                                : r.getStageScore()) || 0,
                            onContinue: t,
                            showRewardAd: n.model.offerX3(),
                          },
                          e.props,
                        )
                      n.dispatch(o.UIEvents.POPUP, { id: e.id, props: a })
                    }),
                  ]
                case 1:
                  return ((t = r.sent()), a.log.debug("win reward collected", t), [2])
              }
            })
          })
        }),
        i.__decorate(
          [
            (0, l.inject)(u.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (n = void 0 !== s.GameModel && s.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        (t = i.__decorate([(0, l.injectable)()], t))
      )
    })(r.Action)
  t.ShowWinPopupAction = c
}
