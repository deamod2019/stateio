/**
 * Webpack Module #50961
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.useEventListener = void 0))
  var i = n(86178),
    r = n(30396),
    o = n(76702)
  t.useEventListener = function (e, t, n) {
    var a = (0, o.useInjection)(i.TypesCore.dispatcher)
    ;(0, r.useLayoutEffect)(function () {
      return (
        a.addListener(e, t),
        function () {
          return a.removeListener(e, t)
        }
      )
    }, n)
  }
}
