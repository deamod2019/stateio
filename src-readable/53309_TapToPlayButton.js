/**
 * Webpack Module #53309
 * @exports TapToPlayButton
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.TapToPlayButton = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(86125) /* 86125__mod */,
    a = n(44656) /* 44656__mod */,
    s = n(83430) /* 83430_InversifyContext */,
    u = n(74083) /* 74083_UIConstants */,
    l = i.__importDefault(n(94184) /* 94184__mod */),
    c = n(30396) /* 30396__mod */
  n(69130) /* 69130__mod */
  t.TapToPlayButton = function (e) {
    var t = {
        text: o.Localize.get("ui-menu-tap_to_play", "TAP TO PLAY"),
        animationStarted: false,
        clicked: false,
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
            return i.__awaiter(undefined, undefined, undefined, function () {
              var t
              return i.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (t = o.Localize.get("tap_to_play_go", "GO!")),
                      _(function (e) {
                        return i.__assign(i.__assign({}, e), { text: t, clicked: true })
                      }),
                      e.onDown && e.onDown(),
                      [4, a.WaitAction.ms(d)]
                    )
                  case 1:
                    return (
                      n.sent(),
                      _(function (e) {
                        return i.__assign(i.__assign({}, e), { animationStarted: true })
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
