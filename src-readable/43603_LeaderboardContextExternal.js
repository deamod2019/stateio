/**
 * Webpack Module #43603
 * @exports LeaderboardContextExternal
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LeaderboardContextExternal = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(84194) /* 84194__mod */,
    s = n(86700) /* 86700_MetadataReader */,
    u = n(4421) /* 4421__mod */,
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.sync = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            var e, t, n, r, o, s
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  if (this.social.inSolo) return [2, false]
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
                  return ((n = i.sent()), a.log.debug("failed to fetch", n), [2, false])
                case 4:
                  for (o in ((r = this.social.friends.concat(this.social.me)), e))
                    (s = this.social.getFriendById(o, r)) &&
                      s.scores.update(this.castLeaderboardEntry(e[o], s))
                  return [2, true]
              }
            })
          })
        }),
        (t.prototype.submit = function (e, t) {
          return i.__awaiter(this, undefined, undefined, function () {
            var n, r, o, s, u
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  if (this.social.inSolo) return [2, false]
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
                  return ((u = i.sent()), a.log.debug("failed to fetch", u), [2, false])
                case 4:
                  return (
                    this.social.me.scores.update(this.castLeaderboardEntry(n, this.social.me)),
                    [2, true]
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
          undefined,
        ),
        i.__decorate(
          [(0, r.lazyInject)(o.TypesSocial.model), i.__metadata("design:type", Object)],
          t.prototype,
          "social",
          undefined,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(r.EventDispatcher)
  t.LeaderboardContextExternal = l
}
