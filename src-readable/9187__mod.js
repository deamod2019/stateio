/**
 * Webpack Module #9187
 * (barrel / re‑export module)
 */
// (e/*module*/) =>
{
  ;("use strict")
  function t(e, t, i) {
    i = i || 2
    var o,
      a,
      s,
      u,
      d,
      h,
      f,
      _ = t && t.length,
      g = _ ? t[0] * i : e.length,
      m = n(e, 0, g, i, true),
      v = []
    if (!m || m.next === m.prev) return v
    if (
      (_ &&
        (m = (function (e, t, i, r) {
          var o,
            a,
            s,
            u = []
          for (o = 0, a = t.length; o < a; o++)
            ((s = n(e, t[o] * r, o < a - 1 ? t[o + 1] * r : e.length, r, false)) === s.next &&
              (s.steiner = true),
              u.push(p(s)))
          for (u.sort(l), o = 0; o < u.length; o++) i = c(u[o], i)
          return i
        })(e, t, m, i)),
      e.length > 80 * i)
    ) {
      ;((o = s = e[0]), (a = u = e[1]))
      for (var y = i; y < g; y += i)
        ((d = e[y]) < o && (o = d),
          (h = e[y + 1]) < a && (a = h),
          d > s && (s = d),
          h > u && (u = h))
      f = 0 !== (f = Math.max(s - o, u - a)) ? 32767 / f : 0
    }
    return (r(m, v, i, o, a, f, 0), v)
  }
  function n(e, t, n, i, r) {
    var o, a
    if (r === L(e, t, n, i) > 0) for (o = t; o < n; o += i) a = x(o, e[o], e[o + 1], a)
    else for (o = n - i; o >= t; o -= i) a = x(o, e[o], e[o + 1], a)
    return (a && m(a, a.next) && (T(a), (a = a.next)), a)
  }
  function i(e, t) {
    if (!e) return e
    t || (t = e)
    var n,
      i = e
    do {
      if (((n = false), i.steiner || (!m(i, i.next) && 0 !== g(i.prev, i, i.next)))) i = i.next
      else {
        if ((T(i), (i = t = i.prev) === i.next)) break
        n = true
      }
    } while (n || i !== t)
    return t
  }
  function r(e, t, n, l, c, d, p) {
    if (e) {
      !p &&
        d &&
        (function (e, t, n, i) {
          var r = e
          do {
            ;(0 === r.z && (r.z = h(r.x, r.y, t, n, i)),
              (r.prevZ = r.prev),
              (r.nextZ = r.next),
              (r = r.next))
          } while (r !== e)
          ;((r.prevZ.nextZ = null),
            (r.prevZ = null),
            (function (e) {
              var t,
                n,
                i,
                r,
                o,
                a,
                s,
                u,
                l = 1
              do {
                for (n = e, e = null, o = null, a = 0; n; ) {
                  for (a++, i = n, s = 0, t = 0; t < l && (s++, (i = i.nextZ)); t++);
                  for (u = l; s > 0 || (u > 0 && i); )
                    (0 !== s && (0 === u || !i || n.z <= i.z)
                      ? ((r = n), (n = n.nextZ), s--)
                      : ((r = i), (i = i.nextZ), u--),
                      o ? (o.nextZ = r) : (e = r),
                      (r.prevZ = o),
                      (o = r))
                  n = i
                }
                ;((o.nextZ = null), (l *= 2))
              } while (a > 1)
            })(r))
        })(e, l, c, d)
      for (var f, _, g = e; e.prev !== e.next; )
        if (((f = e.prev), (_ = e.next), d ? a(e, l, c, d) : o(e)))
          (t.push((f.i / n) | 0),
            t.push((e.i / n) | 0),
            t.push((_.i / n) | 0),
            T(e),
            (e = _.next),
            (g = _.next))
        else if ((e = _) === g) {
          p
            ? 1 === p
              ? r((e = s(i(e), t, n)), t, n, l, c, d, 2)
              : 2 === p && u(e, t, n, l, c, d)
            : r(i(e), t, n, l, c, d, 1)
          break
        }
    }
  }
  function o(e) {
    var t = e.prev,
      n = e,
      i = e.next
    if (g(t, n, i) >= 0) return false
    for (
      var r = t.x,
        o = n.x,
        a = i.x,
        s = t.y,
        u = n.y,
        l = i.y,
        c = r < o ? (r < a ? r : a) : o < a ? o : a,
        d = s < u ? (s < l ? s : l) : u < l ? u : l,
        h = r > o ? (r > a ? r : a) : o > a ? o : a,
        p = s > u ? (s > l ? s : l) : u > l ? u : l,
        _ = i.next;
      _ !== t;
    ) {
      if (
        _.x >= c &&
        _.x <= h &&
        _.y >= d &&
        _.y <= p &&
        f(r, s, o, u, a, l, _.x, _.y) &&
        g(_.prev, _, _.next) >= 0
      )
        return false
      _ = _.next
    }
    return true
  }
  function a(e, t, n, i) {
    var r = e.prev,
      o = e,
      a = e.next
    if (g(r, o, a) >= 0) return false
    for (
      var s = r.x,
        u = o.x,
        l = a.x,
        c = r.y,
        d = o.y,
        p = a.y,
        _ = s < u ? (s < l ? s : l) : u < l ? u : l,
        m = c < d ? (c < p ? c : p) : d < p ? d : p,
        v = s > u ? (s > l ? s : l) : u > l ? u : l,
        y = c > d ? (c > p ? c : p) : d > p ? d : p,
        C = h(_, m, t, n, i),
        b = h(v, y, t, n, i),
        w = e.prevZ,
        x = e.nextZ;
      w && w.z >= C && x && x.z <= b;
    ) {
      if (
        w.x >= _ &&
        w.x <= v &&
        w.y >= m &&
        w.y <= y &&
        w !== r &&
        w !== a &&
        f(s, c, u, d, l, p, w.x, w.y) &&
        g(w.prev, w, w.next) >= 0
      )
        return false
      if (
        ((w = w.prevZ),
        x.x >= _ &&
          x.x <= v &&
          x.y >= m &&
          x.y <= y &&
          x !== r &&
          x !== a &&
          f(s, c, u, d, l, p, x.x, x.y) &&
          g(x.prev, x, x.next) >= 0)
      )
        return false
      x = x.nextZ
    }
    for (; w && w.z >= C; ) {
      if (
        w.x >= _ &&
        w.x <= v &&
        w.y >= m &&
        w.y <= y &&
        w !== r &&
        w !== a &&
        f(s, c, u, d, l, p, w.x, w.y) &&
        g(w.prev, w, w.next) >= 0
      )
        return false
      w = w.prevZ
    }
    for (; x && x.z <= b; ) {
      if (
        x.x >= _ &&
        x.x <= v &&
        x.y >= m &&
        x.y <= y &&
        x !== r &&
        x !== a &&
        f(s, c, u, d, l, p, x.x, x.y) &&
        g(x.prev, x, x.next) >= 0
      )
        return false
      x = x.nextZ
    }
    return true
  }
  function s(e, t, n) {
    var r = e
    do {
      var o = r.prev,
        a = r.next.next
      ;(!m(o, a) &&
        v(o, r, r.next, a) &&
        b(o, a) &&
        b(a, o) &&
        (t.push((o.i / n) | 0),
        t.push((r.i / n) | 0),
        t.push((a.i / n) | 0),
        T(r),
        T(r.next),
        (r = e = a)),
        (r = r.next))
    } while (r !== e)
    return i(r)
  }
  function u(e, t, n, o, a, s) {
    var u = e
    do {
      for (var l = u.next.next; l !== u.prev; ) {
        if (u.i !== l.i && _(u, l)) {
          var c = w(u, l)
          return (
            (u = i(u, u.next)),
            (c = i(c, c.next)),
            r(u, t, n, o, a, s, 0),
            void r(c, t, n, o, a, s, 0)
          )
        }
        l = l.next
      }
      u = u.next
    } while (u !== e)
  }
  function l(e, t) {
    return e.x - t.x
  }
  function c(e, t) {
    var n = (function (e, t) {
      var n,
        i = t,
        r = e.x,
        o = e.y,
        a = -1 / 0
      do {
        if (o <= i.y && o >= i.next.y && i.next.y !== i.y) {
          var s = i.x + ((o - i.y) * (i.next.x - i.x)) / (i.next.y - i.y)
          if (s <= r && s > a && ((a = s), (n = i.x < i.next.x ? i : i.next), s === r)) return n
        }
        i = i.next
      } while (i !== t)
      if (!n) return null
      var u,
        l = n,
        c = n.x,
        h = n.y,
        p = 1 / 0
      i = n
      do {
        ;(r >= i.x &&
          i.x >= c &&
          r !== i.x &&
          f(o < h ? r : a, o, c, h, o < h ? a : r, o, i.x, i.y) &&
          ((u = Math.abs(o - i.y) / (r - i.x)),
          b(i, e) &&
            (u < p || (u === p && (i.x > n.x || (i.x === n.x && d(n, i))))) &&
            ((n = i), (p = u))),
          (i = i.next))
      } while (i !== l)
      return n
    })(e, t)
    if (!n) return t
    var r = w(n, e)
    return (i(r, r.next), i(n, n.next))
  }
  function d(e, t) {
    return g(e.prev, e, t.prev) < 0 && g(t.next, e, e.next) < 0
  }
  function h(e, t, n, i, r) {
    return (
      (e =
        1431655765 &
        ((e =
          858993459 &
          ((e = 252645135 & ((e = 16711935 & ((e = ((e - n) * r) | 0) | (e << 8))) | (e << 4))) |
            (e << 2))) |
          (e << 1))) |
      ((t =
        1431655765 &
        ((t =
          858993459 &
          ((t = 252645135 & ((t = 16711935 & ((t = ((t - i) * r) | 0) | (t << 8))) | (t << 4))) |
            (t << 2))) |
          (t << 1))) <<
        1)
    )
  }
  function p(e) {
    var t = e,
      n = e
    do {
      ;((t.x < n.x || (t.x === n.x && t.y < n.y)) && (n = t), (t = t.next))
    } while (t !== e)
    return n
  }
  function f(e, t, n, i, r, o, a, s) {
    return (
      (r - a) * (t - s) >= (e - a) * (o - s) &&
      (e - a) * (i - s) >= (n - a) * (t - s) &&
      (n - a) * (o - s) >= (r - a) * (i - s)
    )
  }
  function _(e, t) {
    return (
      e.next.i !== t.i &&
      e.prev.i !== t.i &&
      !(function (e, t) {
        var n = e
        do {
          if (
            n.i !== e.i &&
            n.next.i !== e.i &&
            n.i !== t.i &&
            n.next.i !== t.i &&
            v(n, n.next, e, t)
          )
            return true
          n = n.next
        } while (n !== e)
        return false
      })(e, t) &&
      ((b(e, t) &&
        b(t, e) &&
        (function (e, t) {
          var n = e,
            i = false,
            r = (e.x + t.x) / 2,
            o = (e.y + t.y) / 2
          do {
            ;(n.y > o != n.next.y > o &&
              n.next.y !== n.y &&
              r < ((n.next.x - n.x) * (o - n.y)) / (n.next.y - n.y) + n.x &&
              (i = !i),
              (n = n.next))
          } while (n !== e)
          return i
        })(e, t) &&
        (g(e.prev, e, t.prev) || g(e, t.prev, t))) ||
        (m(e, t) && g(e.prev, e, e.next) > 0 && g(t.prev, t, t.next) > 0))
    )
  }
  function g(e, t, n) {
    return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
  }
  function m(e, t) {
    return e.x === t.x && e.y === t.y
  }
  function v(e, t, n, i) {
    var r = C(g(e, t, n)),
      o = C(g(e, t, i)),
      a = C(g(n, i, e)),
      s = C(g(n, i, t))
    return (
      (r !== o && a !== s) ||
      !(0 !== r || !y(e, n, t)) ||
      !(0 !== o || !y(e, i, t)) ||
      !(0 !== a || !y(n, e, i)) ||
      !(0 !== s || !y(n, t, i))
    )
  }
  function y(e, t, n) {
    return (
      t.x <= Math.max(e.x, n.x) &&
      t.x >= Math.min(e.x, n.x) &&
      t.y <= Math.max(e.y, n.y) &&
      t.y >= Math.min(e.y, n.y)
    )
  }
  function C(e) {
    return e > 0 ? 1 : e < 0 ? -1 : 0
  }
  function b(e, t) {
    return g(e.prev, e, e.next) < 0
      ? g(e, t, e.next) >= 0 && g(e, e.prev, t) >= 0
      : g(e, t, e.prev) < 0 || g(e, e.next, t) < 0
  }
  function w(e, t) {
    var n = new S(e.i, e.x, e.y),
      i = new S(t.i, t.x, t.y),
      r = e.next,
      o = t.prev
    return (
      (e.next = t),
      (t.prev = e),
      (n.next = r),
      (r.prev = n),
      (i.next = n),
      (n.prev = i),
      (o.next = i),
      (i.prev = o),
      i
    )
  }
  function x(e, t, n, i) {
    var r = new S(e, t, n)
    return (
      i
        ? ((r.next = i.next), (r.prev = i), (i.next.prev = r), (i.next = r))
        : ((r.prev = r), (r.next = r)),
      r
    )
  }
  function T(e) {
    ;((e.next.prev = e.prev),
      (e.prev.next = e.next),
      e.prevZ && (e.prevZ.nextZ = e.nextZ),
      e.nextZ && (e.nextZ.prevZ = e.prevZ))
  }
  function S(e, t, n) {
    ;((this.i = e),
      (this.x = t),
      (this.y = n),
      (this.prev = null),
      (this.next = null),
      (this.z = 0),
      (this.prevZ = null),
      (this.nextZ = null),
      (this.steiner = false))
  }
  function L(e, t, n, i) {
    for (var r = 0, o = t, a = n - i; o < n; o += i)
      ((r += (e[a] - e[o]) * (e[o + 1] + e[a + 1])), (a = o))
    return r
  }
  ;((e.exports = t),
    (e.exports.default = t),
    (t.deviation = function (e, t, n, i) {
      var r = t && t.length,
        o = r ? t[0] * n : e.length,
        a = Math.abs(L(e, 0, o, n))
      if (r)
        for (var s = 0, u = t.length; s < u; s++) {
          var l = t[s] * n,
            c = s < u - 1 ? t[s + 1] * n : e.length
          a -= Math.abs(L(e, l, c, n))
        }
      var d = 0
      for (s = 0; s < i.length; s += 3) {
        var h = i[s] * n,
          p = i[s + 1] * n,
          f = i[s + 2] * n
        d += Math.abs((e[h] - e[f]) * (e[p + 1] - e[h + 1]) - (e[h] - e[p]) * (e[f + 1] - e[h + 1]))
      }
      return 0 === a && 0 === d ? 0 : Math.abs((d - a) / a)
    }),
    (t.flatten = function (e) {
      for (
        var t = e[0][0].length, n = { vertices: [], holes: [], dimensions: t }, i = 0, r = 0;
        r < e.length;
        r++
      ) {
        for (var o = 0; o < e[r].length; o++)
          for (var a = 0; a < t; a++) n.vertices.push(e[r][o][a])
        r > 0 && ((i += e[r - 1].length), n.holes.push(i))
      }
      return n
    }))
}
