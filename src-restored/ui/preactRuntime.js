/**
 * Restored third-party boundary for Webpack Module #6400.
 *
 * Preact itself stays on the snapshot/runtime layer; restored UI modules import
 * it through this adapter so the dependency boundary is visible in one place.
 */
"use strict"

module.exports = require("../../src-cjs/6400__mod.js")
