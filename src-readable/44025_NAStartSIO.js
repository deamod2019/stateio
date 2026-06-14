/**
 * Webpack Module #44025
 * @exports NAStartSIO
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.NAStartSIO = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(48616) /* 48616__mod */,
    o = n(86700) /* 86700_MetadataReader */,
    a = n(95781) /* 95781_TypesGame */,
    s = n(94572) /* 94572_GameModel */,
    u = n(11470) /* 11470_GenerateMapSpriteAction */,
    l = n(86178) /* 86178__mod */,
    c = n(55132) /* 55132__mod */,
    d = n(6538) /* 6538_SIDES */,
    h = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.strategy = "IMMEDIATE"), t)
      }
      var n, h, p
      return (
        i.__extends(t, e),
        (t.prototype.getImage = function () {
          return i.__awaiter(this, undefined, Promise, function () {
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
          return i.__awaiter(this, undefined, undefined, function () {
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
                    (r = new (o.apply(d.Sprite, [undefined, i.sent()]))()).anchor.set(0.5),
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
              "function" == typeof (n = undefined !== s.GameModel && s.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          undefined,
        ),
        i.__decorate(
          [
            (0, o.inject)(l.Types2D.rootView),
            i.__metadata(
              "design:type",
              "function" == typeof (h = undefined !== c.RootView && c.RootView) ? h : Object,
            ),
          ],
          t.prototype,
          "rootView",
          undefined,
        ),
        i.__decorate(
          [
            (0, o.inject)(a.TypesGame.actions.createMap),
            i.__metadata(
              "design:type",
              "function" ==
                typeof (p = undefined !== u.GenerateMapSpriteAction && u.GenerateMapSpriteAction)
                ? p
                : Object,
            ),
          ],
          t.prototype,
          "createMapAction",
          undefined,
        ),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.NAStart)
  t.NAStartSIO = h
}
