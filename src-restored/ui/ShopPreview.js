/**
 * Restored source for Webpack Module #44698.
 *
 * Animated shop preview scene that reflects selected fighter/building/color skins.
 */
"use strict"

const { __assign } = require("../core/TSHelpers")
const jsxRuntime = require("./jsxRuntime")
const ui = require("./UIContext")
const { GameEvents } = require("../core/GameEvents")
const { SelectableColorCss } = require("../core/SelectableSkins")
const { TypesGame } = require("../core/TypesGame")
const classNames = require("./classNames").default
const hooks = require("../../src-cjs/30396__mod.js")
require("./styleSideEffects")("69181")

const LEFT_STATE_PATH =
  "M50.3529 10.0787L27.6941 68.0315L30.2118 85.6693L25.1765 93.2283V98.2677L22.6588 105.827L27.6941 108.346L25.1765 110.866V120.945H30.2118L25.1765 131.024V138.583L17.6235 148.661L15.1059 156.22L20.1412 161.26L17.6235 166.299L12.5882 163.78V166.299V176.378L5.03529 168.819L0 176.378L40.2824 294.803V302.362L50.3529 307.402V314.961L60.4235 320L62.9412 307.402L60.4235 297.323L67.9765 292.283L70.4941 289.764L67.9765 279.685L75.5294 277.165L70.4941 267.087L80.5647 254.488H85.6V262.047L88.1176 257.008L93.1529 262.047L95.6706 257.008L83.0824 241.89L95.6706 251.969V239.37L103.224 251.969L108.259 234.331L115.812 239.37L120.847 234.331L123.365 224.252L120.847 206.614L123.365 201.575L128.4 194.016L130.918 199.055L135.953 206.614H143.506L146.024 196.535L153.576 199.055L158.612 204.094L163.647 188.976L158.612 183.937L168.682 188.976L176.235 183.937L183.788 168.819H188.824L198.894 163.78L211.482 153.701L214 143.622L206.447 146.142V136.063L196.376 128.504L191.341 131.024L181.271 125.984L178.753 120.945L176.235 113.386L178.753 105.827L173.718 103.307H161.129L156.094 100.787L153.576 85.6693L128.4 12.5984L115.812 7.55906L108.259 0L98.1882 2.51969L93.1529 10.0787L83.0824 15.1181L73.0118 20.1575L65.4588 17.6378L62.9412 7.55906L50.3529 10.0787Z"
const RIGHT_STATE_PATH =
  "M34.7586 0L124.138 29.9104L129.103 34.8955L124.138 54.8358V69.791L114.207 74.7761L109.241 84.7463L104.276 99.7015L109.241 109.672L129.103 114.657H139.034L144 139.582L139.034 164.507V179.463V194.418L134.069 199.403L139.034 209.373L134.069 229.313L129.103 234.299H119.172L129.103 249.254H119.172V259.224L124.138 264.209H114.207L109.241 274.179L99.3103 279.164L109.241 284.149L99.3103 304.09V309.075L94.3448 314.06V324.03L84.4138 334V324.03V299.104H74.4828H64.5517L54.6207 304.09L49.6552 294.119H34.7586L29.7931 284.149H19.8621L4.96552 274.179V259.224L0 254.239L4.96552 239.284V229.313H9.93103L19.8621 214.358L29.7931 204.388V194.418L64.5517 164.507V154.537L34.7586 134.597H24.8276L19.8621 114.657L4.96552 119.642L0 99.7015L4.96552 84.7463L9.93103 74.7761L0 64.806V54.8358L9.93103 44.8657L19.8621 24.9254V14.9552L34.7586 0Z"
const INTENSITY_CLASSES = ["intensity-1", "intensity-2", "intensity-3"]

