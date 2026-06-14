/**
 * Webpack Module #44698
 * @exports ShopPreview
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ShopPreview = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(83430) /* 83430_InversifyContext */,
    a = n(47283) /* 47283_GameEvents */,
    s = n(66154) /* 66154_SelectableFighterDataSet */,
    u = n(95781) /* 95781_TypesGame */,
    l = i.__importDefault(n(94184) /* 94184__mod */),
    c = n(30396) /* 30396__mod */
  n(69181) /* 69181__mod */
  t.ShopPreview = function () {
    var e = (0, o.useInjection)(u.TypesGame.model),
      t = (0, c.useRef)(null),
      n = (0, c.useRef)(null),
      d = (0, c.useRef)(null),
      h = (0, c.useRef)(null),
      p = (0, c.useRef)(null),
      f = (0, c.useRef)(null),
      _ = (0, c.useRef)(null),
      g = {
        fighter: e.cookie.selectedFighter,
        building: e.cookie.selectedBuilding,
        colorSet: e.cookie.selectedColorSet,
        iterationCounter: 0,
      },
      m = i.__read(
        (0, c.useState)(function () {
          return g
        }),
        2,
      ),
      v = m[0],
      y = m[1],
      C = v.fighter,
      b = v.building,
      w = v.colorSet,
      x =
        (v.iterationCounter,
        function (t, n, i) {
          var r
          if ((undefined === i && (i = ""), t && n)) {
            var o = n.getElementsByTagName("object")[0]
            if (o)
              (o.setAttribute("data", "assets/".concat(t.ui_textureUrl)),
                (o.onload = function () {
                  var e = o.contentDocument
                  if (e) {
                    var t = e.getElementsByTagName("svg")[0]
                    t &&
                      (t.setAttribute("fill", "".concat(i)),
                      t.setAttribute("style", "fill:".concat(i)))
                  }
                }))
            else {
              var a = n.getElementsByTagName("img")[0]
              a &&
                ((a.src = "assets/".concat(t.ui_textureUrl)),
                (a.className =
                  (null ===
                    (r = s.SelectableColorCss.find(function (t) {
                      var n
                      return (
                        t.id ===
                        (null === (n = e.cookie.selectedColorSet) || undefined === n ? undefined : n.id)
                      )
                    })) || undefined === r
                    ? undefined
                    : r.className) || ""))
            }
          }
        })
    return (
      (0, o.useEventListener)(a.GameEvents.SELECTABLE_ITEM_CHANGED, function () {
        y(function (t) {
          return i.__assign(i.__assign({}, t), {
            fighter: e.cookie.selectedFighter,
            colorSet: e.cookie.selectedColorSet,
            building: e.cookie.selectedBuilding,
          })
        })
      }),
      (0, c.useLayoutEffect)(
        function () {
          var e = [t, n, d],
            i = [h, p],
            r = [f, _]
          ;(e.map(function (e) {
            return x(C, e.current, null == w ? undefined : w.data[1])
          }),
            i.map(function (e) {
              return x(b, e.current, null == w ? undefined : w.data[1])
            }),
            r.map(function (e) {
              if (e.current) {
                var t = e.current.getElementsByTagName("svg")[0]
                if (t) {
                  var n = null == w ? undefined : w.data[0]
                  ;(t.setAttribute("fill", "".concat(n)),
                    t.setAttribute("style", "fill:".concat(n)))
                }
              }
            }))
          var o = e.map(function (e) {
            var i,
              r,
              o = function (i) {
                var r, o, a, s, u, l, c, h, p, g, m
                null === (s = e.current) || undefined === s || s.classList.toggle("to-right")
                var v = (
                  null === (u = e.current) || undefined === u
                    ? undefined
                    : u.classList.contains("to-right")
                )
                  ? _
                  : f
                e === t
                  ? (null === (l = v.current) ||
                      undefined === l ||
                      (r = l.classList).remove.apply(r, [
                        "intensity-1",
                        "intensity-2",
                        "intensity-3",
                      ]),
                    null === (c = v.current) || undefined === c || c.classList.add("intensity-3"))
                  : e === n
                    ? (null === (h = v.current) ||
                        undefined === h ||
                        (o = h.classList).remove.apply(o, [
                          "intensity-1",
                          "intensity-2",
                          "intensity-3",
                        ]),
                      null === (p = v.current) || undefined === p || p.classList.add("intensity-2"))
                    : e === d &&
                      (null === (g = v.current) ||
                        undefined === g ||
                        (a = g.classList).remove.apply(a, [
                          "intensity-1",
                          "intensity-2",
                          "intensity-3",
                        ]),
                      null === (m = v.current) || undefined === m || m.classList.add("intensity-1"))
              },
              a = function () {
                var i, r, o, a, s, u, l, c, h
                e === t
                  ? (null === (a = f.current) ||
                      undefined === a ||
                      (i = a.classList).remove.apply(i, [
                        "intensity-1",
                        "intensity-2",
                        "intensity-3",
                      ]),
                    null === (s = f.current) || undefined === s || s.classList.add("intensity-1"))
                  : e === n
                    ? (null === (u = f.current) ||
                        undefined === u ||
                        (r = u.classList).remove.apply(r, [
                          "intensity-1",
                          "intensity-2",
                          "intensity-3",
                        ]),
                      null === (l = f.current) || undefined === l || l.classList.add("intensity-2"))
                    : e === d &&
                      (null === (c = f.current) ||
                        undefined === c ||
                        (o = c.classList).remove.apply(o, [
                          "intensity-1",
                          "intensity-2",
                          "intensity-3",
                        ]),
                      null === (h = f.current) || undefined === h || h.classList.add("intensity-3"))
              }
            return (
              null === (i = e.current) ||
                undefined === i ||
                i.addEventListener("animationiteration", o),
              null === (r = e.current) || undefined === r || r.addEventListener("animationstart", a),
              function () {
                var t, n
                ;(null === (t = e.current) ||
                  undefined === t ||
                  t.removeEventListener("animationiteration", o),
                  null === (n = e.current) ||
                    undefined === n ||
                    n.removeEventListener("animationstart", a))
              }
            )
          })
          return function () {
            o.map(function (e) {
              return e()
            })
          }
        },
        [C, b, w],
      ),
      (0, r.jsxs)(
        "div",
        i.__assign(
          { className: (0, l.default)("shop-preview") },
          {
            children: [
              (0, r.jsx)(
                "div",
                i.__assign(
                  { ref: f, className: (0, l.default)("shop-preview-left", "intensity-1") },
                  {
                    children: (0, r.jsx)(
                      "svg",
                      i.__assign(
                        {
                          width: "214",
                          height: "320",
                          viewBox: "0 0 214 320",
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "first-state",
                        },
                        {
                          children: (0, r.jsx)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M50.3529 10.0787L27.6941 68.0315L30.2118 85.6693L25.1765 93.2283V98.2677L22.6588 105.827L27.6941 108.346L25.1765 110.866V120.945H30.2118L25.1765 131.024V138.583L17.6235 148.661L15.1059 156.22L20.1412 161.26L17.6235 166.299L12.5882 163.78V166.299V176.378L5.03529 168.819L0 176.378L40.2824 294.803V302.362L50.3529 307.402V314.961L60.4235 320L62.9412 307.402L60.4235 297.323L67.9765 292.283L70.4941 289.764L67.9765 279.685L75.5294 277.165L70.4941 267.087L80.5647 254.488H85.6V262.047L88.1176 257.008L93.1529 262.047L95.6706 257.008L83.0824 241.89L95.6706 251.969V239.37L103.224 251.969L108.259 234.331L115.812 239.37L120.847 234.331L123.365 224.252L120.847 206.614L123.365 201.575L128.4 194.016L130.918 199.055L135.953 206.614H143.506L146.024 196.535L153.576 199.055L158.612 204.094L163.647 188.976L158.612 183.937L168.682 188.976L176.235 183.937L183.788 168.819H188.824L198.894 163.78L211.482 153.701L214 143.622L206.447 146.142V136.063L196.376 128.504L191.341 131.024L181.271 125.984L178.753 120.945L176.235 113.386L178.753 105.827L173.718 103.307H161.129L156.094 100.787L153.576 85.6693L128.4 12.5984L115.812 7.55906L108.259 0L98.1882 2.51969L93.1529 10.0787L83.0824 15.1181L73.0118 20.1575L65.4588 17.6378L62.9412 7.55906L50.3529 10.0787Z",
                          }),
                        },
                      ),
                    ),
                  },
                ),
              ),
              (0, r.jsxs)(
                "div",
                i.__assign(
                  {
                    className: (0, l.default)(
                      "animation-shoot-area",
                      "animation-shoot-area_static",
                    ),
                  },
                  {
                    children: [
                      (0, r.jsx)(
                        "div",
                        i.__assign(
                          { ref: h, className: "building-one" },
                          { children: (0, r.jsx)("img", {}) },
                        ),
                      ),
                      (0, r.jsx)(
                        "div",
                        i.__assign(
                          { ref: t, className: "fighter-one" },
                          { children: (0, r.jsx)("img", {}) },
                        ),
                      ),
                      (0, r.jsx)(
                        "div",
                        i.__assign(
                          { ref: n, className: "fighter-two" },
                          { children: (0, r.jsx)("img", {}) },
                        ),
                      ),
                      (0, r.jsx)(
                        "div",
                        i.__assign(
                          { ref: d, className: "fighter-three" },
                          { children: (0, r.jsx)("img", {}) },
                        ),
                      ),
                      (0, r.jsx)(
                        "div",
                        i.__assign(
                          { ref: p, className: "building-two" },
                          { children: (0, r.jsx)("img", {}) },
                        ),
                      ),
                    ],
                  },
                ),
              ),
              (0, r.jsx)(
                "div",
                i.__assign(
                  { ref: _, className: (0, l.default)("shop-preview-right", "intensity-3") },
                  {
                    children: (0, r.jsx)(
                      "svg",
                      i.__assign(
                        {
                          width: "144",
                          height: "334",
                          viewBox: "0 0 144 334",
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "second-state",
                        },
                        {
                          children: (0, r.jsx)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M34.7586 0L124.138 29.9104L129.103 34.8955L124.138 54.8358V69.791L114.207 74.7761L109.241 84.7463L104.276 99.7015L109.241 109.672L129.103 114.657H139.034L144 139.582L139.034 164.507V179.463V194.418L134.069 199.403L139.034 209.373L134.069 229.313L129.103 234.299H119.172L129.103 249.254H119.172V259.224L124.138 264.209H114.207L109.241 274.179L99.3103 279.164L109.241 284.149L99.3103 304.09V309.075L94.3448 314.06V324.03L84.4138 334V324.03V299.104H74.4828H64.5517L54.6207 304.09L49.6552 294.119H34.7586L29.7931 284.149H19.8621L4.96552 274.179V259.224L0 254.239L4.96552 239.284V229.313H9.93103L19.8621 214.358L29.7931 204.388V194.418L64.5517 164.507V154.537L34.7586 134.597H24.8276L19.8621 114.657L4.96552 119.642L0 99.7015L4.96552 84.7463L9.93103 74.7761L0 64.806V54.8358L9.93103 44.8657L19.8621 24.9254V14.9552L34.7586 0Z",
                          }),
                        },
                      ),
                    ),
                  },
                ),
              ),
            ],
          },
        ),
      )
    )
  }
}
