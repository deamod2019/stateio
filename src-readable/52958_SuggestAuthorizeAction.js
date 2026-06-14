/**
 * Webpack Module #52958
 * @exports SuggestAuthorizeAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.SuggestAuthorizeAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(86178) /* 86178__mod */,
    u = n(30107) /* 30107_PopupType */,
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, undefined, Promise, function () {
            var e, t
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    false,
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
              "function" == typeof (n = undefined !== r.EventDispatcher && r.EventDispatcher)
                ? n
                : Object,
            ),
          ],
          t.prototype,
          "dispatcher",
          undefined,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(r.Action)
  t.SuggestAuthorizeAction = l
}
