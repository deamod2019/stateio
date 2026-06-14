/**
 * Webpack Module #77499
 * @exports UserDataLocalStorage
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.UserDataLocalStorage = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(84194) /* 84194__mod */,
    o = n(86700) /* 86700_MetadataReader */,
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
            var n = undefined
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
    })(n(30945) /* 30945_UserDataWeb */.UserDataWeb)
  t.UserDataLocalStorage = a
}
