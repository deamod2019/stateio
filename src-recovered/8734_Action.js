/**
 * Webpack Module #8734
 * @exports Action
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Action = void 0))
  var i = n(70655),
    r = n(86700),
    o = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.run = function (e) {
          var t, n
          return i.__awaiter(this, void 0, void 0, function () {
            var r,
              o,
              a,
              s,
              u = this
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  ;((this.data = e),
                    (r = void 0),
                    (o = this.execute(this.data)),
                    (a = new Promise(function (e, t) {
                      ;((u._resolve = e), (u._reject = t))
                    })),
                    (i.label = 1))
                case 1:
                  return (i.trys.push([1, 3, , 4]), [4, Promise.race([o, a])])
                case 2:
                  return ((r = i.sent()), [3, 4])
                case 3:
                  if (((s = i.sent()), !this.onFailed)) throw s
                  return (null === (t = this.onFailed) || void 0 === t || t.call(null), [3, 4])
                case 4:
                  return (null === (n = this.onFinish) || void 0 === n || n.call(null), [2, r])
              }
            })
          })
        }),
        (t.prototype.terminate = function (e) {
          var t
          null === (t = this._reject) || void 0 === t || t.call(null, e)
        }),
        (t.prototype.destroy = function () {
          ;(delete this.data,
            delete this._resolve,
            delete this._reject,
            delete this.onFinish,
            delete this.onFailed)
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(13011).GlobalEventProvider)
  t.Action = o
}
