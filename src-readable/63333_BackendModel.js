/**
 * Webpack Module #63333
 * @exports BackendModel
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.BackendModel = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t._defaultPayload = {}), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.performHTTPRequest = function (e, t, n, r) {
          return (
            undefined === e && (e = "/"),
            undefined === n && (n = "GET"),
            undefined === r && (r = true),
            i.__awaiter(this, undefined, undefined, function () {
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
            undefined === n && (n = true),
            i.__awaiter(this, undefined, undefined, function () {
              return i.__generator(this, function (i) {
                return [2, this.performHTTPRequest(e, t, "POST", n)]
              })
            })
          )
        }),
        (t.prototype.put = function (e, t, n) {
          return (
            undefined === n && (n = true),
            i.__awaiter(this, undefined, undefined, function () {
              return i.__generator(this, function (i) {
                return [2, this.performHTTPRequest(e, t, "PUT", n)]
              })
            })
          )
        }),
        (t.prototype.delete = function (e, t, n) {
          return (
            undefined === n && (n = true),
            i.__awaiter(this, undefined, undefined, function () {
              return i.__generator(this, function (i) {
                return [2, this.performHTTPRequest(e, t, "DELETE", n)]
              })
            })
          )
        }),
        (t.prototype.get = function (e, t) {
          return (
            undefined === t && (t = true),
            i.__awaiter(this, undefined, undefined, function () {
              return i.__generator(this, function (n) {
                return [2, this.performHTTPRequest(e, undefined, "GET", t)]
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
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.getAuthorizationHeader = function () {
          return null
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(93668) /* 93668_HTTPRequest */.HTTPRequest)
  t.BackendModel = o
}
