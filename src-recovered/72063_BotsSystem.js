/**
 * Webpack Module #72063
 * @exports BotsSystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.BotsSystem = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(84194),
    a = n(3565),
    s = n(77577),
    u = n(25583),
    l = n(13866),
    c = n(95781),
    d = n(75111),
    h = n(93972),
    p = (function (e) {
      function t() {
        var t =
          e.call(this, function (e) {
            return e.has(a.BotLogic)
          }) || this
        return (
          (t._presets = [
            [3, 0, [[l.BotPreset1Easy, 1]]],
            [2, 1, [[l.BotPreset2Medium, 1]]],
            [3, 1, [[l.BotPreset3UpperMedium, 1]]],
            [3, 1, [[l.BotPreset4Hard, 1]]],
            [3, 1, [[l.BotPreset6FinalAgressive, 1]]],
          ]),
          (t._startBot = l.BotPreset0Vegetable),
          (t._lowLevelPresetEveryFights = 3),
          (t._gameplayEventHandler = t.gameplayEventHandler.bind(t)),
          (t.entityAdded = function (e) {
            e.current.get(a.BotLogic).init(t.selectPreset())
          }),
          t
        )
      }
      return (
        i.__extends(t, e),
        (t.prototype.updateEntity = function (e, t) {
          var n = e.get(a.BotLogic)
          if (n) {
            n.initialized || n.init(this.selectPreset())
            var i = n.decide(e)
            i && n.executeDecision(this.convertToDecision(i))
          }
        }),
        (t.prototype.convertToDecision = function (e) {
          var t,
            n,
            o = r.di.get(c.TypesGame.model),
            a = function (e) {
              return o.currentContinent.buildings.get(e)
            }
          if (e.Type === u.DecisionType.Move) {
            var s = []
            try {
              for (var l = i.__values(e.Objects), d = l.next(); !d.done; d = l.next()) {
                var h = d.value
                s.push(a(h.Id))
              }
            } catch (e) {
              t = { error: e }
            } finally {
              try {
                d && !d.done && (n = l.return) && n.call(l)
              } finally {
                if (t) throw t.error
              }
            }
            return { Type: u.DecisionType.Move, Subject: a(e.Subject.Id), Objects: s }
          }
          return { Type: u.DecisionType.Wait, Objects: [], Subject: {} }
        }),
        (t.prototype.selectPreset = function () {
          if (0 == this.model.currentContinent.stageLevel) return this._startBot
          if (this.isLowLevelFight) {
            this.getPrevLevel(this.cookie.botLevel)
            var e = i.__read(this._presets[0], 3)[2]
            return this.selectRandom(e)
          }
          var t = i.__read(this._presets[this.cookie.botLevel], 3)[2]
          return this.selectRandom(t)
        }),
        (t.prototype.getPrevLevel = function (e) {
          return s.math.clamp(e - 1, 0, this._presets.length - 1)
        }),
        (t.prototype.selectRandom = function (e) {
          return i.__read(o.Random.from(e), 1)[0]
        }),
        Object.defineProperty(t.prototype, "isLowLevelFight", {
          get: function () {
            return (
              this.cookie.fightsPassed % this._lowLevelPresetEveryFights == 1 &&
              this.cookie.botLevel > 0
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.gameplayEventHandler = function () {}),
        (t.prototype.onAddedToEngine = function () {
          ;(e.prototype.onAddedToEngine.call(this),
            (this.cookie = r.di.get(c.TypesGame.cookieModel)),
            (this.model = r.di.get(c.TypesGame.model)),
            this.engine.subscribe(h.GamePlayEvent, this._gameplayEventHandler))
        }),
        (t.prototype.onRemovedFromEngine = function () {
          ;(this.entities.forEach(function (e) {
            var t
            return null === (t = e.get(a.BotLogic)) || void 0 === t ? void 0 : t.terminate()
          }),
            this.engine.unsubscribe(h.GamePlayEvent, this._gameplayEventHandler),
            e.prototype.onRemovedFromEngine.call(this))
        }),
        t
      )
    })(d.IterativeSystem)
  t.BotsSystem = p
}
