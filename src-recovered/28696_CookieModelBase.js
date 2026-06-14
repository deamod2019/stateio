/**
 * Webpack Module #28696
 * @exports CookieModelBase
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.CookieModelBase = void 0))
  var i = n(70655),
    r = n(84194),
    o = n(86178),
    a = n(48616),
    s = n(86700),
    u = (function () {
      function e() {
        this._store = this.getDefaultStore()
      }
      var t
      return (
        (e.prototype.sync = function () {
          return i.__awaiter(this, void 0, Promise, function () {
            var e,
              t,
              n = this
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, (e = this.social.cookie).get(Object.keys(this._store))]
                case 1:
                  return (
                    (t = i.sent()),
                    Object.keys(t).forEach(function (i) {
                      if (void 0 === t[i]) {
                        var o = n._store[i]
                        ;(r.log.debug(i, "set to default", o), e.save(i, o))
                      } else n._store[i] = t[i]
                    }),
                    [2]
                  )
              }
            })
          })
        }),
        (e.prototype.get = function (e) {
          return this._store[e]
        }),
        (e.prototype.set = function (e, t) {
          ;((this._store[e] = t), this.social.cookie.save(e, t))
        }),
        (e.prototype.clear = function () {
          var e = this
          ;((this._store = this.getDefaultStore()),
            Object.keys(this._store).forEach(function (t) {
              var n = e._store[t]
              ;(r.log.debug(t, "set to default", n), e.social.cookie.save(t, n))
            }))
        }),
        i.__decorate(
          [
            (0, s.inject)(o.TypesSocial.model),
            i.__metadata(
              "design:type",
              "function" == typeof (t = void 0 !== a.ISocial && a.ISocial) ? t : Object,
            ),
          ],
          e.prototype,
          "social",
          void 0,
        ),
        (e = i.__decorate([(0, s.injectable)(), i.__metadata("design:paramtypes", [])], e))
      )
    })()
  t.CookieModelBase = u
}
