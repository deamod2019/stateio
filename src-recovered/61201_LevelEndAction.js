/**
 * Webpack Module #61201
 * @exports LevelEndAction, TRACK_EVENT
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LevelEndAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(86700),
    s = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.TRACK_EVENT = "level_end"), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.beforeLaunch = function () {
          return i.__awaiter(this, void 0, void 0, function () {
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
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    this.sendPush(o.TypesNotification.finish, { isWon: this._won }),
                    [
                      4,
                      null === (e = (0, r.lazyGet)(o.TypesFlow.UI.endScreenAction)) || void 0 === e
                        ? void 0
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
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    this.social.postSessionScore(),
                    null === (e = this.leaderboardGlobal) ||
                      void 0 === e ||
                      e.submit(this.social.me.scoreSession).then(),
                    this.social.me.scoreSession > this.social.me.scoreGlobal &&
                      (null === (t = (0, r.lazyGet)(o.TypesFlow.share)) || void 0 === t || t.run()),
                    this.social.inSolo
                      ? [3, 2]
                      : [
                          4,
                          null === (n = this.leaderboardContext) || void 0 === n
                            ? void 0
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
          return !1
        }),
        (t.prototype.isWon = function () {
          if ("boolean" == typeof this.data) return this.data
          if (this.social.inSolo) return this.social.me.scoreSession > this.social.me.scoreGlobal
          if (this.social.inBlindContext) return !0
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
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "leaderboardGlobal", {
          get: function () {
            return (0, r.lazyGet)(o.TypesSocial.leaderboardGlobal)
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.track = function () {
          var e
          null === (e = (0, r.lazyGet)(o.TypesAnalytics.tracker)) ||
            void 0 === e ||
            e.track(this.TRACK_EVENT, 1, { status: this.isWon() ? "won" : "loose" })
        }),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(n(3057).SocialFlowAction)
  t.LevelEndAction = s
}
