/**
 * Webpack Module #92819
 * @exports UserDataBase
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.UserDataBase = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = n(84194) /* 84194__mod */,
    a = (function () {
      function e() {
        ;((this.lastSaveCall = NaN), (this.cache = new Map()))
      }
      var t
      return (
        (t = e),
        (e.prototype.get = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var t,
              n,
              r,
              o = this
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t = (Array.isArray(e) ? e : [e]) || []),
                    (n = t.filter(function (e) {
                      return !o.cache.has(e)
                    })).forEach(function (e) {
                      return o.cache.set(e, undefined)
                    }),
                    [4, this.read(n)]
                  )
                case 1:
                  return (
                    i.sent(),
                    (r = {}),
                    t.forEach(function (e) {
                      return (r[e] = o.cache.get(e))
                    }),
                    [2, r]
                  )
              }
            })
          })
        }),
        (e.prototype.save = function (e, n, i) {
          var r = this
          return (
            undefined === i && (i = t.DEFAULT_UPLOAD_DELAY),
            this.cache.set(e, n),
            this.canWrite()
              ? this.internalWrite()
              : (clearTimeout(this._uploadTimeout),
                (this._uploadTimeout = setTimeout(function () {
                  r.internalWrite()
                }, i))),
            n
          )
        }),
        (e.prototype.internalWrite = function () {
          ;(this.write(), (this.lastSaveCall = Date.now()))
        }),
        (e.prototype.canWrite = function () {
          var e = Date.now()
          return isNaN(this.lastSaveCall)
            ? ((this.lastSaveCall = e), false)
            : e - this.lastSaveCall > t.FORCED_WRITE_INTERVAL
        }),
        (e.prototype.erase = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var n = this
            return i.__generator(this, function (i) {
              return (
                this.cache.set(e, undefined),
                this.canWrite()
                  ? this.internalWrite()
                  : (clearTimeout(this._uploadTimeout),
                    (this._uploadTimeout = setTimeout(function () {
                      return n.write()
                    }, t.DEFAULT_UPLOAD_DELAY))),
                [2, true]
              )
            })
          })
        }),
        (e.prototype.write = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var t
            return i.__generator(this, function (n) {
              return (
                (t = {}),
                this.cache.forEach(function (n, i) {
                  ;(e && !e.includes(i)) || (t[i] = n)
                }),
                o.log.trace(this, "write", t),
                o.log.warn("UserDataBase::write. Not supported"),
                [2]
              )
            })
          })
        }),
        (e.prototype.read = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (t) {
              return (
                o.log.trace(this, "read", e),
                o.log.warn("UserDataBase::read. Not supported"),
                [2]
              )
            })
          })
        }),
        (e.DEFAULT_UPLOAD_DELAY = 1e3),
        (e.FORCED_WRITE_INTERVAL = 3e4),
        (e = t = i.__decorate([(0, r.injectable)()], e))
      )
    })()
  t.UserDataBase = a
}
