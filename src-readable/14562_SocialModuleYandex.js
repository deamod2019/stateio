/**
 * Webpack Module #14562
 * @exports SocialModuleYandex
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.SocialModuleYandex = undefined))
  var i = n(86178) /* 86178__mod */,
    r = n(48616) /* 48616__mod */,
    o = n(86700) /* 86700_MetadataReader */,
    a = n(90050) /* 90050_UserDataYandex */,
    s = n(97954) /* 97954_LeaderboardGlobalYandex */,
    u = n(61767) /* 61767_PaymentsModelYandex */,
    l = n(63895) /* 63895_SocialModelYandex */,
    c = n(59503) /* 59503_UserYandex */
  t.SocialModuleYandex = new o.ContainerModule(function (e) {
    var t
    ;(e(i.TypesSocial.model).to(l.SocialModelYandex).inSingletonScope(),
      e(i.TypesSocial.cookie).to(a.UserDataYandex).inSingletonScope(),
      e(i.TypesSocial.payments).to(u.PaymentsModelYandex),
      e(i.TypesSocial.user).to(c.UserYandex),
      e(i.TypesSocial.userScore).to(r.UserScore),
      e(i.TypesSocial.leaderboardGlobal).to(s.LeaderboardGlobalYandex).inSingletonScope(),
      e(i.TypesSocial.leaderboardContext).to(r.LeaderboardGlobalExternal).inSingletonScope(),
      e(i.TypesSocial.dummyUser).toDynamicValue(function (e) {
        if (!t) {
          t = e.container.get(i.TypesSocial.user)
          var n = URL.createObjectURL(
            new Blob(
              [
                '\n            <svg xmlns="http://www.w3.org/2000/svg" width="320" height="320">\n                <path d="M0 0h320v320H0V0z" fill="#fff"/>\n                <path d="M320 0H0v320h320V0zM160 66.7c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 189.3c-33.4 0-62.7-17.1-80-42.9.3-26.5 53.4-41.1 80-41.1s79.6 14.6 80 41.1c-17.3 25.8-46.6 42.9-80 42.9z"/>\n            </svg>',
              ],
              { type: "image/svg+xml" },
            ),
          )
          t.init({
            getUniqueID: function () {
              return "unknown"
            },
            getPhoto: function () {
              return n
            },
          })
        }
        return t
      }))
  })
}
