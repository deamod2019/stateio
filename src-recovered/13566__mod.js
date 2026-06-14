/**
 * Webpack Module #13566
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.startGame = void 0))
  var i = n(44656),
    r = n(86178)
  t.startGame = function () {
    return i.di.get(r.TypesFlow.boot).run()
  }
}
