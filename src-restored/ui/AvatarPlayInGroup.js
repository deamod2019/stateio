/**
 * Restored source for Webpack Module #71290.
 *
 * Avatar group used for play-in/opponent presentations.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const { Score } = require("./Score")
const { Avatar } = require("./Avatar")

function AvatarPlayInGroup(props) {
  const className = props.className
  const score = props.score
  const children = props.children
  const groupClassName = classNames("avatar-play-in-group", className)

  return jsxRuntime.jsxs(
    "span",
    {
      className: groupClassName,
      children: [
        jsxRuntime.jsx("ul", {
          className: "avatar-play-in-group-inner",
          children,
        }),
        score &&
          jsxRuntime.jsx(Score, {
            className: "avatar-score",
            children: score,
          }),
      ],
    },
  )
}

AvatarPlayInGroup.Avatar = function AvatarPlayInGroupAvatar(props) {
  const { className, ...rest } = props
  const itemClassName = classNames("avatar-play-in-group-item", className)

  return jsxRuntime.jsx(
    "li",
    {
      className: itemClassName,
      children: jsxRuntime.jsx(Avatar, { ...rest }),
    },
  )
}

module.exports = { AvatarPlayInGroup }
