/**
 * Restored third-party boundary for Webpack Module #41766.
 *
 * Howler itself stays on the snapshot/runtime layer; restored audio modules
 * import it through this narrow adapter instead of each reaching into src-cjs.
 */
"use strict"

const { Howl, Howler } = require("../../src-cjs/41766_Howler.js")

module.exports = { Howl, Howler }
