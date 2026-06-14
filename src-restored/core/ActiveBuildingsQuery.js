/**
 * Restored source for Webpack Module #62260.
 *
 * Matches active gameplay buildings that can spawn fighters and are not in the
 * default/unowned player state.
 */
"use strict"

const { Query } = require("./ECSCore")
const { PlayerType } = require("./PlayerType")
const { Spawner } = require("./Spawner")

const ActiveBuildingsQuery = new Query((entity) => {
  return entity.has(Spawner) && entity.owner !== PlayerType.Default
})

module.exports = { ActiveBuildingsQuery }
