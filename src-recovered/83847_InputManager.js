/**
 * Webpack Module #83847
 * @exports InputManager
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.InputManager = void 0))
  var i = n(70655),
    r = n(81717),
    o = n(86700),
    a = n(94572),
    s = n(95781),
    u = n(47572),
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.onCancel = function (e) {
          var t
          null === (t = this.inputSystem) || void 0 === t || t.onCancel(e)
        }),
        (t.prototype.onStart = function (e) {
          var t
          ;(this.model.cancelTutorial(),
            null === (t = this.inputSystem) || void 0 === t || t.onStart(e))
        }),
        (t.prototype.onDrag = function (e) {
          var t
          null === (t = this.inputSystem) || void 0 === t || t.onDrag(e)
        }),
        (t.prototype.onEnd = function (e) {
          var t
          null === (t = this.inputSystem) || void 0 === t || t.onEnd(e)
        }),
        Object.defineProperty(t.prototype, "inputSystem", {
          get: function () {
            return this.model.engine.getSystem(u.InputSystem)
          },
          enumerable: !1,
          configurable: !0,
        }),
        i.__decorate(
          [
            (0, o.inject)(s.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (n = void 0 !== a.GameModel && a.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.InputManagerBase)
  t.InputManager = l
}
