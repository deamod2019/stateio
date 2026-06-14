/**
 * Webpack Module #7014
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.postConstruct = undefined))
  var i = n(16674) /* 16674_STACK_OVERFLOW */,
    r = n(6867) /* 6867_NON_CUSTOM_TAG_KEYS */,
    o = n(47738) /* 47738_Metadata */
  t.postConstruct = function () {
    return function (e, t, n) {
      var a = new o.Metadata(r.POST_CONSTRUCT, t)
      if (Reflect.hasOwnMetadata(r.POST_CONSTRUCT, e.constructor))
        throw new Error(i.MULTIPLE_POST_CONSTRUCT_METHODS)
      Reflect.defineMetadata(r.POST_CONSTRUCT, a, e.constructor)
    }
  }
}
