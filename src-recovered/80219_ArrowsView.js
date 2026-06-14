/**
 * Webpack Module #80219
 * @exports ArrowsView
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ArrowsView = void 0))
  var i = n(70655),
    r = n(55132),
    o = n(44656),
    a = n(95781),
    s = n(86700),
    u = n(6538),
    l = n(83847),
    c = n(53351),
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
          ;(null === (t = null == n ? void 0 : n.parent) || void 0 === t || t.removeChild(n),
            this._arrows.delete(e.stateId))
        }),
        (t.prototype.removeAim = function () {
          ;((this._priorTarget = null),
            this._arrows.forEach(function (e) {
              var t
              return null === (t = e.parent) || void 0 === t ? void 0 : t.removeChild(e)
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
              "function" == typeof (n = void 0 !== l.InputManager && l.InputManager) ? n : Object,
            ),
          ],
          t.prototype,
          "inputManager",
          void 0,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(r.View)
  t.ArrowsView = d
}
