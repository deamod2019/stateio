/**
 * Restored source for Webpack Module #73793.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
require("./styleSideEffects")("92716")
const { TypesCore, TypesSocial } = require("../core/CoreTypes")

function VersionLabel() {
  const { useInjection } = require("./UIContext")
  const config = useInjection(TypesCore.gameConfig)
  const social = useInjection(TypesSocial.model)
  const sdkVersion =
    social.socialPlatform === "fb" && typeof FBInstant !== "undefined"
      ? FBInstant.getSDKVersion()
      : null

  return jsxRuntime.jsx(
    "a",
    {
      class: "version__label",
      children: `${social.socialPlatform}${sdkVersion ? `-${sdkVersion}` : ""}/${
        config.version || "localhost"
      }`,
    },
  )
}

module.exports = { VersionLabel }
