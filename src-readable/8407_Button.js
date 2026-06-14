/**
 * Webpack Module #8407
 * @exports Button
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.Button = t.buttonShapeConst = t.buttonTypeConst = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = i.__importDefault(n(94184) /* 94184__mod */),
    a = n(37909) /* 37909_Icon */
  ;((t.buttonTypeConst = { primary: "primary", glassy: "glassy" }),
    (t.buttonShapeConst = { circle: "circle", oval: "oval" }))
  ;(Object.values(t.buttonTypeConst), Object.values(t.buttonShapeConst))
  var s = function (e) {
    var n = i.__assign(i.__assign({}, t.buttonTypeConst), t.buttonShapeConst)
    return "btn-".concat(n[e])
  }
  t.Button = function (e) {
    var t = e.className,
      n = e.icon,
      u = e.shape,
      l = e.children,
      c = e.type,
      d = e.htmlType,
      h = undefined === d ? "button" : d,
      p = e.block,
      f = e.bordered,
      _ = e.revertDir,
      g = i.__rest(e, [
        "className",
        "icon",
        "shape",
        "children",
        "type",
        "htmlType",
        "block",
        "bordered",
        "revertDir",
      ]),
      m = c && s(c),
      v = u && s(u),
      y = (0, o.default)(
        "btn",
        t,
        v,
        m,
        { "btn-block": p },
        { "btn-revert": _ },
        { "btn-border": f },
      ),
      C =
        n &&
        (function (e) {
          return "string" == typeof e ? (0, r.jsx)(a.Icon, { type: e }) : e
        })(n)
    return (0, r.jsxs)(
      "button",
      i.__assign({ className: y, type: h }, g, {
        children: [
          C,
          l && (0, r.jsx)("span", i.__assign({ className: "btn-content" }, { children: l })),
        ],
      }),
    )
  }
}
