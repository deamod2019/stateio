/**
 * Webpack Module #80219
 * @exports ArrowsView
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ArrowsView = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(55132) /* 55132__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(95781) /* 95781_TypesGame */,
    s = n(86700) /* 86700_MetadataReader */,
    u = n(6538) /* 6538_SIDES */,
    l = n(83847) /* 83847_InputManager */,
    c = n(53351) /* 53351_CapitalView */,
    d = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t._arrows = new Map()), t)
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.createArrow = function (e) {
          var t = e.get(c.CapitalView)
          if (t) {
            var n = o.di.get(a.TypesGame.views.arrow)
            ;((n.position = t.position.clone()), this.addChild(n), this._arrows.set(e.stateId, n))
          }
        }),
        (t.prototype.hideArrow = function (e) {
          var t,
            n = this._arrows.get(e.stateId)
          ;(null === (t = null == n ? undefined : n.parent) || undefined === t || t.removeChild(n),
            this._arrows.delete(e.stateId))
        }),
        (t.prototype.removeAim = function () {
          ;((this._priorTarget = null),
            this._arrows.forEach(function (e) {
              var t
              return null === (t = e.parent) || undefined === t ? undefined : t.removeChild(e)
            }),
            this._arrows.clear())
        }),
        (t.prototype.setAim = function (e) {
          this._priorTarget = e
        }),
        (t.prototype.update = function (e) {
          this._arrows.size > 0 &&
            this.setArrows(this._priorTarget || new u.Point(e.clientX, e.clientY))
        }),
        (t.prototype.setArrows = function (e) {
          this._arrows.forEach(function (t) {
            return t.setUpDirection(e)
          })
        }),
        i.__decorate(
          [
            (0, s.inject)(a.TypesGame.inputManager),
            i.__metadata(
              "design:type",
              "function" == typeof (n = undefined !== l.InputManager && l.InputManager) ? n : Object,
            ),
          ],
          t.prototype,
          "inputManager",
          undefined,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(r.View)
  t.ArrowsView = d
}
