/**
 * Restored source for Webpack Module #15006.
 *
 * Wires AIM events to the arrows view.
 */
"use strict"

const { Mediator } = require("./DisplayFramework")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { GameEvents } = require("./GameEvents")
const { TypesGame } = require("./TypesGame")
const { GameModel } = require("./GameModel")

class ArrowsMediator extends Mediator {
  initialize() {
    this.addListener(GameEvents.AIM_UPDATE, (event) => this.view.update(event))
    this.addListener(GameEvents.AIM_CREATE, (building) => this.view.createArrow(building))
    this.addListener(GameEvents.AIM_REMOVE, () => this.view.removeAim())
    this.addListener(GameEvents.AIM_SET, (target) => this.view.setAim(target))
    this.addListener(GameEvents.AIM_HIDE, (building) => this.view.hideArrow(building))
  }
}

injectProperty(ArrowsMediator, "model", TypesGame.model, GameModel)
markInjectable(ArrowsMediator)

module.exports = { ArrowsMediator }
