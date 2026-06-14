/**
 * Webpack Module #3207
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.tickup = undefined))
  var i = n(25317) /* 25317_SteppedEase */
  t.tickup = function (e, t, n, r) {
    undefined === n && (n = 1e3)
    var o = { value: e }
    return (
      i.gsap.fromTo(o, o, {
        duration: 0.001 * n,
        value: t,
        ease: "linear",
        onUpdate: function () {
          return r(o.value)
        },
      }),
      function () {
        return i.gsap.killTweensOf(o)
      }
    )
  }
}
