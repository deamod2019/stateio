/**
 * Webpack Module #62415
 * @exports TexturedShopItem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.TexturedShopItem = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(30396),
    a = i.__importDefault(n(94184))
  t.TexturedShopItem = function (e) {
    var t = e.textureUrl,
      n = void 0 === t ? "" : t,
      i = e.playerColor,
      s = void 0 === i ? void 0 : i,
      u = e.useImage,
      l = void 0 === u || u,
      c = e.className,
      d = void 0 === c ? "" : c,
      h = (0, o.useRef)(null)
    return (0, r.jsx)(r.Fragment, {
      children: l
        ? (0, r.jsx)("img", {
            className: (0, a.default)("shop-item-media-object", d),
            src: "assets/".concat(n),
          })
        : (0, r.jsx)("object", {
            ref: h,
            onLoad: function () {
              if (h.current) {
                var e = h.current.contentDocument
                if (e) {
                  var t = e.getElementsByTagName("svg")[0]
                  if (t) {
                    var n = "#000000"
                    ;(s && (n = s[0]), t.setAttribute("style", "fill:".concat(n)))
                  }
                }
              }
            },
            type: "image/svg+xml",
            className: (0, a.default)("shop-item-media-object"),
            data: "assets/".concat(n),
          }),
    })
  }
}
