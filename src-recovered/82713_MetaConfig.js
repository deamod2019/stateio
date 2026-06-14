/**
 * Webpack Module #82713
 * @exports MetaConfig
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.MetaConfig = void 0))
  var i = n(70655),
    r = n(84194),
    o = function (e, t, n) {
      return e * n + t * (1 - n)
    },
    a = (function () {
      function e() {
        ;((this._levelFinishReward = { Start: 200, GainBalance: [[0, 160]] }),
          (this._startPopulation = { Start: 10, GainBalance: [[0, 1]] }),
          (this._generationSpeed = {
            Start: 1,
            GainBalance: [
              [0, 0.073],
              [151, 0.079],
            ],
          }),
          (this._offlineEarning = {
            Start: 100,
            GainBalance: [
              [0, 75],
              [10, 150],
              [20, 300],
              [30, 375],
              [40, 450],
              [50, 675],
              [60, 750],
              [70, 825],
              [80, 900],
              [90, 975],
              [100, 1050],
              [110, 1500],
              [120, 2e3],
              [130, 2500],
            ],
          }),
          (this._boostersCost = {
            Start: 50,
            GainBalance: [
              [0, 95],
              [20, 155],
              [40, 250],
            ],
          }),
          (this._neutralRate = {
            Start: 1,
            GainBalance: [
              [10, 1.7],
              [20, 2.4],
              [30, 3.1],
              [40, 3.8],
              [50, 4.6],
              [60, 5.4],
              [70, 6],
              [80, 6.8],
              [90, 7.5],
              [100, 8.2],
            ],
          }),
          (this._neutralStart = {
            Start: 10,
            GainBalance: [
              [10, 20],
              [20, 30],
              [30, 40],
              [40, 50],
              [50, 60],
              [60, 70],
              [70, 80],
            ],
          }),
          (this._neutralCap = {
            Start: 10,
            GainBalance: [
              [10, 20],
              [20, 30],
              [30, 40],
              [40, 50],
              [50, 60],
              [60, 70],
              [70, 60],
            ],
          }),
          (this._commonCap = {
            Start: 50,
            GainBalance: [
              [1, 50],
              [20, 80],
              [30, 100],
              [40, 120],
            ],
          }),
          (this._boostersCostTable = {
            Start: 0,
            GainBalance: [
              [0, 4e4],
              [0, 5e4],
              [0, 7e4],
              [0, 85e3],
              [0, 1e5],
              [0, 15e4],
              [0, 2e5],
              [0, 25e4],
              [0, 3e5],
              [0, 35e4],
              [0, 4e5],
              [0, 45e4],
              [0, 5e5],
              [0, 55e4],
              [0, 6e5],
              [0, 65e4],
              [0, 7e5],
              [0, 75e4],
              [0, 8e5],
              [0, 85e4],
              [0, 9e5],
              [0, 95e4],
              [0, 1e6],
              [0, 105e4],
              [0, 11e5],
              [0, 115e4],
              [0, 12e5],
              [0, 125e4],
              [0, 13e5],
              [0, 135e4],
              [0, 14e5],
              [0, 145e4],
              [0, 15e5],
              [0, 155e4],
              [0, 16e5],
              [0, 165e4],
              [0, 17e5],
              [0, 175e4],
              [0, 18e5],
              [0, 185e4],
              [0, 19e5],
              [0, 195e4],
              [0, 2e6],
              [0, 205e4],
              [0, 21e5],
              [0, 215e4],
              [0, 22e5],
              [0, 225e4],
              [0, 23e5],
              [0, 235e4],
            ],
          }),
          (this._botUpgrade = 1.5),
          (this._botRandomOffset = 2))
      }
      return (
        (e.prototype.GetLevelFinishReward = function (e) {
          return this.GetBalanceValueByLevelIntegral(e, this._levelFinishReward)
        }),
        (e.prototype.GetStartPopulation = function (e) {
          return this.GetBalanceValueByLevelIntegral(e, this._startPopulation)
        }),
        (e.prototype.GetGenerationSpeed = function (e) {
          return this.GetBalanceValueByLevelIntegral(e, this._generationSpeed)
        }),
        (e.prototype.GetOfflineEarning = function (e) {
          return e <= 150
            ? this.GetBalanceValueByLevelIntegral(e, this._offlineEarning)
            : Math.ceil(0.8 * e) + 150275
        }),
        (e.prototype.GetBoosterCost = function (e) {
          return e <= 150
            ? this.GetBalanceValueByLevelIntegral(e, this._boostersCost)
            : e <= 200
              ? this.GetBalanceFromTable(e - 151, this._boostersCostTable)
              : Math.pow(e, 3) + this.GetBoosterCost(200)
        }),
        (e.prototype.GetBalanceFromTable = function (e, t) {
          if (e <= 0 || e >= t.GainBalance.length) {
            var n = i.__read(t.GainBalance[0], 2)
            n[0]
            return n[1]
          }
          var r = i.__read(t.GainBalance[e], 2)
          r[0]
          return r[1]
        }),
        (e.prototype.GetNeutralRate = function (e) {
          return this.GetBalanceValueByLevelStairs(e, this._neutralRate)
        }),
        (e.prototype.GetNeutralCap = function (e) {
          return this.GetBalanceValueByLevelStairs(e, this._neutralCap)
        }),
        (e.prototype.GetCommonCap = function (e) {
          return this.GetBalanceValueByLevelStairs(e, this._commonCap)
        }),
        (e.prototype.GetNeutralStartPopulation = function (e) {
          return this.GetBalanceValueByLevelStairs(e, this._neutralStart)
        }),
        (e.prototype.GetBotUpgradeLevelsCap = function (e) {
          return 1 == e
            ? 1
            : Math.ceil(e * this._botUpgrade) +
                r.Random.from(-this._botRandomOffset, this._botRandomOffset)
        }),
        (e.prototype.GetBalanceValueByLevelIntegral = function (e, t) {
          for (var n = t.Start, r = 1, o = 0; o < t.GainBalance.length; o++) {
            var a = i.__read(t.GainBalance[o], 2),
              s = a[0],
              u = a[1]
            if (!(e >= s)) break
            var l = Number.MAX_SAFE_INTEGER
            ;(o + 1 < t.GainBalance.length && (l = i.__read(t.GainBalance[o + 1], 1)[0]),
              (n += ((s = Math.min(l, e)) - r) * u),
              (r = l))
          }
          return n
        }),
        (e.prototype.GetBalanceValueByLevelStairs = function (e, t) {
          for (var n = t.Start, r = 0; r < t.GainBalance.length - 1; r++) {
            var o = i.__read(t.GainBalance[r], 2),
              a = o[0],
              s = o[1]
            if (0 == r && e < a) return n
            var u = i.__read(t.GainBalance[r + 1], 2),
              l = u[0]
            u[1]
            if (a <= e && e < l) return s
          }
          var c = i.__read(t.GainBalance[t.GainBalance.length - 1], 2)
          c[0]
          return c[1]
        }),
        (e.prototype.GetBalanceValueByLevelInterpolate = function (e, t) {
          var n = t.Start
          if (t.GainBalance.length <= 1) {
            var r = i.__read(t.GainBalance[t.GainBalance.length - 1], 2),
              a = r[0],
              s = r[1]
            return o(t.Start, s, e / a)
          }
          for (var u = 0; u < t.GainBalance.length - 1; u++) {
            var l = i.__read(t.GainBalance[u], 2),
              c = l[0],
              d = l[1],
              h = i.__read(t.GainBalance[u + 1], 2),
              p = h[0],
              f = h[1]
            if (0 == u && c > e) return o(n, d, e / c)
            if (c >= e && e < p) return o(d, f, e / (p - c))
          }
          var _ = i.__read(t.GainBalance[t.GainBalance.length - 1], 2)
          _[0]
          return _[1]
        }),
        e
      )
    })()
  t.MetaConfig = a
}
