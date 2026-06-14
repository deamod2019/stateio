/**
 * Webpack Module #61201
 * @exports LevelEndAction, TRACK_EVENT
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LevelEndAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.TRACK_EVENT = "level_end"), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.beforeLaunch = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    (this._won = this.isWon()),
                    this.tryToShowBanner(),
                    [4, Promise.all([this.submitScore(), this.showAdIfNeeded()])]
                  )
                case 1:
                  return (e.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.launch = function () {
          var e
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    this.sendPush(o.TypesNotification.finish, { isWon: this._won }),
                    [
                      4,
                      null === (e = (0, r.lazyGet)(o.TypesFlow.UI.endScreenAction)) || undefined === e
                        ? undefined
                        : e.run(this._won),
                    ]
                  )
                case 1:
                  return (t.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.submitScore = function () {
          var e, t, n
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    this.social.postSessionScore(),
                    null === (e = this.leaderboardGlobal) ||
                      undefined === e ||
                      e.submit(this.social.me.scoreSession).then(),
                    this.social.me.scoreSession > this.social.me.scoreGlobal &&
                      (null === (t = (0, r.lazyGet)(o.TypesFlow.share)) || undefined === t || t.run()),
                    this.social.inSolo
                      ? [3, 2]
                      : [
                          4,
                          null === (n = this.leaderboardContext) || undefined === n
                            ? undefined
                            : n.submit(this.social.me.scoreSession),
                        ]
                  )
                case 1:
                  ;(i.sent(), (i.label = 2))
                case 2:
                  return [2]
              }
            })
          })
        }),
        (t.prototype.needToShowAD = function () {
          return false
        }),
        (t.prototype.isWon = function () {
          if ("boolean" == typeof this.data) return this.data
          if (this.social.inSolo) return this.social.me.scoreSession > this.social.me.scoreGlobal
          if (this.social.inBlindContext) return true
          if (this.social.inGroup) {
            var e = i.__read(
              this.social.contextPlayers.sort(function (e, t) {
                return t.scoreContext - e.scoreContext
              }),
              1,
            )[0]
            if (e)
              return (
                Math.max(this.social.me.scoreContext, this.social.me.scoreSession) >= e.scoreContext
              )
          }
          return !!(
            this.social.opponent && this.social.me.scoreSession > this.social.opponent.scoreContext
          )
        }),
        Object.defineProperty(t.prototype, "leaderboardContext", {
          get: function () {
            return (0, r.lazyGet)(o.TypesSocial.leaderboardContext)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "leaderboardGlobal", {
          get: function () {
            return (0, r.lazyGet)(o.TypesSocial.leaderboardGlobal)
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.track = function () {
          var e
          null === (e = (0, r.lazyGet)(o.TypesAnalytics.tracker)) ||
            undefined === e ||
            e.track(this.TRACK_EVENT, 1, { status: this.isWon() ? "won" : "loose" })
        }),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(n(3057) /* 3057_SocialFlowAction */.SocialFlowAction)
  t.LevelEndAction = s
}
