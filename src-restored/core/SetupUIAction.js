/**
 * Restored source for Webpack Module #94732.
 *
 * Renders the HTML UI root into the game container and binds the root instance
 * into the DI container when Preact creates its ref.
 */
"use strict"

const core = require("./RuntimeCore")
const { Action } = require("./Action")
const { TypesSocial, TypesUI } = require("./CoreTypes")
const { injectProperty, lazyInjectProperty, markInjectable } = require("./DecoratorHelpers")
const preact = require("../ui/preactRuntime")

class SetupUIAction extends Action {
  async execute(container) {
    preact.render(
      preact.h(this.UIRootClass, {
        ref: (root) => this.onRefCreated(root),
      }),
      container || document.getElementById(core.CANVAS_ID).parentElement,
    )
  }

  onRefCreated(root) {
    core.di.bind(TypesUI.root).toConstantValue(root)
    root.base?.classList.add(`sn-${this.social.socialPlatform}`)
    if (this.social.socialPlatform === "vk" && core.IS_ODR_BUILD) {
      root.base?.classList.add("odr-build")
    }
  }
}

injectProperty(SetupUIAction, "social", TypesSocial.model, Object)
lazyInjectProperty(SetupUIAction, "UIRootClass", TypesUI.uiRootClass, Object)
markInjectable(SetupUIAction)

module.exports = { SetupUIAction }
