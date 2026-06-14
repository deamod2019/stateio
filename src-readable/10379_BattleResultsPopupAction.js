/**
 * Webpack Module #10379
 * @exports BattleResultsPopupAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.BattleResultsPopupAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(84194) /* 84194__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(95781) /* 95781_TypesGame */,
    u = n(94572) /* 94572_GameModel */,
    l = n(83430) /* 83430_InversifyContext */,
    c = n(30107) /* 30107_PopupType */,
    d = n(86178) /* 86178__mod */,
    h = n(48616) /* 48616__mod */,
    p = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, r
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return (
            undefined === e && (e = true),
            i.__awaiter(this, undefined, Promise, function () {
              var t,
                n = this
              return i.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (t) {
                        var i = { win: e, onContinue: t }
                        n.dispatch(l.UIEvents.POPUP, { id: c.PopupType.BATTLE_RESULTS, props: i })
                      }),
                    ]
                  case 1:
                    return ((t = i.sent()), o.log.debug("BattleResultsPopupAction shared", t), [2])
                }
              })
            })
          )
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
        i.__decorate(
          [
            (0, a.inject)(d.TypesSocial.model),
            i.__metadata(
              "design:type",
              "function" == typeof (r = undefined !== h.ISocial && h.ISocial) ? r : Object,
            ),
          ],
          t.prototype,
          "social",
          undefined,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(r.Action)
  t.BattleResultsPopupAction = p
}
