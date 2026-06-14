/**
 * Webpack Module #77499
 * @exports UserDataLocalStorage
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.UserDataLocalStorage = void 0))
  var i = n(70655),
    r = n(84194),
    o = n(86700),
    a = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.ls = window.localStorage), (t.keyPrefix = ""), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.getCookie = function (e) {
          return this.ls.getItem("".concat(this.keyPrefix).concat(e)) || ""
        }),
        (t.prototype.getCookieValue = function (e) {
          var t = this.getCookie(e)
          if (t) {
            var n = void 0
            try {
              n = JSON.parse(t)
            } catch (e) {
              ;(r.log.warn(e, "raw dataString returned"), (n = t))
            }
            return n
          }
        }),
        (t.prototype.setCookie = function (e, t) {
          try {
            this.ls.setItem("".concat(this.keyPrefix).concat(e), t)
          } catch (e) {
            r.log.error(e)
          }
        }),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(n(30945).UserDataWeb)
  t.UserDataLocalStorage = a
}
