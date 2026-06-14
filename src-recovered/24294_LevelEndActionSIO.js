/**
 * Webpack Module #24294
 * @exports LevelEndActionSIO
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LevelEndActionSIO = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(98931),
    s = n(83430),
    u = n(94572),
    l = n(95781),
    c = n(30107),
    d = n(86700),
    h = n(158),
    p = n(65370),
    f = n(44365),
    _ = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, a, _
      return (
        i.__extends(t, e),
        (t.prototype.launch = function (e) {
          var t
          return (
            void 0 === e && (e = !1),
            i.__awaiter(this, void 0, void 0, function () {
              var n, o
              return i.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (n = this.model),
                      (o = n.meta),
                      n.cookie.absoluteTryNum++,
                      f.SIOConstants.REWARD_AD_PLAYED.delete("boosters"),
                      [
                        4,
                        null === (t = r.di.get(l.TypesGame.actions.tournamentPostScore)) ||
                        void 0 === t
                          ? void 0
                          : t.run(),
                      ]
                    )
                  case 1:
                    return (
                      i.sent(),
                      e
                        ? (this.model.cookie.absoluteLevelNum++,
                          this.social.inSolo ? [4, this.popupWin()] : [3, 6])
                        : [3, 13]
                    )
                  case 2:
                    return (i.sent(), [4, this.popupLevelComplete()])
                  case 3:
                    return (i.sent(), [4, this.popupGift()])
                  case 4:
                    return (i.sent(), [4, this.levelNext.run()])
                  case 5:
                    return (i.sent(), (this.model.state = p.GameState.LOBBY), [3, 12])
                  case 6:
                    return [4, this.popupBattleResults()]
                  case 7:
                    return (i.sent(), [4, this.popupLevelComplete()])
                  case 8:
                    return (i.sent(), [4, this.updateTournament()])
                  case 9:
                    return (i.sent(), [4, this.social.playSolo()])
                  case 10:
                    return (i.sent(), [4, this.levelNext.run()])
                  case 11:
                    ;(i.sent(), (this.model.state = p.GameState.LOBBY), (i.label = 12))
                  case 12:
                    return [3, 14]
                  case 13:
                    ;(this.dispatch(s.UIEvents.POPUP, {
                      id: c.PopupType.LOSE,
                      props: { coins: o.getReward() * o.loseMultiplier },
                    }),
                      (i.label = 14))
                  case 14:
                    return (this.assets.purge(), [2])
                }
              })
            })
          )
        }),
        (t.prototype.popupGift = function () {
          var e
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    null === (e = r.di.get(l.TypesGame.actions.giftPopup)) || void 0 === e
                      ? void 0
                      : e.run(),
                  ]
                case 1:
                  return (t.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.updateTournament = function () {
          return i.__awaiter(this, void 0, Promise, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, r.di.get(l.TypesGame.actions.tournamentReShare).run()]
                case 1:
                  return [2, e.sent()]
              }
            })
          })
        }),
        (t.prototype.createTournament = function () {
          return i.__awaiter(this, void 0, Promise, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, r.di.get(l.TypesGame.actions.tournamentCreate).run()]
                case 1:
                  return [2, e.sent()]
              }
            })
          })
        }),
        (t.prototype.popupWin = function () {
          var e
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    null === (e = r.di.get(l.TypesGame.actions.winPopup)) || void 0 === e
                      ? void 0
                      : e.run({ id: c.PopupType.WIN_LEVEL }),
                  ]
                case 1:
                  return (t.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.popupLevelComplete = function () {
          var e
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    null === (e = r.di.get(l.TypesGame.actions.levelCompletePopup)) || void 0 === e
                      ? void 0
                      : e.run(),
                  ]
                case 1:
                  return (t.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.popupBattleResults = function () {
          var e
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    null === (e = r.di.get(l.TypesGame.actions.battleResultsPopup)) || void 0 === e
                      ? void 0
                      : e.run(this.data),
                  ]
                case 1:
                  return (t.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.submitScore = function () {
          var e
          return i.__awaiter(this, void 0, Promise, function () {
            var t
            return i.__generator(this, function (n) {
              return (
                (t = this.model.currentContinent),
                (this.social.me.scoreSession = t.getTotalScore()),
                this.social.inSolo &&
                  (null === (e = this.leaderboardGlobal) ||
                    void 0 === e ||
                    e.submit(this.model.absoluteLevelNum, { continent: t.data.id })),
                [2]
              )
            })
          })
        }),
        (t.prototype.needToShowAD = function () {
          return !1
        }),
        i.__decorate(
          [
            (0, d.inject)(l.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (n = void 0 !== u.GameModel && u.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        i.__decorate(
          [
            (0, d.inject)(l.TypesGame.spritesPool),
            i.__metadata(
              "design:type",
              "function" == typeof (a = void 0 !== h.SpritesPool && h.SpritesPool) ? a : Object,
            ),
          ],
          t.prototype,
          "assets",
          void 0,
        ),
        i.__decorate(
          [
            (0, d.inject)(o.TypesFlow.LevelNext),
            i.__metadata(
              "design:type",
              "function" == typeof (_ = void 0 !== r.Action && r.Action) ? _ : Object,
            ),
          ],
          t.prototype,
          "levelNext",
          void 0,
        ),
        (t = i.__decorate([(0, d.injectable)()], t))
      )
    })(a.LevelEndAction)
  t.LevelEndActionSIO = _
}
