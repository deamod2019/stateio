/**
 * Webpack Module #90134
 * @exports UrlParser
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.UrlParser = void 0))
  var i = n(70655),
    r = (function () {
      function e() {
        this.params = {}
      }
      return (
        (e.prototype.parseUri = function () {
          var e = this,
            t = window.location.search.substr(1).split("&")
          t.length &&
            t.forEach(function (t) {
              var n = i.__read(t.split("="), 2),
                r = n[0],
                o = n[1]
              e.params[r] = o
            })
        }),
        (e.prototype.getParam = function (e) {
          return void 0 !== this.params[e] ? this.params[e] : null
        }),
        e
      )
    })()
  t.UrlParser = r
}
