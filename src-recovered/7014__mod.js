/**
 * Webpack Module #7014
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.postConstruct = void 0))
  var i = n(16674),
    r = n(6867),
    o = n(47738)
  t.postConstruct = function () {
    return function (e, t, n) {
      var a = new o.Metadata(r.POST_CONSTRUCT, t)
      if (Reflect.hasOwnMetadata(r.POST_CONSTRUCT, e.constructor))
        throw new Error(i.MULTIPLE_POST_CONSTRUCT_METHODS)
      Reflect.defineMetadata(r.POST_CONSTRUCT, a, e.constructor)
    }
  }
}
