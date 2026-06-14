/**
 * Webpack Module #85126
 * @exports PathHolder
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.PathHolder = undefined))
  var n = (function () {
    function e() {
      this._cachedWays = new Map()
    }
    return (
      (e.prototype.addPath = function (e, t) {
        this._cachedWays.set(e.stateId, t)
      }),
      (e.prototype.get = function (e) {
        return this._cachedWays.get(e.stateId)
      }),
      (e.prototype.getPath = function (e) {
        return this._cachedWays.get(e)
      }),
      (e.prototype.getPathWidth = function () {
        return e.MAX_SPAWN_LEN_ONE_DIRECTION
      }),
      (e.prototype.clearCache = function () {
        this._cachedWays.clear()
      }),
      (e.MAX_SPAWN_LEN_ONE_DIRECTION = 30),
      e
    )
  })()
  t.PathHolder = n
}
