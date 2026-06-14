/**
 * Webpack Module #48115
 * @exports GenerateMapShapeAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.GenerateMapShapeAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86700),
    a = i.__importDefault(n(11414)),
    s = n(6538),
    u = n(86178),
    l = n(55132),
    c = n(158),
    d = n(95781),
    h = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, r
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, void 0, Promise, function () {
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
                    (n = void 0 === e.keepCache || e.keepCache),
                    (null == t ? void 0 : t.length)
                      ? ((r = 1 / 0),
                        (o = 1 / 0),
                        (u = []),
                        [
                          4,
                          Promise.all(
                            t.map(function (t, s) {
                              return i.__awaiter(p, void 0, void 0, function () {
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
              "function" == typeof (n = void 0 !== l.RootView && l.RootView) ? n : Object,
            ),
          ],
          t.prototype,
          "rootView",
          void 0,
        ),
        i.__decorate(
          [
            (0, o.inject)(d.TypesGame.spritesPool),
            i.__metadata(
              "design:type",
              "function" == typeof (r = void 0 !== c.SpritesPool && c.SpritesPool) ? r : Object,
            ),
          ],
          t.prototype,
          "spritesPool",
          void 0,
        ),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.Action)
  t.GenerateMapShapeAction = h
}
