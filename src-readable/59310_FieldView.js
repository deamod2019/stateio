/**
 * Webpack Module #59310
 * @exports FieldView
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.FieldView = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(55132) /* 55132__mod */,
    o = n(95781) /* 95781_TypesGame */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(6538) /* 6538_SIDES */,
    u = n(80219) /* 80219_ArrowsView */,
    l = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (
          (t.labels = new s.Container()),
          (t.map = new s.Container()),
          (t.capitals = new s.Container()),
          (t.fighters = new s.Container()),
          (t.shapes = new r.View()),
          t
        )
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.onAdded = function () {
          ;(this.addChild(this.map),
            this.map.addChild(this.shapes),
            this.map.addChild(this.fighters),
            this.map.addChild(this.capitals),
            this.map.addChild(this.labels),
            this.addChild(this.arrows),
            e.prototype.onAdded.call(this))
        }),
        i.__decorate(
          [
            (0, a.inject)(o.TypesGame.views.arrows),
            i.__metadata(
              "design:type",
              "function" == typeof (n = undefined !== u.ArrowsView && u.ArrowsView) ? n : Object,
            ),
          ],
          t.prototype,
          "arrows",
          undefined,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(r.View)
  t.FieldView = l
}
