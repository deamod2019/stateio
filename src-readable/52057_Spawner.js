/**
 * Webpack Module #52057
 * @exports Spawner, UNITS_PER_WAVE, BURST_WAVES_LEN
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Spawner = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(46697) /* 46697_Fighter */,
    a = n(26630) /* 26630_Population */,
    s = n(95781) /* 95781_TypesGame */,
    u = n(86700) /* 86700_MetadataReader */,
    l = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (
          (t._spawnRoutine = function () {
            return t.spawnRoutine()
          }),
          t
        )
      }
      var n
      return (
        i.__extends(t, e),
        (n = t),
        (t.prototype.spawnAndSend = function (e, t) {
          ;(this.stopRoutine(),
            (this._targetAmount = e),
            (this._targetBuilding = t),
            this.startRoutine())
        }),
        (t.prototype.spawnRoutine = function () {
          var e,
            t = Math.min(this._targetAmount, n.UNITS_PER_WAVE),
            i = null === (e = this.selfBuilding) || undefined === e ? undefined : e.get(a.Population)
          if (i) {
            var o = i.allocate(t)
            o > 0 &&
              this._targetAmount > 0 &&
              ((this._targetAmount -= o),
              r.di
                .get(s.TypesGame.actions.burst)
                .run({ spawner: this, amount: o, target: this._targetBuilding }),
              (this._spawnRoutineTimeout = setTimeout(this._spawnRoutine, 1e3 * this.burstDelay)))
          }
        }),
        Object.defineProperty(t.prototype, "burstDelay", {
          get: function () {
            o.Fighter.NORMAL_SPEED
            return 0.3
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.startRoutine = function () {
          this.spawnRoutine()
        }),
        (t.prototype.stopRoutine = function () {
          clearTimeout(this._spawnRoutineTimeout)
        }),
        (t.UNITS_PER_WAVE = 5),
        (t.BURST_WAVES_LEN = 0.75),
        (t = n = i.__decorate([(0, u.injectable)()], t))
      )
    })(n(75111) /* 75111__mod */.Entity)
  t.Spawner = l
}
