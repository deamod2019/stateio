/**
 * Webpack Module #11470
 * @exports GenerateMapSpriteAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.GenerateMapSpriteAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86700),
    a = n(6538),
    s = n(86178),
    u = n(55132),
    l = n(95781),
    c = n(48115),
    d = n(77577),
    h = n(36596),
    p = n(158),
    f = n(56792),
    _ = n(60079),
    g = n(84194),
    m = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, r, m, v, y
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, void 0, Promise, function () {
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
                        return i.__awaiter(r, void 0, void 0, function () {
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
          ;(n.addChild.apply(n, i.__spreadArray([], i.__read(e), !1)),
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
          return i.__awaiter(this, void 0, void 0, function () {
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
            void 0 === e && (e = 0),
            e <= (null === (t = this.data) || void 0 === t ? void 0 : t.activeStage)
              ? this.skinManager.getColorBy(h.PlayerType.First)
              : this.skinManager.getColorBy(h.PlayerType.Neutral)
          )
        }),
        i.__decorate(
          [
            (0, o.inject)(l.TypesGame.cookieModel),
            i.__metadata(
              "design:type",
              "function" == typeof (n = void 0 !== f.CookieModel && f.CookieModel) ? n : Object,
            ),
          ],
          t.prototype,
          "cookies",
          void 0,
        ),
        i.__decorate(
          [
            (0, o.inject)(l.TypesGame.skinManager),
            i.__metadata(
              "design:type",
              "function" == typeof (r = void 0 !== _.SkinManager && _.SkinManager) ? r : Object,
            ),
          ],
          t.prototype,
          "skinManager",
          void 0,
        ),
        i.__decorate(
          [
            (0, o.inject)(s.Types2D.rootView),
            i.__metadata(
              "design:type",
              "function" == typeof (m = void 0 !== u.RootView && u.RootView) ? m : Object,
            ),
          ],
          t.prototype,
          "rootView",
          void 0,
        ),
        i.__decorate(
          [
            (0, o.inject)(l.TypesGame.spritesPool),
            i.__metadata(
              "design:type",
              "function" == typeof (v = void 0 !== p.SpritesPool && p.SpritesPool) ? v : Object,
            ),
          ],
          t.prototype,
          "spritesPool",
          void 0,
        ),
        i.__decorate(
          [
            (0, o.inject)(l.TypesGame.actions.createMapPart),
            i.__metadata(
              "design:type",
              "function" ==
                typeof (y = void 0 !== c.GenerateMapShapeAction && c.GenerateMapShapeAction)
                ? y
                : Object,
            ),
          ],
          t.prototype,
          "createMapPart",
          void 0,
        ),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.Action)
  t.GenerateMapSpriteAction = m
}
