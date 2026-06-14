/**
 * Webpack Module #99061
 * @exports StatusAlertService, StatusAlertServiceClass
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.StatusAlertService = t.StatusAlertServiceClass = void 0))
  var i = n(70655),
    r = n(95252),
    o = i.__importStar(n(29518)),
    a = (function () {
      function e() {}
      return (
        (e.prototype.showAlert = function (e, t, n) {
          n && n.removeAllBeforeShow && this.removeAllAlerts()
          var i = (function () {
            var e = new Date().getTime()
            "undefined" != typeof performance &&
              "function" == typeof performance.now &&
              (e += performance.now())
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
              var n = ((e + 16 * Math.random()) % 16) | 0
              return ((e = Math.floor(e / 16)), ("x" === t ? n : (3 & n) | 8).toString(16))
            })
          })()
          return (
            o.default.dispatch({
              type: o.StoreActionTypes.AddAlert,
              payload: { id: i, message: e, type: t, options: n || {} },
            }),
            i
          )
        }),
        (e.prototype.showSuccess = function (e, t) {
          return this.showAlert(e, "success", i.__assign(i.__assign({}, r.defaultAlertOptions), t))
        }),
        (e.prototype.showError = function (e, t) {
          return this.showAlert(e, "error", i.__assign(i.__assign({}, r.defaultAlertOptions), t))
        }),
        (e.prototype.showInfo = function (e, t) {
          return this.showAlert(e, "info", i.__assign(i.__assign({}, r.defaultAlertOptions), t))
        }),
        (e.prototype.showWarning = function (e, t) {
          return this.showAlert(e, "warning", i.__assign(i.__assign({}, r.defaultAlertOptions), t))
        }),
        (e.prototype.removeAlert = function (e) {
          o.default.dispatch({ type: o.StoreActionTypes.RemoveAlert, payload: e })
        }),
        (e.prototype.removeAllAlerts = function () {
          o.default.dispatch({ type: o.StoreActionTypes.RemoveAllAlerts })
        }),
        e
      )
    })()
  ;((t.StatusAlertServiceClass = a), (t.StatusAlertService = new a()))
}
