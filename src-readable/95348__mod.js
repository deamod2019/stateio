/**
 * Webpack Module #95348
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  e.exports = (function () {
    "use strict"
    function e(e, t) {
      return (e((t = { exports: {} }), t.exports), t.exports)
    }
    "undefined" != typeof window
      ? window
      : undefined !== n.g
        ? n.g
        : "undefined" != typeof self && self
    var t = e(function (e, t) {
      !(function (t, n) {
        e.exports = n()
      })(0, function () {
        function e(e) {
          return (
            e &&
            "object" == typeof e &&
            "[object RegExp]" !== Object.prototype.toString.call(e) &&
            "[object Date]" !== Object.prototype.toString.call(e)
          )
        }
        function t(e) {
          return Array.isArray(e) ? [] : {}
        }
        function n(n, i) {
          return i && true === i.clone && e(n) ? o(t(n), n, i) : n
        }
        function i(t, i, r) {
          var a = t.slice()
          return (
            i.forEach(function (i, s) {
              undefined === a[s]
                ? (a[s] = n(i, r))
                : e(i)
                  ? (a[s] = o(t[s], i, r))
                  : -1 === t.indexOf(i) && a.push(n(i, r))
            }),
            a
          )
        }
        function r(t, i, r) {
          var a = {}
          return (
            e(t) &&
              Object.keys(t).forEach(function (e) {
                a[e] = n(t[e], r)
              }),
            Object.keys(i).forEach(function (s) {
              e(i[s]) && t[s] ? (a[s] = o(t[s], i[s], r)) : (a[s] = n(i[s], r))
            }),
            a
          )
        }
        function o(e, t, o) {
          var a = Array.isArray(t),
            s = (o || { arrayMerge: i }).arrayMerge || i
          return a ? (Array.isArray(e) ? s(e, t, o) : n(t, o)) : r(e, t, o)
        }
        return (
          (o.all = function (e, t) {
            if (!Array.isArray(e) || e.length < 2)
              throw new Error("first argument should be an array with at least two elements")
            return e.reduce(function (e, n) {
              return o(e, n, t)
            })
          }),
          o
        )
      })
    })
    function i(e) {
      return (
        (e = e || Object.create(null)),
        {
          on: function (t, n) {
            ;(e[t] || (e[t] = [])).push(n)
          },
          off: function (t, n) {
            e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1)
          },
          emit: function (t, n) {
            ;((e[t] || []).map(function (e) {
              e(n)
            }),
              (e["*"] || []).map(function (e) {
                e(t, n)
              }))
          },
        }
      )
    }
    var r = e(function (e, t) {
        var n = {
          svg: { name: "xmlns", uri: "http://www.w3.org/2000/svg" },
          xlink: { name: "xmlns:xlink", uri: "http://www.w3.org/1999/xlink" },
        }
        ;((t.default = n), (e.exports = t.default))
      }),
      o = function (e) {
        return Object.keys(e)
          .map(function (t) {
            return t + '="' + e[t].toString().replace(/"/g, "&quot;") + '"'
          })
          .join(" ")
      },
      a = r.svg,
      s = r.xlink,
      u = {}
    ;((u[a.name] = a.uri), (u[s.name] = s.uri))
    var l,
      c = function (e, n) {
        undefined === e && (e = "")
        var i = t(u, n || {})
        return "<svg " + o(i) + ">" + e + "</svg>"
      },
      d = r.svg,
      h = r.xlink,
      p = {
        attrs:
          ((l = {
            style: ["position: absolute", "width: 0", "height: 0"].join("; "),
            "aria-hidden": "true",
          }),
          (l[d.name] = d.uri),
          (l[h.name] = h.uri),
          l),
      },
      f = function (e) {
        ;((this.config = t(p, e || {})), (this.symbols = []))
      }
    ;((f.prototype.add = function (e) {
      var t = this.symbols,
        n = this.find(e.id)
      return n ? ((t[t.indexOf(n)] = e), false) : (t.push(e), true)
    }),
      (f.prototype.remove = function (e) {
        var t = this.symbols,
          n = this.find(e)
        return !!n && (t.splice(t.indexOf(n), 1), n.destroy(), true)
      }),
      (f.prototype.find = function (e) {
        return (
          this.symbols.filter(function (t) {
            return t.id === e
          })[0] || null
        )
      }),
      (f.prototype.has = function (e) {
        return null !== this.find(e)
      }),
      (f.prototype.stringify = function () {
        var e = this.config.attrs,
          t = this.symbols
            .map(function (e) {
              return e.stringify()
            })
            .join("")
        return c(t, e)
      }),
      (f.prototype.toString = function () {
        return this.stringify()
      }),
      (f.prototype.destroy = function () {
        this.symbols.forEach(function (e) {
          return e.destroy()
        })
      }))
    var _ = function (e) {
      var t = e.id,
        n = e.viewBox,
        i = e.content
      ;((this.id = t), (this.viewBox = n), (this.content = i))
    }
    ;((_.prototype.stringify = function () {
      return this.content
    }),
      (_.prototype.toString = function () {
        return this.stringify()
      }),
      (_.prototype.destroy = function () {
        var e = this
        ;["id", "viewBox", "content"].forEach(function (t) {
          return delete e[t]
        })
      }))
    var g = function (e) {
        var t = !!document.importNode,
          n = new DOMParser().parseFromString(e, "image/svg+xml").documentElement
        return t ? document.importNode(n, true) : n
      },
      m = (function (e) {
        function t() {
          e.apply(this, arguments)
        }
        ;(e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t))
        var n = { isMounted: {} }
        return (
          (n.isMounted.get = function () {
            return !!this.node
          }),
          (t.createFromExistingNode = function (e) {
            return new t({
              id: e.getAttribute("id"),
              viewBox: e.getAttribute("viewBox"),
              content: e.outerHTML,
            })
          }),
          (t.prototype.destroy = function () {
            ;(this.isMounted && this.unmount(), e.prototype.destroy.call(this))
          }),
          (t.prototype.mount = function (e) {
            if (this.isMounted) return this.node
            var t = "string" == typeof e ? document.querySelector(e) : e,
              n = this.render()
            return ((this.node = n), t.appendChild(n), n)
          }),
          (t.prototype.render = function () {
            var e = this.stringify()
            return g(c(e)).childNodes[0]
          }),
          (t.prototype.unmount = function () {
            this.node.parentNode.removeChild(this.node)
          }),
          Object.defineProperties(t.prototype, n),
          t
        )
      })(_),
      v = {
        autoConfigure: true,
        mountTo: "body",
        syncUrlsWithBaseTag: false,
        listenLocationChangeEvent: true,
        locationChangeEvent: "locationChange",
        locationChangeAngularEmitter: false,
        usagesToUpdate: "use[*|href]",
        moveGradientsOutsideSymbol: false,
      },
      y = function (e) {
        return Array.prototype.slice.call(e, 0)
      },
      C = {
        isChrome: function () {
          return /chrome/i.test(navigator.userAgent)
        },
        isFirefox: function () {
          return /firefox/i.test(navigator.userAgent)
        },
        isIE: function () {
          return /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent)
        },
        isEdge: function () {
          return /edge/i.test(navigator.userAgent)
        },
      },
      b = function (e, t) {
        var n = document.createEvent("CustomEvent")
        ;(n.initCustomEvent(e, false, false, t), window.dispatchEvent(n))
      },
      w = function (e) {
        var t = []
        return (
          y(e.querySelectorAll("style")).forEach(function (e) {
            ;((e.textContent += ""), t.push(e))
          }),
          t
        )
      },
      x = function (e) {
        return (e || window.location.href).split("#")[0]
      },
      T = function (e) {
        angular.module("ng").run([
          "$rootScope",
          function (t) {
            t.$on("$locationChangeSuccess", function (t, n, i) {
              b(e, { oldUrl: i, newUrl: n })
            })
          },
        ])
      },
      S = "linearGradient, radialGradient, pattern, mask, clipPath",
      L = function (e, t) {
        return (
          undefined === t && (t = S),
          y(e.querySelectorAll("symbol")).forEach(function (e) {
            y(e.querySelectorAll(t)).forEach(function (t) {
              e.parentNode.insertBefore(t, e)
            })
          }),
          e
        )
      }
    function E(e, t) {
      return y(e).reduce(function (e, n) {
        if (!n.attributes) return e
        var i = y(n.attributes),
          r = t ? i.filter(t) : i
        return e.concat(r)
      }, [])
    }
    var A = r.xlink.uri,
      I = "xlink:href",
      M = /[{}|\\\^\[\]`"<>]/g
    function P(e) {
      return e.replace(M, function (e) {
        return "%" + e[0].charCodeAt(0).toString(16).toUpperCase()
      })
    }
    function O(e) {
      return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }
    function R(e, t, n) {
      return (
        y(e).forEach(function (e) {
          var i = e.getAttribute(I)
          if (i && 0 === i.indexOf(t)) {
            var r = i.replace(t, n)
            e.setAttributeNS(A, I, r)
          }
        }),
        e
      )
    }
    var k,
      N = [
        "clipPath",
        "colorProfile",
        "src",
        "cursor",
        "fill",
        "filter",
        "marker",
        "markerStart",
        "markerMid",
        "markerEnd",
        "mask",
        "stroke",
        "style",
      ],
      D = N.map(function (e) {
        return "[" + e + "]"
      }).join(","),
      B = function (e, t, n, i) {
        var r = P(n),
          o = P(i)
        ;(E(e.querySelectorAll(D), function (e) {
          var t = e.localName,
            n = e.value
          return -1 !== N.indexOf(t) && -1 !== n.indexOf("url(" + r)
        }).forEach(function (e) {
          return (e.value = e.value.replace(new RegExp(O(r), "g"), o))
        }),
          R(t, r, o))
      },
      F = { MOUNT: "mount", SYMBOL_MOUNT: "symbol_mount" },
      U = (function (e) {
        function n(n) {
          var r = this
          ;(undefined === n && (n = {}), e.call(this, t(v, n)))
          var o = i()
          ;((this._emitter = o), (this.node = null))
          var a = this.config
          if ((a.autoConfigure && this._autoConfigure(n), a.syncUrlsWithBaseTag)) {
            var s = document.getElementsByTagName("base")[0].getAttribute("href")
            o.on(F.MOUNT, function () {
              return r.updateUrls("#", s)
            })
          }
          var u = this._handleLocationChange.bind(this)
          ;((this._handleLocationChange = u),
            a.listenLocationChangeEvent && window.addEventListener(a.locationChangeEvent, u),
            a.locationChangeAngularEmitter && T(a.locationChangeEvent),
            o.on(F.MOUNT, function (e) {
              a.moveGradientsOutsideSymbol && L(e)
            }),
            o.on(F.SYMBOL_MOUNT, function (e) {
              ;(a.moveGradientsOutsideSymbol && L(e.parentNode), (C.isIE() || C.isEdge()) && w(e))
            }))
        }
        ;(e && (n.__proto__ = e),
          (n.prototype = Object.create(e && e.prototype)),
          (n.prototype.constructor = n))
        var r = { isMounted: {} }
        return (
          (r.isMounted.get = function () {
            return !!this.node
          }),
          (n.prototype._autoConfigure = function (e) {
            var t = this.config
            ;(undefined === e.syncUrlsWithBaseTag &&
              (t.syncUrlsWithBaseTag = undefined !== document.getElementsByTagName("base")[0]),
              undefined === e.locationChangeAngularEmitter &&
                (t.locationChangeAngularEmitter = undefined !== window.angular),
              undefined === e.moveGradientsOutsideSymbol &&
                (t.moveGradientsOutsideSymbol = C.isFirefox()))
          }),
          (n.prototype._handleLocationChange = function (e) {
            var t = e.detail,
              n = t.oldUrl,
              i = t.newUrl
            this.updateUrls(n, i)
          }),
          (n.prototype.add = function (t) {
            var n = this,
              i = e.prototype.add.call(this, t)
            return (
              this.isMounted && i && (t.mount(n.node), this._emitter.emit(F.SYMBOL_MOUNT, t.node)),
              i
            )
          }),
          (n.prototype.attach = function (e) {
            var t = this,
              n = this
            if (n.isMounted) return n.node
            var i = "string" == typeof e ? document.querySelector(e) : e
            return (
              (n.node = i),
              this.symbols.forEach(function (e) {
                ;(e.mount(n.node), t._emitter.emit(F.SYMBOL_MOUNT, e.node))
              }),
              y(i.querySelectorAll("symbol")).forEach(function (e) {
                var t = m.createFromExistingNode(e)
                ;((t.node = e), n.add(t))
              }),
              this._emitter.emit(F.MOUNT, i),
              i
            )
          }),
          (n.prototype.destroy = function () {
            var e = this,
              t = e.config,
              n = e.symbols,
              i = e._emitter
            ;(n.forEach(function (e) {
              return e.destroy()
            }),
              i.off("*"),
              window.removeEventListener(t.locationChangeEvent, this._handleLocationChange),
              this.isMounted && this.unmount())
          }),
          (n.prototype.mount = function (e, t) {
            ;(undefined === e && (e = this.config.mountTo), undefined === t && (t = false))
            var n = this
            if (n.isMounted) return n.node
            var i = "string" == typeof e ? document.querySelector(e) : e,
              r = n.render()
            return (
              (this.node = r),
              t && i.childNodes[0] ? i.insertBefore(r, i.childNodes[0]) : i.appendChild(r),
              this._emitter.emit(F.MOUNT, r),
              r
            )
          }),
          (n.prototype.render = function () {
            return g(this.stringify())
          }),
          (n.prototype.unmount = function () {
            this.node.parentNode.removeChild(this.node)
          }),
          (n.prototype.updateUrls = function (e, t) {
            if (!this.isMounted) return false
            var n = document.querySelectorAll(this.config.usagesToUpdate)
            return (B(this.node, n, x(e) + "#", x(t) + "#"), true)
          }),
          Object.defineProperties(n.prototype, r),
          n
        )
      })(f),
      G = e(function (e) {
        var t
        ;((t = function () {
          var e,
            t = [],
            n = document,
            i = n.documentElement.doScroll,
            r = "DOMContentLoaded",
            o = (i ? /^loaded|^c/ : /^loaded|^i|^c/).test(n.readyState)
          return (
            o ||
              n.addEventListener(
                r,
                (e = function () {
                  for (n.removeEventListener(r, e), o = 1; (e = t.shift()); ) e()
                }),
              ),
            function (e) {
              o ? setTimeout(e, 0) : t.push(e)
            }
          )
        }),
          (e.exports = t()))
      }),
      j = "__SVG_SPRITE_NODE__",
      H = "__SVG_SPRITE__"
    window[H]
      ? (k = window[H])
      : ((k = new U({ attrs: { id: j, "aria-hidden": "true" } })), (window[H] = k))
    var V = function () {
      var e = document.getElementById(j)
      e ? k.attach(e) : k.mount(document.body, true)
    }
    return (document.body ? V() : G(V), k)
  })()
}
