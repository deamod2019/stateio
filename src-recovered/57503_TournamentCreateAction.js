/**
 * Webpack Module #57503
 * @exports TournamentCreateAction, POST_WIDTH, POST_HEIGHT
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.TournamentCreateAction = void 0))
  var i = n(70655),
    r = n(84194),
    o = n(44656),
    a = n(86700),
    s = n(95781),
    u = n(94572),
    l = n(48616),
    c = n(86178),
    d = n(55132),
    h = n(6538),
    p = n(11470),
    f = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, o, f, _, g
      return (
        i.__extends(t, e),
        (n = t),
        (t.prototype.execute = function () {
          return i.__awaiter(this, void 0, Promise, function () {
            var e, t, n, o, a, s, u
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return "fb" !== this.social.socialPlatform
                    ? [2, !1]
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
                        return !0
                      })
                      .catch(function (e) {
                        return (r.log.warn("FBInstant.tournament.createAsync", e), !1)
                      }),
                  ]
                case 2:
                  return [2, i.sent()]
              }
            })
          })
        }),
        (t.prototype.generateTournamentImage = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
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
              "function" == typeof (o = void 0 !== d.RootView && d.RootView) ? o : Object,
            ),
          ],
          t.prototype,
          "rootView",
          void 0,
        ),
        i.__decorate(
          [
            (0, a.inject)(s.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (f = void 0 !== u.GameModel && u.GameModel) ? f : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        i.__decorate(
          [
            (0, a.inject)(c.TypesSocial.model),
            i.__metadata(
              "design:type",
              "function" == typeof (_ = void 0 !== l.ISocial && l.ISocial) ? _ : Object,
            ),
          ],
          t.prototype,
          "social",
          void 0,
        ),
        i.__decorate(
          [
            (0, a.inject)(s.TypesGame.actions.createMap),
            i.__metadata(
              "design:type",
              "function" ==
                typeof (g = void 0 !== p.GenerateMapSpriteAction && p.GenerateMapSpriteAction)
                ? g
                : Object,
            ),
          ],
          t.prototype,
          "createMapAction",
          void 0,
        ),
        (t = n = i.__decorate([(0, a.injectable)()], t))
      )
    })(o.Action)
  t.TournamentCreateAction = f
}
