/**
 * Webpack Module #20811
 * @exports GroupModel
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.GroupModel = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(68532) /* 68532__mod */,
    o = n(52057) /* 52057_Spawner */,
    a = (function () {
      function e(e, t, n, i, r, o, a, s) {
        ;((this.Owner = e),
          (this.Speed = t),
          (this.Amount = n),
          (this.Path = i),
          (this.Target = r),
          (this.Source = o),
          (this.TargetAmount = a),
          (this.LastBurstTimestamp = s))
      }
      return (
        (e.prototype.GenerateSegments = function (e) {
          for (var t = [], n = this.Amount, r = 0; n > 0; ) {
            var a = Math.max(n - e, 0),
              s = n - a
            n = a
            var u = (s / o.Spawner.UNITS_PER_WAVE) * this.BurstDelay * this.Speed,
              l =
                2 *
                this.SegmentLen *
                (Math.min(s, o.Spawner.UNITS_PER_WAVE) / o.Spawner.UNITS_PER_WAVE),
              c = Math.max(this._accumulatedLen - r, 0),
              d = i.__read(this.TracePath(c), 2),
              h = d[0],
              p = d[1]
            ;(t.push({ Width: u, Height: l, Angle: p, Center: h, Amount: s }), (r += u))
          }
          return t
        }),
        Object.defineProperty(e.prototype, "IsReachedEnd", {
          get: function () {
            return this._accumulatedLen >= this._maxLen
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.Init = function (e, t, n, i) {
          ;((this.CreationTimestamp = e),
            (this._accumulatedLen = 0),
            (this.BurstDelay = n),
            (this.SegmentLen = i),
            this.CalculateMaxLen(),
            this.AccumPath(t))
        }),
        (e.prototype.CalculateMaxLen = function () {
          for (var e = 0, t = 1; t < this.Path.length; t++) {
            e += r.math.dist(this.Path[t - 1], this.Path[t])
          }
          this._maxLen = e
        }),
        (e.prototype.AccumPath = function (e) {
          this._accumulatedLen = Math.min(this._accumulatedLen + e, this._maxLen)
        }),
        (e.prototype.TracePath = function (e) {
          for (
            var t = 0, n = this.Path[0], o = r.math.angle(this.Path[0], this.Path[1]), a = 1;
            a < this.Path.length;
            a++
          ) {
            var s = r.math.dist(this.Path[a - 1], this.Path[a])
            if ((t += s) >= e) {
              var u = a - 1,
                l = a,
                c = t,
                d = t - s,
                h = r.math.remap(e, d, c, 0, 1)
              n = r.math.lerp(this.Path[u], this.Path[l], h)
              var p = r.math.norm(r.math.sub(this.Path[l], n)),
                f = i.__read(p, 2),
                _ = f[0],
                g = f[1]
              o = Math.atan2(g, _) * r.math.RAD2DEG
              break
            }
          }
          return [n, o]
        }),
        e
      )
    })()
  t.GroupModel = a
}
