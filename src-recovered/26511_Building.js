/**
 * Webpack Module #26511
 * @exports Building, ACTIVE_TAG
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Building = void 0))
  var i = n(70655),
    r = n(86700),
    o = n(75111),
    a = (n(84194), n(44656)),
    s = n(95781),
    u = n(53351),
    l = n(91585),
    c = n(26630),
    d = n(52057),
    h = n(46697),
    p = n(36596),
    f = n(94572),
    _ = n(3565),
    g = n(85126),
    m = (n(6538), n(66154)),
    v = n(77577),
    y = n(86178),
    C = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t._selected = !1), (t._pathHolder = new g.PathHolder()), t)
      }
      var n, o, C, b, w
      return (
        i.__extends(t, e),
        (n = t),
        (t.prototype.init = function (e, t) {
          return (
            this.addTag(n.ACTIVE_TAG),
            (this._data = t),
            (this._stateId = e),
            this._spawner || (this._spawner = a.di.get(d.Spawner)),
            (this._spawner.selfBuilding = this),
            this._population.init(t),
            this._capital.init(t),
            this._shape.init(t, e),
            (this._shape.interactive = !0),
            this.addMainComponents(),
            this.updatePopulationRateAndLimit(),
            this
          )
        }),
        (t.prototype.sendTo = function (e) {
          this._spawner.spawnAndSend(this._population.current, e)
        }),
        (t.prototype.setInactive = function (e) {
          var t
          ;(e
            ? (this.removeTag(n.ACTIVE_TAG),
              null === (t = this.get(d.Spawner)) || void 0 === t || t.stopRoutine(),
              this.removeComponent(g.PathHolder),
              this.removeComponent(d.Spawner))
            : (this.addTag(n.ACTIVE_TAG), this.addMainComponents()),
            this.updateAllSkins(),
            this.onComponentListUpdated())
        }),
        (t.prototype.toggleActive = function (e, t) {
          var i = isNaN(e) || this.hasTag(n.ACTIVE_TAG)
          ;(this._shape.setActive(i, t),
            this._capital.setActive(i, t),
            (this._population.active = i))
        }),
        (t.prototype.setStartOwner = function (e) {
          ;((this.owner = e),
            (this._population.current = this.model.meta.getStartPopulation(e)),
            this.updatePopulationRateAndLimit())
        }),
        (t.prototype.tryOccupy = function (e) {
          var t = this.get(c.Population),
            n = this.get(d.Spawner)
          if (t)
            if ((t.block(), this._owner == e.owner)) t.current += e.amount
            else {
              var i = this.get(u.CapitalView)
              if ((null == i || i.shake(0.3, 0.2), e.owner == p.PlayerType.First)) {
                var r = (0, a.lazyGet)(y.TypesSocial.vibrationManager)
                null == r || r.vibrate()
              }
              0 == t.remove(e.amount) &&
                (null == i || i.occupiedAnimation(0.2),
                (t.current += c.Population.SPAWN_AMOUNT_ON_OCCUPATION),
                (this.owner = e.owner),
                n.stopRoutine(),
                this._selected && this.deselect())
            }
        }),
        (t.prototype.selectAsTarget = function () {
          var e = i.__read(
              this.isFirstPlayer ? m.GameColors.aims.allied : m.GameColors.aims.enemy,
              2,
            ),
            t = e[0],
            n = e[1]
          this.showSelection(v.color.fromHex(t), n)
        }),
        (t.prototype.selectAsSource = function () {
          this._selected = !0
          var e = i.__read(m.GameColors.aims.allied, 2),
            t = e[0],
            n = e[1]
          this.showSelection(v.color.fromHex(t), n)
        }),
        (t.prototype.showSelection = function (e, t) {
          void 0 === t && (t = 0.5)
          var n = this.get(u.CapitalView)
          null == n || n.showSelection(e, t)
        }),
        (t.prototype.updatePopulationRateAndLimit = function () {
          var e,
            t = this.get(c.Population)
          t &&
            (t.setPopulationLimit(this.model.meta.getBuildingPopulationLimit(this._owner)),
            t.setPopulationRate(this.model.meta.getPopulationRate(this._owner)),
            null === (e = this.get(l.StateShapeView)) || void 0 === e || e.updateWithPopulation(t))
        }),
        (t.prototype.deselect = function () {
          ;((this._selected = !1), this.showSelection(NaN))
        }),
        Object.defineProperty(t.prototype, "selected", {
          get: function () {
            return this._selected
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "isFirstPlayer", {
          get: function () {
            return this._owner === p.PlayerType.First
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "stateId", {
          get: function () {
            return this._stateId
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "owner", {
          get: function () {
            return this._owner
          },
          set: function (e) {
            var t = this
            switch (((this._owner = e), this.addMainComponents(), this.updateAllSkins(), e)) {
              case p.PlayerType.Default:
                ;[d.Spawner, g.PathHolder, _.BotLogic].forEach(function (e) {
                  return t.remove(e)
                })
                break
              case p.PlayerType.Neutral:
              case p.PlayerType.First:
                this.remove(_.BotLogic)
                break
              default:
                this.add(a.di.get(s.TypesGame.botLogic))
            }
            ;(this.onComponentListUpdated(), this.updatePopulationRateAndLimit())
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.onComponentListUpdated = function () {
          ;((this._population.visible = this.has(c.Population)),
            (this._capital.visible = this.has(u.CapitalView)))
        }),
        (t.prototype.getSnapshot = function () {
          var e = Date.now(),
            t = this.get(c.Population),
            n = this.get(d.Spawner),
            i = this.get(g.PathHolder)
          return {
            Owner: this._owner,
            SpawnRate: this.model.meta.getPopulationRate(this._owner),
            AttackRate: 0,
            AttackRadius: 0,
            Id: this.stateId,
            Position: this._data.statePos.slice(0),
            CurrentPopulation: (null == t ? void 0 : t.current) || 0,
            SpawnLimit: this.model.meta.getBuildingPopulationLimit(this._owner),
            FighterSpeed: h.Fighter.NORMAL_SPEED,
            LastActionTimestamp: 0 - (e - ((null == t ? void 0 : t.lastBlockTimestamp) || 0)),
            BurstDelay: (null == n ? void 0 : n.burstDelay) || 0,
            BurstWidth: (null == i ? void 0 : i.getPathWidth()) || 0,
          }
        }),
        (t.prototype.updateAllSkins = function () {
          var e,
            t,
            i = this.hasTag(n.ACTIVE_TAG)
          ;(null === (e = this.get(l.StateShapeView)) || void 0 === e || e.updateSkin(this._owner),
            null === (t = this.get(u.CapitalView)) || void 0 === t || t.updateSkin(this._owner, i))
        }),
        (t.prototype.addMainComponents = function () {
          var e = this,
            t = [this._capital, this._spawner, this._shape, this._population, this._pathHolder]
          this.hasAll.apply(this, i.__spreadArray([], i.__read(t), !1)) ||
            t.forEach(function (t) {
              return e.add(t)
            })
        }),
        Object.defineProperty(t.prototype, "data", {
          get: function () {
            return this._data
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.destroy = function () {}),
        (t.ACTIVE_TAG = "active"),
        i.__decorate(
          [
            (0, r.inject)(s.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (o = void 0 !== f.GameModel && f.GameModel) ? o : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        i.__decorate(
          [
            (0, r.inject)(s.TypesGame.views.state),
            i.__metadata(
              "design:type",
              "function" == typeof (C = void 0 !== u.CapitalView && u.CapitalView) ? C : Object,
            ),
          ],
          t.prototype,
          "_capital",
          void 0,
        ),
        i.__decorate(
          [
            (0, r.inject)(s.TypesGame.views.stateShape),
            i.__metadata(
              "design:type",
              "function" == typeof (b = void 0 !== l.StateShapeView && l.StateShapeView)
                ? b
                : Object,
            ),
          ],
          t.prototype,
          "_shape",
          void 0,
        ),
        i.__decorate(
          [
            (0, r.inject)(s.TypesGame.views.population),
            i.__metadata(
              "design:type",
              "function" == typeof (w = void 0 !== c.Population && c.Population) ? w : Object,
            ),
          ],
          t.prototype,
          "_population",
          void 0,
        ),
        (t = n = i.__decorate([(0, r.injectable)()], t))
      )
    })(o.Entity)
  t.Building = C
}
