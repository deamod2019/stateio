/**
 * Restored source for Webpack Module #14562.
 *
 * Yandex social DI module. The binding topology mirrors the original module,
 * while leaderboard adapters are wired to restored classes.
 */
"use strict"

const { TypesSocial } = require("./CoreTypes")
const { ContainerModule } = require("./diRuntime")
const { SocialModelYandex } = require("./SocialModelYandex")
const { UserScore } = require("./UserScore")
const { UserDataYandex } = require("./UserDataYandex")
const { PaymentsModelYandex } = require("./PaymentsModelYandex")
const { UserYandex } = require("./UserYandex")
const { LeaderboardGlobalYandex } = require("./LeaderboardGlobalYandex")
const { LeaderboardGlobalExternal } = require("./LeaderboardGlobalExternal")

const DUMMY_USER_SVG = `
            <svg xmlns="http://www.w3.org/2000/svg" width="320" height="320">
                <path d="M0 0h320v320H0V0z" fill="#fff"/>
                <path d="M320 0H0v320h320V0zM160 66.7c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 189.3c-33.4 0-62.7-17.1-80-42.9.3-26.5 53.4-41.1 80-41.1s79.6 14.6 80 41.1c-17.3 25.8-46.6 42.9-80 42.9z"/>
            </svg>`

const SocialModuleYandex = new ContainerModule((bind) => {
  let dummyUser

  bind(TypesSocial.model).to(SocialModelYandex).inSingletonScope()
  bind(TypesSocial.cookie).to(UserDataYandex).inSingletonScope()
  bind(TypesSocial.payments).to(PaymentsModelYandex)
  bind(TypesSocial.user).to(UserYandex)
  bind(TypesSocial.userScore).to(UserScore)
  bind(TypesSocial.leaderboardGlobal).to(LeaderboardGlobalYandex).inSingletonScope()
  bind(TypesSocial.leaderboardContext).to(LeaderboardGlobalExternal).inSingletonScope()
  bind(TypesSocial.dummyUser).toDynamicValue((context) => {
    if (!dummyUser) {
      dummyUser = context.container.get(TypesSocial.user)
      const photo = URL.createObjectURL(
        new Blob([DUMMY_USER_SVG], {
          type: "image/svg+xml",
        }),
      )
      dummyUser.init({
        getUniqueID() {
          return "unknown"
        },
        getPhoto() {
          return photo
        },
      })
    }
    return dummyUser
  })
})

module.exports = { SocialModuleYandex }
