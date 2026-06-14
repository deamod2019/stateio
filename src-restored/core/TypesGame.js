/**
 * Restored source for Webpack Module #95781.
 *
 * TypesGame is a DI-token object made from unique Symbols. While some modules
 * still load through the CJS snapshot, this module also seeds the original
 * module cache entry so both restored and remaining CJS consumers receive the
 * same token identities.
 */
"use strict"

const originalModulePath = require.resolve("../../src-cjs/95781_TypesGame.js")
const cachedOriginal = require.cache[originalModulePath]?.exports?.TypesGame

const TypesGame = cachedOriginal || createTypesGame()

if (!cachedOriginal) {
  require.cache[originalModulePath] = {
    id: originalModulePath,
    filename: originalModulePath,
    loaded: true,
    exports: { TypesGame },
  }
}

module.exports = { TypesGame }

function createToken(description) {
  return Symbol(description)
}

function createTypesGame() {
  return {
    model: createToken(),
    cookieModel: createToken(),
    levelModel: createToken(),
    inputManager: createToken(),
    skinManager: createToken(),
    spritesPool: createToken(),
    actions: {
      startGame: createToken(),
      burst: createToken(),
      createMap: createToken(),
      createMapPart: createToken(),
      submitContextScore: createToken(),
      endStage: createToken(),
      giftPopup: createToken(),
      levelCompletePopup: createToken(),
      loadLevel: createToken(),
      battleResultsPopup: createToken(),
      winPopup: createToken(),
      tournamentCreate: createToken(),
      tournamentPostScore: createToken(),
      tournamentReShare: createToken(),
      suggestAuthorizeAction: createToken(),
      syncYandexLeaderboardsAction: createToken(),
      levelRestartAfterYandexLoginAction: createToken(),
      bannerControllerGameDistribution: createToken(),
    },
    botLogic: createToken(),
    botCalculationLogic: createToken(),
    views: {
      fieldClass: createToken(),
      fieldInstance: createToken(),
      fighter: createToken(),
      arrows: createToken(),
      arrow: createToken(),
      state: createToken(),
      stateShape: createToken(),
      population: createToken(),
    },
  }
}
