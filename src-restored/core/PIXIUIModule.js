/**
 * Restored source for Webpack Module #90399.
 *
 * Pixi UI dependency-injection module. Uses restored display and action
 * classes where they are already verified.
 */
"use strict"

const pixi = require("./pixiRuntime")
const {
  ContainerModule,
  injectable,
} = require("./diRuntime")
const { Types2D } = require("./CoreTypes")
const { ScreenshotAction } = require("./ScreenshotAction")
const { PreloadAssetsAction } = require("./PreloadAssetsAction")
const { RootView } = require("./RootView")
const { RootMediator } = require("./RootMediator")
const { bindMediator } = require("./DisplayFramework")
const pixiUi = require("./PixiUIExports")

decorateInjectable(pixi.utils.EventEmitter)
decorateInjectable(pixi.Container)
decorateInjectable(pixi.DisplayObject)
decorateInjectable(pixi.Sprite)

const PIXIUIModule = new ContainerModule((bind) => {
  bind(Types2D.screenContainer).to(pixiUi.ScreenContainer)
  bind(Types2D.overlay).to(pixiUi.Overlay)
  bind(Types2D.finger).to(pixiUi.FingerView)
  bind(Types2D.preloadAssetsAction).to(PreloadAssetsAction)
  bind(Types2D.screenShotAction).to(ScreenshotAction)
  bind(Types2D.blackSquareGraphics).toDynamicValue(() =>
    new pixi.Graphics().beginFill(0).drawRect(0, 0, 10, 10).endFill(),
  )
  bind(Types2D.whiteSquareGraphics).toDynamicValue(() =>
    new pixi.Graphics().beginFill(0xffffff).drawRect(0, 0, 10, 10).endFill(),
  )
  bind(Types2D.spinner).to(pixiUi.Spinner)
  bind(Types2D.userPic).to(pixiUi.UserPic)
  bind(Types2D.circleAvatar).to(pixiUi.CircleAvatar)
  bind(Types2D.rootView).to(RootView).inSingletonScope().onActivation(bindMediator(RootMediator))
})

module.exports = { PIXIUIModule }

function decorateInjectable(target) {
  try {
    injectable()(target)
  } catch (error) {
    if (!String(error?.message || error).includes("Cannot apply @injectable decorator multiple times")) {
      throw error
    }
  }
}
