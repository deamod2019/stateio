/**
 * Webpack Module #24294
 * @exports LevelEndActionSIO
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LevelEndActionSIO = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(98931) /* 98931__mod */,
    s = n(83430) /* 83430_InversifyContext */,
    u = n(94572) /* 94572_GameModel */,
    l = n(95781) /* 95781_TypesGame */,
    c = n(30107) /* 30107_PopupType */,
    d = n(86700) /* 86700_MetadataReader */,
    h = n(158) /* 158_SpritesPool */,
    p = n(65370) /* 65370_GameState */,
    f = n(44365) /* 44365_SIOConstants */,
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
            undefined === e && (e = false),
            i.__awaiter(this, undefined, undefined, function () {
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
                        undefined === t
                          ? undefined
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
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    null === (e = r.di.get(l.TypesGame.actions.giftPopup)) || undefined === e
                      ? undefined
                      : e.run(),
                  ]
                case 1:
                  return (t.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.updateTournament = function () {
          return i.__awaiter(this, undefined, Promise, function () {
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
          return i.__awaiter(this, undefined, Promise, function () {
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
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    null === (e = r.di.get(l.TypesGame.actions.winPopup)) || undefined === e
                      ? undefined
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
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    null === (e = r.di.get(l.TypesGame.actions.levelCompletePopup)) || undefined === e
                      ? undefined
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
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    null === (e = r.di.get(l.TypesGame.actions.battleResultsPopup)) || undefined === e
                      ? undefined
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
          return i.__awaiter(this, undefined, Promise, function () {
            var t
            return i.__generator(this, function (n) {
              return (
                (t = this.model.currentContinent),
                (this.social.me.scoreSession = t.getTotalScore()),
                this.social.inSolo &&
                  (null === (e = this.leaderboardGlobal) ||
                    undefined === e ||
                    e.submit(this.model.absoluteLevelNum, { continent: t.data.id })),
                [2]
              )
            })
          })
        }),
        (t.prototype.needToShowAD = function () {
          return false
        }),
        i.__decorate(
          [
            (0, d.inject)(l.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (n = undefined !== u.GameModel && u.GameModel) ? n : Object,
            ),
          ],
          t.prototype,
          "model",
          undefined,
        ),
        i.__decorate(
          [
            (0, d.inject)(l.TypesGame.spritesPool),
            i.__metadata(
              "design:type",
              "function" == typeof (a = undefined !== h.SpritesPool && h.SpritesPool) ? a : Object,
            ),
          ],
          t.prototype,
          "assets",
          undefined,
        ),
        i.__decorate(
          [
            (0, d.inject)(o.TypesFlow.LevelNext),
            i.__metadata(
              "design:type",
              "function" == typeof (_ = undefined !== r.Action && r.Action) ? _ : Object,
            ),
          ],
          t.prototype,
          "levelNext",
          undefined,
        ),
        (t = i.__decorate([(0, d.injectable)()], t))
      )
    })(a.LevelEndAction)
  t.LevelEndActionSIO = _
}
