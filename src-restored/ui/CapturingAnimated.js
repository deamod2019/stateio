/**
 * Restored source for Webpack Module #73097.
 *
 * Tweened capture-progress strip used by the gift fill-box popup.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { gsap } = require("../core/animationRuntime")
const hooks = require("./UIHooks")
const { Capturing } = require("./Capturing")

function CapturingAnimated(props) {
  const from = props.from
  const to = props.to
  const total = props.total
  const startDelay = props.startDelay === undefined ? 1 : props.startDelay
  const onAnimationComplete = props.onAnimationComplete
  const [state, setState] = hooks.useState({
    captured: from / total,
    showGift: false,
  })

  hooks.useLayoutEffect(() => {
    const tweenState = { value: from / total }
    gsap.fromTo(tweenState, tweenState, {
      delay: startDelay,
      duration: 1,
      value: to / total,
      ease: "sine.in",
      onUpdate() {
        setState({ captured: tweenState.value, showGift: false })
      },
      onComplete: onAnimationComplete,
    })
  }, [from, to])

  return jsxRuntime.jsx(Capturing, {
    captured: state.captured,
    stages: total,
    showGift: state.showGift,
  })
}

module.exports = { CapturingAnimated }
