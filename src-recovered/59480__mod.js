/**
 * Webpack Module #59480
 * (barrel / re‑export module)
 */
// (e/*module*/) =>
{
  ;("use strict")
  function t() {
    if (!(this instanceof t)) return new t()
    ;((this.queue = []), (this.cache = null))
  }
  ;((t.prototype.matrix = function (e) {
    return (
      (1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3] && 0 === e[4] && 0 === e[5]) ||
        ((this.cache = null), this.queue.push(e)),
      this
    )
  }),
    (t.prototype.translate = function (e, t) {
      return (
        (0 === e && 0 === t) || ((this.cache = null), this.queue.push([1, 0, 0, 1, e, t])),
        this
      )
    }),
    (t.prototype.scale = function (e, t) {
      return (
        (1 === e && 1 === t) || ((this.cache = null), this.queue.push([e, 0, 0, t, 0, 0])),
        this
      )
    }),
    (t.prototype.rotate = function (e, t, n) {
      var i, r, o
      return (
        0 !== e &&
          (this.translate(t, n),
          (i = (e * Math.PI) / 180),
          (r = Math.cos(i)),
          (o = Math.sin(i)),
          this.queue.push([r, o, -o, r, 0, 0]),
          (this.cache = null),
          this.translate(-t, -n)),
        this
      )
    }),
    (t.prototype.skewX = function (e) {
      return (
        0 !== e &&
          ((this.cache = null), this.queue.push([1, 0, Math.tan((e * Math.PI) / 180), 1, 0, 0])),
        this
      )
    }),
    (t.prototype.skewY = function (e) {
      return (
        0 !== e &&
          ((this.cache = null), this.queue.push([1, Math.tan((e * Math.PI) / 180), 0, 1, 0, 0])),
        this
      )
    }),
    (t.prototype.toArray = function () {
      if (this.cache) return this.cache
      if (!this.queue.length) return ((this.cache = [1, 0, 0, 1, 0, 0]), this.cache)
      if (((this.cache = this.queue[0]), 1 === this.queue.length)) return this.cache
      for (var e = 1; e < this.queue.length; e++)
        this.cache =
          ((t = this.cache),
          (n = this.queue[e]),
          [
            t[0] * n[0] + t[2] * n[1],
            t[1] * n[0] + t[3] * n[1],
            t[0] * n[2] + t[2] * n[3],
            t[1] * n[2] + t[3] * n[3],
            t[0] * n[4] + t[2] * n[5] + t[4],
            t[1] * n[4] + t[3] * n[5] + t[5],
          ])
      var t, n
      return this.cache
    }),
    (t.prototype.calc = function (e, t, n) {
      var i
      return this.queue.length
        ? (this.cache || (this.cache = this.toArray()),
          [
            e * (i = this.cache)[0] + t * i[2] + (n ? 0 : i[4]),
            e * i[1] + t * i[3] + (n ? 0 : i[5]),
          ])
        : [e, t]
    }),
    (e.exports = t))
}
