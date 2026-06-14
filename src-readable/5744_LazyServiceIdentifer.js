/**
 * Webpack Module #5744
 * @exports LazyServiceIdentifer
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.inject = t.LazyServiceIdentifer = undefined))
  var i = n(16674) /* 16674_STACK_OVERFLOW */,
    r = n(6867) /* 6867_NON_CUSTOM_TAG_KEYS */,
    o = n(47738) /* 47738_Metadata */,
    a = n(99934) /* 99934__mod */,
    s = (function () {
      function e(e) {
        this._cb = e
      }
      return (
        (e.prototype.unwrap = function () {
          return this._cb()
        }),
        e
      )
    })()
  ;((t.LazyServiceIdentifer = s),
    (t.inject = function (e) {
      return function (t, n, s) {
        if (undefined === e) throw new Error(i.UNDEFINED_INJECT_ANNOTATION(t.name))
        var u = new o.Metadata(r.INJECT_TAG, e)
        "number" == typeof s ? a.tagParameter(t, n, s, u) : a.tagProperty(t, n, u)
      }
    }))
}
