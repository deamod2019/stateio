/**
 * Webpack Module #67149
 * @exports Cookie
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Cookie = void 0))
  var n = (function () {
    function e() {}
    return (
      (e.get = function (e) {
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
      (e.set = function (e, t, n) {
        void 0 === n && (n = 10080)
        var i = new Date()
        ;(i.setMinutes(i.getMinutes() + n),
          (document.cookie =
            e + "=" + escape(t) + (null == n ? "" : ";expires=" + i.toUTCString())))
      }),
      (e.clear = function (t) {
        e.set(t, "", -1)
      }),
      e
    )
  })()
  t.Cookie = n
}
