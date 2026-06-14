/**
 * Webpack Module #84879
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  Object.defineProperty(t, "__esModule", { value: !0 })
  var i = n(7375)
  t.default = function (e, t) {
    return (
      void 0 === t && (t = !0),
      {
        lazyInject: i.makePropertyInjectDecorator(e, t),
        lazyInjectNamed: i.makePropertyInjectNamedDecorator(e, t),
        lazyInjectTagged: i.makePropertyInjectTaggedDecorator(e, t),
        lazyMultiInject: i.makePropertyMultiInjectDecorator(e, t),
      }
    )
  }
}
