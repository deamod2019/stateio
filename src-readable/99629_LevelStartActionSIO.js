/**
 * Webpack Module #99629
 * @exports LevelStartActionSIO
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LevelStartActionSIO = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86178) /* 86178__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(98931) /* 98931__mod */,
    s = n(83847) /* 83847_InputManager */,
    u = n(94572) /* 94572_GameModel */,
    l = n(65370) /* 65370_GameState */,
    c = i.__importDefault(n(69185) /* 69185__mod */),
    d = n(95781) /* 95781_TypesGame */,
    h = n(86700) /* 86700_MetadataReader */,
    p = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, a, p
      return (
        i.__extends(t, e),
        (t.prototype.beforeLaunch = function () {
          var t
          return i.__awaiter(this, undefined, Promise, function () {
            var n,
              r,
              a = this
            return i.__generator(this, function (s) {
              switch (s.label) {
                case 0:
                  return [4, this.model.disposeCurrentLevel()]
                case 1:
                  return (s.sent(), this.data ? [3, 3] : [4, this._contextChangePromise])
                case 2:
                  ;(s.sent(), (this.contextData = this.model.getContextData()), (s.label = 3))
                case 3:
                  return (n =
                    this.data ||
                    (null === (t = this.contextData) || undefined === t ? undefined : t.l) ||
                    u.GameModel.LEVELS_PREDEFINED[0]) && this.model.levels[n]
                    ? [4, e.prototype.beforeLaunch.call(this)]
                    : [3, 5]
                case 4:
                  return (s.sent(), [3, 7])
                case 5:
                  return (
                    this.root.overlay.blur(),
                    this.root.spinner.show(),
                    (this.model.state = l.GameState.LOADING),
                    (r = function () {
                      return i.__awaiter(a, undefined, undefined, function () {
                        var e
                        return i.__generator(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return (
                                (e = this),
                                [4, o.di.get(d.TypesGame.actions.loadLevel).run(n)]
                              )
                            case 1:
                              return ((e.levelData = t.sent()), [2])
                          }
                        })
                      })
                    }),
                    [4, Promise.all([r(), e.prototype.beforeLaunch.call(this)])]
                  )
                case 6:
                  ;(s.sent(), (s.label = 7))
                case 7:
                  return [2]
              }
            })
          })
        }),
        (t.prototype.launch = function (t) {
          var n
          return i.__awaiter(this, undefined, Promise, function () {
            var a, s, u
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    this.root.progressBar.hide(),
                    this.root.spinner.hide(),
                    this.root.overlay.unblur(),
                    (a = o.di.get(d.TypesGame.views.fieldClass)),
                    o.di.bind(d.TypesGame.views.fieldInstance).toConstantValue(a),
                    this.root.addChild(a),
                    ((s =
                      this.model.levels[t] ||
                      o.di.get(d.TypesGame.levelModel).init(this.levelData)).stageLevel =
                      (null === (n = this.contextData) || undefined === n ? undefined : n.c) || 0),
                    this.model.setCurrentContinent(s),
                    this.social.inSolo
                      ? [3, 2]
                      : [
                          4,
                          null == (u = (0, o.lazyGet)(r.TypesNotification.start))
                            ? undefined
                            : u.run(),
                        ]
                  )
                case 1:
                  ;(i.sent(), (i.label = 2))
                case 2:
                  return [4, e.prototype.launch.call(this)]
                case 3:
                  return (
                    i.sent(),
                    this.inputManager.start(),
                    this.social.inSolo
                      ? (this.model.state = l.GameState.LOBBY)
                      : this.model.startStage(),
                    [2]
                  )
              }
            })
          })
        }),
        (t.prototype.sendPush = function (e, t) {}),
        i.__decorate(
          [
            (0, h.inject)(r.Types2D.rootView),
            i.__metadata(
              "design:type",
              "function" == typeof (n = undefined !== c.default && c.default) ? n : Object,
            ),
          ],
          t.prototype,
          "root",
          undefined,
        ),
        i.__decorate(
          [
            (0, h.inject)(d.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (a = undefined !== u.GameModel && u.GameModel) ? a : Object,
            ),
          ],
          t.prototype,
          "model",
          undefined,
        ),
        i.__decorate(
          [
            (0, h.inject)(d.TypesGame.inputManager),
            i.__metadata(
              "design:type",
              "function" == typeof (p = undefined !== s.InputManager && s.InputManager) ? p : Object,
            ),
          ],
          t.prototype,
          "inputManager",
          undefined,
        ),
        (t = i.__decorate([(0, h.injectable)()], t))
      )
    })(a.LevelStartAction)
  t.LevelStartActionSIO = p
}
