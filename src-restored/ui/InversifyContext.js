/**
 * Restored context root for Webpack Module #83430.
 */
"use strict"

const preact = require("./preactRuntime")

const InversifyContext =
  typeof preact.createContext === "function"
    ? preact.createContext({})
    : { Provider: function Provider() {} }

module.exports = { InversifyContext }
