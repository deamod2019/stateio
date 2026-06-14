/**
 * Webpack Module #92819
 * @exports UserDataBase
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.UserDataBase = void 0))
  var i = n(70655),
    r = n(86700),
    o = n(84194),
    a = (function () {
      function e() {
        ;((this.lastSaveCall = NaN), (this.cache = new Map()))
      }
      var t
      return (
        (t = e),
        (e.prototype.get = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
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
                      return o.cache.set(e, void 0)
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
            void 0 === i && (i = t.DEFAULT_UPLOAD_DELAY),
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
            ? ((this.lastSaveCall = e), !1)
            : e - this.lastSaveCall > t.FORCED_WRITE_INTERVAL
        }),
        (e.prototype.erase = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var n = this
            return i.__generator(this, function (i) {
              return (
                this.cache.set(e, void 0),
                this.canWrite()
                  ? this.internalWrite()
                  : (clearTimeout(this._uploadTimeout),
                    (this._uploadTimeout = setTimeout(function () {
                      return n.write()
                    }, t.DEFAULT_UPLOAD_DELAY))),
                [2, !0]
              )
            })
          })
        }),
        (e.prototype.write = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
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
          return i.__awaiter(this, void 0, void 0, function () {
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
