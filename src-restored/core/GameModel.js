/**
 * Restored source for Webpack Module #94572.
 *
 * GameModel owns the current continent, ECS engine, gameplay state machine,
 * stage progression, screenshots, context score, and lobby/gameplay UI flow.
 */
"use strict"

const { Random, log } = require("./RuntimeUtils")
const { di, lazyGet } = require("./RuntimeCore")
const { lazyInjectToken, markInjectable } = require("./DecoratorHelpers")
const { GlobalEventProvider } = require("./GlobalEventProvider")
const {
  Types2D,
  TypesFlow,
  TypesSocial,
  TypesUI,
} = require("./CoreTypes")
const { UIEvents } = require("../ui/UIContext")
const { SIOConstants } = require("./SIOConstants")
const { FighterMovementSystem } = require("./FighterMovementSystem")
const { PathsGenerationSystem } = require("./PathsGenerationSystem")
const { GameState } = require("./GameState")
const { MetaModel } = require("./MetaModel")
const { TypesGame } = require("./TypesGame")
const { PopupType } = require("./PopupType")
const { Engine } = require("./ECSCore")
const { GameEvents } = require("./GameEvents")
const { PlayerType } = require("./PlayerType")
const { CookieModel } = require("./CookieModel")
const { Ticker } = require("./pixiRuntime")
const { DestroyFieldAction } = require("./DestroyFieldAction")
const { ScoreType } = require("./SocialAppExports")
const { InputSystem } = require("./InputSystem")
const { GamePlaySystem } = require("./GamePlaySystem")
const { InitStageSystem } = require("./InitStageSystem")
const { PopulationSystem } = require("./PopulationSystem")
const { BotsSystem } = require("./BotsSystem")
const { LevelEndSystem } = require("./LevelEndSystem")
const { TutorialSystem } = require("./TutorialSystem")
const { UpdateSkinsSystem } = require("./UpdateSkinsSystem")
const { ActiveBuildingsQuery } = require("./ActiveBuildingsQuery")
const { AllBuildingsQuery } = require("./AllBuildingsQuery")
const { SkinManager } = require("./SkinManager")

function runEndStageAction(win = false) {
  lazyGet(TypesGame.actions.endStage)?.run(win)
}

function runLevelEndAction(win = false) {
  lazyGet(TypesFlow.LevelEnd)?.run(win)
}

class GameModel extends GlobalEventProvider {
  constructor() {
    super()
    this.levels = {}
    this.engine = new Engine()
    this._engineTick = (delta = 0) => this.engine.update(delta)
    this.screenshots = []
    this.gameplaySystems = [
      new PopulationSystem(),
      new BotsSystem(),
      new GamePlaySystem(),
      new InputSystem(),
      new FighterMovementSystem(),
    ]
    this.paused = false
  }

  get currentContinent() {
    return this._currentContinent
  }

  offerX3() {
    return this.currentContinent.stageLevel % 2 === 0
  }

  setCurrentContinent(continent, stageLevel = 0) {
    if (this._currentContinent === continent) return

    this._currentContinent = continent
    this.engine.addQuery(ActiveBuildingsQuery)
    this.engine.addQuery(AllBuildingsQuery)
    this.engine.addSystem(new InitStageSystem(continent, continent.stageLevel))
  }

  startStage(continent = this._currentContinent) {
    this.screenshots.splice(0, Number.MAX_SAFE_INTEGER)
    continent.time.start()
    this.engine.addSystem(new InitStageSystem(continent, continent.stageLevel))
    this.engine.addSystem(new PathsGenerationSystem())
    this.state = GameState.GAMEPLAY
  }

  gotoNextLevelStage() {
    return this._state !== GameState.WIN_CONTINENT || (this.engine.clear(), false)
  }

  endStage(win = false, skipStage = false) {
    if (!win) {
      this.state = GameState.LOOSE
      return
    }

    if (skipStage) {
      this.currentContinent.stageLevel = this.currentContinent.data.stages.length
      this.cookie.currentStage = 0
      this.state = GameState.WIN_CONTINENT
      return
    }

    this.currentContinent.captureStage()
    this.incrementContextScore()
    this.cookie.currentStage = this.currentContinent.stageLevel

    if (this.currentContinent.isFinished) {
      this.cookie.currentStage = 0
      this.state = GameState.WIN_CONTINENT
    } else {
      this.state = GameState.WIN_STAGE
    }
  }

