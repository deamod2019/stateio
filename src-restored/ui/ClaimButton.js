/**
 * Restored source for Webpack Module #75663.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const { Localize } = require("../core/Localize")
const { playUIClickSound } = require("../core/UIHelpers")
const { Button } = require("./UIContext")
const { SVG } = require("./SVGAssets")

function ClaimButton(props) {
  const onClick = props.onClick
  const className = props.className
  props.placement
  const reward = props.reward === undefined ? 0 : props.reward
  const text = props.text === undefined ? Localize.get("ui-win-claim", "CLAIM") : props.text
  const multiplierText = props.multiplierText === undefined ? "X3" : props.multiplierText
  const showIcon = props.showIcom === undefined || props.showIcom

  return jsxRuntime.jsxs(
    Button,
    {
      className: classNames("btn-green", className, { "btn-multiline": reward }),
      onClick() {
        if (onClick) {
          playUIClickSound()
          onClick()
        }
      },
      children: [
        showIcon ? jsxRuntime.jsx(SVG.Video, {}) : null,
        reward
          ? jsxRuntime.jsxs("span", {
              className: "column",
              children: [
                jsxRuntime.jsxs("span", {
                  className: classNames("btn-content-title"),
                  children: [text, " ", multiplierText],
                }),
                jsxRuntime.jsxs("span", {
                  className: classNames("row", "row_centred"),
                  children: [
                    jsxRuntime.jsx("span", {
                      className: classNames("btn-content-important"),
                      children: reward,
                    }),
                    jsxRuntime.jsx(SVG.COINS, {
                      className: classNames("icon-coins"),
                    }),
                  ],
                }),
              ],
            })
          : jsxRuntime.jsx("span", { className: "btn-content-title", children: text }),
      ],
    },
  )
}

module.exports = { ClaimButton }
