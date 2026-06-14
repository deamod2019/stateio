/**
 * Webpack Module #97586
 * @exports ShowGiftPopupAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ShowGiftPopupAction = void 0))
  var i = n(70655),
    r = n(84194),
    o = n(44656),
    a = n(86700),
    s = n(95781),
    u = n(94572),
    l = n(83430),
    c = n(30107),
    d = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, void 0, Promise, function () {
            var e,
              t = this
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    new Promise(function (e) {
                      var n,
                        i = {
                          captured: t.model.currentContinent.stageLevel,
                          total: t.model.currentContinent.totalStages,
                          reward:
                            null === (n = (0, o.lazyGet)(s.TypesGame.skinManager)) || void 0 === n
                              ? void 0
                              : n.getGift(),
                          onContinue: e,
                        }
                      t.dispatch(l.UIEvents.POPUP, { id: c.PopupType.GIFT, props: i })
                    }),
                  ]
                case 1:
                  return ((e = n.sent()), r.log.debug("giftWasCollected", e), [2])
              }
            })
          })
        }),
        i.__decorate(
          [
            (0, a.inject)(s.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (n = void 0 !== u.GameModel && u.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(o.Action)
  t.ShowGiftPopupAction = d
}
