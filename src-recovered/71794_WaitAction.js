/**
 * Webpack Module #71794
 * @exports WaitAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.WaitAction = void 0))
  var i = n(70655),
    r = n(86700),
    o = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (n = t),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
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
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              return [2, new n().run(e)]
            })
          })
        }),
        (t.sec = function (e) {
          return (
            void 0 === e && (e = 1),
            i.__awaiter(this, void 0, void 0, function () {
              return i.__generator(this, function (t) {
                return [2, new n().run(1e3 * e)]
              })
            })
          )
        }),
        (t.frame = function (e) {
          return (
            void 0 === e && (e = 1),
            i.__awaiter(this, void 0, void 0, function () {
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
    })(n(8734).Action)
  t.WaitAction = o
}
