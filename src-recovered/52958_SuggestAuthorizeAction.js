/**
 * Webpack Module #52958
 * @exports SuggestAuthorizeAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.SuggestAuthorizeAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(86700),
    s = n(86178),
    u = n(30107),
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, void 0, Promise, function () {
            var e, t
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    !1,
                    (e = function (e) {}),
                    (t = new Promise(function (t) {
                      e = t
                    })),
                    this.dispatch(s.TypesUI.events.POPUP, {
                      id: u.PopupType.SUGGEST_LOGIN,
                      props: { loginResolve: e },
                    }),
                    [4, t]
                  )
                case 1:
                  return [2, n.sent()]
              }
            })
          })
        }),
        i.__decorate(
          [
            (0, a.inject)(o.TypesCore.dispatcher),
            i.__metadata(
              "design:type",
              "function" == typeof (n = void 0 !== r.EventDispatcher && r.EventDispatcher)
                ? n
                : Object,
            ),
          ],
          t.prototype,
          "dispatcher",
          void 0,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(r.Action)
  t.SuggestAuthorizeAction = l
}
