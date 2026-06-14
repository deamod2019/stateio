/**
 * Webpack Module #7514
 * @exports PauseOverlay
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.PauseOverlay = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(86125) /* 86125__mod */,
    s = n(86178) /* 86178__mod */,
    u = i.__importDefault(n(94184) /* 94184__mod */),
    l = n(30396) /* 30396__mod */,
    c = n(19562) /* 19562__mod */
  n(32115) /* 32115__mod */
  t.PauseOverlay = function () {
    var e = i.__read((0, l.useState)(false), 2),
      t = e[0],
      n = e[1],
      d = (0, c.useInjection)(s.TypesSocial.model)
    ;(undefined === d.showPauseOverlay || d.showPauseOverlay) &&
      (0, c.useEventListener)(
        o.CommonEvents.PAUSE,
        function (e) {
          return n(e)
        },
        [],
      )
    return (0, r.jsx)(
      "div",
      i.__assign(
        {
          className: (0, u.default)("pause__overlay", { hidden: !t }),
          onClick: function () {
            var e
            return null === (e = (0, o.lazyGet)(s.TypesSocial.pauseAction)) || undefined === e
              ? undefined
              : e.run(false)
          },
        },
        {
          children: (0, r.jsx)(
            "div",
            i.__assign(
              { className: "title" },
              { children: a.Localize.get("ui_tap_to_continue", "Tap to continue") },
            ),
          ),
        },
      ),
    )
  }
}
