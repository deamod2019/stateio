/**
 * Webpack Module #93972
 * @exports GamePlaySystem, GamePlayEvent
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.GamePlaySystem = t.GamePlayEvent = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86178) /* 86178__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(26511) /* 26511_Building */,
    s = n(47283) /* 47283_GameEvents */,
    u = n(36596) /* 36596_PlayerType */,
    l = n(26630) /* 26630_Population */,
    c = n(95781) /* 95781_TypesGame */,
    d = n(75111) /* 75111__mod */,
    h = n(99806) /* 99806_FighterMovementSystem */,
    p = function (e) {
      ;(undefined === e && (e = false), (this.won = e))
    }
  t.GamePlayEvent = p
  var f = (function (e) {
    function t() {
      var t =
        e.call(this, function (e) {
          return e.has(l.Population) && e.hasTag(a.Building.ACTIVE_TAG)
        }) || this
      return (
        (t._freeCounts = new Map()),
        (t._fullAmount = new Map()),
        (t._isAnyBuilding = new Map()),
        (t._players = [
          u.PlayerType.Neutral,
          u.PlayerType.First,
          u.PlayerType.Second,
          u.PlayerType.Third,
          u.PlayerType.Fourth,
          u.PlayerType.Fifth,
          u.PlayerType.Sixth,
          u.PlayerType.Seventh,
          u.PlayerType.Eighth,
        ]),
        (t._fighterEntityCreated = function (e) {
          return t.onFighterEnitityHandler(e)
        }),
        t
      )
    }
    return (
      i.__extends(t, e),
      (t.prototype.update = function (e) {
        var t,
          n,
          a,
          d = this
        undefined === e && (e = 0)
        var h,
          f = false
        try {
          for (var _ = i.__values(this._players), g = _.next(); !g.done; g = _.next()) {
            var m = g.value
            ;(this._fullAmount.set(m, this._freeCounts.get(m)), this._isAnyBuilding.delete(m))
          }
        } catch (e) {
          t = { error: e }
        } finally {
          try {
            g && !g.done && (n = _.return) && n.call(_)
          } finally {
            if (t) throw t.error
          }
        }
        ;(this.entities.forEach(function (e) {
          var t = e.get(l.Population),
            n = (d._fullAmount.get(e.owner) || 0) + t.current
          ;(d._fullAmount.set(e.owner, n), d._isAnyBuilding.set(e.owner, true))
        }),
          h || this.isAnyBotAlive() || ((h = true), (f = true)),
          h || this.isAlive(u.PlayerType.First) || ((h = true), (f = false)))
        var v = [],
          y = 0
        ;(this._fullAmount.forEach(function (e, t) {
          undefined !== e && (v.push({ owner: t, count: e }), (y += e))
        }),
          o.di.get(r.TypesCore.dispatcher).emit(s.GameEvents.STATS_UPDATED, {
            items: v.sort(function (e, t) {
              return e.owner - t.owner
            }),
            totalValue: y,
          }),
          h &&
            (this.dispatch(new p(f)),
            null === (a = (0, o.lazyGet)(c.TypesGame.model)) || undefined === a || a.endStage(f)))
      }),
      (t.prototype.isAlive = function (e) {
        return (this._fullAmount.get(e) || 0) > 0 || this._isAnyBuilding.get(e)
      }),
      (t.prototype.isAnyBotAlive = function () {
        var e, t
        try {
          for (var n = i.__values(this._players), r = n.next(); !r.done; r = n.next()) {
            var o = r.value
            if (o !== u.PlayerType.Neutral && o !== u.PlayerType.First && this.isAlive(o)) return true
          }
        } catch (t) {
          e = { error: t }
        } finally {
          try {
            r && !r.done && (t = n.return) && t.call(n)
          } finally {
            if (e) throw e.error
          }
        }
        return false
      }),
      (t.prototype.onFighterEnitityHandler = function (e) {
        var t = e.fighter,
          n = this._freeCounts.get(t.owner) || 0
        switch (e.type) {
          case h.FighterEvent.FIGHTER_DIED:
            n--
            break
          case h.FighterEvent.FIGHTER_CREATED:
            n++
        }
        this._freeCounts.set(t.owner, n)
      }),
      (t.prototype.onAddedToEngine = function () {
        ;(e.prototype.onAddedToEngine.call(this),
          this.engine.subscribe(h.FighterEvent, this._fighterEntityCreated))
      }),
      (t.prototype.onRemovedFromEngine = function () {
        ;(this.engine.unsubscribe(h.FighterEvent, this._fighterEntityCreated),
          this._freeCounts.clear(),
          this._fullAmount.clear(),
          this._isAnyBuilding.clear(),
          e.prototype.onRemovedFromEngine.call(this))
      }),
      t
    )
  })(d.ReactionSystem)
  t.GamePlaySystem = f
}
