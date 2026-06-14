/**
 * Webpack Module #79349
 * (barrel / re‑export module)
 */
// () =>
{
  ;(!(function (e, t) {
    "use strict"
    function n(e) {
      return document.createElement(e)
    }
    function i(e, t) {
      for (var n in t)
        try {
          e.style[n] = t[n]
        } catch (e) {}
      return e
    }
    function r(e) {
      return null == e
        ? String(e)
        : "object" == typeof e || "function" == typeof e
          ? Object.prototype.toString
              .call(e)
              .match(/\s([a-z]+)/i)[1]
              .toLowerCase() || "object"
          : typeof e
    }
    function o(e, t) {
      if ("array" !== r(t)) return -1
      if (t.indexOf) return t.indexOf(e)
      for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n
      return -1
    }
    function a() {
      var e = arguments
      for (var t in e[1])
        if (e[1].hasOwnProperty(t))
          switch (r(e[1][t])) {
            case "object":
              e[0][t] = a({}, e[0][t], e[1][t])
              break
            case "array":
              e[0][t] = e[1][t].slice(0)
              break
            default:
              e[0][t] = e[1][t]
          }
      return e.length > 2 ? a.apply(null, [e[0]].concat(Array.prototype.slice.call(e, 2))) : e[0]
    }
    function s(e) {
      return 1 === (e = Math.round(255 * e).toString(16)).length ? "0" + e : e
    }
    function u(e, t, n, i) {
      e.addEventListener
        ? e[i ? "removeEventListener" : "addEventListener"](t, n, false)
        : e.attachEvent && e[i ? "detachEvent" : "attachEvent"]("on" + t, n)
    }
    var l
    !(function () {
      var t = e.performance
      if (t && (t.now || t.webkitNow)) {
        var n = t.now ? "now" : "webkitNow"
        l = t[n].bind(t)
      } else
        l = function () {
          return +new Date()
        }
    })()
    var c = e.cancelAnimationFrame || e.cancelRequestAnimationFrame,
      d = e.requestAnimationFrame
    !(function () {
      for (var t = ["moz", "webkit", "o"], n = 0, i = 0, r = t.length; i < r && !c; ++i)
        ((c = e[t[i] + "CancelAnimationFrame"] || e[t[i] + "CancelRequestAnimationFrame"]),
          (d = c && e[t[i] + "RequestAnimationFrame"]))
      c ||
        ((d = function (t) {
          var i = l(),
            r = Math.max(0, 16 - (i - n))
          return (
            (n = i + r),
            e.setTimeout(function () {
              t(i + r)
            }, r)
          )
        }),
        (c = function (e) {
          clearTimeout(e)
        }))
    })()
    var h = "string" === r(document.createElement("div").textContent) ? "textContent" : "innerText"
    function p(e, t) {
      ;("object" === r(e) && undefined === e.nodeType && ((t = e), (e = document.body)),
        e || (e = document.body))
      var g,
        m,
        v,
        y,
        C,
        b,
        w,
        x,
        T,
        S = this,
        L = a({}, p.defaults, t || {}),
        E = {},
        A = [],
        I = 100,
        M = [],
        P = L.threshold,
        O = 0,
        R = l() - P,
        k = [],
        N = [],
        D = "fps" === L.show
      function B(e, t, n, i) {
        return m[0 | e][Math.round(Math.min(((t - n) / (i - n)) * I, I))]
      }
      function F() {
        ;(E.legend.fps !== D && ((E.legend.fps = D), (E.legend[h] = D ? "FPS" : "ms")),
          (w = D ? S.fps : S.duration),
          (E.count[h] = w > 999 ? "999+" : w.toFixed(w > 99 ? 0 : L.decimals)))
      }
      function U() {
        if (
          ((v = l()),
          R < v - L.threshold &&
            ((S.fps -= S.fps / Math.max(1, (60 * L.smoothing) / L.interval)),
            (S.duration = 1e3 / S.fps)),
          (function () {
            for (x = L.history; x--; )
              ((k[x] = 0 === x ? S.fps : k[x - 1]), (N[x] = 0 === x ? S.duration : N[x - 1]))
          })(),
          F(),
          L.heat)
        ) {
          if (M.length)
            for (x = M.length; x--; )
              M[x].el.style[g[M[x].name].heatOn] = D
                ? B(g[M[x].name].heatmap, S.fps, 0, L.maxFps)
                : B(g[M[x].name].heatmap, S.duration, L.threshold, 0)
          if (E.graph && g.column.heatOn)
            for (x = A.length; x--; )
              A[x].style[g.column.heatOn] = D
                ? B(g.column.heatmap, k[x], 0, L.maxFps)
                : B(g.column.heatmap, N[x], L.threshold, 0)
        }
        if (E.graph)
          for (T = 0; T < L.history; T++)
            A[T].style.height =
              (D
                ? k[T]
                  ? Math.round((b / L.maxFps) * Math.min(k[T], L.maxFps))
                  : 0
                : N[T]
                  ? Math.round((b / L.threshold) * Math.min(N[T], L.threshold))
                  : 0) + "px"
      }
      function G() {
        L.interval < 20 ? ((y = d(G)), U()) : ((y = setTimeout(G, L.interval)), (C = d(U)))
      }
      function j(e) {
        ;((e = e || window.event).preventDefault
          ? (e.preventDefault(), e.stopPropagation())
          : ((e.returnValue = false), (e.cancelBubble = true)),
          S.toggle())
      }
      function H() {
        ;(L.toggleOn && u(E.container, L.toggleOn, j, 1), e.removeChild(E.container))
      }
      function V() {
        for (var t in (E.container && H(),
        (function () {
          if (
            ((g = p.theme[L.theme]), !(m = g.compiledHeatmaps || []).length && g.heatmaps.length)
          ) {
            for (T = 0; T < g.heatmaps.length; T++)
              for (m[T] = [], x = 0; x <= I; x++)
                m[T][x] =
                  ((e = 0.0033 * x),
                  (t = g.heatmaps[T].saturation),
                  (i = undefined),
                  (r = undefined),
                  (o = undefined),
                  (a = undefined),
                  (u = undefined),
                  (l = undefined),
                  (c = undefined),
                  0 == (a = (n = g.heatmaps[T].lightness) <= 0.5 ? n * (1 + t) : n + t - n * t)
                    ? "#000"
                    : ((c = a * ((a - (u = 2 * n - a)) / a) * ((e *= 6) - (l = Math.floor(e)))),
                      0 === l || 6 === l
                        ? ((i = a), (r = u + c), (o = u))
                        : 1 === l
                          ? ((i = a - c), (r = a), (o = u))
                          : 2 === l
                            ? ((i = u), (r = a), (o = u + c))
                            : 3 === l
                              ? ((i = u), (r = a - c), (o = a))
                              : 4 === l
                                ? ((i = u + c), (r = u), (o = a))
                                : ((i = a), (r = u), (o = a - c)),
                      "#" + s(i) + s(r) + s(o)))
            g.compiledHeatmaps = m
          }
          var e, t, n, i, r, o, a, u, l, c
        })(),
        (E.container = i(n("div"), g.container)),
        (E.count = E.container.appendChild(i(n("div"), g.count))),
        (E.legend = E.container.appendChild(i(n("div"), g.legend))),
        (E.graph = L.graph ? E.container.appendChild(i(n("div"), g.graph)) : 0),
        (M.length = 0),
        E))
          E[t] && g[t].heatOn && M.push({ name: t, el: E[t] })
        if (((A.length = 0), E.graph))
          for (
            E.graph.style.width =
              L.history * g.column.width + (L.history - 1) * g.column.spacing + "px",
              x = 0;
            x < L.history;
            x++
          )
            ((A[x] = E.graph.appendChild(i(n("div"), g.column))),
              (A[x].style.position = "absolute"),
              (A[x].style.bottom = 0),
              (A[x].style.right = x * g.column.width + x * g.column.spacing + "px"),
              (A[x].style.width = g.column.width + "px"),
              (A[x].style.height = "0px"))
        ;(Z(),
          F(),
          e.appendChild(E.container),
          E.graph && (b = E.graph.clientHeight),
          L.toggleOn &&
            ("click" === L.toggleOn && (E.container.style.cursor = "pointer"),
            u(E.container, L.toggleOn, j)))
      }
      function Z() {
        i(E.container, L)
      }
      ;((S.options = L),
        (S.fps = 0),
        (S.duration = 0),
        (S.isPaused = 0),
        (S.tickStart = function () {
          O = l()
        }),
        (S.tick = function () {
          ;((v = l()),
            (P += (v - R - P) / L.smoothing),
            (S.fps = 1e3 / P),
            (S.duration = O < R ? P : v - O),
            (R = v))
        }),
        (S.pause = function () {
          return (y && ((S.isPaused = 1), clearTimeout(y), c(y), c(C), (y = C = 0)), S)
        }),
        (S.resume = function () {
          return (y || ((S.isPaused = 0), G()), S)
        }),
        (S.set = function (e, t) {
          return (
            (L[e] = t),
            (D = "fps" === L.show),
            -1 !== o(e, f) && V(),
            -1 !== o(e, _) && Z(),
            S
          )
        }),
        (S.showDuration = function () {
          return (S.set("show", "ms"), S)
        }),
        (S.showFps = function () {
          return (S.set("show", "fps"), S)
        }),
        (S.toggle = function () {
          return (S.set("show", D ? "ms" : "fps"), S)
        }),
        (S.hide = function () {
          return (S.pause(), (E.container.style.display = "none"), S)
        }),
        (S.show = function () {
          return (S.resume(), (E.container.style.display = "block"), S)
        }),
        (S.destroy = function () {
          ;(S.pause(), H(), (S.tick = S.tickStart = function () {}))
        }),
        V(),
        G())
    }
    ;((p.extend = a),
      (window.FPSMeter = p),
      (p.defaults = {
        interval: 100,
        smoothing: 10,
        show: "fps",
        toggleOn: "click",
        decimals: 1,
        maxFps: 60,
        threshold: 100,
        position: "absolute",
        zIndex: 10,
        left: "5px",
        top: "5px",
        right: "auto",
        bottom: "auto",
        margin: "0 0 0 0",
        theme: "dark",
        heat: 0,
        graph: 0,
        history: 20,
      }))
    var f = ["toggleOn", "theme", "heat", "graph", "history"],
      _ = ["position", "zIndex", "left", "top", "right", "bottom", "margin"]
  })(window),
    (function (e, t, n) {
      "use strict"
      t.theme = {}
      var i = (t.theme.base = {
        heatmaps: [],
        container: {
          heatOn: null,
          heatmap: null,
          padding: "5px",
          minWidth: "95px",
          height: "30px",
          lineHeight: "30px",
          textAlign: "right",
          textShadow: "none",
        },
        count: {
          heatOn: null,
          heatmap: null,
          position: "absolute",
          top: 0,
          right: 0,
          padding: "5px 10px",
          height: "30px",
          fontSize: "24px",
          fontFamily: "Consolas, Andale Mono, monospace",
          zIndex: 2,
        },
        legend: {
          heatOn: null,
          heatmap: null,
          position: "absolute",
          top: 0,
          left: 0,
          padding: "5px 10px",
          height: "30px",
          fontSize: "12px",
          lineHeight: "32px",
          fontFamily: "sans-serif",
          textAlign: "left",
          zIndex: 2,
        },
        graph: {
          heatOn: null,
          heatmap: null,
          position: "relative",
          boxSizing: "padding-box",
          MozBoxSizing: "padding-box",
          height: "100%",
          zIndex: 1,
        },
        column: { width: 4, spacing: 1, heatOn: null, heatmap: null },
      })
      ;((t.theme.dark = t.extend({}, i, {
        heatmaps: [{ saturation: 0.8, lightness: 0.8 }],
        container: {
          background: "#222",
          color: "#fff",
          border: "1px solid #1a1a1a",
          textShadow: "1px 1px 0 #222",
        },
        count: { heatOn: "color" },
        column: { background: "#3f3f3f" },
      })),
        (t.theme.light = t.extend({}, i, {
          heatmaps: [{ saturation: 0.5, lightness: 0.5 }],
          container: {
            color: "#666",
            background: "#fff",
            textShadow: "1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          },
          count: { heatOn: "color" },
          column: { background: "#eaeaea" },
        })),
        (t.theme.colorful = t.extend({}, i, {
          heatmaps: [{ saturation: 0.5, lightness: 0.6 }],
          container: {
            heatOn: "backgroundColor",
            background: "#888",
            color: "#fff",
            textShadow: "1px 1px 0 rgba(0,0,0,.2)",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          },
          column: { background: "#777", backgroundColor: "rgba(0,0,0,.2)" },
        })),
        (t.theme.transparent = t.extend({}, i, {
          heatmaps: [{ saturation: 0.8, lightness: 0.5 }],
          container: { padding: 0, color: "#fff", textShadow: "1px 1px 0 rgba(0,0,0,.5)" },
          count: { padding: "0 5px", height: "40px", lineHeight: "40px" },
          legend: { padding: "0 5px", height: "40px", lineHeight: "42px" },
          graph: { height: "40px" },
          column: { width: 5, background: "#999", heatOn: "backgroundColor", opacity: 0.5 },
        })))
    })(window, FPSMeter))
}
