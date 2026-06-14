/**
 * Webpack Module #85265
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.isStackOverflowExeption = undefined))
  var i = n(16674) /* 16674_STACK_OVERFLOW */
  t.isStackOverflowExeption = function (e) {
    return e instanceof RangeError || e.message === i.STACK_OVERFLOW
  }
}
