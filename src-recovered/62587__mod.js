/**
 * Webpack Module #62587
 * (barrel / re‑export module)
 */
// (e/*module*/) =>
{
  ;("use strict")
  function t(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }
  e.exports = function (e, n, i, r) {
    ;((n = n || "&"), (i = i || "="))
    var o = {}
    if ("string" != typeof e || 0 === e.length) return o
    var a = /\+/g
    e = e.split(n)
    var s = 1e3
    r && "number" == typeof r.maxKeys && (s = r.maxKeys)
    var u = e.length
    s > 0 && u > s && (u = s)
    for (var l = 0; l < u; ++l) {
      var c,
        d,
        h,
        p,
        f = e[l].replace(a, "%20"),
        _ = f.indexOf(i)
      ;(_ >= 0 ? ((c = f.substr(0, _)), (d = f.substr(_ + 1))) : ((c = f), (d = "")),
        (h = decodeURIComponent(c)),
        (p = decodeURIComponent(d)),
        t(o, h) ? (Array.isArray(o[h]) ? o[h].push(p) : (o[h] = [o[h], p])) : (o[h] = p))
    }
    return o
  }
}
