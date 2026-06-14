/**
 * Restored source for Webpack Module #49934.
 *
 * Presentational cross-promo tile used by the shared UI barrel.
 */
"use strict"

const { __assign } = require("../core/TSHelpers")
const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const {
  GAME_SCRIPT_ORIGIN,
  IS_ODR_BUILD,
  ODR_BUILD_ORIGIN,
} = require("../core/RuntimeCore")
require("./styleSideEffects")("36163")

const origin = IS_ODR_BUILD ? ODR_BUILD_ORIGIN : GAME_SCRIPT_ORIGIN

function CrossPromoComponent(props) {
  const title = props.title
  const subtitle = props.subtitle
  const icon = props.icon
  const className = props.className
  const invisible = props.invisible
  const onClick = props.onClick

  return jsxRuntime.jsxs(
    "div",
    __assign(
      { className: classNames("crosspromo", className, { invisible }), onClick },
      {
        children: [
          jsxRuntime.jsx("img", {
            className: "crosspromo__icon",
            src: `${origin}crosspromo/${icon}`,
          }),
          jsxRuntime.jsxs(
            "div",
            __assign(
              { className: "crosspromo__description" },
              {
                children: [
                  jsxRuntime.jsx("div", __assign({ className: "title" }, { children: title })),
                  jsxRuntime.jsx(
                    "div",
                    __assign({ className: "subtitle" }, { children: subtitle }),
                  ),
                ],
              },
            ),
          ),
        ],
      },
    ),
  )
}

module.exports = { CrossPromoComponent }
