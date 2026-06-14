/**
 * Webpack Module #93533
 * @exports ShareActionOk
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ShareActionOk = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(48616) /* 48616__mod */,
    s = n(86700) /* 86700_MetadataReader */,
    u = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, undefined, Promise, function () {
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
              "function" == typeof (n = undefined !== a.ISocial && a.ISocial) ? n : Object,
            ),
          ],
          t.prototype,
          "social",
          undefined,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(r.Action)
  t.ShareActionOk = u
}
