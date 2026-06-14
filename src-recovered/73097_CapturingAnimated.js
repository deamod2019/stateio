/**
 * Webpack Module #73097
 * @exports CapturingAnimated
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.CapturingAnimated = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(25317),
    a = n(30396),
    s = n(10065)
  t.CapturingAnimated = function (e) {
    var t = e.from,
      n = e.to,
      u = e.total,
      l = e.startDelay,
      c = void 0 === l ? 1 : l,
      d = e.onAnimationComplete,
      h = i.__read((0, a.useState)({ captured: t / u, showGift: !1 }), 2),
      p = h[0],
      f = h[1]
    return (
      (0, a.useLayoutEffect)(
        function () {
          var e = { value: t / u }
          o.gsap.fromTo(e, e, {
            delay: c,
            duration: 1,
            value: n / u,
            ease: "sine.in",
            onUpdate: function () {
              f({ captured: e.value, showGift: !1 })
            },
            onComplete: d,
          })
        },
        [t, n],
      ),
      (0, r.jsx)(s.Capturing, { captured: p.captured, stages: u, showGift: p.showGift })
    )
  }
}
