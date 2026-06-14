/**
 * Webpack Module #27418
 * (barrel / re‑export module)
 */
// (e/*module*/) =>
{
  ;("use strict")
  var t = Object.getOwnPropertySymbols,
    n = Object.prototype.hasOwnProperty,
    i = Object.prototype.propertyIsEnumerable
  function r(e) {
    if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined")
    return Object(e)
  }
  e.exports = (function () {
    try {
      if (!Object.assign) return false
      var e = new String("abc")
      if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return false
      for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n
      if (
        "0123456789" !==
        Object.getOwnPropertyNames(t)
          .map(function (e) {
            return t[e]
          })
          .join("")
      )
        return false
      var i = {}
      return (
        "abcdefghijklmnopqrst".split("").forEach(function (e) {
          i[e] = e
        }),
        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
      )
    } catch (e) {
      return false
    }
  })()
    ? Object.assign
    : function (e, o) {
        for (var a, s, u = r(e), l = 1; l < arguments.length; l++) {
          for (var c in (a = Object(arguments[l]))) n.call(a, c) && (u[c] = a[c])
          if (t) {
            s = t(a)
            for (var d = 0; d < s.length; d++) i.call(a, s[d]) && (u[s[d]] = a[s[d]])
          }
        }
        return u
      }
}
