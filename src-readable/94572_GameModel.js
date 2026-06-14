/**
 * Webpack Module #94572
 * @exports GameModel, LEVELS_PREDEFINED, DEFAULT_CTX_DATA
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.GameModel = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(84194) /* 84194__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(86178) /* 86178__mod */,
    s = n(48616) /* 48616__mod */,
    u = n(83430) /* 83430_InversifyContext */,
    l = n(44365) /* 44365_SIOConstants */,
    c = n(62260) /* 62260_ActiveBuildingsQuery */,
    d = n(9964) /* 9964_AllBuildingsQuery */,
    h = n(72063) /* 72063_BotsSystem */,
    p = n(99806) /* 99806_FighterMovementSystem */,
    f = n(93972) /* 93972_GamePlaySystem */,
    _ = n(11073) /* 11073_InitStageSystem */,
    g = n(47572) /* 47572_InputSystem */,
    m = n(71554) /* 71554_LevelEndSystem */,
    v = n(57620) /* 57620_PathsGenerationSystem */,
    y = n(28300) /* 28300_PopulationSystem */,
    C = n(65370) /* 65370_GameState */,
    b = n(36356) /* 36356_MetaModel */,
    w = n(95781) /* 95781_TypesGame */,
    x = n(30107) /* 30107_PopupType */,
    T = n(86700) /* 86700_MetadataReader */,
    S = n(75111) /* 75111__mod */,
    L = n(10754) /* 10754_TutorialSystem */,
    E = n(47283) /* 47283_GameEvents */,
    A = n(36596) /* 36596_PlayerType */,
    I = n(56792) /* 56792_CookieModel */,
    M = n(6538) /* 6538_SIDES */,
    P = n(60079) /* 60079_SkinManager */,
    O = n(44802) /* 44802_UpdateSkinsSystem */,
    R = n(196) /* 196_DestroyFieldAction */,
    k = function (e) {
      var t
      ;(undefined === e && (e = false),
        null === (t = (0, o.lazyGet)(w.TypesGame.actions.endStage)) || undefined === t || t.run(e))
    },
    N = (function (e) {
      function t() {
        var t = e.call(this) || this
        return (
          (t.levels = {}),
          (t.engine = new S.Engine()),
          (t._engineTick = function (e) {
            return (undefined === e && (e = 0), t.engine.update(e))
          }),
          (t.screenshots = []),
          (t.gameplaySystems = [
            new y.PopulationSystem(),
            new h.BotsSystem(),
            new f.GamePlaySystem(),
            new g.InputSystem(),
            new p.FighterMovementSystem(),
          ]),
          (t.paused = false),
          t
        )
      }
      var n, N, D, B, F
      return (
        i.__extends(t, e),
        (n = t),
        Object.defineProperty(t.prototype, "currentContinent", {
          get: function () {
            return this._currentContinent
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.offerX3 = function () {
          return this.currentContinent.stageLevel % 2 == 0
        }),
        (t.prototype.setCurrentContinent = function (e, t) {
          ;(undefined === t && (t = 0),
            this._currentContinent !== e &&
              ((this._currentContinent = e),
              this.engine.addQuery(c.ActiveBuildingsQuery),
              this.engine.addQuery(d.AllBuildingsQuery),
              this.engine.addSystem(new _.InitStageSystem(e, e.stageLevel))))
        }),
        (t.prototype.startStage = function (e) {
          ;(undefined === e && (e = this._currentContinent),
            this.screenshots.splice(0, Number.MAX_SAFE_INTEGER),
            e.time.start(),
            this.engine.addSystem(new _.InitStageSystem(e, e.stageLevel)),
            this.engine.addSystem(new v.PathsGenerationSystem()),
            (this.state = C.GameState.GAMEPLAY))
        }),
        (t.prototype.gotoNextLevelStage = function () {
          return this._state !== C.GameState.WIN_CONTINENT || (this.engine.clear(), false)
        }),
        (t.prototype.endStage = function (e, t) {
          if ((undefined === e && (e = false), undefined === t && (t = false), e)) {
            if (t)
              return (
                (this.currentContinent.stageLevel = this.currentContinent.data.stages.length),
                (this.cookie.currentStage = 0),
                void (this.state = C.GameState.WIN_CONTINENT)
              )
            ;(this.currentContinent.captureStage(),
              this.incrementContextScore(),
              (this.cookie.currentStage = this.currentContinent.stageLevel),
              this.currentContinent.isFinished
                ? ((this.cookie.currentStage = 0), (this.state = C.GameState.WIN_CONTINENT))
                : (this.state = C.GameState.WIN_STAGE))
          } else this.state = C.GameState.LOOSE
        }),
        (t.prototype.restartLevel = function () {
          ;(this.currentContinent.buildings.clear(),
            this.engine.removeAllEntities(),
            this.dispatch(E.GameEvents.RESTART_LEVEL))
        }),
        Object.defineProperty(t.prototype, "paused", {
          get: function () {
            return this._paused
          },
          set: function (e) {
            var t, n
            this._paused !== e &&
              ((this._paused = e),
              this._paused
                ? (null === (t = this._currentContinent) || undefined === t || t.time.pause(),
                  M.Ticker.shared.remove(this._engineTick))
                : (null === (n = this._currentContinent) || undefined === n || n.time.resume(),
                  M.Ticker.shared.add(this._engineTick)))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "state", {
          get: function () {
            return this._state
          },
          set: function (e) {
            this._state !== e && ((this._state = e), this.onStateChanged())
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.createFieldScreenShot = function () {
          return i.__awaiter(this, undefined, Promise, function () {
            var e, t, n
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (e = o.di.get(w.TypesGame.views.fieldInstance)),
                    [
                      4,
                      null == (t = (0, o.lazyGet)(a.Types2D.screenShotAction))
                        ? undefined
                        : t.run({ image: e.map }),
                    ]
                  )
                case 1:
                  if ((n = i.sent())) {
                    for (this.screenshots.push(n); this.screenshots.length > 2; )
                      this.screenshots.shift()
                    return [2, n]
                  }
                  return (r.log.warn("Screenshot creation failed"), [2])
              }
            })
          })
        }),
        (t.prototype.exitTheGame = function () {
          var e = this
          ;((this.paused = true),
            this.dispatch(u.UIEvents.POPUP, {
              id: x.PopupType.CONFIRM,
              props: {
                onConfirm: function (t) {
                  return (
                    undefined === t && (t = false),
                    i.__awaiter(e, undefined, undefined, function () {
                      return i.__generator(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return (
                              this.cookie.syncTime(),
                              t
                                ? this.social.inSolo
                                  ? [3, 3]
                                  : [4, this.social.playSolo()]
                                : [3, 4]
                            )
                          case 1:
                            return (e.sent(), [4, o.di.get(a.TypesFlow.LevelStart).run()])
                          case 2:
                            ;(e.sent(), (e.label = 3))
                          case 3:
                            ;((this.state = C.GameState.LOBBY), (e.label = 4))
                          case 4:
                            return (
                              (this.paused = false),
                              this.dispatch(u.UIEvents.POPUP, { id: null }),
                              [2]
                            )
                        }
                      })
                    })
                  )
                },
              },
            }))
        }),
        (t.prototype.cancelTutorial = function () {
          var e = this.engine.getSystem(L.TutorialSystem)
          e && this.engine.removeSystem(e)
        }),
        (t.prototype.onStateChanged = function () {
          var e = this,
            t = function () {
              ;(e.dispatch(E.GameEvents.AIM_REMOVE),
                e.gameplaySystems.forEach(function (t) {
                  return e.engine.removeSystem(t)
                }),
                e.engine.addSystem(new m.LevelEndSystem()),
                e.cancelTutorial())
            }
          switch (this._state) {
            case C.GameState.LOOSE:
              ;(t(), k(false))
              break
            case C.GameState.WIN_STAGE:
              ;(t(), this.createFieldScreenShot(), k(true))
              break
            case C.GameState.WIN_CONTINENT:
              ;(t(),
                this.createFieldScreenShot(),
                (function (e) {
                  var t
                  ;(undefined === e && (e = false),
                    null === (t = (0, o.lazyGet)(a.TypesFlow.LevelEnd)) || undefined === t || t.run(e))
                })(true))
              break
            case C.GameState.LOBBY:
              ;(t(), this.dispatch(u.UIEvents.SCREEN_CHANGED, { id: a.TypesUI.screen.HOME }))
              break
            case C.GameState.GAMEPLAY:
              ;(this.gameplaySystems.forEach(function (t) {
                return e.engine.addSystem(t)
              }),
                this.engine.addSystem(new L.TutorialSystem()),
                this.dispatch(u.UIEvents.SCREEN_CHANGED, {
                  id: a.TypesUI.screen.GAMEPLAY,
                  props: { participants: this.getAssociatedUsers() },
                }))
          }
          ;(r.log.debug("GameState ->", C.GameState[this._state]),
            this.dispatch(E.GameEvents.STATE_CHANGED, this._state))
        }),
        Object.defineProperty(t.prototype, "absoluteLevelNum", {
          get: function () {
            return this.cookie.absoluteLevelNum
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.getAssociatedUsers = function (e) {
          var t = this
          undefined === e && (e = this.currentContinent.stageLevel)
          var n = this.social,
            r = new Map(),
            o = n.inSolo ? [] : n.contextPlayers.slice(0)
          o.sort(function (e, t) {
            return e === n.me ? -1 : 0
          })
          var a = new Set()
          this.currentContinent.parsed.forEach(function (t) {
            t.stage === e && a.add(t.startOwner)
          })
          for (
            var s = Array.from(a).sort(function (e, t) {
                return e - t
              }),
              u = 0;
            u < s.length;
            u++
          ) {
            var l = null
            switch (s[u]) {
              case A.PlayerType.First:
                l = o.shift()
                break
              case A.PlayerType.Neutral:
                break
              default:
                l = o.pop()
            }
            l && r.set(s[u], l)
          }
          return Array.from(r, function (e) {
            var n = i.__read(e, 2),
              r = n[0]
            return { owner: r, data: n[1], color: t.skinManager.getColorBy(r)[0] }
          })
        }),
        (t.prototype.goToLobby = function () {
          ;((this.state = C.GameState.LOBBY), this.onStateChanged())
        }),
        (t.prototype.getOfflineEarning = function () {
          var e = new Date(this.cookie.timeDiff),
            t = this.meta.getOfflineEarning(),
            n = false,
            i = 0,
            r = this.cookie.timeDiff / 1e3
          if (r > 60 * l.SIOConstants.MIN_OFFLINE_EARNINGS_PERIOD_IN_MIN) {
            var o = (t / 60 / 60) * r
            o >= 1 && ((n = true), (i = Math.round(o)))
          }
          return { isRewarded: n, reward: i, date: e }
        }),
        (t.prototype.getLevelNameByAbsoluteNum = function (e) {
          return n.LEVELS_PREDEFINED[Math.floor(e % n.LEVELS_PREDEFINED.length)]
        }),
        (t.prototype.onShopScreenChanged = function () {
          ;(this.skinManager.updateSkins(), this.engine.addSystem(new O.UpdateSkinsSystem()))
        }),
        (t.prototype.disposeCurrentLevel = function () {
          var e
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, o.di.get(R.DestroyFieldAction).run()]
                case 1:
                  return (
                    t.sent(),
                    null === (e = this._currentContinent) || undefined === e || e.dispose(),
                    (this._currentContinent = null),
                    this.engine.clear(),
                    o.di.get(w.TypesGame.spritesPool).purge(),
                    [2]
                  )
              }
            })
          })
        }),
        (t.prototype.incrementContextScore = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            var e
            return i.__generator(this, function (t) {
              return (
                this.social.context_id &&
                  !this.social.inSolo &&
                  (null == (e = (0, o.lazyGet)(a.TypesSocial.leaderboardContext)) ||
                    e.submit(this.social.me.scoreContext + 1, this.currentContinent.getHistory())),
                [2]
              )
            })
          })
        }),
        (t.prototype.getContextData = function () {
          if (this.social.inSolo)
            return {
              l: this.getLevelNameByAbsoluteNum(this.absoluteLevelNum - 1),
              c: this.cookie.currentStage,
              s: [],
            }
          var e, t
          if (this.social.context_id) {
            var i = this.social.me.scores.getEntry(s.ScoreType.CONTEXT),
              o = null == i ? undefined : i.getExtraData()
            if (o) {
              var a = JSON.parse(o)
              if (a) {
                if ((a.c || 0) >= (a.s.length || Number.MAX_SAFE_INTEGER)) {
                  var u = a.l || r.Random.from(n.LEVELS_PREDEFINED),
                    l = n.LEVELS_PREDEFINED.indexOf(
                      (undefined === (t = "svg") && (t = "svg"),
                      (e = u).endsWith(".".concat(t)) ? e : "".concat(e, ".").concat(t)),
                    )
                  ;(-1 == l && (l = 0),
                    ++l >= n.LEVELS_PREDEFINED.length && (l = 0),
                    (a.l = n.LEVELS_PREDEFINED[l]),
                    (a.s = []),
                    (a.c = 0),
                    r.log.debug("new context data generated", a))
                }
                return a
              }
            }
          }
          return n.DEFAULT_CTX_DATA
        }),
        (t.LEVELS_PREDEFINED = [
          "United-States.svg",
          "China.svg",
          "Africa.svg",
          "UK.svg",
          "EuropeanUnion.svg",
          "Italy.svg",
          "Arabic.svg",
          "Central-Asia.svg",
          "Japan.svg",
          "China,Russia,Korea,Japan.svg",
          "Korea.svg",
          "China-Oceania-Australia.svg",
          "United-States2.svg",
        ].filter(function (e, t, n) {
          return n.indexOf(e) === t
        })),
        (t.DEFAULT_CTX_DATA = { l: n.LEVELS_PREDEFINED[0], c: 0, s: [] }),
        i.__decorate(
          [
            (0, o.lazyInject)(b.MetaModel),
            i.__metadata(
              "design:type",
              "function" == typeof (N = undefined !== b.MetaModel && b.MetaModel) ? N : Object,
            ),
          ],
          t.prototype,
          "meta",
          undefined,
        ),
        i.__decorate(
          [
            (0, o.lazyInject)(w.TypesGame.cookieModel),
            i.__metadata(
              "design:type",
              "function" == typeof (D = undefined !== I.CookieModel && I.CookieModel) ? D : Object,
            ),
          ],
          t.prototype,
          "cookie",
          undefined,
        ),
        i.__decorate(
          [
            (0, o.lazyInject)(a.TypesSocial.model),
            i.__metadata(
              "design:type",
              "function" == typeof (B = undefined !== s.ISocial && s.ISocial) ? B : Object,
            ),
          ],
          t.prototype,
          "social",
          undefined,
        ),
        i.__decorate(
          [
            (0, o.lazyInject)(w.TypesGame.skinManager),
            i.__metadata(
              "design:type",
              "function" == typeof (F = undefined !== P.SkinManager && P.SkinManager) ? F : Object,
            ),
          ],
          t.prototype,
          "skinManager",
          undefined,
        ),
        (t = n = i.__decorate([(0, T.injectable)(), i.__metadata("design:paramtypes", [])], t))
      )
    })(o.GlobalEventProvider)
  t.GameModel = N
}
