/**
 * Webpack Module #12079
 * @exports StageEndAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.StageEndAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(98931),
    s = n(83430),
    u = n(94572),
    l = n(95781),
    c = n(30107),
    d = n(86700),
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
            void 0 === e && (e = !1),
            i.__awaiter(this, void 0, void 0, function () {
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
                        void 0 === t
                          ? void 0
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
                      void 0 === n
                        ? void 0
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
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    null === (e = r.di.get(l.TypesGame.actions.winPopup)) || void 0 === e
                      ? void 0
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
                      null === (t = r.di.get(l.TypesGame.actions.giftPopup)) || void 0 === t
                        ? void 0
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
            (0, d.inject)(o.TypesFlow.LevelNext),
            i.__metadata(
              "design:type",
              "function" == typeof (a = void 0 !== r.Action && r.Action) ? a : Object,
            ),
          ],
          t.prototype,
          "levelNext",
          void 0,
        ),
        (t = i.__decorate([(0, d.injectable)()], t))
      )
    })(a.SocialFlowAction)
  t.StageEndAction = h
}
