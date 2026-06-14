/**
 * Webpack Module #8575
 * @exports Url
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  var i = n(52511) /* 52511__mod */,
    r = n(62502) /* 62502__mod */
  function o() {
    ;((this.protocol = null),
      (this.slashes = null),
      (this.auth = null),
      (this.host = null),
      (this.port = null),
      (this.hostname = null),
      (this.hash = null),
      (this.search = null),
      (this.query = null),
      (this.pathname = null),
      (this.path = null),
      (this.href = null))
  }
  ;((t.parse = y),
    (t.resolve = function (e, t) {
      return y(e, false, true).resolve(t)
    }),
    (t.resolveObject = function (e, t) {
      return e ? y(e, false, true).resolveObject(t) : t
    }),
    (t.format = function (e) {
      r.isString(e) && (e = y(e))
      return e instanceof o ? e.format() : o.prototype.format.call(e)
    }),
    (t.Url = o))
  var a = /^([a-z0-9.+-]+:)/i,
    s = /:[0-9]*$/,
    u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    l = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
    c = ["'"].concat(l),
    d = ["%", "/", "?", ";", "#"].concat(c),
    h = ["/", "?", "#"],
    p = /^[+a-z0-9A-Z_-]{0,63}$/,
    f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    _ = { javascript: true, "javascript:": true },
    g = { javascript: true, "javascript:": true },
    m = {
      http: true,
      https: true,
      ftp: true,
      gopher: true,
      file: true,
      "http:": true,
      "https:": true,
      "ftp:": true,
      "gopher:": true,
      "file:": true,
    },
    v = n(17673) /* 17673__mod */
  function y(e, t, n) {
    if (e && r.isObject(e) && e instanceof o) return e
    var i = new o()
    return (i.parse(e, t, n), i)
  }
  ;((o.prototype.parse = function (e, t, n) {
    if (!r.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e)
    var o = e.indexOf("?"),
      s = -1 !== o && o < e.indexOf("#") ? "?" : "#",
      l = e.split(s)
    l[0] = l[0].replace(/\\/g, "/")
    var y = (e = l.join(s))
    if (((y = y.trim()), !n && 1 === e.split("#").length)) {
      var C = u.exec(y)
      if (C)
        return (
          (this.path = y),
          (this.href = y),
          (this.pathname = C[1]),
          C[2]
            ? ((this.search = C[2]),
              (this.query = t ? v.parse(this.search.substr(1)) : this.search.substr(1)))
            : t && ((this.search = ""), (this.query = {})),
          this
        )
    }
    var b = a.exec(y)
    if (b) {
      var w = (b = b[0]).toLowerCase()
      ;((this.protocol = w), (y = y.substr(b.length)))
    }
    if (n || b || y.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var x = "//" === y.substr(0, 2)
      !x || (b && g[b]) || ((y = y.substr(2)), (this.slashes = true))
    }
    if (!g[b] && (x || (b && !m[b]))) {
      for (var T, S, L = -1, E = 0; E < h.length; E++) {
        ;-1 !== (A = y.indexOf(h[E])) && (-1 === L || A < L) && (L = A)
      }
      ;(-1 !== (S = -1 === L ? y.lastIndexOf("@") : y.lastIndexOf("@", L)) &&
        ((T = y.slice(0, S)), (y = y.slice(S + 1)), (this.auth = decodeURIComponent(T))),
        (L = -1))
      for (E = 0; E < d.length; E++) {
        var A
        ;-1 !== (A = y.indexOf(d[E])) && (-1 === L || A < L) && (L = A)
      }
      ;(-1 === L && (L = y.length),
        (this.host = y.slice(0, L)),
        (y = y.slice(L)),
        this.parseHost(),
        (this.hostname = this.hostname || ""))
      var I = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1]
      if (!I)
        for (var M = this.hostname.split(/\./), P = ((E = 0), M.length); E < P; E++) {
          var O = M[E]
          if (O && !O.match(p)) {
            for (var R = "", k = 0, N = O.length; k < N; k++)
              O.charCodeAt(k) > 127 ? (R += "x") : (R += O[k])
            if (!R.match(p)) {
              var D = M.slice(0, E),
                B = M.slice(E + 1),
                F = O.match(f)
              ;(F && (D.push(F[1]), B.unshift(F[2])),
                B.length && (y = "/" + B.join(".") + y),
                (this.hostname = D.join(".")))
              break
            }
          }
        }
      ;(this.hostname.length > 255
        ? (this.hostname = "")
        : (this.hostname = this.hostname.toLowerCase()),
        I || (this.hostname = i.toASCII(this.hostname)))
      var U = this.port ? ":" + this.port : "",
        G = this.hostname || ""
      ;((this.host = G + U),
        (this.href += this.host),
        I &&
          ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)),
          "/" !== y[0] && (y = "/" + y)))
    }
    if (!_[w])
      for (E = 0, P = c.length; E < P; E++) {
        var j = c[E]
        if (-1 !== y.indexOf(j)) {
          var H = encodeURIComponent(j)
          ;(H === j && (H = escape(j)), (y = y.split(j).join(H)))
        }
      }
    var V = y.indexOf("#")
    ;-1 !== V && ((this.hash = y.substr(V)), (y = y.slice(0, V)))
    var Z = y.indexOf("?")
    if (
      (-1 !== Z
        ? ((this.search = y.substr(Z)),
          (this.query = y.substr(Z + 1)),
          t && (this.query = v.parse(this.query)),
          (y = y.slice(0, Z)))
        : t && ((this.search = ""), (this.query = {})),
      y && (this.pathname = y),
      m[w] && this.hostname && !this.pathname && (this.pathname = "/"),
      this.pathname || this.search)
    ) {
      U = this.pathname || ""
      var z = this.search || ""
      this.path = U + z
    }
    return ((this.href = this.format()), this)
  }),
    (o.prototype.format = function () {
      var e = this.auth || ""
      e && ((e = (e = encodeURIComponent(e)).replace(/%3A/i, ":")), (e += "@"))
      var t = this.protocol || "",
        n = this.pathname || "",
        i = this.hash || "",
        o = false,
        a = ""
      ;(this.host
        ? (o = e + this.host)
        : this.hostname &&
          ((o =
            e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]")),
          this.port && (o += ":" + this.port)),
        this.query &&
          r.isObject(this.query) &&
          Object.keys(this.query).length &&
          (a = v.stringify(this.query)))
      var s = this.search || (a && "?" + a) || ""
      return (
        t && ":" !== t.substr(-1) && (t += ":"),
        this.slashes || ((!t || m[t]) && false !== o)
          ? ((o = "//" + (o || "")), n && "/" !== n.charAt(0) && (n = "/" + n))
          : o || (o = ""),
        i && "#" !== i.charAt(0) && (i = "#" + i),
        s && "?" !== s.charAt(0) && (s = "?" + s),
        t +
          o +
          (n = n.replace(/[?#]/g, function (e) {
            return encodeURIComponent(e)
          })) +
          (s = s.replace("#", "%23")) +
          i
      )
    }),
    (o.prototype.resolve = function (e) {
      return this.resolveObject(y(e, false, true)).format()
    }),
    (o.prototype.resolveObject = function (e) {
      if (r.isString(e)) {
        var t = new o()
        ;(t.parse(e, false, true), (e = t))
      }
      for (var n = new o(), i = Object.keys(this), a = 0; a < i.length; a++) {
        var s = i[a]
        n[s] = this[s]
      }
      if (((n.hash = e.hash), "" === e.href)) return ((n.href = n.format()), n)
      if (e.slashes && !e.protocol) {
        for (var u = Object.keys(e), l = 0; l < u.length; l++) {
          var c = u[l]
          "protocol" !== c && (n[c] = e[c])
        }
        return (
          m[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"),
          (n.href = n.format()),
          n
        )
      }
      if (e.protocol && e.protocol !== n.protocol) {
        if (!m[e.protocol]) {
          for (var d = Object.keys(e), h = 0; h < d.length; h++) {
            var p = d[h]
            n[p] = e[p]
          }
          return ((n.href = n.format()), n)
        }
        if (((n.protocol = e.protocol), e.host || g[e.protocol])) n.pathname = e.pathname
        else {
          for (var f = (e.pathname || "").split("/"); f.length && !(e.host = f.shift()); );
          ;(e.host || (e.host = ""),
            e.hostname || (e.hostname = ""),
            "" !== f[0] && f.unshift(""),
            f.length < 2 && f.unshift(""),
            (n.pathname = f.join("/")))
        }
        if (
          ((n.search = e.search),
          (n.query = e.query),
          (n.host = e.host || ""),
          (n.auth = e.auth),
          (n.hostname = e.hostname || e.host),
          (n.port = e.port),
          n.pathname || n.search)
        ) {
          var _ = n.pathname || "",
            v = n.search || ""
          n.path = _ + v
        }
        return ((n.slashes = n.slashes || e.slashes), (n.href = n.format()), n)
      }
      var y = n.pathname && "/" === n.pathname.charAt(0),
        C = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
        b = C || y || (n.host && e.pathname),
        w = b,
        x = (n.pathname && n.pathname.split("/")) || [],
        T = ((f = (e.pathname && e.pathname.split("/")) || []), n.protocol && !m[n.protocol])
      if (
        (T &&
          ((n.hostname = ""),
          (n.port = null),
          n.host && ("" === x[0] ? (x[0] = n.host) : x.unshift(n.host)),
          (n.host = ""),
          e.protocol &&
            ((e.hostname = null),
            (e.port = null),
            e.host && ("" === f[0] ? (f[0] = e.host) : f.unshift(e.host)),
            (e.host = null)),
          (b = b && ("" === f[0] || "" === x[0]))),
        C)
      )
        ((n.host = e.host || "" === e.host ? e.host : n.host),
          (n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname),
          (n.search = e.search),
          (n.query = e.query),
          (x = f))
      else if (f.length)
        (x || (x = []), x.pop(), (x = x.concat(f)), (n.search = e.search), (n.query = e.query))
      else if (!r.isNullOrUndefined(e.search)) {
        if (T)
          ((n.hostname = n.host = x.shift()),
            (I = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) &&
              ((n.auth = I.shift()), (n.host = n.hostname = I.shift())))
        return (
          (n.search = e.search),
          (n.query = e.query),
          (r.isNull(n.pathname) && r.isNull(n.search)) ||
            (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
          (n.href = n.format()),
          n
        )
      }
      if (!x.length)
        return (
          (n.pathname = null),
          n.search ? (n.path = "/" + n.search) : (n.path = null),
          (n.href = n.format()),
          n
        )
      for (
        var S = x.slice(-1)[0],
          L = ((n.host || e.host || x.length > 1) && ("." === S || ".." === S)) || "" === S,
          E = 0,
          A = x.length;
        A >= 0;
        A--
      )
        "." === (S = x[A])
          ? x.splice(A, 1)
          : ".." === S
            ? (x.splice(A, 1), E++)
            : E && (x.splice(A, 1), E--)
      if (!b && !w) for (; E--; E) x.unshift("..")
      ;(!b || "" === x[0] || (x[0] && "/" === x[0].charAt(0)) || x.unshift(""),
        L && "/" !== x.join("/").substr(-1) && x.push(""))
      var I,
        M = "" === x[0] || (x[0] && "/" === x[0].charAt(0))
      T &&
        ((n.hostname = n.host = M ? "" : x.length ? x.shift() : ""),
        (I = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) &&
          ((n.auth = I.shift()), (n.host = n.hostname = I.shift())))
      return (
        (b = b || (n.host && x.length)) && !M && x.unshift(""),
        x.length ? (n.pathname = x.join("/")) : ((n.pathname = null), (n.path = null)),
        (r.isNull(n.pathname) && r.isNull(n.search)) ||
          (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
        (n.auth = e.auth || n.auth),
        (n.slashes = n.slashes || e.slashes),
        (n.href = n.format()),
        n
      )
    }),
    (o.prototype.parseHost = function () {
      var e = this.host,
        t = s.exec(e)
      ;(t &&
        (":" !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))),
        e && (this.hostname = e))
    }))
}
