/**
 * Webpack Module #99806
 * @exports FighterMovementSystem, FighterEvent
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.FighterMovementSystem = t.FighterEvent = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(75111),
    a = n(26463),
    s = n(46697),
    u = n(96239),
    l = n(71981),
    c = n(53351),
    d = n(95781),
    h = (function () {
      function e(e, t) {
        ;((this.type = e), (this.fighter = t))
      }
      return ((e.FIGHTER_CREATED = "FighterCreated"), (e.FIGHTER_DIED = "FighterDied"), e)
    })()
  t.FighterEvent = h
  var p = (function (e) {
    function t() {
      var t =
        e.call(this, function (e) {
          return e.has(a.FighterView)
        }) || this
      return (
        (t.cells = new Map()),
        (t.entityAdded = function (e) {
          var n = e.current
          ;(t.addView(n), t.dispatch(new h(h.FIGHTER_CREATED, n)))
        }),
        (t.entityRemoved = function (e) {
          var n = e.current
          ;(t.removeView(n), t.dispatch(new h(h.FIGHTER_DIED, n)))
        }),
        t
      )
    }
    return (
      i.__extends(t, e),
      (t.prototype.update = function (t) {
        ;(e.prototype.update.call(this, t), this.checkCollisions())
      }),
      (t.prototype.checkCollisions = function () {
        var e = this
        this.cells.forEach(function (t) {
          t.getCollisions().forEach(function (t) {
            ;(r.di.get(l.FighterDeathEffectAction).run(t),
              t.forEach(function (t) {
                var n
                ;(t.hasTag(s.Fighter.TAG_DIED) ||
                  (t.addTag(s.Fighter.TAG_DIED),
                  null === (n = t.group) || void 0 === n || n.OnFighterDied()),
                  e.engine.removeEntity(t))
              }))
          })
        })
      }),
      (t.prototype.updateEntity = function (e, t) {
        var n
        if (e.move(t)) (e.target.tryOccupy(e), this.engine.removeEntity(e))
        else {
          var r = i.__read(
              e.position.map(function (e) {
                return Math.round(e / u.PCell.SIZE)
              }),
              2,
            ),
            o = r[0],
            s = r[1],
            l = "".concat(o, "_").concat(s),
            c = this.cells.get(l) || new u.PCell()
          ;(c.add(e), this.cells.set(l, c))
        }
        if (e.has(a.FighterView)) {
          var d = e.get(a.FighterView)
          ;((n = d.position).set.apply(n, i.__spreadArray([], i.__read(e.position), !1)),
            (d.rotation = e.rotation))
        }
      }),
      (t.prototype.addView = function (e) {
        var t,
          n = e.get(a.FighterView),
          i = e.source.get(c.CapitalView),
          o =
            null === (t = (0, r.lazyGet)(d.TypesGame.views.fieldInstance)) || void 0 === t
              ? void 0
              : t.fighters
        if (n && o) {
          var s = (n.position = o.toLocal(i.position, i.parent)),
            u = s.x,
            l = s.y
          ;((e.position[0] = u), (e.position[1] = l), o.addChild(n))
        }
      }),
      (t.prototype.removeView = function (e) {
        var t,
          n = e.get(a.FighterView)
        null === (t = null == n ? void 0 : n.parent) || void 0 === t || t.removeChild(n)
      }),
      (t.prototype.onRemovedFromEngine = function () {
        this.cells.clear()
        for (var t = this.engine.entities.length; t; )
          (this.entities[0] && this.engine.removeEntity(this.entities[0]), t--)
        e.prototype.onRemovedFromEngine.call(this)
      }),
      t
    )
  })(o.IterativeSystem)
  t.FighterMovementSystem = p
}
