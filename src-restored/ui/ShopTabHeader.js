/**
 * Restored source for Webpack Module #37079.
 *
 * Shop tab header with optional unstored-item notification marker.
 */
"use strict"

const { __assign } = require("../core/TSHelpers")
const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const { ExclamationMarkNotificator } = require("./ExclamationMarkNotificator")

function ShopTabHeader(props) {
  const className = props.className === undefined ? "" : props.className
  const title = props.title === undefined ? "Test" : props.title
  const showNotification = props.showNotification === undefined ? false : props.showNotification
  const onClick = props.onClick === undefined ? function noop() {} : props.onClick

  return jsxRuntime.jsxs(
    "div",
    __assign(
      { onClick, className: classNames("shop-menu__tab-header", className) },
      {
        children: [
          jsxRuntime.jsx("span", { children: title }),
          showNotification
            ? jsxRuntime.jsx("p", {
                children: jsxRuntime.jsx(ExclamationMarkNotificator, {
                  className: classNames(
                    "exclamation-mark-notificator_top-right",
                    "exclamation-mark-notificator_animated",
                  ),
                }),
              })
            : null,
        ],
      },
    ),
  )
}

module.exports = { ShopTabHeader }
