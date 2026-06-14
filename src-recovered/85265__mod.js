/**
 * Webpack Module #85265
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.isStackOverflowExeption = void 0))
  var i = n(16674)
  t.isStackOverflowExeption = function (e) {
    return e instanceof RangeError || e.message === i.STACK_OVERFLOW
  }
}
