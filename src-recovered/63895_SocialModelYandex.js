/**
 * Webpack Module #63895
 * @exports SocialModelYandex
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.SocialModelYandex = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86125),
    a = n(86178),
    s = n(48616),
    u = n(84194),
    l = n(86700),
    c = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (
          (t._userAuthorized = !1),
          (t._friends = []),
          (t.leaderboards = []),
          (t._locale = "en_US"),
          (t._tld = "com"),
          t
        )
      }
      return (
        i.__extends(t, e),
        (t.prototype.startGameAsync = function () {
          var e
          return i.__awaiter(this, void 0, void 0, function () {
            var t
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (t = (null === (e = this.pageModel.bus) || void 0 === e ? void 0 : e.params)
                      .yasdk),
                    (this._yasdk = t),
                    (this._locale = this._determinateLocale()),
                    (o.Localize.defaultLocale = this._locale),
                    [4, this.updateUserData(!1)]
                  )
                case 1:
                  return (n.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.init = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t, n, r, o
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    this.leaderboards.push(this._leaderboardGlobal),
                    this.leaderboards.push(this._leaderboardContext),
                    (t = this.cookie.get(
                      ["session"].concat((null == e ? void 0 : e.cookies) || []),
                    )),
                    (o = (r = this.session).init),
                    [4, t]
                  )
                case 1:
                  return (
                    (n = o.apply(r, [i.sent().session])),
                    this.cookie.save("session", n),
                    [4, this.payments.init({ yasdk: this._yasdk })]
                  )
                case 2:
                  return (i.sent(), [2])
              }
            })
          })
        }),
        Object.defineProperty(t.prototype, "me", {
          get: function () {
            return this._me
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.updateUserData = function (e) {
          return (
            void 0 === e && (e = !1),
            i.__awaiter(this, void 0, void 0, function () {
              var t, n, o, s
              return i.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    ;((n = !1), (i.label = 1))
                  case 1:
                    return (i.trys.push([1, 3, , 4]), [4, this._yasdk.getPlayer({ scopes: e })])
                  case 2:
                    return (
                      (t = i.sent()),
                      (o = "lite" !== t.getMode()),
                      this._userAuthorized !== o && ((this._userAuthorized = o), (n = !0)),
                      [3, 4]
                    )
                  case 3:
                    return ((s = i.sent()), u.log.warn(s), [3, 4])
                  case 4:
                    return (
                      this._me || (this._me = r.di.get(a.TypesSocial.user)),
                      this._me.init(t || r.di.get(a.TypesSocial.dummyUser)),
                      this.cookie.init(t),
                      n && this.emit("AUTHORIZATION_STATE_CHANGED"),
                      [2]
                    )
                }
              })
            })
          )
        }),
        (t.prototype.authorizeUser = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var e
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  if (this._userAuthorized) return [3, 5]
                  t.label = 1
                case 1:
                  return (t.trys.push([1, 4, , 5]), [4, this._yasdk.auth.openAuthDialog()])
                case 2:
                  return (t.sent(), [4, this.updateUserData(!0)])
                case 3:
                  return (t.sent(), [3, 5])
                case 4:
                  return ((e = t.sent()), u.log.warn(e), [3, 5])
                case 5:
                  return [2, this._userAuthorized]
              }
            })
          })
        }),
        (t.prototype.postSessionScore = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return [2]
            })
          })
        }),
        Object.defineProperty(t.prototype, "friends", {
          get: function () {
            return this._friends
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getFriendById = function (e, t) {
          var n, r
          if (((t = t || this._friends), e === this._me.id)) return this._me
          try {
            for (var o = i.__values(t), a = o.next(); !a.done; a = o.next()) {
              var s = a.value
              if (s.id === e) return s
            }
          } catch (e) {
            n = { error: e }
          } finally {
            try {
              a && !a.done && (r = o.return) && r.call(o)
            } finally {
              if (n) throw n.error
            }
          }
        }),
        Object.defineProperty(t.prototype, "socialPlatform", {
          get: function () {
            return "ya"
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "userAuthorized", {
          get: function () {
            return this._userAuthorized
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.syncLeaderboards = function () {
          var e, t, n, r
          return i.__awaiter(this, void 0, void 0, function () {
            var o, a, u, l
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return this.userAuthorized ? [3, 2] : [4, this._leaderboardContext.sync()]
                case 1:
                  return (i.sent(), [3, 14])
                case 2:
                  return [4, this._leaderboardContext.sync()]
                case 3:
                  return (
                    i.sent(),
                    (o = this.me.scoreGlobal),
                    (a =
                      null ===
                        (t =
                          null === (e = this.me.scores) || void 0 === e
                            ? void 0
                            : e.getEntry(s.ScoreType.GLOBAL)) || void 0 === t
                        ? void 0
                        : t.getExtraData()),
                    [4, this._leaderboardGlobal.sync()]
                  )
                case 4:
                  return (
                    i.sent(),
                    (u = this.me.scoreGlobal),
                    (l =
                      null ===
                        (r =
                          null === (n = this.me.scores) || void 0 === n
                            ? void 0
                            : n.getEntry(s.ScoreType.GLOBAL)) || void 0 === r
                        ? void 0
                        : r.getExtraData()),
                    o > u ? (a ? [4, this._leaderboardGlobal.submit(o, a)] : [3, 6]) : [3, 9]
                  )
                case 5:
                  return (i.sent(), [3, 8])
                case 6:
                  return [4, this._leaderboardGlobal.submit(o)]
                case 7:
                  ;(i.sent(), (i.label = 8))
                case 8:
                  return [3, 14]
                case 9:
                  return u > o
                    ? l
                      ? [4, this._leaderboardContext.submit(u, l)]
                      : [3, 11]
                    : [3, 14]
                case 10:
                  return (i.sent(), [3, 13])
                case 11:
                  return [4, this._leaderboardContext.submit(u)]
                case 12:
                  ;(i.sent(), (i.label = 13))
                case 13:
                  i.label = 14
                case 14:
                  return [2]
              }
            })
          })
        }),
        Object.defineProperty(t.prototype, "sdk", {
          get: function () {
            return this._yasdk
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype._determinateLocale = function () {
          var e,
            t,
            n = "en_US",
            i =
              null === (t = null === (e = this._yasdk) || void 0 === e ? void 0 : e.environment) ||
              void 0 === t
                ? void 0
                : t.i18n
          if (i) {
            var r = i.lang,
              o = i.tld
            switch (((this._tld = o || this._tld), r)) {
              case "ru":
              case "be":
              case "kk":
              case "uk":
              case "uz":
                n = "ru_RU"
                break
              case "tr":
                n = "tr_TR"
                break
              case "es":
                n = "es_ES"
                break
              case "pt":
                n = "pt_BR"
                break
              case "hi":
                n = "hi_IN"
                break
              case "ar":
                n = "ar_AR"
                break
              case "ja":
                n = "ja_JP"
                break
              case "fr":
                n = "fr_FR"
                break
              case "id":
                n = "id_ID"
                break
              case "de":
                n = "de_DE"
                break
              case "it":
                n = "it_IT"
                break
              case "zh":
                n = "zh_CN"
            }
          }
          return n
        }),
        Object.defineProperty(t.prototype, "locale", {
          get: function () {
            return this._locale
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "tld", {
          get: function () {
            return this._tld
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.switchGame = function (e, t) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              return (window.open("//yandex.".concat(this.tld, "/games/app/").concat(e)), [2])
            })
          })
        }),
        i.__decorate(
          [(0, l.inject)(a.TypesApp.pageModel), i.__metadata("design:type", s.PageModel)],
          t.prototype,
          "pageModel",
          void 0,
        ),
        i.__decorate(
          [(0, l.inject)(a.TypesSocial.leaderboardGlobal), i.__metadata("design:type", Object)],
          t.prototype,
          "_leaderboardGlobal",
          void 0,
        ),
        i.__decorate(
          [(0, l.inject)(a.TypesSocial.leaderboardContext), i.__metadata("design:type", Object)],
          t.prototype,
          "_leaderboardContext",
          void 0,
        ),
        (t = i.__decorate([(0, l.injectable)()], t))
      )
    })(s.SocialModelBase)
  t.SocialModelYandex = c
}
