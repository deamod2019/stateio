/**
 * Webpack Module #70055
 * @exports LevelRestartAfterYandexLoginAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.LevelRestartAfterYandexLoginAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.needToShowAD = function () {
          return false
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(99629) /* 99629_LevelStartActionSIO */.LevelStartActionSIO)
  t.LevelRestartAfterYandexLoginAction = o
}
