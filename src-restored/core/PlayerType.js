/**
 * Restored source for Webpack Module #36596.
 *
 * Numeric enum describing the player/owner slots used by buildings, fighters,
 * bots, and color lookup tables.
 */
"use strict"

const PlayerType = {}

PlayerType[(PlayerType.Default = 0)] = "Default"
PlayerType[(PlayerType.First = 1)] = "First"
PlayerType[(PlayerType.Second = 2)] = "Second"
PlayerType[(PlayerType.Third = 3)] = "Third"
PlayerType[(PlayerType.Fourth = 4)] = "Fourth"
PlayerType[(PlayerType.Fifth = 5)] = "Fifth"
PlayerType[(PlayerType.Sixth = 6)] = "Sixth"
PlayerType[(PlayerType.Seventh = 7)] = "Seventh"
PlayerType[(PlayerType.Eighth = 8)] = "Eighth"
PlayerType[(PlayerType.Nine = 9)] = "Nine"
PlayerType[(PlayerType.Neutral = 10)] = "Neutral"

module.exports = { PlayerType }
