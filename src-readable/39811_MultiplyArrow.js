/**
 * Webpack Module #39811
 * @exports MultiplyArrow
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.MultiplyArrow = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(25317) /* 25317_SteppedEase */,
    a = n(30396) /* 30396__mod */,
    s = Math.PI / 2,
    u = (Math.PI / 180) * 73,
    l = [2, 3, 4, 3, 2],
    c = [0.15, 0.35, 0.62, 0.82]
  t.MultiplyArrow = function (e) {
    e.className
    var t = e.paused,
      n = undefined !== t && t,
      d = e.onPause,
      h = i.__read(
        (0, a.useState)(function () {
          return { paused: n, progress: 0 }
        }),
        2,
      ),
      p = h[0],
      f = h[1],
      _ = p.progress
    ;(0, a.useLayoutEffect)(
      function () {
        if (!n) {
          var e = { value: 0 }
          return (
            o.gsap.fromTo(
              e,
              { value: 0 },
              {
                value: 1,
                repeat: 1 / 0,
                yoyo: true,
                ease: "linear",
                onUpdate: function () {
                  return f(function (t) {
                    return i.__assign(i.__assign({}, t), { progress: e.value })
                  })
                },
              },
            ),
            function () {
              return o.gsap.killTweensOf(e)
            }
          )
        }
        if (d) {
          var t = (function (e) {
            undefined === e && (e = 0)
            var t = 0
            return (
              e > c[3]
                ? (t = 4)
                : e > c[2] && e <= c[3]
                  ? (t = 3)
                  : e > c[1] && e <= c[2]
                    ? (t = 2)
                    : e > c[0] && e <= c[1] && (t = 1),
              l[t]
            )
          })(_)
          d(t)
        }
      },
      [n],
    )
    var g = u * (_ - 0.5) - s,
      m = 118 + 190 * Math.cos(g),
      v = 200 + 160 * Math.sin(g)
    return (0, r.jsx)("div", {
      style: {
        transform: "translate("
          .concat(m, "px, ")
          .concat(v, "px) rotate(")
          .concat(g + s, "rad)"),
      },
      className: "multiply-arrow",
    })
  }
}
