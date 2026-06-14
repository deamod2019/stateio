/**
 * Restored compatibility barrel for Webpack Module #87195.
 */
"use strict"

Object.assign(
  exports,
  require("./AudioModel"),
  require("./PlayMusicAction"),
  require("./PlaySoundAction"),
  require("./AudioModule"),
)
