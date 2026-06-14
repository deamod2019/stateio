/**
 * Webpack Module #72921
 * (barrel / re‑export module)
 */
// (e/*module*/) =>
{
  ;("use strict")
  var t = 2 * Math.PI
  function n(e, t, n, i) {
    var r = e * n + t * i
    return (r > 1 && (r = 1), r < -1 && (r = -1), (e * i - t * n < 0 ? -1 : 1) * Math.acos(r))
  }
  function i(e, t) {
    var n = (4 / 3) * Math.tan(t / 4),
      i = Math.cos(e),
      r = Math.sin(e),
      o = Math.cos(e + t),
      a = Math.sin(e + t)
    return [i, r, i - r * n, r + i * n, o + a * n, a - o * n, o, a]
  }
  e.exports = function (e, r, o, a, s, u, l, c, d) {
    var h = Math.sin((d * t) / 360),
      p = Math.cos((d * t) / 360),
      f = (p * (e - o)) / 2 + (h * (r - a)) / 2,
      _ = (-h * (e - o)) / 2 + (p * (r - a)) / 2
    if (0 === f && 0 === _) return []
    if (0 === l || 0 === c) return []
    ;((l = Math.abs(l)), (c = Math.abs(c)))
    var g = (f * f) / (l * l) + (_ * _) / (c * c)
    g > 1 && ((l *= Math.sqrt(g)), (c *= Math.sqrt(g)))
    var m = (function (e, i, r, o, a, s, u, l, c, d) {
        var h = (d * (e - r)) / 2 + (c * (i - o)) / 2,
          p = (-c * (e - r)) / 2 + (d * (i - o)) / 2,
          f = u * u,
          _ = l * l,
          g = h * h,
          m = p * p,
          v = f * _ - f * m - _ * g
        ;(v < 0 && (v = 0), (v /= f * m + _ * g))
        var y = (((v = Math.sqrt(v) * (a === s ? -1 : 1)) * u) / l) * p,
          C = ((v * -l) / u) * h,
          b = d * y - c * C + (e + r) / 2,
          w = c * y + d * C + (i + o) / 2,
          x = (h - y) / u,
          T = (p - C) / l,
          S = (-h - y) / u,
          L = (-p - C) / l,
          E = n(1, 0, x, T),
          A = n(x, T, S, L)
        return (0 === s && A > 0 && (A -= t), 1 === s && A < 0 && (A += t), [b, w, E, A])
      })(e, r, o, a, s, u, l, c, h, p),
      v = [],
      y = m[2],
      C = m[3],
      b = Math.max(Math.ceil(Math.abs(C) / (t / 4)), 1)
    C /= b
    for (var w = 0; w < b; w++) (v.push(i(y, C)), (y += C))
    return v.map(function (e) {
      for (var t = 0; t < e.length; t += 2) {
        var n = e[t + 0],
          i = e[t + 1],
          r = p * (n *= l) - h * (i *= c),
          o = h * n + p * i
        ;((e[t + 0] = r + m[0]), (e[t + 1] = o + m[1]))
      }
      return e
    })
  }
}
