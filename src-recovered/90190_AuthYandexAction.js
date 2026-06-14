/**
 * Webpack Module #90190
 * @exports AuthYandexAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.AuthYandexAction = void 0))
  var i = n(70655),
    r = n(86178),
    o = n(84194),
    a = n(48616),
    s = n(86700),
    u = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              return this.social.me
                ? [2, e.prototype.execute.call(this)]
                : (o.log.warn("AuthYandexAction not supported"), [2])
            })
          })
        }),
        (t.prototype.getPlayerInfo = function () {
          return i.__awaiter(this, void 0, void 0, function () {
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
          void 0,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(a.AuthActionBase)
  t.AuthYandexAction = u
}
