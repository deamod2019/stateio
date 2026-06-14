/**
 * Restored source for Webpack Module #59201.
 *
 * Main gameplay DI module. The binding topology mirrors the original module,
 * while restored gameplay classes are wired into the container where available.
 */
"use strict"

const { Types2D, TypesFlow } = require("./CoreTypes")
const pixiUi = require("./SIOPixiExports")
const core = require("./RuntimeCore")
const { bindMediator } = require("./DisplayFramework")
const { TypesGame } = require("./TypesGame")
const { ContainerModule, decorate, injectable } = require("./diRuntime")
const RootView = require("./SIORootView").default
const { Entity } = require("./ECSCore")
const { MetaModel } = require("./MetaModel")
const { RootMediator } = require("./SIORootMediator")
const { CookieModel } = require("./CookieModel")
const { SubmitContextScoreAction } = require("./SubmitContextScoreAction")
const { SpritesPool } = require("./SpritesPool")
const {
  TournamentCreateAction,
  TournamentPostScoreAction,
  TournamentShareAction,
} = require("./TournamentActions")

const { StartGameAction } = require("./StartGameAction")
const { ShowGiftPopupAction } = require("./ShowGiftPopupAction")
const { ShowWinPopupAction } = require("./ShowWinPopupAction")
const { BattleResultsPopupAction } = require("./BattleResultsPopupAction")
const { LevelCompletedPopupAction } = require("./LevelCompletedPopupAction")
const { LoadLevelAction } = require("./LoadLevelAction")
const { LevelStartActionSIO } = require("./LevelStartActionSIO")
const { LevelRestartActionSIO } = require("./LevelRestartActionSIO")
const { LevelNextActionSIO } = require("./LevelNextActionSIO")
const { LevelEndActionSIO } = require("./LevelEndActionSIO")
const { PlayWithOpponentActionSIO } = require("./PlayWithOpponentActionSIO")
const { StageEndAction } = require("./StageEndAction")
const { ScreenShotActionSIO } = require("./ScreenShotActionSIO")
const { GameModel } = require("./GameModel")
const { ContinentModel } = require("./ContinentModel")
const { FieldMediator } = require("./FieldMediator")
const { ArrowsMediator } = require("./ArrowsMediator")
const { ArrowsView } = require("./ArrowsView")
const { ArrowView } = require("./ArrowView")
const { FieldView } = require("./FieldView")
const { StateShapeView } = require("./StateShapeView")
const { CapitalView } = require("./CapitalView")
const { Population } = require("./Population")
const { BurstWaveAction } = require("./BurstWaveAction")
const { Building } = require("./Building")
const { Field } = require("./Field")
const { Spawner } = require("./Spawner")
const { Fighter } = require("./Fighter")
const { FighterView } = require("./FighterView")
const { BotLogic } = require("./BotLogic")
const { BotCalculationLogic } = require("./BotCalculationLogic")
const { FighterDeathEffectAction } = require("./FighterDeathEffectAction")
const { TutorialFingerView } = require("./TutorialFingerView")
const { DestroyFieldAction } = require("./DestroyFieldAction")
const { GenerateMapShapeAction } = require("./GenerateMapShapeAction")
const { GenerateMapSpriteAction } = require("./GenerateMapSpriteAction")
const { GenerateShareImageAction } = require("./GenerateShareImageAction")
const { SkinManager } = require("./SkinManager")
const { InputManagerBase } = require("./InputManagerBase")
const { InputManager } = require("./InputManager")

safeDecorateInjectable(Entity)
safeDecorateInjectable(InputManagerBase)

const CoreGameModule = new ContainerModule((bind, unbind, isBound, rebind) => {
  bind(TypesGame.actions.startGame).to(StartGameAction)
  bind(TypesGame.actions.giftPopup).to(ShowGiftPopupAction)
  bind(TypesGame.actions.levelCompletePopup).to(LevelCompletedPopupAction)
  bind(TypesGame.actions.battleResultsPopup).to(BattleResultsPopupAction)
  bind(TypesGame.actions.tournamentReShare).to(TournamentShareAction)
  bind(TypesGame.actions.tournamentCreate).to(TournamentCreateAction)
  bind(TypesGame.actions.tournamentPostScore).to(TournamentPostScoreAction)
  bind(TypesGame.actions.winPopup).to(ShowWinPopupAction)
  bind(TypesGame.actions.loadLevel).to(LoadLevelAction)
  bind(TypesGame.spritesPool).to(SpritesPool).inSingletonScope()
  bind(TypesGame.model).to(GameModel).inSingletonScope()
  bind(TypesGame.levelModel).to(ContinentModel)
  bind(TypesGame.botLogic).to(BotLogic)
  bind(TypesGame.botCalculationLogic).to(BotCalculationLogic)
  rebind(TypesFlow.LevelStart).to(LevelStartActionSIO)
  rebind(TypesFlow.LevelRestart).to(LevelRestartActionSIO)
  rebind(TypesFlow.LevelNext).to(LevelNextActionSIO)
  rebind(TypesFlow.LevelEnd).to(LevelEndActionSIO)
  rebind(TypesFlow.PlayWith).to(PlayWithOpponentActionSIO)
  bind(TypesGame.actions.endStage).to(StageEndAction)
  bind(TypesGame.actions.submitContextScore).to(SubmitContextScoreAction)
  bind(pixiUi.ProgressBar).toSelf()
  rebind(Types2D.rootView)
    .to(RootView)
    .inSingletonScope()
    .onActivation(bindMediator(RootMediator))
  rebind(Types2D.screenShotAction).to(ScreenShotActionSIO)
  bind(DestroyFieldAction).toSelf()
  bind(FighterDeathEffectAction).toSelf()
  bind(TypesGame.actions.createMapPart).to(GenerateMapShapeAction)
  bind(TypesGame.actions.createMap).to(GenerateMapSpriteAction)
  bind(GenerateShareImageAction).toSelf()
  bind(MetaModel).toSelf().inSingletonScope()
  bind(TypesGame.cookieModel).to(CookieModel).inSingletonScope()
  bind(TutorialFingerView).toSelf()
  bind(Building).toSelf()
  bind(Field).toSelf()
  bind(Spawner).toSelf()
  bind(Fighter).toSelf()
  bind(TypesGame.views.fieldClass)
    .to(FieldView)
    .onActivation(bindMediator(FieldMediator))
  bind(TypesGame.views.fighter).to(FighterView)
  bind(TypesGame.views.state).to(CapitalView)
  bind(TypesGame.views.stateShape).to(StateShapeView)
  bind(TypesGame.views.population).to(Population)
  bind(TypesGame.views.arrow).to(ArrowView)
  bind(TypesGame.views.arrows)
    .to(ArrowsView)
    .onActivation(bindMediator(ArrowsMediator))
  bind(TypesGame.actions.burst).to(BurstWaveAction)
  bind(TypesGame.skinManager).to(SkinManager).inSingletonScope()
  bind(TypesGame.inputManager)
    .to(InputManager)
    .inSingletonScope()
    .onActivation((context, inputManager) => inputManager.init(document.getElementById(core.CANVAS_ID)))
})

module.exports = { CoreGameModule }

function safeDecorateInjectable(target) {
  try {
    decorate(injectable(), target)
  } catch (error) {
    if (!String(error?.message || error).includes("Cannot apply @injectable decorator multiple times")) {
      throw error
    }
  }
}
