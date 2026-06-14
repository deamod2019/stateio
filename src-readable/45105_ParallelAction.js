/**
 * Webpack Module #45105
 * @exports ParallelAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ParallelAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
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
    })(n(8734) /* 8734_Action */.Action)
  t.ParallelAction = r
}
