/**
 * Webpack Module #88460
 * @exports QueryableString
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.QueryableString = undefined))
  var n = (function () {
    function e(e) {
      this.str = e
    }
    return (
      (e.prototype.startsWith = function (e) {
        return 0 === this.str.indexOf(e)
      }),
      (e.prototype.endsWith = function (e) {
        var t,
          n = e.split("").reverse().join("")
        return ((t = this.str.split("").reverse().join("")), this.startsWith.call({ str: t }, n))
      }),
      (e.prototype.contains = function (e) {
        return -1 !== this.str.indexOf(e)
      }),
      (e.prototype.equals = function (e) {
        return this.str === e
      }),
      (e.prototype.value = function () {
        return this.str
      }),
      e
    )
  })()
  t.QueryableString = n
}
