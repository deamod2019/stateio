/**
 * Webpack Module #38224
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.bindMediator = void 0),
    (t.bindMediator = function (e) {
      return function (t, n) {
        return (
          t.container.isBound(e) || t.container.bind(e).toSelf(),
          (n.mediator = t.container.get(e)),
          n
        )
      }
    }))
}
