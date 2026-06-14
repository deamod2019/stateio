/**
 * Webpack Module #11470
 * @exports GenerateMapSpriteAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.GenerateMapSpriteAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86700) /* 86700_MetadataReader */,
    a = n(6538) /* 6538_SIDES */,
    s = n(86178) /* 86178__mod */,
    u = n(55132) /* 55132__mod */,
    l = n(95781) /* 95781_TypesGame */,
    c = n(48115) /* 48115_GenerateMapShapeAction */,
    d = n(77577) /* 77577__mod */,
    h = n(36596) /* 36596_PlayerType */,
    p = n(158) /* 158_SpritesPool */,
    f = n(56792) /* 56792_CookieModel */,
    _ = n(60079) /* 60079_SkinManager */,
    g = n(84194) /* 84194__mod */,
    m = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, r, m, v, y
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, Promise, function () {
            var t,
              n,
              r = this
            return i.__generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = []),
                    e.data.stages.forEach(function (n, o) {
                      n.states.map(function (n) {
                        return i.__awaiter(r, undefined, undefined, function () {
                          var r, a
                          return i.__generator(this, function (i) {
                            return (
                              (r = "sprite-".concat(e.data.id, "-").concat(n.id)),
                              (a = this.getPlayerColor(o)),
                              t.push(this.createStateSprite(r, n, a)),
                              [2]
                            )
                          })
                        })
                      })
                    }),
                    [4, Promise.all(t)]
                  )
                case 1:
                  return ((n = o.sent()), [2, this.mergeSprites(n, e.area)])
              }
            })
          })
        }),
        (t.prototype.fit = function (e, t) {
          var n = this.aspectFactor(e.width, e.height, t.width, t.height)
          ;((e.width *= n), (e.height *= n))
        }),
        (t.prototype.aspectFactor = function (e, t, n, i) {
          return e / t >= n / i ? n / e : i / t
        }),
        (t.prototype.mergeSprites = function (e, t) {
          var n = new a.Sprite()
          ;(n.addChild.apply(n, i.__spreadArray([], i.__read(e), false)),
            t
              ? (this.fit(n, t), g.log.debug("mergeSprites", t.width, t.height))
              : (t = n.getLocalBounds()))
          var r = { width: t.width, height: t.height },
            o = a.RenderTexture.create(r)
          this.rootView.app.renderer.render(n, o)
          var s = new a.Sprite(o)
          return (a.Texture.removeFromCache(o), s)
        }),
        (t.prototype.createStateSprite = function (e, t, n) {
          return i.__awaiter(this, undefined, undefined, function () {
            var r, o, s, u, l, c, h, p
            return i.__generator(this, function (f) {
              switch (f.label) {
                case 0:
                  return [4, this.createMapPart.run({ id: e, shapes: t.shapes })]
                case 1:
                  return (
                    (r = f.sent()),
                    (o = new a.Sprite()),
                    (s = t.radius || 20),
                    (u = this.spritesPool.fromDisplayObject(
                      "base".concat(s, "-static"),
                      function () {
                        return new a.Graphics().beginFill(16777215).drawCircle(0, 0, s).endFill()
                      },
                    )).anchor.set(0.5),
                    u.position.set(t.x, t.y),
                    (l = i.__read(n, 3)),
                    (c = l[0]),
                    (h = l[1]),
                    (p = l[2]),
                    (r.tint = d.color.fromHex(c)),
                    (u.tint = d.color.fromHex(p || h)),
                    o.addChild(r),
                    o.addChild(u),
                    [2, o]
                  )
              }
            })
          })
        }),
        (t.prototype.getPlayerColor = function (e) {
          var t
          return (
            undefined === e && (e = 0),
            e <= (null === (t = this.data) || undefined === t ? undefined : t.activeStage)
              ? this.skinManager.getColorBy(h.PlayerType.First)
              : this.skinManager.getColorBy(h.PlayerType.Neutral)
          )
        }),
        i.__decorate(
          [
            (0, o.inject)(l.TypesGame.cookieModel),
            i.__metadata(
              "design:type",
              "function" == typeof (n = undefined !== f.CookieModel && f.CookieModel) ? n : Object,
            ),
          ],
          t.prototype,
          "cookies",
          undefined,
        ),
        i.__decorate(
          [
            (0, o.inject)(l.TypesGame.skinManager),
            i.__metadata(
              "design:type",
              "function" == typeof (r = undefined !== _.SkinManager && _.SkinManager) ? r : Object,
            ),
          ],
          t.prototype,
          "skinManager",
          undefined,
        ),
        i.__decorate(
          [
            (0, o.inject)(s.Types2D.rootView),
            i.__metadata(
              "design:type",
              "function" == typeof (m = undefined !== u.RootView && u.RootView) ? m : Object,
            ),
          ],
          t.prototype,
          "rootView",
          undefined,
        ),
        i.__decorate(
          [
            (0, o.inject)(l.TypesGame.spritesPool),
            i.__metadata(
              "design:type",
              "function" == typeof (v = undefined !== p.SpritesPool && p.SpritesPool) ? v : Object,
            ),
          ],
          t.prototype,
          "spritesPool",
          undefined,
        ),
        i.__decorate(
          [
            (0, o.inject)(l.TypesGame.actions.createMapPart),
            i.__metadata(
              "design:type",
              "function" ==
                typeof (y = undefined !== c.GenerateMapShapeAction && c.GenerateMapShapeAction)
                ? y
                : Object,
            ),
          ],
          t.prototype,
          "createMapPart",
          undefined,
        ),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.Action)
  t.GenerateMapSpriteAction = m
}
