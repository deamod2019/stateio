/**
 * Webpack Module #45105
 * @exports ParallelAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ParallelAction = void 0))
  var i = n(70655),
    r = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t, n, r, o, a, s
            return i.__generator(this, function (u) {
              switch (u.label) {
                case 0:
                  t = []
                  try {
                    for (n = i.__values(e), r = n.next(); !r.done; r = n.next())
                      ((o = r.value), t.push(o.run()))
                  } catch (e) {
                    a = { error: e }
                  } finally {
                    try {
                      r && !r.done && (s = n.return) && s.call(n)
                    } finally {
                      if (a) throw a.error
                    }
                  }
                  return [4, Promise.all(t)]
                case 1:
                  return [2, u.sent()]
              }
            })
          })
        }),
        t
      )
    })(n(8734).Action)
  t.ParallelAction = r
}
