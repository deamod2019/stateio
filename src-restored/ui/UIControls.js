/**
 * Restored source for Webpack Modules #56959, #37909, and #8407.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const {
  adsIcon,
  friendsIcon,
  globeIcon,
  playIcon,
  replayIcon,
  leaderboardIcon,
  xIcon,
  shareIcon,
  trophyIcon,
  placeholderAvatarIcon,
  bombIcon,
  heartIcon,
  vsIcon,
  gearIcon,
} = require("./UIControlIcons")

const iconsMap = createIconsMap()
const buttonTypeConst = { primary: "primary", glassy: "glassy" }
const buttonShapeConst = { circle: "circle", oval: "oval" }

function Icon(props) {
  const { type, ...rest } = props
  const IconComponent = iconsMap.get(type)
  return jsxRuntime.jsx(IconComponent, { ...rest })
}

function Button(props) {
  const {
    className,
    icon,
    shape,
    children,
    type,
    htmlType = "button",
    block,
    bordered,
    revertDir,
    ...rest
  } = props
  const typeClassName = type && controlClassName(type)
  const shapeClassName = shape && controlClassName(shape)
  const renderedIcon =
    icon && (typeof icon === "string" ? jsxRuntime.jsx(Icon, { type: icon }) : icon)

  return jsxRuntime.jsxs(
    "button",
    {
      className: classNames("btn", className, shapeClassName, typeClassName, {
        "btn-block": block,
        "btn-revert": revertDir,
        "btn-border": bordered,
      }),
      type: htmlType,
      ...rest,
      children: [
        renderedIcon,
        children &&
          jsxRuntime.jsx("span", {
            className: "btn-content",
            children,
          }),
      ],
    },
  )
}

function controlClassName(value) {
  const classNamesByValue = { ...buttonTypeConst, ...buttonShapeConst }
  return `btn-${classNamesByValue[value]}`
}

function createIconsMap() {
  const iconAssets = new Map([
    ["ads", adsIcon],
    ["friends", friendsIcon],
    ["globe", globeIcon],
    ["play", playIcon],
    ["replay", replayIcon],
    ["leaderboard", leaderboardIcon],
    ["share", shareIcon],
    ["x", xIcon],
    ["trophy", trophyIcon],
    ["bomb", bombIcon],
    ["vs", vsIcon],
    ["heart", heartIcon],
    ["placeholder-avatar", placeholderAvatarIcon],
    ["gear", gearIcon],
  ])
  const renderedIcons = new Map()
  iconAssets.forEach((svg, type) => {
    renderedIcons.set(type, (props) => {
      const { Graphics } = require("./UIContext")
      return jsxRuntime.jsx(Graphics, { svg, ...props })
    })
  })
  return renderedIcons
}

module.exports = {
  Button,
  Icon,
  buttonShapeConst,
  buttonTypeConst,
  iconsMap,
}
