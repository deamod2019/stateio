/**
 * Webpack Module #43603
 * @exports LeaderboardContextExternal
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LeaderboardContextExternal = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(84194),
    s = n(86700),
    u = n(4421),
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.sync = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var e, t, n, r, o, s
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  if (this.social.inSolo) return [2, !1]
                  i.label = 1
                case 1:
                  return (
                    i.trys.push([1, 3, , 4]),
                    (t = this.social.context_id),
                    [4, this.appModel.post("scores-context/get", { ctx_id: t })]
                  )
                case 2:
                  return ((e = i.sent()), [3, 4])
                case 3:
                  return ((n = i.sent()), a.log.debug("failed to fetch", n), [2, !1])
                case 4:
                  for (o in ((r = this.social.friends.concat(this.social.me)), e))
                    (s = this.social.getFriendById(o, r)) &&
                      s.scores.update(this.castLeaderboardEntry(e[o], s))
                  return [2, !0]
              }
            })
          })
        }),
        (t.prototype.submit = function (e, t) {
          return i.__awaiter(this, void 0, void 0, function () {
            var n, r, o, s, u
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  if (this.social.inSolo) return [2, !1]
                  i.label = 1
                case 1:
                  return (
                    i.trys.push([1, 3, , 4]),
                    (r = this.social.context_id),
                    (o = this.social.me.id),
                    (s = "string" == typeof t ? t : JSON.stringify(t)),
                    [
                      4,
                      this.appModel.post("scores-context/post", {
                        ctx_id: r,
                        user_id: o,
                        score: e,
                        extData: s,
                      }),
                    ]
                  )
                case 2:
                  return ((n = i.sent()), [3, 4])
                case 3:
                  return ((u = i.sent()), a.log.debug("failed to fetch", u), [2, !1])
                case 4:
                  return (
                    this.social.me.scores.update(this.castLeaderboardEntry(n, this.social.me)),
                    [2, !0]
                  )
              }
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
                return "".concat(e.score)
              },
              getTimestamp: function () {
                return -1
              },
              getRank: function () {},
              getExtraData: function () {
                return e.extData
              },
              getPlayer: function () {
                return t.rawData
              },
            }
        }),
        i.__decorate(
          [(0, s.inject)(o.TypesApp.model), i.__metadata("design:type", u.AppModel)],
          t.prototype,
          "appModel",
          void 0,
        ),
        i.__decorate(
          [(0, r.lazyInject)(o.TypesSocial.model), i.__metadata("design:type", Object)],
          t.prototype,
          "social",
          void 0,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(r.EventDispatcher)
  t.LeaderboardContextExternal = l
}
