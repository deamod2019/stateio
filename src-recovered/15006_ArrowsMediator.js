/**
 * Webpack Module #15006
 * @exports ArrowsMediator
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ArrowsMediator = void 0))
  var i = n(70655),
    r = n(55132),
    o = n(86700),
    a = n(47283),
    s = n(94572),
    u = n(95781),
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.initialize = function () {
          var e = this
          ;(this.addListener(a.GameEvents.AIM_UPDATE, function (t) {
            return e.view.update(t)
          }),
            this.addListener(a.GameEvents.AIM_CREATE, function (t) {
              return e.view.createArrow(t)
            }),
            this.addListener(a.GameEvents.AIM_REMOVE, function () {
              return e.view.removeAim()
            }),
            this.addListener(a.GameEvents.AIM_SET, function (t) {
              return e.view.setAim(t)
            }),
            this.addListener(a.GameEvents.AIM_HIDE, function (t) {
              return e.view.hideArrow(t)
            }))
        }),
        i.__decorate(
          [
            (0, o.inject)(u.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (n = void 0 !== s.GameModel && s.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.Mediator)
  t.ArrowsMediator = l
}
