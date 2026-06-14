/**
 * Webpack Module #19474
 * @exports LevelStartAction, TRACK_EVENT
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LevelStartAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(48616),
    s = n(86700),
    u = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.TRACK_EVENT = "level_start"), (t.waitForContextChange = !1), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.launch = function (e) {
          var t
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    (this.social.me.scoreSession = 0),
                    this.tryToShowBanner(),
                    [
                      4,
                      null === (t = (0, r.lazyGet)(o.TypesFlow.UI.startScreenAction)) ||
                      void 0 === t
                        ? void 0
                        : t.run(),
                    ]
                  )
                case 1:
                  return (e.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.beforeLaunch = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var t = this
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (this._contextChangePromise = this.waitForContextChange
                      ? new Promise(function (e) {
                          return t.social.once(a.SocialEvents.CONTEXT_CHANGE, e)
                        })
                      : Promise.resolve()),
                    [
                      4,
                      Promise.all([
                        i.__awaiter(t, void 0, void 0, function () {
                          return i.__generator(this, function (e) {
                            switch (e.label) {
                              case 0:
                                return [4, this._contextChangePromise]
                              case 1:
                                return (e.sent(), this.sendPush(o.TypesNotification.start), [2])
                            }
                          })
                        }),
                        e.prototype.beforeLaunch.call(this),
                      ]),
                    ]
                  )
                case 1:
                  return (n.sent(), [2])
              }
            })
          })
        }),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(n(3057).SocialFlowAction)
  t.LevelStartAction = u
}
