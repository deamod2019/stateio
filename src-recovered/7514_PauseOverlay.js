/**
 * Webpack Module #7514
 * @exports PauseOverlay
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.PauseOverlay = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(44656),
    a = n(86125),
    s = n(86178),
    u = i.__importDefault(n(94184)),
    l = n(30396),
    c = n(19562)
  n(32115)
  t.PauseOverlay = function () {
    var e = i.__read((0, l.useState)(!1), 2),
      t = e[0],
      n = e[1],
      d = (0, c.useInjection)(s.TypesSocial.model)
    ;(void 0 === d.showPauseOverlay || d.showPauseOverlay) &&
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
            return null === (e = (0, o.lazyGet)(s.TypesSocial.pauseAction)) || void 0 === e
              ? void 0
              : e.run(!1)
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
