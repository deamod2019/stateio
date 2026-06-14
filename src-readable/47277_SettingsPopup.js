/**
 * Webpack Module #47277
 * @exports SettingsPopup
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.SettingsPopup = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(44656) /* 44656__mod */,
    s = n(83430) /* 83430_InversifyContext */,
    u = n(30396) /* 30396__mod */,
    l = i.__importDefault(n(94184) /* 94184__mod */),
    c = n(7161) /* 7161_BackButton */,
    d = n(74083) /* 74083_UIConstants */,
    h = n(36622) /* 36622_SVG */
  n(80951) /* 80951__mod */
  var p = n(87195) /* 87195__mod */,
    f = n(37725) /* 37725__mod */,
    _ = n(29343) /* 29343_UserIdLabel */,
    g = function (e) {
      var t = i.__read((0, u.useState)(e.toggled), 2),
        n = t[0],
        o = t[1]
      return (0, r.jsx)(
        s.Button,
        i.__assign(
          {
            className: (0, l.default)("toggle-btn", e.className, { toggled: n }),
            onClick: function () {
              ;(e.onToggled && e.onToggled(!n), (0, f.playUIClickSound)(), o(!n))
            },
          },
          { children: e.children },
        ),
      )
    }
  t.SettingsPopup = function () {
    var e = i.__read((0, u.useState)({}), 2)[1],
      t = (0, u.useCallback)(function () {
        return e({})
      }, []),
      n = i.__read((0, s.visibilityEffect)(d.UIConstants.popup.startDelay), 2),
      f = n[0],
      m = n[1],
      v = (0, s.useInjection)(o.TypesCore.dispatcher),
      y = (0, s.useInjection)(o.TypesAudio.model),
      C = (0, a.lazyGet)(o.TypesSocial.vibrationManager)
    ;((0, s.useEventListener)(
      p.AudioModel.MUTE_SOUNDS,
      function () {
        return t
      },
      [],
    ),
      (0, s.useEventListener)(
        p.AudioModel.MUTE_MUSIC,
        function () {
          return t
        },
        [],
      ))
    var b = function () {
      return i.__awaiter(undefined, undefined, undefined, function () {
        return i.__generator(this, function (e) {
          switch (e.label) {
            case 0:
              return (m(true), [4, a.WaitAction.ms(300)])
            case 1:
              return (e.sent(), v.emit(s.UIEvents.POPUP, { id: null }), [2])
          }
        })
      })
    }
    return (0, r.jsxs)(
      "div",
      i.__assign(
        {
          className: "popups",
          onClick: function (e) {
            return e.target === e.currentTarget && b()
          },
        },
        {
          children: [
            (0, r.jsx)(c.BackButton, { className: "white", onClick: b }),
            (0, r.jsxs)(
              "div",
              i.__assign(
                { className: (0, l.default)("popup-settings") },
                {
                  children: [
                    (0, r.jsxs)(
                      "div",
                      i.__assign(
                        { className: (0, l.default)("popup", { invisible: f }) },
                        {
                          children: [
                            (0, r.jsxs)(
                              "div",
                              i.__assign(
                                { className: (0, l.default)("popup__body") },
                                {
                                  children: [
                                    C
                                      ? (0, r.jsx)(
                                          g,
                                          i.__assign(
                                            {
                                              toggled: !C.enabled,
                                              onToggled: function (e) {
                                                ;((C.enabled = !e), C.enabled && C.vibrate())
                                              },
                                            },
                                            { children: (0, r.jsx)(h.SVG.Vibrate, {}) },
                                          ),
                                        )
                                      : null,
                                    (0, r.jsx)(
                                      g,
                                      i.__assign(
                                        {
                                          toggled: y.soundsMuted(),
                                          onToggled: function (e) {
                                            return y.muteSounds(e)
                                          },
                                        },
                                        { children: (0, r.jsx)(h.SVG.Sounds, {}) },
                                      ),
                                    ),
                                  ],
                                },
                              ),
                            ),
                            (0, r.jsx)(_.UserIdLabel, {}),
                          ],
                        },
                      ),
                    ),
                    (0, r.jsx)(s.CrossPromo, { delay: d.UIConstants.popup.startDelay + 100 }),
                    (0, r.jsx)(s.VersionLabel, {}),
                  ],
                },
              ),
            ),
          ],
        },
      ),
    )
  }
}
