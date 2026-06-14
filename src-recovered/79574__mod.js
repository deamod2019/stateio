/**
 * Webpack Module #79574
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.getComponentClass = t.getComponentId = void 0),
    (t.getComponentId = function (e, t) {
      return (void 0 === t && (t = !1), e.hasOwnProperty(n) ? e[n] : t ? (e[n] = i++) : void 0)
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
