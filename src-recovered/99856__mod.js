/**
 * Webpack Module #99856
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  function n(e, t) {
    var n = "number" == typeof e ? e : e.width
    if (void 0 === t) return 0.5 * n
    var i = 0.5 * (n - ("number" == typeof t ? t : t.width))
    return (t.x = i)
  }
  function i(e, t) {
    var n = "number" == typeof e ? e : e.height
    if (void 0 === t) return 0.5 * n
    var i = 0.5 * (n - ("number" == typeof t ? t : t.height))
    return (t.y = i)
  }
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.aspectFill = t.aspectFit = t.centerHeight = t.centerWidth = t.centerSize = void 0),
    (t.centerSize = function (e, t) {
      return { x: n(e, t), y: i(e, t) }
    }),
    (t.centerWidth = n),
    (t.centerHeight = i),
    (t.aspectFit = function (e, t) {
      var n = t.width / e.width,
        i = t.height / e.height
      return (
        i < n
          ? (t.width = (t.height / e.height) * e.width)
          : n < i && (t.height = (t.width / e.width) * e.height),
        t
      )
    }),
    (t.aspectFill = function (e, t) {
      var n = e.width / e.scale.x,
        i = e.height / e.scale.y,
        r = t.width / n,
        o = t.height / i
      return (
        o > r
          ? ((e.width = (t.height / i) * n), (e.scale.y = e.scale.x))
          : r > o && ((e.height = (t.width / n) * i), (e.scale.x = e.scale.y)),
        e
      )
    }))
}
