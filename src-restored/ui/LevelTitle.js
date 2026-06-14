/**
 * Restored source for Webpack Module #20911.
 *
 * Home-screen level title.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { lazyGet } = require("../core/RuntimeCore")
const { Localize } = require("../core/Localize")
const { TypesGame } = require("../core/TypesGame")
require("./styleSideEffects")("70461")

function LevelTitle() {
  const model = lazyGet(TypesGame.model)
  return jsxRuntime.jsxs(
    "div",
    {
      className: "level-number",
      children: [
        Localize.get("ui-menu-level_num", "LEVEL"),
        " ",
        (model === null || model === undefined ? undefined : model.absoluteLevelNum) || "-",
      ],
    },
  )
}

module.exports = { LevelTitle }
