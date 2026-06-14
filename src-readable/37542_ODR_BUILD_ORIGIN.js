/**
 * Webpack Module #37542
 * @exports ODR_BUILD_ORIGIN, IS_ODR_BUILD, GAME_SCRIPT_ORIGIN, CANVAS_ID, CommonEvents
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.ODR_BUILD_ORIGIN =
      t.IS_ODR_BUILD =
      t.GAME_SCRIPT_ORIGIN =
      t.CANVAS_ID =
      t.CommonEvents =
        undefined),
    (function (e) {
      ;((e.UPDATED = "updated"), (e.PAUSE = "pause"))
    })(t.CommonEvents || (t.CommonEvents = {})),
    (t.CANVAS_ID = "game-canvas"),
    (t.GAME_SCRIPT_ORIGIN =
      (function () {
        var e = Array.from(window.document.getElementsByTagName("script"))
          .filter(function (e) {
            return -1 !== e.src.indexOf("firebaseapp.com")
          })
          .filter(function (e) {
            return e.src.indexOf("main.js")
          })
          .map(function (e) {
            return e.src
          })[0]
        if (e) return e.substr(0, e.lastIndexOf("/") + 1)
      })() || ""),
    (t.IS_ODR_BUILD = false),
    (t.ODR_BUILD_ORIGIN = (t.IS_ODR_BUILD, "")))
}
