/**
 * Webpack Module #70055
 * @exports LevelRestartAfterYandexLoginAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.LevelRestartAfterYandexLoginAction = void 0))
  var i = n(70655),
    r = n(86700),
    o = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.needToShowAD = function () {
          return !1
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(99629).LevelStartActionSIO)
  t.LevelRestartAfterYandexLoginAction = o
}
