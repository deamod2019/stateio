/**
 * Webpack Module #35081
 * @exports BotUtility
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.BotUtility = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(77577) /* 77577__mod */,
    o = function (e) {
      this.Points = a.CalculateBounds(e.Center, e.Width, e.Height, e.Angle)
    },
    a = (function () {
      function e() {}
      return (
        (e.IsSegmentIntersectCircle = function (t, n, i) {
          return e.IsRectIntersectCircle(t, n, i.Center, i.Width, i.Height, i.Angle)
        }),
        (e.IsRectIntersectCircle = function (t, n, i, r, o, a) {
          var s = e.CalculateBounds(i, r, o, a)
          return (
            e.IsPointInRectangle(t, s) ||
            e.IsLineIntersectCircle(t, n, s[0], s[1]) ||
            e.IsLineIntersectCircle(t, n, s[1], s[2]) ||
            e.IsLineIntersectCircle(t, n, s[2], s[3]) ||
            e.IsLineIntersectCircle(t, n, s[3], s[0])
          )
        }),
        (e.CalculateBounds = function (e, t, n, i) {
          var o = [],
            a = 0.5 * t,
            s = 0.5 * n,
            u = i * r.math.DEG2RAD
          return (
            (o[0] = r.math.rotateAround(e, [-a, s], u)),
            (o[1] = r.math.rotateAround(e, [a, s], u)),
            (o[2] = r.math.rotateAround(e, [a, -s], u)),
            (o[3] = r.math.rotateAround(e, [-a, -s], u)),
            o
          )
        }),
        (e.DrawBox = function (e) {}),
        (e.IsPointInRectangle = function (e, t) {
          var n = r.math.sub(t[0], e),
            i = r.math.sub(t[0], t[1]),
            o = r.math.sub(t[0], t[3])
          return (
            0 <= r.math.dot(n, i) &&
            r.math.dot(n, i) <= r.math.dot(i, i) &&
            0 <= r.math.dot(n, o) &&
            r.math.dot(n, o) <= r.math.dot(o, o)
          )
        }),
        (e.IsLineIntersectCircle = function (e, t, n, o) {
          var a = r.math.dist(e, n) <= t,
            s = r.math.dist(e, o) <= t,
            u = i.__read(n, 2),
            l = u[0],
            c = u[1],
            d = i.__read(o, 2),
            h = d[0],
            p = d[1],
            f = i.__read(e, 2),
            _ = h - l,
            g = p - c,
            m = ((f[0] - l) * _ + (f[1] - c) * g) / (_ * _ + g * g),
            v = [l + m * _, c + m * g],
            y = r.math.approximately(r.math.dist(n, v) + r.math.dist(o, v), r.math.dist(n, o)),
            C = r.math.dist(e, v) <= t
          return (y && C) || a || s
        }),
        (e.IsSegmentIntersectSegment = function (t, n) {
          return e.IsRectanglesIntersecting(new o(t), new o(n))
        }),
        (e.IsRectanglesIntersecting = function (e, t) {
          var n,
            r,
            o,
            a,
            s,
            u,
            l = [e, t]
          try {
            for (var c = i.__values(l), d = c.next(); !d.done; d = c.next())
              for (var h = d.value, p = 0; p < h.Points.length; p++) {
                var f = (p + 1) % h.Points.length,
                  _ = i.__read(h.Points[p], 2),
                  g = _[0],
                  m = _[1],
                  v = i.__read(h.Points[f], 2),
                  y = v[0],
                  C = [v[1] - m, g - y],
                  b = NaN,
                  w = NaN
                try {
                  for (
                    var x = ((o = undefined), i.__values(e.Points)), T = x.next();
                    !T.done;
                    T = x.next()
                  ) {
                    var S = T.value,
                      L = i.__read(S, 2),
                      E = L[0],
                      A = L[1],
                      I = i.__read(C, 2),
                      M = I[0] * E + I[1] * A
                    ;((isNaN(b) || M < b) && (b = M), (isNaN(w) || M > w) && (w = M))
                  }
                } catch (e) {
                  o = { error: e }
                } finally {
                  try {
                    T && !T.done && (a = x.return) && a.call(x)
                  } finally {
                    if (o) throw o.error
                  }
                }
                var P = NaN,
                  O = NaN
                try {
                  for (
                    var R = ((s = undefined), i.__values(t.Points)), k = R.next();
                    !k.done;
                    k = R.next()
                  ) {
                    S = k.value
                    var N = i.__read(S, 2),
                      D = ((E = N[0]), (A = N[1]), i.__read(C, 2))
                    M = D[0] * E + D[1] * A
                    ;((isNaN(P) || M < P) && (P = M), (isNaN(O) || M > O) && (O = M))
                  }
                } catch (e) {
                  s = { error: e }
                } finally {
                  try {
                    k && !k.done && (u = R.return) && u.call(R)
                  } finally {
                    if (s) throw s.error
                  }
                }
                if (w < P || O < b) return false
              }
          } catch (e) {
            n = { error: e }
          } finally {
            try {
              d && !d.done && (r = c.return) && r.call(c)
            } finally {
              if (n) throw n.error
            }
          }
          return true
        }),
        e
      )
    })()
  t.BotUtility = a
}
