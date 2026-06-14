/**
 * Restored source for Webpack Module #88969.
 *
 * Bridges ECS view components into the FieldView display containers.
 */
"use strict"

const { ReactionSystem } = require("./ECSCore")
const { Population } = require("./Population")
const { StateShapeView } = require("./StateShapeView")
const { CapitalView } = require("./CapitalView")
const { TutorialFingerView } = require("./TutorialFingerView")

class DisplaySystem extends ReactionSystem {
  constructor(fieldView) {
    super((entity) =>
      entity.hasAny(Population, StateShapeView, CapitalView, TutorialFingerView),
    )

    this.fieldView = fieldView

    this.entityAdded = (snapshot) => {
      const entity = snapshot.current
      const population = entity.get(Population)
      const shape = entity.get(StateShapeView)
      const capital = entity.get(CapitalView)
      const tutorialFinger = entity.get(TutorialFingerView)

      if (population) this.fieldView.labels.addChild(population)
      if (shape) this.fieldView.shapes.addChild(shape)
      if (capital) this.fieldView.capitals.addChild(capital)
      if (tutorialFinger) this.fieldView.addChild(tutorialFinger)
    }

    this.entityRemoved = (snapshot) => {
      const entity = snapshot.previous
      ;[Population, StateShapeView, CapitalView, TutorialFingerView].forEach((componentClass) => {
        const component = entity.get(componentClass)
        component?.parent?.removeChild(component)
      })
    }
  }
}

module.exports = { DisplaySystem }
