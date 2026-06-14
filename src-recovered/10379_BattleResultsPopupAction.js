/**
 * Webpack Module #10379
 * @exports BattleResultsPopupAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.BattleResultsPopupAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(84194),
    a = n(86700),
    s = n(95781),
    u = n(94572),
    l = n(83430),
    c = n(30107),
    d = n(86178),
    h = n(48616),
    p = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, r
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return (
            void 0 === e && (e = !0),
            i.__awaiter(this, void 0, Promise, function () {
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
              "function" == typeof (n = void 0 !== u.GameModel && u.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        i.__decorate(
          [
            (0, a.inject)(d.TypesSocial.model),
            i.__metadata(
              "design:type",
              "function" == typeof (r = void 0 !== h.ISocial && h.ISocial) ? r : Object,
            ),
          ],
          t.prototype,
          "social",
          void 0,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(r.Action)
  t.BattleResultsPopupAction = p
}
