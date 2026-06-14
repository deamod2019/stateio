/**
 * Webpack Module #87854
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  e.exports = (function () {
    "use strict"
    var e = function (e) {
      var t = e.id,
        n = e.viewBox,
        i = e.content
      ;((this.id = t), (this.viewBox = n), (this.content = i))
    }
    ;((e.prototype.stringify = function () {
      return this.content
    }),
      (e.prototype.toString = function () {
        return this.stringify()
      }),
      (e.prototype.destroy = function () {
        var e = this
        ;["id", "viewBox", "content"].forEach(function (t) {
          return delete e[t]
        })
      }))
    var t = function (e) {
      var t = !!document.importNode,
        n = new DOMParser().parseFromString(e, "image/svg+xml").documentElement
      return t ? document.importNode(n, true) : n
    }
    function i(e, t) {
      return (e((t = { exports: {} }), t.exports), t.exports)
    }
    "undefined" != typeof window
      ? window
      : undefined !== n.g
        ? n.g
        : "undefined" != typeof self && self
    var r = i(function (e, t) {
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
      }),
      o = i(function (e, t) {
        var n = {
          svg: { name: "xmlns", uri: "http://www.w3.org/2000/svg" },
          xlink: { name: "xmlns:xlink", uri: "http://www.w3.org/1999/xlink" },
        }
        ;((t.default = n), (e.exports = t.default))
      }),
      a = function (e) {
        return Object.keys(e)
          .map(function (t) {
            return t + '="' + e[t].toString().replace(/"/g, "&quot;") + '"'
          })
          .join(" ")
      },
      s = o.svg,
      u = o.xlink,
      l = {}
    ;((l[s.name] = s.uri), (l[u.name] = u.uri))
    var c = function (e, t) {
        undefined === e && (e = "")
        var n = r(l, t || {})
        return "<svg " + a(n) + ">" + e + "</svg>"
      },
      d = (function (e) {
        function n() {
          e.apply(this, arguments)
        }
        ;(e && (n.__proto__ = e),
          (n.prototype = Object.create(e && e.prototype)),
          (n.prototype.constructor = n))
        var i = { isMounted: {} }
        return (
          (i.isMounted.get = function () {
            return !!this.node
          }),
          (n.createFromExistingNode = function (e) {
            return new n({
              id: e.getAttribute("id"),
              viewBox: e.getAttribute("viewBox"),
              content: e.outerHTML,
            })
          }),
          (n.prototype.destroy = function () {
            ;(this.isMounted && this.unmount(), e.prototype.destroy.call(this))
          }),
          (n.prototype.mount = function (e) {
            if (this.isMounted) return this.node
            var t = "string" == typeof e ? document.querySelector(e) : e,
              n = this.render()
            return ((this.node = n), t.appendChild(n), n)
          }),
          (n.prototype.render = function () {
            var e = this.stringify()
            return t(c(e)).childNodes[0]
          }),
          (n.prototype.unmount = function () {
            this.node.parentNode.removeChild(this.node)
          }),
          Object.defineProperties(n.prototype, i),
          n
        )
      })(e)
    return d
  })()
}
