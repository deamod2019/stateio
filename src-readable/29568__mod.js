/**
 * Webpack Module #29568
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  var i = n(66721) /* 66721__mod */
  function r(e) {
    var t = Math.min(e[0], e[2]),
      n = Math.max(e[0], e[2])
    if (e[1] > e[0] ? e[2] >= e[1] : e[2] <= e[1]) return [t, n]
    var i = (e[0] * e[2] - e[1] * e[1]) / (e[0] - 2 * e[1] + e[2])
    return i < t ? [i, n] : [t, i]
  }
  function o(e) {
    var t = e[0] - 3 * e[1] + 3 * e[2] - e[3]
    if (Math.abs(t) < 1e-8)
      return e[0] === e[3] && e[0] === e[1]
        ? [e[0], e[3]]
        : r([e[0], -0.5 * e[0] + 1.5 * e[1], e[0] - 3 * e[1] + 3 * e[2]])
    var n = -e[0] * e[2] + e[0] * e[3] - e[1] * e[2] - e[1] * e[3] + e[1] * e[1] + e[2] * e[2]
    if (n <= 0) return [Math.min(e[0], e[3]), Math.max(e[0], e[3])]
    for (
      var i = Math.sqrt(n),
        o = Math.min(e[0], e[3]),
        a = Math.max(e[0], e[3]),
        s = e[0] - 2 * e[1] + e[2],
        u = (s + i) / t,
        l = 1;
      l <= 2;
      u = (s - i) / t, l++
    )
      if (u > 0 && u < 1) {
        var c =
          e[0] * (1 - u) * (1 - u) * (1 - u) +
          3 * e[1] * (1 - u) * (1 - u) * u +
          3 * e[2] * (1 - u) * u * u +
          e[3] * u * u * u
        ;(c < o && (o = c), c > a && (a = c))
      }
    return [o, a]
  }
  t.default = function (e) {
    var t = [1 / 0, 1 / 0],
      n = [-1 / 0, -1 / 0]
    return (
      i(e)
        .abs()
        .unarc()
        .unshort()
        .iterate(function (e, i, a, s) {
          switch (e[0]) {
            case "M":
            case "L":
              ;(t[0] > e[1] && (t[0] = e[1]),
                t[1] > e[2] && (t[1] = e[2]),
                n[0] < e[1] && (n[0] = e[1]),
                n[1] < e[2] && (n[1] = e[2]))
              break
            case "V":
              ;(t[1] > e[1] && (t[1] = e[1]), n[1] < e[1] && (n[1] = e[1]))
              break
            case "H":
              ;(t[0] > e[1] && (t[0] = e[1]), n[0] < e[1] && (n[0] = e[1]))
              break
            case "C":
              var u = o([a, e[1], e[3], e[5]])
              ;(t[0] > u[0] && (t[0] = u[0]), n[0] < u[1] && (n[0] = u[1]))
              var l = o([s, e[2], e[4], e[6]])
              ;(t[1] > l[0] && (t[1] = l[0]), n[1] < l[1] && (n[1] = l[1]))
              break
            case "Q":
              var c = r([a, e[1], e[3]])
              ;(t[0] > c[0] && (t[0] = c[0]), n[0] < c[1] && (n[0] = c[1]))
              var d = r([s, e[2], e[4]])
              ;(t[1] > d[0] && (t[1] = d[0]), n[1] < d[1] && (n[1] = d[1]))
          }
        }, true),
      [t[0], t[1], n[0], n[1]]
    )
  }
}
