/**
 * Webpack Module #38889
 * @exports SocialModelBase
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.SocialModelBase = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(86700),
    s = n(58670),
    u = n(60539),
    l = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.session = new s.SessionData()), (t.showPauseOverlay = !1), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.startGameAsync = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return [2]
            })
          })
        }),
        (t.prototype.getFriendById = function (e, t) {}),
        (t.prototype.init = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return [2]
            })
          })
        }),
        (t.prototype.playSolo = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return [2]
            })
          })
        }),
        (t.prototype.playOffline = function (e) {
          return (
            void 0 === e && (e = "default"),
            i.__awaiter(this, void 0, void 0, function () {
              return i.__generator(this, function (e) {
                return [2, u.SOCIAL_POPUP.FAILED]
              })
            })
          )
        }),
        (t.prototype.playWith = function (e, t) {
          return (
            void 0 === t && (t = !1),
            i.__awaiter(this, void 0, void 0, function () {
              return i.__generator(this, function (e) {
                return [2, u.SOCIAL_POPUP.FAILED]
              })
            })
          )
        }),
        (t.prototype.notify = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return [2, !1]
            })
          })
        }),
        (t.prototype.showShortcutPopup = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return [2, !1]
            })
          })
        }),
        (t.prototype.showBotPopup = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return [2, !1]
            })
          })
        }),
        (t.prototype.share = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return [2, !1]
            })
          })
        }),
        (t.prototype.switchGame = function (e, t) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return [2]
            })
          })
        }),
        (t.prototype.invite = function (e, t) {
          return (
            void 0 === t && (t = !1),
            i.__awaiter(this, void 0, void 0, function () {
              return i.__generator(this, function (e) {
                return [2, u.SOCIAL_POPUP.FAILED]
              })
            })
          )
        }),
        (t.prototype.getRandomChallenger = function (e) {
          void 0 === e && (e = [])
        }),
        (t.prototype.getRandomOpponent = function () {}),
        (t.prototype.syncLeaderboards = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return [2]
            })
          })
        }),
        (t.prototype.postSessionScore = function (e) {}),
        Object.defineProperty(t.prototype, "me", {
          get: function () {
            return this.nobody
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "opponent", {
          get: function () {},
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "contextPlayers", {
          get: function () {
            return []
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "inSolo", {
          get: function () {
            return !0
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "inGroup", {
          get: function () {
            return !1
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "friends", {
          get: function () {
            return []
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "socialPlatform", {
          get: function () {
            return "web"
          },
          enumerable: !1,
          configurable: !0,
        }),
        i.__decorate(
          [(0, a.inject)(o.TypesSocial.cookie), i.__metadata("design:type", Object)],
          t.prototype,
          "cookie",
          void 0,
        ),
        i.__decorate(
          [(0, a.inject)(o.TypesSocial.payments), i.__metadata("design:type", Object)],
          t.prototype,
          "payments",
          void 0,
        ),
        i.__decorate(
          [(0, r.lazyInject)(o.TypesSocial.dummyUser), i.__metadata("design:type", Object)],
          t.prototype,
          "nobody",
          void 0,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(r.EventDispatcher)
  t.SocialModelBase = l
}
