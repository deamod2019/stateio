/**
 * Webpack Module #90050
 * @exports UserDataYandex
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.UserDataYandex = void 0))
  var i = n(70655),
    r = n(86700),
    o = n(84194),
    a = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.init = function (e) {
          ;((this._player = e), this.read())
        }),
        (t.prototype.write = function (e, t) {
          return (
            void 0 === t && (t = !1),
            i.__awaiter(this, void 0, void 0, function () {
              var n
              return i.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (n = {}),
                      this.cache.forEach(function (t, i) {
                        ;(e && !e.includes(i)) || (n[i] = t)
                      }),
                      o.log.trace(this, "write", n),
                      this._player && this._player.setData
                        ? [4, this._player.setData(n, t)]
                        : [3, 2]
                    )
                  case 1:
                    return (i.sent(), [3, 3])
                  case 2:
                    ;(o.log.warn("UserDataYandex::write. Not supported"), (i.label = 3))
                  case 3:
                    return [2]
                }
              })
            })
          )
        }),
        (t.prototype.read = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t,
              n = this
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return this._player && this._player.getData
                    ? [4, this._player.getData(e)]
                    : [3, 2]
                case 1:
                  return (
                    (t = i.sent()),
                    o.log.trace(this, "read", t),
                    t &&
                      Object.keys(t).forEach(function (e) {
                        n.cache.set(e, t[e])
                      }),
                    (this.lastSync = Date.now()),
                    [3, 3]
                  )
                case 2:
                  ;(o.log.warn("UserDataYandex::read. Not supported"), (i.label = 3))
                case 3:
                  return [2]
              }
            })
          })
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(48616).UserDataBase)
  t.UserDataYandex = a
}
