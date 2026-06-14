/**
 * Webpack Module #64315
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.injectable = void 0))
  var i = n(16674),
    r = n(6867)
  t.injectable = function () {
    return function (e) {
      if (Reflect.hasOwnMetadata(r.PARAM_TYPES, e))
        throw new Error(i.DUPLICATED_INJECTABLE_DECORATOR)
      var t = Reflect.getMetadata(r.DESIGN_PARAM_TYPES, e) || []
      return (Reflect.defineMetadata(r.PARAM_TYPES, t, e), e)
    }
  }
}
