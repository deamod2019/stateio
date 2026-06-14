/**
 * Webpack Module #38319
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.toFixedString = t.getFontClassByDigits = undefined))
  t.getFontClassByDigits = function (e, t, n) {
    ;(undefined === t && (t = 4), undefined === n && (n = 9))
    var i = ""
    if (e) {
      var r = e.toString().length
      ;(r <= t && (i = ""),
        r > t && r < n && (i = "f".concat(r.toString(), "-digits")),
        r >= n && (i = "f".concat(n, "-digits")))
    }
    return i
  }
  t.toFixedString = function (e, t, n) {
    ;(undefined === t && (t = 2), undefined === n && (n = "."))
    var i = e.toString(10),
      r = i.indexOf(n)
    return (i = -1 === r ? i : i.substr(0, r + 1 + t))
  }
}
