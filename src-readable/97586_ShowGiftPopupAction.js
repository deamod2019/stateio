/**
 * Webpack Module #97586
 * @exports ShowGiftPopupAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ShowGiftPopupAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(84194) /* 84194__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(95781) /* 95781_TypesGame */,
    u = n(94572) /* 94572_GameModel */,
    l = n(83430) /* 83430_InversifyContext */,
    c = n(30107) /* 30107_PopupType */,
    d = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, undefined, Promise, function () {
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
                            null === (n = (0, o.lazyGet)(s.TypesGame.skinManager)) || undefined === n
                              ? undefined
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
              "function" == typeof (n = undefined !== u.GameModel && u.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          undefined,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(o.Action)
  t.ShowGiftPopupAction = d
}
