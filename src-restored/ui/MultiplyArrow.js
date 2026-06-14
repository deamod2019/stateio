/**
 * Restored source for Webpack Module #39811.
 *
 * Animated pointer for the offline-earnings multiplier gauge.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { gsap } = require("../core/animationRuntime")
const hooks = require("./UIHooks")

const HALF_PI = Math.PI / 2
const GAUGE_ARC = (Math.PI / 180) * 73
const MULTIPLIERS = [2, 3, 4, 3, 2]
const MULTIPLIER_THRESHOLDS = [0.15, 0.35, 0.62, 0.82]

function MultiplyArrow(props) {
  props.className
  const paused = props.paused === undefined ? false : props.paused
  const onPause = props.onPause
  const [state, setState] = hooks.useState(() => ({
      paused,
      progress: 0,
    }))
  const progress = state.progress

  hooks.useLayoutEffect(() => {
    if (!paused) {
      const tweenState = { value: 0 }
      gsap.fromTo(
        tweenState,
        { value: 0 },
        {
          value: 1,
          repeat: Infinity,
          yoyo: true,
          ease: "linear",
          onUpdate() {
            return setState((current) => ({ ...current, progress: tweenState.value }))
          },
        },
      )

      return function cleanupMultiplyArrowTween() {
        return gsap.killTweensOf(tweenState)
      }
    }

    if (onPause) onPause(getMultiplier(progress))
  }, [paused])

  const angle = GAUGE_ARC * (progress - 0.5) - HALF_PI
  const x = 118 + 190 * Math.cos(angle)
  const y = 200 + 160 * Math.sin(angle)

  return jsxRuntime.jsx("div", {
    style: {
      transform: `translate(${x}px, ${y}px) rotate(${angle + HALF_PI}rad)`,
    },
    className: "multiply-arrow",
  })
}

module.exports = { MultiplyArrow }

function getMultiplier(progress = 0) {
  let index = 0

  if (progress > MULTIPLIER_THRESHOLDS[3]) index = 4
  else if (progress > MULTIPLIER_THRESHOLDS[2] && progress <= MULTIPLIER_THRESHOLDS[3]) index = 3
  else if (progress > MULTIPLIER_THRESHOLDS[1] && progress <= MULTIPLIER_THRESHOLDS[2]) index = 2
  else if (progress > MULTIPLIER_THRESHOLDS[0] && progress <= MULTIPLIER_THRESHOLDS[1]) index = 1

  return MULTIPLIERS[index]
}
