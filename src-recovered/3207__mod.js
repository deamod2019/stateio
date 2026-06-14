/**
 * Webpack Module #3207
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.tickup = void 0))
  var i = n(25317)
  t.tickup = function (e, t, n, r) {
    void 0 === n && (n = 1e3)
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
