/**
 * Webpack Module #44025
 * @exports NAStartSIO
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.NAStartSIO = void 0))
  var i = n(70655),
    r = n(48616),
    o = n(86700),
    a = n(95781),
    s = n(94572),
    u = n(11470),
    l = n(86178),
    c = n(55132),
    d = n(6538),
    h = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.strategy = "IMMEDIATE"), t)
      }
      var n, h, p
      return (
        i.__extends(t, e),
        (t.prototype.getImage = function () {
          return i.__awaiter(this, void 0, Promise, function () {
            var t, n, o, a, s, u, l
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (t = this.model.currentContinent)
                    ? [4, this.createMapAction.run({ activeStage: t.stageLevel, data: t.data })]
                    : [3, 3]
                case 1:
                  return (
                    (n = i.sent()),
                    (o = new d.Container()),
                    (a = new d.Graphics()
                      .beginFill(13684944)
                      .drawRect(
                        0,
                        0,
                        r.NotificationAction.WIDTH_FULL,
                        r.NotificationAction.HEIGHT_FULL,
                      )),
                    o.addChild(a),
                    (s = this.aspectFactor(n.width, n.height, a.width, a.height)),
                    (n.width *= s),
                    (n.height *= s),
                    [4, this.avatar(this.social.me.photo)]
                  )
                case 2:
                  return (
                    ((u = i.sent()).height = 0.8 * r.NotificationAction.HEIGHT_FULL),
                    (u.scale.x = u.scale.y),
                    (u.x = 0.25 * a.width),
                    (u.y = 0.5 * a.height),
                    (n.x = 0.75 * (a.width - n.width)),
                    (n.y = 0.5 * (a.height - n.height)),
                    o.addChild(n, u),
                    (l = this.rootView.app.renderer.extract.base64(o)),
                    d.Texture.removeFromCache(n.texture),
                    [2, l]
                  )
                case 3:
                  return [2, e.prototype.getImage.call(this)]
              }
            })
          })
        }),
        (t.prototype.aspectFactor = function (e, t, n, i) {
          return e / t >= n / i ? n / e : i / t
        }),
        (t.prototype.avatar = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t, n, r, o, a, s
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t = 140),
                    (n = new d.Graphics().lineStyle(40, 9034543).drawCircle(0, 0, t)),
                    (o = d.Sprite.bind),
                    [4, (0, c.loadTexture)(e)]
                  )
                case 1:
                  return (
                    (r = new (o.apply(d.Sprite, [void 0, i.sent()]))()).anchor.set(0.5),
                    (a = new d.Graphics().beginFill(0).drawCircle(0, 0, t).endFill()),
                    (s = new d.Container()).addChild(r),
                    s.addChild(a),
                    (r.mask = a),
                    s.addChild(n),
                    d.Texture.removeFromCache(r.texture),
                    [2, s]
                  )
              }
            })
          })
        }),
        i.__decorate(
          [
            (0, o.inject)(a.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (n = void 0 !== s.GameModel && s.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        i.__decorate(
          [
            (0, o.inject)(l.Types2D.rootView),
            i.__metadata(
              "design:type",
              "function" == typeof (h = void 0 !== c.RootView && c.RootView) ? h : Object,
            ),
          ],
          t.prototype,
          "rootView",
          void 0,
        ),
        i.__decorate(
          [
            (0, o.inject)(a.TypesGame.actions.createMap),
            i.__metadata(
              "design:type",
              "function" ==
                typeof (p = void 0 !== u.GenerateMapSpriteAction && u.GenerateMapSpriteAction)
                ? p
                : Object,
            ),
          ],
          t.prototype,
          "createMapAction",
          void 0,
        ),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.NAStart)
  t.NAStartSIO = h
}
