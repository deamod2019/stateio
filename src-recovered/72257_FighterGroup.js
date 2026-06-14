/**
 * Webpack Module #72257
 * @exports FighterGroup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.FighterGroup = void 0))
  var i = n(44656),
    r = n(26463),
    o = n(95781),
    a = n(85126),
    s = n(46697),
    u = n(85765),
    l = n(77577),
    c = n(52057),
    d = n(6538),
    h = n(77577),
    p = (function () {
      function e(e, t, n, i, r, o) {
        ;((this.id = e),
          (this.Path = t),
          (this.Speed = n),
          (this.Owner = i),
          (this.Target = r),
          (this.Source = o),
          (this.Amount = 0),
          (this.StartTimestamp = 0),
          (this.StartTimestamp = Date.now()))
      }
      return (
        Object.defineProperty(e.prototype, "BurstWidth", {
          get: function () {
            return this.Source.get(a.PathHolder).getPathWidth()
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "BurstDelay", {
          get: function () {
            return this.Source.get(c.Spawner).burstDelay
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.GetPathLen = function () {
          for (var e = 0, t = 1; t < this.Path.length; t++)
            e += l.math.dist(this.Path[t - 1], this.Path[t])
          return e
        }),
        (e.prototype.initUnitGraphics = function (e) {
          var t = i.di.get(o.TypesGame.skinManager),
            n = i.di.get(o.TypesGame.spritesPool),
            r = t.getFighterTextureBy(e.owner),
            a = s.Fighter.DEFAULT_SIZE * e.scaleFactor * 1.5,
            u = n.fromDisplayObject(r, function () {
              var e = new d.Sprite(d.utils.TextureCache[r]),
                t = e.getBounds()
              return (e.anchor.set(0.5), e.scale.set(a / Math.max(t.height, t.width)), e)
            })
          return ((u.tint = h.color.fromHex(t.getColorBy(e.owner)[1])), u)
        }),
        (e.prototype.AddFighter = function (e) {
          ;(this.Amount++, (this.StartTimestamp = Date.now()))
          var t = i.di.get(o.TypesGame.model),
            n = new r.FighterView(),
            a = this.initUnitGraphics(e)
          ;(a.anchor.set(0.5), n.addChild(a), e.add(n), t.engine.addEntity(e), (e.group = this))
        }),
        (e.prototype.Check = function () {
          ;((Date.now() - this.StartTimestamp) * this.Speed) / this.GetPathLen() >= 1 &&
            this.Amount <= 0 &&
            u.FighterGroupsSystem.RemoveGroup(this.id)
        }),
        (e.prototype.OnFighterDied = function () {
          this.Amount--
        }),
        e
      )
    })()
  t.FighterGroup = p
}
