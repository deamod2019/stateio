/**
 * Restored source for Webpack Module #75953.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const hooks = require("./UIHooks")
const classNames = require("./classNames").default
const { Button } = require("./UIControls")

function ToggleControl(props) {
  const [value, setValue] = hooks.useState(props.value)
  const className = classNames(
    { "btn--muted": value },
    "btn-icon",
    `btn-icon__${props.className}`,
  )

  return jsxRuntime.jsx(Button, {
    className,
    shape: "circle",
    onClick() {
      setValue(!value)
      props.onChange(!value)
    },
  })
}

module.exports = { ToggleControl }
