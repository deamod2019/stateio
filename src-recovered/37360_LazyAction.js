/**
 * Webpack Module #37360
 * @exports LazyAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LazyAction = void 0))
  var i = n(70655),
    r = (function (e) {
      function t(t) {
        var n = e.call(this) || this
        return ((n.callback = t), n)
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (t = this.callback(e)) instanceof Promise ? [4, t] : [3, 2]
                case 1:
                  return [2, n.sent()]
                case 2:
                  return [2, t]
              }
            })
          })
        }),
        t
      )
    })(n(8734).Action)
  t.LazyAction = r
}
