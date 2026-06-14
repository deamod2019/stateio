/**
 * Restored third-party boundary for Webpack Module #25317.
 *
 * GSAP stays on the snapshot/runtime layer; restored animation modules import
 * tween helpers through this visible boundary.
 */
"use strict"

module.exports = require("../../src-cjs/25317_SteppedEase.js")
