/**
 * Webpack Module #41976
 * @exports LeaderboardGlobalExternal
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LeaderboardGlobalExternal = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(84194),
    s = n(86700),
    u = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.__SYNCED = !1), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.sync = function (e) {
          return (
            void 0 === e && (e = 100),
            i.__awaiter(this, void 0, void 0, function () {
              var e, t, n, o, a, s
              return i.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (this.__SYNCED) return [2, !0]
                    ;((e = this.social.me.id),
                      (t = this.social.friends.map(function (e) {
                        return e.id
                      })),
                      (n = void 0),
                      (i.label = 1))
                  case 1:
                    return (
                      i.trys.push([1, 3, , 4]),
                      [4, this.appSend("scores/get", { user_id: e, friends: t })]
                    )
                  case 2:
                    return ((n = i.sent()), [3, 4])
                  case 3:
                    return (i.sent(), [2, !1])
                  case 4:
                    for (a in ((o = this.social.friends.concat(this.social.me)), n))
                      null == (s = this.social.getFriendById(a, o)) ||
                        s.scores.update(void 0, this.castLeaderboardEntry(n[a], s))
                    return ((this.__SYNCED = !0), this.emit(r.CommonEvents.UPDATED), [2, !0])
                }
              })
            })
          )
        }),
        (t.prototype.submit = function (e, t) {
          return i.__awaiter(this, void 0, void 0, function () {
            var n
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (n = { user_id: this.social.me.id, score: e, extData: t }),
                    e < this.social.me.scoreGlobal
                      ? [2, !1]
                      : (this.social.me.scores.update(
                          void 0,
                          this.castLeaderboardEntry(n, this.social.me),
                        ),
                        [4, this.appSend("scores/post", n)])
                  )
                case 1:
                  return (i.sent(), [2, !0])
              }
            })
          })
        }),
        (t.prototype.appSend = function (e, t) {
          return i.__awaiter(this, void 0, void 0, function () {
            var n
            return i.__generator(this, function (i) {
              return (n = (0, r.lazyGet)(o.TypesApp.model))
                ? [2, n.post(e, t)]
                : (a.log.warn("Failed to send request"), [2])
            })
          })
        }),
        (t.prototype.castLeaderboardEntry = function (e, t) {
          if (e)
            return {
              getScore: function () {
                return e.score
              },
              getFormattedScore: function () {
                return ""
              },
              getTimestamp: function () {
                return -1
              },
              getRank: function () {
                return 0
              },
              getExtraData: function () {
                return e.extData
              },
              getPlayer: function () {
                return null == t ? void 0 : t.rawData
              },
            }
        }),
        i.__decorate(
          [(0, r.lazyInject)(o.TypesSocial.model), i.__metadata("design:type", Object)],
          t.prototype,
          "social",
          void 0,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(r.EventDispatcher)
  t.LeaderboardGlobalExternal = u
}
