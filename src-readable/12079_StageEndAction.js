/**
 * Webpack Module #12079
 * @exports StageEndAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.StageEndAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(98931) /* 98931__mod */,
    s = n(83430) /* 83430_InversifyContext */,
    u = n(94572) /* 94572_GameModel */,
    l = n(95781) /* 95781_TypesGame */,
    c = n(30107) /* 30107_PopupType */,
    d = n(86700) /* 86700_MetadataReader */,
    h = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, a
      return (
        i.__extends(t, e),
        (t.prototype.launch = function (e) {
          var t, n
          return (
            undefined === e && (e = false),
            i.__awaiter(this, undefined, undefined, function () {
              var o, a, u, d, h
              return i.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (o = this.model),
                      (a = o.meta),
                      (u = o.cookie),
                      (d = o.social),
                      (h = o.currentContinent),
                      u.absoluteTryNum++,
                      (this.social.me.scoreSession = Math.round(h.getTotalScore())),
                      [
                        4,
                        null === (t = r.di.get(l.TypesGame.actions.tournamentPostScore)) ||
                        undefined === t
                          ? undefined
                          : t.run(),
                      ]
                    )
                  case 1:
                    return (i.sent(), d.inSolo ? (e ? [4, this.winSolo()] : [3, 3]) : [3, 5])
                  case 2:
                    return (i.sent(), [3, 4])
                  case 3:
                    ;(this.dispatch(s.UIEvents.POPUP, {
                      id: c.PopupType.LOSE,
                      props: { coins: a.getReward() * a.loseMultiplier },
                    }),
                      (i.label = 4))
                  case 4:
                    return [3, 8]
                  case 5:
                    return [
                      4,
                      null === (n = r.di.get(l.TypesGame.actions.battleResultsPopup)) ||
                      undefined === n
                        ? undefined
                        : n.run(e),
                    ]
                  case 6:
                    return (i.sent(), [4, this.levelNext.run()])
                  case 7:
                    ;(i.sent(), (i.label = 8))
                  case 8:
                    return [2]
                }
              })
            })
          )
        }),
        (t.prototype.winSolo = function () {
          var e, t
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    null === (e = r.di.get(l.TypesGame.actions.winPopup)) || undefined === e
                      ? undefined
                      : e.run({
                          id: c.PopupType.WIN_STAGE,
                          props: { showRewardAd: this.model.offerX3() },
                        }),
                  ]
                case 1:
                  return (
                    n.sent(),
                    [
                      4,
                      null === (t = r.di.get(l.TypesGame.actions.giftPopup)) || undefined === t
                        ? undefined
                        : t.run(),
                    ]
                  )
                case 2:
                  return (n.sent(), [4, this.levelNext.run()])
                case 3:
                  return (n.sent(), [2])
              }
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
            (0, d.inject)(o.TypesFlow.LevelNext),
            i.__metadata(
              "design:type",
              "function" == typeof (a = undefined !== r.Action && r.Action) ? a : Object,
            ),
          ],
          t.prototype,
          "levelNext",
          undefined,
        ),
        (t = i.__decorate([(0, d.injectable)()], t))
      )
    })(a.SocialFlowAction)
  t.StageEndAction = h
}
