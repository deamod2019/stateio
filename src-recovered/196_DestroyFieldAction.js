/**
 * Webpack Module #196
 * @exports DestroyFieldAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.DestroyFieldAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86700),
    a = n(95781),
    s = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, void 0, Promise, function () {
            var e
            return i.__generator(this, function (t) {
              return (
                r.di.isBound(a.TypesGame.views.fieldInstance) &&
                  (null == (e = r.di.get(a.TypesGame.views.fieldInstance)) ||
                    e.parent.removeChild(e),
                  r.di.unbind(a.TypesGame.views.fieldInstance)),
                [2]
              )
            })
          })
        }),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.Action)
  t.DestroyFieldAction = s
}
