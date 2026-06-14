/**
 * Webpack Module #50961
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.useEventListener = undefined))
  var i = n(86178) /* 86178__mod */,
    r = n(30396) /* 30396__mod */,
    o = n(76702) /* 76702__mod */
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