  restartLevel() {
    this.currentContinent.buildings.clear()
    this.engine.removeAllEntities()
    this.dispatch(GameEvents.RESTART_LEVEL)
  }

  get paused() {
    return this._paused
  }

  set paused(paused) {
    if (this._paused === paused) return

    this._paused = paused
    if (this._paused) {
      this._currentContinent?.time.pause()
      Ticker.shared.remove(this._engineTick)
    } else {
      this._currentContinent?.time.resume()
      Ticker.shared.add(this._engineTick)
    }
  }

  get state() {
    return this._state
  }

  set state(state) {
    if (this._state === state) return
    this._state = state
    this.onStateChanged()
  }

  async createFieldScreenShot() {
    const field = di.get(TypesGame.views.fieldInstance)
    const screenshot = await lazyGet(Types2D.screenShotAction)?.run({ image: field.map })

    if (screenshot) {
      this.screenshots.push(screenshot)
      while (this.screenshots.length > 2) {
        this.screenshots.shift()
      }
      return screenshot
    }

    log.warn("Screenshot creation failed")
  }

  exitTheGame() {
    this.paused = true
    this.dispatch(UIEvents.POPUP, {
      id: PopupType.CONFIRM,
      props: {
        onConfirm: async (playSolo = false) => {
          this.cookie.syncTime()

          if (playSolo) {
            if (!this.social.inSolo) {
              await this.social.playSolo()
              await di.get(TypesFlow.LevelStart).run()
            }
          }

          this.state = GameState.LOBBY
          this.paused = false
          this.dispatch(UIEvents.POPUP, { id: null })
        },
      },
    })
  }

  cancelTutorial() {
    const tutorialSystem = this.engine.getSystem(TutorialSystem)
    if (tutorialSystem) {
      this.engine.removeSystem(tutorialSystem)
    }
  }

  onStateChanged() {
    const stopGameplay = () => {
      this.dispatch(GameEvents.AIM_REMOVE)
      this.gameplaySystems.forEach((system) => this.engine.removeSystem(system))
      this.engine.addSystem(new LevelEndSystem())
      this.cancelTutorial()
    }

    switch (this._state) {
      case GameState.LOOSE:
        stopGameplay()
        runEndStageAction(false)
        break
      case GameState.WIN_STAGE:
        stopGameplay()
        this.createFieldScreenShot()
        runEndStageAction(true)
        break
      case GameState.WIN_CONTINENT:
        stopGameplay()
        this.createFieldScreenShot()
        runLevelEndAction(true)
        break
      case GameState.LOBBY:
        stopGameplay()
        this.dispatch(UIEvents.SCREEN_CHANGED, { id: TypesUI.screen.HOME })
        break
      case GameState.GAMEPLAY:
        this.gameplaySystems.forEach((system) => this.engine.addSystem(system))
        this.engine.addSystem(new TutorialSystem())
        this.dispatch(UIEvents.SCREEN_CHANGED, {
          id: TypesUI.screen.GAMEPLAY,
          props: { participants: this.getAssociatedUsers() },
        })
        break
    }

    log.debug("GameState ->", GameState[this._state])
    this.dispatch(GameEvents.STATE_CHANGED, this._state)
  }

  get absoluteLevelNum() {
    return this.cookie.absoluteLevelNum
  }

  getAssociatedUsers(stageLevel = this.currentContinent.stageLevel) {
    const social = this.social
    const associatedUsers = new Map()
    const players = social.inSolo ? [] : social.contextPlayers.slice(0)

    players.sort((player) => (player === social.me ? -1 : 0))

    const owners = new Set()
    this.currentContinent.parsed.forEach((state) => {
      if (state.stage === stageLevel) {
        owners.add(state.startOwner)
      }
    })

    const sortedOwners = Array.from(owners).sort((first, second) => first - second)
    for (let index = 0; index < sortedOwners.length; index++) {
      let user = null
      switch (sortedOwners[index]) {
        case PlayerType.First:
          user = players.shift()
          break
        case PlayerType.Neutral:
          break
        default:
          user = players.pop()
      }

      if (user) {
        associatedUsers.set(sortedOwners[index], user)
      }
    }

    return Array.from(associatedUsers, ([owner, data]) => ({
      owner,
      data,
      color: this.skinManager.getColorBy(owner)[0],
    }))
  }

