/**
 * Webpack Module #53309
 * @exports TapToPlayButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.TapToPlayButton = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(86125),
    a = n(44656),
    s = n(83430),
    u = n(74083),
    l = i.__importDefault(n(94184)),
    c = n(30396)
  n(69130)
  t.TapToPlayButton = function (e) {
    var t = {
        text: o.Localize.get("ui-menu-tap_to_play", "TAP TO PLAY"),
        animationStarted: !1,
        clicked: !1,
      },
      n = u.UIConstants.tapToPlayButton,
      d = n.showGoDelay,
      h = n.hideDelay,
      p = i.__read(
        (0, c.useState)(function () {
          return t
        }),
        2,
      ),
      f = p[0],
      _ = p[1]
    return (0, r.jsx)(
      s.Button,
      i.__assign(
        {
          disabled: f.clicked,
          className: (0, l.default)("button", "start-button", {
            "start-button_clicked": f.clicked,
            "start-button_animated": f.animationStarted,
          }),
        },
        e,
        {
          onClick: function () {
            return i.__awaiter(void 0, void 0, void 0, function () {
              var t
              return i.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (t = o.Localize.get("tap_to_play_go", "GO!")),
                      _(function (e) {
                        return i.__assign(i.__assign({}, e), { text: t, clicked: !0 })
                      }),
                      e.onDown && e.onDown(),
                      [4, a.WaitAction.ms(d)]
                    )
                  case 1:
                    return (
                      n.sent(),
                      _(function (e) {
                        return i.__assign(i.__assign({}, e), { animationStarted: !0 })
                      }),
                      [4, a.WaitAction.ms(h - d)]
                    )
                  case 2:
                    return (n.sent(), e.onClick && e.onClick(), [2])
                }
              })
            })
          },
        },
        { children: f.text },
      ),
    )
  }
}
