/**
 * Webpack Module #10357
 * @exports SocialEvents, SOCIAL_POPUP
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.SocialEvents = t.SOCIAL_POPUP = undefined),
    (function (e) {
      ;((e[(e.ACCEPTED = 0)] = "ACCEPTED"),
        (e[(e.CANCELLED = 1)] = "CANCELLED"),
        (e[(e.REJECTED = 2)] = "REJECTED"),
        (e[(e.FAILED = 3)] = "FAILED"))
    })(t.SOCIAL_POPUP || (t.SOCIAL_POPUP = {})),
    (function (e) {
      ;((e.CONTEXT_CHANGE = "context_change"),
        (e.SHOW_OVERLAY = "show_social_overlay"),
        (e.HIDE_OVERLAY = "hide_social_overlay"))
    })(t.SocialEvents || (t.SocialEvents = {})))
}
