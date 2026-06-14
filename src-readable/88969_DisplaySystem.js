/**
 * Webpack Module #88969
 * @exports DisplaySystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.DisplaySystem = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(75111) /* 75111__mod */,
    o = n(26630) /* 26630_Population */,
    a = n(91585) /* 91585_StateShapeView */,
    s = n(53351) /* 53351_CapitalView */,
    u = n(51006) /* 51006_TutorialFingerView */,
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
                null === (n = null == i ? undefined : i.parent) || undefined === n || n.removeChild(i)
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
