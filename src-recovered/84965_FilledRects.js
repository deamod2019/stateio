/**
 * Webpack Module #84965
 * @exports FilledRects
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.FilledRects = void 0))
  var i = n(16584)
  t.FilledRects = function (e) {
    var t = e.stages,
      n = e.fill,
      r = e.width,
      o = e.height,
      a = e.pad,
      s = e.gap,
      u = (r - 2 * a - s * (t + 1)) / t,
      l = o - 2 * a,
      c = new Array(t).fill(null)
    return (0, i.jsx)(i.Fragment, {
      children: c.map(function (e, t) {
        return (0, i.jsx)("rect", {
          x: a + s + (u + s) * t,
          y: a,
          fill: n,
          width: u,
          height: l,
          rx: l / 2,
        })
      }),
    })
  }
}
