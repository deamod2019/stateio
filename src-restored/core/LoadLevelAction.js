/**
 * Restored source for Webpack Module #27588.
 *
 * Loads a map SVG asset, parses it into level data, and returns the parsed
 * continent/stage structure.
 */
"use strict"

const core = require("./RuntimeCore")
const { Action } = require("./Action")
const { markInjectable } = require("./DecoratorHelpers")
const levelParser = require("./LevelParser")

class LoadLevelAction extends Action {
  async execute(levelId) {
    const fileName = levelId?.endsWith(".svg") ? levelId : `${levelId}.svg`
    let response

    try {
      const origin = core.IS_ODR_BUILD ? core.ODR_BUILD_ORIGIN : core.GAME_SCRIPT_ORIGIN
      response = await fetch(`${origin}assets/maps/${fileName}`)
    } catch (error) {
      throw new Error(error)
    }

    const svg = await response.text()
    const document = new window.DOMParser().parseFromString(svg, "text/xml")
    return levelParser.parseLevelSVG(document)
  }
}

markInjectable(LoadLevelAction)

module.exports = { LoadLevelAction }
