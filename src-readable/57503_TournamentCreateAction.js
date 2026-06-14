/**
 * Webpack Module #57503
 * @exports TournamentCreateAction, POST_WIDTH, POST_HEIGHT
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.TournamentCreateAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(84194) /* 84194__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(95781) /* 95781_TypesGame */,
    u = n(94572) /* 94572_GameModel */,
    l = n(48616) /* 48616__mod */,
    c = n(86178) /* 86178__mod */,
    d = n(55132) /* 55132__mod */,
    h = n(6538) /* 6538_SIDES */,
    p = n(11470) /* 11470_GenerateMapSpriteAction */,
    f = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, o, f, _, g
      return (
        i.__extends(t, e),
        (n = t),
        (t.prototype.execute = function () {
          return i.__awaiter(this, undefined, Promise, function () {
            var e, t, n, o, a, s, u
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return "fb" !== this.social.socialPlatform
                    ? [2, false]
                    : ((e = this.model.currentContinent),
                      (n = (t = FBInstant.tournament).createAsync),
                      (s = { initialScore: e.getTotalScore(), data: e.getHistory() }),
                      (u = { title: e.data.id }),
                      (a = (o = this.rootView.app.renderer.extract).base64),
                      [4, this.generateTournamentImage(this.model.currentContinent)])
                case 1:
                  return [
                    4,
                    n
                      .apply(t, [((s.config = ((u.image = a.apply(o, [i.sent()])), u)), s)])
                      .then(function () {
                        return true
                      })
                      .catch(function (e) {
                        return (r.log.warn("FBInstant.tournament.createAsync", e), false)
                      }),
                  ]
                case 2:
                  return [2, i.sent()]
              }
            })
          })
        }),
        (t.prototype.generateTournamentImage = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var t, r, o, a, s, u
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t = new h.Container()),
                    (r = new h.Graphics()
                      .beginFill(13684944)
                      .drawRect(0, 0, n.POST_WIDTH, n.POST_HEIGHT)),
                    t.addChild(r),
                    [4, this.createMapAction.run({ activeStage: e.stageLevel, data: e.data })]
                  )
                case 1:
                  return (
                    (o = i.sent()),
                    (a = 0.9 * r.width),
                    (s = 0.9 * r.height),
                    (u = this.aspectFactor(o.width, o.height, a, s)),
                    (o.width *= u),
                    (o.height *= u),
                    (o.x = 0.5 * (r.width - o.width)),
                    (o.y = 0.5 * (r.height - o.height)),
                    t.addChild(r, o),
                    [2, t]
                  )
              }
            })
          })
        }),
        (t.prototype.aspectFactor = function (e, t, n, i) {
          return e / t >= n / i ? n / e : i / t
        }),
        (t.POST_WIDTH = 680),
        (t.POST_HEIGHT = 340),
        i.__decorate(
          [
            (0, a.inject)(c.Types2D.rootView),
            i.__metadata(
              "design:type",
              "function" == typeof (o = undefined !== d.RootView && d.RootView) ? o : Object,
            ),
          ],
          t.prototype,
          "rootView",
          undefined,
        ),
        i.__decorate(
          [
            (0, a.inject)(s.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (f = undefined !== u.GameModel && u.GameModel) ? f : Object,
            ),
          ],
          t.prototype,
          "model",
          undefined,
        ),
        i.__decorate(
          [
            (0, a.inject)(c.TypesSocial.model),
            i.__metadata(
              "design:type",
              "function" == typeof (_ = undefined !== l.ISocial && l.ISocial) ? _ : Object,
            ),
          ],
          t.prototype,
          "social",
          undefined,
        ),
        i.__decorate(
          [
            (0, a.inject)(s.TypesGame.actions.createMap),
            i.__metadata(
              "design:type",
              "function" ==
                typeof (g = undefined !== p.GenerateMapSpriteAction && p.GenerateMapSpriteAction)
                ? g
                : Object,
            ),
          ],
          t.prototype,
          "createMapAction",
          undefined,
        ),
        (t = n = i.__decorate([(0, a.injectable)()], t))
      )
    })(o.Action)
  t.TournamentCreateAction = f
}