  goToLobby() {
    this.state = GameState.LOBBY
    this.onStateChanged()
  }

  getOfflineEarning() {
    const date = new Date(this.cookie.timeDiff)
    const earningPerHour = this.meta.getOfflineEarning()
    let isRewarded = false
    let reward = 0
    const offlineSeconds = this.cookie.timeDiff / 1000

    if (offlineSeconds > 60 * SIOConstants.MIN_OFFLINE_EARNINGS_PERIOD_IN_MIN) {
      const rawReward = (earningPerHour / 60 / 60) * offlineSeconds
      if (rawReward >= 1) {
        isRewarded = true
        reward = Math.round(rawReward)
      }
    }

    return { isRewarded, reward, date }
  }

  getLevelNameByAbsoluteNum(absoluteLevelNum) {
    return GameModel.LEVELS_PREDEFINED[
      Math.floor(absoluteLevelNum % GameModel.LEVELS_PREDEFINED.length)
    ]
  }

  onShopScreenChanged() {
    this.skinManager.updateSkins()
    this.engine.addSystem(new UpdateSkinsSystem())
  }

  async disposeCurrentLevel() {
    await di.get(DestroyFieldAction).run()
    this._currentContinent?.dispose()
    this._currentContinent = null
    this.engine.clear()
    di.get(TypesGame.spritesPool).purge()
  }

  async incrementContextScore() {
    if (this.social.context_id && !this.social.inSolo) {
      lazyGet(TypesSocial.leaderboardContext)?.submit(
        this.social.me.scoreContext + 1,
        this.currentContinent.getHistory(),
      )
    }
  }

  getContextData() {
    if (this.social.inSolo) {
      return {
        l: this.getLevelNameByAbsoluteNum(this.absoluteLevelNum - 1),
        c: this.cookie.currentStage,
        s: [],
      }
    }

    if (this.social.context_id) {
      const entry = this.social.me.scores.getEntry(ScoreType.CONTEXT)
      const extraData = entry?.getExtraData()

      if (extraData) {
        const contextData = JSON.parse(extraData)
        if (contextData) {
          if ((contextData.c || 0) >= (contextData.s.length || Number.MAX_SAFE_INTEGER)) {
            const level = contextData.l || Random.from(GameModel.LEVELS_PREDEFINED)
            let nextLevelIndex = GameModel.LEVELS_PREDEFINED.indexOf(
              level.endsWith(".svg") ? level : `${level}.svg`,
            )
            if (nextLevelIndex === -1) nextLevelIndex = 0
            if (++nextLevelIndex >= GameModel.LEVELS_PREDEFINED.length) nextLevelIndex = 0

            contextData.l = GameModel.LEVELS_PREDEFINED[nextLevelIndex]
            contextData.s = []
            contextData.c = 0
            log.debug("new context data generated", contextData)
          }
          return contextData
        }
      }
    }

    return GameModel.DEFAULT_CTX_DATA
  }
}

GameModel.LEVELS_PREDEFINED = [
  "United-States.svg",
  "China.svg",
  "Africa.svg",
  "UK.svg",
  "EuropeanUnion.svg",
  "Italy.svg",
  "Arabic.svg",
  "Central-Asia.svg",
  "Japan.svg",
  "China,Russia,Korea,Japan.svg",
  "Korea.svg",
  "China-Oceania-Australia.svg",
  "United-States2.svg",
].filter((level, index, levels) => levels.indexOf(level) === index)

GameModel.DEFAULT_CTX_DATA = { l: GameModel.LEVELS_PREDEFINED[0], c: 0, s: [] }

lazyInjectToken(GameModel, "meta", MetaModel)
lazyInjectToken(GameModel, "cookie", TypesGame.cookieModel)
lazyInjectToken(GameModel, "social", TypesSocial.model)
lazyInjectToken(GameModel, "skinManager", TypesGame.skinManager)
markInjectable(GameModel)

module.exports = { GameModel }
