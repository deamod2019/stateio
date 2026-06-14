/**
 * Webpack Module #33977
 * @exports LinkedComponentList
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LinkedComponentList = undefined))
  var i = n(70655) /* 70655__mod */,
    r = (function () {
      function e() {}
      return (
        Object.defineProperty(e.prototype, "head", {
          get: function () {
            return this._head
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "isEmpty", {
          get: function () {
            return undefined === this._head
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.add = function (e) {
          for (var t = undefined, n = this._head; undefined !== n; ) {
            if (n === e)
              throw new Error(
                "Component is already appended, appending it once again will break linked items order",
              )
            ;((t = n), (n = n.next))
          }
          undefined === this._head ? (this._head = e) : (t.next = e)
        }),
        (e.prototype.remove = function (e) {
          var t = i.__read(this.find(e), 2),
            n = t[0],
            r = t[1]
          return undefined !== r && (undefined === n ? (this._head = r.next) : (n.next = r.next), true)
        }),
        (e.prototype.nodes = function () {
          var e
          return i.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                ;((e = this.head), (t.label = 1))
              case 1:
                return undefined === e ? [3, 3] : [4, e]
              case 2:
                return (t.sent(), (e = e.next), [3, 1])
              case 3:
                return [2]
            }
          })
        }),
        (e.prototype.iterate = function (e) {
          var t, n
          try {
            for (var r = i.__values(this.nodes()), o = r.next(); !o.done; o = r.next()) {
              e(o.value)
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              o && !o.done && (n = r.return) && n.call(r)
            } finally {
              if (t) throw t.error
            }
          }
        }),
        (e.prototype.clear = function () {
          this._head = undefined
        }),
        (e.prototype.find = function (e) {
          for (var t, n = this._head; undefined !== n; ) {
            if (n === e) return [t, n]
            ;((t = n), (n = n.next))
          }
          return [undefined, undefined]
        }),
        e
      )
    })()
  t.LinkedComponentList = r
}
