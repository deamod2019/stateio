/**
 * Restored source for Webpack Module #99629.
 *
 * Starts a State.io level: resolve/load level data, create the field instance,
 * attach it to the root view, and transition into lobby or gameplay.
 */
"use strict"

const core = require("./RuntimeCore")
const { di } = core
const { Types2D, TypesNotification } = require("./CoreTypes")
const { InputManager } = require("./InputManager")
const { GameState } = require("./GameState")
const RootView = require("./SIORootView").default
const { TypesGame } = require("./TypesGame")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { GameModel } = require("./GameModel")
const { LevelStartAction } = require("./LevelStartAction")

class LevelStartActionSIO extends LevelStartAction {
  async beforeLaunch() {
    await this.model.disposeCurrentLevel()

    if (!this.data) {
      await this._contextChangePromise
      this.contextData = this.model.getContextData()
    }

    const levelId =
      this.data ||
      this.contextData?.l ||
      GameModel.LEVELS_PREDEFINED[0]

    if (levelId && this.model.levels[levelId]) {
      await super.beforeLaunch()
      return
    }

    this.root.overlay.blur()
    this.root.spinner.show()
    this.model.state = GameState.LOADING

    const loadLevel = async () => {
      this.levelData = await di.get(TypesGame.actions.loadLevel).run(levelId)
    }

    await Promise.all([loadLevel(), super.beforeLaunch()])
  }

  async launch(levelId) {
    this.root.progressBar.hide()
    this.root.spinner.hide()
    this.root.overlay.unblur()

    const field = di.get(TypesGame.views.fieldClass)
    di.bind(TypesGame.views.fieldInstance).toConstantValue(field)
    this.root.addChild(field)

    const continent =
      this.model.levels[levelId] ||
      di.get(TypesGame.levelModel).init(this.levelData)
    continent.stageLevel = this.contextData?.c || 0
    this.model.setCurrentContinent(continent)

    if (!this.social.inSolo) {
      await core.lazyGet(TypesNotification.start)?.run()
    }

    await super.launch()
    this.inputManager.start()

    if (this.social.inSolo) {
      this.model.state = GameState.LOBBY
    } else {
      this.model.startStage()
    }
  }

  sendPush(levelId, data) {}
}

injectProperty(LevelStartActionSIO, "root", Types2D.rootView, RootView)
injectProperty(LevelStartActionSIO, "model", TypesGame.model, GameModel)
injectProperty(LevelStartActionSIO, "inputManager", TypesGame.inputManager, InputManager)
markInjectable(LevelStartActionSIO)

module.exports = { LevelStartActionSIO }
