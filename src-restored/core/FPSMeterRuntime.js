/**
 * Restored boundary for the FPSMeter debug overlay runtime.
 *
 * This module intentionally preserves the original side effect that installs
 * `window.FPSMeter` / `globalThis.FPSMeter` when the debug runtime is loaded.
 */
"use strict"

module.exports = require("../../src-cjs/79349__mod.js")
