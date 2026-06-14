/**
 * Webpack Module #83042
 * @exports LevelRestartActionSIO
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.LevelRestartActionSIO = void 0))
  var i = n(70655),
    r = n(86178),
    o = n(98931),
    a = n(83847),
    s = n(94572),
    u = i.__importDefault(n(69185)),
    l = n(95781),
    c = n(86700),
    d = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, o, d
      return (
        i.__extends(t, e),
        (t.prototype.launch = function (t) {
          return i.__awaiter(this, void 0, Promise, function () {
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
              "function" == typeof (n = void 0 !== u.default && u.default) ? n : Object,
            ),
          ],
          t.prototype,
          "root",
          void 0,
        ),
        i.__decorate(
          [
            (0, c.inject)(l.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (o = void 0 !== s.GameModel && s.GameModel) ? o : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        i.__decorate(
          [
            (0, c.inject)(l.TypesGame.inputManager),
            i.__metadata(
              "design:type",
              "function" == typeof (d = void 0 !== a.InputManager && a.InputManager) ? d : Object,
            ),
          ],
          t.prototype,
          "inputManager",
          void 0,
        ),
        (t = i.__decorate([(0, c.injectable)()], t))
      )
    })(o.LevelRestartAction)
  t.LevelRestartActionSIO = d
}
