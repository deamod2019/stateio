/**
 * Restored source for Webpack Module #65370.
 *
 * Numeric enum for the high-level game flow state machine.
 */
"use strict"

const GameState = {}

GameState[(GameState.LOBBY = 0)] = "LOBBY"
GameState[(GameState.WIN_STAGE = 1)] = "WIN_STAGE"
GameState[(GameState.WIN_CONTINENT = 2)] = "WIN_CONTINENT"
GameState[(GameState.LOOSE = 3)] = "LOOSE"
GameState[(GameState.LOADING = 4)] = "LOADING"
GameState[(GameState.GAMEPLAY = 5)] = "GAMEPLAY"

module.exports = { GameState }
