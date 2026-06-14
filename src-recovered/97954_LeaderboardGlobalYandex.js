/**
 * Webpack Module #97954
 * @exports LeaderboardGlobalYandex, PREFIX
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LeaderboardGlobalYandex = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(86700),
    s = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (n = t),
        (t.prototype.sync = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var e,
              t,
              a,
              s = this
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return ((e = this), [4, this.social.sdk.getLeaderboards()])
                case 1:
                  return (
                    (e._lb = i.sent()),
                    (window.lb = this._lb),
                    [4, this.social.sdk.isAvailableMethod("leaderboards.getLeaderboardEntries")]
                  )
                case 2:
                  if (!i.sent()) return [2, !1]
                  i.label = 3
                case 3:
                  return (
                    i.trys.push([3, 5, , 6]),
                    [4, this._lb.getLeaderboardEntries(n.PREFIX, { includeUser: !0 })]
                  )
                case 4:
                  return ((t = i.sent()), [3, 6])
                case 5:
                  return (
                    (a = i.sent()),
                    console.warn("failed to initialize leaderboard", a),
                    [2, !1]
                  )
                case 6:
                  return (
                    this.social.friends.splice(0, Number.MAX_SAFE_INTEGER),
                    t.entries.forEach(function (e) {
                      if (e.player.uniqueID === s.social.me.id)
                        s.social.me.scores.update(void 0, s.castLeaderboardEntry(e, s.social.me))
                      else {
                        var t = r.di.get(o.TypesSocial.user),
                          n = function () {
                            return Promise.resolve()
                          },
                          i = e.player.uniqueID,
                          a = {
                            signature: "",
                            getName: function () {
                              return e.player.publicName
                            },
                            getPhoto: e.player.getAvatarSrc,
                            getID: function () {
                              return i
                            },
                            getUniqueID: function () {
                              return i
                            },
                            setData: n,
                            getData: n,
                            setStats: n,
                            getStats: n,
                            incrementStats: n,
                            getMode: function () {
                              return ""
                            },
                          }
                        ;(t.init(a),
                          t.scores.update(void 0, s.castLeaderboardEntry(e, t)),
                          s.social.friends.push(t))
                      }
                    }),
                    this.emit(r.CommonEvents.UPDATED),
                    [2, !0]
                  )
              }
            })
          })
        }),
        (t.prototype.syncUserEntry = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var e
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return this._lb
                    ? [
                        4,
                        this.social.sdk.isAvailableMethod("leaderboards.getLeaderboardPlayerEntry"),
                      ]
                    : [3, 3]
                case 1:
                  return t.sent() ? [4, this._lb.getLeaderboardPlayerEntry(n.PREFIX)] : [3, 3]
                case 2:
                  ;((e = t.sent()) &&
                    this.social.me.scores.update(
                      void 0,
                      this.castLeaderboardEntry(e, this.social.me),
                    ),
                    (t.label = 3))
                case 3:
                  return [2]
              }
            })
          })
        }),
        (t.prototype.castLeaderboardEntry = function (e, t) {
          if (e)
            return (
              this.updateUserLbRecords(n.PREFIX, t, e),
              {
                getScore: function () {
                  return e.score
                },
                getFormattedScore: function () {
                  return e.formattedScore
                },
                getTimestamp: function () {
                  return -1
                },
                getRank: function () {
                  return e.rank
                },
                getExtraData: function () {
                  return e.extraData
                },
                getPlayer: function () {
                  return t.rawData || e.player
                },
              }
            )
        }),
        (t.prototype.submit = function (e, t) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return e < this.social.me.scoreGlobal
                    ? [2, !1]
                    : [4, this.social.sdk.isAvailableMethod("leaderboards.setLeaderboardScore")]
                case 1:
                  return i.sent() && this._lb
                    ? ((t = "string" == typeof t ? t : JSON.stringify(t)),
                      [4, this._lb.setLeaderboardScore(n.PREFIX, e, t)])
                    : [3, 3]
                case 2:
                  ;(i.sent(), this.syncUserEntry(), (i.label = 3))
                case 3:
                  return [2, !1]
              }
            })
          })
        }),
        (t.prototype.updateUserLbRecords = function (e, t, n) {
          var i = t.lbRecords.find(function (t) {
            return t.lb === e
          })
          i
            ? ((i.score = n.score), (i.rank = n.rank), (i.extraData = n.extraData))
            : ((i = { lb: e, score: n.score, rank: n.rank, extraData: n.extraData }),
              t.lbRecords.push(i))
        }),
        (t.PREFIX = "Scores"),
        i.__decorate(
          [(0, r.lazyInject)(o.TypesSocial.model), i.__metadata("design:type", Object)],
          t.prototype,
          "social",
          void 0,
        ),
        (t = n = i.__decorate([(0, a.injectable)()], t))
      )
    })(r.EventDispatcher)
  t.LeaderboardGlobalYandex = s
}
