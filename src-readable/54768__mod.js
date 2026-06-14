/**
 * Webpack Module #54768
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.boxClassName = t.alertIcon = undefined))
  t.alertIcon = function (e) {
    switch (e) {
      case "success":
        return "is-check"
      case "error":
      case "warning":
        return "is-error"
      case "info":
        return "is-info-icon"
      default:
        return ""
    }
  }
  t.boxClassName = function (e) {
    switch (e) {
      case "success":
        return "is-green-success"
      case "error":
        return "is-red-error"
      case "warning":
        return "is-orange-warning"
      default:
        return ""
    }
  }
}
