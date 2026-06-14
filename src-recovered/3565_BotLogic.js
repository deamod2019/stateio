/**
 * Webpack Module #3565
 * @exports BotLogic
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.BotLogic = void 0))
  var i = n(70655),
    r = n(84194),
    o = n(44656),
    a = n(25583),
    s = n(95781),
    u = n(86700),
    l = n(59474),
    c = (function () {
      function e(e, t) {
        ;(void 0 === e && (e = 1e3),
          void 0 === t && (t = Date.now()),
          (this.delayMs = e),
          (this._startTime = t))
      }
      return (
        Object.defineProperty(e.prototype, "running", {
          get: function () {
            return Date.now() - this._startTime < this.delayMs
          },
          enumerable: !1,
          configurable: !0,
        }),
        e
      )
    })(),
    d = (function () {
      function e() {
        ;((this._lastCalculationTimestamp = Date.now()),
          (this._sendingDelay = { x: 0.1, y: 0.5 }),
          (this._executingDecision = !1))
      }
      var t
      return (
        Object.defineProperty(e.prototype, "initialized", {
          get: function () {
            return void 0 !== this._preset
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function (e) {
          return ((this._preset = e), this._logic.init(this._preset), this)
        }),
        (e.prototype.decide = function (e) {
          if (
            this._preset &&
            ((this._building = e),
            this._startDelay || (this._startDelay = new c(1e3 * r.Random.range(3))),
            !this._startDelay.running && !this._logic.busy)
          )
            return (
              this.isReadyForNextDecision &&
                ((this._lastCalculationTimestamp = Date.now()),
                this._logic.calculate(e),
                (this._executingDecision = !1)),
              this._logic.getLastCommand()
            )
        }),
        (e.prototype.executeDecision = function (e) {
          var t = this
          if (!this._executingDecision)
            if (e.Type === a.DecisionType.Move) {
              ;((this._executingDecision = !0),
                i.__awaiter(t, void 0, void 0, function () {
                  var t, n, a, s, u, l, c, d
                  return i.__generator(this, function (h) {
                    switch (h.label) {
                      case 0:
                        ;((t = e.Subject), (n = e.Objects), (h.label = 1))
                      case 1:
                        ;(h.trys.push([1, 6, 7, 8]),
                          (a = i.__values(n)),
                          (s = a.next()),
                          (h.label = 2))
                      case 2:
                        return s.done
                          ? [3, 5]
                          : (u = s.value) == t || u.owner !== this._building.owner
                            ? [3, 4]
                            : (this._building.sendTo(t),
                              [
                                4,
                                o.WaitAction.sec(
                                  r.Random.rangeFloat(this._sendingDelay.x, this._sendingDelay.y),
                                ),
                              ])
                      case 3:
                        if ((h.sent(), !this._executingDecision)) return [3, 5]
                        h.label = 4
                      case 4:
                        return ((s = a.next()), [3, 2])
                      case 5:
                        return [3, 8]
                      case 6:
                        return ((l = h.sent()), (c = { error: l }), [3, 8])
                      case 7:
                        try {
                          s && !s.done && (d = a.return) && d.call(a)
                        } finally {
                          if (c) throw c.error
                        }
                        return [7]
                      case 8:
                        return ((this._executingDecision = !1), [2])
                    }
                  })
                }))
            } else r.log.info("executeDecision", a.DecisionType[e.Type])
        }),
        Object.defineProperty(e.prototype, "isReadyForNextDecision", {
          get: function () {
            return (
              Date.now() - this._lastCalculationTimestamp >=
              1e3 * this._preset.waitTimeBetweenDecisions
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.terminate = function () {
          this._logic.terminate()
        }),
        i.__decorate(
          [
            (0, u.inject)(s.TypesGame.botCalculationLogic),
            i.__metadata(
              "design:type",
              "function" == typeof (t = void 0 !== l.BotCalculationLogic && l.BotCalculationLogic)
                ? t
                : Object,
            ),
          ],
          e.prototype,
          "_logic",
          void 0,
        ),
        (e = i.__decorate([(0, u.injectable)()], e))
      )
    })()
  t.BotLogic = d
}
