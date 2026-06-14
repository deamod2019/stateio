/**
 * Webpack Module #84879
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  Object.defineProperty(t, "__esModule", { value: true })
  var i = n(7375) /* 7375__mod */
  t.default = function (e, t) {
    return (
      undefined === t && (t = true),
      {
        lazyInject: i.makePropertyInjectDecorator(e, t),
        lazyInjectNamed: i.makePropertyInjectNamedDecorator(e, t),
        lazyInjectTagged: i.makePropertyInjectTaggedDecorator(e, t),
        lazyMultiInject: i.makePropertyMultiInjectDecorator(e, t),
      }
    )
  }
}
