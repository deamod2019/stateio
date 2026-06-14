/**
 * Webpack Module #5183
 * @exports CookieModelYandex
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.CookieModelYandex = void 0))
  var i = n(70655),
    r = n(86178),
    o = n(86700),
    a = n(56792),
    s = n(86178),
    u = n(44656)
  ;(0, o.injectable)()
  var l = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this
      return ((t._storeCopy = t.getDefaultStore()), (t._isSyncedAfterAuthStateChange = !1), t)
    }
    return (
      i.__extends(t, e),
      (t.prototype.sync = function () {
        return i.__awaiter(this, void 0, Promise, function () {
          var t = this
          return i.__generator(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, e.prototype.sync.call(this)]
              case 1:
                return (
                  n.sent(),
                  this.social.userAuthorized ||
                    Object.keys(this._storeCopy).forEach(function (e) {
                      t._storeCopy[e] = t.get(e)
                    }),
                  [2]
                )
            }
          })
        })
      }),
      (t.prototype.syncAfterAuthStateChange = function () {
        return i.__awaiter(this, void 0, Promise, function () {
          var e
          return i.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (e = !1),
                  this._isSyncedAfterAuthStateChange
                    ? [3, 2]
                    : this.social.userAuthorized
                      ? [4, this.internalSync()]
                      : [3, 2]
                )
              case 1:
                ;(t.sent(),
                  (this._isSyncedAfterAuthStateChange = !0),
                  (e = !0),
                  u.di.get(s.TypesCore.dispatcher).emit("YANDEX_SYNC", { coins: this.coins }),
                  (t.label = 2))
              case 2:
                return [2, e]
            }
          })
        })
      }),
      (t.prototype.internalSync = function () {
        return i.__awaiter(this, void 0, void 0, function () {
          var e,
            t = this
          return i.__generator(this, function (n) {
            switch (n.label) {
              case 0:
                return this.social.userAuthorized
                  ? [4, this.social.cookie.get(Object.keys(this._storeCopy))]
                  : [3, 2]
              case 1:
                ;((e = n.sent()),
                  Object.keys(e).forEach(function (n) {
                    var r = void 0
                    switch (n) {
                      case a.CookieModelKey.selected_color_set_id:
                      case a.CookieModelKey.ctx_history:
                        r = t._storeCopy[n]
                        break
                      case a.CookieModelKey.lastLaunch:
                        r = Date.now()
                        break
                      case a.CookieModelKey.timeDiff:
                        r = Date.now() - t.lastLaunch
                        break
                      case a.CookieModelKey.user_buildings_set:
                      case a.CookieModelKey.user_fighter_set:
                        var o = t._storeCopy[n],
                          s = new Set(
                            i.__spreadArray(
                              i.__spreadArray([], i.__read(JSON.parse(e[n])), !1),
                              i.__read(JSON.parse(o)),
                              !1,
                            ),
                          )
                        r = Array.from(s)
                        break
                      default:
                        var u = 1 * e[n]
                        r = u > t._storeCopy[n] ? u : t._storeCopy[n]
                    }
                    r && t.set(n, Array.isArray(r) ? JSON.stringify(r) : r)
                  }),
                  (n.label = 2))
              case 2:
                return [2]
            }
          })
        })
      }),
      (t.prototype.set = function (t, n) {
        ;(e.prototype.set.call(this, t, n), this.social.userAuthorized || (this._storeCopy[t] = n))
      }),
      i.__decorate(
        [(0, o.inject)(r.TypesSocial.model), i.__metadata("design:type", Object)],
        t.prototype,
        "social",
        void 0,
      ),
      t
    )
  })(a.CookieModel)
  t.CookieModelYandex = l
}
