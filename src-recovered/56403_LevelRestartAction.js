/**
 * Webpack Module #56403
 * @exports LevelRestartAction, TRACK_EVENT, SHOW_AD_INTERVAL, LAST_RESTART
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LevelRestartAction = void 0))
  var i = n(70655),
    r = n(86178),
    o = n(86700),
    a = n(44656),
    s = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.TRACK_EVENT = "level_restart"), (t.SHOW_AD_INTERVAL = 10), t)
      }
      var n
      return (
        i.__extends(t, e),
        (n = t),
        (t.prototype.needToShowAD = function () {
          return Date.now() - n.LAST_RESTART < 1e3 * this.SHOW_AD_INTERVAL
        }),
        (t.prototype.launch = function (e) {
          var t
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    (this.social.me.scoreSession = 0),
                    [
                      4,
                      null === (t = (0, a.lazyGet)(r.TypesFlow.UI.startScreenAction)) ||
                      void 0 === t
                        ? void 0
                        : t.run(),
                    ]
                  )
                case 1:
                  return (e.sent(), (n.LAST_RESTART = Date.now()), [2])
              }
            })
          })
        }),
        (t.LAST_RESTART = Date.now()),
        (t = n = i.__decorate([(0, o.injectable)()], t))
      )
    })(n(3057).SocialFlowAction)
  t.LevelRestartAction = s
}
