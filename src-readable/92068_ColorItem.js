/**
 * Webpack Module #92068
 * @exports ColorItem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ColorItem = undefined))
  var i = n(16584) /* 16584__mod */
  t.ColorItem = function (e) {
    var t = e.colorData
    return (0, i.jsx)("div", {
      className: "shop-item-color",
      style: t ? "background:".concat(t[0]) : "",
    })
  }
}
