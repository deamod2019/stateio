/**
 * Webpack Module #44046
 * @exports StartScreenAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.StartScreenAction = void 0))
  var i = n(70655),
    r = n(86700),
    o = n(86178),
    a = n(44656),
    s = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return (
                a.di.isBound(o.TypesUI.screen.HOME)
                  ? this.dispatch(o.TypesUI.events.SCREEN_CHANGED, { id: o.TypesUI.screen.HOME })
                  : this.dispatch(o.TypesUI.events.SCREEN_CHANGED, {
                      id: o.TypesUI.screen.GAMEPLAY,
                    }),
                [2]
              )
            })
          })
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(a.Action)
  t.StartScreenAction = s
}
