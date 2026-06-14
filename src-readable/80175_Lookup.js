/**
 * Webpack Module #80175
 * @exports Lookup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Lookup = undefined))
  var i = n(16674) /* 16674_STACK_OVERFLOW */,
    r = (function () {
      function e() {
        this._map = new Map()
      }
      return (
        (e.prototype.getMap = function () {
          return this._map
        }),
        (e.prototype.add = function (e, t) {
          if (null == e) throw new Error(i.NULL_ARGUMENT)
          if (null == t) throw new Error(i.NULL_ARGUMENT)
          var n = this._map.get(e)
          undefined !== n ? (n.push(t), this._map.set(e, n)) : this._map.set(e, [t])
        }),
        (e.prototype.get = function (e) {
          if (null == e) throw new Error(i.NULL_ARGUMENT)
          var t = this._map.get(e)
          if (undefined !== t) return t
          throw new Error(i.KEY_NOT_FOUND)
        }),
        (e.prototype.remove = function (e) {
          if (null == e) throw new Error(i.NULL_ARGUMENT)
          if (!this._map.delete(e)) throw new Error(i.KEY_NOT_FOUND)
        }),
        (e.prototype.removeByCondition = function (e) {
          var t = this
          this._map.forEach(function (n, i) {
            var r = n.filter(function (t) {
              return !e(t)
            })
            r.length > 0 ? t._map.set(i, r) : t._map.delete(i)
          })
        }),
        (e.prototype.hasKey = function (e) {
          if (null == e) throw new Error(i.NULL_ARGUMENT)
          return this._map.has(e)
        }),
        (e.prototype.clone = function () {
          var t = new e()
          return (
            this._map.forEach(function (e, n) {
              e.forEach(function (e) {
                return t.add(n, e.clone())
              })
            }),
            t
          )
        }),
        (e.prototype.traverse = function (e) {
          this._map.forEach(function (t, n) {
            e(n, t)
          })
        }),
        e
      )
    })()
  t.Lookup = r
}
