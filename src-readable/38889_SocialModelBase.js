/**
 * Webpack Module #38889
 * @exports SocialModelBase
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.SocialModelBase = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(58670) /* 58670_CookieDataLocalStorage */,
    u = n(60539) /* 60539__mod */,
    l = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.session = new s.SessionData()), (t.showPauseOverlay = false), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.startGameAsync = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return [2]
            })
          })
        }),
        (t.prototype.getFriendById = function (e, t) {}),
        (t.prototype.init = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return [2]
            })
          })
        }),
        (t.prototype.playSolo = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return [2]
            })
          })
        }),
        (t.prototype.playOffline = function (e) {
          return (
            undefined === e && (e = "default"),
            i.__awaiter(this, undefined, undefined, function () {
              return i.__generator(this, function (e) {
                return [2, u.SOCIAL_POPUP.FAILED]
              })
            })
          )
        }),
        (t.prototype.playWith = function (e, t) {
          return (
            undefined === t && (t = false),
            i.__awaiter(this, undefined, undefined, function () {
              return i.__generator(this, function (e) {
                return [2, u.SOCIAL_POPUP.FAILED]
              })
            })
          )
        }),
        (t.prototype.notify = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return [2, false]
            })
          })
        }),
        (t.prototype.showShortcutPopup = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return [2, false]
            })
          })
        }),
        (t.prototype.showBotPopup = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return [2, false]
            })
          })
        }),
        (t.prototype.share = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return [2, false]
            })
          })
        }),
        (t.prototype.switchGame = function (e, t) {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return [2]
            })
          })
        }),
        (t.prototype.invite = function (e, t) {
          return (
            undefined === t && (t = false),
            i.__awaiter(this, undefined, undefined, function () {
              return i.__generator(this, function (e) {
                return [2, u.SOCIAL_POPUP.FAILED]
              })
            })
          )
        }),
        (t.prototype.getRandomChallenger = function (e) {
          undefined === e && (e = [])
        }),
        (t.prototype.getRandomOpponent = function () {}),
        (t.prototype.syncLeaderboards = function () {
          return i.__awaiter(this, undefined, undefined, function () {
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
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "opponent", {
          get: function () {},
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "contextPlayers", {
          get: function () {
            return []
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "inSolo", {
          get: function () {
            return true
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "inGroup", {
          get: function () {
            return false
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "friends", {
          get: function () {
            return []
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "socialPlatform", {
          get: function () {
            return "web"
          },
          enumerable: false,
          configurable: true,
        }),
        i.__decorate(
          [(0, a.inject)(o.TypesSocial.cookie), i.__metadata("design:type", Object)],
          t.prototype,
          "cookie",
          undefined,
        ),
        i.__decorate(
          [(0, a.inject)(o.TypesSocial.payments), i.__metadata("design:type", Object)],
          t.prototype,
          "payments",
          undefined,
        ),
        i.__decorate(
          [(0, r.lazyInject)(o.TypesSocial.dummyUser), i.__metadata("design:type", Object)],
          t.prototype,
          "nobody",
          undefined,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(r.EventDispatcher)
  t.SocialModelBase = l
}
