/**
 * Webpack Module #196
 * @exports DestroyFieldAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.DestroyFieldAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86700) /* 86700_MetadataReader */,
    a = n(95781) /* 95781_TypesGame */,
    s = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, undefined, Promise, function () {
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
