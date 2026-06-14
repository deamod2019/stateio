/**
 * Webpack Module #52279
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  var i =
    (this && this.__spreadArray) ||
    function (e, t) {
      for (var n = 0, i = t.length, r = e.length; n < i; n++, r++) e[r] = t[n]
      return e
    }
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.resolveInstance = void 0))
  var r = n(16674),
    o = n(28421),
    a = n(6867)
  t.resolveInstance = function (e, t, n) {
    var s,
      u,
      l = null
    if (t.length > 0) {
      var c = t
        .filter(function (e) {
          return null !== e.target && e.target.type === o.TargetTypeEnum.ConstructorArgument
        })
        .map(n)
      ;((u = c),
        (l = (function (e, t, n) {
          var i = t.filter(function (e) {
              return null !== e.target && e.target.type === o.TargetTypeEnum.ClassProperty
            }),
            r = i.map(n)
          return (
            i.forEach(function (t, n) {
              var i
              i = t.target.name.value()
              var o = r[n]
              e[i] = o
            }),
            e
          )
        })((l = new ((s = e).bind.apply(s, i([void 0], u)))()), t, n)))
    } else l = new e()
    return (
      (function (e, t) {
        if (Reflect.hasMetadata(a.POST_CONSTRUCT, e)) {
          var n = Reflect.getMetadata(a.POST_CONSTRUCT, e)
          try {
            t[n.value]()
          } catch (t) {
            throw new Error(r.POST_CONSTRUCT_ERROR(e.name, t.message))
          }
        }
      })(e, l),
      l
    )
  }
}
