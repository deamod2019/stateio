/**
 * Webpack Module #83847
 * @exports InputManager
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.InputManager = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(81717) /* 81717_InputManagerBase */,
    o = n(86700) /* 86700_MetadataReader */,
    a = n(94572) /* 94572_GameModel */,
    s = n(95781) /* 95781_TypesGame */,
    u = n(47572) /* 47572_InputSystem */,
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.onCancel = function (e) {
          var t
          null === (t = this.inputSystem) || undefined === t || t.onCancel(e)
        }),
        (t.prototype.onStart = function (e) {
          var t
          ;(this.model.cancelTutorial(),
            null === (t = this.inputSystem) || undefined === t || t.onStart(e))
        }),
        (t.prototype.onDrag = function (e) {
          var t
          null === (t = this.inputSystem) || undefined === t || t.onDrag(e)
        }),
        (t.prototype.onEnd = function (e) {
          var t
          null === (t = this.inputSystem) || undefined === t || t.onEnd(e)
        }),
        Object.defineProperty(t.prototype, "inputSystem", {
          get: function () {
            return this.model.engine.getSystem(u.InputSystem)
          },
          enumerable: false,
          configurable: true,
        }),
        i.__decorate(
          [
            (0, o.inject)(s.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (n = undefined !== a.GameModel && a.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          undefined,
        ),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.InputManagerBase)
  t.InputManager = l
}
