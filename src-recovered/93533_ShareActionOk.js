/**
 * Webpack Module #93533
 * @exports ShareActionOk
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ShareActionOk = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(86178),
    a = n(48616),
    s = n(86700),
    u = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, void 0, Promise, function () {
            var e
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    (e = {
                      media: [
                        {
                          type: "text",
                          text: "Никто не может победить ".concat(
                            this.social.me.name,
                            " в битве за территории",
                          ),
                        },
                        { type: "app-ref", appId: 512000948950 },
                      ],
                    }),
                    [4, this.social.share(e)]
                  )
                case 1:
                  return (t.sent(), [2])
              }
            })
          })
        }),
        i.__decorate(
          [
            (0, s.inject)(o.TypesSocial.model),
            i.__metadata(
              "design:type",
              "function" == typeof (n = void 0 !== a.ISocial && a.ISocial) ? n : Object,
            ),
          ],
          t.prototype,
          "social",
          void 0,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(r.Action)
  t.ShareActionOk = u
}
