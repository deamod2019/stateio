/**
 * Webpack Module #12361
 * (barrel / re‑export module)
 */
// (e/*module*/) =>
{
  ;("use strict")
  var t = function (e) {
    switch (typeof e) {
      case "string":
        return e
      case "boolean":
        return e ? "true" : "false"
      case "number":
        return isFinite(e) ? e : ""
      default:
        return ""
    }
  }
  e.exports = function (e, n, i, r) {
    return (
      (n = n || "&"),
      (i = i || "="),
      null === e && (e = undefined),
      "object" == typeof e
        ? Object.keys(e)
            .map(function (r) {
              var o = encodeURIComponent(t(r)) + i
              return Array.isArray(e[r])
                ? e[r]
                    .map(function (e) {
                      return o + encodeURIComponent(t(e))
                    })
                    .join(n)
                : o + encodeURIComponent(t(e[r]))
            })
            .join(n)
        : r
          ? encodeURIComponent(t(r)) + i + encodeURIComponent(t(e))
          : ""
    )
  }
}
