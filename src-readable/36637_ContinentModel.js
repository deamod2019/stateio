/**
 * Webpack Module #36637
 * @exports ContinentModel
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ContinentModel = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(84194) /* 84194__mod */,
    a = n(26511) /* 26511_Building */,
    s = n(86700) /* 86700_MetadataReader */,
    u = n(36596) /* 36596_PlayerType */,
    l = n(26630) /* 26630_Population */,
    c = n(85765) /* 85765_FighterGroupsSystem */,
    d = n(39887) /* 39887_TimeTrack */,
    h = n(77577) /* 77577__mod */,
    p = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (
          (t.parsed = new Map()),
          (t.buildings = new Map()),
          (t._stageScores = []),
          (t._stageLevel = 0),
          (t.time = new d.TimeTrack(1e3)),
          t
        )
      }
      return (
        i.__extends(t, e),
        Object.defineProperty(t.prototype, "data", {
          get: function () {
            return this._data
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.init = function (e) {
          var t = this
          this._data = e
          for (
            var n = function (n) {
                var r = (0, h.getOwnerGenerator)()
                i._data.stages[n].states.forEach(function (i) {
                  return (function (n, i, r) {
                    undefined === i && (i = 0)
                    var a = n.shapes
                    if (a) {
                      var s = r(n.fillColor)
                      t.parsed.set("".concat(e.id, "-").concat(n.id), {
                        stage: i,
                        shapes: a,
                        shapePos: [NaN, NaN],
                        statePos: [n.x, n.y],
                        stateRadius: n.radius || 40,
                        startOwner: s,
                      })
                    } else o.log.warn("Failed to parse", n.id)
                  })(i, n, r)
                })
              },
              i = this,
              r = 0;
            r < this._data.stages.length;
            r++
          )
            n(r)
          return (
            (this._stageScores = this._data.stages.map(function (e) {
              return 0
            })),
            this
          )
        }),
        (t.prototype.captureStage = function () {
          ;(this.time.stop(),
            (this._stageScores[this._stageLevel] = this.getStageScore()),
            this._stageLevel++)
        }),
        Object.defineProperty(t.prototype, "isFinished", {
          get: function () {
            return this._stageLevel > this._data.stages.length - 1
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "stageLevel", {
          get: function () {
            return this._stageLevel
          },
          set: function (e) {
            this._stageLevel = e
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "totalStages", {
          get: function () {
            return this._data.stages.length
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.getOrCreateBuildingEntity = function (e, t) {
          return (
            this.buildings.has(e) || this.buildings.set(e, r.di.get(a.Building).init(e, t)),
            this.buildings.get(e)
          )
        }),
        (t.prototype.getTotalScore = function () {
          return this._stageScores.reduce(function (e, t) {
            return e + t
          })
        }),
        (t.prototype.getStageScore = function (e) {
          var t,
            n,
            r = 0.001 * this.time.getTotalTime(),
            o = 0,
            a = 0
          this.buildings.forEach(function (e) {
            var t
            e.owner === u.PlayerType.First &&
              (a++,
              (o += (null === (t = e.get(l.Population)) || undefined === t ? undefined : t.current) || 0))
          })
          var s = c.FighterGroupsSystem.GetActiveGroups()
          try {
            for (var d = i.__values(s), h = d.next(); !h.done; h = d.next()) {
              var p = h.value
              p.Owner === u.PlayerType.First && (o += p.Amount)
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              h && !h.done && (n = d.return) && n.call(d)
            } finally {
              if (t) throw t.error
            }
          }
          var f = (a * o) / r
          return Math.round(f)
        }),
        (t.prototype.getHistory = function () {
          return { l: this.data.id, c: this.stageLevel, s: this._stageScores }
        }),
        (t.prototype.dispose = function () {
          ;(this.buildings.forEach(function (e) {
            return e.destroy()
          }),
            this.buildings.clear(),
            this.parsed.clear(),
            this.time.stop())
        }),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(r.GlobalEventProvider)
  t.ContinentModel = p
}
