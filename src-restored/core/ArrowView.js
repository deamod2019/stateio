/**
 * Restored source for Webpack Module #10910.
 *
 * Single drag-aim arrow display object.
 */
"use strict"

const { View } = require("./DisplayFramework")
const { Container, Graphics } = require("./pixiRuntime")
const { markInjectable } = require("./DecoratorHelpers")

const ARROW_COLOR = 6258909

class ArrowView extends View {
  constructor(...args) {
    super(...args)
    this.arrowCont = new Container()
    this.arrowTip = new Graphics()
    this.graphics = new Graphics().beginFill(ARROW_COLOR, 0.7).drawRect(0, 0, 20, 20).endFill()
  }

  onAdded() {
    this.arrowTip.beginFill(ARROW_COLOR, 0.7).lineTo(-20, 0).lineTo(0, 30).lineTo(20, 0).endFill()
    this.addChild(this.arrowCont)
    this.graphics.x = 0.5 * -this.graphics.width
    this.arrowCont.addChild(this.graphics)
    this.arrowCont.addChild(this.arrowTip)
    super.onAdded()
  }

  setUpDirection(point, skip = false) {
    void skip
    const local = this.toLocal(point)
    const length = Math.sqrt(local.x * local.x + local.y * local.y)
    this.visible = length > this.arrowTip.height
    this.arrowTip.y = this.graphics.height = length - this.arrowTip.height
    this.arrowCont.rotation = Math.atan2(local.y, local.x) - Math.PI / 2
  }
}

markInjectable(ArrowView)

module.exports = { ArrowView }
