/**
 * Webpack Module #5744
 * @exports LazyServiceIdentifer
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.inject = t.LazyServiceIdentifer = void 0))
  var i = n(16674),
    r = n(6867),
    o = n(47738),
    a = n(99934),
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
        if (void 0 === e) throw new Error(i.UNDEFINED_INJECT_ANNOTATION(t.name))
        var u = new o.Metadata(r.INJECT_TAG, e)
        "number" == typeof s ? a.tagParameter(t, n, s, u) : a.tagProperty(t, n, u)
      }
    }))
}
