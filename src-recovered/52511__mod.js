/**
 * Webpack Module #52511
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  var i
  ;((e = n.nmd(e)),
    (function (r) {
      ;(t && t.nodeType, e && e.nodeType)
      var o = "object" == typeof n.g && n.g
      o.global !== o && o.window !== o && o.self
      var a,
        s = 2147483647,
        u = 36,
        l = /^xn--/,
        c = /[^\x20-\x7E]/,
        d = /[\x2E\u3002\uFF0E\uFF61]/g,
        h = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input",
        },
        p = Math.floor,
        f = String.fromCharCode
      function _(e) {
        throw RangeError(h[e])
      }
      function g(e, t) {
        for (var n = e.length, i = []; n--; ) i[n] = t(e[n])
        return i
      }
      function m(e, t) {
        var n = e.split("@"),
          i = ""
        return (
          n.length > 1 && ((i = n[0] + "@"), (e = n[1])),
          i + g((e = e.replace(d, ".")).split("."), t).join(".")
        )
      }
      function v(e) {
        for (var t, n, i = [], r = 0, o = e.length; r < o; )
          (t = e.charCodeAt(r++)) >= 55296 && t <= 56319 && r < o
            ? 56320 == (64512 & (n = e.charCodeAt(r++)))
              ? i.push(((1023 & t) << 10) + (1023 & n) + 65536)
              : (i.push(t), r--)
            : i.push(t)
        return i
      }
      function y(e) {
        return g(e, function (e) {
          var t = ""
          return (
            e > 65535 &&
              ((t += f((((e -= 65536) >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))),
            (t += f(e))
          )
        }).join("")
      }
      function C(e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
      }
      function b(e, t, n) {
        var i = 0
        for (e = n ? p(e / 700) : e >> 1, e += p(e / t); e > 455; i += u) e = p(e / 35)
        return p(i + (36 * e) / (e + 38))
      }
      function w(e) {
        var t,
          n,
          i,
          r,
          o,
          a,
          l,
          c,
          d,
          h,
          f,
          g = [],
          m = e.length,
          v = 0,
          C = 128,
          w = 72
        for ((n = e.lastIndexOf("-")) < 0 && (n = 0), i = 0; i < n; ++i)
          (e.charCodeAt(i) >= 128 && _("not-basic"), g.push(e.charCodeAt(i)))
        for (r = n > 0 ? n + 1 : 0; r < m; ) {
          for (
            o = v, a = 1, l = u;
            r >= m && _("invalid-input"),
              ((c =
                (f = e.charCodeAt(r++)) - 48 < 10
                  ? f - 22
                  : f - 65 < 26
                    ? f - 65
                    : f - 97 < 26
                      ? f - 97
                      : u) >= u ||
                c > p((s - v) / a)) &&
                _("overflow"),
              (v += c * a),
              !(c < (d = l <= w ? 1 : l >= w + 26 ? 26 : l - w));
            l += u
          )
            (a > p(s / (h = u - d)) && _("overflow"), (a *= h))
          ;((w = b(v - o, (t = g.length + 1), 0 == o)),
            p(v / t) > s - C && _("overflow"),
            (C += p(v / t)),
            (v %= t),
            g.splice(v++, 0, C))
        }
        return y(g)
      }
      function x(e) {
        var t,
          n,
          i,
          r,
          o,
          a,
          l,
          c,
          d,
          h,
          g,
          m,
          y,
          w,
          x,
          T = []
        for (m = (e = v(e)).length, t = 128, n = 0, o = 72, a = 0; a < m; ++a)
          (g = e[a]) < 128 && T.push(f(g))
        for (i = r = T.length, r && T.push("-"); i < m; ) {
          for (l = s, a = 0; a < m; ++a) (g = e[a]) >= t && g < l && (l = g)
          for (
            l - t > p((s - n) / (y = i + 1)) && _("overflow"), n += (l - t) * y, t = l, a = 0;
            a < m;
            ++a
          )
            if (((g = e[a]) < t && ++n > s && _("overflow"), g == t)) {
              for (c = n, d = u; !(c < (h = d <= o ? 1 : d >= o + 26 ? 26 : d - o)); d += u)
                ((x = c - h), (w = u - h), T.push(f(C(h + (x % w), 0))), (c = p(x / w)))
              ;(T.push(f(C(c, 0))), (o = b(n, y, i == r)), (n = 0), ++i)
            }
          ;(++n, ++t)
        }
        return T.join("")
      }
      ;((a = {
        version: "1.3.2",
        ucs2: { decode: v, encode: y },
        decode: w,
        encode: x,
        toASCII: function (e) {
          return m(e, function (e) {
            return c.test(e) ? "xn--" + x(e) : e
          })
        },
        toUnicode: function (e) {
          return m(e, function (e) {
            return l.test(e) ? w(e.slice(4).toLowerCase()) : e
          })
        },
      }),
        void 0 ===
          (i = function () {
            return a
          }.call(t, n, t, e)) || (e.exports = i))
    })())
}
