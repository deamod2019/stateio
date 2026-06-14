/**
 * Webpack Module #37360
 * @exports LazyAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LazyAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = (function (e) {
      function t(t) {
        var n = e.call(this) || this
        return ((n.callback = t), n)
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
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
    })(n(8734) /* 8734_Action */.Action)
  t.LazyAction = r
}
