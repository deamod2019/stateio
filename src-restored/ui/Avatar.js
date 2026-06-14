/**
 * Restored source for Webpack Module #41595.
 *
 * Shared avatar view with an optional play-with button and score badge.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const { Button, Icon } = require("./UIControls")
const { Score } = require("./Score")

function PlayWithButton(props) {
  const content = props.content
  const icon = props.icon
  const className = props.className
  const visible = props.visible
  const onClick = props.onClick
  const buttonClassName = classNames("avatar-play-with-btn", className, {
    "avatar-play-with-btn-visible": visible,
  })

  return jsxRuntime.jsx(
    "div",
    {
      className: buttonClassName,
      children: jsxRuntime.jsx(Button, {
        icon,
        type: "primary",
        shape: "oval",
        bordered: true,
        onClick,
        children: content,
      }),
    },
  )
}

function Avatar(props) {
  const className = props.className
  const imgPath = props.imgPath
  const score = props.score
  const scoreIconType = props.scoreIconType
  const imgAlt = props.imgAlt === undefined ? "Avatar" : props.imgAlt
  const playWithBtn = props.playWithBtn
  const avatarClassName = classNames("avatar", { "avatar-play-with": playWithBtn }, className)

  return jsxRuntime.jsxs(
    "span",
    {
      className: avatarClassName,
      children: [
        jsxRuntime.jsx("span", {
          className: "avatar-inner",
          children: imgPath
            ? jsxRuntime.jsx("img", { src: imgPath, alt: imgAlt })
            : jsxRuntime.jsx(Icon, { type: "placeholder-avatar", className: "avatar-bg" }),
        }),
        playWithBtn && jsxRuntime.jsx(PlayWithButton, { ...playWithBtn }),
        (score || score === 0) &&
          jsxRuntime.jsx(Score, {
            className: "avatar-score",
            icon: scoreIconType,
            children: score,
          }),
      ],
    },
  )
}

module.exports = { Avatar }
