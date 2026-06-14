/**
 * Webpack Module #41510
 * @exports AlertsOverlay
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.AlertsOverlay = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(86125) /* 86125__mod */,
    a = n(86178) /* 86178__mod */,
    s = i.__importDefault(n(94184) /* 94184__mod */),
    u = n(30396) /* 30396__mod */,
    l = n(19562) /* 19562__mod */
  n(15853) /* 15853__mod */
  var c = i.__importStar(n(63386) /* 63386_StatusAlertService */)
  n(26604) /* 26604__mod */
  t.AlertsOverlay = function () {
    var e = i.__read((0, u.useState)({ active: false, alertId: "" }), 2),
      t = e[0],
      n = e[1]
    return (
      (0, l.useEventListener)(a.TypesUI.events.SHOW_CUSTOM_ALERT, function (e) {
        var t = e.message,
          i = undefined === t ? "" : t,
          r = e.type,
          o = undefined === r ? "info" : r,
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
        n({ active: false, alertId: s })
      }),
      (0, l.useEventListener)(a.AdEvents.STARTED, function (e) {
        ;(c.StatusAlertService.removeAlert(t.alertId),
          n(i.__assign(i.__assign({}, t), { active: true })))
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
        n({ active: false, alertId: i })
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
