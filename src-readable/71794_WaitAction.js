/**
 * Webpack Module #71794
 * @exports WaitAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.WaitAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (n = t),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (t) {
              return [
                2,
                new Promise(function (t) {
                  return setTimeout(t, e)
                }),
              ]
            })
          })
        }),
        (t.ms = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (t) {
              return [2, new n().run(e)]
            })
          })
        }),
        (t.sec = function (e) {
          return (
            undefined === e && (e = 1),
            i.__awaiter(this, undefined, undefined, function () {
              return i.__generator(this, function (t) {
                return [2, new n().run(1e3 * e)]
              })
            })
          )
        }),
        (t.frame = function (e) {
          return (
            undefined === e && (e = 1),
            i.__awaiter(this, undefined, undefined, function () {
              return i.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return --e >= 0
                      ? [
                          4,
                          new Promise(function (e) {
                            return requestAnimationFrame(e)
                          }),
                        ]
                      : [3, 2]
                  case 1:
                    return (t.sent(), [3, 0])
                  case 2:
                    return [2]
                }
              })
            })
          )
        }),
        (t = n = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(8734) /* 8734_Action */.Action)
  t.WaitAction = o
}
