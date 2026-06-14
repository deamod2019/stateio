/**
 * Webpack Module #54261
 * @exports SetupSentryAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.SetupSentryAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = i.__importStar(n(90505) /* 90505__mod */),
    s = n(88183) /* 88183__mod */,
    u = n(86700) /* 86700_MetadataReader */,
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var e,
              t = this
            return i.__generator(this, function (n) {
              return (
                (e = this.getConfig()) &&
                  (a.init(
                    i.__assign(i.__assign({}, e), {
                      integrations: [new s.Integrations.BrowserTracing()],
                      tracesSampleRate: 1,
                    }),
                  ),
                  a.configureScope(function (n) {
                    var r = function (t) {
                      return t.replace(
                        /^(.*:)\/\/([A-z0-9\-.]+)(:[0-9]+)?\/(.*)\//,
                        "~/".concat(e.project, "-").concat("ya", "/").concat(e.release, "/"),
                      )
                    }
                    n.addEventProcessor(function (e) {
                      return i.__awaiter(t, undefined, undefined, function () {
                        var t, n, o
                        return i.__generator(this, function (i) {
                          return (
                            e.culprit && (e.culprit = r(e.culprit)),
                            (null ===
                              (o =
                                null ===
                                  (n =
                                    null === (t = e.exception) || undefined === t
                                      ? undefined
                                      : t.values[0]) || undefined === n
                                  ? undefined
                                  : n.stacktrace) || undefined === o
                              ? undefined
                              : o.frames) &&
                              (e.exception.values[0].stacktrace.frames =
                                e.exception.values[0].stacktrace.frames.map(function (e) {
                                  return ((e.filename = r(e.filename)), e)
                                })),
                            [2, e]
                          )
                        })
                      })
                    })
                  })),
                [2]
              )
            })
          })
        }),
        (t.prototype.getConfig = function () {
          var e = this.gameConfig.sentry
          return (
            e &&
              (e.environment = ["ya", "production"]
                .filter(function (e) {
                  return !!e
                })
                .join("-")),
            e
          )
        }),
        i.__decorate(
          [(0, u.inject)(o.TypesCore.gameConfig), i.__metadata("design:type", Object)],
          t.prototype,
          "gameConfig",
          undefined,
        ),
        (t = i.__decorate([(0, u.injectable)()], t))
      )
    })(r.Action)
  t.SetupSentryAction = l
}
