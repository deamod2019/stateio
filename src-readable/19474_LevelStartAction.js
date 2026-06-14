/**
 * Webpack Module #19474
 * @exports LevelStartAction, TRACK_EVENT
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LevelStartAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(48616) /* 48616__mod */,
    s = n(86700) /* 86700_MetadataReader */,
    u = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.TRACK_EVENT = "level_start"), (t.waitForContextChange = false), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.launch = function (e) {
          var t
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    (this.social.me.scoreSession = 0),
                    this.tryToShowBanner(),
                    [
                      4,
                      null === (t = (0, r.lazyGet)(o.TypesFlow.UI.startScreenAction)) ||
                      undefined === t
                        ? undefined
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
          return i.__awaiter(this, undefined, undefined, function () {
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
                        i.__awaiter(t, undefined, undefined, function () {
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
    })(n(3057) /* 3057_SocialFlowAction */.SocialFlowAction)
  t.LevelStartAction = u
}
