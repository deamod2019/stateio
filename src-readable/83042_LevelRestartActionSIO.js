/**
 * Webpack Module #83042
 * @exports LevelRestartActionSIO
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.LevelRestartActionSIO = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86178) /* 86178__mod */,
    o = n(98931) /* 98931__mod */,
    a = n(83847) /* 83847_InputManager */,
    s = n(94572) /* 94572_GameModel */,
    u = i.__importDefault(n(69185) /* 69185__mod */),
    l = n(95781) /* 95781_TypesGame */,
    c = n(86700) /* 86700_MetadataReader */,
    d = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, o, d
      return (
        i.__extends(t, e),
        (t.prototype.launch = function (t) {
          return i.__awaiter(this, undefined, Promise, function () {
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    this.root.progressBar.hide(),
                    this.root.overlay.unblur(),
                    this.model.restartLevel(),
                    [4, e.prototype.launch.call(this)]
                  )
                case 1:
                  return (t.sent(), [2])
              }
            })
          })
        }),
        i.__decorate(
          [
            (0, c.inject)(r.Types2D.rootView),
            i.__metadata(
              "design:type",
              "function" == typeof (n = undefined !== u.default && u.default) ? n : Object,
            ),
          ],
          t.prototype,
          "root",
          undefined,
        ),
        i.__decorate(
          [
            (0, c.inject)(l.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (o = undefined !== s.GameModel && s.GameModel) ? o : Object,
            ),
          ],
          t.prototype,
          "model",
          undefined,
        ),
        i.__decorate(
          [
            (0, c.inject)(l.TypesGame.inputManager),
            i.__metadata(
              "design:type",
              "function" == typeof (d = undefined !== a.InputManager && a.InputManager) ? d : Object,
            ),
          ],
          t.prototype,
          "inputManager",
          undefined,
        ),
        (t = i.__decorate([(0, c.injectable)()], t))
      )
    })(o.LevelRestartAction)
  t.LevelRestartActionSIO = d
}
