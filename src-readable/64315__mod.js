/**
 * Webpack Module #64315
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.injectable = undefined))
  var i = n(16674) /* 16674_STACK_OVERFLOW */,
    r = n(6867) /* 6867_NON_CUSTOM_TAG_KEYS */
  t.injectable = function () {
    return function (e) {
      if (Reflect.hasOwnMetadata(r.PARAM_TYPES, e))
        throw new Error(i.DUPLICATED_INJECTABLE_DECORATOR)
      var t = Reflect.getMetadata(r.DESIGN_PARAM_TYPES, e) || []
      return (Reflect.defineMetadata(r.PARAM_TYPES, t, e), e)
    }
  }
}
