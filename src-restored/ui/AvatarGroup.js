/**
 * Restored source for Webpack Module #47702.
 *
 * Shared avatar group container and helper leaves.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const { Icon } = require("./UIControls")
const { Avatar } = require("./Avatar")

function AvatarGroup(props) {
  const { className, ...rest } = props
  const groupClassName = classNames("avatar-group", className)

  return jsxRuntime.jsx("div", { className: groupClassName, ...rest })
}

AvatarGroup.Item = function AvatarGroupItem(props) {
  const { className, ...rest } = props
  const itemClassName = classNames("avatar-group-item", className)

  return jsxRuntime.jsx("div", { className: itemClassName, ...rest })
}

AvatarGroup.Separator = function AvatarGroupSeparator(props) {
  const { className, ...rest } = props
  const separatorClassName = classNames("avatar-group-item", "avatar-group-separator", className)

  return jsxRuntime.jsx(Icon, { className: separatorClassName, ...rest })
}

AvatarGroup.Avatar = function AvatarGroupAvatar(props) {
  return jsxRuntime.jsx(Avatar, { ...props })
}

module.exports = { AvatarGroup }
