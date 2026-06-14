/**
 * Webpack Module #41510
 * @exports AlertsOverlay
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.AlertsOverlay = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(86125),
    a = n(86178),
    s = i.__importDefault(n(94184)),
    u = n(30396),
    l = n(19562)
  n(15853)
  var c = i.__importStar(n(63386))
  n(26604)
  t.AlertsOverlay = function () {
    var e = i.__read((0, u.useState)({ active: !1, alertId: "" }), 2),
      t = e[0],
      n = e[1]
    return (
      (0, l.useEventListener)(a.TypesUI.events.SHOW_CUSTOM_ALERT, function (e) {
        var t = e.message,
          i = void 0 === t ? "" : t,
          r = e.type,
          o = void 0 === r ? "info" : r,
          a = e.options,
          s = ""
        if (i)
          switch (o) {
            case "error":
              s = c.StatusAlertService.showError(i, a)
              break
            case "info":
              s = c.StatusAlertService.showInfo(i, a)
              break
            case "success":
              s = c.StatusAlertService.showSuccess(i, a)
              break
            case "warning":
              s = c.StatusAlertService.showWarning(i, a)
          }
        n({ active: !1, alertId: s })
      }),
      (0, l.useEventListener)(a.AdEvents.STARTED, function (e) {
        ;(c.StatusAlertService.removeAlert(t.alertId),
          n(i.__assign(i.__assign({}, t), { active: !0 })))
      }),
      (0, l.useEventListener)(a.AdEvents.ENDED, function (e) {
        var t = e.status,
          i = ""
        if (e.reward)
          switch (t) {
            case a.AdResponse.UNKNOWN:
            case a.AdResponse.FAILED:
              i = c.StatusAlertService.showError(o.Localize.get("video_ad_failed"))
              break
            case a.AdResponse.NO_FILL:
              i = c.StatusAlertService.showWarning(o.Localize.get("no_video_ad"))
              break
            case a.AdResponse.CANCELLED:
              i = c.StatusAlertService.showWarning(o.Localize.get("video_ad_cancelled"))
          }
        n({ active: !1, alertId: i })
      }),
      (0, r.jsxs)(
        "div",
        i.__assign(
          { className: (0, s.default)("alerts__overlay") },
          {
            children: [
              (0, r.jsx)(c.default, {}),
              (0, r.jsx)("div", { className: (0, s.default)("bg", { active: t.active }) }),
            ],
          },
        ),
      )
    )
  }
}
