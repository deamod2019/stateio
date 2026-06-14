/**
 * Restored source for Webpack Module #71981.
 *
 * Plays the skull pop effect between colliding fighter views.
 */
"use strict"

const { gsap } = require("./animationRuntime")
const { Random } = require("./RuntimeUtils")
const { lazyGet } = require("./RuntimeCore")
const { injectProperty, markInjectable } = require("./DecoratorHelpers")
const { Point, Sprite } = require("./pixiRuntime")
const { TypesGame } = require("./TypesGame")
const { FighterView } = require("./FighterView")
const { Action } = require("./Action")

class FighterDeathEffectAction extends Action {
  async execute(fighters) {
    for (let index = 0; index < fighters.length; index += 2) {
      const first = fighters[index]
      const second = fighters[index + 1]
      const firstView = first.get(FighterView)
      const secondView = second.get(FighterView)
      const firstPosition = firstView.position
      const secondPosition = secondView.position
      const skull = this.skull

      skull.tint = Random.from(first.color, second.color)
      skull.width = firstView.width
      skull.pivot.set(0.5)
      skull.scale.set(0.15)
      skull.position.set(
        (firstPosition.x + secondPosition.x) / 2,
        (firstPosition.y + secondPosition.y) / 2,
      )

      const start = new Point(
        (firstPosition.x + secondPosition.x) / 2,
        (firstPosition.y + secondPosition.y) / 2,
      )
      const end = start.clone()
      const endScale = skull.scale.clone()
      endScale.x *= 2
      endScale.y *= 2
      end.y -= 5 * skull.height

      gsap
        .timeline()
        .fromTo(skull, { x: start.x, y: start.y, alpha: 0 }, { x: end.x, y: end.y, alpha: 0.5 })
        .add(
          gsap.to(skull.scale, {
            x: endScale.x,
            y: endScale.y,
            onComplete: () => {
              skull.parent?.removeChild(skull)
            },
          }),
          0,
        )
        .add(gsap.to(skull, { alpha: 0 }), 0.3)

      lazyGet(TypesGame.views.fieldInstance)?.addChild(skull)
    }
  }
}

injectProperty(FighterDeathEffectAction, "skull", "skull.svg", Sprite)
markInjectable(FighterDeathEffectAction)

module.exports = { FighterDeathEffectAction }
