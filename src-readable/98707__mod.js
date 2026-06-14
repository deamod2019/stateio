/**
 * Webpack Module #98707
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.color = undefined))
  var i = n(70655) /* 70655__mod */,
    r = function (e, t, n) {
      return e + n * (t - e)
    },
    o = function (e) {
      return [e >> 16, (e >> 8) & 255, 255 & e]
    },
    a = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
      var n = i.__read(e, 3),
        r = n[0],
        o = n[1],
        a = n[2]
      return ((r << 16) + (o << 8) + a) | 0
    }
  t.color = {
    fromHex: function (e) {
      return parseInt(e.substr(1), 16)
    },
    toRGB: o,
    fromRGB: a,
    lerp: function (e, t, n) {
      if (n <= 0) return e
      if (n >= 1) return t
      var s = i.__read(o(e), 3),
        u = s[0],
        l = s[1],
        c = s[2],
        d = i.__read(o(t), 3),
        h = d[0],
        p = d[1],
        f = d[2]
      return a(r(u, h, n), r(l, p, n), r(c, f, n))
    },
    pale: function (e, t) {
      return (
        undefined === t && (t = 0.5),
        a.apply(
          undefined,
          i.__spreadArray(
            [],
            i.__read(
              o(e).map(function (e) {
                return Math.floor(
                  ((n = e * t),
                  undefined === (i = 0) && (i = 0),
                  undefined === (r = 255) && (r = 1),
                  Math.max(i, Math.min(r, n))),
                )
                var n, i, r
              }),
            ),
            false,
          ),
        )
      )
    },
    rgbToHsl: function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
      var n = i.__read(e, 3),
        r = n[0],
        o = n[1],
        a = n[2]
      ;((r /= 255), (o /= 255), (a /= 255))
      var s = Math.max(r, o, a),
        u = Math.min(r, o, a),
        l = (s + u) / 2,
        c = l,
        d = c
      if (s == u) l = c = 0
      else {
        var h = s - u
        switch (((c = d > 0.5 ? h / (2 - s - u) : h / (s + u)), s)) {
          case r:
            l = (o - a) / h + (o < a ? 6 : 0)
            break
          case o:
            l = (a - r) / h + 2
            break
          case a:
            l = (r - o) / h + 4
        }
        l /= 6
      }
      return [Math.floor(360 * l), Math.floor(100 * c), Math.floor(100 * d)]
    },
  }
}
