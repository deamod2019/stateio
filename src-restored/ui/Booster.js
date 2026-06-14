/**
 * Restored source for Webpack Module #56721.
 *
 * One booster card in the home screen upgrade row.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { Localize } = require("../core/Localize")
const { SVG } = require("./SVGAssets")
const classNames = require("./classNames").default
const { getFontClassByDigits } = require("../core/NumberFormat")
require("./styleSideEffects")("67566")
const { playUIClickSound } = require("../core/UIHelpers")

const BoosterType = {
  START_UNITS: "BoosterType.START_UNITS",
  START_PRODUCE: "BoosterType.START_PRODUCE",
  OFFLINE_EARNINGS: "BoosterType.OFFLINE_EARNINGS",
}

function getIcon(type, iconOnly = false) {
  switch (type) {
    case BoosterType.START_UNITS:
      return iconOnly
        ? jsxRuntime.jsx(SVG.BoosterStartUnitsIcon, {})
        : jsxRuntime.jsx(SVG.BoosterStartUnits, {})
    case BoosterType.START_PRODUCE:
      return iconOnly
        ? jsxRuntime.jsx(SVG.BoosterProduceSpeedIcon, {})
        : jsxRuntime.jsx(SVG.BoosterProduceSpeed, {})
    default:
      return iconOnly ? jsxRuntime.jsx(SVG.BoosterOfflineEarningsIcon, {}) : jsxRuntime.jsx(SVG.COINS, {})
  }
}

function Booster(props) {
  const type = props.id
  const title = props.title
  const disabled = props.disabled === undefined ? true : props.disabled
  const isFree = props.isFree === undefined ? true : props.isFree
  const defaultCount = props.defaultCount === undefined ? "10" : props.defaultCount
  const description = props.description
  const price = props.price === undefined ? 50 : props.price
  const onClick = props.onClick
  const className = props.className
  const levelNum = props.levelNum === undefined ? 10 : props.levelNum

  return jsxRuntime.jsxs(
    "div",
    {
      disabled,
      className: classNames("booster", className, { disabled }),
      children: [
        jsxRuntime.jsxs("div", {
          className: classNames("booster-head"),
          children: [
            jsxRuntime.jsx("div", {
              className: classNames("booster-head__icon"),
              children: getIcon(type, true),
            }),
            jsxRuntime.jsxs("div", {
              className: classNames("booster-head__info"),
              children: [
                jsxRuntime.jsx("div", {
                  className: classNames("booster-head__total", getFontClassByDigits(defaultCount, 2, 7)),
                  children: defaultCount,
                }),
                jsxRuntime.jsx("div", {
                  className: classNames("booster-head__description"),
                  children: Localize.get(description?.i18n, description?.default),
                }),
              ],
            }),
          ],
        }),
        jsxRuntime.jsxs("button", {
          onClick() {
            if (onClick) {
              if (!disabled) playUIClickSound()
              onClick()
            }
          },
          disabled,
          className: classNames("booster-body", "btn", { "booster-body_free": isFree }),
          children: [
            jsxRuntime.jsx("div", {
              className: classNames("booster-body__title"),
              children: Localize.get(title?.i18n, title?.default),
            }),
            jsxRuntime.jsx("div", {
              className: classNames("booster-body__image"),
              children: getIcon(type),
            }),
            jsxRuntime.jsxs("div", {
              className: classNames("booster-body__level", getFontClassByDigits(levelNum, 1, 3)),
              children: [Localize.get("ui-menu-lvl", "LVL"), " ", levelNum],
            }),
            jsxRuntime.jsx("div", {
              className: classNames("booster-body__price"),
              children: isFree
                ? jsxRuntime.jsxs(jsxRuntime.Fragment, {
                    children: [
                      jsxRuntime.jsx("div", {
                        className: classNames("booster-body__price-free"),
                        children: Localize.get("ui-common-free", "FREE"),
                      }),
                      jsxRuntime.jsx("div", {
                        className: classNames("booster-body__price-icon-free"),
                        children: jsxRuntime.jsx(SVG.Video, {}),
                      }),
                    ],
                  })
                : jsxRuntime.jsxs(jsxRuntime.Fragment, {
                    children: [
                      jsxRuntime.jsx("div", {
                        className: classNames(
                          "booster-body__price-total",
                          getFontClassByDigits(price, 2, 7),
                        ),
                        children: price,
                      }),
                      jsxRuntime.jsx("div", {
                        className: classNames("booster-body__price-icon"),
                        children: jsxRuntime.jsx(SVG.COINS, {}),
                      }),
                    ],
                  }),
            }),
          ],
        }),
      ],
    },
  )
}

module.exports = { BoosterType, Booster }
