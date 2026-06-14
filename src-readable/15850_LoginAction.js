/**
 * Webpack Module #15850
 * @exports LoginAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LoginAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(84194) /* 84194__mod */,
    s = n(86700) /* 86700_MetadataReader */,
    u = n(20383) /* 20383_AppModel */,
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          var e
          return i.__awaiter(this, undefined, undefined, function () {
            var t
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (t = this.gameConfig.firebase)
                    ? [
                        4,
                        this.model.init({
                          appId: this.gameConfig.id,
                          firebase: t,
                          host:
                            null === (e = this.gameConfig.backend) || undefined === e
                              ? undefined
                              : e.host,
                          provider: this.social.socialPlatform,
                        }),
                      ]
                    : [3, 2]
                case 1:
                  return (n.sent(), [3, 3])
                case 2:
                  return (a.log.warn("Firebase analytics is not configured"), [2])
                case 3:
                  return (this.trackEntryPoint(), (0, r.lazyRun)(o.TypesApp.authAction), [2])
              }
            })
          })
        }),
        (t.prototype.trackEntryPoint = function (e) {
          var t = (0, r.lazyGet)(o.TypesAnalytics.tracker)
          if (e && e.ref) {
            var n = "game_entry_" + e.ref.source
            this.social.session.ftue ? t.track("ftue_".concat(n), e.ref) : t.track(n, e.ref)
          } else this.social.session.ftue ? t.track("ftue_game_entry") : t.track("game_entry")
        }),
        i.__decorate(
          [(0, s.inject)(o.TypesApp.model), i.__metadata("design:type", u.AppModel)],
          t.prototype,
          "model",
          undefined,
        ),
        i.__decorate(
          [(0, s.inject)(o.TypesSocial.model), i.__metadata("design:type", Object)],
          t.prototype,
          "social",
          undefined,
        ),
        i.__decorate(
          [(0, s.inject)(o.TypesCore.gameConfig), i.__metadata("design:type", Object)],
          t.prototype,
          "gameConfig",
          undefined,
        ),
        i.__decorate(
          [(0, s.inject)(o.TypesAnalytics.tracker), i.__metadata("design:type", Object)],
          t.prototype,
          "analytics",
          undefined,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(r.Action)
  t.LoginAction = l
}
