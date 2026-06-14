/**
 * Restored source for Webpack Module #62415.
 *
 * Shared shop media renderer for image and SVG object skins.
 */
"use strict"

const { __assign } = require("../core/TSHelpers")
const jsxRuntime = require("./jsxRuntime")
const hooks = require("../../src-cjs/30396__mod.js")
const classNames = require("./classNames").default

function TexturedShopItem(props) {
  const textureUrl = props.textureUrl === undefined ? "" : props.textureUrl
  const playerColor = props.playerColor === undefined ? undefined : props.playerColor
  const useImage = props.useImage === undefined ? true : props.useImage
  const className = props.className === undefined ? "" : props.className
  const objectRef = hooks.useRef(null)

  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: useImage
      ? jsxRuntime.jsx("img", {
          className: classNames("shop-item-media-object", className),
          src: `assets/${textureUrl}`,
        })
      : jsxRuntime.jsx("object", {
          ref: objectRef,
          onLoad() {
            if (objectRef.current) {
              const document = objectRef.current.contentDocument
              if (document) {
                const svg = document.getElementsByTagName("svg")[0]
                if (svg) {
                  let fill = "#000000"
                  if (playerColor) fill = playerColor[0]
                  svg.setAttribute("style", `fill:${fill}`)
                }
              }
            }
          },
          type: "image/svg+xml",
          className: classNames("shop-item-media-object"),
          data: `assets/${textureUrl}`,
        }),
  })
}

module.exports = { TexturedShopItem }
