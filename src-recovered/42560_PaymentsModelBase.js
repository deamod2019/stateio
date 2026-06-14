/**
 * Webpack Module #42560
 * @exports PaymentsModelBase
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.PaymentsModelBase = void 0))
  var i = n(70655),
    r = i.__importStar(n(90505)),
    o = n(86700),
    a = n(84194),
    s = n(44656),
    u = n(86178),
    l = function (e, t) {
      return i.__awaiter(void 0, void 0, void 0, function () {
        var n
        return i.__generator(this, function (i) {
          switch (i.label) {
            case 0:
              return (
                i.trys.push([0, 3, , 4]),
                [
                  4,
                  fetch(e, {
                    method: "POST",
                    headers: { Accept: "application/json", "Content-Type": "application/json" },
                    body: JSON.stringify(t),
                  }),
                ]
              )
            case 1:
              return [4, i.sent().json()]
            case 2:
              return [2, i.sent()]
            case 3:
              return ((n = i.sent()), a.log.warn(n), [3, 4])
            case 4:
              return [2, {}]
          }
        })
      })
    },
    c = (function () {
      function e() {}
      return (
        (e.prototype.init = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return [2]
            })
          })
        }),
        (e.prototype.getById = function (e) {}),
        (e.prototype.getAll = function () {
          return []
        }),
        (e.prototype.isPaid = function (e) {
          return !1
        }),
        (e.prototype.consume = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return [2, !1]
            })
          })
        }),
        (e.prototype.purchase = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              return [2, !1]
            })
          })
        }),
        (e.prototype.buy = function (e, t) {
          return (
            void 0 === t && (t = !1),
            i.__awaiter(this, void 0, void 0, function () {
              return i.__generator(this, function (e) {
                throw new Error("Method not implemented.")
              })
            })
          )
        }),
        Object.defineProperty(e.prototype, "supported", {
          get: function () {
            return !1
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.validateRemotely = function (e, t) {
          return i.__awaiter(this, void 0, void 0, function () {
            var n, o, a
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  ;((n = !0), (i.label = 1))
                case 1:
                  return (i.trys.push([1, 3, , 4]), [4, l(e, t)])
                case 2:
                  return (
                    (o = i.sent()),
                    this.trackPurchase("validate", o.success),
                    (n = !!o.success),
                    [3, 4]
                  )
                case 3:
                  return ((a = i.sent()), r.captureException(a), [3, 4])
                case 4:
                  return [2, n]
              }
            })
          })
        }),
        (e.prototype.viewItems = function (e) {
          a.log.warn("viewItems not implemented")
        }),
        (e.prototype.trackEcommerce = function (e, t) {
          this.trackEvent(e, {
            currency: t.currency,
            value: t.value,
            items: [{ item_id: t.item_id, item_name: t.item_id, price: t.value }],
          })
        }),
        (e.prototype.trackPurchase = function (e, t) {
          this.trackEvent(e, t, 1, "purchase_")
        }),
        (e.prototype.trackEvent = function (e, t, n, i) {
          var r
          ;(void 0 === n && (n = 1),
            void 0 === i && (i = ""),
            null === (r = (0, s.lazyGet)(u.TypesAnalytics.tracker)) ||
              void 0 === r ||
              r.track("".concat(i).concat(e), n, t))
        }),
        (e = i.__decorate([(0, o.injectable)()], e))
      )
    })()
  t.PaymentsModelBase = c
}
