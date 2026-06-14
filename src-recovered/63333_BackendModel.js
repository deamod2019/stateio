/**
 * Webpack Module #63333
 * @exports BackendModel
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.BackendModel = void 0))
  var i = n(70655),
    r = n(86700),
    o = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t._defaultPayload = {}), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.performHTTPRequest = function (e, t, n, r) {
          return (
            void 0 === e && (e = "/"),
            void 0 === n && (n = "GET"),
            void 0 === r && (r = !0),
            i.__awaiter(this, void 0, void 0, function () {
              var o, a, s, u
              return i.__generator(this, function (l) {
                return (
                  (o = this._defaultHost + (e.startsWith("/") ? e : "/" + e)),
                  (a = i.__assign(i.__assign({}, this.getDefaultPayload()), t)),
                  (s = {}),
                  r && (u = this.getAuthorizationHeader()) && (s.Authorization = u),
                  [2, this.json(o, a, n, s)]
                )
              })
            })
          )
        }),
        (t.prototype.post = function (e, t, n) {
          return (
            void 0 === n && (n = !0),
            i.__awaiter(this, void 0, void 0, function () {
              return i.__generator(this, function (i) {
                return [2, this.performHTTPRequest(e, t, "POST", n)]
              })
            })
          )
        }),
        (t.prototype.put = function (e, t, n) {
          return (
            void 0 === n && (n = !0),
            i.__awaiter(this, void 0, void 0, function () {
              return i.__generator(this, function (i) {
                return [2, this.performHTTPRequest(e, t, "PUT", n)]
              })
            })
          )
        }),
        (t.prototype.delete = function (e, t, n) {
          return (
            void 0 === n && (n = !0),
            i.__awaiter(this, void 0, void 0, function () {
              return i.__generator(this, function (i) {
                return [2, this.performHTTPRequest(e, t, "DELETE", n)]
              })
            })
          )
        }),
        (t.prototype.get = function (e, t) {
          return (
            void 0 === t && (t = !0),
            i.__awaiter(this, void 0, void 0, function () {
              return i.__generator(this, function (n) {
                return [2, this.performHTTPRequest(e, void 0, "GET", t)]
              })
            })
          )
        }),
        (t.prototype.getDefaultPayload = function () {
          return this._defaultPayload || {}
        }),
        Object.defineProperty(t.prototype, "defaultHost", {
          get: function () {
            return this._defaultHost
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getAuthorizationHeader = function () {
          return null
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(93668).HTTPRequest)
  t.BackendModel = o
}
