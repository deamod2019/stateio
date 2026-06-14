/**
 * Webpack Module #38319
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.toFixedString = t.getFontClassByDigits = void 0))
  t.getFontClassByDigits = function (e, t, n) {
    ;(void 0 === t && (t = 4), void 0 === n && (n = 9))
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
    ;(void 0 === t && (t = 2), void 0 === n && (n = "."))
    var i = e.toString(10),
      r = i.indexOf(n)
    return (i = -1 === r ? i : i.substr(0, r + 1 + t))
  }
}
