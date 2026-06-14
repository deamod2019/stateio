/**
 * Webpack Module #10754
 * @exports TutorialSystem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.TutorialSystem = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(84194) /* 84194__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(77577) /* 77577__mod */,
    s = n(36596) /* 36596_PlayerType */,
    u = n(51006) /* 51006_TutorialFingerView */,
    l = n(25317) /* 25317_SteppedEase */,
    c = n(75111) /* 75111__mod */,
    d = n(26511) /* 26511_Building */,
    h = (function (e) {
      function t() {
        var t =
          e.call(this, function (e) {
            return e.has(d.Building.ACTIVE_TAG)
          }) || this
        return ((t._tutorialFingerEntityId = NaN), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.update = function () {}),
        (t.prototype.onAddedToEngine = function () {
          e.prototype.onAddedToEngine.call(this)
          var t = o.di.get(u.TutorialFingerView),
            n = new c.Entity().add(t)
          ;(this.engine.addEntity(n), (this._tutorialFingerEntityId = n.id))
          var d = this.entities.find(function (e) {
            return e.owner === s.PlayerType.First
          })
          if (!d)
            return (r.log.warn("Tutorial failed, from is " + d), this.engine.removeSystem(this))
          var h = d.data.statePos,
            p = i.__read(
              this.entities
                .filter(function (e) {
                  return e.owner !== s.PlayerType.First
                })
                .sort(function (e, t) {
                  return a.math.dist(h, e.data.statePos) - a.math.dist(h, t.data.statePos)
                }),
              1,
            )[0]
          if (!p)
            return (r.log.warn("Tutorial failed, nearest is " + p), this.engine.removeSystem(this))
          var f = i.__read(h, 2),
            _ = f[0],
            g = f[1],
            m = i.__read(p.data.statePos, 2),
            v = m[0],
            y = m[1],
            C = 1.2,
            b = 0.7
          l.gsap
            .timeline({ repeat: -1 })
            .add(l.gsap.fromTo(t, { alpha: 0 }, { alpha: 1 }), "appear")
            .add(l.gsap.fromTo(t.scale, { x: C, y: C }, { x: b, y: b }), "appear")
            .fromTo(t, { x: _, y: g }, { x: v, y })
            .add(l.gsap.fromTo(t, { alpha: 1 }, { alpha: 0 }), "disappear")
            .add(l.gsap.fromTo(t.scale, { x: b, y: b }, { x: C, y: C }), "disappear")
        }),
        (t.prototype.onRemovedFromEngine = function () {
          var t = this.engine.getEntityById(this._tutorialFingerEntityId)
          ;(t && this.engine.removeEntity(t), e.prototype.onRemovedFromEngine.call(this))
        }),
        t
      )
    })(c.ReactionSystem)
  t.TutorialSystem = h
}
