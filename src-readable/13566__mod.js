/**
 * Webpack Module #13566
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.startGame = undefined))
  var i = n(44656) /* 44656__mod */,
    r = n(86178) /* 86178__mod */
  t.startGame = function () {
    return i.di.get(r.TypesFlow.boot).run()
  }
}
