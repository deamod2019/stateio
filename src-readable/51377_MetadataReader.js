/**
 * Webpack Module #51377
 * @exports MetadataReader
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.MetadataReader = undefined))
  var i = n(6867) /* 6867_NON_CUSTOM_TAG_KEYS */,
    r = (function () {
      function e() {}
      return (
        (e.prototype.getConstructorMetadata = function (e) {
          return {
            compilerGeneratedMetadata: Reflect.getMetadata(i.PARAM_TYPES, e),
            userGeneratedMetadata: Reflect.getMetadata(i.TAGGED, e) || {},
          }
        }),
        (e.prototype.getPropertiesMetadata = function (e) {
          return Reflect.getMetadata(i.TAGGED_PROP, e) || []
        }),
        e
      )
    })()
  t.MetadataReader = r
}
