/**
 * Restored source for Webpack Module #3207.
 *
 * Tween a number and call back with intermediate values. Used by coin fields
 * and win indicators.
 */
"use strict"

const { gsap } = require("../core/animationRuntime")

function tickup(from, to, duration = 1000, onUpdate) {
  const state = { value: from }
  gsap.fromTo(state, state, {
    duration: 0.001 * duration,
    value: to,
    ease: "linear",
    onUpdate() {
      return onUpdate(state.value)
    },
  })

  return function cleanupTickup() {
    return gsap.killTweensOf(state)
  }
}

module.exports = { tickup }
