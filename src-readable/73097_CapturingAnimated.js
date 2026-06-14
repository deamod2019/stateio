/**
 * Webpack Module #73097
 * @exports CapturingAnimated
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.CapturingAnimated = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(25317) /* 25317_SteppedEase */,
    a = n(30396) /* 30396__mod */,
    s = n(10065) /* 10065_Capturing */
  t.CapturingAnimated = function (e) {
    var t = e.from,
      n = e.to,
      u = e.total,
      l = e.startDelay,
      c = undefined === l ? 1 : l,
      d = e.onAnimationComplete,
      h = i.__read((0, a.useState)({ captured: t / u, showGift: false }), 2),
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
              f({ captured: e.value, showGift: false })
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
