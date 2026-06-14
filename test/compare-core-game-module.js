"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { Types2D, TypesFlow } = require("../src-cjs/86178__mod.js")
const { TypesGame } = require("../src-cjs/95781_TypesGame.js")
const { CoreGameModule: OriginalCoreGameModule } = require("../src-cjs/59201_CoreGameModule.js")
const { CoreGameModule: RestoredCoreGameModule } = require("../src-restored/core/CoreGameModule.js")

const { LevelStartActionSIO } = require("../src-restored/core/LevelStartActionSIO.js")
const { LevelRestartActionSIO } = require("../src-restored/core/LevelRestartActionSIO.js")
const { LevelNextActionSIO } = require("../src-restored/core/LevelNextActionSIO.js")
const { LevelEndActionSIO } = require("../src-restored/core/LevelEndActionSIO.js")
const { PlayWithOpponentActionSIO } = require("../src-restored/core/PlayWithOpponentActionSIO.js")
const { StageEndAction } = require("../src-restored/core/StageEndAction.js")
const { ScreenShotActionSIO } = require("../src-restored/core/ScreenShotActionSIO.js")
const { StartGameAction } = require("../src-restored/core/StartGameAction.js")
const { ShowGiftPopupAction } = require("../src-restored/core/ShowGiftPopupAction.js")
const { ShowWinPopupAction } = require("../src-restored/core/ShowWinPopupAction.js")
const { BattleResultsPopupAction } = require("../src-restored/core/BattleResultsPopupAction.js")
const { SubmitContextScoreAction } = require("../src-restored/core/SubmitContextScoreAction.js")
const { LevelCompletedPopupAction } = require("../src-restored/core/LevelCompletedPopupAction.js")
const { LoadLevelAction } = require("../src-restored/core/LoadLevelAction.js")
const { GameModel } = require("../src-restored/core/GameModel.js")
const { ContinentModel } = require("../src-restored/core/ContinentModel.js")
const { BotLogic } = require("../src-restored/core/BotLogic.js")
const { BotCalculationLogic } = require("../src-restored/core/BotCalculationLogic.js")
const { DestroyFieldAction } = require("../src-restored/core/DestroyFieldAction.js")
const { FighterDeathEffectAction } = require("../src-restored/core/FighterDeathEffectAction.js")
const { GenerateMapShapeAction } = require("../src-restored/core/GenerateMapShapeAction.js")
const { GenerateMapSpriteAction } = require("../src-restored/core/GenerateMapSpriteAction.js")
const { GenerateShareImageAction } = require("../src-restored/core/GenerateShareImageAction.js")
const { TutorialFingerView } = require("../src-restored/core/TutorialFingerView.js")
const { Building } = require("../src-restored/core/Building.js")
const { Field } = require("../src-restored/core/Field.js")
const { Spawner } = require("../src-restored/core/Spawner.js")
const { Fighter } = require("../src-restored/core/Fighter.js")
const { FieldView } = require("../src-restored/core/FieldView.js")
const { FighterView } = require("../src-restored/core/FighterView.js")
const { CapitalView } = require("../src-restored/core/CapitalView.js")
const { StateShapeView } = require("../src-restored/core/StateShapeView.js")
const { Population } = require("../src-restored/core/Population.js")
const { ArrowView } = require("../src-restored/core/ArrowView.js")
const { ArrowsView } = require("../src-restored/core/ArrowsView.js")
const { BurstWaveAction } = require("../src-restored/core/BurstWaveAction.js")
const { SkinManager } = require("../src-restored/core/SkinManager.js")
const { InputManager } = require("../src-restored/core/InputManager.js")
const { ProgressBar } = require("../src-restored/core/ProgressBar.js")
const {
  TournamentCreateAction,
  TournamentPostScoreAction,
  TournamentShareAction,
} = require("../src-restored/core/TournamentActions.js")
const SIORootView = require("../src-restored/core/SIORootView.js").default

const originalBindings = recordBindings(OriginalCoreGameModule)
const restoredBindings = recordBindings(RestoredCoreGameModule)

assert.deepEqual(
  restoredBindings.records,
  originalBindings.records,
  "restored CoreGameModule binding topology differs",
)

