/**
 * Webpack Module #51377
 * @exports MetadataReader
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.MetadataReader = void 0))
  var i = n(6867),
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
