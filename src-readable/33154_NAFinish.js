/**
 * Webpack Module #33154
 * @exports NAFinish
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.NAFinish = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(78346) /* 78346__mod */,
    o = n(86700) /* 86700_MetadataReader */,
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
          return (null === (e = this.data) || undefined === e ? undefined : e.isWon)
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
