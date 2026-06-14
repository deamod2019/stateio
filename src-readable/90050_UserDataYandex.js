/**
 * Webpack Module #90050
 * @exports UserDataYandex
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.UserDataYandex = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = n(84194) /* 84194__mod */,
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
            undefined === t && (t = false),
            i.__awaiter(this, undefined, undefined, function () {
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
          return i.__awaiter(this, undefined, undefined, function () {
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
    })(n(48616) /* 48616__mod */.UserDataBase)
  t.UserDataYandex = a
}
