/**
 * Webpack Module #54261
 * @exports SetupSentryAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.SetupSentryAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = i.__importStar(n(90505)),
    s = n(88183),
    u = n(86700),
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
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
                      return i.__awaiter(t, void 0, void 0, function () {
                        var t, n, o
                        return i.__generator(this, function (i) {
                          return (
                            e.culprit && (e.culprit = r(e.culprit)),
                            (null ===
                              (o =
                                null ===
                                  (n =
                                    null === (t = e.exception) || void 0 === t
                                      ? void 0
                                      : t.values[0]) || void 0 === n
                                  ? void 0
                                  : n.stacktrace) || void 0 === o
                              ? void 0
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
          void 0,
        ),
        (t = i.__decorate([(0, u.injectable)()], t))
      )
    })(r.Action)
  t.SetupSentryAction = l
}
