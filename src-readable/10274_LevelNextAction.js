/**
 * Webpack Module #10274
 * @exports LevelNextAction, TRACK_EVENT, FREE_SOLO_ATTEMPTS
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LevelNextAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(48616) /* 48616__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(3057) /* 3057_SocialFlowAction */,
    u = n(19474) /* 19474_LevelStartAction */,
    l = (function (e) {
      function t() {
        var t = e.call(this) || this
        return (
          (t.TRACK_EVENT = "level_next"),
          (t.onFailed = function () {
            throw new Error("Something went wrong")
          }),
          t
        )
      }
      var n
      return (
        i.__extends(t, e),
        (n = t),
        (t.prototype.launch = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return e
                    ? e !== this.social.opponent
                      ? [3, 1]
                      : [2, this.gotoNextLevel()]
                    : (n.FREE_SOLO_ATTEMPTS--, [2, this.playNextSolo()])
                case 1:
                  return [4, this.social.playWith(e, true)]
                case 2:
                  switch (t.sent()) {
                    case r.SOCIAL_POPUP.ACCEPTED:
                      return [2, this.gotoNextLevel(true)]
                    case r.SOCIAL_POPUP.CANCELLED:
                      if (n.FREE_SOLO_ATTEMPTS > 0)
                        return (n.FREE_SOLO_ATTEMPTS--, [2, this.playNextSolo()])
                  }
                  t.label = 3
                case 3:
                  return [2]
              }
            })
          })
        }),
        (t.prototype.playNextSolo = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, Promise.all([this.social.playSolo(), this.gotoNextLevel()])]
                case 1:
                  return (e.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.gotoNextLevel = function (e) {
          return (
            undefined === e && (e = false),
            i.__awaiter(this, undefined, undefined, function () {
              return i.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return ((this.levelStart.waitForContextChange = e), [4, this.levelStart.run()])
                  case 1:
                    return (t.sent(), [2])
                }
              })
            })
          )
        }),
        (t.prototype.needToShowAD = function () {
          return false
        }),
        (t.FREE_SOLO_ATTEMPTS = Number.MAX_SAFE_INTEGER),
        i.__decorate(
          [(0, a.inject)(o.TypesFlow.LevelStart), i.__metadata("design:type", u.LevelStartAction)],
          t.prototype,
          "levelStart",
          undefined,
        ),
        (t = n = i.__decorate([(0, a.injectable)(), i.__metadata("design:paramtypes", [])], t))
      )
    })(s.SocialFlowAction)
  t.LevelNextAction = l
}
