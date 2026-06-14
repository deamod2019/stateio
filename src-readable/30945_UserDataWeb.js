/**
 * Webpack Module #30945
 * @exports UserDataWeb, COOKIE_NAME
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.UserDataWeb = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = n(84194) /* 84194__mod */,
    a = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.read = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var t,
              n,
              r = this
            return i.__generator(this, function (i) {
              return (
                (t = Array.from(this.cache.keys())),
                (n = {}),
                (e || t).forEach(function (e) {
                  var t = r.getCookieValue(e)
                  ;((n[e] = t), r.cache.set(e, t))
                }),
                o.log.trace(this, "read", n),
                (this.lastSync = Date.now()),
                [2]
              )
            })
          })
        }),
        (t.prototype.write = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var t,
              n = this
            return i.__generator(this, function (i) {
              return (
                (t = {}),
                this.cache.forEach(function (i, r) {
                  ;(e && !e.includes(r)) || ((t[r] = i), n.setCookieValue(r, i))
                }),
                o.log.trace(this, "write", t),
                [2]
              )
            })
          })
        }),
        (t.prototype.getCookieValue = function (e) {
          var t = this.getCookie(e)
          if (t) return JSON.parse(t)
        }),
        (t.prototype.setCookieValue = function (e, t) {
          this.setCookie(e, "object" == typeof t ? JSON.stringify(t) : "" + t)
        }),
        (t.prototype.setCookie = function (e, t, n) {
          undefined === n && (n = 10080)
          var i = new Date()
          ;(i.setMinutes(i.getMinutes() + n),
            (document.cookie =
              e + "=" + escape(t) + (null == n ? "" : ";expires=" + i.toUTCString())))
        }),
        (t.prototype.getCookie = function (e) {
          for (
            var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), i = 0;
            i < n.length;
            i++
          ) {
            for (var r = n[i]; " " == r.charAt(0); ) r = r.substring(1)
            if (0 == r.indexOf(t)) return r.substring(t.length, r.length)
          }
          return ""
        }),
        (t.COOKIE_NAME = "dp-instant"),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(92819) /* 92819_UserDataBase */.UserDataBase)
  t.UserDataWeb = a
}
