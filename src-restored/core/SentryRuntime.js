/**
 * Restored boundary for the third-party Sentry browser runtime.
 *
 * Keeping the SDK behind a named adapter lets restored gameplay and setup code
 * stop importing the numbered webpack snapshot directly while preserving the
 * exact runtime implementation during the mixed restoration phase.
 */
"use strict"

module.exports = require("../../src-cjs/90505__mod.js")
