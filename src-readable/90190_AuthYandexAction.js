/**
 * Webpack Module #90190
 * @exports AuthYandexAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.AuthYandexAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86178) /* 86178__mod */,
    o = n(84194) /* 84194__mod */,
    a = n(48616) /* 48616__mod */,
    s = n(86700) /* 86700_MetadataReader */,
    u = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (t) {
              return this.social.me
                ? [2, e.prototype.execute.call(this)]
                : (o.log.warn("AuthYandexAction not supported"), [2])
            })
          })
        }),
        (t.prototype.getPlayerInfo = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            var e, t, n
            return i.__generator(this, function (i) {
              return (
                (e = this.social.me.rawData),
                (t = this.social.me.id),
                e && (n = e.signature),
                [2, { id: t, signature: n }]
              )
            })
          })
        }),
        i.__decorate(
          [(0, s.inject)(r.TypesSocial.model), i.__metadata("design:type", Object)],
          t.prototype,
          "social",
          undefined,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(a.AuthActionBase)
  t.AuthYandexAction = u
}
