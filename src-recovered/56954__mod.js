/**
 * Webpack Module #56954
 * (barrel / re‑export module)
 */
// (e/*module*/) =>
{
  ;("use strict")
  var t = 1e-10,
    n = Math.PI / 180
  function i(e, t, n) {
    if (!(this instanceof i)) return new i(e, t, n)
    ;((this.rx = e), (this.ry = t), (this.ax = n))
  }
  ;((i.prototype.transform = function (e) {
    var i = Math.cos(this.ax * n),
      r = Math.sin(this.ax * n),
      o = [
        this.rx * (e[0] * i + e[2] * r),
        this.rx * (e[1] * i + e[3] * r),
        this.ry * (-e[0] * r + e[2] * i),
        this.ry * (-e[1] * r + e[3] * i),
      ],
      a = o[0] * o[0] + o[2] * o[2],
      s = o[1] * o[1] + o[3] * o[3],
      u =
        ((o[0] - o[3]) * (o[0] - o[3]) + (o[2] + o[1]) * (o[2] + o[1])) *
        ((o[0] + o[3]) * (o[0] + o[3]) + (o[2] - o[1]) * (o[2] - o[1])),
      l = (a + s) / 2
    if (u < t * l) return ((this.rx = this.ry = Math.sqrt(l)), (this.ax = 0), this)
    var c = o[0] * o[1] + o[2] * o[3],
      d = l + (u = Math.sqrt(u)) / 2,
      h = l - u / 2
    return (
      (this.ax =
        Math.abs(c) < t && Math.abs(d - s) < t
          ? 90
          : (180 * Math.atan(Math.abs(c) > Math.abs(d - s) ? (d - a) / c : c / (d - s))) / Math.PI),
      this.ax >= 0
        ? ((this.rx = Math.sqrt(d)), (this.ry = Math.sqrt(h)))
        : ((this.ax += 90), (this.rx = Math.sqrt(h)), (this.ry = Math.sqrt(d))),
      this
    )
  }),
    (i.prototype.isDegenerate = function () {
      return this.rx < t * this.ry || this.ry < t * this.rx
    }),
    (e.exports = i))
}
