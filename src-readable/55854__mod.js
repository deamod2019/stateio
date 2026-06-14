/**
 * Webpack Module #55854
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.visibilityEffect = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(30396) /* 30396__mod */
  t.visibilityEffect = function (e, t, n) {
    ;(undefined === e && (e = 1), undefined === t && (t = true), undefined === n && (n = []))
    var o = i.__read((0, r.useState)(t), 2),
      a = o[0],
      s = o[1]
    return (
      t &&
        (0, r.useLayoutEffect)(function () {
          var t = setTimeout(function () {
            return s(false)
          }, e)
          return function () {
            return clearTimeout(t)
          }
        }, n),
      [a, s]
    )
  }
}
