/**
 * Restored source for Webpack Module #81717.
 *
 * Pointer event bridge that owns canvas listener lifecycle and delegates
 * gestures to subclasses.
 */
"use strict"

class InputManagerBase {
  constructor() {
    this._handler = this.onPointerEvent.bind(this)
    this._started = false
  }

  init(canvas) {
    this.canvas = canvas
    return this
  }

  start() {
    if (this._started) return

    this.canvas.addEventListener("pointerdown", this._handler)
    this.canvas.addEventListener("pointercancel", this._handler)
    this.canvas.addEventListener("pointerleave", this._handler)
    this._started = true
  }

  onPointerEvent(event) {
    switch (event.type) {
      case "pointerdown":
        this.onStart(event)
        this.addListeners()
        break
      case "pointermove":
        this.onDrag(event)
        break
      case "pointerup":
        this.onDrag(event)
        this.onEnd(event)
      case "pointerleave":
      case "pointercancel":
        this.removeListeners()
        this.onCancel(event)
        break
      case "pointerout":
        if (event.target === event.currentTarget) {
          this.removeListeners()
        }
    }
  }

  onCancel(event) {}

  addListeners() {
    this.canvas.addEventListener("pointerup", this._handler)
    this.canvas.addEventListener("pointermove", this._handler)
    this.canvas.addEventListener("pointerout", this._handler)
  }

  removeListeners() {
    this.canvas.removeEventListener("pointerup", this._handler)
    this.canvas.removeEventListener("pointermove", this._handler)
    this.canvas.removeEventListener("pointerout", this._handler)
  }

  stop() {
    this.canvas.removeEventListener("pointerdown", this._handler)
    this.canvas.removeEventListener("pointerup", this._handler)
    this.canvas.removeEventListener("pointermove", this._handler)
    this.canvas.removeEventListener("pointerout", this._handler)
    this.canvas.removeEventListener("pointercancel", this._handler)
    this.canvas.removeEventListener("pointerleave", this._handler)
    this._started = false
  }
}

module.exports = { InputManagerBase }
