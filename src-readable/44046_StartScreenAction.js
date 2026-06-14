/**
 * Webpack Module #44046
 * @exports StartScreenAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.StartScreenAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = n(86178) /* 86178__mod */,
    a = n(44656) /* 44656__mod */,
    s = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, undefined, undefined, function () {
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
