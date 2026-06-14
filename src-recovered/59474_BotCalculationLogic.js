/**
 * Webpack Module #59474
 * @exports BotCalculationLogic, Type, Owner
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.BotCalculationLogic = void 0))
  var i = n(70655),
    r = n(84194),
    o = n(77577),
    a = n(25583),
    s = n(36596),
    u = n(94572),
    l = n(26630),
    c = n(52057),
    d = n(95781),
    h = n(86700),
    p = n(26511),
    f = n(85765),
    _ = n(85126),
    g = n(35081),
    m = n(45329),
    v = n(77875),
    y = n(20811),
    C = function (e, t) {
      var n, r
      try {
        for (var o = i.__values(e), a = o.next(); !a.done; a = o.next()) {
          var s = a.value
          if (s.Id === t) return s
        }
      } catch (e) {
        n = { error: e }
      } finally {
        try {
          a && !a.done && (r = o.return) && r.call(o)
        } finally {
          if (n) throw n.error
        }
      }
    },
    b = function (e, t, n) {
      var i = n * t
      return o.math.clamp(i, 0, e)
    },
    w = function (e, t) {
      var n = function (e) {
          return e.Owner === t
        },
        i = function (e, t) {
          return t + e
        }
      return (
        e.buildings
          .filter(n)
          .map(function (e) {
            return e.CurrentPopulation
          })
          .reduce(i, 0) +
        e.groups
          .filter(n)
          .map(function (e) {
            return e.Amount
          })
          .reduce(i, 0)
      )
    },
    x = (function () {
      function e() {}
      var t
      return (
        (e.prototype.init = function (e) {
          this._preset = e
        }),
        (e.prototype.calculate = function (e) {
          return i.__awaiter(this, void 0, Promise, function () {
            var t
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (t = e.owner),
                    (this._owner = t),
                    [4, this._calculationPromise || (this._calculationPromise = this._calculate())]
                  )
                case 1:
                  return (n.sent(), delete this._calculationPromise, [2])
              }
            })
          })
        }),
        (e.prototype._calculate = function () {
          return i.__awaiter(this, void 0, Promise, function () {
            var e,
              t,
              n,
              o,
              a,
              s,
              u,
              l,
              c,
              d,
              h,
              p = this
            return i.__generator(this, function (f) {
              switch (f.label) {
                case 0:
                  ;((this._initialWaitPromise = new Promise(function (e, t) {
                    ;((p._rejectInitialPromise = t), setTimeout(e, r.Random.rangeFloat(0, 3e3)))
                  })),
                    (f.label = 1))
                case 1:
                  return (f.trys.push([1, 3, 4, 5]), [4, this._initialWaitPromise])
                case 2:
                  return (f.sent(), [3, 5])
                case 3:
                  return (f.sent(), [2])
                case 4:
                  return (delete this._initialWaitPromise, delete this._rejectInitialPromise, [7])
                case 5:
                  ;((e = this.generateStartState()),
                    (t = v.CommandsGenerator.GeneratePossibleCommands(
                      e,
                      this._owner,
                      this._preset,
                    )),
                    (n = []),
                    (o = 0),
                    (f.label = 6))
                case 6:
                  return o < t.length ? [4, this.calculateCommandScore(e, t[o])] : [3, 9]
                case 7:
                  ;((a = f.sent()), n.push({ index: o, score: a }), (f.label = 8))
                case 8:
                  return (o++, [3, 6])
                case 9:
                  return (
                    (s = n.sort(function (e, t) {
                      return t.score - e.score
                    })),
                    (u = i.__read(this._preset.commandInDecisionOrder, 2)),
                    (l = u[0]),
                    (c = u[1]),
                    (d = r.Random.range(Math.min(l, n.length - 1), Math.min(c, n.length))),
                    (h = s[d].index),
                    (this._lastCommand = t[h]),
                    [2]
                  )
              }
            })
          })
        }),
        (e.prototype.calculateCommandScore = function (e, t) {
          return i.__awaiter(this, void 0, Promise, function () {
            var n, r, o, u, l, c, d
            return i.__generator(this, function (i) {
              for (
                n = this._preset,
                  r = n.traceDuration,
                  o = n.stepDuration,
                  u = this.executeCommand(e, t),
                  l = NaN,
                  c = 0;
                c <= r;
                c += o
              )
                (this.traceState(u, o), isNaN(l) && this.isTargetReached(u, t) && (l = c))
              return (
                (d = this.CalculateStateScore(e, u, l)),
                t.Type == a.DecisionType.Move &&
                  t.Subject.Owner == s.PlayerType.Neutral &&
                  (d *= 2),
                [2, d]
              )
            })
          })
        }),
        (e.prototype.CalculateStateScore = function (e, t, n) {
          var i = this,
            r = w(e, this._owner),
            a = ((w(t, this._owner) - r) / (0 == r ? 1 : r)) * this._preset.forcesBalanceFactor,
            s = e.buildings.filter(function (e) {
              return e.Owner == i._owner
            }).length,
            u =
              a +
              ((t.buildings.filter(function (e) {
                return e.Owner == i._owner
              }).length -
                s) /
                (0 == s ? 1 : s)) *
                this._preset.buildingsBalanceFactor
          if (!isNaN(n)) {
            var l = 1 - o.math.remap(n, 0, t.timestamp, 0, 1)
            u += Math.abs(u) * this._preset.targetReachedTimeBoost * l
          }
          return u
        }),
        (e.prototype.generateStartState = function () {
          var e = []
          this.model.currentContinent.buildings.forEach(function (t) {
            t.hasTag(p.Building.ACTIVE_TAG) && e.push(t.getSnapshot())
          })
          var t = Date.now(),
            n = f.FighterGroupsSystem.GetActiveGroups().map(function (e) {
              if (e.Source.has(c.Spawner)) {
                var n = new y.GroupModel(
                  e.Owner,
                  e.Speed,
                  e.Amount,
                  e.Path,
                  e.Target.stateId,
                  e.Source.stateId,
                  0,
                  -1,
                )
                return (
                  n.Init(
                    e.StartTimestamp,
                    (t - e.StartTimestamp) * e.Speed,
                    e.BurstDelay,
                    e.BurstWidth,
                  ),
                  n
                )
              }
            })
          return new m.BState(
            e,
            n.filter(function (e) {
              return !!e
            }),
            t,
          )
        }),
        (e.prototype.moveState = function (e, t) {
          var n = this,
            r = e.timestamp,
            a = e.buildings.slice(0),
            s = e.groups.slice(0),
            u = this.model.currentContinent.buildings.get(t.Subject.Id)
          return (
            t.Objects.forEach(function (l) {
              var d = n.model.currentContinent.buildings
                  .get(l.Id)
                  .get(_.PathHolder)
                  .getPath(u.stateId)
                  .map(function (e) {
                    return o.math.lerp.apply(
                      o.math,
                      i.__spreadArray(i.__spreadArray([], i.__read(e), !1), [0.5], !1),
                    )
                  }),
                h = o.math.clamp(
                  l.CurrentPopulation - c.Spawner.UNITS_PER_WAVE,
                  0,
                  c.Spawner.UNITS_PER_WAVE,
                ),
                p = l.CurrentPopulation - h,
                f = new y.GroupModel(l.Owner, l.FighterSpeed, p, d, t.Subject.Id, l.Id, 0, r)
              ;(f.Init(e.timestamp, 0, l.BurstDelay, l.BurstWidth),
                s.push(f),
                (l.CurrentPopulation -= h),
                (l.LastActionTimestamp = r))
              for (var g = 0; g < a.length; g++)
                if (a[g].Id === l.Id) {
                  a[g] = l
                  break
                }
            }),
            new m.BState(a, s, r)
          )
        }),
        (e.prototype.traceState = function (e, t) {
          var n = e.buildings.slice(0),
            i = e.groups.slice(0),
            r = e.timestamp + t
          return (
            this.calculateGroupsMoving(n, i, t),
            this.calculateBuildingsToGroupAmount(n, i, r),
            this.calculateGroupToBuildingsAmount(n, i, r),
            this.updateSpawnBuildings(n, r, t),
            new m.BState(n, i, r)
          )
        }),
        (e.prototype.calculateGroupsMoving = function (e, t, n) {
          var r, o
          try {
            for (var a = i.__values(t), s = a.next(); !s.done; s = a.next()) {
              var u = s.value
              ;((u.Amount = this.CalculateTowersIntersectionAmount(e, u, n)),
                u.AccumPath(u.Speed * n))
            }
          } catch (e) {
            r = { error: e }
          } finally {
            try {
              s && !s.done && (o = a.return) && o.call(a)
            } finally {
              if (r) throw r.error
            }
          }
          if (this._preset.isConsiderGroupToGroupIntersection) {
            for (var l = new Array(t.length).fill(0), c = 0; c < t.length; c++)
              l[c] = this.CalculateGroupsIntersectionAmount(t, t[c], n)
            for (c = 0; c < t.length; c++) {
              var d = t[c]
              ;((d.Amount = l[c]), (t[c] = d))
            }
          }
        }),
        (e.prototype.CalculateTowersIntersectionAmount = function (e, t, n) {
          var r,
            o,
            a,
            s,
            u = t.Amount
          try {
            for (var l = i.__values(e), c = l.next(); !c.done; c = l.next()) {
              var d = c.value
              if (!(d.Owner == t.Owner || d.AttackRate <= 0)) {
                var h = t.GenerateSegments(this._preset.fightersInSegment)
                try {
                  for (var p = ((a = void 0), i.__values(h)), f = p.next(); !f.done; f = p.next()) {
                    var _ = f.value
                    if (g.BotUtility.IsSegmentIntersectCircle(d.Position, d.AttackRadius, _)) {
                      b(_.Amount, n, d.AttackRate)
                      u -= b(_.Amount, n, d.AttackRate)
                    }
                  }
                } catch (e) {
                  a = { error: e }
                } finally {
                  try {
                    f && !f.done && (s = p.return) && s.call(p)
                  } finally {
                    if (a) throw a.error
                  }
                }
              }
            }
          } catch (e) {
            r = { error: e }
          } finally {
            try {
              c && !c.done && (o = l.return) && o.call(l)
            } finally {
              if (r) throw r.error
            }
          }
          return u
        }),
        (e.prototype.CalculateGroupsIntersectionAmount = function (e, t, n) {
          var r,
            o,
            a,
            s,
            u,
            l,
            c = t.GenerateSegments(this._preset.fightersInSegment)
          try {
            for (var d = i.__values(e), h = d.next(); !h.done; h = d.next()) {
              var p = h.value
              if (!(p.Owner == t.Owner || p.Amount <= 0))
                for (
                  var f = p.GenerateSegments(this._preset.fightersInSegment), _ = 0;
                  _ < c.length;
                  _++
                )
                  try {
                    for (
                      var m = ((a = void 0), i.__values(f)), v = m.next();
                      !v.done;
                      v = m.next()
                    ) {
                      var y = v.value
                      if (g.BotUtility.IsSegmentIntersectSegment(c[_], y)) {
                        c[_].Amount
                        c[_].Amount = ((u = c[_].Amount), (l = p.Amount), Math.max(u - l, 0))
                      }
                    }
                  } catch (e) {
                    a = { error: e }
                  } finally {
                    try {
                      v && !v.done && (s = m.return) && s.call(m)
                    } finally {
                      if (a) throw a.error
                    }
                  }
            }
          } catch (e) {
            r = { error: e }
          } finally {
            try {
              h && !h.done && (o = d.return) && o.call(d)
            } finally {
              if (r) throw r.error
            }
          }
          return c
            .map(function (e) {
              return e.Amount
            })
            .reduce(function (e, t) {
              return e + t
            }, 0)
        }),
        (e.prototype.calculateBuildingsToGroupAmount = function (e, t, n) {
          var r, a
          try {
            for (var s = i.__values(t), u = s.next(); !u.done; u = s.next()) {
              var l = u.value
              if (n - l.LastBurstTimestamp >= l.BurstDelay) {
                var d = C(e, l.Source)
                if (!d) continue
                if (
                  ((d.CurrentPopulation <= 0 || d.Owner != l.Owner) && (l.TargetAmount = 0),
                  l.TargetAmount > 0)
                ) {
                  d.CurrentPopulation < l.TargetAmount && (l.TargetAmount = d.CurrentPopulation)
                  var h = o.math.clamp(l.TargetAmount, 0, c.Spawner.UNITS_PER_WAVE)
                  ;((l.Amount += h),
                    (l.TargetAmount -= h),
                    (l.LastBurstTimestamp = n),
                    (d.CurrentPopulation -= h),
                    (d.LastActionTimestamp = n))
                }
              }
            }
          } catch (e) {
            r = { error: e }
          } finally {
            try {
              u && !u.done && (a = s.return) && a.call(s)
            } finally {
              if (r) throw r.error
            }
          }
        }),
        (e.prototype.calculateGroupToBuildingsAmount = function (e, t, n) {
          var r, a
          try {
            for (var s = i.__values(t), u = s.next(); !u.done; u = s.next()) {
              var d = u.value
              if (d.IsReachedEnd && d.Amount > 0) {
                var h = C(e, d.Target)
                if (!h) continue
                var p = o.math.clamp(d.Amount, 0, c.Spawner.UNITS_PER_WAVE)
                ;((d.Amount = Math.max(d.Amount - p, 0)),
                  h.Owner == d.Owner
                    ? (h.CurrentPopulation += p)
                    : h.CurrentPopulation >= p
                      ? (h.CurrentPopulation -= p)
                      : ((h.Owner = d.Owner),
                        (h.CurrentPopulation =
                          p - h.CurrentPopulation + l.Population.SPAWN_AMOUNT_ON_OCCUPATION),
                        (h.AttackRadius = 0),
                        (h.AttackRate = 0),
                        (h.SpawnLimit = this.model.meta.getBuildingPopulationLimit(d.Owner)),
                        (h.SpawnRate = this.model.meta.getPopulationRate(d.Owner))),
                  (h.LastActionTimestamp = n))
              }
            }
          } catch (e) {
            r = { error: e }
          } finally {
            try {
              u && !u.done && (a = s.return) && a.call(s)
            } finally {
              if (r) throw r.error
            }
          }
        }),
        (e.prototype.updateSpawnBuildings = function (e, t, n) {
          for (var i = 0; i < e.length; i++) {
            var r = e[i],
              o = t - r.LastActionTimestamp,
              a = Math.max(l.Population.BLOCK_POPULATION_SECONDS - o, 0),
              s = Math.max(n - a, 0),
              u = r.SpawnRate * s,
              c = Math.min(r.CurrentPopulation + u, r.SpawnLimit)
            ;((r.CurrentPopulation = c), (e[i] = r))
          }
        }),
        (e.prototype.isTargetReached = function (e, t) {
          var n,
            r,
            o = this
          switch (t.Type) {
            case a.DecisionType.Upgrade:
            case a.DecisionType.MakeTower:
            case a.DecisionType.MakeBuilding:
            case a.DecisionType.Wait:
              return !0
            case a.DecisionType.Move:
              var s = e.groups.slice(0),
                u = s.filter(function (e) {
                  return (
                    e.Owner == o._owner &&
                    (function (e) {
                      var n, r
                      try {
                        for (var o = i.__values(t.Objects), a = o.next(); !a.done; a = o.next())
                          if (a.value.Id === e) return !0
                      } catch (e) {
                        n = { error: e }
                      } finally {
                        try {
                          a && !a.done && (r = o.return) && r.call(o)
                        } finally {
                          if (n) throw n.error
                        }
                      }
                      return !1
                    })(e.Source) &&
                    e.Target == t.Subject.Id &&
                    0 == e.CreationTimestamp
                  )
                })
              try {
                for (var l = i.__values(u), c = l.next(); !c.done; c = l.next()) {
                  if (c.value.IsReachedEnd) return !0
                }
              } catch (e) {
                n = { error: e }
              } finally {
                try {
                  c && !c.done && (r = l.return) && r.call(l)
                } finally {
                  if (n) throw n.error
                }
              }
              return !1
            default:
              throw new Error("ArgumentOutOfRangeException()")
          }
        }),
        (e.prototype.executeCommand = function (e, t) {
          switch (t.Type) {
            case a.DecisionType.Move:
              return this.moveState(e, t)
            case a.DecisionType.Wait:
              return e.clone()
            default:
              return e
          }
        }),
        (e.prototype.getLastCommand = function () {
          var e = this._lastCommand
          return (delete this._lastCommand, e)
        }),
        Object.defineProperty(e.prototype, "busy", {
          get: function () {
            return !!this._calculationPromise
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.terminate = function () {
          var e
          null === (e = this._rejectInitialPromise) || void 0 === e || e.call(null)
        }),
        i.__decorate(
          [
            (0, h.inject)(d.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (t = void 0 !== u.GameModel && u.GameModel) ? t : Object,
            ),
          ],
          e.prototype,
          "model",
          void 0,
        ),
        (e = i.__decorate([(0, h.injectable)()], e))
      )
    })()
  t.BotCalculationLogic = x
}
