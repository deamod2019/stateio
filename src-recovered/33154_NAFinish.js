/**
 * Webpack Module #33154
 * @exports NAFinish
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.NAFinish = void 0))
  var i = n(70655),
    r = n(78346),
    o = n(86700),
    a = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.strategy = "IMMEDIATE"), (t.template = "play_won"), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.getI18NKey = function () {
          var e,
            t = this.social.me.scoreSession
          return (null === (e = this.data) || void 0 === e ? void 0 : e.isWon)
            ? t > 0
              ? "play_won_0"
              : "play_won_1"
            : t > 0
              ? "play_won_2"
              : "play_won_3"
        }),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(r.NotificationAction)
  t.NAFinish = a
}