function ShopPreview() {
  const model = ui.useInjection(TypesGame.model)
  const fighterOneRef = hooks.useRef(null)
  const fighterTwoRef = hooks.useRef(null)
  const fighterThreeRef = hooks.useRef(null)
  const buildingOneRef = hooks.useRef(null)
  const buildingTwoRef = hooks.useRef(null)
  const leftStateRef = hooks.useRef(null)
  const rightStateRef = hooks.useRef(null)
  const initialState = {
    fighter: model.cookie.selectedFighter,
    building: model.cookie.selectedBuilding,
    colorSet: model.cookie.selectedColorSet,
    iterationCounter: 0,
  }
  const stateParts = hooks.useState(() => initialState)
  const state = stateParts[0]
  const setState = stateParts[1]
  const fighter = state.fighter
  const building = state.building
  const colorSet = state.colorSet
  state.iterationCounter

  function updateSkinImage(item, container, fill = "") {
    if (!item || !container) return

    const objectElement = container.getElementsByTagName("object")[0]
    if (objectElement) {
      objectElement.setAttribute("data", `assets/${item.ui_textureUrl}`)
      objectElement.onload = function onObjectLoad() {
        const document = objectElement.contentDocument
        if (document) {
          const svg = document.getElementsByTagName("svg")[0]
          if (svg) {
            svg.setAttribute("fill", `${fill}`)
            svg.setAttribute("style", `fill:${fill}`)
          }
        }
      }
      return
    }

    const img = container.getElementsByTagName("img")[0]
    if (img) {
      img.src = `assets/${item.ui_textureUrl}`
      img.className =
        SelectableColorCss.find((entry) => entry.id === model.cookie.selectedColorSet?.id)?.className || ""
    }
  }

  ui.useEventListener(GameEvents.SELECTABLE_ITEM_CHANGED, () => {
    setState((current) =>
      __assign(__assign({}, current), {
        fighter: model.cookie.selectedFighter,
        colorSet: model.cookie.selectedColorSet,
        building: model.cookie.selectedBuilding,
      }),
    )
  })

  hooks.useLayoutEffect(
    () => {
      const fighterRefs = [fighterOneRef, fighterTwoRef, fighterThreeRef]
      const buildingRefs = [buildingOneRef, buildingTwoRef]
      const stateRefs = [leftStateRef, rightStateRef]

      fighterRefs.map((ref) => updateSkinImage(fighter, ref.current, colorSet?.data[1]))
      buildingRefs.map((ref) => updateSkinImage(building, ref.current, colorSet?.data[1]))
      stateRefs.map((ref) => {
        if (ref.current) {
          const svg = ref.current.getElementsByTagName("svg")[0]
          if (svg) {
            const fill = colorSet?.data[0]
            svg.setAttribute("fill", `${fill}`)
            svg.setAttribute("style", `fill:${fill}`)
          }
        }
      })

      const cleanups = fighterRefs.map((ref) => {
        const onAnimationIteration = () => {
          ref.current?.classList.toggle("to-right")
          const targetState = ref.current?.classList.contains("to-right") ? rightStateRef : leftStateRef
          if (ref === fighterOneRef) setIntensity(targetState.current, "intensity-3")
          else if (ref === fighterTwoRef) setIntensity(targetState.current, "intensity-2")
          else if (ref === fighterThreeRef) setIntensity(targetState.current, "intensity-1")
        }
        const onAnimationStart = () => {
          if (ref === fighterOneRef) setIntensity(leftStateRef.current, "intensity-1")
          else if (ref === fighterTwoRef) setIntensity(leftStateRef.current, "intensity-2")
          else if (ref === fighterThreeRef) setIntensity(leftStateRef.current, "intensity-3")
        }

        ref.current?.addEventListener("animationiteration", onAnimationIteration)
        ref.current?.addEventListener("animationstart", onAnimationStart)

        return function cleanupAnimationListeners() {
          ref.current?.removeEventListener("animationiteration", onAnimationIteration)
          ref.current?.removeEventListener("animationstart", onAnimationStart)
        }
      })

      return function cleanupShopPreview() {
        cleanups.map((cleanup) => cleanup())
      }
    },
    [fighter, building, colorSet],
  )

  return jsxRuntime.jsxs(
    "div",
    __assign(
      { className: classNames("shop-preview") },
      {
        children: [
          jsxRuntime.jsx(
            "div",
            __assign(
              { ref: leftStateRef, className: classNames("shop-preview-left", "intensity-1") },
              {
                children: jsxRuntime.jsx(
                  "svg",
                  __assign(
                    {
                      width: "214",
                      height: "320",
                      viewBox: "0 0 214 320",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "first-state",
                    },
                    {
                      children: jsxRuntime.jsx("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: LEFT_STATE_PATH,
                      }),
                    },
                  ),
                ),
              },
            ),
          ),
          jsxRuntime.jsxs(
            "div",
            __assign(
              {
                className: classNames("animation-shoot-area", "animation-shoot-area_static"),
              },
              {
                children: [
                  jsxRuntime.jsx(
                    "div",
                    __assign(
                      { ref: buildingOneRef, className: "building-one" },
                      { children: jsxRuntime.jsx("img", {}) },
                    ),
                  ),
                  jsxRuntime.jsx(
                    "div",
                    __assign(
                      { ref: fighterOneRef, className: "fighter-one" },
                      { children: jsxRuntime.jsx("img", {}) },
                    ),
                  ),
                  jsxRuntime.jsx(
                    "div",
                    __assign(
                      { ref: fighterTwoRef, className: "fighter-two" },
                      { children: jsxRuntime.jsx("img", {}) },
                    ),
                  ),
                  jsxRuntime.jsx(
                    "div",
                    __assign(
                      { ref: fighterThreeRef, className: "fighter-three" },
                      { children: jsxRuntime.jsx("img", {}) },
                    ),
                  ),
                  jsxRuntime.jsx(
                    "div",
                    __assign(
                      { ref: buildingTwoRef, className: "building-two" },
                      { children: jsxRuntime.jsx("img", {}) },
                    ),
                  ),
                ],
              },
            ),
          ),
          jsxRuntime.jsx(
            "div",
            __assign(
              { ref: rightStateRef, className: classNames("shop-preview-right", "intensity-3") },
              {
                children: jsxRuntime.jsx(
                  "svg",
                  __assign(
                    {
                      width: "144",
                      height: "334",
                      viewBox: "0 0 144 334",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "second-state",
                    },
                    {
                      children: jsxRuntime.jsx("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: RIGHT_STATE_PATH,
                      }),
                    },
                  ),
                ),
              },
            ),
          ),
        ],
      },
    ),
  )
}

function setIntensity(element, intensityClass) {
  if (!element) return
  element.classList.remove(...INTENSITY_CLASSES)
  element.classList.add(intensityClass)
}

module.exports = { ShopPreview }
