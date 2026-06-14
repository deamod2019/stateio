/**
 * Webpack Module #48115
 * @exports GenerateMapShapeAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.GenerateMapShapeAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86700) /* 86700_MetadataReader */,
    a = i.__importDefault(n(11414) /* 11414__mod */),
    s = n(6538) /* 6538_SIDES */,
    u = n(86178) /* 86178__mod */,
    l = n(55132) /* 55132__mod */,
    c = n(158) /* 158_SpritesPool */,
    d = n(95781) /* 95781_TypesGame */,
    h = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, r
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, Promise, function () {
            var t,
              n,
              r,
              o,
              u,
              l,
              c,
              d,
              h,
              p = this
            return i.__generator(this, function (f) {
              switch (f.label) {
                case 0:
                  return (
                    (t = e.shapes),
                    (n = undefined === e.keepCache || e.keepCache),
                    (null == t ? undefined : t.length)
                      ? ((r = 1 / 0),
                        (o = 1 / 0),
                        (u = []),
                        [
                          4,
                          Promise.all(
                            t.map(function (t, s) {
                              return i.__awaiter(p, undefined, undefined, function () {
                                var l, c, d, h
                                return i.__generator(this, function (p) {
                                  switch (p.label) {
                                    case 0:
                                      return (
                                        (l = i.__read((0, a.default)(t), 2)),
                                        (c = l[0]),
                                        (d = l[1]),
                                        (r = Math.min(r, c)),
                                        (o = Math.min(o, d)),
                                        [
                                          4,
                                          this.spritesPool.createShape(
                                            "".concat(e.id).concat(s > 0 ? s : ""),
                                            t,
                                            n,
                                          ),
                                        ]
                                      )
                                    case 1:
                                      return ((h = p.sent()), u.push([c, d]), [2, h])
                                  }
                                })
                              })
                            }) || [],
                          ),
                        ])
                      : [3, 2]
                  )
                case 1:
                  return (
                    (l = f.sent()),
                    (c = new s.Sprite()),
                    l.forEach(function (e, t) {
                      var n = u[t],
                        a = i.__read(n, 2),
                        s = a[0],
                        l = a[1]
                      ;(e.position.set(s - r, l - o), c.addChild(e))
                    }),
                    (d = this.rootView.app.renderer.generateTexture(
                      c,
                      s.SCALE_MODES.LINEAR,
                      window.devicePixelRatio,
                    )),
                    (h = new s.Sprite(d)).position.set(r, o),
                    !n &&
                      l.forEach(function (e) {
                        return s.Texture.removeFromCache(e.texture)
                      }),
                    s.Texture.removeFromCache(d),
                    [2, h]
                  )
                case 2:
                  return [2, new s.Sprite(s.Texture.EMPTY)]
              }
            })
          })
        }),
        i.__decorate(
          [
            (0, o.inject)(u.Types2D.rootView),
            i.__metadata(
              "design:type",
              "function" == typeof (n = undefined !== l.RootView && l.RootView) ? n : Object,
            ),
          ],
          t.prototype,
          "rootView",
          undefined,
        ),
        i.__decorate(
          [
            (0, o.inject)(d.TypesGame.spritesPool),
            i.__metadata(
              "design:type",
              "function" == typeof (r = undefined !== c.SpritesPool && c.SpritesPool) ? r : Object,
            ),
          ],
          t.prototype,
          "spritesPool",
          undefined,
        ),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.Action)
  t.GenerateMapShapeAction = h
}
