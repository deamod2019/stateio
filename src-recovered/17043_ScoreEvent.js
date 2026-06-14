/**
 * Webpack Module #17043
 * @exports ScoreEvent, ScoreType
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.ScoreEvent = t.ScoreType = void 0),
    (function (e) {
      ;((e[(e.SESSION = 1)] = "SESSION"),
        (e[(e.CONTEXT = 2)] = "CONTEXT"),
        (e[(e.GLOBAL = 4)] = "GLOBAL"))
    })(t.ScoreType || (t.ScoreType = {})),
    (function (e) {
      ;((e.UPDATED = "UserScore.UPDATED"), (e.INCREASED = "UserScore.INCREASED"))
    })(t.ScoreEvent || (t.ScoreEvent = {})))
}
