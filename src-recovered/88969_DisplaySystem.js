/**
 * Webpack Module #88969
 * @exports DisplaySystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.DisplaySystem = void 0))
  var i = n(70655),
    r = n(75111),
    o = n(26630),
    a = n(91585),
    s = n(53351),
    u = n(51006),
    l = (function (e) {
      function t(t) {
        var n =
          e.call(this, function (e) {
            return e.hasAny(o.Population, a.StateShapeView, s.CapitalView, u.TutorialFingerView)
          }) || this
        return (
          (n.fieldView = t),
          (n.entityAdded = function (e) {
            var t = e.current,
              i = t.get(o.Population),
              r = t.get(a.StateShapeView),
              l = t.get(s.CapitalView),
              c = t.get(u.TutorialFingerView)
            ;(i && n.fieldView.labels.addChild(i),
              r && n.fieldView.shapes.addChild(r),
              l && n.fieldView.capitals.addChild(l),
              c && n.fieldView.addChild(c))
          }),
          (n.entityRemoved = function (e) {
            var t = e.previous
            ;[o.Population, a.StateShapeView, s.CapitalView, u.TutorialFingerView].forEach(
              function (e) {
                var n,
                  i = t.get(e)
                null === (n = null == i ? void 0 : i.parent) || void 0 === n || n.removeChild(i)
              },
            )
          }),
          n
        )
      }
      return (i.__extends(t, e), t)
    })(r.ReactionSystem)
  t.DisplaySystem = l
}
