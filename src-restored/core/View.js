/**
 * Restored source for Webpack Module #25487.
 *
 * Pixi container base class that propagates scene add/remove lifecycle events
 * and connects a mediator when the view enters the scene.
 */
"use strict"

const { Container } = require("./pixiRuntime")
const { applyClassMetadata, markInjectable } = require("./DecoratorHelpers")

class View extends Container {
  constructor(...args) {
    super(...args)
    this._addedToScene = false
    this.on(View.ADDED_TO_SCENE, this.onAdded).on(View.REMOVED_FROM_SCENE, this.onRemoved)
  }

  set mediator(value) {
    this._mediator = value
  }

  get addedToScene() {
    return this._addedToScene
  }

  addChild(child, ...children) {
    const addedChild = super.addChild(child, ...children)
    return this.postAddChild(addedChild)
  }

  addChildAt(child, index) {
    return this.postAddChild(super.addChildAt(child, index))
  }

  removeChild(child) {
    return this.postRemoveChild(super.removeChild(child))
  }

  removeChildAt(index) {
    return this.postRemoveChild(super.removeChildAt(index))
  }

  onAdded() {
    if (this._addedToScene) return

    this._addedToScene = true
    for (const child of this.children) {
      child.emit(View.ADDED_TO_SCENE)
    }
    this._mediator?.setView(this)
  }

  onRemoved() {
    if (!this._addedToScene) return

    this._addedToScene = false
    this._mediator?.destroy()
    for (const child of this.children) {
      child.emit(View.REMOVED_FROM_SCENE)
    }
  }

  destroy() {
    this.off(View.ADDED_TO_SCENE, this.onAdded).off(View.REMOVED_FROM_SCENE, this.onRemoved)
    super.destroy()
  }

  postAddChild(child) {
    if (this._addedToScene && child) child.emit(View.ADDED_TO_SCENE)
    return child
  }

  postRemoveChild(child) {
    if (this._addedToScene && child) child.emit(View.REMOVED_FROM_SCENE)
    return child
  }

  get debugId() {
    return `v_${this.constructor.name}`
  }
}

View.ADDED_TO_SCENE = "onAddedToScene"
View.REMOVED_FROM_SCENE = "onRemovedFromScene"

markInjectable(View)
applyClassMetadata(View, "design:paramtypes", [])

module.exports = { View }
