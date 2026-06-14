/**
 * Webpack Module #36889
 * @exports SequenceAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.SequenceAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var t, n, r, o, a
            return i.__generator(this, function (s) {
              switch (s.label) {
                case 0:
                  ;(s.trys.push([0, 5, 6, 7]), (t = i.__values(e)), (n = t.next()), (s.label = 1))
                case 1:
                  return n.done ? [3, 4] : [4, n.value.run()]
                case 2:
                  ;(s.sent(), (s.label = 3))
                case 3:
                  return ((n = t.next()), [3, 1])
                case 4:
                  return [3, 7]
                case 5:
                  return ((r = s.sent()), (o = { error: r }), [3, 7])
                case 6:
                  try {
                    n && !n.done && (a = t.return) && a.call(t)
                  } finally {
                    if (o) throw o.error
                  }
                  return [7]
                case 7:
                  return [2]
              }
            })
          })
        }),
        t
      )
    })(n(8734) /* 8734_Action */.Action)
  t.SequenceAction = r
}
