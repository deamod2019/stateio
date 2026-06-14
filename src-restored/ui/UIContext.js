/**
 * Restored source for Webpack Module #83430 and its small hook/component
 * barrels (#19562, #23649, #86939, #20167, #70051).
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const { Localize } = require("../core/Localize")
const {
  Button,
  Icon,
  buttonShapeConst,
  buttonTypeConst,
} = require("./UIControls")
const { ToggleControl } = require("./ToggleControl")
const { Graphics } = require("./Graphics")
const { VersionLabel } = require("./VersionLabel")
const { GlobalEventProviderComponent } = require("./GlobalEventProviderComponent")
const { useEventListener, useInjection, visibilityEffect } = require("./UIHooks")
const { InversifyContext } = require("./InversifyContext")
const { UIEvents } = require("./UIEvents")
const restoredCoreTypes = require("../core/CoreTypes")
const TypesFlow = restoredCoreTypes.TypesFlow
const TypesPromo = restoredCoreTypes.TypesPromo
const TypesSocial = restoredCoreTypes.TypesSocial
function getRuntime() {
  return require("../core/RuntimeCore")
}

function CrossPromo(props) {
  const className = props.className
  const delay = props.delay === undefined ? 3000 : props.delay
  const social = useInjection(TypesSocial.model)

  if (!canShowCrossPromo(social)) return null

  const randomPromo = useInjection(TypesPromo.random)
  const appId = randomPromo.appId
  const [invisible] = visibilityEffect(delay, true, [appId])
  const { CrossPromoComponent } = require("./CrossPromoComponent")

  return jsxRuntime.jsx(
    CrossPromoComponent,
    {
      invisible,
      className,
      onClick() {
        return social.switchGame(randomPromo.appId, randomPromo.data)
      },
      ...randomPromo,
    },
  )
}

function canShowCrossPromo(social) {
  switch (social.socialPlatform) {
    case "fb":
      return (
        typeof FBInstant !== "undefined" &&
        FBInstant.getSupportedAPIs().indexOf("switchGameAsync") !== -1 &&
        getRuntime().di.isBound(TypesPromo.config)
      )
    case "vk":
    case "ok":
    case "ya":
      return true
    default:
      return undefined
  }
}

function Count(props) {
  const { className, count = 0, ...rest } = props
  return jsxRuntime.jsx("span", {
    className: classNames("count", className),
    ...rest,
    children: count,
  })
}

function Claim(props) {
  const {
    className,
    buttonType = "primary",
    type,
    count,
    ads,
    children,
    shape = "oval",
    ...rest
  } = props

  return jsxRuntime.jsxs(
    Button,
    {
      className: classNames("claim", className),
      shape,
      type: buttonType,
      ...rest,
      children: [
        children,
        type &&
          jsxRuntime.jsxs("span", {
            className: "count-wrap",
            children: [
              jsxRuntime.jsx(Icon, { type }),
              jsxRuntime.jsx(Count, { count }),
            ],
          }),
        ads && jsxRuntime.jsx(Icon, { type: "ads" }),
      ],
    },
  )
}

function ShareComponent(props) {
  const invisible = props.invisible
  const screenshot = props.screenshot
  const onShare = props.onShare

  return jsxRuntime.jsxs(
    "div",
    {
      class: classNames("share-cont", { invisible }),
      async onClick() {
        const shareAction = getRuntime().lazyGet(TypesFlow.share)
        const shareResult = await (shareAction === null || shareAction === undefined
          ? undefined
          : shareAction.run(screenshot))
        if (onShare) onShare(shareResult)
      },
      children: [
        jsxRuntime.jsxs("div", {
          className: "share_ico",
          children: [
            jsxRuntime.jsx(Icon, { type: "share" }),
            jsxRuntime.jsx("div", { children: Localize.get("share", "Share") }),
          ],
        }),
        jsxRuntime.jsx("img", { className: "screenshot", src: screenshot, alt: "" }),
      ],
    },
  )
}

const exported = {
  Button,
  Claim,
  Count,
  CrossPromo,
  GlobalEventProviderComponent,
  Graphics,
  Icon,
  InversifyContext,
  ShareComponent,
  ToggleControl,
  UIEvents,
  VersionLabel,
  buttonShapeConst,
  buttonTypeConst,
  useEventListener,
  useInjection,
  visibilityEffect,
}

const lazyExports = {
  AlertsOverlay: () => require("./AlertsOverlay").AlertsOverlay,
  Avatar: () => require("./Avatar").Avatar,
  AvatarGroup: () => require("./AvatarGroup").AvatarGroup,
  AvatarPlayInGroup: () => require("./AvatarPlayInGroup").AvatarPlayInGroup,
  EndScreenAction: () => require("../core/EndScreenAction").EndScreenAction,
  HTMLUIModule: () => require("./HTMLUIModule").HTMLUIModule,
  PauseAction: () => require("../core/PauseAction").PauseAction,
  PauseOverlay: () => require("./PauseOverlay").PauseOverlay,
  Popups: () => require("./Popups").Popups,
  Score: () => require("./Score").Score,
  ScoreGroup: () => require("./ScoreGroup").ScoreGroup,
  Screens: () => require("./Screens").Screens,
  SetupUIAction: () => require("../core/SetupUIAction").SetupUIAction,
  SocialOverlay: () => require("./SocialOverlay").SocialOverlay,
  StartScreenAction: () => require("../core/StartScreenAction").StartScreenAction,
}

for (const [name, getter] of Object.entries(lazyExports)) {
  Object.defineProperty(exported, name, { enumerable: true, get: getter })
}

module.exports = exported
