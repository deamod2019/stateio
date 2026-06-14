/**
 * Webpack Module #17797
 * @exports Signal
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Signal = void 0))
  var i = n(70655),
    r = (function () {
      function e() {
        this.handlers = []
      }
      return (
        Object.defineProperty(e.prototype, "hasHandlers", {
          get: function () {
            return this.handlers.length > 0
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "handlersAmount", {
          get: function () {
            return this.handlers.length
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.connect = function (e, t) {
          void 0 === t && (t = 0)
          var n,
            i = this.handlers.find(function (t) {
              return t.equals(e)
            })
          if (void 0 !== i) ((n = i.priority !== t), (i.priority = t))
          else {
            var r = this.handlers[this.handlers.length - 1]
            ;(this.handlers.push(new o(e, t)), (n = void 0 !== r && r.priority > t))
          }
          n &&
            this.handlers.sort(function (e, t) {
              return e.priority - t.priority
            })
        }),
        (e.prototype.disconnect = function (e) {
          var t = this.handlers.findIndex(function (t) {
            return t.equals(e)
          })
          t >= 0 && this.handlers.splice(t, 1)
        }),
        (e.prototype.disconnectAll = function () {
          this.handlers.length = 0
        }),
        (e.prototype.emit = function () {
          for (var e, t, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
          try {
            for (var o = i.__values(this.handlers), a = o.next(); !a.done; a = o.next()) {
              var s = a.value
              s.handle.apply(s, i.__spreadArray([], i.__read(n), !1))
            }
          } catch (t) {
            e = { error: t }
          } finally {
            try {
              a && !a.done && (t = o.return) && t.call(o)
            } finally {
              if (e) throw e.error
            }
          }
        }),
        e
      )
    })()
  t.Signal = r
  var o = (function () {
    function e(e, t) {
      ;((this.handler = e), (this.priority = t))
    }
    return (
      (e.prototype.equals = function (e) {
        return this.handler === e
      }),
      (e.prototype.handle = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
        this.handler.apply(this, i.__spreadArray([], i.__read(e), !1))
      }),
      e
    )
  })()
}
