/**
 * Webpack Module #26630
 * @exports Population, BLOCK_POPULATION_SECONDS, SPAWN_AMOUNT_ON_OCCUPATION
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Population = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(55132) /* 55132__mod */,
    o = n(86700) /* 86700_MetadataReader */,
    a = n(6538) /* 6538_SIDES */,
    s = (function (e) {
      function t() {
        var t = e.call(this) || this
        return (
          (t._active = true),
          (t._populationSpeed = 1.5),
          (t._populationLimit = 60),
          (t._rate = 1e3),
          (t._lastSpawnTimestamp = -1),
          (t._lastBlockTimestamp = -1),
          (t._current = 0),
          (t.updateLabel = function () {
            ;((t._label.text = "" + t._current), (t._label.x = 0.5 * -t._label.width))
          }),
          t
        )
      }
      var n
      return (
        i.__extends(t, e),
        (n = t),
        (t.prototype.setPopulationLimit = function (e) {
          this._populationLimit = e
        }),
        (t.prototype.setPopulationRate = function (e) {
          ;((this._populationSpeed = e), (this._rate = 1 / e))
        }),
        Object.defineProperty(t.prototype, "lastBlockTimestamp", {
          get: function () {
            return this._lastBlockTimestamp
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "active", {
          get: function () {
            return this._active
          },
          set: function (e) {
            ;((this._active = e),
              (this.alpha = this._active ? 1 : 0.25),
              (this._label.visible = this._active))
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.init = function (e) {
          var t
          ;((this._label = new a.BitmapText("-", { fontName: "Helvetica" })),
            (this._label.y = e.stateRadius),
            (t = this.position).set.apply(t, i.__spreadArray([], i.__read(e.statePos), false)),
            this.addChild(this._label),
            this.updateLabel())
        }),
        (t.prototype.block = function () {
          this._lastBlockTimestamp = Date.now()
        }),
        (t.prototype.allocate = function (e) {
          var t = Math.max(this.current - e, 0),
            n = Math.max(this.current - t, 0)
          return ((this.current = t), n > 0 && this.block(), n)
        }),
        (t.prototype.remove = function (e) {
          var t = this.current,
            n = Math.max(t - e, 0),
            i = Math.max(t - n, 0)
          return ((this.current = n), i)
        }),
        (t.prototype.tryPopulate = function (e) {
          undefined === e && (e = 0)
          var t = Date.now()
          ;-1 == this._lastSpawnTimestamp && (this._lastSpawnTimestamp = t)
          var i = (t - this._lastSpawnTimestamp) / 1e3
          if (i >= this._rate) {
            this._current < this._populationLimit &&
              t - this._lastBlockTimestamp >= 1e3 * n.BLOCK_POPULATION_SECONDS &&
              (this.current += 1)
            var r = i - this._rate
            this._lastSpawnTimestamp = t - r
          }
        }),
        Object.defineProperty(t.prototype, "current", {
          get: function () {
            return this._current
          },
          set: function (e) {
            ;((this._current = e), this.updateLabel())
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "cap", {
          get: function () {
            return this._populationLimit
          },
          enumerable: false,
          configurable: true,
        }),
        (t.BLOCK_POPULATION_SECONDS = 0.5),
        (t.SPAWN_AMOUNT_ON_OCCUPATION = 0),
        (t = n = i.__decorate([(0, o.injectable)(), i.__metadata("design:paramtypes", [])], t))
      )
    })(r.View)
  t.Population = s
}
