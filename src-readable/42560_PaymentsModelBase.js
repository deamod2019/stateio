/**
 * Webpack Module #42560
 * @exports PaymentsModelBase
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.PaymentsModelBase = undefined))
  var i = n(70655) /* 70655__mod */,
    r = i.__importStar(n(90505) /* 90505__mod */),
    o = n(86700) /* 86700_MetadataReader */,
    a = n(84194) /* 84194__mod */,
    s = n(44656) /* 44656__mod */,
    u = n(86178) /* 86178__mod */,
    l = function (e, t) {
      return i.__awaiter(undefined, undefined, undefined, function () {
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
          return i.__awaiter(this, undefined, undefined, function () {
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
          return false
        }),
        (e.prototype.consume = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return [2, false]
            })
          })
        }),
        (e.prototype.purchase = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return [2, false]
            })
          })
        }),
        (e.prototype.buy = function (e, t) {
          return (
            undefined === t && (t = false),
            i.__awaiter(this, undefined, undefined, function () {
              return i.__generator(this, function (e) {
                throw new Error("Method not implemented.")
              })
            })
          )
        }),
        Object.defineProperty(e.prototype, "supported", {
          get: function () {
            return false
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.validateRemotely = function (e, t) {
          return i.__awaiter(this, undefined, undefined, function () {
            var n, o, a
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  ;((n = true), (i.label = 1))
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
          ;(undefined === n && (n = 1),
            undefined === i && (i = ""),
            null === (r = (0, s.lazyGet)(u.TypesAnalytics.tracker)) ||
              undefined === r ||
              r.track("".concat(i).concat(e), n, t))
        }),
        (e = i.__decorate([(0, o.injectable)()], e))
      )
    })()
  t.PaymentsModelBase = c
}
