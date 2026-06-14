/**
 * Webpack Module #92192
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  var i = n(63665) /* 63665__mod */,
    r = n(22094) /* 22094__mod */,
    o = n(59480) /* 59480__mod */,
    a = n(72921) /* 72921__mod */,
    s = n(56954) /* 56954__mod */
  function u(e) {
    if (!(this instanceof u)) return new u(e)
    var t = i(e)
    ;((this.segments = t.segments), (this.err = t.err), (this.__stack = []))
  }
  ;((u.from = function (e) {
    if ("string" == typeof e) return new u(e)
    if (e instanceof u) {
      var t = new u("")
      return (
        (t.err = e.err),
        (t.segments = e.segments.map(function (e) {
          return e.slice()
        })),
        (t.__stack = e.__stack.map(function (e) {
          return o().matrix(e.toArray())
        })),
        t
      )
    }
    throw new Error("SvgPath.from: invalid param type " + e)
  }),
    (u.prototype.__matrix = function (e) {
      var t,
        n = this
      e.queue.length &&
        this.iterate(function (i, r, o, a) {
          var u, l, c, d
          switch (i[0]) {
            case "v":
              l = 0 === (u = e.calc(0, i[1], true))[0] ? ["v", u[1]] : ["l", u[0], u[1]]
              break
            case "V":
              l =
                (u = e.calc(o, i[1], false))[0] === e.calc(o, a, false)[0]
                  ? ["V", u[1]]
                  : ["L", u[0], u[1]]
              break
            case "h":
              l = 0 === (u = e.calc(i[1], 0, true))[1] ? ["h", u[0]] : ["l", u[0], u[1]]
              break
            case "H":
              l =
                (u = e.calc(i[1], a, false))[1] === e.calc(o, a, false)[1]
                  ? ["H", u[0]]
                  : ["L", u[0], u[1]]
              break
            case "a":
            case "A":
              var h = e.toArray(),
                p = s(i[1], i[2], i[3]).transform(h)
              if (
                (h[0] * h[3] - h[1] * h[2] < 0 && (i[5] = i[5] ? "0" : "1"),
                (u = e.calc(i[6], i[7], "a" === i[0])),
                ("A" === i[0] && i[6] === o && i[7] === a) ||
                  ("a" === i[0] && 0 === i[6] && 0 === i[7]))
              ) {
                l = ["a" === i[0] ? "l" : "L", u[0], u[1]]
                break
              }
              l = p.isDegenerate()
                ? ["a" === i[0] ? "l" : "L", u[0], u[1]]
                : [i[0], p.rx, p.ry, p.ax, i[4], i[5], u[0], u[1]]
              break
            case "m":
              ;((d = r > 0), (l = ["m", (u = e.calc(i[1], i[2], d))[0], u[1]]))
              break
            default:
              for (l = [(c = i[0])], d = c.toLowerCase() === c, t = 1; t < i.length; t += 2)
                ((u = e.calc(i[t], i[t + 1], d)), l.push(u[0], u[1]))
          }
          n.segments[r] = l
        }, true)
    }),
    (u.prototype.__evaluateStack = function () {
      var e, t
      if (this.__stack.length) {
        if (1 === this.__stack.length)
          return (this.__matrix(this.__stack[0]), void (this.__stack = []))
        for (e = o(), t = this.__stack.length; --t >= 0; ) e.matrix(this.__stack[t].toArray())
        ;(this.__matrix(e), (this.__stack = []))
      }
    }),
    (u.prototype.toString = function () {
      var e = "",
        t = "",
        n = false
      this.__evaluateStack()
      for (var i = 0, r = this.segments.length; i < r; i++) {
        var o = this.segments[i],
          a = o[0]
        a !== t || "m" === a || "M" === a
          ? ("m" === a && "z" === t && (e += " "), (e += a), (n = false))
          : (n = true)
        for (var s = 1; s < o.length; s++) {
          var u = o[s]
          ;(1 === s ? n && u >= 0 && (e += " ") : u >= 0 && (e += " "), (e += u))
        }
        t = a
      }
      return e
    }),
    (u.prototype.translate = function (e, t) {
      return (this.__stack.push(o().translate(e, t || 0)), this)
    }),
    (u.prototype.scale = function (e, t) {
      return (this.__stack.push(o().scale(e, t || 0 === t ? t : e)), this)
    }),
    (u.prototype.rotate = function (e, t, n) {
      return (this.__stack.push(o().rotate(e, t || 0, n || 0)), this)
    }),
    (u.prototype.skewX = function (e) {
      return (this.__stack.push(o().skewX(e)), this)
    }),
    (u.prototype.skewY = function (e) {
      return (this.__stack.push(o().skewY(e)), this)
    }),
    (u.prototype.matrix = function (e) {
      return (this.__stack.push(o().matrix(e)), this)
    }),
    (u.prototype.transform = function (e) {
      return e.trim() ? (this.__stack.push(r(e)), this) : this
    }),
    (u.prototype.round = function (e) {
      var t,
        n = 0,
        i = 0,
        r = 0,
        o = 0
      return (
        (e = e || 0),
        this.__evaluateStack(),
        this.segments.forEach(function (a) {
          var s = a[0].toLowerCase() === a[0]
          switch (a[0]) {
            case "H":
            case "h":
              return (
                s && (a[1] += r),
                (r = a[1] - a[1].toFixed(e)),
                void (a[1] = +a[1].toFixed(e))
              )
            case "V":
            case "v":
              return (
                s && (a[1] += o),
                (o = a[1] - a[1].toFixed(e)),
                void (a[1] = +a[1].toFixed(e))
              )
            case "Z":
            case "z":
              return ((r = n), void (o = i))
            case "M":
            case "m":
              return (
                s && ((a[1] += r), (a[2] += o)),
                (r = a[1] - a[1].toFixed(e)),
                (o = a[2] - a[2].toFixed(e)),
                (n = r),
                (i = o),
                (a[1] = +a[1].toFixed(e)),
                void (a[2] = +a[2].toFixed(e))
              )
            case "A":
            case "a":
              return (
                s && ((a[6] += r), (a[7] += o)),
                (r = a[6] - a[6].toFixed(e)),
                (o = a[7] - a[7].toFixed(e)),
                (a[1] = +a[1].toFixed(e)),
                (a[2] = +a[2].toFixed(e)),
                (a[3] = +a[3].toFixed(e + 2)),
                (a[6] = +a[6].toFixed(e)),
                void (a[7] = +a[7].toFixed(e))
              )
            default:
              return (
                (t = a.length),
                s && ((a[t - 2] += r), (a[t - 1] += o)),
                (r = a[t - 2] - a[t - 2].toFixed(e)),
                (o = a[t - 1] - a[t - 1].toFixed(e)),
                void a.forEach(function (t, n) {
                  n && (a[n] = +a[n].toFixed(e))
                })
              )
          }
        }),
        this
      )
    }),
    (u.prototype.iterate = function (e, t) {
      var n,
        i,
        r,
        o = this.segments,
        a = {},
        s = false,
        u = 0,
        l = 0,
        c = 0,
        d = 0
      if (
        (t || this.__evaluateStack(),
        o.forEach(function (t, n) {
          var i = e(t, n, u, l)
          Array.isArray(i) && ((a[n] = i), (s = true))
          var r = t[0] === t[0].toLowerCase()
          switch (t[0]) {
            case "m":
            case "M":
              return ((u = t[1] + (r ? u : 0)), (l = t[2] + (r ? l : 0)), (c = u), void (d = l))
            case "h":
            case "H":
              return void (u = t[1] + (r ? u : 0))
            case "v":
            case "V":
              return void (l = t[1] + (r ? l : 0))
            case "z":
            case "Z":
              return ((u = c), void (l = d))
            default:
              ;((u = t[t.length - 2] + (r ? u : 0)), (l = t[t.length - 1] + (r ? l : 0)))
          }
        }),
        !s)
      )
        return this
      for (r = [], n = 0; n < o.length; n++)
        if (undefined !== a[n]) for (i = 0; i < a[n].length; i++) r.push(a[n][i])
        else r.push(o[n])
      return ((this.segments = r), this)
    }),
    (u.prototype.abs = function () {
      return (
        this.iterate(function (e, t, n, i) {
          var r,
            o = e[0],
            a = o.toUpperCase()
          if (o !== a)
            switch (((e[0] = a), o)) {
              case "v":
                return void (e[1] += i)
              case "a":
                return ((e[6] += n), void (e[7] += i))
              default:
                for (r = 1; r < e.length; r++) e[r] += r % 2 ? n : i
            }
        }, true),
        this
      )
    }),
    (u.prototype.rel = function () {
      return (
        this.iterate(function (e, t, n, i) {
          var r,
            o = e[0],
            a = o.toLowerCase()
          if (o !== a && (0 !== t || "M" !== o))
            switch (((e[0] = a), o)) {
              case "V":
                return void (e[1] -= i)
              case "A":
                return ((e[6] -= n), void (e[7] -= i))
              default:
                for (r = 1; r < e.length; r++) e[r] -= r % 2 ? n : i
            }
        }, true),
        this
      )
    }),
    (u.prototype.unarc = function () {
      return (
        this.iterate(function (e, t, n, i) {
          var r,
            o,
            s,
            u = [],
            l = e[0]
          return "A" !== l && "a" !== l
            ? null
            : ("a" === l ? ((o = n + e[6]), (s = i + e[7])) : ((o = e[6]), (s = e[7])),
              0 === (r = a(n, i, o, s, e[4], e[5], e[1], e[2], e[3])).length
                ? [["a" === e[0] ? "l" : "L", e[6], e[7]]]
                : (r.forEach(function (e) {
                    u.push(["C", e[2], e[3], e[4], e[5], e[6], e[7]])
                  }),
                  u))
        }),
        this
      )
    }),
    (u.prototype.unshort = function () {
      var e,
        t,
        n,
        i,
        r,
        o = this.segments
      return (
        this.iterate(function (a, s, u, l) {
          var c,
            d = a[0],
            h = d.toUpperCase()
          s &&
            ("T" === h
              ? ((c = "t" === d),
                "Q" === (n = o[s - 1])[0]
                  ? ((e = n[1] - u), (t = n[2] - l))
                  : "q" === n[0]
                    ? ((e = n[1] - n[3]), (t = n[2] - n[4]))
                    : ((e = 0), (t = 0)),
                (i = -e),
                (r = -t),
                c || ((i += u), (r += l)),
                (o[s] = [c ? "q" : "Q", i, r, a[1], a[2]]))
              : "S" === h &&
                ((c = "s" === d),
                "C" === (n = o[s - 1])[0]
                  ? ((e = n[3] - u), (t = n[4] - l))
                  : "c" === n[0]
                    ? ((e = n[3] - n[5]), (t = n[4] - n[6]))
                    : ((e = 0), (t = 0)),
                (i = -e),
                (r = -t),
                c || ((i += u), (r += l)),
                (o[s] = [c ? "c" : "C", i, r, a[1], a[2], a[3], a[4]])))
        }),
        this
      )
    }),
    (e.exports = u))
}
