/**
 * Webpack Module #55854
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.visibilityEffect = void 0))
  var i = n(70655),
    r = n(30396)
  t.visibilityEffect = function (e, t, n) {
    ;(void 0 === e && (e = 1), void 0 === t && (t = !0), void 0 === n && (n = []))
    var o = i.__read((0, r.useState)(t), 2),
      a = o[0],
      s = o[1]
    return (
      t &&
        (0, r.useLayoutEffect)(function () {
          var t = setTimeout(function () {
            return s(!1)
          }, e)
          return function () {
            return clearTimeout(t)
          }
        }, n),
      [a, s]
    )
  }
}
