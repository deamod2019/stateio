/**
 * Webpack Module #81717
 * @exports InputManagerBase
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.InputManagerBase = void 0))
  var n = (function () {
    function e() {
      ;((this._handler = this.onPointerEvent.bind(this)), (this._started = !1))
    }
    return (
      (e.prototype.init = function (e) {
        return ((this.canvas = e), this)
      }),
      (e.prototype.start = function () {
        this._started ||
          (this.canvas.addEventListener("pointerdown", this._handler),
          this.canvas.addEventListener("pointercancel", this._handler),
          this.canvas.addEventListener("pointerleave", this._handler),
          (this._started = !0))
      }),
      (e.prototype.onPointerEvent = function (e) {
        switch (e.type) {
          case "pointerdown":
            ;(this.onStart(e), this.addListeners())
            break
          case "pointermove":
            this.onDrag(e)
            break
          case "pointerup":
            ;(this.onDrag(e), this.onEnd(e))
          case "pointerleave":
          case "pointercancel":
            ;(this.removeListeners(), this.onCancel(e))
            break
          case "pointerout":
            e.target === e.currentTarget && this.removeListeners()
        }
      }),
      (e.prototype.onCancel = function (e) {}),
      (e.prototype.addListeners = function () {
        ;(this.canvas.addEventListener("pointerup", this._handler),
          this.canvas.addEventListener("pointermove", this._handler),
          this.canvas.addEventListener("pointerout", this._handler))
      }),
      (e.prototype.removeListeners = function () {
        ;(this.canvas.removeEventListener("pointerup", this._handler),
          this.canvas.removeEventListener("pointermove", this._handler),
          this.canvas.removeEventListener("pointerout", this._handler))
      }),
      (e.prototype.stop = function () {
        ;(this.canvas.removeEventListener("pointerdown", this._handler),
          this.canvas.removeEventListener("pointerup", this._handler),
          this.canvas.removeEventListener("pointermove", this._handler),
          this.canvas.removeEventListener("pointerout", this._handler),
          this.canvas.removeEventListener("pointercancel", this._handler),
          this.canvas.removeEventListener("pointerleave", this._handler),
          (this._started = !1))
      }),
      e
    )
  })()
  t.InputManagerBase = n
}
