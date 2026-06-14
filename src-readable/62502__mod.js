/**
 * Webpack Module #62502
 * (barrel / re‑export module)
 */
// (e/*module*/) =>
{
  ;("use strict")
  e.exports = {
    isString: function (e) {
      return "string" == typeof e
    },
    isObject: function (e) {
      return "object" == typeof e && null !== e
    },
    isNull: function (e) {
      return null === e
    },
    isNullOrUndefined: function (e) {
      return null == e
    },
  }
}
