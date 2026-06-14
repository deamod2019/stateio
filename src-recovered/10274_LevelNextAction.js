/**
 * Webpack Module #10274
 * @exports LevelNextAction, TRACK_EVENT, FREE_SOLO_ATTEMPTS
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LevelNextAction = void 0))
  var i = n(70655),
    r = n(48616),
    o = n(86178),
    a = n(86700),
    s = n(3057),
    u = n(19474),
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
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return e
                    ? e !== this.social.opponent
                      ? [3, 1]
                      : [2, this.gotoNextLevel()]
                    : (n.FREE_SOLO_ATTEMPTS--, [2, this.playNextSolo()])
                case 1:
                  return [4, this.social.playWith(e, !0)]
                case 2:
                  switch (t.sent()) {
                    case r.SOCIAL_POPUP.ACCEPTED:
                      return [2, this.gotoNextLevel(!0)]
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
          return i.__awaiter(this, void 0, void 0, function () {
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
            void 0 === e && (e = !1),
            i.__awaiter(this, void 0, void 0, function () {
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
          return !1
        }),
        (t.FREE_SOLO_ATTEMPTS = Number.MAX_SAFE_INTEGER),
        i.__decorate(
          [(0, a.inject)(o.TypesFlow.LevelStart), i.__metadata("design:type", u.LevelStartAction)],
          t.prototype,
          "levelStart",
          void 0,
        ),
        (t = n = i.__decorate([(0, a.injectable)(), i.__metadata("design:paramtypes", [])], t))
      )
    })(s.SocialFlowAction)
  t.LevelNextAction = l
}