const expectedRestoredTargets = new Map([
  [TypesFlow.LevelStart, LevelStartActionSIO],
  [TypesFlow.LevelRestart, LevelRestartActionSIO],
  [TypesFlow.LevelNext, LevelNextActionSIO],
  [TypesFlow.LevelEnd, LevelEndActionSIO],
  [TypesFlow.PlayWith, PlayWithOpponentActionSIO],
  [Types2D.rootView, SIORootView],
  [TypesGame.actions.startGame, StartGameAction],
  [TypesGame.actions.giftPopup, ShowGiftPopupAction],
  [TypesGame.actions.levelCompletePopup, LevelCompletedPopupAction],
  [TypesGame.actions.loadLevel, LoadLevelAction],
  [TypesGame.actions.winPopup, ShowWinPopupAction],
  [TypesGame.actions.battleResultsPopup, BattleResultsPopupAction],
  [TypesGame.actions.submitContextScore, SubmitContextScoreAction],
  [TypesGame.actions.endStage, StageEndAction],
  [TypesGame.actions.tournamentReShare, TournamentShareAction],
  [TypesGame.actions.tournamentCreate, TournamentCreateAction],
  [TypesGame.actions.tournamentPostScore, TournamentPostScoreAction],
  [Types2D.screenShotAction, ScreenShotActionSIO],
  [TypesGame.model, GameModel],
  [TypesGame.levelModel, ContinentModel],
  [TypesGame.botLogic, BotLogic],
  [TypesGame.botCalculationLogic, BotCalculationLogic],
  [DestroyFieldAction, DestroyFieldAction],
  [FighterDeathEffectAction, FighterDeathEffectAction],
  [TypesGame.actions.createMapPart, GenerateMapShapeAction],
  [TypesGame.actions.createMap, GenerateMapSpriteAction],
  [GenerateShareImageAction, GenerateShareImageAction],
  [TutorialFingerView, TutorialFingerView],
  [Building, Building],
  [Field, Field],
  [Spawner, Spawner],
  [Fighter, Fighter],
  [TypesGame.views.fieldClass, FieldView],
  [TypesGame.views.fighter, FighterView],
  [TypesGame.views.state, CapitalView],
  [TypesGame.views.stateShape, StateShapeView],
  [TypesGame.views.population, Population],
  [TypesGame.views.arrow, ArrowView],
  [TypesGame.views.arrows, ArrowsView],
  [TypesGame.actions.burst, BurstWaveAction],
  [TypesGame.skinManager, SkinManager],
  [TypesGame.inputManager, InputManager],
])

for (const [token, expectedTarget] of expectedRestoredTargets) {
  assert.equal(
    restoredBindings.targets.get(token),
    expectedTarget,
    `restored CoreGameModule target mismatch for ${tokenLabel(token)}`,
  )
}

assert.equal(restoredBindings.targets.get(ProgressBar), ProgressBar)

console.log(
  JSON.stringify(
    {
      module: "CoreGameModule",
      bindingEvents: restoredBindings.records.length,
      restoredTargetsChecked: expectedRestoredTargets.size,
      status: "ok",
    },
    null,
    2,
  ),
)

function recordBindings(containerModule) {
  const records = []
  const targets = new Map()

  function makeBind(kind) {
    return function bind(token) {
      records.push([kind, topologyTokenLabel(token)])
      return makeSyntax(records, targets, token)
    }
  }

  containerModule.registry(
    makeBind("bind"),
    (token) => records.push(["unbind", topologyTokenLabel(token)]),
    (token) => {
      records.push(["isBound", topologyTokenLabel(token)])
      return false
    },
    makeBind("rebind"),
  )

  return { records, targets }
}

function makeSyntax(records, targets, token) {
  const syntax = {
    to(target) {
      records.push(["to"])
      targets.set(token, target)
      return syntax
    },
    toSelf() {
      records.push(["toSelf"])
      targets.set(token, token)
      return syntax
    },
    inSingletonScope() {
      records.push(["inSingletonScope"])
      return syntax
    },
    onActivation(callback) {
      records.push(["onActivation", typeof callback])
      return syntax
    },
  }
  return syntax
}

function tokenLabel(token) {
  if (typeof token === "function") return token.name || "(anonymous function)"
  return String(token)
}

function topologyTokenLabel(token) {
  if (typeof token === "function") return "FunctionToken"
  return String(token)
}
