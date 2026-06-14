/**
 * Webpack Module #68532
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.math = t.dist = void 0))
  var i = n(70655),
    r = 11754944e-45
  t.dist = function (e, t) {
    var n = i.__read(e, 2),
      r = n[0],
      o = n[1],
      a = i.__read(t, 2),
      s = a[0],
      u = a[1]
    return Math.sqrt((s - r) * (s - r) + (u - o) * (u - o))
  }
  var o = function (e, t, n) {
      return e * n + t * (1 - n)
    },
    a = function (e) {
      var t = i.__read(e, 2),
        n = t[0],
        r = t[1]
      return Math.sqrt(n * n + r * r)
    },
    s = function (e, t) {
      var n = i.__read(e, 2),
        r = n[0],
        o = n[1]
      return [r * Math.cos(t) - o * Math.sin(t), r * Math.sin(t) + o * Math.cos(t)]
    },
    u = function (e, t, n) {
      return (e < t ? (e = t) : e > n && (e = n), e)
    }
  t.math = {
    lerp: function (e, t, n) {
      var r = i.__read(e, 2),
        a = r[0],
        s = r[1],
        u = i.__read(t, 2),
        l = u[0],
        c = u[1]
      return [o(a, l, n), o(s, c, n)]
    },
    len: a,
    sum: function (e, t) {
      var n = i.__read(e, 2),
        r = n[0],
        o = n[1],
        a = i.__read(t, 2)
      return [r + a[0], o + a[1]]
    },
    sub: function (e, t) {
      var n = i.__read(e, 2),
        r = n[0],
        o = n[1],
        a = i.__read(t, 2)
      return [r - a[0], o - a[1]]
    },
    scale: function (e, t) {
      return e.map(function (e) {
        return e * t
      })
    },
    rotate: s,
    rotateAround: function (e, t, n) {
      var r = i.__read(e, 2),
        o = r[0],
        a = r[1],
        u = i.__read(t, 2),
        l = u[0],
        c = u[1],
        d = i.__read(s([l, c], n), 2)
      return [d[0] + o, d[1] + a]
    },
    norm: function (e) {
      var t = a(e),
        n = i.__read(e, 2)
      return [n[0] / t, n[1] / t]
    },
    dist: t.dist,
    dot: function (e, t) {
      var n = i.__read(e, 2),
        r = n[0],
        o = n[1],
        a = i.__read(t, 2)
      return r * a[0] + o * a[1]
    },
    clamp: u,
    repeat: function (e, t) {
      return u(e - Math.floor(e / t) * t, 0, t)
    },
    remap: function (e, t, n, i, r) {
      return ((e - t) * (r - i)) / (n - t) + i
    },
    approximately: function (e, t) {
      return Math.abs(t - e) < Math.max(1e-6 * Math.max(Math.abs(e), Math.abs(t)), 8 * r)
    },
    angle: function (e, t) {
      var n = i.__read(e, 2),
        r = n[0],
        o = n[1],
        a = i.__read(t, 2),
        s = a[0],
        u = a[1]
      return Math.atan2(u - o, s - r)
    },
    round: function (e, t) {
      return (void 0 === t && (t = 1e3), Math.round(e * t) / t)
    },
    array_summ: function (e) {
      return e.reduce(function (e, t) {
        return e + t
      }, 0)
    },
    RAD2DEG: 57.29578,
    DEG2RAD: 0.017453292,
    EPSILON: r,
  }
}
