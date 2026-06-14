/**
 * Webpack Module #63665
 * (barrel / re‑export module)
 */
// (e/*module*/) =>
{
  ;("use strict")
  var t = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 },
    n = [
      5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287,
      12288, 65279,
    ]
  function i(e) {
    return e >= 48 && e <= 57
  }
  function r(e) {
    return (e >= 48 && e <= 57) || 43 === e || 45 === e || 46 === e
  }
  function o(e) {
    ;((this.index = 0),
      (this.path = e),
      (this.max = e.length),
      (this.result = []),
      (this.param = 0),
      (this.err = ""),
      (this.segmentStart = 0),
      (this.data = []))
  }
  function a(e) {
    for (
      ;
      e.index < e.max &&
      (10 === (t = e.path.charCodeAt(e.index)) ||
        13 === t ||
        8232 === t ||
        8233 === t ||
        32 === t ||
        9 === t ||
        11 === t ||
        12 === t ||
        160 === t ||
        (t >= 5760 && n.indexOf(t) >= 0));
    )
      e.index++
    var t
  }
  function s(e) {
    var t = e.path.charCodeAt(e.index)
    return 48 === t
      ? ((e.param = 0), void e.index++)
      : 49 === t
        ? ((e.param = 1), void e.index++)
        : void (e.err = "SvgPath: arc flag can be 0 or 1 only (at pos " + e.index + ")")
  }
  function u(e) {
    var t,
      n = e.index,
      r = n,
      o = e.max,
      a = false,
      s = false,
      u = false,
      l = false
    if (r >= o) e.err = "SvgPath: missed param (at pos " + r + ")"
    else if (
      ((43 !== (t = e.path.charCodeAt(r)) && 45 !== t) || (t = ++r < o ? e.path.charCodeAt(r) : 0),
      i(t) || 46 === t)
    ) {
      if (46 !== t) {
        if (((a = 48 === t), (t = ++r < o ? e.path.charCodeAt(r) : 0), a && r < o && t && i(t)))
          return void (e.err =
            "SvgPath: numbers started with `0` such as `09` are illegal (at pos " + n + ")")
        for (; r < o && i(e.path.charCodeAt(r)); ) (r++, (s = true))
        t = r < o ? e.path.charCodeAt(r) : 0
      }
      if (46 === t) {
        for (l = true, r++; i(e.path.charCodeAt(r)); ) (r++, (u = true))
        t = r < o ? e.path.charCodeAt(r) : 0
      }
      if (101 === t || 69 === t) {
        if (l && !s && !u)
          return void (e.err = "SvgPath: invalid float exponent (at pos " + r + ")")
        if (
          ((43 !== (t = ++r < o ? e.path.charCodeAt(r) : 0) && 45 !== t) || r++,
          !(r < o && i(e.path.charCodeAt(r))))
        )
          return void (e.err = "SvgPath: invalid float exponent (at pos " + r + ")")
        for (; r < o && i(e.path.charCodeAt(r)); ) r++
      }
      ;((e.index = r), (e.param = parseFloat(e.path.slice(n, r)) + 0))
    } else e.err = "SvgPath: param should start with 0..9 or `.` (at pos " + r + ")"
  }
  function l(e) {
    var n, i
    i = (n = e.path[e.segmentStart]).toLowerCase()
    var r = e.data
    if (
      ("m" === i &&
        r.length > 2 &&
        (e.result.push([n, r[0], r[1]]), (r = r.slice(2)), (i = "l"), (n = "m" === n ? "l" : "L")),
      "r" === i)
    )
      e.result.push([n].concat(r))
    else for (; r.length >= t[i] && (e.result.push([n].concat(r.splice(0, t[i]))), t[i]); );
  }
  function c(e) {
    var n,
      i,
      o,
      c,
      d,
      h = e.max
    if (
      ((e.segmentStart = e.index),
      (n = e.path.charCodeAt(e.index)),
      (i = 97 == (32 | n)),
      (function (e) {
        switch (32 | e) {
          case 109:
          case 122:
          case 108:
          case 104:
          case 118:
          case 99:
          case 115:
          case 113:
          case 116:
          case 97:
          case 114:
            return true
        }
        return false
      })(n))
    )
      if (((c = t[e.path[e.index].toLowerCase()]), e.index++, a(e), (e.data = []), c)) {
        for (o = false; ; ) {
          for (d = c; d > 0; d--) {
            if ((!i || (3 !== d && 4 !== d) ? u(e) : s(e), e.err.length)) return void l(e)
            ;(e.data.push(e.param),
              a(e),
              (o = false),
              e.index < h && 44 === e.path.charCodeAt(e.index) && (e.index++, a(e), (o = true)))
          }
          if (!o) {
            if (e.index >= e.max) break
            if (!r(e.path.charCodeAt(e.index))) break
          }
        }
        l(e)
      } else l(e)
    else e.err = "SvgPath: bad command " + e.path[e.index] + " (at pos " + e.index + ")"
  }
  e.exports = function (e) {
    var t = new o(e),
      n = t.max
    for (a(t); t.index < n && !t.err.length; ) c(t)
    return (
      t.result.length &&
        ("mM".indexOf(t.result[0][0]) < 0
          ? ((t.err = "SvgPath: string should start with `M` or `m`"), (t.result = []))
          : (t.result[0][0] = "M")),
      { err: t.err, segments: t.result }
    )
  }
}
