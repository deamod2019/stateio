/**
 * Webpack Module #42182
 * @exports Mediator
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Mediator = void 0))
  var i = n(70655),
    r = n(86700),
    o = n(84194),
    a = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.viewListenersMap = {}), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.destroy = function () {
          ;(this.removeAllViewListeners(),
            delete this.view,
            o.log.trace("destroyed", this),
            e.prototype.destroy.call(this))
        }),
        (t.prototype.setView = function (e) {
          ;((this.view = e), this.initialize())
        }),
        (t.prototype.addViewListener = function (e, t) {
          if (!this.view)
            throw new Error("View listener can't be added when view not initialized!!!")
          this.mapListenerToEvent(e, t, this.viewListenersMap)
            ? this.view.on(e, t)
            : o.log.error("View listener " + t + " for event " + e + " is already exists")
        }),
        (t.prototype.addViewListenerOnce = function (e, t) {
          var n = this,
            i = function (r) {
              ;(t.call(n, r), n.removeViewListener(e, i))
            }
          this.addViewListener(e, i)
        }),
        (t.prototype.removeViewListener = function (e, t) {
          var n
          this.unMapListenerToEvent(e, t, this.viewListenersMap)
            ? null === (n = this.view) || void 0 === n || n.off(e, t)
            : o.log.error(t + " is not a listener for event " + e)
        }),
        (t.prototype.removeViewListeners = function (e) {
          var t,
            n,
            r,
            a = this.viewListenersMap[e]
          if (a) {
            try {
              for (var s = i.__values(a), u = s.next(); !u.done; u = s.next()) {
                var l = u.value
                null === (r = this.view) || void 0 === r || r.off(e, l)
              }
            } catch (e) {
              t = { error: e }
            } finally {
              try {
                u && !u.done && (n = s.return) && n.call(s)
              } finally {
                if (t) throw t.error
              }
            }
            delete this.viewListenersMap[e]
          } else o.log.error("There are no any listeners for event " + e)
        }),
        (t.prototype.removeAllViewListeners = function () {
          var e, t
          try {
            for (
              var n = i.__values(Object.keys(this.viewListenersMap)), r = n.next();
              !r.done;
              r = n.next()
            ) {
              var o = r.value
              this.removeViewListeners(o)
            }
          } catch (t) {
            e = { error: t }
          } finally {
            try {
              r && !r.done && (t = n.return) && t.call(n)
            } finally {
              if (e) throw e.error
            }
          }
          this.viewListenersMap = {}
        }),
        (t.prototype.bindDebug = function () {
          var e,
            t = null === (e = this.view) || void 0 === e ? void 0 : e.debugId
          void 0 !== t && (window[t] = this.view)
        }),
        (t.prototype.unbindDebug = function () {
          var e,
            t = null === (e = this.view) || void 0 === e ? void 0 : e.debugId
          void 0 !== t && delete window[t]
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(n(44656).GlobalEventProvider)
  t.Mediator = a
}
