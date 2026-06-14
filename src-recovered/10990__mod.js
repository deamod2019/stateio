/**
 * Webpack Module #10990
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(n.r(t),
    n.d(t, {
      Back: () => d.Back,
      Bounce: () => d.Bounce,
      CSSPlugin: () => Te,
      Circ: () => d.Circ,
      Cubic: () => d.Cubic,
      Elastic: () => d.Elastic,
      Expo: () => d.Expo,
      Linear: () => d.Linear,
      Power0: () => d.Power0,
      Power1: () => d.Power1,
      Power2: () => d.Power2,
      Power3: () => d.Power3,
      Power4: () => d.Power4,
      Quad: () => d.Quad,
      Quart: () => d.Quart,
      Quint: () => d.Quint,
      Sine: () => d.Sine,
      SteppedEase: () => d.SteppedEase,
      Strong: () => d.Strong,
      TimelineLite: () => d.TimelineLite,
      TimelineMax: () => d.TimelineMax,
      TweenLite: () => d.TweenLite,
      TweenMax: () => Le,
      default: () => Se,
      gsap: () => Se,
    }))
  var i,
    r,
    o,
    a,
    s,
    u,
    l,
    c,
    d = n(25317),
    h = {},
    p = 180 / Math.PI,
    f = Math.PI / 180,
    _ = Math.atan2,
    g = /([A-Z])/g,
    m = /(left|right|width|margin|padding|x)/i,
    v = /[\s,\(]\S/,
    y = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
    C = function (e, t) {
      return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
    },
    b = function (e, t) {
      return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
    },
    w = function (e, t) {
      return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
    },
    x = function (e, t) {
      var n = t.s + t.c * e
      t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t)
    },
    T = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t)
    },
    S = function (e, t) {
      return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
    },
    L = function (e, t, n) {
      return (e.style[t] = n)
    },
    E = function (e, t, n) {
      return e.style.setProperty(t, n)
    },
    A = function (e, t, n) {
      return (e._gsap[t] = n)
    },
    I = function (e, t, n) {
      return (e._gsap.scaleX = e._gsap.scaleY = n)
    },
    M = function (e, t, n, i, r) {
      var o = e._gsap
      ;((o.scaleX = o.scaleY = n), o.renderTransform(r, o))
    },
    P = function (e, t, n, i, r) {
      var o = e._gsap
      ;((o[t] = n), o.renderTransform(r, o))
    },
    O = "transform",
    R = O + "Origin",
    k = function (e, t) {
      var n = this,
        i = this.target,
        r = i.style
      if (e in h) {
        if (
          ((this.tfm = this.tfm || {}),
          "transform" !== e &&
            (~(e = y[e] || e).indexOf(",")
              ? e.split(",").forEach(function (e) {
                  return (n.tfm[e] = J(i, e))
                })
              : (this.tfm[e] = i._gsap.x ? i._gsap[e] : J(i, e))),
          this.props.indexOf(O) >= 0)
        )
          return
        ;(i._gsap.svg &&
          ((this.svgo = i.getAttribute("data-svg-origin")), this.props.push(R, t, "")),
          (e = O))
      }
      ;(r || t) && this.props.push(e, t, r[e])
    },
    N = function (e) {
      e.translate &&
        (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
    },
    D = function () {
      var e,
        t,
        n = this.props,
        i = this.target,
        r = i.style,
        o = i._gsap
      for (e = 0; e < n.length; e += 3)
        n[e + 1]
          ? (i[n[e]] = n[e + 2])
          : n[e + 2]
            ? (r[n[e]] = n[e + 2])
            : r.removeProperty(n[e].replace(g, "-$1").toLowerCase())
      if (this.tfm) {
        for (t in this.tfm) o[t] = this.tfm[t]
        ;(o.svg && (o.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")),
          !(e = l()) || e.isStart || r[O] || (N(r), (o.uncache = 1)))
      }
    },
    B = function (e, t) {
      var n = { target: e, props: [], revert: D, save: k }
      return (
        t &&
          t.split(",").forEach(function (e) {
            return n.save(e)
          }),
        n
      )
    },
    F = function (e, t) {
      var n = r.createElementNS
        ? r.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e)
        : r.createElement(e)
      return n.style ? n : r.createElement(e)
    },
    U = function e(t, n, i) {
      var r = getComputedStyle(t)
      return (
        r[n] ||
        r.getPropertyValue(n.replace(g, "-$1").toLowerCase()) ||
        r.getPropertyValue(n) ||
        (!i && e(t, j(n) || n, 1)) ||
        ""
      )
    },
    G = "O,Moz,ms,Ms,Webkit".split(","),
    j = function (e, t, n) {
      var i = (t || s).style,
        r = 5
      if (e in i && !n) return e
      for (e = e.charAt(0).toUpperCase() + e.substr(1); r-- && !(G[r] + e in i); );
      return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? G[r] : "") + e
    },
    H = function () {
      "undefined" != typeof window &&
        window.document &&
        ((i = window),
        (r = i.document),
        (o = r.documentElement),
        (s = F("div") || { style: {} }),
        F("div"),
        (O = j(O)),
        (R = O + "Origin"),
        (s.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
        (c = !!j("perspective")),
        (l = d.gsap.core.reverting),
        (a = 1))
    },
    V = function e(t) {
      var n,
        i = F(
          "svg",
          (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg",
        ),
        r = this.parentNode,
        a = this.nextSibling,
        s = this.style.cssText
      if ((o.appendChild(i), i.appendChild(this), (this.style.display = "block"), t))
        try {
          ;((n = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = e))
        } catch (e) {}
      else this._gsapBBox && (n = this._gsapBBox())
      return (
        r && (a ? r.insertBefore(this, a) : r.appendChild(this)),
        o.removeChild(i),
        (this.style.cssText = s),
        n
      )
    },
    Z = function (e, t) {
      for (var n = t.length; n--; ) if (e.hasAttribute(t[n])) return e.getAttribute(t[n])
    },
    z = function (e) {
      var t
      try {
        t = e.getBBox()
      } catch (n) {
        t = V.call(e, !0)
      }
      return (
        (t && (t.width || t.height)) || e.getBBox === V || (t = V.call(e, !0)),
        !t || t.width || t.x || t.y
          ? t
          : {
              x: +Z(e, ["x", "cx", "x1"]) || 0,
              y: +Z(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      )
    },
    Y = function (e) {
      return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !z(e))
    },
    W = function (e, t) {
      if (t) {
        var n = e.style
        ;(t in h && t !== R && (t = O),
          n.removeProperty
            ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) || (t = "-" + t),
              n.removeProperty(t.replace(g, "-$1").toLowerCase()))
            : n.removeAttribute(t))
      }
    },
    X = function (e, t, n, i, r, o) {
      var a = new d.PropTween(e._pt, t, n, 0, 1, o ? S : T)
      return ((e._pt = a), (a.b = i), (a.e = r), e._props.push(n), a)
    },
    q = { deg: 1, rad: 1, turn: 1 },
    K = { grid: 1, flex: 1 },
    $ = function e(t, n, i, o) {
      var a,
        u,
        l,
        c,
        p = parseFloat(i) || 0,
        f = (i + "").trim().substr((p + "").length) || "px",
        _ = s.style,
        g = m.test(n),
        v = "svg" === t.tagName.toLowerCase(),
        y = (v ? "client" : "offset") + (g ? "Width" : "Height"),
        C = 100,
        b = "px" === o,
        w = "%" === o
      return o === f || !p || q[o] || q[f]
        ? p
        : ("px" !== f && !b && (p = e(t, n, i, "px")),
          (c = t.getCTM && Y(t)),
          (!w && "%" !== f) || (!h[n] && !~n.indexOf("adius"))
            ? ((_[g ? "width" : "height"] = C + (b ? f : o)),
              (u = ~n.indexOf("adius") || ("em" === o && t.appendChild && !v) ? t : t.parentNode),
              c && (u = (t.ownerSVGElement || {}).parentNode),
              (u && u !== r && u.appendChild) || (u = r.body),
              (l = u._gsap) && w && l.width && g && l.time === d._ticker.time && !l.uncache
                ? (0, d._round)((p / l.width) * C)
                : ((w || "%" === f) && !K[U(u, "display")] && (_.position = U(t, "position")),
                  u === t && (_.position = "static"),
                  u.appendChild(s),
                  (a = s[y]),
                  u.removeChild(s),
                  (_.position = "absolute"),
                  g && w && (((l = (0, d._getCache)(u)).time = d._ticker.time), (l.width = u[y])),
                  (0, d._round)(b ? (a * p) / C : a && p ? (C / a) * p : 0)))
            : ((a = c ? t.getBBox()[g ? "width" : "height"] : t[y]),
              (0, d._round)(w ? (p / a) * C : (p / 100) * a)))
    },
    J = function (e, t, n, i) {
      var r
      return (
        a || H(),
        t in y && "transform" !== t && ~(t = y[t]).indexOf(",") && (t = t.split(",")[0]),
        h[t] && "transform" !== t
          ? ((r = le(e, i)),
            (r =
              "transformOrigin" !== t
                ? r[t]
                : r.svg
                  ? r.origin
                  : ce(U(e, R)) + " " + r.zOrigin + "px"))
          : (!(r = e.style[t]) || "auto" === r || i || ~(r + "").indexOf("calc(")) &&
            (r =
              (ne[t] && ne[t](e, t, n)) ||
              U(e, t) ||
              (0, d._getProperty)(e, t) ||
              ("opacity" === t ? 1 : 0)),
        n && !~(r + "").trim().indexOf(" ") ? $(e, t, r, n) + n : r
      )
    },
    Q = function (e, t, n, i) {
      if (!n || "none" === n) {
        var r = j(t, e, 1),
          o = r && U(e, r, 1)
        o && o !== n ? ((t = r), (n = o)) : "borderColor" === t && (n = U(e, "borderTopColor"))
      }
      var a,
        s,
        u,
        l,
        c,
        h,
        p,
        f,
        _,
        g,
        m,
        v = new d.PropTween(this._pt, e.style, t, 0, 1, d._renderComplexString),
        y = 0,
        C = 0
      if (
        ((v.b = n),
        (v.e = i),
        (n += ""),
        "auto" === (i += "") && ((e.style[t] = i), (i = U(e, t) || i), (e.style[t] = n)),
        (a = [n, i]),
        (0, d._colorStringFilter)(a),
        (i = a[1]),
        (u = (n = a[0]).match(d._numWithUnitExp) || []),
        (i.match(d._numWithUnitExp) || []).length)
      ) {
        for (; (s = d._numWithUnitExp.exec(i)); )
          ((p = s[0]),
            (_ = i.substring(y, s.index)),
            c
              ? (c = (c + 1) % 5)
              : ("rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5)) || (c = 1),
            p !== (h = u[C++] || "") &&
              ((l = parseFloat(h) || 0),
              (m = h.substr((l + "").length)),
              "=" === p.charAt(1) && (p = (0, d._parseRelative)(l, p) + m),
              (f = parseFloat(p)),
              (g = p.substr((f + "").length)),
              (y = d._numWithUnitExp.lastIndex - g.length),
              g || ((g = g || d._config.units[t] || m), y === i.length && ((i += g), (v.e += g))),
              m !== g && (l = $(e, t, h, g) || 0),
              (v._pt = {
                _next: v._pt,
                p: _ || 1 === C ? _ : ",",
                s: l,
                c: f - l,
                m: (c && c < 4) || "zIndex" === t ? Math.round : 0,
              })))
        v.c = y < i.length ? i.substring(y, i.length) : ""
      } else v.r = "display" === t && "none" === i ? S : T
      return (d._relExp.test(i) && (v.e = 0), (this._pt = v), v)
    },
    ee = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
    te = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var n,
          i,
          r,
          o = t.t,
          a = o.style,
          s = t.u,
          u = o._gsap
        if ("all" === s || !0 === s) ((a.cssText = ""), (i = 1))
        else
          for (r = (s = s.split(",")).length; --r > -1; )
            ((n = s[r]), h[n] && ((i = 1), (n = "transformOrigin" === n ? R : O)), W(o, n))
        i &&
          (W(o, O), u && (u.svg && o.removeAttribute("transform"), le(o, 1), (u.uncache = 1), N(a)))
      }
    },
    ne = {
      clearProps: function (e, t, n, i, r) {
        if ("isFromStart" !== r.data) {
          var o = (e._pt = new d.PropTween(e._pt, t, n, 0, 0, te))
          return ((o.u = i), (o.pr = -10), (o.tween = r), e._props.push(n), 1)
        }
      },
    },
    ie = [1, 0, 0, 1, 0, 0],
    re = {},
    oe = function (e) {
      return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
    },
    ae = function (e) {
      var t = U(e, O)
      return oe(t) ? ie : t.substr(7).match(d._numExp).map(d._round)
    },
    se = function (e, t) {
      var n,
        i,
        r,
        a,
        s = e._gsap || (0, d._getCache)(e),
        u = e.style,
        l = ae(e)
      return s.svg && e.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (l = [(r = e.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(
            ",",
          )
          ? ie
          : l
        : (l !== ie ||
            e.offsetParent ||
            e === o ||
            s.svg ||
            ((r = u.display),
            (u.display = "block"),
            ((n = e.parentNode) && e.offsetParent) ||
              ((a = 1), (i = e.nextElementSibling), o.appendChild(e)),
            (l = ae(e)),
            r ? (u.display = r) : W(e, "display"),
            a && (i ? n.insertBefore(e, i) : n ? n.appendChild(e) : o.removeChild(e))),
          t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
    },
    ue = function (e, t, n, i, r, o) {
      var a,
        s,
        u,
        l = e._gsap,
        c = r || se(e, !0),
        d = l.xOrigin || 0,
        h = l.yOrigin || 0,
        p = l.xOffset || 0,
        f = l.yOffset || 0,
        _ = c[0],
        g = c[1],
        m = c[2],
        v = c[3],
        y = c[4],
        C = c[5],
        b = t.split(" "),
        w = parseFloat(b[0]) || 0,
        x = parseFloat(b[1]) || 0
      ;(n
        ? c !== ie &&
          (s = _ * v - g * m) &&
          ((u = w * (-g / s) + x * (_ / s) - (_ * C - g * y) / s),
          (w = w * (v / s) + x * (-m / s) + (m * C - v * y) / s),
          (x = u))
        : ((w = (a = z(e)).x + (~b[0].indexOf("%") ? (w / 100) * a.width : w)),
          (x = a.y + (~(b[1] || b[0]).indexOf("%") ? (x / 100) * a.height : x))),
        i || (!1 !== i && l.smooth)
          ? ((y = w - d),
            (C = x - h),
            (l.xOffset = p + (y * _ + C * m) - y),
            (l.yOffset = f + (y * g + C * v) - C))
          : (l.xOffset = l.yOffset = 0),
        (l.xOrigin = w),
        (l.yOrigin = x),
        (l.smooth = !!i),
        (l.origin = t),
        (l.originIsAbsolute = !!n),
        (e.style[R] = "0px 0px"),
        o &&
          (X(o, l, "xOrigin", d, w),
          X(o, l, "yOrigin", h, x),
          X(o, l, "xOffset", p, l.xOffset),
          X(o, l, "yOffset", f, l.yOffset)),
        e.setAttribute("data-svg-origin", w + " " + x))
    },
    le = function (e, t) {
      var n = e._gsap || new d.GSCache(e)
      if ("x" in n && !t && !n.uncache) return n
      var i,
        r,
        o,
        a,
        s,
        u,
        l,
        h,
        g,
        m,
        v,
        y,
        C,
        b,
        w,
        x,
        T,
        S,
        L,
        E,
        A,
        I,
        M,
        P,
        k,
        N,
        D,
        B,
        F,
        G,
        j,
        H,
        V = e.style,
        Z = n.scaleX < 0,
        z = "px",
        W = "deg",
        X = getComputedStyle(e),
        q = U(e, R) || "0"
      return (
        (i = r = o = u = l = h = g = m = v = 0),
        (a = s = 1),
        (n.svg = !(!e.getCTM || !Y(e))),
        X.translate &&
          (("none" === X.translate && "none" === X.scale && "none" === X.rotate) ||
            (V[O] =
              ("none" !== X.translate
                ? "translate3d(" + (X.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") "
                : "") +
              ("none" !== X.rotate ? "rotate(" + X.rotate + ") " : "") +
              ("none" !== X.scale ? "scale(" + X.scale.split(" ").join(",") + ") " : "") +
              ("none" !== X[O] ? X[O] : "")),
          (V.scale = V.rotate = V.translate = "none")),
        (b = se(e, n.svg)),
        n.svg &&
          (n.uncache
            ? ((k = e.getBBox()),
              (q = n.xOrigin - k.x + "px " + (n.yOrigin - k.y) + "px"),
              (P = ""))
            : (P = !t && e.getAttribute("data-svg-origin")),
          ue(e, P || q, !!P || n.originIsAbsolute, !1 !== n.smooth, b)),
        (y = n.xOrigin || 0),
        (C = n.yOrigin || 0),
        b !== ie &&
          ((S = b[0]),
          (L = b[1]),
          (E = b[2]),
          (A = b[3]),
          (i = I = b[4]),
          (r = M = b[5]),
          6 === b.length
            ? ((a = Math.sqrt(S * S + L * L)),
              (s = Math.sqrt(A * A + E * E)),
              (u = S || L ? _(L, S) * p : 0),
              (g = E || A ? _(E, A) * p + u : 0) && (s *= Math.abs(Math.cos(g * f))),
              n.svg && ((i -= y - (y * S + C * E)), (r -= C - (y * L + C * A))))
            : ((H = b[6]),
              (G = b[7]),
              (D = b[8]),
              (B = b[9]),
              (F = b[10]),
              (j = b[11]),
              (i = b[12]),
              (r = b[13]),
              (o = b[14]),
              (l = (w = _(H, F)) * p),
              w &&
                ((P = I * (x = Math.cos(-w)) + D * (T = Math.sin(-w))),
                (k = M * x + B * T),
                (N = H * x + F * T),
                (D = I * -T + D * x),
                (B = M * -T + B * x),
                (F = H * -T + F * x),
                (j = G * -T + j * x),
                (I = P),
                (M = k),
                (H = N)),
              (h = (w = _(-E, F)) * p),
              w &&
                ((x = Math.cos(-w)),
                (j = A * (T = Math.sin(-w)) + j * x),
                (S = P = S * x - D * T),
                (L = k = L * x - B * T),
                (E = N = E * x - F * T)),
              (u = (w = _(L, S)) * p),
              w &&
                ((P = S * (x = Math.cos(w)) + L * (T = Math.sin(w))),
                (k = I * x + M * T),
                (L = L * x - S * T),
                (M = M * x - I * T),
                (S = P),
                (I = k)),
              l && Math.abs(l) + Math.abs(u) > 359.9 && ((l = u = 0), (h = 180 - h)),
              (a = (0, d._round)(Math.sqrt(S * S + L * L + E * E))),
              (s = (0, d._round)(Math.sqrt(M * M + H * H))),
              (w = _(I, M)),
              (g = Math.abs(w) > 2e-4 ? w * p : 0),
              (v = j ? 1 / (j < 0 ? -j : j) : 0)),
          n.svg &&
            ((P = e.getAttribute("transform")),
            (n.forceCSS = e.setAttribute("transform", "") || !oe(U(e, O))),
            P && e.setAttribute("transform", P))),
        Math.abs(g) > 90 &&
          Math.abs(g) < 270 &&
          (Z
            ? ((a *= -1), (g += u <= 0 ? 180 : -180), (u += u <= 0 ? 180 : -180))
            : ((s *= -1), (g += g <= 0 ? 180 : -180))),
        (t = t || n.uncache),
        (n.x =
          i -
          ((n.xPercent =
            i &&
            ((!t && n.xPercent) || (Math.round(e.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
            ? (e.offsetWidth * n.xPercent) / 100
            : 0) +
          z),
        (n.y =
          r -
          ((n.yPercent =
            r &&
            ((!t && n.yPercent) || (Math.round(e.offsetHeight / 2) === Math.round(-r) ? -50 : 0)))
            ? (e.offsetHeight * n.yPercent) / 100
            : 0) +
          z),
        (n.z = o + z),
        (n.scaleX = (0, d._round)(a)),
        (n.scaleY = (0, d._round)(s)),
        (n.rotation = (0, d._round)(u) + W),
        (n.rotationX = (0, d._round)(l) + W),
        (n.rotationY = (0, d._round)(h) + W),
        (n.skewX = g + W),
        (n.skewY = m + W),
        (n.transformPerspective = v + z),
        (n.zOrigin = parseFloat(q.split(" ")[2]) || 0) && (V[R] = ce(q)),
        (n.xOffset = n.yOffset = 0),
        (n.force3D = d._config.force3D),
        (n.renderTransform = n.svg ? me : c ? ge : he),
        (n.uncache = 0),
        n
      )
    },
    ce = function (e) {
      return (e = e.split(" "))[0] + " " + e[1]
    },
    de = function (e, t, n) {
      var i = (0, d.getUnit)(t)
      return (0, d._round)(parseFloat(t) + parseFloat($(e, "x", n + "px", i))) + i
    },
    he = function (e, t) {
      ;((t.z = "0px"), (t.rotationY = t.rotationX = "0deg"), (t.force3D = 0), ge(e, t))
    },
    pe = "0deg",
    fe = "0px",
    _e = ") ",
    ge = function (e, t) {
      var n = t || this,
        i = n.xPercent,
        r = n.yPercent,
        o = n.x,
        a = n.y,
        s = n.z,
        u = n.rotation,
        l = n.rotationY,
        c = n.rotationX,
        d = n.skewX,
        h = n.skewY,
        p = n.scaleX,
        _ = n.scaleY,
        g = n.transformPerspective,
        m = n.force3D,
        v = n.target,
        y = n.zOrigin,
        C = "",
        b = ("auto" === m && e && 1 !== e) || !0 === m
      if (y && (c !== pe || l !== pe)) {
        var w,
          x = parseFloat(l) * f,
          T = Math.sin(x),
          S = Math.cos(x)
        ;((x = parseFloat(c) * f),
          (w = Math.cos(x)),
          (o = de(v, o, T * w * -y)),
          (a = de(v, a, -Math.sin(x) * -y)),
          (s = de(v, s, S * w * -y + y)))
      }
      ;(g !== fe && (C += "perspective(" + g + _e),
        (i || r) && (C += "translate(" + i + "%, " + r + "%) "),
        (b || o !== fe || a !== fe || s !== fe) &&
          (C +=
            s !== fe || b
              ? "translate3d(" + o + ", " + a + ", " + s + ") "
              : "translate(" + o + ", " + a + _e),
        u !== pe && (C += "rotate(" + u + _e),
        l !== pe && (C += "rotateY(" + l + _e),
        c !== pe && (C += "rotateX(" + c + _e),
        (d === pe && h === pe) || (C += "skew(" + d + ", " + h + _e),
        (1 === p && 1 === _) || (C += "scale(" + p + ", " + _ + _e),
        (v.style[O] = C || "translate(0, 0)"))
    },
    me = function (e, t) {
      var n,
        i,
        r,
        o,
        a,
        s = t || this,
        u = s.xPercent,
        l = s.yPercent,
        c = s.x,
        h = s.y,
        p = s.rotation,
        _ = s.skewX,
        g = s.skewY,
        m = s.scaleX,
        v = s.scaleY,
        y = s.target,
        C = s.xOrigin,
        b = s.yOrigin,
        w = s.xOffset,
        x = s.yOffset,
        T = s.forceCSS,
        S = parseFloat(c),
        L = parseFloat(h)
      ;((p = parseFloat(p)),
        (_ = parseFloat(_)),
        (g = parseFloat(g)) && ((_ += g = parseFloat(g)), (p += g)),
        p || _
          ? ((p *= f),
            (_ *= f),
            (n = Math.cos(p) * m),
            (i = Math.sin(p) * m),
            (r = Math.sin(p - _) * -v),
            (o = Math.cos(p - _) * v),
            _ &&
              ((g *= f),
              (a = Math.tan(_ - g)),
              (r *= a = Math.sqrt(1 + a * a)),
              (o *= a),
              g && ((a = Math.tan(g)), (n *= a = Math.sqrt(1 + a * a)), (i *= a))),
            (n = (0, d._round)(n)),
            (i = (0, d._round)(i)),
            (r = (0, d._round)(r)),
            (o = (0, d._round)(o)))
          : ((n = m), (o = v), (i = r = 0)),
        ((S && !~(c + "").indexOf("px")) || (L && !~(h + "").indexOf("px"))) &&
          ((S = $(y, "x", c, "px")), (L = $(y, "y", h, "px"))),
        (C || b || w || x) &&
          ((S = (0, d._round)(S + C - (C * n + b * r) + w)),
          (L = (0, d._round)(L + b - (C * i + b * o) + x))),
        (u || l) &&
          ((a = y.getBBox()),
          (S = (0, d._round)(S + (u / 100) * a.width)),
          (L = (0, d._round)(L + (l / 100) * a.height))),
        (a = "matrix(" + n + "," + i + "," + r + "," + o + "," + S + "," + L + ")"),
        y.setAttribute("transform", a),
        T && (y.style[O] = a))
    },
    ve = function (e, t, n, i, r) {
      var o,
        a,
        s = 360,
        u = (0, d._isString)(r),
        l = parseFloat(r) * (u && ~r.indexOf("rad") ? p : 1) - i,
        c = i + l + "deg"
      return (
        u &&
          ("short" === (o = r.split("_")[1]) && (l %= s) !== l % 180 && (l += l < 0 ? s : -360),
          "cw" === o && l < 0
            ? (l = ((l + 36e9) % s) - ~~(l / s) * s)
            : "ccw" === o && l > 0 && (l = ((l - 36e9) % s) - ~~(l / s) * s)),
        (e._pt = a = new d.PropTween(e._pt, t, n, i, l, b)),
        (a.e = c),
        (a.u = "deg"),
        e._props.push(n),
        a
      )
    },
    ye = function (e, t) {
      for (var n in t) e[n] = t[n]
      return e
    },
    Ce = function (e, t, n) {
      var i,
        r,
        o,
        a,
        s,
        u,
        l,
        c = ye({}, n._gsap),
        p = n.style
      for (r in (c.svg
        ? ((o = n.getAttribute("transform")),
          n.setAttribute("transform", ""),
          (p[O] = t),
          (i = le(n, 1)),
          W(n, O),
          n.setAttribute("transform", o))
        : ((o = getComputedStyle(n)[O]), (p[O] = t), (i = le(n, 1)), (p[O] = o)),
      h))
        (o = c[r]) !== (a = i[r]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
          ((s = (0, d.getUnit)(o) !== (l = (0, d.getUnit)(a)) ? $(n, r, o, l) : parseFloat(o)),
          (u = parseFloat(a)),
          (e._pt = new d.PropTween(e._pt, i, r, s, u - s, C)),
          (e._pt.u = l || 0),
          e._props.push(r))
      ye(i, c)
    }
  ;(0, d._forEachName)("padding,margin,Width,Radius", function (e, t) {
    var n = "Top",
      i = "Right",
      r = "Bottom",
      o = "Left",
      a = (t < 3 ? [n, i, r, o] : [n + o, n + i, r + i, r + o]).map(function (n) {
        return t < 2 ? e + n : "border" + n + e
      })
    ne[t > 1 ? "border" + e : e] = function (e, t, n, i, r) {
      var o, s
      if (arguments.length < 4)
        return (
          (o = a.map(function (t) {
            return J(e, t, n)
          })),
          5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s
        )
      ;((o = (i + "").split(" ")),
        (s = {}),
        a.forEach(function (e, t) {
          return (s[e] = o[t] = o[t] || o[((t - 1) / 2) | 0])
        }),
        e.init(t, s, r))
    }
  })
  var be,
    we,
    xe,
    Te = {
      name: "css",
      register: H,
      targetTest: function (e) {
        return e.style && e.nodeType
      },
      init: function (e, t, n, i, r) {
        var o,
          s,
          u,
          l,
          c,
          p,
          f,
          _,
          g,
          m,
          b,
          T,
          S,
          L,
          E,
          A,
          I,
          M,
          P,
          k,
          N = this._props,
          D = e.style,
          F = n.vars.startAt
        for (f in (a || H(),
        (this.styles = this.styles || B(e)),
        (A = this.styles.props),
        (this.tween = n),
        t))
          if (
            "autoRound" !== f &&
            ((s = t[f]), !d._plugins[f] || !(0, d._checkPlugin)(f, t, n, i, e, r))
          )
            if (
              ((c = typeof s),
              (p = ne[f]),
              "function" === c && (c = typeof (s = s.call(n, i, e, r))),
              "string" === c && ~s.indexOf("random(") && (s = (0, d._replaceRandom)(s)),
              p)
            )
              p(this, e, f, s, n) && (E = 1)
            else if ("--" === f.substr(0, 2))
              ((o = (getComputedStyle(e).getPropertyValue(f) + "").trim()),
                (s += ""),
                (d._colorExp.lastIndex = 0),
                d._colorExp.test(o) || ((_ = (0, d.getUnit)(o)), (g = (0, d.getUnit)(s))),
                g ? _ !== g && (o = $(e, f, o, g) + g) : _ && (s += _),
                this.add(D, "setProperty", o, s, i, r, 0, 0, f),
                N.push(f),
                A.push(f, 0, D[f]))
            else if ("undefined" !== c) {
              if (
                (F && f in F
                  ? ((o = "function" == typeof F[f] ? F[f].call(n, i, e, r) : F[f]),
                    (0, d._isString)(o) && ~o.indexOf("random(") && (o = (0, d._replaceRandom)(o)),
                    (0, d.getUnit)(o + "") ||
                      (o += d._config.units[f] || (0, d.getUnit)(J(e, f)) || ""),
                    "=" === (o + "").charAt(1) && (o = J(e, f)))
                  : (o = J(e, f)),
                (l = parseFloat(o)),
                (m = "string" === c && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)),
                (u = parseFloat(s)),
                f in y &&
                  ("autoAlpha" === f &&
                    (1 === l && "hidden" === J(e, "visibility") && u && (l = 0),
                    A.push("visibility", 0, D.visibility),
                    X(
                      this,
                      D,
                      "visibility",
                      l ? "inherit" : "hidden",
                      u ? "inherit" : "hidden",
                      !u,
                    )),
                  "scale" !== f &&
                    "transform" !== f &&
                    ~(f = y[f]).indexOf(",") &&
                    (f = f.split(",")[0])),
                (b = f in h))
              )
                if (
                  (this.styles.save(f),
                  T ||
                    (((S = e._gsap).renderTransform && !t.parseTransform) ||
                      le(e, t.parseTransform),
                    (L = !1 !== t.smoothOrigin && S.smooth),
                    ((T = this._pt =
                      new d.PropTween(this._pt, D, O, 0, 1, S.renderTransform, S, 0, -1)).dep = 1)),
                  "scale" === f)
                )
                  ((this._pt = new d.PropTween(
                    this._pt,
                    S,
                    "scaleY",
                    l,
                    (m ? (0, d._parseRelative)(l, m + u) : u) - l || 0,
                    C,
                  )),
                    (this._pt.u = 0),
                    N.push("scaleY", f),
                    (f += "X"))
                else {
                  if ("transformOrigin" === f) {
                    ;(A.push(R, 0, D[R]),
                      (M = void 0),
                      (P = void 0),
                      (k = void 0),
                      (M = (I = s).split(" ")),
                      (P = M[0]),
                      (k = M[1] || "50%"),
                      ("top" !== P && "bottom" !== P && "left" !== k && "right" !== k) ||
                        ((I = P), (P = k), (k = I)),
                      (M[0] = ee[P] || P),
                      (M[1] = ee[k] || k),
                      (s = M.join(" ")),
                      S.svg
                        ? ue(e, s, 0, L, 0, this)
                        : ((g = parseFloat(s.split(" ")[2]) || 0) !== S.zOrigin &&
                            X(this, S, "zOrigin", S.zOrigin, g),
                          X(this, D, f, ce(o), ce(s))))
                    continue
                  }
                  if ("svgOrigin" === f) {
                    ue(e, s, 1, L, 0, this)
                    continue
                  }
                  if (f in re) {
                    ve(this, S, f, l, m ? (0, d._parseRelative)(l, m + s) : s)
                    continue
                  }
                  if ("smoothOrigin" === f) {
                    X(this, S, "smooth", S.smooth, s)
                    continue
                  }
                  if ("force3D" === f) {
                    S[f] = s
                    continue
                  }
                  if ("transform" === f) {
                    Ce(this, s, e)
                    continue
                  }
                }
              else f in D || (f = j(f) || f)
              if (b || ((u || 0 === u) && (l || 0 === l) && !v.test(s) && f in D))
                (u || (u = 0),
                  (_ = (o + "").substr((l + "").length)) !==
                    (g = (0, d.getUnit)(s) || (f in d._config.units ? d._config.units[f] : _)) &&
                    (l = $(e, f, o, g)),
                  (this._pt = new d.PropTween(
                    this._pt,
                    b ? S : D,
                    f,
                    l,
                    (m ? (0, d._parseRelative)(l, m + u) : u) - l,
                    b || ("px" !== g && "zIndex" !== f) || !1 === t.autoRound ? C : x,
                  )),
                  (this._pt.u = g || 0),
                  _ !== g && "%" !== g && ((this._pt.b = o), (this._pt.r = w)))
              else if (f in D) Q.call(this, e, f, o, m ? m + s : s)
              else {
                if (!(f in e)) {
                  ;(0, d._missingPlugin)(f, s)
                  continue
                }
                this.add(e, f, o || e[f], m ? m + s : s, i, r)
              }
              ;(b || (f in D ? A.push(f, 0, D[f]) : A.push(f, 1, o || e[f])), N.push(f))
            }
        E && (0, d._sortPropTweensByPriority)(this)
      },
      render: function (e, t) {
        if (t.tween._time || !l()) for (var n = t._pt; n; ) (n.r(e, n.d), (n = n._next))
        else t.styles.revert()
      },
      get: J,
      aliases: y,
      getSetter: function (e, t, n) {
        var i = y[t]
        return (
          i && i.indexOf(",") < 0 && (t = i),
          t in h && t !== R && (e._gsap.x || J(e, "x"))
            ? n && u === n
              ? "scale" === t
                ? I
                : A
              : (u = n || {}) && ("scale" === t ? M : P)
            : e.style && !(0, d._isUndefined)(e.style[t])
              ? L
              : ~t.indexOf("-")
                ? E
                : (0, d._getSetter)(e, t)
        )
      },
      core: { _removeProperty: W, _getMatrix: se },
    }
  ;((d.gsap.utils.checkPrefix = j),
    (d.gsap.core.getStyleSaver = B),
    (be = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent"),
    (we = "rotation,rotationX,rotationY,skewX,skewY"),
    (xe = (0, d._forEachName)(
      be +
        "," +
        we +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (e) {
        h[e] = 1
      },
    )),
    (0, d._forEachName)(we, function (e) {
      ;((d._config.units[e] = "deg"), (re[e] = 1))
    }),
    (y[xe[13]] = be + "," + we),
    (0, d._forEachName)(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (e) {
        var t = e.split(":")
        y[t[1]] = xe[t[0]]
      },
    ),
    (0, d._forEachName)(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (e) {
        d._config.units[e] = "px"
      },
    ),
    d.gsap.registerPlugin(Te))
  var Se = d.gsap.registerPlugin(Te) || d.gsap,
    Le = Se.core.Tween
}
