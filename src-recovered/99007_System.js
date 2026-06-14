/**
 * Webpack Module #99007
 * @exports System
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.System = void 0))
  var n = (function () {
    function e() {
      this._priority = 0
    }
    return (
      Object.defineProperty(e.prototype, "engine", {
        get: function () {
          if (void 0 === this._engine)
            throw new Error(
              'Property "engine" can\'t be accessed when system is not added to the engine',
            )
          return this._engine
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "sharedConfig", {
        get: function () {
          if (void 0 === this._engine)
            throw new Error(
              'Property "sharedConfig" can\'t be accessed when system is not added to the engine',
            )
          return this._engine.sharedConfig
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "priority", {
        get: function () {
          return this._priority
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.update = function (e) {}),
      (e.prototype.onAddedToEngine = function () {}),
      (e.prototype.onRemovedFromEngine = function () {}),
      (e.prototype.dispatch = function (e) {
        if (void 0 === this._engine)
          throw new Error(
            "Dispatching a message can't be done while system is not attached to the engine",
          )
        this.engine.dispatch(e)
      }),
      (e.prototype.setEngine = function (e) {
        this._engine = e
      }),
      (e.prototype.setPriority = function (e) {
        this._priority = e
      }),
      e
    )
  })()
  t.System = n
}
