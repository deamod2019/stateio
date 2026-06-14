/**
 * Restored compatibility barrel for Webpack Module #98931.
 */
"use strict"

Object.assign(
  exports,
  require("./SocialFlowAction"),
  require("./CheatsAction"),
  require("./BootAction"),
  require("./LevelStartAction"),
  require("./LevelRestartAction"),
  require("./LevelEndAction"),
  require("./LevelNextAction"),
  require("./PlayWithOpponentAction"),
  require("./GameFlowModule"),
)
