/**
 * Webpack Module #44018
 * @exports GlobalEventProvider
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.GlobalEventProvider = void 0))
  var i = n(70655),
    r = n(86178),
    o = n(86700),
    a = n(96488),
    s = (function () {
      function e() {
        this.listenersMap = {}
      }
      return (
        (e.prototype.destroy = function () {
          this.removeAllListeners()
        }),
        (e.prototype.dispatch = function (e, t) {
          this._dispatcher.emit(e, t)
        }),
        (e.prototype.addListener = function (e, t) {
          this.mapListenerToEvent(e, t, this.listenersMap)
            ? this._dispatcher.on(e, t, this)
            : console.warn("Listener " + t + " for event " + e + " is already exists")
        }),
        (e.prototype.addListenerOnce = function (e, t) {
          var n = this,
            i = function (r) {
              ;(t.call(n, r), n.removeListener(e, i))
            }
          this.addListener(e, i)
        }),
        (e.prototype.removeListener = function (e, t) {
          this.unMapListenerToEvent(e, t, this.listenersMap)
            ? this._dispatcher.off(e, t, this)
            : console.warn(t + " is not a listener for event " + e)
        }),
        (e.prototype.removeListeners = function (e) {
          var t,
            n,
            r = this.listenersMap[e]
          if (r) {
            try {
              for (var o = i.__values(r), a = o.next(); !a.done; a = o.next()) {
                var s = a.value
                this._dispatcher.off(e, s, this)
              }
            } catch (e) {
              t = { error: e }
            } finally {
              try {
                a && !a.done && (n = o.return) && n.call(o)
              } finally {
                if (t) throw t.error
              }
            }
            delete this.listenersMap[e]
          } else console.warn("There are no any listeners for event " + e)
        }),
        (e.prototype.removeAllListeners = function () {
          var e, t
          try {
            for (
              var n = i.__values(Object.keys(this.listenersMap)), r = n.next();
              !r.done;
              r = n.next()
            ) {
              var o = r.value
              this.removeListeners(o)
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
          this.listenersMap = {}
        }),
        (e.prototype.hasListeners = function () {
          return 0 !== Object.keys(this.listenersMap).length
        }),
        (e.prototype.mapListenerToEvent = function (e, t, n) {
          var i = n[e]
          if (i) {
            if (i.indexOf(t) > -1) return !1
            i.push(t)
          } else ((i = [t]), (n[e] = i))
          return !0
        }),
        (e.prototype.unMapListenerToEvent = function (e, t, n) {
          var i = n[e]
          if (i) {
            var r = i.indexOf(t)
            if (r > -1) return (i.splice(r, 1), 0 === i.length && delete n[e], !0)
          }
          return !1
        }),
        i.__decorate(
          [(0, o.inject)(r.TypesCore.dispatcher), i.__metadata("design:type", a.EventDispatcher)],
          e.prototype,
          "_dispatcher",
          void 0,
        ),
        (e = i.__decorate([(0, o.injectable)()], e))
      )
    })()
  t.GlobalEventProvider = s
}
