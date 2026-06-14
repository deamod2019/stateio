/**
 * Webpack Module #79574
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.getComponentClass = t.getComponentId = undefined),
    (t.getComponentId = function (e, t) {
      return (undefined === t && (t = false), e.hasOwnProperty(n) ? e[n] : t ? (e[n] = i++) : undefined)
    }),
    (t.getComponentClass = function (e, t) {
      var n = Object.getPrototypeOf(e).constructor
      if (t) {
        if (!(e instanceof t || n === t))
          throw new Error("Resolve class should be an ancestor of component class")
        n = t
      }
      return n
    }))
  var n = "__componentClassId__",
    i = 1
}
